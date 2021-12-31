import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { Feather, AntDesign } from "@expo/vector-icons";

const DetailScreen = ({ navigation }) => {
  const productData = navigation.getParam("productData");
  const [isFavourite, setisFavourite] = useState(productData.isFavourite);
  const [count, setCount] = useState(Math.round(productData.qty));

  return (
    <SafeAreaView style={styles.conStyle}>
      <View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Feather name="arrow-left" size={20} style={styles.Icon} />
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
                source={require("../../assets/star.png")}
              />
              <Image
                style={styles.StartIcon}
                source={require("../../assets/star.png")}
              />
              <Image
                style={styles.StartIcon}
                source={require("../../assets/star.png")}
              />
              <Image
                style={styles.StartIcon}
                source={require("../../assets/star.png")}
              />
              <Image
                style={styles.StartIcon}
                source={require("../../assets/star.png")}
              />
            </View>

            <Text style={styles.smallTextStyle}>(4.5 Avg)</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              console.log("Hello");

              isFavourite == "true"
                ? (productData.isFavourite = "false")
                : (productData.isFavourite = "true");
              setisFavourite(productData.isFavourite);
            }}
          >
            <AntDesign
              name={isFavourite == "true" ? "heart" : "hearto"}
              style={styles.smallIcon}
            />
          </TouchableOpacity>
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
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (count > 0) {
                    setCount(count - 1);
                    var temp=count-1;
                  productData.qty = "" + temp;
                  }
                }}
              >
                <View style={styles.smallbuttonStyle}>
                  <Text style={styles.incrementIconStyle}>-</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.smallTextStyle1}>
                {count > 9 ? count : `0${count}`}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setCount(count + 1);
                  var temp=count+1;
                  productData.qty = "" + temp;
                }}
              >
                <View style={styles.smallbuttonStyle}>
                  <Text style={styles.incrementIconStyle}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.smallheadingStyle}>
              Price -{" "}
              <Text style={styles.smallTextStyle}>{productData.price}</Text>{" "}
            </Text>
          </View>
        </View>
      </View>
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
    fontFamily: "MooLahLah-Regular",
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
    fontSize: 20,
    color: "orange",
  },
  favIcon: {
    marginTop: 10,
    height: 30,
    width: 30,
    color: "orange",
  },
});

export default withNavigation(DetailScreen);
