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
    .required("Required"),
});

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function Login() {
  const {login} = useContext(AuthContext)
    const navigation = useNavigation();
  const password = useRef(null);
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: { email: "", password: "" },
      onSubmit: async(values) =>{
        login(values.email,values.password)
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
      <FontAwesome name="users"  color='#FFC436' size={100}/>
      </View>
      <Text style={{ color: "#223e4b", fontSize: 30, paddingBottom: 60, paddingTop: 10 , fontWeight:'bold', fontStyle:'italic'}}>
        WELCOME BACK
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" , paddingTop:50}}>
        <TextInput
          icon="mail"
          placeholder="Enter your email"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          error={errors.email}
          touched={touched.email}
          onSubmitEditing={() => password.current?.focus()}
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
          ref={password}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      <View style={styles.button}>
      <ButtonWithBackground title="Login"  color="#FFC436" onPress={handleSubmit} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={{fontStyle:'italic'}}>Don't have an account?SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('forgetPassword')}>
          <Text style={{fontStyle:'italic'}}>Forget Password</Text>
          </TouchableOpacity>
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