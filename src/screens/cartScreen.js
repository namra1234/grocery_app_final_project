import React, {useState} from "react";
import {View,Text,StyleSheet, FlatList, Image, Button, TouchableOpacity} from "react-native";
import { Feather} from "@expo/vector-icons";
import * as constants from "../constant/constant.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import CartListComponent from "../reuseable_components/CartListComponent";

const cartScreen=({navigation})=>{
  
 return(
     <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
        <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
          >
          <Feather name="arrow-left" size={20} style={styles.Icon} />
          </TouchableOpacity>
          <Text style={styles.logoStyle}> Cart</Text>
        </View>
       <View style={{flex:3}}>
         <View style={{flexDirection:"row", justifyContent:"space-between",margin:20}}>
         <Text style={{fontSize:20,fontWeight:"bold"}}>Products in Your cart</Text>
         <Text style={{fontSize:20, fontWeight:"bold"}}>{constants.cartData.length} items</Text>
         </View>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={constants.cartData}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          
          return (
            <CartListComponent
            resultsData={item} 
          />     
          );
        }}
      />
      </View>
      <View style={{alignItems:"center", flex:1}}>
      <Text style={styles.totalStyle}>Total Cost: 30$</Text>
      <TouchableOpacity onPress={()=>{}} >
        <View style={styles.checkoutStyle}>
        <Text style={{fontSize:20,color:"white"}}>Proceed to Checkout</Text>
        </View>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
 )
}

const styles= StyleSheet.create({ 
  totalStyle:{
   fontSize:25,
   marginTop:10,
   marginLeft:100,
   color:"green",
  },
  logoStyle: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#1B7505",
    
  },
  Icon: {
    marginTop: 10,
    marginHorizontal: 14,
    fontSize: 34,
  },
  smallbuttonStyle: {
    backgroundColor: "#1B7505",
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: "center",
  },
  
  incrementIconStyle: {
    fontSize: 25,
    color: "black",
  },
  checkoutStyle:{
    margin:20,
    borderRadius:20,
    backgroundColor:"green",
    width:300,
    height:50,
    alignItems:"center",
    justifyContent:"center",
  }
});

export default withNavigation(cartScreen);