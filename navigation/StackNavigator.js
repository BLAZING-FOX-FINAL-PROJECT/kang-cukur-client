import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


// import HomeScreen from "../screens/HomeScreen";
import HomeScreen from "../screens/Message";

// import HomeScreen from "../screens/HomeScreen3";

import HomeScreen from "../screens/HomeScreen3";

import VarianCukurScreen from "../screens/VarianCukurScreen";

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
    <Stack.Navigator>
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

export { MainStackNavigator };
