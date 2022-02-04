import React,{useState} from "react";
import {View,Text,StyleSheet,TouchableOpacity, TextInput} from "react-native";
import { Feather} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import SearchBar from "../reuseable_components/SearchBar";
import * as constants from "../constant/constant.js";
import { AsyncStorage } from 'react-native';
import axios from "axios";

const Subtotal = 40;
const Discount = 0;
const Delivery = 15;
const Total = [Subtotal+Delivery+Discount];

const apiURL=`https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send`;

const emailConfirmation=()=>{
  console.log("Hello");
    axios(apiURL,{
    method: "POST",
    headers:{
    'content-type': 'application/json',
    'x-rapidapi-host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
    'x-rapidapi-key': '715c5ee500msh0c02117a5ae5965p1c9911jsn5a847ac72784'
    },
    data: {
      personalizations: [{to: [{email: constants.currentUserData[0].email}], subject: 'Order Confirmation'}],
      from: {email: 'groceryfarm@gmail.com'},
      content: [{type: 'text/plain', value: 'Your order is confirmed and be delivered in 30 minutes.'}]
    }
  })
  .then((response)=>{
    console.log(response);
  })
  .catch((error => alert(error)))
}


const deliveryScreen=({navigation})=>{

  const [adress,setAdress] = useState("");
  
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
           <SearchBar onTermSubmit={(e)=>setAdress(e.description)}/>
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
             <Text style={styles.textStyle}>Sub Total ( )</Text>
             <Text style={styles.textStyle}>{Subtotal} $</Text>
             </View>
             <View  style={styles.subViewStyle}>
             <Text style={styles.textStyle}>Discount</Text>
             <Text style={styles.textStyle}>{Discount} $</Text>
             </View>
             <View style={styles.subViewStyle}>
             <Text style={styles.textStyle}>Delivery Charges</Text>
             <Text style={styles.textStyle}>{Delivery} $</Text>
             </View>
             <View style={styles.subViewStyle}>
             <Text style={{margin:10, fontSize:25,fontWeight:"bold"}}>Total</Text>
             <Text style={{margin:10, fontSize:25,fontWeight:"bold"}}>{Total} $</Text>
             </View>
         </View>
         <View style={styles.buttonViewStyle}> 
             <TouchableOpacity
              onPress={()=>{navigation.navigate("Cart")}}>
                 <View style={styles.cancelButtonStyle}>
                 <Text style={{color:"white",fontSize:18}}>Cancel</Text>
                 </View>
             </TouchableOpacity>
             <TouchableOpacity
             onPress={()=>{

              

            
              var tempTotalCost=0;
 
              for(var i=0; i < constants.cartData.length ; i++)
              {
                
                tempTotalCost+=(constants.cartData[i].price*parseInt(constants.cartData[i].qty));
                
                console.log(tempTotalCost);
              }
              var orderData= {
              'userData' : constants.currentUserData,
              'orderStatus' : 'On the way',
              'OrderList' : constants.cartData,
              'totalPrice' : tempTotalCost,
              'orderId':constants.orderHistory.length+1
              };
              
               adress? (emailConfirmation(),
                              alert("Order Confirmed and Email confirmation sent successfully"),
                              constants.orderHistory.push(orderData),
                              storeData(JSON.stringify(constants.orderHistory),'orderHistory'),
                              constants.cartData=[],
                              navigation.pop(),
                              navigation.pop(),                              
                              navigation.navigate("Timer",{adress}))
                              :alert("Please Select delivery address");

               
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
        flex:0,
        marginLeft:10,
        width:"90%",
      },
      secondViewStyle:{
        flex:2,
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

export default withNavigation(deliveryScreen);