import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useContext } from "react";
import { Rating } from "react-native-ratings";
import image1 from "../../../assets/userProfile.jpg";
import ButtonWithBackground from "../customerStatus/ButtonWithBackground";
import bdImage from "../../../assets/bg.png";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../customerItems/TextInput";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../auth/AuthContext";

const FeedbackSchema = Yup.object().shape({
  comment: Yup.string().min(4).required("Required"),
});

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function FeedbackScreen() {

  const {userToken} = useContext(AuthContext)
  const navigation = useNavigation();
  const headers = {
    Authorization:
      `Bearer ${userToken}`,
  };
  const [star, setStar] = React.useState(0);
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: FeedbackSchema,
      initialValues: {
        worker_id: "",
        user_id: "",
        star_review: 0,
        comment: "",
      },
      onSubmit: async (values) => {
        try {
          const user = await fetch(
            "https://bw10fhxj-8000.asse.devtunnels.ms/api/account/currentUser",
            { headers }
          );

          const res = await user.json();
          console.log(res);
          const dto = {
            worker_id: "5657585759789",
            user_id: res.user._id,
            star_review: star,
            comment: values.comment,
          };

          const response = await axios
            .post(
              "https://bw10fhxj-8000.asse.devtunnels.ms/api/user/createReview",
              dto
            )
            .then(navigation.navigate("thankyou"));
        } catch (err: any) {
          console.log("ERROR", err);
          Alert.alert(
            "error",
            err,
            [
              {
                text: "Cancel",
                onPress: () => Alert.alert("Cancel Pressed"),
                style: "cancel",
              },
            ],
            {
              cancelable: true,
              onDismiss: () =>
                Alert.alert(
                  "This alert was dismissed by tapping outside of the alert dialog."
                ),
            }
          );
        }
      },
    });
  return (
    <View>
      <ImageBackground
        source={bdImage}
        resizeMode="stretch"
        style={styles.bgImage}
      >
        <View style={styles.imageView}>
          <Image source={image1} style={styles.image} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 28,
              color: "black",
              textAlign: "center",
              paddingBottom: 40,
            }}
          >
            Kaveesha Karunasena
          </Text>

          <Rating
            style={{ paddingTop: 30 }}
            type="star" // heart, star, bell, rocket
            ratingCount={5}
            showRating={true}
            ratingTextColor="red"
            // readonly
            // showReadOnlyText={false}
            fractions={1} // 0-20
            jumpValue={0.5}
            startingValue={5}
            onStartRating={(rating) => console.log(`Inital: ${rating}`)}
            onFinishRating={(rating) => setStar(rating)}
            onSwipeRating={(rating) => console.log(`Swiping: ${rating}`)}
          />
          <View
            style={{ paddingHorizontal: 32, width: "100%", paddingTop: 30 }}
          >
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}
            >
              <TextInput
                placeholder="Enter your Comment"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
                onChangeText={handleChange("comment")}
                onBlur={handleBlur("comment")}
                error={errors.comment}
                touched={touched.comment}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.button}>
          <ButtonWithBackground
            title="Add Review"
            color="#FFC436"
            onPress={handleSubmit}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 30,
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
    paddingTop: 70,
    alignItems: "center",
  },
  bgImage: {
    height: screenHeight,
    width: screenWidth,
  },
});
