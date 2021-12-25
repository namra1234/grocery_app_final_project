import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const ListOfALLResult = ({ titleData, resultsData, navigation }) => {
  if (!resultsData.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.titleData}>{titleData}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={resultsData}
        keyExtractor={(resultsData) => resultsData.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("displayDataScreen", { id: item.id })
              }
            >
              <View style={{ padding: 10, alignItems: "center" ,width:180 }}>
                <Image style={styles.imagesStyle} source={{ uri: item.image }} />
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Text>{item.quantity}</Text>
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
  imagesStyle: {    
    width: 120,
    borderRadius: 4,
    height: 150,
  },
});

export default withNavigation(ListOfALLResult);
