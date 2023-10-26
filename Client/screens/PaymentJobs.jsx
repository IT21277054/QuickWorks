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
} from "react-native";

export default function OngoingJobs({}) {
  const [isBringingGoods, setIsBringingGoods] = useState(false);

  const toggleBringingGoods = () => {
    setIsBringingGoods(!isBringingGoods);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimg}
        source={require("../assets/backgroundimg.png")}
      >
        <View style={styles.secondmain}>
          <Image
            style={styles.logo}
            source={require("../assets/Plain-credit-card-pana.png")}
          />

          <Text style={{ color: "white", fontSize: 35 }}>complete </Text>
          <Text style={{ color: "white", fontSize: 35 }}>payment</Text>
        </View>
        <View style={styles.ButtonView}>
          <Pressable style={styles.Button}>
            <Text style={{ color: "white", fontSize: 25 }}>generate qr</Text>
          </Pressable>
        </View>
      </ImageBackground>
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
  secondmain: {
    backgroundColor: "#3330E4",
    padding: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "70%",
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
    marginTop: 150,
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
    width: "95%",
    marginLeft: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
});
