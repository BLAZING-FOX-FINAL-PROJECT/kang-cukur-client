import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import OrderCards from "../components/OrderCards2";
// import DetailsCard from "../components/DetailsCard";
import Header from "../components/Header";
import Colors from "../constants/colors";
import { Col } from "native-base";

export default function FailedFindDriverScreen({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;





  return (

    <View style={styles.container}>
      <Text style={styles.header}>Oops!!</Text>
      <View style={styles.imageContainer}>
        
        <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM8uXhVk-H56P7eVwwth5qnFm8-zEWIYsY1A&usqp=CAU' }} />

      </View>
      <View style={styles.paragraf}>
        <Text style={styles.textTitle}>
          Sory, Cant Find KANG CUKURS
        </Text>
        <Text style={styles.textParagraf}>
          Tukang cukur sedang tidak ada yang aktif,
          Anda bisa mencari dalam 5 menit kemudian.
        </Text>

      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => canceledHandler()}
      >
        <Text style={styles.buttonText}>Back To Home</Text>
      </TouchableOpacity>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  imageContainer: {
    marginVertical: 20,
    width: 200,
    height: 200,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  btnHeaderContainer: {
    flexDirection: 'row',
    width: '100%',

  },
  container: {
    backgroundColor: Colors.base1,
    alignItems: "center",
    color: Colors.color1,
    backgroundColor: Colors.base2,
    justifyContent: 'center',
    flex: 1


  },
  image: {
    width: '100%',
    height: '100%',
  },
  paragraf: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop:40,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  textTitle: {
    marginTop: 10,
    fontSize: 18,
    color: Colors.accent,
    fontWeight: "bold",
    marginBottom:10,
  },
  textParagraf: {
    color: '#303030',
    fontSize: 14,
    textAlign: 'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: Colors.accent,
    padding: 10,
    width: '80%',
    borderRadius: 20,
    elevation: 8,
  },
});
