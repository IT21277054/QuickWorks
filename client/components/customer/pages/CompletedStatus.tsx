import { StyleSheet, View, Text, Image, Dimensions, Button } from "react-native";
import completeImage from "../../../assets/completeImage.png";
import ButtonWithBackground from "../customerStatus/ButtonWithBackground";
import { useNavigation } from "@react-navigation/native";

export default function CompletedStatus({jobId}) {
  console.log(jobId)
  const navigation = useNavigation();
  return (
    <View>
      <Image  source={completeImage} />
      <View style={styles.button}>
      <ButtonWithBackground
          title="Complete"
          color="#FFC436"
          onPress={() => navigation.navigate("feedback",{jobId:jobId})}
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
  
