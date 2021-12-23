
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Text  ,
  Image,
  Stack,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {NavigationContainer} from '@react-navigation/native';
import React, { useState } from "react";

const LogInScreen = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    "MooLahLah-Regular": require("../../assets/fonts/Moo Lah Lah Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (

    <SafeAreaView style={styles.conStyle}>
    <View>      
      <ScrollView >
      <Text style={styles.logoStyle}>Grocery Farm</Text>

      <Image source={require("../../assets/bascket_girl.png")} style={styles.ImageStyle} />
      <Text style={styles.logoStyle}>Login</Text>
      <TextInput style={styles.iStyle} placeholder="Email" />
          <TextInput style={styles.iStyle} placeholder="Password" />
          <TouchableOpacity style={styles.bStyle}
          
          >
            <Text style={styles.bTStyle}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.fpStyle}>Forgot Password?</Text>
          <View style={{
            flexDirection: "row",
            alignSelf: "center",
          }}>
          <Image source={require("../../assets/facebook.png")} style={styles.IconStyle} />
          <Image source={require("../../assets/google.png")} style={styles.IconStyle} />
          </View>
          <Text
            style={{ color: "gray", alignSelf: "center", marginTop: 25 }}
          >          
            Don't have an account?
            <TouchableOpacity onPress={ () =>
            navigation.navigate("SignupScreen")
          }><Text style={{ color: "#1B7505" }}> Sign Up</Text></TouchableOpacity>
            
          </Text>
      </ScrollView>
    </View>
    </SafeAreaView>



  );
}
};

const styles = StyleSheet.create({
  fpStyle:{
    color: "#1B7505",
    marginRight: 25,
    alignSelf: "flex-end",
    marginTop: 20,
  },
  bTStyle:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  bStyle:{
    backgroundColor: "#1B7505",
    borderRadius: 15,
    shadowOffset: { height: 1, width: 1 }, 
    shadowOpacity: 1, 
    shadowRadius: 1, 
    marginLeft: 25,
    marginRight: 25,
    elevation: 2,
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  iStyle:{
    height: 50,
    fontSize: 20,
    shadowOffset: { height: 1, width: 1 }, 
    backgroundColor: "white",        
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    elevation: 1, 
    borderRadius: 10,
    borderWidth:2,
    borderColor: "#1B7505",
    shadowRadius: 1,       
    shadowOpacity: 1, 
    paddingHorizontal: 15,

  },
  conStyle: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 70,    
  },
  logoStyle: {    
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#1B7505",
    fontFamily: "MooLahLah-Regular",
  },
  headingStyle: {    
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#1B7505",
    fontFamily: "MooLahLah-Regular",
    
  },
  loginFormContainerStyle: {
    top: "10%",
    paddingHorizontal: "5%",
  },
  ImageStyle:{
    height:200,
    width:200,
    marginTop:20,
    alignSelf: "center",
  },
  IconStyle:{
    height:40,
    width:40,
    marginTop:20,
    alignSelf: "center",
    marginRight:10,
    marginLeft:20
  }
});
export default LogInScreen;
