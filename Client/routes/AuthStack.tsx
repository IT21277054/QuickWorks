import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../components/customer/pages/SignUp";
import Login from "../components/customer/pages/Login";
import OtpVerification from "../components/customer/pages/OtpVerification";
import PassowrdOtpVerification from "../components/customer/pages/PassowrdOtpVerification";
import ForgetPassword from "../components/customer/pages/ForgetPassword";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          component={OtpVerification}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signin"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="passwordOtp" component={PassowrdOtpVerification} />
        <Stack.Screen name="forgetPassword" component={ForgetPassword} />
       </Stack.Navigator>
  );
}
