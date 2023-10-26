import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Button,
} from "react-native";
import paymentImage from "../../../assets/paymentReady.png";
import ButtonWithBackground from "../customerStatus/ButtonWithBackground";
import { useNavigation } from "@react-navigation/native";

export default function PaymentStatus() {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={paymentImage} />
      <View style={styles.button}>
        <ButtonWithBackground
          title="Pay"
          color="#FFC436"
          onPress={() => navigation.navigate("scanner")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 40,
    alignItems: "center",
  },
});
