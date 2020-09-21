import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Colors from "../constants/colors";

export default function HomeScreen({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const styles = StyleSheet.create({
    container: {
      flex: 6,
      backgroundColor: Colors.base2,
      alignItems: "center",
      justifyContent: "center",
    },
    jumbotron: {
      width: windowWidth,
      height: 220,
      resizeMode: "contain",
      borderRadius: 10,
    },
    buttons: {
      flex: 4,
      shadowColor: Colors.color1,
      elevation: 8,
    },
    pil: {
      aspectRatio: 1.3,
      resizeMode: "contain",
    },
    carrouselContainer: {
      backgroundColor: Colors.accent,
      flex: 2,
      width: windowWidth,
      height: 200,
      borderBottomStartRadius: 10,
      borderBottomEndRadius: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.carrouselContainer}>
        <Image
          source={require("../assets/jumbotron.jpg")}
          style={styles.jumbotron}
        />
      </View>
      <View style={styles.buttons}>
        <Image
          source={require("../assets/cukur-on-delivery-pil-edited.png")}
          style={styles.pil}
        />
        <Image
          source={require("../assets/cukur-on-barber-pil-edited.png")}
          style={styles.pil}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
