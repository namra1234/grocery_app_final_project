import ListOfResult from "../reuseable_components/ListOfResult";
import ListOfALLResult from "../reuseable_components/ListOfALLResult";
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView  
} from "react-native";
import React, { useState } from "react";
import SearchComponent from "../reuseable_components/SearchComponent";
import userResults from "../result_data/userResults";
import * as constants from "../constant/constant.js";


const FavouriteProduct = ({ navigation }) => {
  const [givenWord, setword] = useState("");
  // const [searchApi, resData, errorInfo] = userResults();

  const FilterRes = (price) => {
    return (
      resData &&
      resData.filter((obj) => {
        return obj.price === price;
      })
    );
  };

  return (
    <SafeAreaView style={styles.conStyle}>
    <View>
    <Text style={styles.logoStyle}>Grocery Farm</Text>
      <SearchComponent        
        word={givenWord}
        onWordChange={setword}
        style={{ flex: 1 }}
        // onWordSubmit={() => searchApi(givenWord)}
      />
      <ScrollView style={{ padding: 20 ,height:600}}>
        
        <ListOfALLResult resultsData={constants.favouriteProductData} titleData="Favourite Products" />
      </ScrollView>
    </View></SafeAreaView>
  );
};

const styles = StyleSheet.create({
    conStyle: {
      backgroundColor: "white",
      flex: 1,
      paddingTop: 45,    
    },
    logoStyle: {    
        fontSize: 40,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#1B7505",
        fontFamily: "MooLahLah-Regular",
      },
  });
export default FavouriteProduct;
