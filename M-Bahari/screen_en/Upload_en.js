import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Content, Card, CardItem, Icon, Text, Item, Input, Button } from 'native-base';
import { WebView } from 'react-native';

export default class Upload extends Component {
	static navigationOptions = {
    header:null
  }
  BackFunction = () =>{
   this.props.navigation.navigate('Transfer')
 }
  render() {
    return (
    	<Container style={{backgroundColor:'#ffffff'}}>
        <Header style={{backgroundColor:'#0D2E57', marginTop:20,}}>
          <Left style={{marginLeft:-150,}}>
            <Button transparent onPress={this.BackFunction}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
      </Header>	
       <WebView
        source={{uri: 'http://u392337208.hostingerapp.com?keyword=1000002'}}
        style={{marginTop: 20}}
      />
      </Container>

    );
  }
}