import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Segment, Button,Picker} from 'native-base';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	
	AppRegistry,
	Platform,
	ActivityIndicator
} from "react-native";

import NumericInput from 'react-native-numeric-input';
import DatePicker from 'react-native-datepicker'

export default class PP extends Component {
	constructor(){
		super();
		this.state={

			date1:'',
			date2:'',
			isLoading: true,
			PickerValueHolder : ''
		}
		
	};
	componentDidMount() {
   
      return fetch('http://192.168.10.57/User_Project/rute_list.php')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
 
    GetPickerSelectedItemValue=()=>{
 
      Alert.alert(this.state.PickerValueHolder);
 
    }
  render() {
  	if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
   );
   }    return (
	<View style={{alignItems: 'center',}}>
	<View style={styles.view}>
			
	</View>
        <View style={{width:'100%', marginTop: 10,}}>
		<Text style={{fontSize: 12,backgroundColor:'#0D2E57',color:'#ffffff'}}>Rute</Text>
		<Picker
            selectedValue={this.state.PickerValueHolder}
 			placeholder="Pilih Rute"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
 
            { this.state.dataSource.map((item, key)=>(
            <Picker.Item label={item.rute} value={item.rute} key={key} />)
            )}
          </Picker>
          </View>
        <View style={styles.view}>
		<View style={{width:'44%', marginTop: 10,}}>
            <Text style={{fontSize: 12,}}>Tanggal Berangkat</Text>
            <DatePicker
              style={{width: 150}}
              date1={this.state.date1}
              mode="date"
              placeholder="Pilih Tanggal"
              format="YYYY-MM-DD"
              minDate="2018-07-07"
              maxDate="2116-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
              dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
               },
              dateInput: {
               marginLeft: 30
              }
               // ... You can check the source to find the other keys.
        }}
        onDateChange={(date1) => {this.setState({date1: date1})}}
      />
		</View>
        <View style={{width:'2%', marginTop: 10,}}></View>
        <View style={{width:'44%', marginTop: 10,}}>
            <Text style={{fontSize: 12,}}>Tanggal Pulang</Text>
            <DatePicker
              style={{width: 150}}
              date2={this.state.date2}
              mode="date"
              placeholder="Pilih Tanggal"
              format="YYYY-MM-DD"
              minDate="2018-07-07"
              maxDate="2116-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
              dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
               },
              dateInput: {
               marginLeft: 30
              }
               // ... You can check the source to find the other keys.
        }}
        onDateChange={(date2) => {this.setState({date2: date2})}}
      />
		</View>
        </View>
		<View style={styles.segmen}>
		<Segment style={{backgroundColor:'#0D2E57'}}>
          <Button first style={{width:'45%'}}>
            <Text>VIP</Text>
          </Button>
          <Button last active style={{width:'45%'}}>
            <Text>Executive</Text>
          </Button>
        </Segment>
		</View>
		<View style={{width:'100%', backgroundColor:'#0D2E57', alignItems: 'center',}}>
		
		<View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%',}}>
			<View style={styles.viewkelas}>
					<Text style={{fontSize: 16,}}>Dewasa <Text style={{fontSize: 12,}}>(12+)</Text></Text>
					<NumericInput style={{marginTop:10,}} minValue={0} maxValue={10} onChange={value => console.log(value)} />
			</View>
			<View style={{width:'10%'}}></View>
			<View style={styles.viewkelas}>
					<Text style={{fontSize: 16,}}>Anak <Text style={{fontSize: 12,}}>(3-12)</Text></Text>
					<NumericInput style={{marginTop:10,}} minValue={0} maxValue={10} onChange={value => console.log(value)} />
			</View>
		</View>

		<View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%', }}>
			<View style={styles.viewkelas}>
					<Text style={{fontSize: 16,}}>Infant <Text style={{fontSize: 12,}}>(0-3)</Text></Text>
					<NumericInput style={{marginTop:10,}} minValue={0} maxValue={10} onChange={value => console.log(value)} />
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