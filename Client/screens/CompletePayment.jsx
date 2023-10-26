import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PaymentTopBar from "../assets/PaymentTopBar.svg";
import Menu from "../assets/Menu.svg";

export default function CompletePayment({ navigation }) {
  const [isBringingGoods, setIsBringingGoods] = useState(false);

  const toggleBringingGoods = () => {
    setIsBringingGoods(!isBringingGoods);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
        <ImageBackground
          style={styles.bgimg}
          source={require("../assets/backgroundimg.png")}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
            style={styles.menu}
          >
            <Menu />
          </TouchableOpacity>
          <PaymentTopBar style={styles.titleBar} />
          <View style={styles.secondmain}>
            <Image
              style={styles.logo}
              source={require("../assets/Plaincredit.png")}
            />

            <Text
              style={{
                color: "white",
                fontSize: 30,
                textTransform: "uppercase",
              }}
            >
              complete
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                textTransform: "uppercase",
              }}
            >
              payment
            </Text>
          </View>
          <View style={styles.ButtonView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("QrCodePage");
              }}
              style={styles.Button}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  textTransform: "uppercase",
                }}
              >
                generate qr
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgimg: {
    flex: 1,
    width: width,
    height: height,
  },
  titleBar: {
    alignSelf: "center",
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  menu: {
    marginTop: 10,
    marginLeft: 10,
  },
  secondmain: {
    backgroundColor: "#3330E4",
    padding: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "60%",
    marginLeft: "1%",
    borderRadius: 20,
    width: "98%",
    height: 200,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
    resizeMode: "contain",
    position: "relative",
    marginTop: "-75%",
  },
  ButtonView: {
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    width: "98%",
    marginTop: 100,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  Button: {
    backgroundColor: "#FFC436",
    borderRadius: 10,
    marginTop: 10,
    height: 53,
    width: "80%",
    marginLeft: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
});
