import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

export default function HistoryScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View>History Screen</View>
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


