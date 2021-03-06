import React, {useState} from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import AppContainer from './routes/stackNavigator'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

   async getFornts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading 
      startAsync={this.getFornts}
      onFinish={() => this.setState({ isReady: true })}
      onError={console.warn}
      />
    }

    return (
        <AppContainer />
    );
  }
}