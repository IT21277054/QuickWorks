import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AvailableJobs from "../screens/AvailableJobs";
import AcceptedJobsScreen from "../screens/AcceptedJobsScreen";
import Quotation from "../screens/Quatation";
import AccceptedJobs from "../screens/Accept";
import OngoingJobs from "../screens/Ongoing";
import CompleteOngoing from "../screens/CompleteOngoing";
import CompletePayment from "../screens/CompletePayment";
import CompletedScreen from "../screens/CompletedScreen";
import QrCodePage from "../screens/qrcode";
import Approved from "../screens/Approved";

const Stack = createNativeStackNavigator();
const ApprovedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Approved"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Approved" component={Approved} />
      <Stack.Screen name="CompleteOngoing" component={CompleteOngoing} />
      <Stack.Screen name="CompletePayment" component={CompletePayment} />
      <Stack.Screen name="QrCodePage" component={QrCodePage} />
      <Stack.Screen name="CompletedScreen" component={CompletedScreen} />
    </Stack.Navigator>
  );
};

export default ApprovedStack;
