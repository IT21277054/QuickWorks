import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import OnGoing from "../assets/OnGoing.svg";
import Menu from "../assets/Menu.svg";

export default function OngoingJobs({ navigation }) {
  const [isBringingGoods, setIsBringingGoods] = useState(false);

  const toggleBringingGoods = () => {
    setIsBringingGoods(!isBringingGoods);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
        <ImageBackground
          style={styles.bgimg}
          source={require("../assets/backgroundimg.png")}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
            style={styles.menu}
          >
            <Menu />
          </TouchableOpacity>
          <OnGoing style={styles.titleBar} />
          <View style={styles.secondmain}>
            <Image
              style={styles.logo}
              source={require("../assets/Current-location.png")}
            />

            <Text style={{ color: "white", fontSize: 35 }}>
              Gutter to clean
            </Text>
            <Text style={{ color: "white", fontSize: 25 }}>
              write a description here
            </Text>
          </View>
          <View style={styles.ButtonView}>
            <Pressable style={styles.Button}>
              <Text style={{ color: "white", fontSize: 25 }}>location</Text>
            </Pressable>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CompleteOngoing");
              }}
              style={styles.Button}
            >
              <Text style={{ color: "white", fontSize: 25 }}>Start</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgimg: {
    flex: 1,
    width: width,
    height: height,
  },
  titleBar: {
    alignSelf: "center",
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  menu: {
    marginTop: 10,
    marginLeft: 10,
  },
  secondmain: {
    backgroundColor: "#3330E4",
    padding: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
    marginLeft: "1%",
    borderRadius: 20,
    width: "98%",
    height: 200,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
    resizeMode: "contain",
    position: "relative",
    marginTop: "-75%",
  },
  ButtonView: {
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    width: "98%",
    marginTop: 100,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  Button: {
    backgroundColor: "#FFC436",
    borderRadius: 10,
    marginTop: 10,
    height: 53,
    width: "95%",
    marginLeft: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
});
