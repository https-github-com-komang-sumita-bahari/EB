import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Content, Card, CardItem, Icon, Text, Item, Input, Button,Title,ListItem } from 'native-base';
import {
	View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  AppRegistry,
  ToastAndroid,
  AsyncStorage
} from "react-native";

import { ImageBackground } from 'react-native';
export default class Daftar extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
      this.state = {
 
      UserNama: '',
      UserEmail: '',
      UserTelp: '',
      UserPassword: '',
      UserKode:'',
      dataPribadi:[],
     
 
    }
    this.state = { loading: true };

    AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                    
                    AsyncNama:resultParsed.AsyncNama,
                    AsyncUsername:resultParsed.AsyncUsername,

                                    });
            }
        });
  }
getPointUser() {
  this.setState({dataUser:[]});
  return fetch('http://expressbahari.com/php_mobile/get_datauser.php', {
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
            
           dataPribadi: responseJson,
            //frmtPoint:responseJson,
          }, function() {
          this.setState({UserNama:this.state.dataUser[0].nama});
          this.setState({UserEmail:this.state.dataUser[0].email});
          });
      this.getNamaUser();
        })
        .catch((error) => {
        
        });
     
}
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  GenerateRandomNumber=()=>
  {
 
    var RandomNumber = Math.floor(Math.random() * 9999999999) + 1 ;
 
    this.setState({
 
    UserKode : RandomNumber
 
    })
}
componentDidMount() {
      this.loadings();
  }
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      this.getPointUser();
       this.GenerateRandomNumber();
      this.setState({loading1: !this.state.loading1});
      
      }, 500);
    this.setState({UserNama:this.state.AsyncUsername});
  }

  UserRegistrationFunction = () =>{
 



  fetch('http://expressbahari.com/php_mobile/Update_Data.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      nama: this.state.UserNama,
      email: this.state.UserEmail,
      telp: this.state.UserTelp,
      id_user:this.state.AsyncNama,


  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
          ToastAndroid.show('Data Berhasil Di Update', ToastAndroid.SHORT);
          
        }).catch((error) => {
          console.error(error);
        });

}
 
BackFunction = () =>{
   this.props.navigation.navigate('Login')
 }
 clearFunction = () =>{
  const { UserNama }  = this.state ;
 const { UserEmail }  = this.state ;
 const { UserTelp }  = this.state ;
 const { UserPassword }  = this.state ;

  UserNama:'';
  UserEmail:''
 }

 CheckTextInputIsEmptyOrNot = () =>{
 
  const { UserNama }  = this.state ;
 const { UserEmail }  = this.state ;
 const { UserTelp }  = this.state ;
 const { UserPassword }  = this.state ;

if (UserNama == null || UserEmail == null || UserTelp == null  )
{
  ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
 
}
else{
 
// Do something here which you want to if all the Text Input is filled.
this.onSubmit();
  }
 
}

periksaEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
onSubmit = () => {
if (!this.periksaEmail(this.state.UserEmail)) {
  // not a valid email
  ToastAndroid.show('Format Email Salah', ToastAndroid.SHORT);
} else {
  // valid email
 this.UserRegistrationFunction();
}
} 
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <ImageBackground source={require('../images/bgdaftar.jpg')}  style={{width: '100%', height: '100%'}} >
        <Header style={{backgroundColor:'#3F81B5', marginTop:0,}}>
          
        </Header>
         <Content>
         <KeyboardAvoidingView>
          <View style={{alignItems: 'center',}}>
            <Card style={styles.card}>
          <View>
          <ListItem>
          <Text style={{marginTop:10,fontFamily:'SourceSansProBold', fontSize:20, marginLeft:20}}>{this.state.AsyncUsername}Ubah Data Pribadi{this.state.AsyncNama}</Text>
          </ListItem>
          </View>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='person' style={styles.input}/>
                <Input placeholder={this.state.AsyncUsername} style={styles.input} onChangeText={UserNama => this.setState({UserNama})}/>
              </Item>
             </CardItem>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='mail' style={styles.input}/>
                <Input placeholder={this.state.AsyncUsername} style={styles.input} keyboardType="email-address" onChangeText={UserEmail => this.setState({UserEmail})}/>
              </Item>
             </CardItem>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='ios-phone-portrait' style={styles.input}/>
                <Input placeholder='Phone' style={styles.input}  keyboardType={'numeric'} onChangeText={UserTelp => this.setState({UserTelp})}/>
              </Item>
             </CardItem>
             
              <CardItem>
              </CardItem>
              <CardItem style={{marginTop:-10,backgroundColor:'transparent', marginBottom:20}}>
              <Button block onPress={this.CheckTextInputIsEmptyOrNot} style={{backgroundColor:'#3F81B5',width:'100%'}}>
                <Text>SIMPAN</Text>
              </Button>
              </CardItem>
           </Card>
          </View>
          </KeyboardAvoidingView>

        
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
	card:{
    marginTop:50,
    width: '90%',
    borderRadius: 10,
  },
  carditem:{
    height:50,
    backgroundColor:'transparent'
  },
  container:{
		flex:2,
		 //justifyContent:'center',
		 flexGrow:2,
		
  },
  input:{
    fontSize:15,
  },
})
AppRegistry.registerComponent('Daftar', () => Daftar);