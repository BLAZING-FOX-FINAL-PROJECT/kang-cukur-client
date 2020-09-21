import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

export default function HistoryScreen({ navigation }) {

  return (
    <View style={styles.screen}>
      <Header title="History" />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
});


