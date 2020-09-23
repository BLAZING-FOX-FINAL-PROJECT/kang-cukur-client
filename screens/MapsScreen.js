import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getOngoingTransaction } from "../store/action/index";
import { Button, StyleSheet, Text, View, Dimensions, AsyncStorage } from 'react-native';
import MapView from 'react-native-maps';

export default function MapsScreen({ navigation }) {
  const ongoingTransaction = useSelector(state => state.ongoingTransaction)
  const [access,setAccess] = useState('')

  // console.log(ongoingTransaction,'disini')

  const dispatch = useDispatch()

  useEffect(() => {
    accessToken()
    console.log(access, 'disini')
    dispatch(getOngoingTransaction(access))
  },[])

  const accessToken = useCallback(async () => {
    const at = await AsyncStorage.getItem("access_token")
    setAccess(at)
    // setAccess(await AsyncStorage.getItem("access_token"));
   });

  function buttonOnPress() {
    navigation.navigate("Home")
  }

  // <MapView style={styles.mapStyle} initialRegion={{
  //   latitude: 37.78825,
  //   longitude: -122.4324,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // }} />
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(ongoingTransaction,null,2)}</Text>

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


