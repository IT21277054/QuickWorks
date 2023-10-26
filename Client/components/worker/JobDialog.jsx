import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Modal } from "react-native";

const JobDialog = (props) => {
  const { modalVisible, setModalVisible, navigation } = props;
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.root}>
        <View style={styles.card}>
          <Text style={styles.header}>VIEW JOBS</Text>
          <Text style={styles.title}>Gutter to clean </Text>
          <Text style={styles.content}>
            I need to clean the gutter as soon as possible, I WOULD BE FREE IN
            WEEKENDS.
          </Text>
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("AcceptedJobsScreen");
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>negotiate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.buttonText}>cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  card: {
    backgroundColor: "#3330E4",
    width: "90%",
    height: "40%",
    borderRadius: 20,
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 25,
    textAlign: "left",
    padding: 10,
  },
  content: {
    color: "white",
    fontSize: 20,
    textAlign: "left",
    padding: 10,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#FFC436",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    height: 53,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});

export default JobDialog;
