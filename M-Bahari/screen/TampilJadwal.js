import React, { Component } from 'react';
import { Container, Header, Left, Title, Body, Right, Content, Card, CardItem, Icon, Text, Item, Input, Button } from 'native-base';
import { WebView,StyleSheet,View,BackHandler } from 'react-native';

export default class lupaPassword extends Component {
	static navigationOptions = {
    header:null
  }
  constructor(props) {
    super(props);
   this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  BackFunction = () =>{
   this.props.navigation.navigate('home')
 }
 async componentWillMount() {
    await Expo.Font.loadAsync({
      SourceSansProRegular: require("native-base/Fonts/SourceSansPro-Regular.otf"),
      SourceSansProBold: require("native-base/Fonts/SourceSansPro-Bold.otf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.navigate('home');
    return true;
}
  render() {
    return (
    	<Container>
        <Header style={{backgroundColor:'#3F81B5', height:20,}}></Header> 
        <Header style={{backgroundColor:'#3F81B5',}}>
         <View style={styles.view}>
         <Left style={{marginTop:2}}>
            <Button transparent onPress={() =>
                  this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,fontFamily:'SourceSansProBold', fontSize:20}}>Jadwal Keberangkatan kapal</Title>
          
          </View>
        </Header>
       <WebView
        source={{uri: 'http://jadwal.expressbahari.com/'}}
        
      />
      </Container>

    );
  }
}
const styles = StyleSheet.create({
  card:{
    width: '50%',
  },
  bglist:{
    backgroundColor:'#000000',
  },
  carditem:{
    height:50,
  },
  container:{
    flex:2,
     //justifyContent:'center',
     flexGrow:2,
    
  },
  input:{
    fontSize:15,
  },

  wheelPicker: {
    width:200,
    height: 150
  },

  view:{
    flex: 1, 
        flexDirection: 'row',
  },
})