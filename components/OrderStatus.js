import React from 'react'
import { StyleSheet, View, Text } from 'react-native';


export default function OrderStatus() {
  const styles = StyleSheet.create({
    container: {
      flex: 6,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    }
  });

  return (
    <View style={styles.container}>
      <Text>ORDER STATUS</Text>
    </View>
  )
}
