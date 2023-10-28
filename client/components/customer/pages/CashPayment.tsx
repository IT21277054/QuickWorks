import React, { useContext } from 'react';
import { Button, Text, View, Image, ScrollView, StyleSheet, ImageBackground, Dimensions, Alert } from 'react-native';
import TextInput from '../customerItems/TextInput';
import ButtonWithBackground from '../customerStatus/ButtonWithBackground';
import image1 from "../../../assets/cash.png";
import bdImage from "../../../assets/bg.png";
import { useNavigation } from '@react-navigation/native';
import * as Yup from "yup";
import axios from 'axios';
import { useFormik } from 'formik';
import { AuthContext } from '../../../auth/AuthContext';
import jwtDecode from 'jwt-decode';

const PaymentSchema = Yup.object().shape({
  eaccountNamemail: Yup.string().email("Invalid email").required("Required"),
  accountNo: Yup.string().required("Required"),
  bank:Yup.string().required("Required"),
  amount:Yup.number().required("Required")
});

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function CashPayment({route}) {
    const navigation = useNavigation();
    const {data} = route.params
  const {userToken} = useContext(AuthContext)
  const decodedUser = jwtDecode(userToken)
  let myArray = data.split(",");
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
          const dto = {
            holder_id: myArray[0],
            user_id:decodedUser.id,
            job_id:myArray[4],
              account_name: '',
              account_number: 'Cash Payment',
              bankName: '',
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
              // .then(navigation.navigate("stepper"));
            }
        })

        } catch (err: any) {
          const error = err.response.data.err;
          console.log(err);
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
        <ImageBackground source={bdImage} resizeMode= 'stretch' style={styles.image}>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:75
      }}
    >
        <Image source={image1} style={{ width: 300, height: 300 }}/>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='credit'
          placeholder='Enter Amount'
          autoCapitalize='none'
          keyboardType='numeric'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
        />
      </View>
      <ButtonWithBackground
          title="Pay Now"
          color="#FFC436"
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
})