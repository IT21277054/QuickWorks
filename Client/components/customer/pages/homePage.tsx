import React from "react";
import { Center, Image, Box, Text, Button, HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

function HomePage() {
  const navigation = useNavigation();
  return (
    <Box flex={1} position="relative">
      <Center>
        <Image
          source={require("../../../assets/page_header_1.png")}
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
        Welcome
      </Text>

      <Center position="absolute" top="50%" left="15%">
        <Button
          size="lg"
          width="100%"
          height="100%"
          my={2}
          mx={4}
          onPress={() => navigation.navigate("createPage")}
        >
          Create job
        </Button>
        <HStack space={2}>
          <Button
            size="md"
            flex={1}
            height="100%"
            my={3}
            onPress={() => navigation.navigate("Pending")}
          >
            Pending
          </Button>
          <Button
            size="md"
            flex={1}
            height="100%"
            my={3}
            onPress={() => navigation.navigate("MyJobs")}
          >
            My Jobs
          </Button>
        </HStack>
      </Center>
    </Box>
  );
}

export default HomePage;
