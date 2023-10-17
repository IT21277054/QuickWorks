
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import ongoingImage from "../../../assets/ongoinImage.png";

export default function OnGoingStatus() {
  return (
    <View style={styles.img}>
      <Image source={ongoingImage} />
    </View>
  );
}

const styles = StyleSheet.create({
    img: {
      paddingBottom:100,
    },
  });