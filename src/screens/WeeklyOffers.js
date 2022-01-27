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


const WeeklyOffers = ({ navigation }) => {
  const [givenWord, setword] = useState("");
  // const [searchApi, resData, errorInfo] = userResults();

 
  const [WeeklyOfferCurrData, setWeeklyOfferData] = useState(constants.weeklyOfferData);
  

  const FilterRes = (givenWord) => {
    const filterData2 = [];
    for(let i = 0; i < constants.weeklyOfferData.length; i++)
    {
      if(constants.weeklyOfferData[i].name.toLowerCase().includes(givenWord.toLowerCase()))
      {
        filterData2.push(constants.weeklyOfferData[i]);
      }
    }    
    setWeeklyOfferData(filterData2);
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
        
        <ListOfALLResult  resultsData={WeeklyOfferCurrData} titleData="Weekly Offers" />
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
export default WeeklyOffers;
