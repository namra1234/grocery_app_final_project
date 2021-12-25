import ListOfResult from "../reuseable_components/ListOfResult";
import ListOfALLResult from "../reuseable_components/ListOfALLResult";
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView ,
  TouchableOpacity 
} from "react-native";
import React, { useState } from "react";
import SearchComponent from "../reuseable_components/SearchComponent";
import userResults from "../result_data/userResults";


const AllProduct = ({ navigation }) => {
  const [givenWord, setword] = useState("");
  const [fruits, setfruits] = useState(false);
  const [vegetables, setvegetables] = useState(false);
  const [salad, setsalad] = useState(false);
  const [shortLH, setshortLH] = useState(false);
  const [shortHL, setshortHL] = useState(false);

  const resData = [
    { id: "1", name: "Flour",price: "$ 10 ",quantity:" 10 lb", image: `https://res.cloudinary.com/grohealth/image/upload/$wpsize_!post-thumbnail!,w_1000,h_600,c_fill,g_auto/v1588092404/Low-Carb-Flour.png` },
    { id: "2", name: "Butter",price: "$ 5 ",quantity:" 250 gm", image: `https://i5.walmartimages.ca/images/Enlarge/293/033/6000201293033.jpg` },
    { id: "3", name: "Ghee",price: "$ 5 ",quantity:" 250 gm", image: `https://cdn.shopify.com/s/files/1/0047/3088/0071/products/Slide1_2ef05e51-9c5e-4c74-8dec-1a0168bdb43e_700x700.png?v=1627576232` },
    { id: "4", name: "Peanut Butter",price: "$ 3.55 ",quantity:" 250 gm", image: `https://www.compassfoods.ca/uploads/1/2/5/5/125542456/s538676712424976109_p3162_i1_w600.jpeg` },
    { id: "5", name: "White Bread",price: "$ 2 ",quantity:" 200 gm", image: `https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00027900000756/e04041efa46d61a60398bf35b99923be_large.png&width=512&type=webp&quality=80` },
    { id: "6", name: "Tomato",price: "$ 1.23 ",quantity:" 200 gm", image: `https://media.istockphoto.com/photos/cherry-tomatoes-isolated-on-white-background-picture-id1154803469?b=1&k=20&m=1154803469&s=170667a&w=0&h=OzPClwm6nKAGhWeYp3BMtmfePaaheAuR9dsoN8750No=` },
    { id: "7", name: "Flour",price: "$ 10 ",quantity:" 10 lb", image: `https://res.cloudinary.com/grohealth/image/upload/$wpsize_!post-thumbnail!,w_1000,h_600,c_fill,g_auto/v1588092404/Low-Carb-Flour.png` },
    { id: "8", name: "Butter",price: "$ 5 ",quantity:" 250 gm", image: `https://i5.walmartimages.ca/images/Enlarge/293/033/6000201293033.jpg` },
    { id: "9", name: "Ghee",price: "$ 5 ",quantity:" 250 gm", image: `https://cdn.shopify.com/s/files/1/0047/3088/0071/products/Slide1_2ef05e51-9c5e-4c74-8dec-1a0168bdb43e_700x700.png?v=1627576232` },
    { id: "10", name: "Peanut Butter",price: "$ 3.55 ",quantity:" 250 gm", image: `https://www.compassfoods.ca/uploads/1/2/5/5/125542456/s538676712424976109_p3162_i1_w600.jpeg` },
    { id: "11", name: "White Bread",price: "$ 2 ",quantity:" 200 gm", image: `https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00027900000756/e04041efa46d61a60398bf35b99923be_large.png&width=512&type=webp&quality=80` },
    { id: "12", name: "Tomato",price: "$ 1.23 ",quantity:" 200 gm", image: `https://media.istockphoto.com/photos/cherry-tomatoes-isolated-on-white-background-picture-id1154803469?b=1&k=20&m=1154803469&s=170667a&w=0&h=OzPClwm6nKAGhWeYp3BMtmfePaaheAuR9dsoN8750No=` },
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
<View style={{flexDirection: "row",height:40,alignContent: "space-between",marginLeft:"5%",marginTop:0,width:500}}>
      

      <View
      style={{alignSelf: "center",shadowColor:"black",width:"20%", height:"100%", backgroundColor:fruits ? "#1B7505": "gray" ,borderRadius: 25,}}>
      <TouchableOpacity
              onPress={()=> {
                console.log("Hello");
                fruits ? setfruits(false) : setfruits(true);
              }
              }
            ><Text
      style={{alignSelf: "center",paddingTop:"10%"}}
      >Fruits</Text>
      </TouchableOpacity>
      </View>


      <View
      style={{shadowColor:"black",width:"25%", height:"100%", backgroundColor:vegetables ? "#1B7505": "gray",borderRadius: 25, alignSelf: "center",marginHorizontal:10}}>
      
      <TouchableOpacity
              onPress={()=> {
                console.log("vegetables "+vegetables);
                vegetables ? setvegetables(false) : setvegetables(true);
              }
              }
            >
      <Text
      style={{alignSelf: "center",paddingTop:"7%"}}
      >Vegetables</Text>
      </TouchableOpacity>
      </View>


      <View
      style={{shadowColor:"black",width:"20%", height:"100%",borderRadius: 25, backgroundColor:salad ? "#1B7505": "gray"}}>
      
      <TouchableOpacity
              onPress={()=> {
                console.log("salad "+salad);
                salad ? setsalad(false) : setsalad(true);
              }
              }
            >
      <Text
      style={{alignSelf: "center",paddingTop:"10%"}}
      >Salad Kits</Text>
      </TouchableOpacity>
      </View>
      
      </View>

      <View style={{flexDirection: "row",height:40 ,alignContent: "space-between",marginLeft:"5%",marginTop:10,marginBottom:10}}>  

      <View
      style={{shadowColor:"black",width:"40%", height:"100%", backgroundColor:shortLH ? "#1B7505": "gray" ,borderRadius: 25,marginRight:"10%"}}>
            <TouchableOpacity
              onPress={()=> {
                console.log("Hello");
                console.log("shortLH "+shortLH);
                shortLH ? setshortLH(false) : setshortLH(true);
              }
              }
            >
      <Text
      style={{alignSelf: "center",paddingTop:"7%"}}
      >Price low to high</Text></TouchableOpacity> 
      </View>



      <View
      style={{shadowColor:"black",width:"40%", height:"100%",borderRadius: 25, backgroundColor: shortHL ? "#1B7505": "gray"}}>
      <TouchableOpacity
              onPress={()=> {
                console.log("Hello");
                console.log("shortHL "+shortHL);
                shortHL ? setshortHL(false) : setshortHL(true);
              }
              }
            >
      <Text
      style={{alignSelf: "center",paddingTop:"7%"}}
      >Price high to low</Text>
       </TouchableOpacity>
      </View>
     
      </View>
      
        
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
export default AllProduct;
