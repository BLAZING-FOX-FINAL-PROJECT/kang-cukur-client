import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import  Colors  from '../constants/colors';
import Card from '../components/Card'
import { Entypo,Ionicons,MaterialIcons } from '@expo/vector-icons'; 
import Carousel from 'react-native-snap-carousel';


export default function HomeScreen2({ navigation }) {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')


  return (
    <View style={styles.screen}>
      {/* <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
})


