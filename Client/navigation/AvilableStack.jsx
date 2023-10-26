import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AvailableJobs from "../screens/AvailableJobs";
import AcceptedJobsScreen from "../screens/AcceptedJobsScreen";
import Quotation from "../screens/Quatation";
import AccceptedJobs from "../screens/Accept";
import WaitingScreen from "../screens/WaitingScreen";

const Stack = createNativeStackNavigator();
const AvilableStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AvailableJobs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AvailableJobs" component={AvailableJobs} />
      <Stack.Screen name="AcceptedJobsScreen" component={AcceptedJobsScreen} />
      <Stack.Screen name="WaitingScreen" component={WaitingScreen} />
      <Stack.Screen name="Quotation" component={Quotation} />
    </Stack.Navigator>
  );
};

export default AvilableStack;
