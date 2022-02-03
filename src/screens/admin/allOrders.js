import React from 'react';
import { Image, FlatList,View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {MaterialIcons} from '@expo/vector-icons';
import * as constants from "../../constant/constant.js";
import { Feather, AntDesign } from "@expo/vector-icons";

const allOrders = ({navigation})=> {
    const value1 = 'Order No';
    const value2 = 'Order Id';
    const value3 = 'Order Status';
    const value5 = 'Total Bill';

    resultsData =  constants.orderHistory;
        return(<SafeAreaView style={styles.conStyle}>
          <View>
            
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
          <Text style={styles.logoStyle}> Order List</Text>
        </View>
             
            <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        data={resultsData}
        keyExtractor={(resultsData) => resultsData.id}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <TouchableOpacity
            onPress={()=>{
             const products=item.OrderList;
              navigation.navigate("DetailsListOfHistory",{products});
            }
          }
          >
            <View style={{borderColor: 'black', width: '80%', height: 200, marginTop: 20, marginLeft: 40, borderWidth: 2, borderRadius: 10}}>
            <View style ={{ justifyContent: 'flex-start', marginTop:10, marginLeft: 8, flexDirection: 'column', justifyContent:'space-between'}} >
            <Text style = {{fontSize: 20}}>{value2} - {item.orderId}</Text>
            <Text style = {{fontSize: 20}}>Customer Name - {item.userData[0].name} </Text>
            <Text style = {{fontSize: 20}}>Phone No. - {item.userData[0].PhoneNumber} </Text>
            <Text style = {{fontSize: 20}}>{value3}  -  {item.orderStatus}</Text>
            <Text style = {{fontSize: 20}}>Total Item -  {item.OrderList.length} </Text>
            <Text style = {{fontSize: 20}}>{value5} -  $ {item.totalPrice}</Text>

            </View>
            
            </View>
            </TouchableOpacity>
          );
        }}
      />

    <Text style={{marginBottom:160}}>  </Text>
         

</View>
                
</SafeAreaView>
            );
};

const styles = StyleSheet.create({
  Icon: {
    marginTop: 10,
    marginHorizontal: 14,
    fontSize: 34,
  },
  conStyle: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 45,
  },
  logoStyle: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#753B05",
  },
});

export default allOrders;