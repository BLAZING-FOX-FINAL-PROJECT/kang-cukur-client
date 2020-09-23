import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import OrderCards from "../components/OrderCards";
import DetailsCard from "../components/DetailsCard";
import Header from "../components/Header";
import Colors from "../constants/colors";
import Card from '../components/Card'
import { useDispatch } from "react-redux";
import {getOngoingTransaction} from "../store/action"

export default function OrderScreen({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const dispatch = useDispatch()

  const sample = [
    { name: "kang cukur 1", status: "completed", tanggal: "202020" },
    { name: "kang cukur 2", status: "canceled", tanggal: "212121" },
    { name: "kang cukur 3", status: "canceled", tanggal: "212121" },
    { name: "kang cukur 1", status: "completed", tanggal: "202020" },
    { name: "kang cukur 2", status: "canceled", tanggal: "212121" },
    { name: "kang cukur 3", status: "canceled", tanggal: "222222" },
    { name: "kang cukur 1", status: "completed", tanggal: "202020" },
  ];

  // useEffect(() => {
  //   dispatch()
  // })

  return (
    <View style={styles.container}>
      <View style={{ width: windowWidth, flex: 2 }}>
        <Header title="Orders" />
      </View>
      <View style={{ width: windowWidth, flex: 4, marginTop: -200 }}>
        <Card>
          <Text>
            {JSON.stringify()}
          </Text>
        </Card>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.base1,
    alignItems: "center",
    justifyContent: "center",
    color: Colors.color1,
    backgroundColor: Colors.base2,
  },
});
