import ListOfResult from "../reuseable_components/ListOfResult";
import ListOfALLResult from "../reuseable_components/ListOfALLResult";
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView  
} from "react-native";
import React, { useState } from "react";
import SearchComponent from "../reuseable_components/SearchComponent";
import userResults from "../result_data/userResults";


const HomeScreen = ({ navigation }) => {
  const [givenWord, setword] = useState("");
  // const [searchApi, resData, errorInfo] = userResults();


  const resData = [
    { id: "1", name: "Flour",price: "$ 20 ",quantity:" 10 lb", image: `https://res.cloudinary.com/grohealth/image/upload/$wpsize_!post-thumbnail!,w_1000,h_600,c_fill,g_auto/v1588092404/Low-Carb-Flour.png` },
    { id: "2", name: "Butter",price: "$ 6 ",quantity:" 250 gm", image: `https://i5.walmartimages.ca/images/Enlarge/293/033/6000201293033.jpg` },
    { id: "3", name: "Ghee",price: "$ 7 ",quantity:" 250 gm", image: `https://cdn.shopify.com/s/files/1/0047/3088/0071/products/Slide1_2ef05e51-9c5e-4c74-8dec-1a0168bdb43e_700x700.png?v=1627576232` },
    { id: "4", name: "Peanut Butter",price: "$ 4.55 ",quantity:" 250 gm", image: `https://www.compassfoods.ca/uploads/1/2/5/5/125542456/s538676712424976109_p3162_i1_w600.jpeg` },
    { id: "5", name: "White Bread",price: "$ 3 ",quantity:" 200 gm", image: `https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00027900000756/e04041efa46d61a60398bf35b99923be_large.png&width=512&type=webp&quality=80` },
    { id: "6", name: "Tomato",price: "$ 2 ",quantity:" 200 gm", image: `https://media.istockphoto.com/photos/cherry-tomatoes-isolated-on-white-background-picture-id1154803469?b=1&k=20&m=1154803469&s=170667a&w=0&h=OzPClwm6nKAGhWeYp3BMtmfePaaheAuR9dsoN8750No=` },
    { id: "7", name: "Flour",price: "$ 20 ",quantity:" 10 lb", image: `https://res.cloudinary.com/grohealth/image/upload/$wpsize_!post-thumbnail!,w_1000,h_600,c_fill,g_auto/v1588092404/Low-Carb-Flour.png` },
    { id: "8", name: "Butter",price: "$ 6 ",quantity:" 250 gm", image: `https://i5.walmartimages.ca/images/Enlarge/293/033/6000201293033.jpg` },
    { id: "9", name: "Ghee",price: "$ 7 ",quantity:" 250 gm", image: `https://cdn.shopify.com/s/files/1/0047/3088/0071/products/Slide1_2ef05e51-9c5e-4c74-8dec-1a0168bdb43e_700x700.png?v=1627576232` },
    { id: "10", name: "Peanut Butter",price: "$ 4.55 ",quantity:" 250 gm", image: `https://www.compassfoods.ca/uploads/1/2/5/5/125542456/s538676712424976109_p3162_i1_w600.jpeg` },
    { id: "11", name: "White Bread",price: "$ 3 ",quantity:" 200 gm", image: `https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00027900000756/e04041efa46d61a60398bf35b99923be_large.png&width=512&type=webp&quality=80` },
    { id: "12", name: "Tomato",price: "$ 2 ",quantity:" 200 gm", image: `https://media.istockphoto.com/photos/cherry-tomatoes-isolated-on-white-background-picture-id1154803469?b=1&k=20&m=1154803469&s=170667a&w=0&h=OzPClwm6nKAGhWeYp3BMtmfePaaheAuR9dsoN8750No=` },
  ];

  const FilterRes = (price) => {
    return (
      resData &&
      resData.filter((obj) => {
        return obj.price === price;
      })
    );
  };

  return (
    <SafeAreaView style={styles.conStyle}>
    <View>
    <Text style={styles.logoStyle}>Grocery Farm</Text>
      <SearchComponent        
        word={givenWord}
        onWordChange={setword}
        style={{ flex: 1 }}
        // onWordSubmit={() => searchApi(givenWord)}
      />
      <ScrollView style={{ padding: 20 ,height:600}}>
        <ListOfResult          
          titleData="Weekly Offers"
          subtitleData="         View All"
          resultsData={resData}
          subtitleOnpress="HomeScreen"
          
        />
        <ListOfResult
          resultsData={resData}
          subtitleData="View All"
          titleData="Favourite Products"
          subtitleOnpress="HomeScreen"
        /> 
        <ListOfALLResult resultsData={resData} titleData="All Product" />
      </ScrollView>
    </View></SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  });
export default HomeScreen;
