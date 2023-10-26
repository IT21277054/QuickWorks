import React, { useEffect } from "react";
import {
  Pressable,
  Image,
  ImageBackground,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function Language({}) {
  function onPressFunction() {
    throw new Error("Function not implemented.");
  }

  return (
    <View style={styles.container}>
      {/* <Image
                style={{ height: 100, width: 100 }}
                source={require("")}
            /> */}
      <Text style={{ fontSize: 15, color: "#656d94" }}>
        Select your language
      </Text>
      <View style={styles.form}>
        <Pressable onPress={onPressFunction} style={styles.button}>
          <Text style={styles.regbtntext}>English</Text>
        </Pressable>
        <Pressable onPress={onPressFunction} style={styles.button}>
          <Text style={styles.regbtntext}>Arabic</Text>
        </Pressable>
        <Pressable onPress={onPressFunction} style={styles.button}>
          <Text style={styles.regbtntext}>Urdu</Text>
        </Pressable>
        <Pressable onPress={onPressFunction} style={styles.button}>
          <Text style={styles.regbtntext}>Hindi</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#656d94",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  regbtntext: {
    color: "#fff",
    fontSize: 18,
  },
  regtxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#656d94",
    marginTop: 20,
  },
});
