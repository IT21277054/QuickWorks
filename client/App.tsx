import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Stepper from "./components/customer/customerStatus/Stepper";
import UserPayment from "./components/customer/pages/UserPayment";
import { SafeAreaProvider } from "react-native-safe-area-context";
import QrScanner from "./components/customer/pages/QrScanner";
import { createStackNavigator } from "@react-navigation/stack";
import Scanner from "./components/customer/pages/Scanner";
import Navigator from "./routes/CustomerStack";
import CardPayment from "./components/customer/pages/CardPayment";
import CashPayment from "./components/customer/pages/CashPayment";
import PaymentStatus from "./components/customer/pages/PaymentStatus";
import DeleteWorker from "./components/admin/deleteWorker";
import FeedbackScreen from "./components/customer/pages/FeedbackScreen";
import RequestWorker from "./components/admin/requestWorker";
import AdminAdd from "./components/admin/adminAdd";
import AllWorkers from "./components/admin/allWorkers";
import ReviewHistory from "./components/customer/pages/reviewHistory";
import { NativeBaseProvider } from "native-base";
import ThankYou from "./components/customer/pages/ThankYou";
import AppNav from "./routes/AppNav";
import { AuthProvider } from "./auth/AuthContext";
import AdminStack from "./routes/admin.route";
// import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <>
    <AuthProvider>
      <NativeBaseProvider>
        <AppNav/>
      </NativeBaseProvider>
 </AuthProvider>
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