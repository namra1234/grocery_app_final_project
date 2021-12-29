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
import  userResults from "../result_data/userResults";
import * as constants from "../constant/constant.js";
import { Feather } from "@expo/vector-icons";


const HomeScreen = ({ navigation }) => {
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
    <View style={{
            flexDirection: "row",
           justifyContent:"space-between"            
          }}>
    <Text style={styles.logoStyle}>  Grocery Farm</Text>
    <Feather name="shopping-cart" size={20} style={styles.Icon} />
    </View>
    
      <SearchComponent        
        word={givenWord}
        onWordChange={setword}
        style={{ flex: 1 }}
        // onWordSubmit={() => searchApi(givenWord)}
      />
      <ScrollView style={{ padding: 20 ,height:600}}>
        <ListOfResult          
          titleData="Weekly Offers"
          subtitleData="View All"
          resultsData={constants.weeklyOfferData}
          subtitleOnpress="WeeklyOffers"          
        />
        <ListOfResult
          resultsData={constants.favouriteProductData}
          subtitleData="View All"
          titleData="Favourite Products"
          subtitleOnpress="FavouriteProduct"
        /> 
        <ListOfALLResult resultsData={constants.allProductData} titleData="All Product" subtitleOnpress="AllProduct"
          subtitleData="View All"
        />
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
    Icon: {
      marginRight: 20,
      marginBottom:5,
     
      fontSize: 34,
      alignSelf:"flex-end"
    },
    logoStyle: {    
        fontSize: 38,
        // marginRight:30,
        alignSelf: "flex-start",
        fontWeight: "bold",
        color: "#1B7505",
        fontFamily: "MooLahLah-Regular",
      },
  });
export default HomeScreen;
