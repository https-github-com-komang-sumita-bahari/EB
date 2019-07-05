import React, { Component } from 'react';
import { Container, Right, Content, Card, CardItem, Icon, Text, Item, Input, Button,} from 'native-base';
import {
  View,
  BackHandler,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  AsyncStorage,
  ToastAndroid,
  

} from "react-native";

import { ImageBackground } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import Spinner from 'react-native-loading-spinner-overlay';
import { Constants, SQLite } from 'expo';

const db = SQLite.openDatabase('db.db');
export default class Login extends Component {
  static navigationOptions = {
    header:null
  }
  
  constructor(props) {
    super(props);
     this.state = {
      dataUser:[],
      UserEmail: '',
      UserPassword: '',
      Namauser:'',
      pointuser:0,
      kode:0,
      Username:'',
      hidePassword: true,
      loading1:false,
      loading2:false,
      loading3:false,
      Setting:[],
    };
    
   
    this.state = { loading: true };
     AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                    AsyncNama:resultParsed.AsyncNama,
                });
            }
        });
  }
   loadings=()=>{
    
    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      this.saveData();
      this.setState({loading1: !this.state.loading1});
     
      }, 100);

  }
managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
handleBackButton = () => {
     Alert.alert(
    'Keluar',
    'Apakah anda yakin ingin keluar?',
    [
      {text: 'Tidak', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Ya', onPress: () => BackHandler.exitApp()},
    ],
    { cancelable: false });
    return true;
}

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Font1: require("native-base/Fonts/gadugi.ttf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    db.transaction(tx => {
      tx.executeSql(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        'create table if not exists tbl_settings (id integer primary key not null, s_setting integer, s_bahasa integer);'
      );
      tx.executeSql('select * from tbl_settings;',[],(_, { rows: { _array } }) => this.setState({ Setting: _array })
      );
    });
    this.setState({ loading: false,
                    hidePassword:true});
    StatusBar.setHidden(true);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

validate = (UserEmail) => {
console.log(UserEmail);
let reg = /.com/;
if(reg.test(UserEmail) === false)
{
console.log("Email is Not Correct");
this.setState({email:UserEmail})
return false;
  }
else {
  this.setState({email:UserEmail})
  console.log("Email is Correct");
}
}

cek = () =>{
  const passwordParam = "^(?=.{5,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$"
        if (this.UserPassword.match(passwordParam)) {
            alert("True")
        }
}

  chckEmail =()=>{

    const { UserEmail }  = this.state ;
    const { findme } = this.state ;
    if ( UserEmail.indexOf(findme) > -2 ) {
          alert( "found it" );
        } else {
           alert( "not found" );
        }
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
 
    email: UserEmail,
 
    password: UserPassword,
  
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
        this.setState({loading3:false});
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {

            //Then open Profile activity and send user email to profile activity.
            //this.props.navigation.navigate('home');
            this.props.navigation.navigate('home',{UserEmail:this.state.UserEmail})

            //this.setState({
            //UserEmail: '',
            //UserPassword: ''
            //})
             

        }
        else{
          this.setState({loading3:false});
          ToastAndroid.show('Email Atau Password Salah', ToastAndroid.SHORT);
        }

      }).catch((error) => {
        this.setState({loading3:false});
        ToastAndroid.show('Koneksi Ke Server Gagal,Silahkan Coba Kembali', ToastAndroid.SHORT);
      });
  
  }

 CheckTextInputIsEmptyOrNot = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;

if(UserEmail == null || UserPassword == null )
{
  ToastAndroid.show('Username dan Password harus diisi', ToastAndroid.SHORT);
  
}


else{
this.setState({loading3:true}); 
// Do something here which you want to if all the Text Input is filled.
this.UpdateKodeUser();

 
  }
 
}
saveData = () =>{
  
    
        let AsyncEmail = this.state.UserEmail;
        let AsyncKodeUser = this.state.kode;
        let AsyncNama = this.state.Namauser;
        let AsyncUsername = this.state.Username;
        let AsyncPointUser = this.state.pointuser;
        let data = {
            AsyncKodeUser:AsyncKodeUser,
            AsyncEmail:AsyncEmail,
            AsyncNama:AsyncNama,
            AsyncUsername:AsyncUsername,
            AsyncPointUser:AsyncPointUser,

        }

        AsyncStorage.setItem('user', JSON.stringify(data));

        this.setState({
            AsyncKodeUser:AsyncKodeUser,
            AsyncEmail:AsyncEmail,
            AsyncNama:AsyncNama,
            AsyncUsername:AsyncUsername,
            AsyncPointUser:AsyncPointUser,
        });
      this.UserLoginFunction();
    }
 getNamaUser() {
  
  return fetch('http://expressbahari.com/php_mobile/get_namauser.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    email: this.state.UserEmail,
 
  })
 
})  .then((response) => response.json())
        .then((responseJson) => {
          
          this.setState({
            isLoading: false,
            Username: responseJson,
            dataUser:responseJson,
          }, function() {
            // In this block you can do something with new state.
          });
        this.getIdUser();
        })
        .catch((error) => {
          this.setState({loading3:false});
          ToastAndroid.show('Koneksi Ke Server Gagal,Silahkan Coba Kembali', ToastAndroid.SHORT);
        });
      
}   
 getIdUser() {
  
  return fetch('http://expressbahari.com/php_mobile/get_iduser.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    email: this.state.UserEmail,
 
  })
 
})  .then((response) => response.json())
        .then((responseJson) => {
          
          this.setState({
            isLoading: false,
            Namauser: responseJson,
          }, function() {
            // In this block you can do something with new state.
          });
        this.loadings();
        })
        .catch((error) => {
          this.setState({loading3:false});
        ToastAndroid.show('Koneksi Ke Server Gagal,Silahkan Coba Kembali', ToastAndroid.SHORT);
        });
      
}
GenerateRandomNumber=()=>
  {
 
    var RandomNumber = Math.floor(Math.random() * 9999999999) + 1 ;
 
    this.setState({
 
    kode : RandomNumber
 
    })
}
componentDidMount() {
      this.loadings2();
  }
