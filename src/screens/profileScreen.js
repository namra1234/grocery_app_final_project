import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import { Feather} from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const UserName = "Customer Name";
const UserEmail= "customeremail@gmail.com";
const UserNumber = "000-000-0000";


const profileScreen=({navigation})=>{

    return(
        <SafeAreaView>
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
          <Text style={styles.logoStyle}>Profile</Text>
        </View>
         <View >
            <ImageBackground source={require('../../assets/guypic.jpg')} style={styles.imageBackgroundStyle} resizeMode="cover" blurRadius={5}>
            <View style={{flexDirection:"column",alignItems:"center",flex:1.5,justifyContent:"center"}}>
              <Image style={styles.imageStyle} source={require('../../assets/guypic.jpg')}/>
              <Text style={{fontSize:35,fontWeight:"400"}}>{UserName}</Text> 
            </View>
            <View style={{flex:2,backgroundColor:"white"}}>
             <View style={styles.detailsViewStyle}>
             <MaterialIcons name="email" size={34} color="green" />
             <Text style={{fontSize:22,alignSelf:"center"}}>{UserEmail}</Text>
             </View> 
             <View style={styles.detailsViewStyle}>
             <Feather name="phone" size={30} color="green" />
             <Text style={{fontSize:24,alignSelf:"center"}}>{UserNumber}</Text>
             </View>
             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
               <TouchableOpacity
               onPress={()=>{navigation.navigate("LogInScreen")}}
               style={styles.logoutOpacityStyle}
               >
                 <Text style={{fontSize:30,color:"white",alignSelf:"center"}}>LogOut</Text>
               </TouchableOpacity>
             </View>
            </View>
         </ImageBackground>
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
      imageBackgroundStyle:{
        width:"100%",
        height:"100%",
        justifyContent:"center"
      },
      imageStyle:{
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
        borderColor: '#FFF',
      },
      detailsViewStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
      //  backgroundColor:"red",
        width:"95%",
        padding:20,
        borderBottomWidth:1.3,
        borderBottomEndRadius:20,
        alignSelf:"center"
      },
      logoutOpacityStyle:{
        margin:10,
       borderRadius:20,
       backgroundColor:"green",
       width:250,
       height:50,
       justifyContent:"center"
      }


})

export default withNavigation(profileScreen);