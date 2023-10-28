import { createStackNavigator } from "@react-navigation/stack";
import QrScanner from "../components/customer/pages/QrScanner";
import { NavigationContainer } from "@react-navigation/native";
//import Scanner from "../components/customer/pages/Scanner";
import loginScreen from "../components/customer/pages/loginScreen";
import registerScreen from "../components/customer/pages/registerScreen";
import PaymentStatus from "../components/customer/pages/PaymentStatus";
import HomeScreen from "../components/customer/pages/HomeScreen";
import HomePage from "../components/customer/pages/homePage";
import CreateJob from "../components/customer/pages/createJob";
import Pending from "../components/customer/pages/PendingPage";
import MyJobs from "../components/customer/pages/MyJobs";

const Stack = createStackNavigator();

export default function CustomerStack() {
  return (
    <NavigationContainer>
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
        {/* <Stack.Screen name="registerScreen" component={registerScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* <Stack.Screen name="loginScreen" component={loginScreen} />
        <Stack.Screen name="registerScreen" component={registerScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* <Stack.Screen
          name="stepper"
          component={Stepper}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="paymentStatus" component={PaymentStatus} />
        <Stack.Screen
          name="qrHome"
          component={QrScanner}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen name="scanner" component={Scanner} /> */}
        {/* <Stack.Screen name="payment" component={UserPayment} />
        <Stack.Screen name="reviewStatus" component={CompletedStatus} />
        <Stack.Screen name="reviewHistory" component={reviewHistory} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
