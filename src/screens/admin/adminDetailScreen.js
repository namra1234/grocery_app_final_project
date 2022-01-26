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
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { Feather, AntDesign } from "@expo/vector-icons";
import * as constants from "../../constant/constant";
import { RadioButton } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import {Menu, MenuOptions, MenuOption, MenuTrigger, MenuContext} from 'react-native-popup-menu';

const adminDetailScreen = ({ navigation }) => {
  const productData = navigation.getParam("productData");
  const [isFavourite, setisFavourite] = useState(productData.isFavourite);
  const [isInCart, setisInCart] = useState(productData.isInCart);
  const [count, setCount] = useState(Math.round(productData.qty));
  const [checked, setChecked] = React.useState('first');

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
        style={{fontSize: 15,marginLeft: 10,marginBottom:10, borderColor: 'black', borderWidth:1, width: 100, height: 50, borderRadius: 10}}>    {productData.price} </TextInput>
       </View>
       <View>
          <View
          style={{
            flexDirection: "row",
          }}
        >
          <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      /><Text
      style={{paddingTop:5}}
      >Delivery</Text>
      </View>
      <View
          style={{
            flexDirection: "row",marginBottom:20,
          }}
        >
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /><Text
      style={{paddingTop:5}}
      >Pick up</Text>
         </View>
         </View>
          </View>

          
        </View>
      
        <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                                    
                }}
              >
                
                  <Text style={styles.incrementIconStyle}> Save Data </Text>
                
              </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                                    
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
    backgroundColor: "#1B7505",
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: "center",
    // marginHorizontal: 5,
  },
  buttonStyle: {
    backgroundColor: "#1B7505",
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
    color: "#1B7505",
    
  },
  titleData: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  subtitleData: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1B7505",
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
    color: "#1B7505",
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
