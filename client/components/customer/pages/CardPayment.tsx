import React from "react";
import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Alert,
} from "react-native";
import TextInput from "../customerItems/TextInput";
import ButtonWithBackground from "../customerStatus/ButtonWithBackground";
import image1 from "../../../assets/blueCard.png";
import bdImage from "../../../assets/bg.png";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const PaymentSchema = Yup.object().shape({
  accountName: Yup.string().required("Required"),
  accountNo: Yup.string().required("Required"),
  bank: Yup.string().required("Required"),
  amount: Yup.number().required("Required"),
});

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function CardPayment() {
  const navigation = useNavigation();

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: PaymentSchema,
      initialValues: {
        accountName: "",
        accountNo: "",
        bank: "",
        amount: "",
      },
      onSubmit: async (values) => {
        try {
          console.log("here");
          const dto = {
            holder_id: "5657585759789",
            user_id: "",
            job_id: "",
            account_name: values.accountName,
            account_number: values.accountNo,
            bankName: values.bank,
            amount: values.amount,
          };

          const response = await axios
            .post(
              "https://bw10fhxj-8000.asse.devtunnels.ms/api/payment/createPayment",
              dto
            )
            .then(async (response) => {

              if(response.status == 200){
                await axios
                .post(
                  "https://bw10fhxj-8000.asse.devtunnels.ms/api/job/updateJobStatus",
                  {statsu:'paid',jobId:''}
                )
                .then(navigation.navigate("stepper"));
              }
              
            });
        } catch (err: any) {
          const error = err.response.data.err;
          console.log(error);
          Alert.alert(
            "error",
            error,
            [
              {
                text: "Cancel",
                onPress: () => Alert.alert("Cancel Pressed"),
                style: "cancel",
              },
            ],
            {
              cancelable: true,
              onDismiss: () =>
                Alert.alert(
                  "This alert was dismissed by tapping outside of the alert dialog."
                ),
            }
          );
        }
      },
    });
  return (
    <ScrollView>
      <ImageBackground
        source={bdImage}
        resizeMode="stretch"
        style={styles.image}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 75,
          }}
        >
          <Image source={image1} style={{ width: 300, height: 300 }} />
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="user"
              placeholder="Enter Account Holder Name"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onChangeText={handleChange("accountName")}
              onBlur={handleBlur("accountName")}
              error={errors.accountName}
              touched={touched.accountName}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="credit-card"
              placeholder="Enter Account Number"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onChangeText={handleChange("accountNo")}
              onBlur={handleBlur("accountNo")}
              error={errors.accountNo}
              touched={touched.accountNo}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="home"
              placeholder="Enter Bank Name"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onChangeText={handleChange("bank")}
              onBlur={handleBlur("bank")}
              error={errors.bank}
              touched={touched.bank}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="credit"
              placeholder="Enter Amount"
              autoCapitalize="none"
              keyboardType="numeric"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
              onChangeText={handleChange("amount")}
              onBlur={handleBlur("amount")}
              error={errors.amount}
              touched={touched.amount}
              onSubmitEditing={() => handleSubmit()}
            />
          </View>
          <ButtonWithBackground
            title="Pay"
            color="#FFC436"
            onPress={handleSubmit}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: screenHeight,
    width: screenWidth,
  },
});
