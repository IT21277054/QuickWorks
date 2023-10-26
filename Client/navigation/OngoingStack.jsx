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

const Stack = createNativeStackNavigator();
const OngoingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OngoingJobs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OngoingJobs" component={OngoingJobs} />
      <Stack.Screen name="CompleteOngoing" component={CompleteOngoing} />
      <Stack.Screen name="CompletePayment" component={CompletePayment} />
      <Stack.Screen name="CompletedScreen" component={CompletedScreen} />
      <Stack.Screen name="QrCodePage" component={QrCodePage} />
    </Stack.Navigator>
  );
};

export default OngoingStack;
