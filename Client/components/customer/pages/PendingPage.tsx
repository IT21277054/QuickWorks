import React, { useEffect, useState } from "react";
import {
  Center,
  Image,
  Box,
  Text,
  Button,
  HStack,
  FormControl,
  Input,
  Divider,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

function Pending() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async () => {
      try {
        const response = await axios.get(
          "https://9w5swrvt-8000.asse.devtunnels.ms/api/jobs/workers/Pending"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
  }, []);

  return (
    <>
      <Box flex={1} position="relative">
        <Center>
          <Image
            source={require("../../../assets/header_image_3.png")}
            size="97%"
            resizeMode="contain"
            top="-27%"
          />
        </Center>
        <Text
          position="absolute"
          left="10%"
          top="21%"
          color="white"
          fontSize="24px"
          fontWeight="bold"
        >
          Pending
        </Text>
      </Box>
      <Center position="absolute" top="50%" left="5%">
        <Box>
          <FormControl mb="5">
            <FormControl.Label>Project Title</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Project Title</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Project Title</FormControl.Label>
            <Input />
          </FormControl>
          <HStack space={2}>
            <Button
              size="md"
              flex={1}
              height="100%"
              my={2}
              onPress={() => navigation.navigate("homePage")}
            >
              Cancel
            </Button>
            <Button size="md" flex={1} height="100%" my={2}>
              Save
            </Button>
          </HStack>
        </Box>
      </Center>
    </>
  );
}

export default Pending;
