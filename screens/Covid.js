import React from 'react';
import { View,Image,ScrollView } from 'react-native';

export default function Covid() {
  return (
    <ScrollView style={{flex:1,backgroundColor:'#eeeeee'}}>
      <Image source={require('../assets/napkin.jpeg')} resizeMode='contain' style={{width:'100%'}}/>
      <Image source={require('../assets/travel.jpeg')} resizeMode='contain' style={{width:'100%', position:'relative',top:0}}/>
      <Image source={require('../assets/hard.png')} resizeMode='contain' style={{width:'100%'}}/>
      <Image source={require('../assets/spit.png')} resizeMode='contain' style={{width:'100%'}}/>
     </ScrollView>
  );
}

Covid.navigationOptions = {
  title:'COVID-19'
}
