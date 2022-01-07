import React from 'react';
import {View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';

const modifyGroceryItems = ({navigation}) => {
    
return(

    <ScrollView>
        <View style={{backgroundColor: 'green', height: 80, marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
        
        <TouchableOpacity onPress={()=>navigation.navigate("wel")} style={{}}>
        <Entypo name='back' style={{fontSize:30, alignSelf:'center', marginHorizontal: 15}}/>
        </TouchableOpacity>
        
        <Text style={{alignSelf: 'center', fontSize: 30, fontWeight: 'bold', color:'white'}}>MODIFY GROCERY</Text>
        </View>
        
        <View style={{marginLeft: 100, marginTop: 30}}>
        <Image source={require('../../../assets/flour.png')} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>Flour</Text> 
        <TouchableOpacity style={{fontSize: 15,marginLeft: 50, borderRadius: 10, marginTop: 10}}>
        <Text>ADD ITEM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{fontSize: 15,marginLeft: 50,  borderRadius: 10}}>
        <Text>REMOVE ITEM</Text>
        </TouchableOpacity>
        
        </View>

        <View style={{marginLeft: 100, marginTop: 30}}>
        <Image source={require('../../../assets/butter.jpg')} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>butter</Text> 
        <TouchableOpacity style={{fontSize: 15,marginLeft: 50, borderRadius: 10, marginTop: 10}}>
        <Text>ADD ITEM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{fontSize: 15,marginLeft: 50,  borderRadius: 10}}>
        <Text>REMOVE ITEM</Text>
        </TouchableOpacity></View>

        <View style= {{marginLeft: 100, marginTop: 40}}>
        <Image source={require('../../../assets/ghee.jpg')} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>Flour</Text> 
        <TouchableOpacity style={{fontSize: 15,marginLeft: 50, borderRadius: 10, marginTop: 10}}>
        <Text>ADD ITEM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{fontSize: 15,marginLeft: 50,  borderRadius: 10}}>
        <Text>REMOVE ITEM</Text>
        </TouchableOpacity>
        </View>

        <View style= {{marginLeft: 100, marginTop: 30}}>
        <Image source={require('../../../assets/peanutButter.jpeg')} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>Flour</Text> 
        <TouchableOpacity style={{fontSize: 15,marginLeft: 50, borderRadius: 10, marginTop: 10}}>
        <Text>ADD ITEM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{fontSize: 15,marginLeft: 50,  borderRadius: 10}}>
        <Text>REMOVE ITEM</Text>
        </TouchableOpacity>
        </View>

        <View style= {{marginLeft: 100, marginTop: 30}}>
        <Image source={require('../../../assets/milkBread.jpg')} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>Bread</Text> 
        <TouchableOpacity style={{fontSize: 15,marginLeft: 50, borderRadius: 10, marginTop: 10}}>
        <Text>ADD ITEM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{fontSize: 15,marginLeft: 50,  borderRadius: 10}}>
        <Text>REMOVE ITEM</Text>
        </TouchableOpacity>
        </View>

        <View style= {{marginLeft: 100, marginTop: 30, marginBottom: 10}}>
        <Image source={require('../../../assets/tomatoes.jpg')} style={{height: 150, width: 200}}/>
        <Text style={{fontSize: 20, marginLeft: 70}}>Tomatoes</Text> 
        <TouchableOpacity style={{fontSize: 15,marginLeft: 50, borderRadius: 10, marginTop: 10}}>
        <Text>ADD ITEM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{fontSize: 15,marginLeft: 50,  borderRadius: 10}}>
        <Text>REMOVE ITEM</Text>
        </TouchableOpacity>
        </View>


        



        </ScrollView>
);
};

const styles=StyleSheet.create({

});

export default modifyGroceryItems;