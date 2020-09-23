import React, { useEffect, useCallback, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from 'react-native'


// import HomeScreen from "../screens/HomeScreen";
import HomeScreen from "../screens/Message";

// import HomeScreen from "../screens/HomeScreen3";

import HomeScreen from "../screens/HomeScreen3";
import HomeScreen2 from "../screens/HomeScreen2";
// import FailedFindDriverScreen from "../screens/FailedFindDriver"


import VarianCukurScreen from "../screens/VarianCukurScreen";
import RegisterScreen from "../screens/RegisterScreen"
import ProfileScreen from "../screens/ProfileScreen"
import LoginScreen from "../screens/LoginScreen"

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="FiledFindDriver"
//         component={FailedFindDriverScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
      {/* <Stack.Screen
        name="Home2"
        component={HomeScreen2}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VarianCukurScreen"
        component={VarianCukurScreen}
        options={{
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  const [token, setToken] = useState('')
  let userToken 
  useEffect(() => {
    setTimeout(async () => {
      try {
        userToken = await AsyncStorage.getItem("access_token")
        if (userToken) {
          setToken(userToken);
          
        }
      }
      catch (e) {
        console.log(e)
      }
    }, 1000);
  }, [])
  
  

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('access_token');
      setToken(null);
    } catch (e) {
      console.log(e)
    }
  }

  if (token) {
    console.log(token)
    
  } else {
    console.log('tidak ada token')
  }


  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
        onLogout={logout}
        token={token}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
        
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ProfileStackNavigator };
