import { createStackNavigator } from '@react-navigation/stack';
import QrScanner from '../components/customer/pages/QrScanner';
import {NavigationContainer} from '@react-navigation/native';
import DeleteWorker from '../components/admin/deleteWorker';
import AllWorkers from '../components/admin/allWorkers';


const Stack = createStackNavigator();

export default function AdminStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="deleteWorker" component={DeleteWorker} />
      <Stack.Screen name="allWorkers" component={AllWorkers} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}