import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default function MapsScreen({ navigation }) {

  function buttonOnPress() {
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Text>Maps</Text>
      <MapView style={styles.mapStyle} initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} />
      <Button onPress={buttonOnPress} title="Home" />
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});


