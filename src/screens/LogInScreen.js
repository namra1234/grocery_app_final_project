import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  Stack,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { AsyncStorage } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import * as constants from "../constant/constant.js"
import Constants from "expo-constants";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";

import {
  onAuthStateChanged,
  signInWithCredential,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "../firebase/config.js";

const LogInScreen = ({ navigation }) => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");




  const googleLogin = async () => {
    try {
      const result = await Google.logInAsync({
        //return an object with result token and user
        androidClientId: Constants.manifest.extra.ANDROID_KEY, //From app.json
        scopes: ["email", "profile"],
      });
      if (result.type === "success") {
        
        console.log(result);
        var id = Math.floor(Math.random() * 10000) + 1;

              var userInfo = {
                id: id,
                name: result.user.givenName,
                Lastname: result.user.familyName,
                email: result.user.email,
                password: '',
                PhoneNumber: '',
                address: '',
              };
              constants.currentUserData=userInfo;
              navigation.navigate("HomeScreen");
              
      } else {
        //CANCEL
        console.log(result);
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };

 
  const facebookLogin = async () => {
    try {
      await Facebook.initializeAsync({
        appId: Constants.manifest.extra.facebook.appId,
      });
      const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (result.type === "success") {
console.log(result);
        const response = await (await fetch(`https://graph.facebook.com/me?access_token=${result.token}`)).json();
        console.log(response.name);
        
      //  alert('Logged in!', `Hi ${(await response.json()).name}!`);
      var id = Math.floor(Math.random() * 10000) + 1;

      var userInfo = {
        id: id,
        name: response.name,
        Lastname: '',
        email: '',
        password: '',
        PhoneNumber: '',
        address: '',
      };
      constants.currentUserData=userInfo;
      navigation.navigate("HomeScreen");
      } else {
        //CANCELc
        console.log(result);
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };









  const storeData = async (data, val) => {
    try {
      await AsyncStorage.setItem(val, data);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  const retrieveData = async (data) => {
    try {
      const value = await AsyncStorage.getItem(data);

      if (data == "weeklyOfferData") {
        if (value !== null) {
          constants.weeklyOfferData = JSON.parse(value);
          console.log(constants.weeklyOfferData);
        } else {
          let val = JSON.stringify(constants.weeklyOfferData);
          storeData(val, "weeklyOfferData");
        }
      } else if (data == "favouriteProductData") {
        if (value !== null) {
          constants.favouriteProductData = JSON.parse(value);
        } else {
          let val = JSON.stringify(constants.favouriteProductData);
          storeData(val, "favouriteProductData");
        }
      } else if (data == "allProductData") {
        if (value !== null) {
          constants.allProductData = JSON.parse(value);
        } else {
          let val = JSON.stringify(constants.allProductData);
          storeData(val, "allProductData");
        }
      } else if (data == "orderHistory") {
        if (value !== null) {
          constants.orderHistory = JSON.parse(value);
      
        } else {
          let val = JSON.stringify(constants.orderHistory);
          storeData(val, "orderHistory");
        }
      } else if (data == "userData") {
        if (value !== null) {
          constants.userData = JSON.parse(value);
        }
      } else if (data == "currentUserData") {
        if (value !== null) {
          constants.currentUserData = JSON.parse(value);
        }
      }
    } catch (error) {
      // Error retrieving data
      console.log("retrive error");
    }
  };

  retrieveData("weeklyOfferData");
  retrieveData("favouriteProductData");
  retrieveData("allProductData");
  retrieveData("orderHistory");
  retrieveData("userData");
  retrieveData("currentUserData");

  return (
    <SafeAreaView style={styles.conStyle}>
      <View>
        <ScrollView>
          <Text style={styles.logoStyle}>Grocery Farm</Text>

          <Image
            source={require("../../assets/bascket_girl.png")}
            style={styles.ImageStyle}
          />
          <Text style={styles.logoStyle}>Login</Text>
          <TextInput
            style={styles.iStyle}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={emailId}
            onChangeText={(newEmail) => setEmailId(newEmail)}
          />

          <TextInput
            style={styles.iStyle}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
          />

          <TouchableOpacity
            style={styles.bStyle}
            onPress={() => {
              
              if (emailId == "admin" && password == "admin")
                navigation.navigate("welcome");
              else {
                var temp=false;
                for (let i = 0; i < constants.userData.length; i++) {
                  console.log(constants.userData[i].email);
                  console.log(constants.userData[i].password);
                  if (
                    constants.userData[i].email == emailId &&
                    constants.userData[i].password == password
                  ) {
                    temp=true;
                    constants.currentUserData=[];
                    constants.currentUserData.push(constants.userData[i]);
                  }
                }

                if (temp) {                  
                  navigation.navigate("HomeScreen");
                } else {
                  alert("Incorrect Username or Password");
                }
              }
            }}
          >
            <Text style={styles.bTStyle}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.fpStyle}>Forgot Password?</Text>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
          <TouchableOpacity
            onPress={facebookLogin}
            style={styles.buttonFacebook}
          ><Image
              source={require("../../assets/facebook.png")}
              style={styles.IconStyle}
            /></TouchableOpacity>
            

          <TouchableOpacity onPress={googleLogin} style={styles.buttonGoogle}>
          <Image
              source={require("../../assets/google.png")}
              style={styles.IconStyle}
            />
          </TouchableOpacity>
            
          </View>
          <Text style={{ color: "gray", alignSelf: "center", marginTop: 25 }}>
            Don't have an account?
            <TouchableOpacity
              onPress={() => navigation.navigate("SignupScreen")}
            >
              <Text style={{ color: "#1B7505", marginTop: 10 }}> Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fpStyle: {
    color: "#1B7505",
    marginRight: 25,
    alignSelf: "flex-end",
    marginTop: 20,
  },
  bTStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  bStyle: {
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
  iStyle: {
    height: 50,
    fontSize: 20,
    shadowOffset: { height: 1, width: 1 },
    backgroundColor: "white",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    elevation: 1,
    borderRadius: 10,
    borderWidth: 2,
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
  },
  headingStyle: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#1B7505",
  },
  loginFormContainerStyle: {
    top: "10%",
    paddingHorizontal: "5%",
  },
  ImageStyle: {
    height: 200,
    width: 200,
    marginTop: 20,
    alignSelf: "center",
  },
  IconStyle: {
    height: 40,
    width: 40,
    marginTop: 20,
    alignSelf: "center",
    marginRight: 10,
    marginLeft: 20,
  },
});
export default LogInScreen;
