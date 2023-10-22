import { Center, Image } from "native-base";

function HomePage() {
  return (
    <Center>
      <Image
        source={require("../../../assets/page_header_1.png")}
        alt="Alternate Text"
        size="xl"
      />
    </Center>
  );
}

export default HomePage;
