import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Dimensions } from 'react-native'

import Home from '../screens/Home'
import Alergy from '../screens/Alergy'
import Aside from '../screens/Aside'
import Bleeding from '../screens/Bleeding'
import Bones from '../screens/Bones'
import Burns from '../screens/Burns'
import CardioPulmonary from '../screens/CardioPulmonary'
import Choking from '../screens/Choking'
import HeadTrauma from '../screens/HeadTrauma'
import HeartAttack from '../screens/HeartAttack'
import Hypoglycemia from '../screens/Hypoglycemia'
import Moving from '../screens/Moving'
import Shock from '../screens/Shock'
import SpineInjury from '../screens/SpineInjury'
import Stroke from '../screens/Stroke'
import Wounds from '../screens/Wounds'
import About from '../screens/About'


const RootStack = createStackNavigator(
    {
      Home: Home,
      Alergy:Alergy,
      Aside:Aside,
      Bleeding:Bleeding,
      Bones:Bones,
      Burns:Burns,
      CardioPulmonary:CardioPulmonary,
      Choking:Choking,
      HeadTrauma:HeadTrauma,
      HeartAttack:HeartAttack,
      Hypoglycemia:Hypoglycemia,
      Moving:Moving,
      Shock:Shock,
      SpineInjury:SpineInjury,
      Stroke:Stroke,
      Wounds:Wounds,
      About:{screen:About,
      navigationOptions:{
        title:'За Българския Червен Кръст'
      }}
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
          
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20

          },
        },
      }
    
  );
  
  const AppContainer = createAppContainer(RootStack);

  export default AppContainer