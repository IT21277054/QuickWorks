import { StyleSheet, View, Text, Image, Dimensions, Button } from "react-native";
import paymentImage from "../../../assets/paymentReady.png";
import ButtonWithBackground from "../customerStatus/ButtonWithBackground";

export default function PaymentStatus() {
  return (
    <View>
      <Image source={paymentImage} />
      <View style={styles.button}>
      <ButtonWithBackground
          title="Pay"
          color="#FFC436"
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
      paddingBottom:40,
      alignItems:'center'
    },
  });
  
