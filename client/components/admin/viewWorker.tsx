import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button as PaperButton,IconButton  } from 'react-native-paper';


export default function viewWorker() {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [educations, setEducations] = useState(['']);
  const [experiences, setExperiences] = useState(['']);
  const [recommendations, setRecommendations] = useState(['']);

  const addEducation = () => {
    setEducations([...educations, '']);
  };

  const removeEducation = (index: number) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  

  const handleSubmit = () => {
    // Handle the form submission here
    console.log({
      name,
      jobTitle,
      contactNumber,
      location,
      email,
      password,
      educations,
      experiences,
      recommendations,
    });
  };

  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../../assets/bg.png')}  // Replace 'image.png' with the actual image file path
        style={styles.image}
      />
      <Text style={styles.headingText}>VIEW DETAILS</Text>

      <View style={styles.profContainer}>
      
      <View style={styles.rectangle}>
      <View style={styles.cover}>

      <ScrollView contentContainerStyle={styles.container}>

    
    <Text style={styles.TitleText}>Name</Text>
    <Text style = {styles.bodyText}>Job Title</Text>
    <Text>{'\n'}</Text>

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
            <Text>{'\n'}</Text>

            
      <Text style = {styles.TitleText}>Education</Text>
            <Text style = {styles.bodyText}>Job Title</Text>
        <Text>{'\n'}</Text>


        <Text style = {styles.TitleText}>Experience</Text>
            <Text style = {styles.bodyText}>Job Title</Text>
        <Text>{'\n'}</Text>

        <Text style = {styles.TitleText}>Recommendation</Text>
            <Text style = {styles.bodyText}>Job Title</Text>
        <Text>{'\n'}</Text>

</ScrollView>
</View>
<TouchableOpacity style={styles.delButton}>
            <Text style={styles.buttonText}>Add Worker</Text>
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
  container: {
    padding: 20,
    marginTop: 1,
    marginBottom:60,
  },
  cover: {
    padding: 20,
    marginTop: 30,
    marginBottom:80,
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
  TitleText:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 31,
        left: 18,
    textAlign: 'left',
    color: '#FFFFFF',
  },
  Title: {
    position: 'absolute',
    width: 88,
    height: 31,
    marginTop:120,
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
  imageContainer: {
    position: 'absolute',
    width: 410,
    height: 900,
    left: 1,
    top: 0,
  },
  image: {
    width: '100%',  // Make the image take up the entire width of the container
    height: '100%',  // Make the image take up the entire height of the container
    resizeMode: 'cover',  // Adjust the resizeMode as needed (e.g., 'cover', 'contain', 'stretch')
  },
  headingText: {
    fontSize: 32,
    textAlign: 'center',
    position: 'absolute',
    left: 96,
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
  }, rectangle18: {
    position: 'absolute',
    width: 222,
    height: 60,
    left: 85,
    top: 751,
    backgroundColor: '#FFC436',
    borderRadius: 20,
  },
  delButton: {
    position: 'absolute',
    width: 150,
    height: 60,
    left: 110,
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
    
  },rectangle23: {
    position: 'absolute',
    width: 339,
    height: 38,
    left: 1,
    top: 20,
    backgroundColor: 'rgba(220, 220, 220, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(220, 220, 220, 0.5)',
    borderRadius: 10,
  },

  
  
});
