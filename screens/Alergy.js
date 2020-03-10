import React, { Component } from "react";
import { Accordion, Container, Card, CardItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Image, StyleSheet, SafeAreaView, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';

import AlergyVideo from '../resources/videos/Alergy.m4v'


export default class Alergy extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // headerTitle instead of title
      headerTitle: 'Помощ при алергии',
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
            source={AlergyVideo}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            shouldPlay={true}
            resizeMode={Video.RESIZE_MODE_CONTAIN}
            style={{ width: '100%', height: 250 }}
            ignoreSilentSwitch="ignore"
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
                  Поставете пострадалия да седне и го наклонете леко напред, за да помогнете на дишането.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>3.</Text>
                  Разговаряйте с пострадалия през цялото време до пристигането на спешна медицинска помощ.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>4.</Text>
                  Следете състоянието на пострадалия. Ако изпадне в шок, окажете първа помощ при шок.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        {/* <Footer>
          <FooterTab style={styles.footer}>
            <Button full>
              <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Ionicons name="ios-call" size={32} color="white" style={{ marginRight: 10 }} />
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>112</Text>
              </View>
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
    fontSize: 24
  }
});
