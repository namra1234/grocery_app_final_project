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
import { NavigationEvents } from "react-navigation";


const HomeScreen = ({ navigation }) => {
  const [givenWord, setword] = useState("");
  const [cartNumber, setcartNumber] = useState(constants.cartData.length);

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
           justifyContent:"space-between"            
          }}>
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
        // onWordSubmit={() => searchApi(givenWord)}
      />
      <ScrollView style={{ padding: 20 ,height:"90%"}}>
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
      marginRight: 30,
      // marginBottom:5,
     
      fontSize: 34,
      alignSelf:"flex-end"
    },
    logoStyle: {    
        fontSize: 38,
        // marginRight:30,
        alignSelf: "flex-start",
        fontWeight: "bold",
        color: "#1B7505",
        
      },
  });
export default HomeScreen;
