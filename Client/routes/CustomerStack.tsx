import { createStackNavigator } from "@react-navigation/stack";
import QrScanner from "../components/customer/pages/QrScanner";
import Scanner from "../components/customer/pages/Scanner";
import UserPayment from "../components/customer/pages/UserPayment";
import PaymentStatus from "../components/customer/pages/PaymentStatus";
import Stepper from "../components/customer/customerStatus/Stepper";
import CompletedStatus from "../components/customer/pages/CompletedStatus";
import SignUp from "../components/customer/pages/SignUp";
import Login from "../components/customer/pages/Login";
import FeedbackScreen from "../components/customer/pages/FeedbackScreen";
import reviewHistory from "../components/customer/pages/reviewHistory";
import ThankYou from "../components/customer/pages/ThankYou";
import PassowrdOtpVerification from "../components/customer/pages/PassowrdOtpVerification";
import ForgetPassword from "../components/customer/pages/ForgetPassword";
import { NavigationContainer } from "@react-navigation/native";
//import Scanner from "../components/customer/pages/Scanner";
import loginScreen from "../components/customer/pages/loginScreen";
import registerScreen from "../components/customer/pages/registerScreen";
import HomeScreen from "../components/customer/pages/HomeScreen";
import HomePage from "../components/customer/pages/homePage";
import CreateJob from "../components/customer/pages/createJob";
import Pending from "../components/customer/pages/PendingPage";
import MyJobs from "../components/customer/pages/MyJobs";

const Stack = createStackNavigator();

export default function CustomerStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="homePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createPage"
          component={CreateJob}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pending"
          component={Pending}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyJobs"
          component={MyJobs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="stepper"
          component={Stepper}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="paymentStatus" component={PaymentStatus} />
        <Stack.Screen
          name="qrHome"
          component={QrScanner}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="scanner" component={Scanner} />
        <Stack.Screen name="payment" component={UserPayment} />
        <Stack.Screen name="reviewStatus" component={CompletedStatus} />
        <Stack.Screen name="feedback" component={FeedbackScreen} />
        <Stack.Screen name="reviewHistory" component={reviewHistory} />
        <Stack.Screen name="thankyou" component={ThankYou} />
        
        <Stack.Screen name="reviewHistory" component={reviewHistory} />
      </Stack.Navigator>

  );
}
