import React from "react";
import {View, Text, StyleSheet,TouchableOpacity, Animated,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import { Feather} from "@expo/vector-icons";
import {CountdownCircleTimer} from "react-native-countdown-circle-timer";

const timerScreen=({navigation})=>{
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
          <Text style={styles.logoStyle}>Delivery</Text>
         </View>
         <View style={styles.mainViewStyle}>
           <Text style={{fontSize:24,marginLeft:15}}>Delivery Person Details:</Text>
           <View style={{flexDirection:"row",flex:2,justifyContent:"space-evenly",padding:20}}>
              <View style={{backgroundColor:"red",flex:1}}>
                <Image style={styles.imageStyle} source={require('../../assets/guypic.jpg')}/>
              </View>
              <View style={{flex:1,justifyContent:"center"}}>
                <Text style={{fontSize:26,alignSelf:"center"}}>Mike</Text>
                <Text style={{fontSize:26,alignSelf:"center"}}>514-498-9989</Text>
              </View>
           </View>
             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
               <CountdownCircleTimer
               isPlaying
               duration={1800}
               colors={[
                ['green', 0.4],
                ['yellow', 0.4],
                ['red', 0.3],
               ]}
               size={200}
               onComplete={()=>{}}
               >
                 {({ remainingTime, animatedColor }) => (
                   <Animated.Text style={{ color: animatedColor }}>
                     <View style={{padding:20,height:200,justifyContent:"center",alignItems:"center"}}>
                      <Text style={{marginTop:10,marginLeft:5,fontSize:24}}>Remaining</Text>  
                      <Text style={{marginTop:15,fontSize:24}}>{remainingTime}</Text> 
                      <Text style={{marginTop:15,fontSize:24}}>Seconds</Text>
                     </View>
                   </Animated.Text>
                  )}
                 </CountdownCircleTimer> 
             </View>
         </View>
         <View style={styles.secondViewStyle} >
             <Text style={{fontSize:26,textAlign:"center"}}>We will deliver your order in above time limit</Text>
         </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
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
      mainViewStyle:{
        flex:5,
        flexDirection:"column",
      },
      secondViewStyle:{
        flex:1,
        alignItems:"center",
        padding:20,
      },
      imageStyle:{
        width:"100%",
        height:"100%",
      }
      

})

export default withNavigation(timerScreen);