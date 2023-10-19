import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stepper from './components/customer/customerStatus/Stepper';
import AddDetailsPage from './components/admin/addDetails'
import WorkerProfile from './components/admin/deleteWorker'
import RequestWorkers from './components/admin/requestWorker';
import ViewWorker from './components/admin/viewWorker';
export default function App() {
  return (
    
    <View >
      {/* <ViewWorker /> */}
{/* <RequestWorkers/> */}
      {/* <WorkerProfile/> */}

     <AddDetailsPage/>
      
      {/* <Stepper/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
