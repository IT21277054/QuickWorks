import { createStackNavigator } from '@react-navigation/stack';
import QrScanner from '../components/customer/pages/QrScanner';
import {NavigationContainer} from '@react-navigation/native';
import DeleteWorker from '../components/admin/deleteWorker';
import AllWorkers from '../components/admin/allWorkers';
import AdminAdd from '../components/admin/adminAdd';


const Stack = createStackNavigator();

export default function AdminStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="allWorkers" component={AllWorkers}          options={{ headerShown: false }}
 />
      <Stack.Screen name="deleteWorker" component={DeleteWorker}          options={{ headerShown: false }}
 />
      <Stack.Screen name="adminAdd" component={AdminAdd}          options={{ headerShown: false }}
 />


    </Stack.Navigator>
    </NavigationContainer>
  );
}