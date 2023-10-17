import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import acceptedImage from "../../../assets/acceptedImage.png";

export default function AcceptedStatus() {
  return (
    <View style={styles.img}>
      <Image source={acceptedImage} />
    </View>
  );
}

const styles = StyleSheet.create({
    img: {
      paddingBottom:100,
    },
  });