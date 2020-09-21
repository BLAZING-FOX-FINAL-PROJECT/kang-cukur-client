import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../constants/colors";
import Header from "../components/Header";

export default function HistoryScreen({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: windowWidth,
      backgroundColor: Colors.base2,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (

    <View style={styles.container}>
      <View style={styles.container}>
        <View style={{ width: "100%", flex: 2 }}>
          <Header title="History" />
        </View>
        <View style={{ width: "100%", flex: 4, marginTop: -200 }}>
          <Text>HISTORY</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
