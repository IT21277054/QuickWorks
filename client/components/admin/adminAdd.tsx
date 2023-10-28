import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Button as PaperButton,IconButton  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather'; // You can choose a different icon library if desired
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

interface Iworker {
  name: string;
  jobTitle: string;
  contactNumber: number;
  location: string;
  email: string;
  qualifications: {
      education: string;
      experience: string;
      recommendation: string;
  }; 
}

export default function Add() {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [educations, setEducations] = useState('');
  const [experiences, setExperiences] = useState('');
  const [recommendations, setRecommendations] = useState('');

  const navigation = useNavigation();


  const handleSubmit = async () => {
    validateInputs();

    // Handle the form submission here
    const workerData = {
      name,
      jobTitle,
      contactNumber,
      location,
      email,
      password,
      educations,
      experiences,
      recommendations,
    };
    console.log(workerData)

     // Use fetch or any API client to send the data to your API
     await axios.post('https://ls4445t2-8000.asse.devtunnels.ms/api/admin/add', {
      ...workerData
    })
      .then((response) => {
        if (response.status === 200) {
          // Handle success, e.g., navigate to a success screen
          navigation.navigate('allWorkers');
        } else {
          // Handle errors, e.g., show an error message
          console.error('Form submission failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const validateInputs = () => {
    let isValid = true; // Assume all fields are valid initially
  
    // Validation for the "name" field
    if (!name) {
      alert('Name is required');
      isValid = false;
    }
  
    // Validation for the "jobTitle" field
    if (!jobTitle) {
      alert('Job Title is required');
      isValid = false;
    }
  
     // Validation for the "contactNumber" field
  if (!contactNumber) {
    alert('Contact Number is required');
    isValid = false;
  } else if (!/^\d{10}$/.test(contactNumber)) {
    alert('Contact Number should have exactly 10 digits');
    isValid = false;
  }

    // Validation for the "location" field
    if (!location) {
      alert('Location is required');
      isValid = false;
    }

    if (!email) {
      alert('Email is required');
      isValid = false;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      alert('Invalid email format');
      isValid = false;
    }

     // Validation for the "password" field
  if (!password) {
    alert('Password is required');
    isValid = false;
  } else if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    isValid = false;
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]+$/.test(password)) {
    alert('Password should include at least one lowercase letter, one uppercase letter, one digit, and one special character');
    isValid = false;
  }
  
    // Validation for the "education" field
    if (!educations) {
      alert('Education is required');
      isValid = false;
    }
  
    // Validation for the "experience" field
    if (!experiences) {
      alert('Experience is required');
      isValid = false;
    }
  
    // Validation for the "recommendation" field
    if (!recommendations) {
      alert('Recommendation is required');
      isValid = false;
    }
  
    return isValid; // Return true if all validations pass
  }
  
  
  

  return (

    <View style={styles.imageContainer}>
      <Image
        source={require('../../assets/bg.png')}  // Replace 'image.png' with the actual image file path
        style={styles.image}
      />
      <Text style={styles.headingText}>ADD DETAILS</Text>

      <View style={styles.profContainer}>
      
      <View style={styles.rectangle}>
    <View style={styles.cover}>

      <ScrollView contentContainerStyle={styles.container}>

<View style={styles.formField}>
  <Text style={styles.inputText}>Name:</Text>
  <TextInput
  style={styles.rectangle23}
    value={name}
    onChangeText={(text) => {
      setName(text);
    }}
  />

</View>
<View style={styles.formField}>
  <Text style={styles.inputText}>Job Title:</Text>
  <TextInput
  style={styles.rectangle23}
    value={jobTitle}
    onChangeText={setJobTitle}
    
  />
</View>
<View style={styles.formField}>
  <Text style={styles.inputText}>Contact Number:</Text>
  <View style={styles.rectangle23}>
  <TextInput
    value={contactNumber}
    onChangeText={setContactNumber}
  />
  </View>
</View>
<View style={styles.formField}>
  <Text style={styles.inputText}>Location:</Text>
  <TextInput
  style={styles.rectangle23}
    value={location}
    onChangeText={setLocation}
  />
</View>
<View style={styles.formField}>
  <Text style={styles.inputText}>Email:</Text>
  <View style={styles.rectangle23}>
  <TextInput
    value={email}
    onChangeText={setEmail}
  />
  </View>
</View>
<View style={styles.formField}>
  <Text style={styles.inputText}>Password:</Text>
  <TextInput    
  style={styles.rectangle23}
    value={password}
    onChangeText={setPassword}
  />
</View>

<View style={styles.formField}>
<Text style={styles.inputText}>Education:</Text>
<TextInput    
  style={styles.rectangle23}
    value={educations}
    onChangeText={setEducations}
  />

{/* <TouchableOpacity onPress={addEducation}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon name="plus" size={30} color="yellow" />
    </View>
  </TouchableOpacity> */}
</View>

<View style={styles.formField}>
<Text style={styles.inputText}>Experience:</Text>
<TextInput    
  style={styles.rectangle23}
    value={experiences}
    onChangeText={setExperiences}
  />
  </View>


<View style={styles.formField}>

<Text style={styles.inputText}>Recommendation:</Text>
<TextInput    
  style={styles.rectangle23}
    value={recommendations}
    onChangeText={setRecommendations}
  />
  </View>  
</ScrollView>
<TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
</View>

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
    marginTop: -40,
    marginBottom:50,
  },
  cover: {
    padding: 20,
    marginTop: 50,
    marginBottom:260,
  },
  formField: {
    marginBottom: 16,
    marginTop: 20,
    marginLeft:-18,

    
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
    top: 12 // Adjust this value as needed to position the text at the top
  },

  rectangle: {
    position: 'absolute',
    width: 378,
    height: 670,
    left: '180%',
    marginLeft: -188, // Half of the width to center it horizontally
    top: 15,
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
  button: {
    position: 'absolute',
  width: 150,
  height: 60,
  left: 110,
  top: 550,
  backgroundColor: '#FFC436',
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',

  },
  buttonText: {
    color: 'white',
  },
  inputText: {
    color: 'white',
    fontSize:16,
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
    width: 330,
    height: 38,
    left: 1,
    top: 20,
    // color: 'white',
    backgroundColor: 'rgba(220, 220, 220, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(220, 220, 220, 0.5)',
    borderRadius: 10,
  },

  
  
});
