import React, { Component } from "react";
import {Accordion, Container,Card, CardItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Image, StyleSheet,SafeAreaView, TouchableOpacity,Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import Bleeding from '../resources/videos/Bleeding.m4v'

export default class Aside extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // headerTitle instead of title
      headerTitle: Dimensions.get('window').width > 600 ? 'Помощ при кръвотечение' :'Кръвотечение' ,
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
            source={Bleeding}
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
                  <Text style={styles.attentionText}>ВНИМАНИЕ! </Text>
                  Ако в раната има чуждо тяло, не се опитвайте да го извадите!
                </Text>
              </Body>
            </CardItem>
            
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>1.</Text>
                  Използвайте ръкавици за еднократна употреба или увийте ръцете си с найлонов плик.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>2.</Text>
                  Поставете пострадалия седнал. Ако няма чуждо тяло, притиснете раната с марля или чист памучен плат.
                  Може да накарате пострадалия да притиска сам раната, за да спре кървенето.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={styles.attentionText}>3.</Text>
                  Обадете се на телефон <Text style={styles.attentionText}>112</Text>
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