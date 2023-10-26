import React,{useContext} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import CustomerStack from "./CustomerStack";
import { AuthContext } from '../auth/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import AuthStack from './AuthStack';




function AppNav() {
    const {isLoading,userToken} = useContext(AuthContext);

    if(isLoading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
        )
      
    }
    return(
        <NavigationContainer>
            {userToken !== null ? <CustomerStack/>: <AuthStack/>}
        </NavigationContainer>
    )
}


export default AppNav;