import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../constants/colors";

export default function OrderCards({ item }) {
  return (
    <View style={styles.box}>
      <View style={{ flex: 2, flexDirection: "column" }}>
        <Image
          style={styles.fotoProfile}
          source={{
            uri:
            "https://images.unsplash.com/photo-1520338661084-680395057c93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          }}
        />
      </View>
      <View style={{ flex: 4, flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>{item.name}</Text>
        </View>
        {item.status === "completed" && (
          <View
            style={{
              backgroundColor: Colors.completedButton,
              borderRadius: 5,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: Colors.base2,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                textTransform: "uppercase",
              }}
            >
              {item.status}
            </Text>
          </View>
        )}
        {item.status === "canceled" && (
          <View
            style={{
              backgroundColor: Colors.cancelButton,
              borderRadius: 5,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: Colors.base2,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                textTransform: "uppercase",
              }}
            >
              {item.status}
            </Text>
          </View>
        )}
        <View style={{alignSelf: "center"}}>
            <Text style={{ fontSize: 13, marginTop: 15, color: Colors.color1 }}>Date: {item.tanggal}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: Colors.base1,
    width: "90%",
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    marginTop: 12,
  },
  fotoProfile: {
    borderRadius: 10,
    width: 70,
    height: 70,
  },
});
