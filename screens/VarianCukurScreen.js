import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Colors from "../constants/colors";
import VarianList from "../components/VarianList";
import { FontAwesome } from "react-native-vector-icons";

export default function VarianCukurScreen() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [servis, setServis] = useState([]);
  const [customerLatitude, setCustomerLatitude] = useState(0);
  const [customerLongitude, setCustomerLongitude] = useState(0);

  // {customerLatitude, customerLongitude, servis: [{jenisCukur: 'string', hargaCukur: int, jumlah: int}]}

  let latitudeNow;
  let longitudeNow;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        latitudeNow = latitude;
        longitudeNow = longitude
        setCustomerLatitude(latitude);
        setCustomerLongitude(longitude);
      },
      (error) => console.log("error getCurr:", error)
    );
  }, []);

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
      marginTop: 30,
      backgroundColor: Colors.base1,
      width: (windowWidth * 95) / 100,
      height: (windowHeight * 90) / 100,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      padding: 15,
      elevation: 8,
    },
  });

  const sampleVarian = [
    {
      jenisCukur: "Potong rambut pria",
      hargaCukur: 60000,
    },
    {
      jenisCukur: "Potong rambut anak",
      hargaCukur: 30000,
    },
    {
      jenisCukur: "Potong jenggot dan kumis",
      hargaCukur: 25000,
    },
    {
      jenisCukur: "Creambath pria",
      hargaCukur: 50000,
    },
    {
      jenisCukur: "Gentleman massage",
      hargaCukur: 70000,
    },
    {
      jenisCukur: "Gentleman full package",
      hargaCukur: 200000,
    },
  ];

  const addServis = (item) => {
    if (
      servis.filter((el) => {
        return el.jenisCukur === item.jenisCukur;
      }).length
    ) {
      const addSameService = [...servis].map((el) => {
        if (el.jenisCukur === item.jenisCukur) {
          el.jumlah++;
        }
        return el;
      });
      // console.log(addSameService);
      setServis(addSameService);
    } else {
      setServis([...servis].concat({ ...item, jumlah: 1 }));
    }
  };

  const reduceServis = (item) => {
    let removeSameService;
    if (
      servis.filter((el) => {
        return el.jenisCukur === item.jenisCukur;
      }).length
    ) {
      removeSameService = [...servis].map((el) => {
        if (el.jenisCukur === item.jenisCukur) {
          el.jumlah--;
        }
        return el;
      });
    }
    const removeService = removeSameService.filter((el) => {
      return el.jumlah !== 0;
    });
    setServis(removeService);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>{JSON.stringify(customerLatitude)}</Text>
        <Text>{JSON.stringify(customerLongitude)}</Text>
        <View
          style={{
            backgroundColor: Colors.accent,
            alignSelf: "flex-start",
            paddingHorizontal: 10,
            paddingVertical: 2,
            width: "100%",
            borderRadius: 5,
            elevation: 8,
            flex: 5,
          }}
        >
          <Text style={{ fontSize: 26, color: Colors.base1 }}>
            VARIAN CUKUR
          </Text>
          <FlatList
            data={sampleVarian}
            renderItem={({ item, index }) => {
              return (
                <VarianList
                  item={item}
                  addCukurVarian={addServis}
                  reduceCukurVarian={reduceServis}
                />
              );
            }}
            keyExtractor={(item, index) => `${index}`}
          />
        </View>
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: Colors.color1,
            width: (windowWidth * 70) / 100,
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            borderRadius: 50,
            elevation: 8,
          }}
        >
          <Text style={{ color: Colors.base1, fontSize: 30 }}>CUKUR NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
