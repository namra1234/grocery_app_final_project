
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

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

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
      <View style={{
            flexDirection: "row",
            alignSelf: "center",
          }}>
          <View style={{
            flexDirection: "column",
            alignSelf: "center",
            marginRight:20,
          }}>
            <Text style={styles.logoStyle}>Grocery</Text>
            <Text style={styles.logoStyle}>Farm</Text>
          </View>
      

      <Image source={require("../../assets/bascket_girl.png")} style={styles.ImageStyle} />
      </View>
      <Text style={styles.headingStyle}>Sign Up</Text>
      <Text style={styles.smallheadingStyle}>First Name</Text>
      <TextInput
        style={styles.iStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        placeholder="First Name"
        onChangeText={(newValue) => setName(newValue)}
      />

      <Text style={styles.smallheadingStyle}>Last Name</Text>
      <TextInput
        style={styles.iStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={Lastname}
        placeholder="Last Name"
        onChangeText={(newValue) => setLastName(newValue)}
      />

      <Text style={styles.smallheadingStyle}>Email</Text>
      <TextInput
        style={styles.iStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        placeholder="Email"
        onChangeText={(newValue) => setEmail(newValue)}
      />

      <Text style={styles.smallheadingStyle}>Phone Number</Text>
      <TextInput
        style={styles.iStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={PhoneNumber}
        placeholder="Phone Number"
        onChangeText={(newValue) => setPhoneNumber(newValue)}
      />

      <Text style={styles.smallheadingStyle}>Address</Text>
      <TextInput
        style={styles.iStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={address}
        placeholder="Address"
        onChangeText={(newValue) => setAddress(newValue)}
      />
         
          <TouchableOpacity style={styles.bStyle}>
            <Text style={styles.bTStyle}>Register</Text>
          </TouchableOpacity>          
          <Text
            style={{ color: "gray", alignSelf: "center", marginTop: 25, marginBottom: 30 }}
          >          
            Already have an account?
            <TouchableOpacity onPress={ () =>
            navigation.navigate("LogInScreen")
          }><Text style={{ color: "#1B7505" }}>   LogIn</Text></TouchableOpacity>
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
    marginTop: 10,
    marginBottom:20,
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
    height:47,
    margin:0,
    padding:0,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#1B7505",
    fontFamily: "MooLahLah-Regular",
  },
  headingStyle: {    
    fontSize: 30,
    marginTop: 50,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#1B7505",
    fontFamily: "MooLahLah-Regular",
    
  },
  smallheadingStyle: {    
    fontSize: 15,
    marginLeft: 25,
    fontWeight: "bold",
    color: "black",
    fontFamily: "MooLahLah-Regular",
    
  },
  loginFormContainerStyle: {
    top: "10%",
    paddingHorizontal: "5%",
  },
  ImageStyle:{
    height:80,
    width:80,
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
export default SignupScreen;
