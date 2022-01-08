import ListOfResult from "../reuseable_components/ListOfResult";
import ListOfALLResult from "../reuseable_components/ListOfALLResult";
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView ,
  TouchableOpacity 
} from "react-native";
import React, { useState } from "react";
import SearchComponent from "../reuseable_components/SearchComponent";
import userResults from "../result_data/userResults";
import * as constants from "../constant/constant.js";


const AllProduct = ({ navigation }) => {
  const [givenWord, setword] = useState("");
  const [fruits, setfruits] = useState(false);
  const [vegetables, setvegetables] = useState(false);
  const [salad, setsalad] = useState(false);
  const [shortLH, setshortLH] = useState(false);
  const [shortHL, setshortHL] = useState(false);

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
<View style={{flexDirection: "row",height:40,alignContent: "space-between",marginLeft:"5%",marginTop:0,width:500}}>
      

      <View
      style={{alignSelf: "center",shadowColor:"black",width:"20%", height:"100%", backgroundColor:fruits ? "#1B7505": "gray" ,borderRadius: 25,}}>
      <TouchableOpacity
              onPress={()=> {
                console.log("Hello");
                fruits ? setfruits(false) : setfruits(true);
              }
              }
            ><Text
      style={{alignSelf: "center",paddingTop:"10%"}}
      >Fruits</Text>
      </TouchableOpacity>
      </View>


      <View
      style={{shadowColor:"black",width:"25%", height:"100%", backgroundColor:vegetables ? "#1B7505": "gray",borderRadius: 25, alignSelf: "center",marginHorizontal:10}}>
      
      <TouchableOpacity
              onPress={()=> {
                console.log("vegetables "+vegetables);
                vegetables ? setvegetables(false) : setvegetables(true);
              }
              }
            >
      <Text
      style={{alignSelf: "center",paddingTop:"7%"}}
      >Vegetables</Text>
      </TouchableOpacity>
      </View>


      <View
      style={{shadowColor:"black",width:"20%", height:"100%",borderRadius: 25, backgroundColor:salad ? "#1B7505": "gray"}}>
      
      <TouchableOpacity
              onPress={()=> {
                console.log("salad "+salad);
                salad ? setsalad(false) : setsalad(true);
              }
              }
            >
      <Text
      style={{alignSelf: "center",paddingTop:"10%"}}
      >Salad Kits</Text>
      </TouchableOpacity>
      </View>
      
      </View>

      <View style={{flexDirection: "row",height:40 ,alignContent: "space-between",marginLeft:"5%",marginTop:10,marginBottom:10}}>  

      <View
      style={{shadowColor:"black",width:"40%", height:"100%", backgroundColor:shortLH ? "#1B7505": "gray" ,borderRadius: 25,marginRight:"10%"}}>
            <TouchableOpacity
              onPress={()=> {
                console.log("Hello");
                console.log("shortLH "+shortLH);
                shortLH ? setshortLH(false) : setshortLH(true);
              }
              }
            >
      <Text
      style={{alignSelf: "center",paddingTop:"7%"}}
      >Price low to high</Text></TouchableOpacity> 
      </View>



      <View
      style={{shadowColor:"black",width:"40%", height:"100%",borderRadius: 25, backgroundColor: shortHL ? "#1B7505": "gray"}}>
      <TouchableOpacity
              onPress={()=> {
                console.log("Hello");
                console.log("shortHL "+shortHL);
                shortHL ? setshortHL(false) : setshortHL(true);
              }
              }
            >
      <Text
      style={{alignSelf: "center",paddingTop:"7%"}}
      >Price high to low</Text>
       </TouchableOpacity>
      </View>
     
      </View>
      
        
        <ListOfALLResult resultsData={constants.allProductData} titleData="All Product" />
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
export default AllProduct;
