import React, { Component } from "react";
import {Accordion, Container,Card, CardItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Image, StyleSheet,SafeAreaView, TouchableOpacity,Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import Choking from '../resources/videos/Choking.m4v'

export default class Aside extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // headerTitle instead of title
      headerTitle:Dimensions.get('window').width > 600 ? 'Помощ при задавяне':'Задавяне',
      headerRight: () => (
        <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate('About')}>
          <Ionicons name="ios-heart" size={32} color="white" style={{ marginRight: 10 }} />
        </TouchableOpacity>
      )
    }
  };
  
  render() {
    return (
      <Container>
        <Content>
        <Video
            useNativeControls = {true}
            source={Choking}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            shouldPlay
            resizeMode={Video.RESIZE_MODE_CONTAIN}
            style={{ width: '100%', height: 250 }}
          />
          <Card>
            <CardItem header bordered>
              <Text style={{ color: 'red', fontWeight: 'bold' }}>Стъпки:</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={styles.attentionText}>1.</Text>
                  Попитайе задавилия се дали се е задавил и го помолете да изкашля чуждото тяло. 
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>2.</Text>
                  Ако той не успее да изкашля чуждото тяло застанете в страни на пострадалия и сложете едната си
                  ръка, свита в юмрук, под гръдната кост.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>3.</Text>
                  Наведете пострадалия напред и направете 5 силни удара между плешките му като използвате
                  дланта на вашата свободна ръка.
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>Хватката на Хаймлих</Text>              
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>1.</Text>
                  Застанете зад пострадалия и го наведете напред
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>2.</Text>
                  Свийте ръката си в юмрук и я сложете между пъпа и долния израстък на гръдната кост.
                  Хванете с другата си ръка юмрука и го издърпайте силно в посока към Вас и нагоре.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>3.</Text>
                  Редувайте 5 удара с 5 хватки на Хаймлих
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        {/* <Footer>
          <FooterTab style={styles.footer}>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'red',
    height: 90,
    paddingTop: 30
  },
  bodyTitle: {
    alignItems: 'center'
  },
  footer: {
    backgroundColor: 'red'
  },
  attentionText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 28
  }
});