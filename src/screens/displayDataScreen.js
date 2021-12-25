import React, { useState, useEffect } from "react";
import yelp from "../API_Data/yelpAPI";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import HomeScreen from "./HomeScreen";

const displayDataScreen = ({ navigation }) => {
  const id = navigation.getParam("id");


  const getResult = async (id) => {
    // const responseData = await yelp.get(`/${id}`);
    // console.log(responseData.data);
    // setResult(responseData.data);
    // setResult();
  };

  const [result, setResult] = useState(null);

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  
  return (
    <View>
      <Text style={styles.titleData}>{result.name}</Text>
                <Text style={styles.normalData}>{result.rating} Starts</Text>
                <Text style={styles.normalData}>{result.review_count} Reviews</Text>
                <Text style={styles.normalData}>{result.phone}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <View><Image style={styles.image} source={{ uri: item }} /></View>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 250,
    margin: 20,
  },
  titleData: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal : 100,
    margin:20
  },
  normalData: {
    fontSize: 15,
    marginHorizontal :20
  },
});

export default displayDataScreen;
