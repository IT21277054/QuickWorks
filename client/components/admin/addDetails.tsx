  // import React, { useState } from 'react';
  // import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
  // import { Button as PaperButton,IconButton  } from 'react-native-paper';
  // import Icon from 'react-native-vector-icons/Feather'; // You can choose a different icon library if desired
  // import { useNavigation } from '@react-navigation/native';



  // export default function Addworkerdetails() {
  //   const [bank, setbank] = useState('');
  //   const [bankAccNo, setbankAccNo] = useState('');

   

  //   const navigation = useNavigation();


  //   const handleSubmit = () => {
  //     // Handle the form submission here
  //     console.log({
  //       bank,
  //       bankAccNo,
       
  //     });
  //   };

  //   return (

  //     <View style={styles.imageContainer}>
  //       <Image
  //         source={require('../../assets/bg.png')}  // Replace 'image.png' with the actual image file path
  //         style={styles.image}
  //       />
  //       <Text style={styles.headingText}>ADD Bank Details </Text>

  //       <View style={styles.profContainer}>
        
  //       <View style={styles.rectangle}>
  //     <View style={styles.cover}>

  //       <ScrollView contentContainerStyle={styles.container}>

  // <View style={styles.formField}>
  //   <Text style={styles.inputText}>Bank name:</Text>
  //   <TextInput
  //   style={styles.rectangle23}
  //     value={bank}
  //     onChangeText={setbank}
  //   />

  // </View>
  // <View style={styles.formField}>
  //   <Text style={styles.inputText}>Account Number:</Text>
  //   <TextInput
  //   style={styles.rectangle23}
  //     value={bankAccNo}
  //     onChangeText={setbankAccNo}
  //   />
  // </View>
  
  // </ScrollView>
  // <TouchableOpacity style={styles.button}>
  //         <Text style={styles.buttonText}>Submit</Text>
  //       </TouchableOpacity>
  // </View>

  //       <Image
  //         source={require('../../assets/WorkerProf.jpeg')}  // Replace 'image.png' with the actual image file path
  //         style={styles.profile}
  //       />
          
  //           </View>

  //     </View>

  //     </View>
      
  //   );
  // }

  // const styles = StyleSheet.create({
  //   container: {
  //     padding: 20,
  //     marginTop: -20,
  //     marginBottom:50,
  //   },
  //   cover: {
  //     padding: 20,
  //     marginTop: 50,
  //     marginBottom:80,
  //   },
  //   formField: {
  //     marginBottom: 16,
  //     marginTop: 20,
  //     marginLeft:-18,

      
  //   },
  //   imageContainer: {
  //     position: 'absolute',
  //     width: 410,
  //     height: 900,
  //     left: 1,
  //     top: 0,
  //   },
  //   image: {
  //     width: '100%',  // Make the image take up the entire width of the container
  //     height: '100%',  // Make the image take up the entire height of the container
  //     resizeMode: 'cover',  // Adjust the resizeMode as needed (e.g., 'cover', 'contain', 'stretch')
  //   },
  //   headingText: {
  //     fontSize: 32,
  //     textAlign: 'center',
  //     position: 'absolute',
  //     left: 96,
  //     zIndex: 1, // Ensure the text is above the image
  //     top: 52 // Adjust this value as needed to position the text at the top
  //   },
  
  //   rectangle: {
  //     position: 'absolute',
  //     width: 378,
  //     height: 679,
  //     left: '180%',
  //     marginLeft: -188, // Half of the width to center it horizontally
  //     top: 70,
  //     backgroundColor: '#3330E4',
  //     borderRadius: 14,
  //   }, rectangle18: {
  //     position: 'absolute',
  //     width: 222,
  //     height: 60,
  //     left: 85,
  //     top: 751,
  //     backgroundColor: '#FFC436',
  //     borderRadius: 20,
  //   },
  //   button: {
  //     position: 'absolute',
  //   width: 150,
  //   height: 60,
  //   left: 110,
  //   top: 550,
  //   backgroundColor: '#FFC436',
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',

  //   },
  //   buttonText: {
  //     color: 'white',
  //   },
  //   inputText: {
  //     color: 'white',
  //     fontSize:16,
  //   },
  //   profContainer: {
  //     position: 'absolute',
  //     width: 40,
  //     height: 40,
  //     left: 130,
  //     top: 90,
  //     borderRadius: 15,
      
  //   },
  //   profile: {
  //     position: 'absolute',
  //     width: 100,
  //     height: 100,
  //     left: 130,
  //     top: -50,
  //     borderRadius: 15,
      
  //   },rectangle23: {
  //     position: 'absolute',
  //     width: 330,
  //     height: 38,
  //     left: 1,
  //     top: 20,
  //     backgroundColor: 'rgba(220, 220, 220, 0.5)',
  //     borderWidth: 1,
  //     borderColor: 'rgba(220, 220, 220, 0.5)',
  //     borderRadius: 10,
  //   },
  
    
    
  // });
