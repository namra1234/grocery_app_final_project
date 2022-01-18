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

  const [FavouriteDataCurrData, setFavouriteData] = useState(constants.favouriteProductData);
  

  const FilterRes = (givenWord) => {

    const filterData1 = [];
    for(let i = 0; i < constants.favouriteProductData.length; i++)
    {
      if(constants.favouriteProductData[i].name.toLowerCase().includes(givenWord.toLowerCase()))
      {
        filterData1.push(constants.favouriteProductData[i]);
      }
    }    
    setFavouriteData(filterData1);


  };


  return (
    <SafeAreaView style={styles.conStyle}>
    <View>
    <Text style={styles.logoStyle}>Grocery Farm</Text>
      <SearchComponent        
        word={givenWord}
        onWordChange={setword}
        style={{ flex: 1 }}
        onWordSubmit={() => FilterRes(givenWord)}
      />
      <ScrollView style={{ padding: 20 ,height:"90%"}}>
        
        <ListOfALLResult resultsData={FavouriteDataCurrData} titleData="Favourite Products" />
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
        
      },
  });
export default FavouriteProduct;
