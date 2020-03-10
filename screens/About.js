import React, { Component } from 'react';
import { Image, StyleSheet, View, Linking, Dimensions } from 'react-native';
// import { Constants, WebBrowser } from 'expo'
import * as WebBrowser from 'expo-web-browser';
import { Container, Header, Content, Card, CardItem, Thumbnail, Footer, FooterTab, Text, Button, Icon, Left, Body } from 'native-base';


export default class CardShowcaseExample extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // headerTitle instead of title
      headerTitle: 'За Българския Червен Кръст',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:Dimensions.get('window').width > 600 ? 20 : 15

      },
    }
  };
  handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.redcross.bg/help_us/how_to_help');
  }
  handleOpenWithLinking = () => {
    Linking.openURL('https://www.redcross.bg/help_us/how_to_help');
  }
//   handleOpenWithWebBrowser = async () => {
//     let result = await WebBrowser.openBrowserAsync('https://www.redcross.bg/help_us/how_to_help');
//     this.setState({ result });
//   };
// }
  render() {
    return (
      <Container> 
        {/* <Header /> */}
        <Content>
          <Card style={{ flex: 1 }}>
            <CardItem  style={styles.cardItem}>
              <Left>
                {/* <Thumbnail source={require('../resources/images/logo-bg.jpg')} /> */}
                <Body>
                  {/* <Text style={styles.header}>Български Червен Кръст</Text> */}
                  <Image source={require('../resources/images/pyrva.jpeg')} style={{ height: 200, width: '100%', }} />
                </Body>
              </Left>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Body>
                <Text style={styles.attentionText}>ХУМАННОСТ</Text>
                <Text>
                  Червеният кръст, роден от желанието да оказва помощ без дискриминация.
                   Неговата цел е да закриля живота и здравето на човека, както и да изисква уважение
                  към човешката личност. Той способства за установяването на взаимно разбирателство,
                   дружба, сътрудничество и траен мир между всички народи.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Body>
                <Text style={styles.attentionText}>БЕЗПРИСТРАСТНОСТ</Text>
                <Text>
                  Червеният кръст не проявява предпочитание по отношение на националност,
                  раса, религия, социално положение или политически убеждения. Неговият стремеж е
                  единствено да подпомага хората в зависимост от степента на страданието им и да
                  осигури предимство на онези, които се намират в най-голяма беда и се нуждаят от
                  най-бърза помощ.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Body>
                <Text style={styles.attentionText}>НЕУТРАЛНОСТ</Text>
                <Text>
                  За да запази доверието на всички, Червеният кръст се въздържа да взема участие във враждебни
                  действия и никога не влиза в спорове от политически, расов, религиозен и философски
                  характер.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Body>
                <Text style={styles.attentionText}>НЕЗАВИСИМОСТ</Text>
                <Text>
                  Червеният кръст е независим. Националните дружества, помощници на държавната
                  власт в нейната хуманитарна дейност и подчиняващи се на действащите закони
                  в съответните страни, трябва при все това да запазят своята независимост,
                  която им дава възможност да действат винаги в съответствие с принципите
                  на Червения кръст.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Body>
                <Text style={styles.attentionText}>ДОБРОВОЛНОСТ</Text>
                <Text>
                  Червеният кръст оказва доброволна и безкористна помощ.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.attentionText}>ЕДИНСТВО</Text>
                <Text>
                  Във всяка страна може да съществува само едно дружество на Червения кръст.
                  То трябва да бъде достъпно за всички и да разпростира своята хуманна дейност
                  по цялата територия на страната.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Body>
                <Text style={styles.attentionText}>УНИВЕРСАЛНОСТ</Text>
                <Text>
                  Червеният кръст е световно движение, в което всички дружества имат равни права
                  и задължението взаимно да се подпомагат.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              {/* <Left> */}

              {/* </Left> */}
            </CardItem>
          </Card>
          {/* <Button block transparent textStyle={{ color: 'black',fontSize:14 }} > */}
            
            <Text style={{ color: 'black',fontSize:14,textAlign:'center',marginVertical:8 }}>Donated by Georgiy Tenev</Text>
          {/* </Button> */}
        </Content>
        <Footer >
          <FooterTab style={styles.footer}>
            <Button block success  onPress={this.handleOpenWithWebBrowser}>
            <Text style={{ color: 'white',fontSize:15 }}>Дарете сега</Text>
            </Button>
          </FooterTab>
        </Footer>
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
    backgroundColor: 'green',
    // height:40
  },
  attentionText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 26,
    alignSelf:'center'
    

  },
  cardItem:{
    borderWidth:0.3,
    borderColor:'grey'
  }
});