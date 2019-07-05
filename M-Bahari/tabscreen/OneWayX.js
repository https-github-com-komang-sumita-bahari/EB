import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Segment, Button } from 'native-base';
import {
	StyleSheet,
	View,
} from "react-native";

import NumericInput from 'react-native-numeric-input';

export default class OneWay extends Component {
  render() {
    return (
	<View style={{alignItems: 'center',}}>
	<View style={styles.view}>
			<View style={styles.cardss}>
				<Text style={{fontSize: 12,}}>Dari</Text>
			</View>
			<View style={styles.cardss}>
				<Text style={{fontSize: 12,}}>Tujuan</Text>
			</View>
			</View>
			<View style={styles.view}>
			
				<Card style={styles.card}>
				<CardItem style={styles.carditem}>
						<Text style={{fontSize: 25, marginTop: 5,}}>PLG</Text>
					 </CardItem>
					 <CardItem style={styles.carditem}>
						 <Text style={{fontSize: 12,}}>Palembang</Text>
					 </CardItem>
				 </Card>
				 <View>
				     <Icon  style={{marginTop: 15, marginLeft: 2, marginRight: 2,}} name="arrow-forward"/>
				 </View>
				 <Card style={styles.card}>
					<CardItem style={styles.carditem}>
						<Text style={{fontSize: 25, marginTop: 5,}}>MTK</Text>
					 </CardItem>
					 <CardItem style={styles.carditem}>
						 <Text style={{fontSize: 12,}}>Muntok</Text>
					 </CardItem>
				 </Card>
		</View>

		<View style={{width:'90%', marginTop: 10,}}>
		<Text style={{fontSize: 12,}}>Tanggal Berangkat</Text>
		<Card style={{height:35, alignItems:'center'}}>
				<CardItem style={{height:10, marginTop: 5,}}>
						<Icon name='md-calendar' />
						<Text style={{fontSize: 25,}}>25</Text>
						<Text style={{fontSize: 12,marginLeft:5, marginTop:10,}}>November 2018</Text>
					 </CardItem>
				 </Card>
		</View>
		<View style={styles.segmen}>
		<Segment style={{backgroundColor:'#0D2E57'}}>
          <Button first style={{width:'30%'}}>
            <Text>VIP</Text>
          </Button>
          <Button last active style={{width:'30%'}}>
            <Text>Executive</Text>
          </Button>
          <Button style={{width:'30%'}}>
            <Text>Business</Text>
          </Button>
        </Segment>
		</View>
		<View style={{width:'100%', backgroundColor:'#0D2E57', alignItems: 'center',}}>
		
		<View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%',}}>
			<View style={styles.viewkelas}>
					<Text style={{fontSize: 16,}}>Dewasa <Text style={{fontSize: 12,}}>(12+)</Text></Text>
					<NumericInput style={{marginTop:10,}} onChange={value => console.log(value)} />
			</View>
			<View style={{width:'10%'}}></View>
			<View style={styles.viewkelas}>
					<Text style={{fontSize: 16,}}>Anak <Text style={{fontSize: 12,}}>(3-12)</Text></Text>
					<NumericInput style={{marginTop:10,}} onChange={value => console.log(value)} />
			</View>
		</View>

		<View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%', }}>
			<View style={styles.viewkelas}>
					<Text style={{fontSize: 16,}}>Infant <Text style={{fontSize: 12,}}>(0-3)</Text></Text>
					<NumericInput style={{marginTop:10,}} onChange={value => console.log(value)} />
			</View>
			<View style={styles.viewkelas}></View>
		</View>
		<View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%'}}>
			<View style={{marginTop:25,}}></View>
		</View>
		</View>
		</View>
		
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