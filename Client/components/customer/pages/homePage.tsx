import { Center, Image, Box } from "native-base";
import Header from "../../../../Client/assets/page_header_1.png";

function HomePage() {
  return (
    <Box>
      <Center>
        <Image source={Header} alt="Header 1" size="xl" />
      </Center>
    </Box>
  );
}

export default HomePage;
