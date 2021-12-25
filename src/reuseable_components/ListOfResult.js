import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const ListOfResult = ({ titleData,subtitleData, resultsData,subtitleOnpress, navigation }) => {
  if (!resultsData.length) {
    return null;
  }

  return (
    <View>
    <View style={{
      flexDirection:"row",
      alignContent:"space-between"
    }}>
    <Text style={styles.titleData}>{titleData}</Text>
    <TouchableOpacity
              onPress={()=> {
                console.log("Hello");
                navigation.navigate(`${subtitleOnpress}`);
              }
              }
            >

<Text style={styles.subtitleData}>{subtitleData}</Text>
            </TouchableOpacity>
    
    </View>      
      <FlatList
        showsHorizontalScrollIndicator={true}
        horizontal
        data={resultsData}
        keyExtractor={(resultsData) => resultsData.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              // onPress={() =>
              //   navigation.navigate("displayDataScreen", { id: item.id })
              // }
            >
              <View style={{ padding: 10, alignItems: "center" }}>
                <Image style={styles.imagesStyle} source={{ uri: item.image }} />
                <Text style={styles.headingStyle}>{item.name}</Text>
                <Text>{item.price}      {item.quantity}</Text>               
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* <Text> resultsData: {resultsData && resultsData.length} </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  titleData: {
    fontSize: 18,
    fontWeight: "bold",
    color:"#1B7505"
  },
  subtitleData: {
    fontSize: 18,
    fontWeight: "bold",
    color:"#1B7505",
    alignSelf:"flex-end",
    marginRight:20,
    marginLeft:130
  },
  headingStyle:{
    fontSize: 18,
    fontWeight: "bold",
    color:"black",
    alignSelf:"center",
    marginTop:10,
    marginBottom:10,
   
  },
  imagesStyle: {    
    width: 250,
    borderRadius: 4,
    height: 150,
  },
});

export default withNavigation(ListOfResult);
