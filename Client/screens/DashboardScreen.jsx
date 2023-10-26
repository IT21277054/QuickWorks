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
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import JobCard from "../components/JobCard";
import Menu from "../assets/Menu.svg";
import { BarChart } from "react-native-chart-kit";
const { width, height } = Dimensions.get("window");

export default function DashboardScreen({ navigation }) {
  const [isBringingGoods, setIsBringingGoods] = useState(false);

  const toggleBringingGoods = () => {
    setIsBringingGoods(!isBringingGoods);
  };

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
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

          <Image
            source={{
              uri: "https://m.media-amazon.com/images/I/41jLBhDISxL._AC_UF1000,1000_QL80_.jpg",
            }}
            style={styles.logo}
          />
          <Text style={styles.title}>DashBoard</Text>
          <View style={styles.mainView}>
            <View style={styles.row1}>
              <View style={styles.col1}>
                <Text style={styles.text1}>9</Text>
                <Text style={styles.text2}>Accepted Task</Text>
              </View>
              <View style={styles.col1}>
                <Text style={styles.text1}>1</Text>
                <Text style={styles.text2}>On going Task</Text>
              </View>
              <View style={styles.col1}>
                <Text style={styles.text1}>9</Text>
                <Text style={styles.text2}> Completed Task</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={styles.text3}>1</Text>
              <Text style={styles.text2}>Approved Job</Text>
            </View>
          </View>
          <View style={styles.mainView}>
            <Text style={styles.averageText}>Average Revenue Per Month</Text>
            <BarChart
              style={styles.graphStyle}
              data={data}
              width={width - 50}
              height={220}
              yAxisLabel="$"
              chartConfig={chartConfig}
              verticalLabelRotation={30}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

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
  menu: {
    marginTop: 10,
    marginLeft: 10,
  },

  logo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    position: "absolute",
    right: 5,
    top: 5,
  },
  title: {
    color: "#000",
    fontSize: 30,
    fontWeight: "600",
    marginTop: "10%",
    alignSelf: "center",
  },
  mainView: {
    width: "98%",
    backgroundColor: "#3330E4",
    borderRadius: 18,
    padding: 20,
    marginTop: 10,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  col1: {
    alignItems: "center",
    width: "30%",
  },
  text1: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    backgroundColor: "#FFC436",
    width: "100%",
    borderRadius: 20,
    height: 70,
    textAlign: "center",
    textAlignVertical: "center",
  },
  text2: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 15,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  text3: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    backgroundColor: "#FFC436",
    width: 100,
    borderRadius: 20,
    height: 60,
    textAlign: "center",
    textAlignVertical: "center",
    marginRight: "15%",
  },
  averageText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginTop: 15,
  },
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
    alignSelf: "center",
  },
});
