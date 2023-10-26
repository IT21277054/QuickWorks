import React, { useEffect } from "react";
import {
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image style={styles.bgimg} source={require("../assets/welcome.png")} />
      </SafeAreaView>
      {/*   <Button title="Open" onPress={() => navigation.toggleDrawer()} /> */}
      <View style={styles.bottumScreen}>
        <Text style={{ fontSize: 30, color: "white" }}>Welcome to</Text>
        <Text style={{ fontSize: 40, color: "white" }}>Quick Works </Text>
        <Text style={{ fontSize: 20, color: "white" }}>
          GET THE HELP YOU NEED WHEN NEED
        </Text>
      </View>
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
    flex: 0.5,
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
});
