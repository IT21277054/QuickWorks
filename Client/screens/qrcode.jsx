import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QrCodePage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
        <ImageBackground
          style={styles.bgimg}
          source={require("../assets/backgroundimg.png")}
        >
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginTop: "50%",
            }}
            onPress={() => {
              navigation.navigate("CompletedScreen");
            }}
          >
            <Image style={styles.qrbg} source={require("../assets/qrbg.png")} />
            <QRCode size={200} value="http://awesome.link.qr" />
          </TouchableOpacity>
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
  bottumScreen: {
    bottom: 0,
    width: width,
    height: height / 3,
    backgroundColor: "#3330E4",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  qrbg: {
    position: "absolute",
    resizeMode: "contain",
    height: 280,
    width: 280,
    bottom: -40,
    alignSelf: "center",
  },
});
