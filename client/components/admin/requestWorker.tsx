  import React, { useState } from 'react';
  import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
  import { Button as PaperButton,IconButton  } from 'react-native-paper';



  export default function RequestWorkers() {
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [contactNumber, setContactNumber] = useState('');


    const handleSubmit = () => {
      // Handle the form submission here
      console.log({
        name,
        jobTitle,
        contactNumber,
        location,
      });
    };

    return (
      
      <View style={styles.imageContainer}>

        <Image
          source={require('../../assets/bg.png')}  // Replace 'image.png' with the actual image file path
          style={styles.image}
        />
          <Text style={styles.headingText}>WORKER{'\n'}REQUESTS</Text>

          <View style={styles.profContainer}>

          <Image
            source={require('../../assets/acceptedImage.png')}  // Replace 'image.png' with the actual image file path
            style={styles.profile}
          />
        
        <View style={styles.rectangle}>
              <View>
              <Text style={styles.text}>Name</Text>
    <Text style={styles.TitleText}>location</Text>
    <Text style={styles.TitleText}>contactNumber</Text>

    <TouchableOpacity style={styles.delButton}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
          
        <View style={styles.rectangle24}>

  

    </View>
    </View>

  <Text>{'\n'}</Text>


            </View>
      </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    
    imageContainer: {
      position: 'absolute',
      width: 410,
      height: 900,
      flex: 1,

    },
    image: {
      width: '100%',  // Make the image take up the entire width of the container
      height: '100%',  // Make the image take up the entire height of the container
      resizeMode: 'cover',  // Adjust the resizeMode as needed (e.g., 'cover', 'contain', 'stretch')
      zIndex: 0, // Send the image to the back

    },
  headingText: {
  fontSize: 32,
  textAlign: 'center',
  position: 'absolute',
  left: 45,
  zIndex: 1, // Ensure the text is above the image
  top: 58 // Adjust this value as needed to position the text at the top
  },


    rectangle: {
      position: 'absolute',
      width: 378,
      height: 600,
      left: '180%',
      marginLeft: -188, // Half of the width to center it horizontally
      top: 120,
      zIndex: 1, // Higher zIndex to be above rectangle24

      backgroundColor: '#3330E4',
      borderRadius: 14,
    }, 
    text: {
      position: 'absolute',
      width: 266,
      height: 54,
      left: 25,
      top: 9,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 25,
      lineHeight: 50,
      color: '#FFFFFF',
    },
    Title: {
    position: 'absolute',
    width: 88,
    height: 11,
    marginTop:120,
  },
  TitleText:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 31,
        left: 25,
        top: 58,

    textAlign: 'left',
    color: '#FFFFFF',

  },
  bodyText:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 31,
        left: 18,
    textAlign: 'left',
    color: '#FFFFFF',
  },
    delButton: {
      position: 'absolute',
      width: 120,
      height: 40,
      left:225,
      top: 80,
      zIndex: 1, // Ensure the text is above the image

      backgroundColor: '#FFC436',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',

    },
    buttonText: {
      color: 'white',
          fontSize: 18,

    },
    profContainer: {
      position: 'absolute',
      width: 40,
      height: 40,
      left: 130,
      top: 90,
      borderRadius: 15,
      
    },
    profile: {
      position: 'absolute',
      width: 165,
      height: 200,
      left: 80,
      top:-60,
      borderRadius: 15,
      
    },  
    rectangle24: {
      position: 'absolute',
      width: 353,
      height: 131,
      left: 12,
      top: 12,
      zIndex: 0, // Lower zIndex to be behind the rectangle
      backgroundColor: '#DCDCDC',
      opacity: 0.5,
      borderWidth: 1,
      borderColor: '#DCDCDC',
      borderRadius: 10,
    },
    
  });
