import React,{useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView,StyleSheet,SafeAreaView} from 'react-native';
import SearchComponent from "../../reuseable_components/SearchComponent";
import * as constants from "../../constant/constant.js";
import AdminListOfALLResult from "./AdminListOfALLResult";

const welcome = ({ navigation }) => {
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
        <ScrollView style={{ padding: 20 ,height:"90%"}}>
          
          <AdminListOfALLResult resultsData={constants.allProductData} titleData="Admin Pannel" />
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
  export default welcome;