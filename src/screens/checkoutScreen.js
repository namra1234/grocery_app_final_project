import React from "react";
import {View,Text,StyleSheet,TouchableOpacity, TextInput} from "react-native";
import { Feather} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import * as constants from "../constant/constant.js";
import { AsyncStorage } from 'react-native';

const checkoutScreen=({navigation})=>{
  
  const storeData = async (data,val) => {
    
    try {
      await AsyncStorage.setItem(        
        val,data
      );
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

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
          <Text style={styles.logoStyle}>Checkout</Text>
        </View>
        <View style={styles.mainViewStyle}>
        <View style={{flexDirection:"row", justifyContent:"flex-start", padding:20}}>
         <Text style={{fontWeight:"bold",fontSize:20}}>Delivery Address :</Text>
         </View>
         <View style={styles.addressViewStyle}>
         <Text style={{padding:20,fontSize:22,color:"green"}}>
           4859 7e Avenue
           Montreal,Quebec
           H1Y 2M8
         </Text>
         </View>
         <View style={styles.secondViewStyle}>
             <View style={styles.orderSummaryStyle}>
             <Text style={{color:"green", fontWeight:"bold",fontSize:20}} >Order Summary</Text>
             </View>
             <View style={styles.subViewStyle}>
               <Text style={{fontSize:18,color:"green",fontWeight:"bold",}}>Have any coupon?</Text>
               <TextInput
               style={styles.inputStyle}/>
             </View>
             <View style={styles.subViewStyle}>
             <Text style={styles.textStyle}>Sub Total ()</Text>
             <Text style={styles.textStyle}>40 $</Text>
             </View>
             <View  style={styles.subViewStyle}>
             <Text style={styles.textStyle}>Discount</Text>
             <Text style={styles.textStyle}>40 $</Text>
             </View>
             <View style={styles.subViewStyle}>
             <Text style={styles.textStyle}>Delivery Charges</Text>
             <Text style={styles.textStyle}>40 $</Text>
             </View>
             <View style={styles.subViewStyle}>
             <Text style={{margin:10, fontSize:25,fontWeight:"bold"}}>Total</Text>
             <Text style={{margin:10, fontSize:25,fontWeight:"bold"}}>120 $</Text>
             </View>
         </View>
         <View style={styles.buttonViewStyle}> 
             <TouchableOpacity
              onPress={()=>{navigation.navigate("HomeScreen")}}>
                 <View style={styles.cancelButtonStyle}>
                 <Text style={{color:"white",fontSize:18}}>Cancel</Text>
                 </View>
             </TouchableOpacity>
             <TouchableOpacity
             onPress={()=>{
               alert("Order Confirmed and Email confirmation sent successfully"); 


                var orderData= {
                'userData' : constants.currentUserData,
                'orderStatus' : 'On the way',
                'OrderList' : constants.cartData,
                'totalPrice' : '100'
                };

               constants.orderHistory.push(orderData);
               let val=JSON.stringify(constants.orderHistory); 
               storeData(val,'orderHistory');
               constants.cartData=[];               
               navigation.navigate("Timer");
               
               }}>
                 <View style={styles.payButtonStyle}>
                 <Text style={{color:"white",fontSize:18}}>Pay Now</Text>
                 </View>
             </TouchableOpacity>
         </View>
        </View>
     </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    Icon: {
        marginTop: 10,
        marginHorizontal: 14,
        fontSize: 34,
      },
      logoStyle: {
        fontSize: 40,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#1B7505",
      },
      mainViewStyle:{
         flex:1,
         flexDirection:"column",
      },
      addressViewStyle:{
        flex:1,
        borderWidth:1,
        borderColor:"black",
        marginLeft:30,
        width:"80%",
        borderRadius:20,
      },
      secondViewStyle:{
        flex:3,
        borderWidth:1,
        borderColor:"black",
        marginLeft:30,
        width:"80%",
        marginTop:20,
        borderRadius:20,

      },
      orderSummaryStyle:{
        borderBottomWidth:1,
        borderBottomColor:"grey",
        width:"90%",
        alignSelf:"center",
        height:35,
        marginTop:20,
      },
      subViewStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%",
        alignSelf:"center",
        marginTop:10,
      },
      textStyle:{
        margin:5, 
        fontSize:18, 
        color:"grey", 
        fontWeight:"bold",
      },
      payButtonStyle:{
        backgroundColor:"green",
        width:110,
        height:40,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
      },
      cancelButtonStyle:{
        backgroundColor:"grey",
        width:110,
        height:40,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
      },
      inputStyle:{
        borderColor:"green",
        borderWidth:1,
        width:110,
        height:34,
        borderRadius:15,
        alignSelf:"center",
        textAlign:"center",
      },
      buttonViewStyle:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        padding:20, 
        flex:0.7,
       
      }
})

export default withNavigation(checkoutScreen);
