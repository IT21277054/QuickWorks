import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const CustomDrawer = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageView}>
        <Image
          source={{
            uri: "https://www.benjaminfranklinplumbing.com/images/blog/10-Reasons-Why-a-Professional-Plumber-Is-Better-Than-DIY-_-Katy-TX.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Dineth Pinsara</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DashboardScreen");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>DASHBOARD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AvilableStack");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>AVILABLE JOBS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AccceptedJobs");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>ACCEPTED JOBS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Approved");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>APPROVED JOBS </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Ongoing");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>ON-GOING JOBS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Ongoing");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>COMPLETED JOBS</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.lButton}>
        <Text style={styles.lButtonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#FFC436",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 200,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "600",
  },

  lButton: {
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 200,
    borderRadius: 20,
    marginTop: 20,
  },
  lButtonText: {
    color: "#000",
    fontWeight: "600",
  },
  imageView: {
    alignItems: "center",
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    marginTop: 10,
  },
});
export default CustomDrawer;
