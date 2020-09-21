import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen2";
import OrderScreen from "./screens/OrderScreen";
import HistoryScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "md-home" : "md-home";
            } else if (route.name === "Order") {
              iconName = focused ? "md-list-box" : "md-list";
            } else if (route.name === "History") {
              iconName = focused ? "md-list-box" : "md-list";
            } else if (route.name === "Profile") {
              iconName = focused ? "md-contact" : "md-contact";
            } else {
              iconName = focused ? "md-contact" : "md-contact";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Order" component={OrderScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}