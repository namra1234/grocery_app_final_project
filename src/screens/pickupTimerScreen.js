import React from "react";
import {View, Text, StyleSheet,TouchableOpacity,ImageBackground,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import { Feather} from "@expo/vector-icons";

const pickupTimerScreen=({navigation})=>{
    const storeAdress=navigation.getParam("adress");
    return(
        <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
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
          <Text style={styles.logoStyle}>Pickup</Text>
         </View>
         <View >
             <ImageBackground source={require("../../assets/shop.jpg")}  style={styles.backgroundImageStyle} blurRadius={10} resizeMode="cover">
             <View style={{justifyContent:"space-evenly",marginTop:20,}} >
                 <View >
                 <Text style={{fontSize:24,fontWeight:"bold",padding:15,color:"#c6e7de"}}>You can pick it up at selected store adress <Text style={{color:"white"}}>{storeAdress}</Text> after 30 minutes by showing confirmation Email.</Text>
                 <Text style={{fontSize:24,padding:12,color:"#c6e7de",fontWeight:"bold"}}>Thankyou for shopping with us.</Text>
                 </View>
                 <View>
                     <Image style={styles.imageStyle} source={require("../../assets/bascket_girl.png")}/>
                 </View>
             </View>
             </ImageBackground>
         </View>
         </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    Icon: {
        marginTop: 10,
        marginHorizontal: 14,
        fontSize: 34,
      },
      logoStyle: {
        fontSize: 40,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#1B7505",
      },
      backgroundImageStyle:{
          width:"100%",
          height:"100%",
      },
      imageStyle:{
          width:270,
          height:290,
          alignSelf:"center",
      }

})
export default withNavigation(pickupTimerScreen);