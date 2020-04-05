import React, { Component } from "react";
import {Accordion, Container,Card, CardItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Image, StyleSheet,SafeAreaView, TouchableOpacity,Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import Bones from '../resources/videos/Bones.m4v'

export default class Aside extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // headerTitle instead of title
      headerTitle:Dimensions.get('window').width > 600 ? 'Травми на кости и стави' : 'Кости и стави',
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
            source={Bones}
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
                  Обадете се незабавно на телефон <Text style={styles.attentionText}>112</Text>
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>2.</Text>
                  Не движете засегнатата ръка. Поставете студен компрес върху счупването.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>3.</Text>
                  Обездвижете счупената ръка с помощта на 2 триъгълни кърпи.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>4.</Text>
                  Фиксирайте с триъгълна кърпа, сгънатана широка лента.
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Body>
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>
                  Счупване на долен крайник
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>1.</Text>
                  Не движете излишно наранения крак.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>2.</Text>
                  Разхлабете стегнатите дрехи и развържете обувките, като не ги събувате.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>3.</Text>
                  Обездвижете крака. Възможен начин да направите това е да фиксирате счупения крак за
                  здравия с мека вложка между тях. При обездвижване винаги обхващайте 2 съседни стави. Не се 
                  опитвайте да намествате счупения крайник.
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