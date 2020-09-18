import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen2({ navigation }) {
  
  function buttonOnPress() {
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Text>Kang Cukur</Text>
      <Button onPress={buttonOnPress} title="Back Home" />
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


