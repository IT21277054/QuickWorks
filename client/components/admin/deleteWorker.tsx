   //3rd page
   import React, { useEffect, useState } from 'react';
    import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
    import { Button as PaperButton,IconButton  } from 'react-native-paper';
    import axios from 'axios'; // Install axios using "npm install axios" or "yarn add axios"

    interface Iworker {
      workerId:string;
      name: string;
      jobTitle: string;
      contactNumber: number;
      location: string;
      email: string;
      status:string;
    }
    


    export default function deleteWorker() {
      const [name, setName] = useState('');
      const [jobTitle, setJobTitle] = useState('');
      const [contactNumber, setContactNumber] = useState('');
      const [location, setLocation] = useState('');
      const [email, setEmail] = useState('');
      const [status,setStatus]=useState('');

      const [workerData, setWorkerData] = useState([]);

      useEffect(() => {
        // Fetch data from the API for a specific worker
        fetch(`https://ls4445t2-8000.asse.devtunnels.ms/api/admin/worker/${workerId}`)
          .then((response) =>  response.json())
          .then((data) => setWorkerData(data))
          .catch((error) => console.error('Error fetching data:', error));
          console.log(workerData);

      }, []);
      

    
      const handleUpdate = (request: Iworker) => {
          fetch(`http://localhost:8000/api/admin/update/${request.workerId}`, {
        })
          .then((response) => {
            if (response.status === 204) {
              console.log('Worker updated successfully');
              // You can perform any further actions after successful update here.
            } else if (!response.ok) {
              console.error(`Failed to update worker. Status: ${response.status}`);
            }
          })
          .catch((error) => console.error('Error updating worker:', error));
      };
      

      const handleReject = (request: Iworker) => {
        
          // Send a DELETE request to the API to delete the worker
          fetch(`https://ls4445t2-8000.asse.devtunnels.ms/api/admin/delete/${request.workerId}`, {
            method: 'DELETE',
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              console.log('Worker deleted successfully');
              // You can perform any further actions after successful deletion here.
            })
            .catch((error) => console.error('Error deleting worker:', error));
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

          {workerData.map((worker:Iworker) =>
          
          <View key = {worker.workerId}>

      <Text style={styles.text }>{worker.name}</Text><View style={styles.Title}>
              <Text style={styles.TitleText}>Job Title</Text>
              <Text style={styles.bodyText}>{worker.jobTitle}</Text>
              <Text>{'\n'}</Text>

              <Text style={styles.TitleText}>Contact Number</Text>
              <Text style={styles.bodyText}>{worker.contactNumber}</Text>
              <Text>{'\n'}</Text>

              <Text style={styles.TitleText}>Location</Text>
              <Text style={styles.bodyText}>{worker.location}</Text>
              <Text>{'\n'}</Text>

              <Text style={styles.TitleText}>Email</Text>
              <Text style={styles.bodyText}>{worker.email}</Text>
              <Text>{'\n'}</Text>

              <Text style={styles.TitleText}>Status</Text>
              <Text style={styles.bodyText}>{worker.status}</Text>

            </View>
            </View>
                )}

    <Text>{'\n'}</Text>

    <TouchableOpacity style={styles.delButton} onPress={() => {handleReject}}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.chButton} onPress={() => {handleReject}}>
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
function enqueueSnackbar(errorMessage: string, arg1: { variant: string; }) {
  throw new Error('Function not implemented.');
}

