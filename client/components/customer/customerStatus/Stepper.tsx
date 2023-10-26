import React from "react";
import { StyleSheet, View, Text, ImageBackground, Dimensions } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { MaterialIcons } from "@expo/vector-icons";
import Swiper from 'react-native-swiper';
import bdImage from "../../../assets/bg.png";
import AcceptedStatus from "../pages/AcceptedStatus";
import OnGoingStatus from "../pages/OngoingStatus";
import JobDoneStatus from "../pages/JobDoneStatus";
import PaymentStatus from "../pages/PaymentStatus";
import CompletedStatus from "../pages/CompletedStatus";



const PAGES = [<AcceptedStatus/>, <OnGoingStatus/>, <JobDoneStatus/>, <PaymentStatus/>, <CompletedStatus/>];
const secondIndicatorStyles = {
  stepIndicatorSize: 43,
  currentStepIndicatorSize: 53,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#FFC436",
  stepStrokeWidth: 3,
  separatorStrokeFinishedWidth: 4,
  stepStrokeFinishedColor: "#FFC436",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#FFC436",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#FFC436",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#FFC436",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#FFC436",
};

const getStepIndicatorIconConfig = ({
  position,
  stepStatus,
}: {
  position: number;
  stepStatus: string;
}) => {
  const iconConfig = {
    name: "feed",
    color: stepStatus === "finished" ? "#ffffff" : "#fe7013",
    size: 30,
  };
  switch (position) {
    case 0: {
      iconConfig.name = "shopping-cart";
      break;
    }
    case 1: {
      iconConfig.name = "location-on";
      break;
    }
    case 2: {
      iconConfig.name = "assessment";
      break;
    }
    case 3: {
      iconConfig.name = "payment";
      break;
    }
    case 4: {
      iconConfig.name = "track-changes";
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
};

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function Stepper() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const onStepPress = (position: any) => {
    console.log(position)
    setCurrentPage(position);
  };

  React.useEffect(()=>{

  },[])

  const renderViewPagerPage = (data: any) => {
    return (
      <View key={data} style={styles.page}>
        <View>{data}</View>
      </View>
    );
  };

  const renderStepIndicator = (params: any) => (
    <MaterialIcons {...getStepIndicatorIconConfig(params)} />
  );

  return (
    <View>
        <ImageBackground source={bdImage} resizeMode= 'stretch' style={styles.image}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={secondIndicatorStyles}
          currentPosition={currentPage}
          onPress={onStepPress}
          renderStepIndicator={renderStepIndicator}
          labels={["Accepted", "OnGoing", "Done", "Payment", "Completed"]}
        />
        <View  style={styles.page}>
        <View>{PAGES[currentPage]}</View>
      </View>
         
      </View>
      {/* <Swiper
      >
        {PAGES.map((page) => renderViewPagerPage(page))}
      </Swiper> */}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  stepIndicator: {
    marginVertical: 45,
  },
  page: {
    paddingTop:60,
    justifyContent: "center",
    alignItems: "center",
  },
  stepLabel: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#999999",
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#4aae4f",
  },
  image: {
    height: screenHeight, 
    width: screenWidth, 
 
  },
});
