import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const WidgetOrderHistoryDetail = ({
  titleData,
  resultsData,
  navigation,
  subtitleOnpress,
  subtitleData
}) => {
 
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={resultsData}
        keyExtractor={(resultsData) => resultsData.id}
        renderItem={({ item }) => {
          return (
            
              <View style={{ padding: 10, alignItems: "center", width: 180 }}>
                <Image
                  style={styles.imagesStyle}
                  source={{ uri: item.image }}
                />
                <Text>{item.name}</Text>
                <Text>$ {item.price}</Text>
                <Text>{item.weight}</Text>
              </View>
          );
        }}
      />
      <Text style={{marginBottom:60}}>  </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleData: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  subtitleData: {
    fontSize: 18,
    fontWeight: "bold",
    color:"#753B05",
    alignSelf:"flex-end",
    marginRight:20,
    marginLeft:130
  },
  imagesStyle: {
    width: 120,
    borderRadius: 4,
    height: 150,
  },
});

export default withNavigation(WidgetOrderHistoryDetail);
