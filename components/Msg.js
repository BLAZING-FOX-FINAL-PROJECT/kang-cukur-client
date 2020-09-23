import React from "react"
import { StyleSheet, View, Image, Text} from 'react-native'
import Colors from "../constants/colors"

const Msg = ({message, status}) => {
  return (
    <View style={styles.container}>
      {
        status === 'completed' ? (
          <View style={styles.chatKiri}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM8uXhVk-H56P7eVwwth5qnFm8-zEWIYsY1A&usqp=CAU' }} />

            </View>
            <Text style={[styles.styleTextKanan, { marginLeft: 10 }]} >
              {message}
            </Text>
          </View>
        
        ) : (
            <View style={styles.chatKanan}>
              <Text style={[styles.styleTextKanan, {marginRight: 10} ]} >
                {message}
              </Text>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM8uXhVk-H56P7eVwwth5qnFm8-zEWIYsY1A&usqp=CAU' }} />

              </View>
            </View>
        )
      }
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  chatKiri: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10
  },
  chatKanan: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-end'
  },
  styleTextKiri: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    backgroundColor: 'white',
    
  },
  styleTextKanan: {
    borderColor: Colors.accent,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },

  imageContainer: {
    borderWidth:1,
    width: 40,
    height: 40,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default Msg