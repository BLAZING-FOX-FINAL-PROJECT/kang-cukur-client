import React, { useEffect, useState } from 'react'
import { ScrollView,Image, Alert,View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import { FontAwesome5,Fontisto, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';


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



const HomeScreen2 = ({ navigation }) => {
  const [name, setName] = useState('John DOE')
  const [telepon, setTelepon] = useState('+62 823 6209 7321')
  


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
            <Text style={styles.textHeader1}>{telepon}</Text>

          </View>
        </View>
        <View style={styles.header2}>
          <Ionicons name="md-checkmark-circle" size={32} color="white" />
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel data={dummyData} />

      </View>
      <View style={styles.groupTitle}>

        <Text style={styles.textTitle}>Choose Your Service</Text>

      </View>

      <ScrollView horizontal={true}>
        <View style={styles.btnGroup}>

          <Card style={styles.card}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("VarianCukurScreen", {
                  screen: "VarianCukurScreen",
                })
              }
            >
              <View style={styles.iconContainer}>
                <FontAwesome5 name="motorcycle" size={60} color="white" />
                {/* <Text style={styles.iconText}>On Delivery</Text> */}
              </View>
              <Text style={styles.buttonText}>CUKUR ON DELIVERY</Text>
            </TouchableOpacity>



          </Card>
          <Card style={styles.card}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Simple Button pressed')}
            >
              <View style={styles.iconContainer}>

                {/* <Fontisto name="shopping-store" size={60} color="white" /> */}
                <Entypo name="shop" size={60} color="white" />
                {/* <Text style={styles.iconText}>On Location</Text> */}
              </View>

              <Text style={styles.buttonText}>CUKUR ON LOCATION</Text>
            </TouchableOpacity>
          </Card>
        </View>
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
    paddingTop:5
    
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
    alignItems:'center',
    backgroundColor: Colors.accent,
    height: 120,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop:40,
  },
  screen: {
    flex:1
  },
  groupTitle: {
    paddingTop: 10,
    paddingLeft: 20,
    flexDirection: "row"
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 24
  },
  carouselContainer: {
    borderBottomLeftRadius:20,
    borderBottomEndRadius:20,
    // backgroundColor: Colors.accent
  },
  iconContainer: {
    alignItems: 'center',
    marginRight: 10,
    width:80
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
  }
})

export default HomeScreen2