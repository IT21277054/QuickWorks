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
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
});

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function ForgetPassword() {
const navigation = useNavigation();
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: { email: "",password: ""},
      onSubmit: async(values) =>{
       try{
        await axios.post(
            "https://bw10fhxj-8000.asse.devtunnels.ms/api/account/sendOTP",
           {email: values.email})
           .then(async res=>{
            navigation.navigate('passwordOtp',{email:values.email,password:values.password})
          })
       }catch(err:any){
        Alert.alert(
            "error",
            'An Error Occures',
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
       Reset Your Password 
      </Text>
      <View>
        
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%",paddingTop:70 }}>
        <TextInput
          icon="mail"
          placeholder="Enter the Email"
          autoCompleteType="email"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          error={errors.email}
          touched={touched.email}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
        <TextInput
          icon="key"
          placeholder="Enter your password"
          secureTextEntry
          autoCompleteType="password"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
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