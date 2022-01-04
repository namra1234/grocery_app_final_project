import React,{useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const CartListComponent = ({ resultsData}) => {
  const [count, setCount] =useState(Math.round(resultsData.qty));
  

  return (
    <View style={styles.itemStyle}>
                <View style={{height:100,width:"50%"}}>
                <Image style={styles.imageStyle} source={{ uri: resultsData.image }}/>
                </View> 
                <View style={{flexDirection:"column",padding:5, marginLeft:10,}}>
                <Text style={styles.headingStyle}>{resultsData.name}</Text> 
                <Text style={styles.subHeadingStyle}>${resultsData.price}</Text>
                <Text style={styles.subHeadingStyle}>{resultsData.weight}</Text>
                <View style={{flexDirection:"row", marginLeft:30,padding:5,justifyContent:"space-evenly",width:100}}>
                <TouchableOpacity
                onPress={() => {
                  if (count > 1) {
                    setCount(count - 1);
                    var temp=count-1;
                    resultsData.qty = "" + temp;
                  }
                }}
              >
                <View style={styles.smallbuttonStyle}>
                  <Text style={styles.incrementIconStyle}>-</Text>
                </View>
              </TouchableOpacity>
              <Text style={{alignSelf:"center",fontSize:20}}>{resultsData.qty}</Text>
              <TouchableOpacity
                onPress={() => {
                  setCount(count + 1);
                  var temp=count+1;
                  resultsData.qty = "" + temp; }}
              >
                <View style={styles.smallbuttonStyle}>
                  <Text style={styles.incrementIconStyle}>+</Text>
                </View>
              </TouchableOpacity>
                </View>
              </View>
              </View>
  );
};

const styles = StyleSheet.create({
  itemStyle:{
    flexDirection:"row",
    borderRadius:25,
    borderWidth:1,
    borderColor:"black",
    padding:20,
    margin:5,
    width:"80%",
    marginLeft:40,
  },
  imageStyle:{
    width:"100%",
    height:"115%",
    borderRadius:3,
  },
  headingStyle:{
    fontWeight:"bold",
    fontSize:25,
    height: 30,
    marginLeft:20,
    alignSelf:"center",
    //backgroundColor:"grey"
  },
  subHeadingStyle:{
    alignSelf:"center",
    fontSize: 18,
    marginLeft: 30,
   // backgroundColor:"red"
  },
  textStyle:{
    marginTop:10,
    fontWeight:"bold",
    color:"green",
  }, 
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
    width: 25,
    height: 25,
    borderRadius: 30,
    alignItems: "center",
  },
  incrementIconStyle: {
    fontSize: 20,
    color: "black",
  },
});

export default withNavigation(CartListComponent);
