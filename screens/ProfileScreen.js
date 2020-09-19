import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constants/colors'
import Card from '../components/Card';
import Header from '../components/Header';

export default function ProfileScreen({ navigation }) {
  const [name, setname] = useState('Maria Ozawa')
  const [handphone, setHandphone] = useState('+62 823 620 973 21')
  const [alamat, setAlamat] = useState('Jl. Cinta Boulevard No.3 RT 07/02 Bintaro, Pasangrahan, Jepun, 12330')
  return (
    <View style={styles.screen}>
      <Header title="Profile" />
      <Card style={styles.profileContainer}>
        <Image
          style={styles.fotoProfile}
          source={{
            uri:
              'https://images.unsplash.com/photo-1558085324-2f298b28c714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          }}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.handphone}>{handphone}</Text>
        <Text style={styles.alamat}>{alamat}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  profileContainer: {
    width: '80%',
    alignItems: 'center',
    height: 200,
    marginTop: 100
  },
  fotoProfile: {
    borderColor: 'black',
    borderRadius: 70,
    width: 120,
    height: 120,
    marginTop: -90,
  },
  name: {
    marginTop: 10,
    fontSize: 26,
    fontWeight:"bold"
  },
  handphone: {
    color: Colors.color1,
    fontSize: 14
  },
  alamat: {
    marginTop:10,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.color1
  }

});


