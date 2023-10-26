import axios from "axios";
import {
  Box,
  HStack,
  Badge,
  Spacer,
  Flex,
  Pressable,
  Text,
  ScrollView,
  Button,
} from "native-base";
import { useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image
} from "react-native";
import { Rating } from "react-native-ratings";
import TextInput from "../customerItems/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonWithBackground from "../customerStatus/ButtonWithBackground";
import image1 from "../../../assets/userProfile.jpg";

interface reviewData {
  _id: string;
  user_id: string;
  worker_id: string;
  comment: string;
  star_review: number;
  createdAt: Date;
  updatedAt: Date;
}

const FeedbackSchema = Yup.object().shape({
  comment: Yup.string().min(4).required("Required"),
});

function reviewHistory() {
  const [reviewData, setReviews] = useState<reviewData[]>([]);
  const [state, setState] = useState({ isVisible: false });
  const [star, setStar] = useState(0);
  const[editData, setEditData] = useState({
    userComment:'',
    userStar:0,
    workerId:'',
    review_id:''
  })
const snapPoints = ["50%"]
  const displayModal = (show: any) => {
    setState({ isVisible: show });
  };

  //id is hard coded for no will change later
  useEffect(() => {
    axios
      .get<reviewData[]>(
        "https://bw10fhxj-8000.asse.devtunnels.ms/api/user/getReview/65310de754ead252bca5ce37"
      )
      .then((response: any) => {
        console.log(response.data);
        setReviews(response.data);
      })
      .catch((error: any) => {
        console.error("Error fetching card data:", error);
      });
  }, [reviewData]);

  function formatDate(dateString: string): string {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString();
    return formattedDate;
  }

  const handelDelete = (id: string) => {
    try {
      Alert.alert(
        "Delete Conrimation",
        "Do you realy want to delete this review?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () =>
              await axios.delete(
                `https://bw10fhxj-8000.asse.devtunnels.ms/api/user/deleteReview/${id}`
              ),
          },
        ]
      );
    } catch (err: any) {}
  };
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: FeedbackSchema,
      initialValues: {
        star_review: 0,
        comment: editData.userComment,
      },
      onSubmit: async (values) => {
       try{
       await  axios.put("https://bw10fhxj-8000.asse.devtunnels.ms/api/user/updateReview",{review_id:editData.review_id, comment: values.comment, star_review:star})
        displayModal(!state.isVisible)
       }catch(err:any){
        console.log("ERROR",err);
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
  
  const handleEdit = (comment:string, star:number,id:string,_id:string) =>{
    displayModal(true)
    setEditData({userComment:comment,
    userStar:star,
    workerId:id,
    review_id:_id})

  }

  return (
    <ScrollView>
      {reviewData.map((review, index) => (
        <Box alignItems="center" key={index}>
          <Pressable
            onPress={() => console.log("I'm Pressed")}
            rounded="8"
            overflow="hidden"
            borderWidth="1"
            borderColor="coolGray.300"
            maxW="96"
            shadow="3"
            bg="coolGray.100"
            p="5"
            marginTop="2"
          >
            <Box>
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: "white",
                  }}
                  variant="solid"
                  rounded="4"
                >
                  Business
                </Badge>
                <Spacer />
                <Text fontSize={10} color="coolGray.800">
                  {formatDate(review.createdAt)}
                </Text>
              </HStack>
              <Text
                color="coolGray.800"
                mt="3"
                fontWeight="medium"
                fontSize="xl"
              >
                {review.comment}
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerful time-saving tools for creating email delivery
                and collecting marketing data
              </Text>

              <Flex direction="row" justify="flex-end" mt={3}>
                <Button
                  size="sm"
                  width="30%"
                  onPress={() => handleEdit(review.comment,review.star_review,review.worker_id,review._id)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  width="30%"
                  marginLeft="1"
                  onPress={() => handelDelete(review._id)}
                >
                  Delete
                </Button>
              </Flex>
            </Box>
          </Pressable>
        </Box>
      ))}
      <Modal
      style={styles.model}
        animationType={"slide"}
        transparent={false}
        visible={state.isVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed.");
        }}
      >
        <View style={styles.container}>
        <View style={styles.imageView}>
          <Image source={image1} style={styles.pfimage} />
        </View>
          <Text
            style={{
              fontSize: 28,
              color: "black",
              textAlign: "center",
              paddingBottom: 40,
              paddingTop:10
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
            startingValue={editData.userStar}
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
          <View style={styles.button}>
        <ButtonWithBackground
          title="Update"
          color="#FFC436"
          onPress={ 
            handleSubmit
          }
        />
      </View>
      <ButtonWithBackground
        title="Cancel"
        color="red"
        onPress={ 
          () => displayModal(!state.isVisible)
        }
      />
        </View>

       
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  model:{
paddingTop:50
  },
  button: {
    paddingTop: 40,
    alignItems: "center",
    paddingBottom:10
  },
  closeButton: {
    display: "flex",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF3974",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: "100%",
    height: 350,
  },
  pfimage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#3330E4",

  },
  imageView: {
    alignitems: "center",
    paddingTop: 80,
    marginHorizontal: 110,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: "#00479e",
    textAlign: "center",
    paddingBottom:60
  },
});

export default reviewHistory;
