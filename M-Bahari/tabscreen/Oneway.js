import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Segment, Button, ListItem, Thumbnail, Body } from 'native-base';
import {
	StyleSheet,
	View,
} from "react-native";

import NumericInput from 'react-native-numeric-input';

export default class SplashScreen extends Component {
  render() {
    return (
		
			<ListItem>
            <Body>
            <Text style={{fontSize: 18, fontWeight: 'bold',}}>Promo Saat Ini</Text>
                <Card>
                <Thumbnail square source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}} style={{width:'100%', height:125}}/>
                    <CardItem style={{marginTop:-10,}}>
                        <Text style={{fontSize: 12,}}>500 Point</Text>
                    </CardItem>

                </Card>
            </Body>
            </ListItem>
		
		
    );
  }
}

const styles = StyleSheet.create({
	card:{
		width: '40%',
		alignItems: 'center',
	},
	cardss:{
		width: '50%',
		alignItems: 'center',
		marginTop:10,
  },
  carditem:{
    height:10,
  },
  view:{
		flex: 1, 
		flexDirection: 'row',
  },
  segmen:{
		width:'100%',
		backgroundColor:'#0D2E57',
		marginTop:20,
	},
	
	viewkelas:{
		width: '30%',
		alignItems: 'center',
		marginTop:10,
		marginLeft:25,
  },
})