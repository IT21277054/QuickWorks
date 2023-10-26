//1page
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface Iworker {
  _id:string;
name: string;
email:string;
   
}

export default function RequestWorkers() {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const [workerData, setWorkerData] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    // Fetch data from the API
    fetch('https://ls4445t2-8000.asse.devtunnels.ms/api/admin/all')
      .then((response) => response.json())
      .then((data) => setWorkerData(data.workers))
      .catch((error) => console.error('Error fetching data:', error));
      console.log(workerData);
  }, []);

  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../../assets/bg.png')}
        style={styles.image}
      />
      <Text style={styles.headingText}>WORKER{'\n'}REQUESTS</Text>

      <View style={styles.profContainer}>
        <Image
          source={require('../../assets/acceptedImage.png')}
          style={styles.profile}/>
          <View style={styles.rectangle}>
            <View style = {styles.rec}>
          <ScrollView contentContainerStyle={styles.container}>

            {workerData.map((worker:Iworker) =>
            <View style={styles.list} key = {worker._id}>
              <Text style={styles.text}>{worker.name}</Text>
              <Text style={styles.TitleText}>{worker.email}</Text>

              <TouchableOpacity style={styles.delButton}  
              // onPress={() => navigation.navigate("delete")} 
              >
              <Text style={styles.buttonText}>Send mail</Text>
              </TouchableOpacity>

              <View style={styles.rectangle24}></View>
            </View>
            )}
            </ScrollView>
            </View>
            <TouchableOpacity style={styles.viewButton}  
              onPress={() => navigation.navigate("allWorkers")}>
                <Text style={styles.buttonText}>View Workers</Text>
              </TouchableOpacity>
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
  container: {
    padding: 20,
    marginTop: -20,
    marginBottom:50,
  },
  rec:{
    marginTop: 15,
    marginBottom: 74,

  },
  list: {
    padding: 20,
    marginTop: 15,
left:-19,
marginBottom: 55,

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 0,
    position: 'absolute',
  },
  headingText: {
    fontSize: 32,
    textAlign: 'center',
    position: 'absolute',
    left: 45,
    zIndex: 1,
    top: 58,
  },
  rectangle: {
    position: 'absolute',
    width: 378,
    height: 600,
    left: '180%',
    marginLeft: -188,
    top: 120,
    zIndex: 1,
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
  TitleText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 31,
    left: 25,
    top: 58,
    textAlign: 'left',
    color: '#FFFFFF',
  },
  delButton: {
    position: 'absolute',
    width: 120,
    height: 40,
    left: 225,
    top: 80,
    zIndex: 1,
    backgroundColor: '#FFC436',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButton:{
    position: 'absolute',
    width: 140,
    height: 50,
    left: 140,
    top: 540,
    zIndex: 1,
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
    top: -60,
    borderRadius: 15,
  },
  rectangle24: {
    position: 'absolute',
    width: 353,
    height: 131,
    left: 12,
    top: 12,
    zIndex: 0,
    backgroundColor: '#DCDCDC',
    opacity: 0.5,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 10,
  },
});