    import React, { useState } from 'react';
    import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
    import { Button as PaperButton,IconButton  } from 'react-native-paper';


    export default function App() {
      const [name, setName] = useState('');
      const [jobTitle, setJobTitle] = useState('');
      const [contactNumber, setContactNumber] = useState('');
      const [location, setLocation] = useState('');
      const [email, setEmail] = useState('');
      const [status,setStatus]=useState('');

    
      const handleSubmit = () => {
        // Handle the form submission here
        console.log({
          name,
          jobTitle,
          contactNumber,
          location,
          email,
          status
        });
      };

      return (
        
        <View style={styles.imageContainer}>
            <Text style={styles.headingText}>WORKER DETAILS</Text>

          <Image
            source={require('../../assets/bg.png')}  // Replace 'image.png' with the actual image file path
            style={styles.image}
          />
                <Text style={styles.headingText}>WORKER DETAILS</Text>


          <View style={styles.profContainer}>
          
          <View style={styles.rectangle}>

      <Text style={styles.text}>Name</Text>
    
    <View style={styles.Title}>
        <Text style = {styles.TitleText}>Job Title</Text>
        <Text style = {styles.bodyText}>Job Title</Text>
    <Text>{'\n'}</Text>

      <Text style = {styles.TitleText}>Contact Number</Text>
            <Text style = {styles.bodyText}>Job Title</Text>
    <Text>{'\n'}</Text>
    
      <Text style = {styles.TitleText}>Location</Text>
            <Text style = {styles.bodyText}>Job Title</Text>
      <Text>{'\n'}</Text>

      <Text style = {styles.TitleText}>Email</Text>
            <Text style = {styles.bodyText}>Job Title</Text>
        <Text>{'\n'}</Text>

      <Text style = {styles.TitleText}>Status</Text>
            <Text style = {styles.bodyText}>Job Title</Text>

    </View>
    <Text>{'\n'}</Text>
    <TouchableOpacity style={styles.delButton}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.chButton}>
            <Text style={styles.buttonText}>Change Status</Text>
          </TouchableOpacity>

          <Image
            source={require('../../assets/WorkerProf.jpeg')}  // Replace 'image.png' with the actual image file path
            style={styles.profile}
          />
            
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
    left: 64,
    zIndex: 1, // Ensure the text is above the image
    top: 52 // Adjust this value as needed to position the text at the top
  },

    
      rectangle: {
        position: 'absolute',
        width: 378,
        height: 679,
        left: '180%',
        marginLeft: -188, // Half of the width to center it horizontally
        top: 70,
        backgroundColor: '#3330E4',
        borderRadius: 14,
      }, 
      text: {
        position: 'absolute',
        width: 266,
        height: 54,
        left: 135,
        top: 40,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 28,
        lineHeight: 50,
        color: '#FFFFFF',
      },
      Title: {
      position: 'absolute',
      width: 88,
      height: 31,
      marginTop:120,
    },
    TitleText:{
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 20,
      lineHeight: 31,
          left: 18,
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
        width: 150,
        height: 60,
        left: 10,
        top: 600,
        backgroundColor: '#FFC436',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

      },
      chButton: {
        position: 'absolute',
        width: 150,
        height: 60,
        left: 215,
        top: 600,
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
        width: 100,
        height: 100,
        left: 130,
        top: -50,
        borderRadius: 15,
        
      },  
      
    });
