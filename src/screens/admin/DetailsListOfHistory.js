import React from 'react';
import { Image, FlatList,View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {MaterialIcons} from '@expo/vector-icons';
import * as constants from "../../constant/constant.js";
import { Feather, AntDesign } from "@expo/vector-icons";
import WidgetOrderHistoryDetail from './WidgetOrderHistoryDetail';

const DetailsListOfHistory = ({navigation})=> {
    
  const allproduct = navigation.getParam("products");
    resultsData =  constants.orderHistory;
        return(<SafeAreaView style={styles.conStyle}>
          <View>
            
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
          <Text style={styles.logoStyle}> Product List</Text>
        </View>
        
        <WidgetOrderHistoryDetail
            resultsData={allproduct}
            titleData="Ordered Product List"
          />
    <Text style={{marginBottom:160}}>  </Text>
         

</View>
                
</SafeAreaView>
            );
};

const styles = StyleSheet.create({
  Icon: {
    marginTop: 10,
    marginHorizontal: 14,
    fontSize: 34,
  },
  conStyle: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 45,
  },
  logoStyle: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#753B05",
  },
});

export default DetailsListOfHistory;