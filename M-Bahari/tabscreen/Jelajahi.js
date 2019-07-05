import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Container, 
    Header, 
    Left,
    Content,
    Icon, 
    Button,
    List,
    ListItem,
    CheckBox, 
    Card,
    CardItem,
    Text,
    Body,
    Right, 
    Title,
    Footer,
    Tab, Tabs,
    Thumbnail,
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Spinner from 'react-native-loading-spinner-overlay';

export default class SplashScreen extends Component {
  static navigationOptions = {
    header:null
  }
 constructor(props) {
    super(props);
    this.state = { 
                   loading1:false,
                   schedule:[{}],
                   
                 };
     AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
      
                 AsyncNama:resultParsed.AsyncNama,
                    
                });
            }
        });
  }
  componentDidMount() {
      this.loadings();
      

  }
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
       this.tampilRute();
      this.setState({loading1: !this.state.loading1});
      
      }, 800);

  }
  tampilRute() {
  
  return fetch('http://expressbahari.com/php_mobile/rute_list.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})  .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            
            schedule: responseJson,
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
      

}
  render() {
    return (
      <Content>
      <Spinner visible={this.state.loading1}/>
        <View style={{width: '100%' }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', marginTop:10}}>    Kupon Reward</Text>
              <Text style={{fontSize: 12, marginLeft:20}}>Tukarkan point Anda dengan berbagai kupon promo di setiap cabang kami.</Text>
        </View>

       { 
                this.state.schedule.map(( schedule, key ) =>
                (
                <View key = { key } style = { styles.schedule }>
                  <ListItem style={{height:70}}>
          <View style={{width:'100%',height:60, borderRadius:6}}>
            <Thumbnail square source={{uri: schedule.image}} style={{width:'100%', height:60, borderRadius:6}}/>
          </View>
      </ListItem>

                </View>
                ))
              }

    
      
  </Content>
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