import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//All Screen
import HomeScreen from './screens/HomeScreen';
import HomeScreen2 from './screens/HomeScreen2';
// import MapsScreen from './screens/MapsScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="KangCukur" component={HomeScreen2} />
        {/* <Stack.Screen name="Maps" component={MapsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
