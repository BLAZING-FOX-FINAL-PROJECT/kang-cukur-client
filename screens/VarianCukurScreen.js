import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import Colors from "../constants/colors";

export default function VarianCukurScreen() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.base2,
      alignItems: "center",
      justifyContent: "center",
      color: Colors.color1,
    },
    form: {
      flex: 4,
      flexDirection: "column",
      marginTop: 70,
      backgroundColor: Colors.base1,
      width: (windowWidth * 90) / 100,
      height: (windowHeight * 90) / 100,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      padding: 15,
      elevation: 8,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View
          style={{
            backgroundColor: Colors.accent,
            alignSelf: "flex-start",
            paddingHorizontal: 10,
            paddingVertical: 2,
            width: "100%",
            // height: 40,
            borderRadius: 5,
            elevation: 8,
            flex: 4,
          }}
        >
          <Text style={{ fontSize: 26, color: Colors.base1 }}>
            VARIAN CUKUR
          </Text>
        </View>

      </View>
      <View style={{ flex: 2 }}>
        <Text>card pesanan</Text>
      </View>
    </View>
  );
}
