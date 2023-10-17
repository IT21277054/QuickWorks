import { StyleSheet, View, Text, Image, Dimensions, Button } from "react-native";
import completeImage from "../../../assets/completeImage.png";
import ButtonWithBackground from "../customerStatus/ButtonWithBackground";

export default function CompletedStatus() {
  return (
    <View>
      <Image  source={completeImage} />
      <View style={styles.button}>
      <ButtonWithBackground
          title="Add Reviews"
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
  
