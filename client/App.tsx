import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Stepper from "./components/customer/customerStatus/Stepper";
import UserPayment from "./components/customer/pages/UserPayment";
import { SafeAreaProvider } from "react-native-safe-area-context";
import QrScanner from "./components/customer/pages/QrScanner";
import { createStackNavigator } from "@react-navigation/stack";
import Scanner from "./components/customer/pages/Scanner";
import Navigator from './routes/scanner.route'
import CardPayment from "./components/customer/pages/CardPayment";
import CashPayment from "./components/customer/pages/CashPayment";
import PaymentStatus from "./components/customer/pages/PaymentStatus";
import FeedbackScreen from "./components/customer/pages/FeedbackScreen";
import Login from "./components/customer/pages/Login";
import SignUp from "./components/customer/pages/SignUp";

import ReviewHistory from "./components/customer/pages/reviewHistory";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    
    <>
    {/* <Navigator/> */}
    

      <NativeBaseProvider>
        <View style={styles.status}>
          <StatusBar />
        </View>
        <ReviewHistory />
      </NativeBaseProvider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    paddingBottom: 50,
  },
});