loadings2=()=>{

    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
       this.GenerateRandomNumber();
      this.setState({loading2: !this.state.loading2});
      
        db.transaction(tx => {
          tx.executeSql('insert into tbl_settings (s_setting, s_bahasa) values (?,?)', [0,1]);
        });
      
      }, 200);

  }

getPointUser() {
  
  
  return fetch('http://expressbahari.com/php_mobile/getDataUser.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    email: this.state.UserEmail,
 
  })
 
})  .then((response) => response.json())
        .then((responseJson) => {
          
          this.setState({
            isLoading: false,
            pointuser: responseJson,
          }, function() {
            // In this block you can do something with new state.
          });
      this.getNamaUser();
        })
        .catch((error) => {
          this.setState({loading3:false});
        ToastAndroid.show('Koneksi Ke Server Gagal,Silahkan Coba Kembali', ToastAndroid.SHORT);
        });
      
}
UpdateKodeUser = () =>{


  fetch('http://expressbahari.com/php_mobile/update_kode_user.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      email: this.state.UserEmail,
      kode: this.state.kode,
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
        this.getPointUser();
  // Showing response message coming from server after inserting records.
                    
        }).catch((error) => {
          this.setState({loading3:false});
        ToastAndroid.show('Koneksi Ke Server Gagal,Silahkan Coba Kembali', ToastAndroid.SHORT);
        });

}
  render() {
    const { navigate } = this.props.navigation
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      
       <View style={styles.container}>
       <Spinner visible={this.state.loading3}/>
        <ImageBackground source={require('../images/bglogin.jpg')}  style={{width: '100%', height: '100%'}} >
        <StatusBar barStyle="light-content" />
        
        <KeyboardAvoidingView behavior="padding" style={styles.form}>
          <View style={{alignItems: 'center',}}>
          </View>
<View style={{alignItems: 'center',}}>
          
            <Card style={styles.card}>
             <CardItem style={{backgroundColor:'transparent'}}>
              <Item>
              <Image source={require('../images/icon_mail.png')} style={{width:20, height:15}}/>
                <Input style={{marginLeft:10, fontFamily:'Font1'}} placeholder='Email' keyboardType="email-address" onChangeText={UserEmail => this.setState({UserEmail})} onSubmitEditing={this.onSubmit}  />
              </Item>
             </CardItem>

             <CardItem style={{backgroundColor:'transparent'}}>
              <Item>
              <Image source={require('../images/icon_pasw.png')} style={{width:15, height:20}}/>
                <Input style={{marginLeft:10, fontFamily:'Font1'}} placeholder='Password'  secureTextEntry = {this.state.hidePassword} onChangeText={UserPassword => this.setState({UserPassword})}/>
                    <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                      <Image source = { ( this.state.hidePassword ) ? require('../assets/hide.png') : require('../assets/view.png') } style = { styles.btnImage } />
                    </TouchableOpacity>
              </Item>
             </CardItem>

              <CardItem style={{backgroundColor:'transparent'}}>
                <Right style={{marginRight:-80,}}>
                  
                <TouchableOpacity  onPress={() => navigate ('lupaPassword')}><Text style={{fontFamily:'Font1'}}>Lupa password ?</Text></TouchableOpacity>
                </Right>
              </CardItem>

              <CardItem style={{marginTop:-10,backgroundColor:'transparent'}}>

                <Button onPress={this.CheckTextInputIsEmptyOrNot} block style={{backgroundColor:'#3F81B5', width:'100%', borderRadius:10}}>
                  <Text style={{fontFamily:'Font1', fontWeight:'bold'}}>Login</Text>
                </Button>
              </CardItem>

           
           </Card>
          
          </View>
         <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Belum punya akun?</Text>
          <TouchableOpacity  onPress={() => navigate ('Daftar')}><Text style={styles.signupButton}> Daftar</Text></TouchableOpacity>
        </View>
          </KeyboardAvoidingView>
          </ImageBackground>
          </View>
        
          
     
    );
  }
}

const styles = StyleSheet.create({
  card:{
    marginTop:180,
    width: '90%',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#3F81B5',
  },
  header: {
    
    padding: 20,
    backgroundColor: '#0D2E57',
  },
  signupTextCont : {
    //flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    //paddingVertical:16,
    flexDirection:'row'
  },
   signupText: {
    color:'rgba(255,255,255,0.6)',
    fontSize:16
  },
  signupButton: {
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
  },
   visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
 
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
  form: {
    flex: 1,
    
  },
})