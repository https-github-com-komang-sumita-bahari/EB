import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Content, Card, CardItem, Icon, Text, Item, Input, Button } from 'native-base';
import {
	View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  AppRegistry,
  ToastAndroid
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
 
    }
    this.state = { loading: true };
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
       this.GenerateRandomNumber();
      this.setState({loading1: !this.state.loading1});
      
      }, 500);

  }

  UserRegistrationFunction = () =>{
  const { UserNama }  = this.state ;
 const { UserEmail }  = this.state ;
 const { UserTelp }  = this.state ;
 const { UserPassword }  = this.state ;


  fetch('http://expressbahari.com/php_mobile/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      nama: UserNama,
      kode: this.state.UserKode,
      email: UserEmail,

      telp: UserTelp,

      password: UserPassword
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
          ToastAndroid.show('Akun Berhasil Dibuat', ToastAndroid.SHORT);
          
        }).catch((error) => {
          console.error(error);
        });
 this.props.navigation.navigate('Login')
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

if (UserNama == null || UserEmail == null || UserTelp == null || UserPassword == null )
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
          <Left style={{marginLeft:-150,}}>
            <Button transparent onPress={() =>
                  this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          
        </Header>
         <Content>
         <KeyboardAvoidingView>
          <View style={{alignItems: 'center',}}>
            <Text style={{fontSize:18, marginBottom:10, color:'#fff'}}>Registrasi Akun</Text>
            <Card style={styles.card}>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='person' style={styles.input}/>
                <Input placeholder='Nama' style={styles.input} onChangeText={UserNama => this.setState({UserNama})}/>
              </Item>
             </CardItem>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='mail' style={styles.input}/>
                <Input placeholder='Alamat E-Mail' style={styles.input} keyboardType="email-address" onChangeText={UserEmail => this.setState({UserEmail})}/>
              </Item>
             </CardItem>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='ios-phone-portrait' style={styles.input}/>
                <Input placeholder='Phone' style={styles.input}  keyboardType={'numeric'} onChangeText={UserTelp => this.setState({UserTelp})}/>
              </Item>
             </CardItem>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='lock' style={styles.input}/>
                <Input placeholder='Password' style={styles.input} secureTextEntry={true} maxLength={15} onChangeText={UserPassword => this.setState({UserPassword})}/>
              </Item>
             </CardItem>
              <CardItem>
              </CardItem>
              <CardItem style={{marginTop:-10,backgroundColor:'transparent', marginBottom:20}}>
              <Button block onPress={this.CheckTextInputIsEmptyOrNot} style={{backgroundColor:'#3F81B5',width:'100%'}}>
                <Text>Daftar</Text>
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