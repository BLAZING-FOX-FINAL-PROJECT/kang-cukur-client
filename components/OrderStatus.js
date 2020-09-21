import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import Colors from "../constants/colors";
import Card from "../components/Card";

export default function ProfileScreen({ navigation }) {
  //butuh di tempel data kang cukur
  const [name, setname] = useState("Kang Cukur");
  const [handphone, setHandphone] = useState("+62 823 620 973 21");
  const [orderStatus, setOrderStatus] = useState("canceled");
  const [alamat, setAlamat] = useState(
    "Jl. Cinta Boulevard No.3 RT 07/02 Bintaro, Pasangrahan, Jepun, 12330"
  );
  return (
    <View style={styles.screen}>
      <Card style={styles.profileContainer}>
        <Image
          style={styles.fotoProfile}
          source={{
            uri:
              "https://images.unsplash.com/photo-1520338661084-680395057c93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          }}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.handphone}>{handphone}</Text>
          <Text style={styles.alamat}>{alamat}</Text>
        </View>
      </Card>
      <View>
        <Text style={styles.header}>Order {orderStatus}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ fontSize: 12, color: Colors.base2 }}>
          Tap anywhere to continue
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    color: "#303030",
    backgroundColor: Colors.accent,
  },
  header: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    marginTop: 40,
    fontSize: 26,
    fontWeight: "900",
    fontStyle: "italic",
  },
  footer: {
    width: "80%",
    alignItems: "center",
    textAlign: "center",
    marginTop: 30,
    color: Colors.base2,
  },
  profileContainer: {
    width: "80%",
    alignItems: "center",
    height: 200,
    marginTop: 120,
  },
  fotoProfile: {
    borderColor: Colors.color1,
    borderRadius: 70,
    width: 120,
    height: 120,
    marginTop: -90,
  },
  name: {
    marginTop: 3,
    fontSize: 26,
    textAlign: "center",
  },
  handphone: {
    color: Colors.color1,
    fontSize: 14,
    marginTop: 10,
  },
  alamat: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "100",
    textAlign: "left",
  },
});
