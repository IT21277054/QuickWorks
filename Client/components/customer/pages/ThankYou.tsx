import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    ImageBackground,
  } from "react-native";
  import thankImage from "../../../assets/thank-you.png"
  import ButtonWithBackground from "../customerStatus/ButtonWithBackground";
  import bdImage from "../../../assets/bg.png";
//   import { useNavigation } from "@react-navigation/native";

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
  export default function ThankYou() {
    
    // const navigation = useNavigation();
    return (
        <ImageBackground source={bdImage} resizeMode= 'stretch' style={styles.image}>
      <View style={{flex:1,alignContent:'center', justifyContent:'center'}}>
        <View >
        <Image source={thankImage} style={{ width: '100%', height: 300 }}/>
        </View>
        <View style={styles.button}>
          <ButtonWithBackground
            title="Cancel"
            color="#FFC436"
            // onPress={() => navigation.navigate("reviewHistory")}
          />
        </View>
      </View>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      paddingTop: 160,
      alignItems: "center",
    },
    image: {
        height: screenHeight, 
        width: screenWidth, 
     
      },
  });
  