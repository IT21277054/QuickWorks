import React,{useContext} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import CustomerStack from "./CustomerStack";
import { AuthContext } from '../auth/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import AuthStack from './AuthStack';
import jwtDecode from 'jwt-decode';
import AdminStack from './admin.route';




function AppNav() {
    const {isLoading,userToken} = useContext(AuthContext);
    const decodedUser = jwtDecode(userToken)
    const userRole = decodedUser.role
    if(isLoading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
        )
      
    }
    return(
        <NavigationContainer>
            {userToken !== null && userRole === 'USER' ? <CustomerStack/> : userToken !== null && userRole === 'ADMIN' ? <AdminStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}


export default AppNav;