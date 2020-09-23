import React, { useEffect, useState, useCallback } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Switch, Image, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard, AsyncStorage } from 'react-native';
import Colors from '../constants/colors';
import { Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import {postLogin} from '../store/action/index'

export default function Login({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [validNumber, setValidNumber] = useState(false)
  const [isSecureText, setIsSecureText] = useState(true)
  let access_token = useSelector((state) => state.access_token);
  let dispatch = useDispatch();
  const [access, setAccess] = useState('')

  const getName = useCallback(async () => {

    setAccess(await AsyncStorage.getItem("access_token"));

  }); 
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  useEffect(() => {
    getName()

  }, [])

  const numberInputHandler = input => {
    setPhoneNumber(input.replace(/[^0-9]/g, ''))
    if (phoneNumber.length > 10) {
      setValidNumber(true)
    } else {
      setValidNumber(false)

    }
  }

  const changeSecureText = () => {
    setIsSecureText(!isSecureText)
  }

  const loginHandler = () => {
    const payload = {
      phoneNumber,
      password
    }
    dispatch(postLogin(payload));
    setPhoneNumber('')
    setPassword('')
    navigation.navigate("Home")
  }
  let token
  if (access) {
    token = (
      <View>
        <Text>
          {JSON.stringify(access, null, 2)}
        </Text>
      </View>
    )
  }

  const goRegister = () => {
    navigation.navigate("Register")
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>

      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.textTitle}>{isEnabled ? 'MITRA': 'CUSTOMER' } LOGIN</Text>
        </View>
        {/* {token} */}
        <View style={styles.container}>
          <Switch
            // trackColor={{ false: "#767577", true: "#81b0ff" }}
            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            trackColor={"#767577"}
            thumbColor={Colors.accent}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View>

        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputFirst}>
            <Entypo name="phone" size={24} color="black" />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              onChangeText={input => numberInputHandler(input) }
              value={phoneNumber}
              placeholder="Phone Number"
            />

          </View>
          <Entypo name="check" size={24} color={validNumber ? Colors.accent : '#d2d2d2'} />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputFirst}>
            <Entypo name="lock" size={24} color="black" />
            <TextInput
              style={styles.input}
              secureTextEntry={isSecureText}
              onChangeText={text => setPassword(text)}
              value={password}
              placeholder="Password"
            />

          </View>
          <TouchableOpacity onPress={changeSecureText}>
            <Entypo name={isSecureText? "eye-with-line" : "eye"} size={24} color="black" />

          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => loginHandler()}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        {null && <TouchableOpacity
          style={styles.buttonOutline}
          onPress={() => goRegister()}
        >
          <Text style={styles.buttonTextOutline}>Register</Text>
        </TouchableOpacity>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    maxWidth: '90%',
    borderBottomWidth:1,
    borderBottomColor: Colors.accent
  },
  inputFirst: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  header: {
    marginVertical:20
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  formContainer: {
    marginBottom: 20
  },
  fotoProfile: {
    borderColor: 'black',
    borderRadius: 70,
    width: 120,
    height: 120,
    marginTop: -90,
  },
  input: {
    width: 300,
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal:10
  },
  button: {
    alignItems: "center",
    backgroundColor: Colors.accent,
    padding: 10,
    width: '80%',
    borderRadius: 20,
    elevation: 8,
    marginTop: 30
  },
  buttonOutline: {
    alignItems: "center",
    borderColor: Colors.accent,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 20,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  buttonTextOutline: {
    color: Colors.accent,
    fontWeight: 'bold',
    fontSize: 18
  }
})


