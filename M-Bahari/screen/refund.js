import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Content, Card, CardItem, Icon, Text, Item, Input, Button,Title, } from 'native-base';
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  AppRegistry,
  ToastAndroid,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

import { ImageBackground } from 'react-native';
export default class Daftar extends Component {
  static navigationOptions = {
    header:null
  }
  
  constructor(props) {
    super(props);
      this.state = {
      Invoice:'',
      Alasan:'',
      Nominal:'',
      NoRekening:'',


       
    }
    this.state = { loading: true };
     AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                    AsyncEmail:resultParsed.AsyncEmail,
                    AsyncKodeUser:resultParsed.AsyncKodeUser,
                    AsyncNama:resultParsed.AsyncNama,
                    AsyncUsername:resultParsed.AsyncUsername,

                                    });
            }
        });
  }
  UserLoginFunction = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
fetch('http://expressbahari.com/php_mobile/user_login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: this.state.AsyncEmail,
 
    password: this.state.PasswordLama,
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {

            this.GantiPassword()
     

        }
        else{
          ToastAndroid.show('Email Atau Password Salah', ToastAndroid.SHORT);
        }

      }).catch((error) => {
        ToastAndroid.show('Email Atau Password Salah', ToastAndroid.SHORT);
      });
  
  }
  GantiPassword = () =>{
 
 
fetch('http://expressbahari.com/php_mobile/update_password.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: this.state.AsyncEmail,
 
    password: this.state.PasswordBaru,
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

      ToastAndroid.show('Berhasil', ToastAndroid.SHORT);
      this.NextFunction(); 

      }).catch((error) => {
        ToastAndroid.show('Ubah Password Tidak Berhasil', ToastAndroid.SHORT);
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
lupaPassword=()=>{
  this.props.navigation.navigate('lupaPassword');
}
  
componentDidMount() {
      this.loadings();
  }
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      
      this.setState({loading1: !this.state.loading1});
      
      }, 500);

  }
CheckTextInputIsEmptyOrNot = () =>{
 
  const { Invoice }  = this.state ;
 const { Alasan }  = this.state ;
 const { Nominal } = this.state ;
 const { NoRekening } = this.state ;
 
if (Invoice == null || Alasan == null || Nominal == null || NoRekening == null )
{
  ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
 
}
else{
 
// Do something here which you want to if all the Text Input is filled.
this.UserLoginFunction();
  }
 
}
  
 
BackFunction = () =>{
   this.props.navigation.navigate('Login')
 }
NextFunction = () =>{
   this.props.navigation.navigate('Login')
 }
  
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <ImageBackground source={require('../images/bgdaftar.jpg')}  style={{width: '100%', height: '100%'}} >
        <Header style={{backgroundColor:'#3F81B5', marginTop:0,}}>
        <Title style={{marginTop:15,fontFamily:'SourceSansProBold', fontSize:21}}>Refund</Title>
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
            <Card style={styles.card}>
             
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='lock' style={styles.input}/>
                <Input placeholder='No Invoice' style={styles.input} secureTextEntry={true} maxLength={15} onChangeText={Invoice=> this.setState({Invoice})}/>
              </Item>
             </CardItem>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='lock' style={styles.input}/>
                <Input placeholder='Alasan' style={styles.input} secureTextEntry={true} maxLength={15} onChangeText={Alasan => this.setState({Alasan})}/>
              </Item>
             </CardItem>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='lock' style={styles.input}/>
                <Input placeholder='No Rekening Penerima' style={styles.input} secureTextEntry={true} maxLength={15} onChangeText={Alasan => this.setState({NoRekening})}/>
              </Item>
             </CardItem>
              <CardItem>
              </CardItem>
              <Button  block onPress={this.CheckTextInputIsEmptyOrNot} style={{backgroundColor:'#0D2E57'}}>
                <Text>Kirim</Text>
              </Button>
             
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
    borderRadius:20,
    width: '90%',
  },
  carditem:{
    height:50,
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