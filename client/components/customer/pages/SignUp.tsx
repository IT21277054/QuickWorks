import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";
import TextInput from "../customerItems/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import ButtonWithBackground from "../customerStatus/ButtonWithBackground";
import bdImage from "../../../assets/bg.png";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

const LoginSchema = Yup.object().shape({
  firstname: Yup.string().required("Full name is required"),
  lastName: Yup.string().required("Full name is required"),
  phoneNumber: Yup.string()
    .matches(/(0)(\d){9}\b/, "Enter a valid phone number")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function SignUp() {
    const navigation = useNavigation();
  const confirmPassword = useRef(null);
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: {
        firstname: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: async (values) => {
        try {
          const dto = {
            fname: values.firstname,
            lname: values.lastName,
            mobile: values.phoneNumber,
            email: values.email,
            password: values.password,
          };

          const response = await axios.post(
            "https://bw10fhxj-8000.asse.devtunnels.ms/api/account/createAccount",
            dto
          ).then( async res =>{
            await axios.post(
              "https://bw10fhxj-8000.asse.devtunnels.ms/api/account/sendOTP",
             {email: values.email}
            )
            navigation.navigate('otp',{email:values.email} )
          }
          )
          .catch(err=>{
            Alert.alert(
              "error",
              'This email account has an Account',
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
      })

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
          }}
        >
          <View>
            <FontAwesome name="unlock-alt" color="#FFC436" size={100} />
          </View>
          <Text
            style={{
              color: "#223e4b",
              fontSize: 30,
              paddingBottom: 60,
              paddingTop: 10,
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            WELCOME
          </Text>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="new-message"
              placeholder="Enter your First Name "
              autoCapitalize="true"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onChangeText={handleChange("firstname")}
              onBlur={handleBlur("firstname")}
              error={errors.firstname}
              touched={touched.firstname}
              onSubmitEditing={() => confirmPassword.current?.focus()}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="new-message"
              placeholder="Enter your last Name"
              autoCapitalize
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              error={errors.lastName}
              touched={touched.lastName}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="phone"
              placeholder="Enter your Phone Number"
              autoCapitalize="none"
              keyboardType="numeric"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
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
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="key"
              placeholder="Enter your password"
              secureTextEntry
              autoCapitalize="none"
              autoCompleteType="password"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="key"
              placeholder="Enter your Confirm Password"
              secureTextEntry
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
              ref={confirmPassword}
              onSubmitEditing={() => handleSubmit()}
            />
          </View>
          <View style={styles.button}>
            <ButtonWithBackground
              title="SignUp"
              color="#FFC436"
              onPress={handleSubmit}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('signin')}>
          <Text>Alraedy have an account?LogIn</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 30,
    alignItems: "center",
    paddingBottom: 5,
  },
  image: {
    height: screenHeight,
    width: screenWidth,
  },
});
