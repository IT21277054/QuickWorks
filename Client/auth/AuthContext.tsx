import React,{createContext, useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";
import { Alert } from "react-native";
export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isLoading, setLoading] = useState(false);
    const [userToken,setUserToken] = useState(null);
    const [userInfo,setUserInfo] = useState(null);

    const login =async (email:string,password:string) =>{
        setLoading(true)
        await axios.post(
            "https://bw10fhxj-8000.asse.devtunnels.ms/api/account/login",
            {email:email, password:password })
            .then(res => {
                let userInfo = res.data
                console.log(res.data.token)
                setUserInfo(userInfo)
                setUserToken(res.data.token)

                AsyncStorage.setItem('userInfo',JSON.stringify(userInfo))
                AsyncStorage.setItem('userToken',userToken)
            })
            .catch(err => {
                Alert.alert(
                    "error",
                    'User Credentials are Invalid',
                    [
                      {
                        text: "Cancel",
                        onPress: () => Alert.alert("Cancel Pressed"),
                        style: "cancel",
                      },
                    ],
                    {
                      cancelable: true,
                      onDismiss: () =>
                        Alert.alert(
                          "This alert was dismissed by tapping outside of the alert dialog."
                        ),
                    }
                  );
            })
            
        
        setLoading(false)
    }
    const logout =() =>{
        setLoading(true)
        setUserToken(null);
        AsyncStorage.removeItem('userInfo')
        AsyncStorage.removeItem('userToken')
        setLoading(false)
    }

    const isLoggedIn = async()=>{
        try{
            setLoading(true)
            let userInfo = await AsyncStorage.getItem('userInfo')
            let userToken = await AsyncStorage.getItem('userToken')

            userInfo = JSON.parse(userInfo)
            if(userInfo){
                setUserToken(userToken)
                setUserInfo(userInfo)
            }
           
            setLoading(false)
        }catch(err:any){
            console.log('is logged in error',err)
        }
    }

    useEffect(()=>{
        isLoggedIn()
    },[])
   return(
    <AuthContext.Provider value ={{login,logout,isLoading,userToken}}>
        {children}
    </AuthContext.Provider>
   )
}

