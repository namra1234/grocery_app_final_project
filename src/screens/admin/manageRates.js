import React from 'react';
import {View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';

const manageRates = ({navigation}) => {
    
return(

    <ScrollView>
        <View style={{backgroundColor: 'green', height: 80, marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate("wel")} style={{}}>
        <Entypo name='back' style={{fontSize:30, alignSelf:'center', marginHorizontal: 15}}/>
        </TouchableOpacity>
        <Text style={{alignSelf: 'center', fontSize: 30, fontWeight: 'bold', color:'white'}}>MODIFY THE PRICES</Text>
        </View>
        
        <View style={{marginLeft: 100, marginTop:30}}>
        <Image source={require("../../../assets/flour.png")} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>Flour</Text> 
        <TextInput autoCorrect={false}
        autoCapitalize='none'
        style={{fontSize: 15, marginLeft: 50, borderColor: 'black', borderWidth:1, width: 100, height: 50, borderRadius: 10}}> $ </TextInput>
        </View>

        <View style={{marginLeft: 100, marginTop: 30}}>
        <Image source={require('../../../assets/butter.jpg')} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>butter</Text> 
        <TextInput autoCorrect={false}
        autoCapitalize='none'
        style={{fontSize: 15,marginLeft: 50, borderColor: 'black', borderWidth:1, width: 100, height: 50, borderRadius: 10}}> $ </TextInput>
        </View>

        <View style= {{marginLeft: 100, marginTop: 40}}>
        <Image source={require('../../../assets/ghee.jpg')} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>Flour</Text> 
        <TextInput autoCorrect={false}
        autoCapitalize='none'
        style={{fontSize: 15,marginLeft: 50, borderColor: 'black', borderWidth:1, width: 100, height: 50, borderRadius: 10}}> $ </TextInput>
        </View>

        <View style= {{marginLeft: 100, marginTop: 30}}>
        <Image source={require('../../../assets/peanutButter.jpeg')} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>Flour</Text> 
        <TextInput autoCorrect={false}
        autoCapitalize='none'
        style={{fontSize: 15,marginLeft: 50, borderColor: 'black', borderWidth:1, width: 100, height: 50, borderRadius: 10}}> $ </TextInput>
        </View>

        <View style= {{marginLeft: 100, marginTop: 30}}>
        <Image source={require('../../../assets/milkBread.jpg')} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>Bread</Text> 
        <TextInput autoCorrect={false}
        autoCapitalize='none'
        style={{fontSize: 15,marginLeft: 50, borderColor: 'black', borderWidth:1, width: 100, height: 50, borderRadius: 10}}> $ </TextInput>
        </View>

        <View style= {{marginLeft: 100, marginTop: 30, marginBottom: 10}}>
        <Image source={require('../../../assets/tomatoes.jpg')} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>Tomatoes</Text> 
        <TextInput autoCorrect={false}
        autoCapitalize='none'
        style={{fontSize: 15,marginLeft: 50, borderColor: 'black', borderWidth:1, width: 100, height: 50, borderRadius: 10}}> $ </TextInput>
        </View>


        



        </ScrollView>
);
};

const styles=StyleSheet.create({

});

export default manageRates;