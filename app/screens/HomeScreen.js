import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {

  function buttonOnPress() {
    navigation.navigate("KangCukur")
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={buttonOnPress} title="Go To Kang Cukur" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


