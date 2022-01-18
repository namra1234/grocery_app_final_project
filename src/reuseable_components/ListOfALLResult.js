import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const ListOfALLResult = ({
  titleData,
  resultsData,
  navigation,
  subtitleOnpress,
  subtitleData
}) => {
  if (!resultsData.length) {
    return (
      <View style={{ padding: 40, alignItems: "center", height:100 }}>
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between"
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
      <View><Text>No data found</Text></View>
        {/* <Text> resultsData: {resultsData && resultsData.length} </Text> */}
      </View>
    );
  }

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.titleData}>{titleData}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("Hello");
            navigation.navigate(`${subtitleOnpress}`);
          }}
        >
          <Text style={styles.subtitleData}>{subtitleData}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={resultsData}
        keyExtractor={(resultsData) => resultsData.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={() =>
                navigation.navigate("DetailScreen", {productData: item })
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
    color:"#1B7505",
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

export default withNavigation(ListOfALLResult);
