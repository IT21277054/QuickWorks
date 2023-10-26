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
  ScrollView,
} from "react-native";

export default function AccceptedJobs({}) {
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
          <View style={styles.mainView}>
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={{ fontSize: 30, color: "white" }}>
                  Pending Jobs
                </Text>
              </View>
              <View style={styles.column}>
                <Image
                  style={styles.logo}
                  source={require("../assets/Pendingjobs.png")}
                />
              </View>
            </View>
          </View>

          <View style={styles.secondmain}>
            <Text style={{ color: "white", fontSize: 27 }}>
              Gutter to clean
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>
              clean the gutters
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={styles.column}>
                <Pressable style={styles.Button}>
                  <Text style={{ color: "white", fontSize: 15 }}>Jobs</Text>
                </Pressable>
              </View>
              <View style={styles.column}>
                <Pressable style={styles.Button}>
                  <Text style={{ color: "white", fontSize: 15 }}>
                    Quotation
                  </Text>
                </Pressable>
              </View>
            </View>
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
  mainView: {
    width: "98%",
    backgroundColor: "#3330E4",
    borderRadius: 20,
    marginTop: "30%",
    marginLeft: "1%",
    height: 191,
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  secondmain: {
    backgroundColor: "#3330E4",
    padding: 12,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: "10%",
    marginLeft: "1%",
    borderRadius: 20,
    width: "98%",
    height: 191,
  },
  logo: {
    backgroundColor: "rgba(0,0,0,0)",
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  Button: {
    backgroundColor: "#FFC436",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    height: 53,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
});
