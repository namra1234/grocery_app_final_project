import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {MaterialIcons} from '@expo/vector-icons';

const allOrders = ({navigation})=> {
    const value1 = 'Order No';
    const value2 = 'Order Id';
    const value3 = 'Date of Delivery';
    const value4 = 'Time of Delivery';
    const value5 = 'Total Bill';

    resultsData =  constants.allProductData;
        return(
            <ScrollView>
            <MaterialIcons name='arrow-back-ios' onPress={()=>navigation.navigate('welcome')} style={{}}/>
            
            
            <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={resultsData}
        keyExtractor={(resultsData) => resultsData.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={() =>
                navigation.navigate("adminDetailScreen", {productData: item })
              }
            >
              <View style={{ padding: 10, alignItems: "center", width: 180 }}>
                <Image
                  style={styles.imagesStyle}
                  source={{ uri: item.image }}
                />
                <Text>{item.name}</Text>
                <Text>$ {item.price}</Text>
                <Text>{item.weight}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

            <View style={{borderColor: 'black', width: 320, height: 200, margin: 60, marginLeft: 40, borderWidth: 2, borderRadius: 10}}>
            <View style ={{ justifyContent: 'flex-start', marginTop:10, marginLeft: 8, flexDirection: 'column', justifyContent:'space-between'}} >
            <Text style = {{fontSize: 20}}>{value1}</Text>
            <Text style = {{fontSize: 20}}>{value2}</Text>
            <Text style = {{fontSize: 20}}>{value3}</Text>
            <Text style = {{fontSize: 20}}>{value4}</Text>
            <Text style = {{fontSize: 20}}>{value5}</Text>

            </View>
            <View style ={{marginLeft:200, marginTop:-130, justifyContent: 'flex-end', flexDirection: 'column'}}>
                <Text style = {{fontSize: 20, }}>1</Text>
                <Text style = {{fontSize: 20, }}>80921</Text>
                <Text style = {{fontSize: 20, }}>28-01-2022</Text>
                <Text style = {{fontSize: 20}}>08:05:16</Text>
                <Text style = {{fontSize: 20}}>69$</Text>

            </View>
            </View>


</ScrollView>

                

            );
};

export default allOrders;