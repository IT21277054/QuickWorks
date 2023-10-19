import React from 'react';
import { Button, Text, View, Image, ScrollView, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import TextInput from '../customerItems/TextInput';
import ButtonWithBackground from '../customerStatus/ButtonWithBackground';
import image1 from "../../../assets/cash.png";
import bdImage from "../../../assets/bg.png";
import { useNavigation } from '@react-navigation/native';


const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function CashPayment() {
    const navigation = useNavigation();
  return (
    <ScrollView>
        <ImageBackground source={bdImage} resizeMode= 'stretch' style={styles.image}>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:75
      }}
    >
        <Image source={image1} style={{ width: 300, height: 300 }}/>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='credit'
          placeholder='Enter Amount'
          autoCapitalize='none'
          keyboardType='numeric'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
        />
      </View>
      <ButtonWithBackground
          title="Pay Now"
          color="#FFC436"
          onPress={() => navigation.navigate('reviewStatus' )}
        />
    </View>
    </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    image: {
        height: screenHeight, 
        width: screenWidth, 
     
      },
})