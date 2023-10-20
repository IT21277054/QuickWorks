import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Stepper from "./components/customer/customerStatus/Stepper";
import UserPayment from "./components/customer/pages/UserPayment";
import { SafeAreaProvider } from "react-native-safe-area-context";
import QrScanner from "./components/customer/pages/QrScanner";
import { createStackNavigator } from "@react-navigation/stack";
// import Scanner from "./components/customer/pages/scanner";
import Navigator from './routes/scanner.route'
import CardPayment from "./components/customer/pages/CardPayment";
import CashPayment from "./components/customer/pages/CashPayment";
import PaymentStatus from "./components/customer/pages/PaymentStatus";
import DeleteWorker from "./components/admin/deleteWorker";
import FeedbackScreen from "./components/customer/pages/FeedbackScreen";
import RequestWorker from "./components/admin/requestWorker";
import AdminAdd from "./components/admin/adminAdd";



export default function App() {
  return (
    <>
    <View style={styles.status}>
       <StatusBar />
     </View>
     <RequestWorker />
     {/* <AdminAdd /> */}


     {/* <DeleteWorker/> */}


     {/* <FeedbackScreen/> */}
     
     
    {/* <Navigator/> */}
    {/* <CardPayment/> */}
    {/* <CashPayment/> */}
    {/* <UserPayment/> */}
    </>
    
   
    // <View >
    //   <StatusBar style="auto" />
    //   <Stepper/>
    // </View>
    // <SafeAreaProvider>
    //   
    // <UserPayment/>
    // </SafeAreaProvider>
    // <View>
    // <View style={styles.status}>
    //   <StatusBar />
    //    </View>
    // <QrScanner/>
    // </View>
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
