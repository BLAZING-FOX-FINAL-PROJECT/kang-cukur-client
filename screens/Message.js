import React, { useState } from 'react';
import { StyleSheet, View, Text,Image, Input, Button, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import Header from '../components/Header'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';

import Msg from '../components/Msg'

export default function Message({ navigation }) {
  const [text, setText] = useState('')
  const [message, setMessage] = useState([])
  const sample = [
    { name: "kang cukur 1", status: "completed", message: "Hai", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 2", status: "canceled", message: "Halo", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 3", status: "canceled", message: "Hai Juga", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 1", status: "completed", message: "Hai", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 2", status: "canceled", message: "Halo", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 3", status: "canceled", message: "Hai Juga", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 1", status: "completed", message: "Hai", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 2", status: "canceled", message: "Halo", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 3", status: "canceled", message: "Hai Juga", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 1", status: "completed", message: "Hai", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 2", status: "canceled", message: "Halo", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 3", status: "canceled", message: "Hai Juga", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 1", status: "completed", message: "Hai", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 2", status: "canceled", message: "Halo", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 3", status: "canceled", message: "Hai Juga", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 1", status: "completed", message: "Hai", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 2", status: "canceled", message: "Halo", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 3", status: "canceled", message: "Hai Juga", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 1", status: "completed", message: "Hai", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 2", status: "canceled", message: "Halo", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 3", status: "canceled", message: "Hai Juga", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 1", status: "completed", message: "Hai", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 2", status: "canceled", message: "Halo", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
    { name: "kang cukur 3", status: "canceled", message: "Hai Jugaasdsiodfiolshdfjsdop;fjl;sdjfg;lsdjfl;jsdl;fjl;adsjfl;ksdnfl;sdjfopjsdl;fgml;sdjgdsfkg;'d", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" }
  ]

  const onSend = () => {
    // tinggal di masukin aja ke data list nya
  }

  return (
    <View style={styles.container}>
      <Header title="Messages" />

      <ScrollView style={styles.chat}>
        <FlatList
          data={sample}
          renderItem={({ item, index }) => {
            return <Msg message={item.message} status={item.status} index={index} />;
          }}
          keyExtractor={(item, index) => `${index}`}
        />

      </ScrollView>
      <View style={styles.buttomContainer}>
        <View styles={styles.inputContainer}>
          <View style={styles.buttomIcon}>

          </View>
          <View style={styles.buttonInput}>
            <TextInput
              style={styles.input}
              onChangeText={text => setMessage(text)}
              value={message}
              placeholder="Type Here ..."
            />
          </View>

        </View>
        <View style={styles.send}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onSend()}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  chat: {
    width: '100%',
    marginBottom: 60,
    padding:10
  },
  input: {
    width:280,
  },
  inputContainer: {
    alignItems: 'center',
  },
  buttonInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width:'100%'
  },
  button: {
    backgroundColor: Colors.accent,
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
  },
  buttonText: {
    fontWeight: 'bold',
    color:'white',
  },
  buttomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'absolute',
    marginBottom: 0,
    bottom: 0,
    alignItems: 'center',
  },
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.base1,
    alignItems: "center",
    color: Colors.color1,
    backgroundColor: Colors.base2,
  },
});
