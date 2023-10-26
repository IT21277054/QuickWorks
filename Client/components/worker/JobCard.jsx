import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import JobDialog from "./JobDialog";

const JobCard = (props) => {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.row2}>
      <View style={styles.column}>
        <Text style={{ color: "white", fontSize: 20 }}>Gutter to clean</Text>
      </View>
      <View style={styles.column}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          style={styles.Button}
        >
          <Text style={{ color: "white", fontSize: 15 }}>View Job</Text>
        </TouchableOpacity>
      </View>
      <JobDialog
        navigation={navigation}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row2: {
    backgroundColor: "#3330E4",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10%",
    marginLeft: "1%",
    borderRadius: 20,
  },
  logo: {
    backgroundColor: "rgba(0,0,0,0)",
    width: 150,
    height: 150,
    marginBottom: 20,
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

export default JobCard;
