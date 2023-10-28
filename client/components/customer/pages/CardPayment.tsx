import React, { useContext } from "react";
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
import { AuthContext } from "../../../auth/AuthContext";
import jwtDecode from "jwt-decode";

const PaymentSchema = Yup.object().shape({
  accountName: Yup.string(),
  accountNo: Yup.number().required("Required"),
  bank: Yup.string(),
  amount: Yup.number().required("Required"),
});

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function CardPayment({route}) {
 const {data} = route.params
  const {userToken} = useContext(AuthContext)
  const decodedUser = jwtDecode(userToken)
  console.log(decodedUser)
  const navigation = useNavigation();
  const [paymentDtails, setPaymentDetails] = React.useState({
    worker_id: "",
    workerName: "",
    bankName: "",
    accountNo: 0,
    jobId: "",
  });
  let myArray = data.split(",");


  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =

  
    useFormik({
      validationSchema: PaymentSchema,
      initialValues: {
        accountName:'',
        accountNo:0,
        bank:'',
        amount:0,
      },
      onSubmit: async (values) => {
        try {
          console.log("here");
          const dto = {
            holder_id: myArray[0],
            user_id: decodedUser.id,
            job_id: myArray[4],
            account_name: myArray[1],
            account_number: myArray[3],
            bankName: myArray[2],
            amount: values.amount,
          };

          const response = await axios
            .post(
              "https://bw10fhxj-8000.asse.devtunnels.ms/api/payment/createPayment",
              dto
            )
            .then(async (response) => {
              const jobId = '653ab56e20e414cd87e75e22'
              if(response.status == 200){
                await axios
                .put(
                  `https://bw10fhxj-8000.asse.devtunnels.ms/api/job/updateJobStatus/${jobId}`,
                  {jobStatus:'Paid'}
                )
                .then(navigation.navigate("stepper",{jobId:jobId}));
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
               value={myArray[1]}
              placeholder="Enter Account Holder Name"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onBlur={handleBlur("accountName")}
              error={errors.accountName}
              touched={touched.accountName}
              editable={false}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="credit-card"
              value={myArray[3]}
              placeholder="Enter Account Number"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onBlur={handleBlur("accountNo")}
              error={errors.accountNo}
              touched={touched.accountNo}
              editable={false}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="home"
              value={myArray[2]}
              placeholder="Enter Bank Name"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onBlur={handleBlur("bank")}
              error={errors.bank}
              touched={touched.bank}
              editable={false}
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
