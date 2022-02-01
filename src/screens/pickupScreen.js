import React,{useState} from "react";
import {View,Text,StyleSheet,TouchableOpacity, TextInput,FlatList} from "react-native";
import { Feather} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButtonRN from "radio-buttons-react-native";
import * as constants from "../constant/constant.js";
import { AsyncStorage } from 'react-native';

const Subtotal = 40;
const Discount = 0;
const Total = [Subtotal+Discount];


const pickupScreen=({navigation})=>{
  const [adress,setAdress] = useState("");

    const storeDataDB = async (data,val) => {
    
    try {
      await AsyncStorage.setItem(        
        val,data
      );
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

    const storeData = [
        {
            label: "2925 Sherbrooke Street East"
        },
        {
            label: "2535 Rue Masson"
        },
        {
            label: "4325 Rue Jean-Talon East"
        },
        {
            label: "7605 Boulevard Maurice-Duplessis"
        },
        {
            label: "6825 Ch.de la Cote-des-Neiges"
        }
    ]

    const data=[
        {
            id:"1"
        },
    ]
  
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
         <Text style={{fontWeight:"bold",fontSize:20}}>Store Address :</Text>
         </View>
         <View style={styles.addressViewStyle}>
         <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(data) => data.id}
          renderItem={() => {
              return(
                <RadioButtonRN
                data={storeData}
                boxStyle={{width:"90%",alignSelf:"center"}}
                selectedBtn={(e)=>setAdress(e.label)}
                value={adress}
                icon={
                    <Icon
                    name="check-circle"
                    size={22}
                    color="green"
                    />
                }
                />
              )
          }}
          />
          
         
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
             <Text style={styles.textStyle}>{Subtotal} $</Text>
             </View>
             <View  style={styles.subViewStyle}>
             <Text style={styles.textStyle}>Discount</Text>
             <Text style={styles.textStyle}>{Discount} $</Text>
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
              alert("Order Confirmed and Email confirmation sent successfully"); 


              var orderData= {
              'userData' : constants.currentUserData,
              'orderStatus' : 'On the way',
              'OrderList' : constants.cartData,
              'totalPrice' : '100',
              'orderId':constants.orderHistory.length+1
              };

             constants.orderHistory.push(orderData);
             let val=JSON.stringify(constants.orderHistory); 
             storeDataDB(val,'orderHistory');
             constants.cartData=[];
             navigation.pop();
             navigation.pop();
               navigation.navigate("PickupTimer",{adress});
               
               
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
        flex:2,
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
        marginTop:25,
      },
      cancelButtonStyle:{
        backgroundColor:"grey",
        width:110,
        height:40,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
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
        padding:10, 
        flex:1,
        //backgroundColor:"red"
       
      }
})

export default withNavigation(pickupScreen);