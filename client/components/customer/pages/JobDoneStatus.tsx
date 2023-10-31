import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import doneImage from "../../../assets/doneImage.png";
import React from "react";

export default function JobDoneStatus() {
  return (
    <View style={styles.img} >
      <Image source={doneImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    paddingTop:45,
  },
});