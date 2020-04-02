import React from 'react';
import { StyleSheet, Image, View, Text,Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Tab({ title, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconAndTitle}>
        <Image source={icon} style={styles.img} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Ionicons name="ios-arrow-forward" size={28} color="grey" style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f2f2f4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 2,
    // marginVertical: 5,
    borderColor: 'grey',
    borderWidth: 0.2,
    alignItems: 'center',
    height: 66,
    borderRadius: 4,
    padding: 4,
    shadowColor: '#e0d7df',
    shadowOpacity: 1.0,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  title: {
    fontSize: 17,
    color: '#43474d',
    marginLeft: 3,
    fontWeight: 'bold'
  },
  icon: {
    marginRight: 5
  },
  img: {
    width: 30,
    height: 30,
    marginRight:12,
    marginLeft:3
  },
  iconAndTitle:{
    flexDirection:'row'
  }
})