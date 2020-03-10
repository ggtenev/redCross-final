import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
export default class Top extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require('../resources/images/Redcross.png')}
        />
        <Text style={styles.title}>{this.props.header}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 90,
    backgroundColor: 'red',
    paddingTop: 35,
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    // alignSelf:'baseline'
  },
  img: {
    marginBottom: 10,
    width: 50,
    height: 50,
    marginHorizontal: 10
  }
})