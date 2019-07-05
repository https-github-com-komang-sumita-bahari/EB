import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { ImageBackground,AsyncStorage, View, Text, Alert } from 'react-native';
import { Constants, SQLite } from 'expo';

const db = SQLite.openDatabase('db.db');
export default class SplashScreen extends Component {
	static navigationOptions = {
		header:null
	}
	constructor(props) {
    super(props);
    this.state = { 
      textID:'',
      kode:0,
      loading1:false,
      Setting:[],
      komang:'0',
      
    }
     AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                    AsyncKodeUser:resultParsed.AsyncKodeUser,
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
       this.getKodeUser();
      this.setState({loading1: !this.state.loading1});
      
      }, 500);

  }
  getKodeUser() {
  
  return fetch('http://expressbahari.com/php_mobile/get_kode_user.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    id_user: this.state.AsyncNama,
 
  })
 
})  .then((response) => response.json())
        .then((responseJson) => {
          
          this.setState({
            kode: responseJson,
          }, function() {
            // In this block you can do something with new state.
          });
        this.loadings();
        })
        .catch((error) => {
        
        });
      
}
  componentWillMount(){
    db.transaction(tx => {

      tx.executeSql('select * from tbl_settings;',[],(_, { rows: { _array } }) => this.setState({ Setting: _array })
      );
    });
	  let myInterval = setInterval(()=>{
        if(this.state.Setting.length==0){
          if(this.state.AsyncNama==null){
            this .props.navigation.navigate('Login');
          }
        if(this.state.AsyncNama!=null){
          if(this.state.AsyncKodeUser==this.state.kode){
            this .props.navigation.navigate('home');
          }
          else{
            this .props.navigation.navigate('Login');
          }	
        }
        
      }
      else{
        if(this.state.Setting[0].s_bahasa==1){
          if(this.state.AsyncNama==null){
            this .props.navigation.navigate('Login');
          }
        if(this.state.AsyncNama!=null){
          if(this.state.AsyncKodeUser==this.state.kode){
            this .props.navigation.navigate('home');
          }
          else{
            this .props.navigation.navigate('Login');
          }	
        }
        }
        else{
            if(this.state.AsyncNama==null){
              this .props.navigation.navigate('Login_en');
            }
          if(this.state.AsyncNama!=null){
            if(this.state.AsyncKodeUser==this.state.kode){
              this .props.navigation.navigate('home_en');
            }
            else{
              this .props.navigation.navigate('Login_en');
            }	
          }
        }
      }
	  	clearInterval(myInterval);
		
	  },3000)

  }
  render() {
    return (
    	<View>

		<ImageBackground source={require('../images/bgss.jpg')}  style={{width: '100%', height: '100%'}} ></ImageBackground>
		
		</View>
    );
  }
}