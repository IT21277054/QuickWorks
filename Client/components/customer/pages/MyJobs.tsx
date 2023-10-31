import React from "react";
import { Center, Image, Box, Text, Button, HStack } from "native-base";

function MyJobs() {
  return (
    <Box flex={1} position="relative">
      <Center>
        <Image
          source={require("../../../assets/header_image_4.png")}
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
        Your Text Here
      </Text>

      <Center position="absolute" top="50%" left="5%">
        <Button size="lg" width="100%" height="100%" my={2}>
          Create job
        </Button>
        <HStack space={2}>
          <Button size="md" flex={1} height="100%" my={2}>
            Pending
          </Button>
          <Button size="md" flex={1} height="100%" my={2}>
            My Jobs
          </Button>
        </HStack>
      </Center>
    </Box>
  );
}

export default MyJobs;
