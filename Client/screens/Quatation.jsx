import React, { useState } from "react";
import {
  SafeAreaView,
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

export default function Quotation({ navigation }) {
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
            <Text style={{ fontSize: 25, color: "white" }}>
              Date of completion
            </Text>
            <TextInput style={styles.input} />
            <Text style={{ fontSize: 25, color: "white" }}>
              Time of Arrival
            </Text>

            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={{ fontSize: 18, color: "white" }}>
                  Bring Goods
                </Text>
              </View>
              <View style={styles.column}>
                <Pressable
                  style={styles.toggleButton}
                  onPress={toggleBringingGoods}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>
                    {isBringingGoods ? "Yes" : "No"}
                  </Text>
                </Pressable>
              </View>
            </View>
            <Text style={styles.label}>
              Toggle {isBringingGoods ? "off" : "on"} if you are bringing goods
            </Text>
            <Pressable style={styles.Button}>
              <Text style={{ color: "white", fontSize: 15 }}>Add Items</Text>
            </Pressable>
            <Text style={styles.label}>Service Amount</Text>
          </View>

          <View style={styles.row2}>
            <View style={styles.column}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("WaitingScreen");
                }}
                style={styles.Button}
              >
                <Text style={{ color: "white", fontSize: 15 }}>
                  Send Quotation
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <Pressable style={styles.Button}>
                <Text style={{ color: "white", fontSize: 15 }}>Cancel</Text>
              </Pressable>
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
    padding: 20,
    marginTop: "20%",
    marginLeft: "1%",
    height: 400,
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggleButton: {
    backgroundColor: "#FFC436",
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "50%",
    marginLeft: "1%",
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  deleteIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "red",
  },
  input: {
    height: 40,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 5,
  },
  emptyView: {
    width: 30,
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
