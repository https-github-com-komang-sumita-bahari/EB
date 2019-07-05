import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Content, Card, CardItem, Icon, Text, Item, Input, Button } from 'native-base';
import { WebView,BackHandler} from 'react-native';

export default class lupaPassword extends Component {
	static navigationOptions = {
    header:null
  }
   constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

                
  }
   async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
    this.registrasiForPushNotification();
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.goBack();
    return true;
}
  BackFunction = () =>{
   this.props.navigation.navigate('Login')
 }
  render() {
    return (
    	<Container style={{backgroundColor:'#0D2E57'}}>
        <Header style={{backgroundColor:'#0D2E57', marginTop:20,}}>
          <Left style={{marginLeft:-150,}}>
            <Button transparent onPress={this.BackFunction}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
      </Header>	
       <WebView
        source={{uri: 'http://express-bahari.com/'}}
        style={{marginTop: 20}}
      />
      </Container>

    );
  }
}