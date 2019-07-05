import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Segment, Button,Picker, } from 'native-base';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	ListView,
	AppRegistry,
	Platform,
	ActivityIndicator
} from "react-native";
import RadioButton from 'react-native-radio-button' 
import NumericInput from 'react-native-numeric-input';
import DatePicker from 'react-native-datepicker'
import { createStackNavigator } from 'react-navigation';
export default class Oneway extends Component {
	constructor(){
		super();
		this.state={
			isLoading: true,
			date:'',
			PickerValueHolder : ''
		}
		
	};
	componentDidMount() {

    return fetch('http://192.168.10.57/User_Project/rute_list.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 
    GetPickerSelectedItemValue=()=>{
 
      Alert.alert(this.state.PickerValueHolder);
 
    }

  render() {
    const { navigate } = this.props.navigation
  	if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }

    return (
	<View style={{alignItems: 'center',}}>

		<View style={{width:'100%', marginTop: 10,}}>
		<Text style={{fontSize: 12,backgroundColor:'#0D2E57',color:'#ffffff'}}>Rute</Text>
		<TouchableOpacity  onPress={() => navigate ('kamera')}><Text>Lupa password ?</Text></TouchableOpacity>
		<Text style={{fontSize: 12,backgroundColor:'#0D2E57',color:'#ffffff'}}>Tanggal Berangkat</Text>
		<DatePicker
              style={{width: 200,marginTop:15,}}
              date={this.state.date}
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
        onDateChange={(date) => {this.setState({date: date})}}
      />
		</View>

		<View style={styles.segmen}>
		<Segment style={{backgroundColor:'#0D2E57'}}>
          <Button first style={{width:'30%'}}>
            <Text>VIP</Text>
          </Button>
          <Button last style={{width:'30%'}}>
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
class PpJd extends Component
{
  static navigationOptions =
  {
     title: '',
  };
 
  render()
  {
     return(
        <View style = { styles.MainContainer }>
        <ListView

          dataSource={this.state.dataSource}

          renderSeparator= {this.ListViewItemSeparator}

          renderRow={(rowData) => <Text style={styles.rowViewContainer} 
          onPress={this.GetItem.bind(this, rowData.kode)} >{rowData.rute}</Text>}

        />
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