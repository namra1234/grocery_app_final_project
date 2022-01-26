import React,{useState, component} from 'react';
import {View, Text, TouchableOpacity, ScrollView,StyleSheet,SafeAreaView} from 'react-native';
import SearchComponent from "../../reuseable_components/SearchComponent";
import * as constants from "../../constant/constant.js";
import AdminListOfALLResult from "./AdminListOfALLResult";
import {Ionicons} from '@expo/vector-icons';
import {Menu, MenuOptions, MenuOption, MenuTrigger,MenuContext, MenuProvider} from 'react-native-popup-menu';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const welcome= ({navigation})=> {
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
      <View style={{marginLeft: 310, alignItems: 'center',marginTop: -43}}>
        <MaterialCommunityIcons name="truck-delivery-outline" style={{fontSize: 40, }} onPress={()=>navigation.navigate('allOrders')}/>
        <Text style = {{fontSize: 10}}>ORDERS</Text>
        </View>
      <SearchComponent        
          word={givenWord}
          onWordChange={setword}
          style={{ flex: 1 }}
          // onWordSubmit={() => searchApi(givenWord)}
        />
        <ScrollView style={{ padding: 20 ,height:"90%"}}>
          
          <AdminListOfALLResult resultsData={constants.allProductData} titleData="Admin Panel" />
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