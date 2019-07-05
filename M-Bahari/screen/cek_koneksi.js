import * as React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Text, View, StyleSheet, NetInfo,ImageBackground,AsyncStorage } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  static navigationOptions = {
    header:null
  }

  state = {
    connection:false,
    koneksi:'',
    textID:'',
      kode:0,
      loading1:false,
  };
   AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                    AsyncKodeUser:resultParsed.AsyncKodeUser,
                    AsyncNama:resultParsed.AsyncNama,
                });
            }
        });
  componentDidMount() {
  this.loadings();
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectionChange
    );
    if(this.state.connection=false){
        this.setState({koneksi:'tidak ada'});
      }
    if(this.state.connection=true){
        this.setState({koneksi:'ada'});
      }
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
    let myInterval = setInterval(()=>{
        if(this.state.koneksi=='ada'){
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
        if(this.state.koneksi=='tidak ada'){
          this.setState({koneksi:'tidak ada'});
        }
      clearInterval(myInterval);
    
    },1000)

  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectionChange
    );
  }

  handleConnectionChange = isConnected => {
    console.log(isConnected); // gives undefined in log
    this.setState({
      connection: isConnected,
      
    });
    
  };

  render() {
    return (
      <View>

    <ImageBackground source={require('../images/bgss.jpg')}  style={{width: '100%', height: '100%'}} ></ImageBackground>
    
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

