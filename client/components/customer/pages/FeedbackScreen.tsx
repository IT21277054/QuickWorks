import { View, Text, Image, StyleSheet, ImageBackground, Dimensions } from "react-native";
import React from "react";
import { AirbnbRating, Rating } from "react-native-ratings";
import image1 from "../../../assets/userProfile.jpg";
import ButtonWithBackground from "../customerStatus/ButtonWithBackground";
import bdImage from "../../../assets/bg.png";


const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function FeedbackScreen() {
  return (
    <View>
        <ImageBackground source={bdImage} resizeMode= 'stretch' style={styles.bgImage}>
      <View style={styles.imageView}>
        <Image source={image1} style={styles.image} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 28,
            color: "black",
            textAlign: "center",
            paddingBottom:40
          }}
        >
          Kaveesha Karunasena
        </Text>

        <Rating
          style={{ paddingTop: 30 }}
          type="heart" // heart, star, bell, rocket
          ratingCount={5}
          showRating={true}
          ratingTextColor="red"
          // readonly
          // showReadOnlyText={false}
          fractions={1} // 0-20
          jumpValue={0.5}
          startingValue={5}
          onStartRating={(rating) => console.log(`Inital: ${rating}`)}
          onFinishRating={(rating) => console.log(`Rating finished ${rating}`)}
          onSwipeRating={(rating) => console.log(`Swiping: ${rating}`)}
        />
      </View>
      <View style={styles.button}>
        <ButtonWithBackground title="Add Review" color="#FFC436" />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        marginVertical:30
      },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#3330E4",
  },
  imageView: {
    alignitems: "center",
    paddingTop: 150,
    marginHorizontal: 110,
  },
  button: {
    paddingTop:70,
    alignItems: "center",
  },
  bgImage: {
    height: screenHeight, 
    width: screenWidth, 
 
  },
});
