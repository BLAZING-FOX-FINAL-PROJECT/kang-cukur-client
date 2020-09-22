import React, { useEffect, useState } from 'react'
import { Switch, ScrollView, FlatList,  Image, Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import { FontAwesome5, Fontisto, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import OrderCards from "../components/OrderCards3";


const dummyData = [
  {
    title: 'Barber Idaz Anggara', url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1
  },
  {
    title: 'Barber Laurentius', url: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2
  },
  {
    title: 'Barber Aris Satya', url: 'https://images.unsplash.com/photo-1542940763-af472da7199a?ixlib=rb-1.2.1&auto=format&fit=crop&w=859&q=80',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3
  },
  {
    title: 'Barber Ichlasul', url: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 4
  }
]

const sample = [
  { name: "kang cukur 1", status: "completed", tanggal: "202020", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
  { name: "kang cukur 2", status: "canceled", tanggal: "212121", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
  { name: "kang cukur 3", status: "canceled", tanggal: "212121", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
  { name: "kang cukur 1", status: "completed", tanggal: "202020", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
  { name: "kang cukur 2", status: "canceled", tanggal: "212121", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
  { name: "kang cukur 3", status: "canceled", tanggal: "212121", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
  { name: "kang cukur 1", status: "completed", tanggal: "202020", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
  { name: "kang cukur 2", status: "canceled", tanggal: "212121", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" },
  { name: "kang cukur 3", status: "canceled", tanggal: "212121", rating: "4.5", customer: "kang cukur 1", info: "Service Rambut" }
]


const HomeScreen2 = ({ navigation }) => {
  const [name, setName] = useState('John DOE')
  const [telepon, setTelepon] = useState('+62 823 6209 7321')

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  
  
  return (
    <View style={StyleSheet.screen}>
      <View style={styles.header}>
        <View style={styles.header1}>
          <View style={styles.profile}>
            <Image style={styles.fotoProfile}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1520338661084-680395057c93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
              }}
            />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.textHeader2}>Hi, {name}</Text>
            <Text style={styles.textHeader1}>{isEnabled ? 'Ready To Work' : 'Busy'}</Text>

          </View>
        </View>
        <View style={styles.header2}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.carouselContainer}>
          <Carousel data={dummyData} />

        </View>
        <View style={styles.groupTitle}>

          <Text style={styles.textTitle}>History</Text>

        </View>
        <FlatList
          
          data={sample}
          renderItem={({ item, index }) => {
            return <OrderCards item={item} index={index} />;
          }}
          keyExtractor={(item, index) => `${index}`}
        />
      </ScrollView>
      

    </View>
  )
}

const styles = StyleSheet.create({
  textHeader2: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  textHeader1: {
    fontSize: 14,
    color: '#d2d2d2'
  },
  headerText: {
    justifyContent: 'flex-start',
    marginLeft: 20,
    paddingTop: 5

  },
  profile: {
    borderRadius: 50,
    width: 60,
    height: 60,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',

  },
  fotoProfile: {
    width: '100%',
    height: '100%',


  },

  header1: {
    flexDirection: 'row'
  },
  header: {
    alignItems: 'center',
    backgroundColor: Colors.accent,
    height: 120,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  screen: {
    flex: 1,
  },
  groupTitle: {
    paddingTop: 10,
    paddingLeft: 20,
    flexDirection: "row",
    marginBottom:20
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 24
  },
  carouselContainer: {
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
    // backgroundColor: Colors.accent
  },
  iconContainer: {
    alignItems: 'center',
    marginRight: 10,
    width: 80
  },
  card: {
    width: 250,
    backgroundColor: Colors.accent,
    margin: 10
  },
  btnGroup: {
    marginTop: 10,
    borderColor: Colors.accent,
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    width: 160,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  iconText: {
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    marginTop: 20
  }
})

export default HomeScreen2