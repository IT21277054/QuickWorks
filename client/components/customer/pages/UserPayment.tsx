import * as React from "react";
import { Dimensions, ImageBackground, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CardPayment from "./CardPayment";
import CashPayment from "./CashPayment";
import image1 from "../../../assets/blueCard.png";
import image2 from "../../../assets/cash.png";

const Tab = createMaterialTopTabNavigator();

const CustomTabLabel = ({ image }: any) => {
  return (
    <Image
      source={image}
      style={{ width: 100, height: 100}}
    />
  );
};

export default function UserPayment() {
  return (
    <>
        <Tab.Navigator
          screenOptions={{
            tabBarItemStyle: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            },
            tabBarStyle: {
              backgroundColor: "transparent",
              display: "flex",
              maxWidth: "auto",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
            },
          }}
        >
          <Tab.Screen
            name="card"
            options={{ tabBarLabel: () => <CustomTabLabel image={image1} /> }}
            component={CardPayment}
          />
          <Tab.Screen
            name="cash"
            options={{ tabBarLabel: () => <CustomTabLabel image={image2} /> }}
            component={CashPayment}
          />
        </Tab.Navigator>
    </>
  );
}
