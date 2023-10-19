import { createStackNavigator } from '@react-navigation/stack';
import QrScanner from '../components/customer/pages/QrScanner';
import {NavigationContainer} from '@react-navigation/native';
import Scanner from '../components/customer/pages/Scanner';
import UserPayment from '../components/customer/pages/UserPayment';
import PaymentStatus from '../components/customer/pages/PaymentStatus';
import Stepper from '../components/customer/customerStatus/Stepper';
import CompletedStatus from '../components/customer/pages/CompletedStatus';


const Stack = createStackNavigator();

export default function CustomerStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="stepper" component={Stepper}  options={{headerShown:false}}/>
        <Stack.Screen name="paymentStatus" component={PaymentStatus} />
      <Stack.Screen name="qrHome" component={QrScanner} options={{headerShown:false}} />
      <Stack.Screen name="scanner" component={Scanner} />
      <Stack.Screen name="payment" component={UserPayment} />
      <Stack.Screen name="reviewStatus" component={CompletedStatus} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}