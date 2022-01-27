import React, { useState } from "react";
import {View,Text,StyleSheet} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchBar=({onTermSubmit})=>{
   return(
       <View style={{width:"90%",alignSelf:"center",marginTop:10,flexDirection:"row"}}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyBxM07aAv67g0U9yFHWpxiuyTJBiiX1Veo" }}
        placeholder="Search"
        onPress={onTermSubmit}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "bold",
            marginTop: 7,
            color:"green"
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginTop:10,
            marginBottom:15,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
      />
    </View>
   );
}

const styles=StyleSheet.create({

})

export default SearchBar;