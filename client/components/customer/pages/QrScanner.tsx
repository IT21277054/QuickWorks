import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import image from "../../../assets/qrScanner.png";
import ButtonWithBackground from "../customerStatus/ButtonWithBackground";
import recImage from "../../../assets/rec.png";
import { useNavigation } from '@react-navigation/native';


export default function QrScanner() {
    const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.rec}>
        <Image source={recImage} />
        <View style={styles.textView}>
          <Text style={styles.imageText}>QR SCANNER</Text>
        </View>
      </View>
      <Text style={styles.text1}>Scan QR Code</Text>
      <View style={styles.txetView}>
        <Text>
          Place QR code inside the frame to scan please avoid shake to get
          results quickly
        </Text>
      </View>
      <View style={styles.imgView}>
        <Image source={image} style={styles.img} />
      </View>
      <View style={styles.button}>
        <ButtonWithBackground title="Scan" color="#FFC436" onPress={() => navigation.navigate("scanner")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#C6D2F0",
    height: "auto",
  },
  text1: {
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
  imgView: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  button: {
    paddingTop: 75,
    paddingBottom: 81,
    alignItems: "center",
  },
  txetView: {
    padding: 40,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  rec: {
    justifyContent: "center",
    alignItems: "center",
  },
  textView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
