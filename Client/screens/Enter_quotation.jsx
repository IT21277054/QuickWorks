import React, { useEffect } from "react";
import {
  Pressable,
  Image,
  ImageBackground,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import the AntDesign icons

export default function EnterQuotation({}) {
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
                <Text style={styles.label}>Item Name</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.column}>
                <Text style={styles.label}>Quantity</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.column}>
                <Text style={styles.label}>Price</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.row}>
                <View style={styles.deleteIconContainer}>
                  {/* Delete Icon */}
                  <AntDesign name="delete" size={24} color="white" />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.row2}>
            <View style={styles.column}>
              <Pressable style={styles.Button}>
                <Text style={{ color: "white", fontSize: 15 }}>Save Item</Text>
              </Pressable>
            </View>
            <View style={styles.column}>
              <Pressable style={styles.Button}>
                <Text style={{ color: "white", fontSize: 15 }}>Add Items</Text>
              </Pressable>
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
    marginTop: "50%",
    marginLeft: "1%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "95%",
    marginLeft: "1%",
  },
  column: {
    flex: 1,
    flexDirection: "column",
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
    width: 80,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 5,
  },
  emptyView: {
    width: 30, // Width same as delete icon container
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
