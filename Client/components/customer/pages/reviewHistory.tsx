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

interface reviewData {
  user_id: string;
  worker_id: string;
  comment: string;
  star_review: number;
  createdAt: Date;
  updatedAt: Date;
}

function reviewHistory() {
  const [reviewData, setReviews] = useState<reviewData[]>([]);

  //id is hard coded for no will change later
  useEffect(() => {
    axios
      .get<reviewData[]>(
        "https://w3hjd9wt-8000.asse.devtunnels.ms/api/user/getReview/65320eff471fd3c3f3e899f3"
      )
      .then((response: any) => {
        console.log(response.data);
        setReviews(response.data);
      })
      .catch((error: any) => {
        console.error("Error fetching card data:", error);
      });
  }, []);

  function formatDate(dateString: string): string {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString();
    return formattedDate;
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
                <Button size="sm" width="30%">
                  Edit
                </Button>
                <Button size="sm" width="30%" marginLeft="1">
                  Delete
                </Button>
              </Flex>
            </Box>
          </Pressable>
        </Box>
      ))}
    </ScrollView>
  );
}

export default reviewHistory;
