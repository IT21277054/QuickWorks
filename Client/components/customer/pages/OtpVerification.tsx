import React,  {useContext} from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, Alert, TouchableOpacity } from "react-native";
import TextInput from "../customerItems/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import ButtonWithBackground from "../customerStatus/ButtonWithBackground";
import bdImage from "../../../assets/bg.png";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../../auth/AuthContext";

const LoginSchema = Yup.object().shape({
    otp: Yup.number().required("Required")
  
});

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function OtpVerification({ route }) {
    const { email } = route.params;
    console.log(email)
const navigation = useNavigation();
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: { otp: ""},
      onSubmit: async(values) =>{
       try{
            await axios.post(
            "https://bw10fhxj-8000.asse.devtunnels.ms/api/account/verifyOTP",
            {email:email,otp:values.otp}
          ).then(async res=>{
            await axios.put(
                `https://bw10fhxj-8000.asse.devtunnels.ms/api/account/changeToActive/${email}`,
            )

            navigation.navigate('signin')
          })
       }catch(err:any){
        Alert.alert(
            "error",
            'OTP is  Invalid',
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
    }
    });

  return (
    <View>
    <ImageBackground source={bdImage} resizeMode= 'stretch' style={styles.image}>
    <View
      style={{
        marginTop:110,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    <View>
      <FontAwesome name="envelope"  color='#FFC436' size={100}/>
      </View>
      <Text style={{ color: "#223e4b", fontSize: 30, paddingBottom: 60, paddingTop: 10 , fontWeight:'bold', fontStyle:'italic'}}>
        Enter Your OTP
      </Text>
      <View>
        
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%",paddingTop:70 }}>
        <TextInput
          icon="key"
          placeholder="Enter the OTP"
          autoCompleteType="otp"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
          onChangeText={handleChange("otp")}
          onBlur={handleBlur("otp")}
          error={errors.otp}
          touched={touched.otp}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      <Text style = {{fontSize:13,fontStyle:'italic'}}>
        Enter the otp that have been sent to this {email}
      </Text>
      <View style={styles.button}>
      <ButtonWithBackground title="Submit"  color="#FFC436" onPress={handleSubmit} />
      </View>
    </View>
    </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
    button: {
        paddingTop:40,
        alignItems:'center',
        paddingBottom:8
      },
      image: {
        height: screenHeight, 
        width: screenWidth, 
     
      },
})