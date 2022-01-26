import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,ScrollView
} from "react-native";
import { AsyncStorage } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { Feather, AntDesign } from "@expo/vector-icons";
import * as constants from "../../constant/constant";
import { RadioButton } from 'react-native-paper';
import LogInScreen from "../LogInScreen";

const adminDetailScreen = ({ navigation }) => {
  const productData = navigation.getParam("productData");
  const WeeklyDeal = navigation.getParam("WeeklyDeal");
  const [checked, setChecked] = React.useState('first');
  const [price, setPrice] = React.useState(''+productData.price);
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

  return (
    <SafeAreaView style={styles.conStyle}>
     <ScrollView>
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
          <Text style={styles.logoStyle}> Product</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignSelf: "center",
              color: "red",
            }}
          >
            <View style={{ flexDirection: "row", margin: 0, padding: 0 }}>
              <Image
                style={styles.StartIcon}
                source={require("../../../assets/star.png")}
              />
              <Image
                style={styles.StartIcon}
                source={require("../../../assets/star.png")}
              />
              <Image
                style={styles.StartIcon}
                source={require("../../../assets/star.png")}
              />
              <Image
                style={styles.StartIcon}
                source={require("../../../assets/star.png")}
              />
              <Image
                style={styles.StartIcon}
                source={require("../../../assets/star.png")}
              />
            </View>

            <Text style={styles.smallTextStyle}>(4.5 Avg)</Text>
          </View>

        </View>
        <View style={{ padding: 10, alignItems: "center" }}>
          <Image
            style={styles.imagesStyle}
            source={{ uri: productData.image }}
          />

          <Text style={styles.headingStyle}>{productData.name}</Text>
          <Text style={styles.smallheadingStyle1}>
            Net Weight - {productData.weight}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
              marginTop: "5%",
              marginBottom:"15%"
            }}
          >
            <View style={{
            flexDirection: "row",
          }}>
            <Text style={styles.incrementIconStyle}>$</Text>
            <TextInput autoCorrect={false}
        autoCapitalize='none'
        keyboardType = 'numeric'
        value={price}
      onChangeText={price => setPrice(price)}

        style={{fontSize: 15,marginLeft: 10,marginBottom:10, borderColor: 'black', borderWidth:1, width: 100, height: 50, borderRadius: 10}} />
       </View>
       
          </View>

          
        </View>
      
        <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                  if(WeeklyDeal)
                            {
                              var P_original=parseFloat(price);
                            productData.price=P_original;
                            storeData(JSON.stringify(constants.weeklyOfferData),'weeklyOfferData');
                            }
                            else{
                              var P_original=parseFloat(price);
                            productData.price=P_original;
                            storeData(JSON.stringify(constants.allProductData),'allProductData');
                            }          
                }}
              >
                
                  <Text style={styles.incrementIconStyle}> Save Data </Text>
                
              </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {

                            if(WeeklyDeal)
                            {
                            constants.weeklyOfferData=constants.weeklyOfferData.filter(item => item !== productData);
                            storeData(constants.weeklyOfferData,'weeklyOfferData');
                            }
                            else{
                            constants.allProductData=constants.allProductData.filter(item => item !== productData);
                            storeData(constants.allProductData,'allProductData');
                            }
                            
                            navigation.pop();
                }}
              >
                
                  <Text style={styles.incrementIconStyle}> Delete Product </Text>
                
              </TouchableOpacity>
      </View>      
      
      
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  incrementIconStyle: {
    fontSize: 25,
    color: "black",
  },
  smallbuttonStyle: {
    backgroundColor: "#753B05",
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: "center",
    // marginHorizontal: 5,
  },
  buttonStyle: {
    backgroundColor: "#753B05",
    width: "80%" ,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    alignSelf:"center",
    // position:"absolute",
    marginTop:20,
    justifyContent:"center",
    bottom:30,
    
    // marginHorizontal: 5,
  },
  removebuttonStyle: {
    backgroundColor: "gray",
    width: "80%" ,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    alignSelf:"center",
    position:"absolute",
    justifyContent:"center",
    bottom:30,
    
    // marginHorizontal: 5,
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
  titleData: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  subtitleData: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#753B05",
    alignSelf: "flex-end",
    marginRight: 20,
    marginLeft: 130,
  },
  headingStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  smallheadingStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#753B05",
    alignSelf: "center",
  },
  smallheadingStyle1: {
    fontSize: 20,
    color: "gray",
    marginBottom: 10,
    alignSelf: "center",
  },
  smallTextStyle: {
    fontSize: 22,
    fontStyle: "italic",
    alignSelf: "center",
    color: "black",
  },
  smallTextStyle1: {
    fontSize: 22,
    fontStyle: "italic",
    alignSelf: "center",
    color: "black",
    marginHorizontal: 15,
  },
  Style: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  imagesStyle: {
    width: 250,
    borderRadius: 4,
    height: 150,
  },
  Icon: {
    marginTop: 10,
    marginHorizontal: 14,
    fontSize: 34,
  },
  smallIcon: {
    marginTop: 10,
    marginHorizontal: 14,
    fontSize: 25,
    color: "red",
  },
  StartIcon: {
    marginTop: 10,
    // fontSize: 20,
    // color: "orange",
  },
  favIcon: {
    marginTop: 10,
    height: 30,
    width: 30,
    color: "orange",
  },
});

export default withNavigation(adminDetailScreen);
