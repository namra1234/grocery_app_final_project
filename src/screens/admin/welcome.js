import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
import {Foundation} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const welcome = ({navigation})=> {
    return(

    <View>
        <Text style={{fontSize: 40, alignSelf: 'center', top: 150}}> Welcome ADMIN!</Text>

        <Appbar style ={{position: 'absolute', top: 750, left: 0, right:0, height: 60,  backgroundColor: 'green', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
            <Foundation name='dollar' style={{fontSize: 50, color: 'white', alignSelf: 'center'}} onPress={() => navigation.navigate("managerates")} Title={'managerates'}/>
            <MaterialIcons name='food-bank' style={{fontSize: 50, color: 'white', alignSelf: 'center', left: 150}} onPress={() => navigation.navigate('modify')} />
            <MaterialCommunityIcons name='truck-delivery-outline' style={{fontSize:50, color: 'white', alignSelf: 'center', left: 265}} onPress={() => {alert('Manage Rates')}}/>
        </Appbar>
        
    </View>
    );
};

export default welcome;