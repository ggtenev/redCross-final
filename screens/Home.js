import React from 'react';
import { StyleSheet, Image, ScrollView, Alert, ImageBackground, TouchableOpacity, View, Dimensions, Modal } from 'react-native';
// import Modal from 'react-native-modal';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import call from 'react-native-phone-call'

import alergy from '../assets/alergy.png'
import bleeding from '../assets/bleeding.png'
import bones from '../assets/bones.png'
import burn from '../assets/burn.png'
import choking from '../assets/choking.png'
import headInjury from '../assets/head-injury.png'
import heartAttack from '../assets/heart-attack.png'
import hypo from '../assets/hypogli.png'
import movebody from '../assets/movebody.png'
import moving from '../assets/moving.png'
import shock from '../assets/shock.png'
import spine from '../assets/spine.png'
import stroke from '../assets/stroke.png'
import wounds from '../assets/wounds.png'

import Tab from '../components/Tab'

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default class Home extends React.Component {
  state = {
    isModalVisible: false,
  };
  
  componentDidMount(){
    setTimeout(() => {
     Alert.alert(
       'ВНИМАНИЕ',
       'Българския Червен Кръст моли всички да предприемат необходимите мерки за справяне с COVID-19',[{
       text:'Прочети',
       onPress:()=>this.props.navigation.navigate('Covid')
     }, {text:'Затвори',style:'destructive'}])
    }, 1400);
  }

  //toggle modal
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  static navigationOptions = ({ navigation }) => {
    // headerTitle instead of title
    return {
      headerTitle: 'Първа Помощ',
      headerLeft: () => <Image
        style={{ width: 50, height: 50, marginBottom: 7, marginHorizontal: 5 }}
        source={require('../resources/images/Redcross.png')}
      />,
      headerRight: () => (
        <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate('About')}>
          <Ionicons name="ios-heart" size={32} color="white" style={{ marginRight: 10 }} />
        </TouchableOpacity>
      )
    }
  };


  render() {
    const args = {
      number: ' +359112', // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
    return (
      <Container>
    
        <Content>
          <Image
            style={{ width: '100%', height: 230 }}
            source={require('../assets/finalized.png')}
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Covid')} style={styles.coronaButton}>
              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Коронавирус (COVID-19)</Text>
              <Ionicons name="ios-arrow-forward" size={28} color="white" style={styles.icon} />
            </TouchableOpacity>
          {/* <Button danger block onPress={this.toggleModal} color='red'><Text>Коронавирус (COVID - 19)</Text></Button> */}
          <ScrollView>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Alergy')}>
              <Tab title='Помощ при алергии' icon={alergy} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardioPulmonary')}>
              <Tab title='Клинична смърт' icon={heartAttack} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Choking')}>
              <Tab title='Помощ при задавяне' icon={choking} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Burns')}>
              <Tab title='Помощ при изгаряне' icon={burn} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Stroke')}>
              <Tab title='Помощ при инсулт' icon={stroke} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HeartAttack')}>
              <Tab title='Помощ при инфаркт' icon={heartAttack} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HeadTrauma')}>
              <Tab title='Нараняване на главата' icon={headInjury} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Wounds')}>
              <Tab title='Помощ при рани' icon={wounds} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SpineInjury')}>
              <Tab title='Травма на гръбначния стълб' icon={spine} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Bones')}>
              <Tab title='Травми на кости и стави' icon={bones} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Hypoglycemia')}>
              <Tab title='Хипогликемия' icon={hypo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Shock')}>
              <Tab title='Помощ при шок' icon={shock} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Moving')}>
              <Tab title='Преместване на пострадал' icon={moving} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Bleeding')}>
              <Tab title='Спиране на кръвотечение' icon={bleeding} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Aside')}>
              <Tab title='Човек в безсъзнание' icon={movebody} />
            </TouchableOpacity>

          </ScrollView>
        </Content>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button onPress={() => call(args).catch(console.error)}>
              <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Ionicons name="ios-call" size={36} color="white" style={{ marginRight: 10 }} />
                <Title style={{fontSize:28,color:'white'}}>112</Title>
              </View>
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
    height: 120,
    paddingTop: 30,
    width: '100%'
  },
  bodyTitle: {
    alignItems: 'center'
  },
  footer: {
    backgroundColor: 'red',
    // flexDirection:'row'
  },
  corona:{
    width:Dimensions.get('window').width,
  },
  coronaButton:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'red',
    alignItems:'center',
    padding:10,
    marginVertical:7
  },
  icon:{
    position:'absolute',
    right:10
  }
});


