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
import * as Location from "expo-location";

function CreateJob() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        // Use reverse geocoding to get location name
        let reverseGeocode = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        if (reverseGeocode && reverseGeocode.length > 0) {
          setLocation(reverseGeocode[0].city);
        }
      } catch (error) {
        setErrorMsg("Error getting location");
      }
    })();
  }, []);

  const createJob = async () => {
    try {
      const jobData = {
        customerId: "1",
        title: title,
        jobType: jobType,
        jobStatus: "Pending",
        jobDescription: description,
        location: location,
      };

      console.log(jobData);

      const response = await axios.post(
        "https://9w5swrvt-8000.asse.devtunnels.ms/api/job/create",
        jobData
      );

      console.log("Job created:", response.data);

      navigation.navigate("homePage");
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };
  return (
    <>
      <Box flex={1} position="relative">
        <Center>
          <Image
            source={require("../../../assets/page_header_2.png")}
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
          Create Job
        </Text>
      </Box>

      <Center position="absolute" top="50%" width="100%">
        <Box>
          <FormControl mb="5">
            <FormControl.Label>Title</FormControl.Label>
            <Input
              width="90%"
              value={title}
              onChangeText={(e) => setTitle(e)}
            />
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Job Type</FormControl.Label>
            <Input
              width="90%"
              value={jobType}
              onChangeText={(e) => setJobType(e)}
            />
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Description</FormControl.Label>
            <Input
              width="90%"
              value={description}
              onChangeText={(e) => setDescription(e)}
            />
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
            <Button size="md" flex={1} height="100%" my={2} onPress={createJob}>
              Save
            </Button>
          </HStack>
        </Box>
      </Center>
    </>
  );
}

export default CreateJob;
