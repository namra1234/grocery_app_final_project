import React from "react";
import {View, Text, StyleSheet,TouchableOpacity, Animated} from "react-native";
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
          <Text style={styles.logoStyle}>Timer</Text>
         </View>
         <View style={styles.mainViewStyle}>
             <View>
               <CountdownCircleTimer
               isPlaying
               duration={120}
               colors={[
                ['green', 0.4],
                ['yellow', 0.4],
                ['red', 0.3],
               ]}
               size={300}
               onComplete={()=>{}}
               >
                 {({ remainingTime, animatedColor }) => (
                   <Animated.Text style={{ color: animatedColor }}>
                     <View style={{padding:20,height:200,justifyContent:"center",alignItems:"center"}}>
                      <Text style={{marginTop:10,marginLeft:5,fontSize:26}}> Remaining </Text>  
                      <Text style={{marginTop:15,fontSize:26}}>{remainingTime}</Text> 
                      <Text style={{marginTop:15,fontSize:26}}> Seconds</Text>
                     </View>
                   </Animated.Text>
                  )}
                 </CountdownCircleTimer> 
             </View>
         </View>
         <View style={styles.secondViewStyle} >
             <TouchableOpacity
             onPress={()=>{navigation.navigate("Checkout")}}>
                 <View style={styles.buttonViewStyle}>
                     <Text style={styles.textStyle}>Cancel Order</Text>
                 </View>

             </TouchableOpacity>
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
        flex:4,
        justifyContent:"center",
        alignItems:"center",
      },
      secondViewStyle:{
        flex:1,
        alignItems:"center",
      },
      buttonViewStyle:{
          borderRadius:20,
          backgroundColor:"green",
          width:270,
          height:45,
          alignItems:"center",
          justifyContent:"center",
      },
      textStyle:{
        color:"white",
        fontSize:24,
        fontWeight:"bold",
      }

})

export default withNavigation(timerScreen);