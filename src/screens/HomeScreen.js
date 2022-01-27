import ListOfResult from "../reuseable_components/ListOfResult";
import ListOfALLResult from "../reuseable_components/ListOfALLResult";
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import SearchComponent from "../reuseable_components/SearchComponent";
import  userResults from "../result_data/userResults";
import * as constants from "../constant/constant.js";
import { Feather } from "@expo/vector-icons";
import { NavigationEvents } from "react-navigation";


const HomeScreen = ({ navigation }) => {
  const [givenWord, setword] = useState("");
  const [cartNumber, setcartNumber] = useState(constants.cartData.length);


  const [allProductDataCurrData, setAllData] = useState(constants.allProductData);
  const [FavouriteDataCurrData, setFavouriteData] = useState(constants.favouriteProductData);
  const [WeeklyOfferCurrData, setWeeklyOfferData] = useState(constants.weeklyOfferData);
  

  const FilterRes = (givenWord) => {

    const filterData = [];
    for(let i = 0; i < constants.allProductData.length; i++)
    {
      if(constants.allProductData[i].name.toLowerCase().includes(givenWord.toLowerCase()))
      {
        filterData.push(constants.allProductData[i]);
      }
    }    
    setAllData(filterData);


    const filterData1 = [];
    for(let i = 0; i < constants.favouriteProductData.length; i++)
    {
      if(constants.favouriteProductData[i].name.toLowerCase().includes(givenWord.toLowerCase()))
      {
        filterData1.push(constants.favouriteProductData[i]);
      }
    }    
    setFavouriteData(filterData1);


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
    <NavigationEvents

      onDidFocus={()=>{
        setcartNumber(constants.cartData.length);
      }}
/>
    <View>
    <View style={{
            flexDirection: "row",
           justifyContent:"space-between",         
          }}>
    <View style={{flex:1,justifyContent:"flex-start",width:50,height:50}}>
      <TouchableOpacity   onPress={()=>{navigation.navigate("Profile")}}>
      <Image style={styles.imageStyle} source={require('../../assets/guypic.jpg')}/>
      </TouchableOpacity>
    </View>
    <Text style={styles.logoStyle}>  Grocery Farm</Text>
    <View style={{flex:1, alignItems: 'flex-end',  justifyContent:'flex-end'}}>
    <Feather name="shopping-cart" size={20} style={styles.Icon} onPress={()=>{navigation.navigate("Cart")}} />
    {constants.cartData.length >= 0 ? (
                  <View
                    style={{     
                      position: 'absolute',
                      backgroundColor: 'red',
                      width: 20,
                      height: 20,
                      borderRadius: 20,
                      right: 20,
                      top: +10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: "#FFFFFF",
                        fontSize:15,
                      }}>
                      {constants.cartData.length}
                    </Text>
                  </View>
                ) : null}
    </View>
    
    </View>
    
      <SearchComponent        
        word={givenWord}
        onWordChange={setword}
        style={{ flex: 1 }}
        onWordSubmit={() => FilterRes(givenWord)}
      />
      <ScrollView style={{ padding: 20 ,height:"90%"}}>
        <ListOfResult          
          titleData="Weekly Offers"
          subtitleData="View All"
          resultsData={WeeklyOfferCurrData}
          subtitleOnpress="WeeklyOffers"          
        />
        <ListOfResult
          resultsData={FavouriteDataCurrData}
          subtitleData="View All"
          titleData="Favourite Products"
          subtitleOnpress="FavouriteProduct"
        /> 
        <ListOfALLResult resultsData={allProductDataCurrData} titleData="All Product" subtitleOnpress="AllProduct"
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
      marginRight: 30,
      // marginBottom:5, 
      fontSize: 34,
      alignSelf:"flex-end"
    },
    logoStyle: {    
        fontSize: 38,
        //marginRight:30,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#1B7505",
       // backgroundColor:"yellow",
      },
    imageStyle:{
       width:50,
       height:"100%",
       borderRadius:50,
       alignSelf:"center",
       marginLeft:20,
    },
  });
export default HomeScreen;
