import React, { Component } from 'react';
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
    Radio,
    FooterTab,
    Badge,
    Input,
    Item,
} from 'native-base';
import {
  StyleSheet,
  View,
  Linking,
  Alert,
  AsyncStorage,
  TouchableOpacity,
  BackHandler,
  Image,
  ToastAndroid,
  ImageBackground,
} from "react-native";
import { Avatar } from 'react-native-elements';
import { BottomSheet } from 'react-native-btr';
import call from 'react-native-phone-call';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Constants, SQLite } from 'expo';

const db = SQLite.openDatabase('db.db');
export default class Akun extends Component {
  static navigationOptions = {
    header:null
  }
  
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      BottomPopUp:false,
      loading1:false,
      collapsed:false,
      pointuser:0,
      namauser:'',
      Notif:[{}],
      hideFooter:true,
      loadPoint:false,
      disable:true,
      frmtPoint:0,
      no_telp:'',
      isModalVisible:false,
      isModalVisible2:false,
      U_nama:'',
      U_email:'',
      U_telp:'',
      PasswordLama:'',
      PasswordBaru:'',
      KonfirmasiPasswordBaru:'',
      hidePassword: true,
      hidePassword2: true,
      hidePassword3: true,
      temp_respon:[{}],
      bgColor:'#3F81B5',
      bgColor2:'#F4F0E5'
    };
    
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
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
     this.props.navigation.navigate('home_en');
     this.setState({
      tab4:true,
      tab1:false,
    });
  }
  _toggleBottomNavigationView = () => {
    this.setState({ hideFooter: !this.state.hideFooter })
    this.setState({ BottomPopUp: !this.state.BottomPopUp })
    this.setState({ footerhide: !this.state.footerhide })
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });

    this.props.navigation.navigate('Pesanan_en');
    this.setState({
      tab4:true,
      tab2:false,
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
    
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
    this.props.navigation.navigate('Akun_en');
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      
      SourceSansProBold: require("native-base/Fonts/SourceSansPro-Bold.otf"),
      Roboto: require("native-base/Fonts/SourceSansPro-Regular.otf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}
managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  managePasswordVisibility2 = () =>
  {
    this.setState({ hidePassword2: !this.state.hidePassword2 });
  }
  managePasswordVisibility3 = () =>
  {
    this.setState({ hidePassword3: !this.state.hidePassword3 });
  }
handleBackButtonClick() {
    this.props.navigation.navigate('Akun_en');
    return true;
}
clearAsyncStorage = async() => {
 
    AsyncStorage.clear();

    this.props.navigation.navigate('Login_en')
}
 FunctionWA=()=>{
  Linking.openURL(
              'http://api.whatsapp.com/send?phone=62' + '0811789200'
            );
  this._toggleBottomNavigationView();
 }
 call = () => {
    //handler to make a call
    const args = {
      number: '0811789200',
      prompt: false,
    };
 
    call(args).catch(console.error);
  };
  logout=()=>{
    db.transaction(tx => {
          tx.executeSql(
            'delete from login_session;'
          );
        });
    this.clearAsyncStorage()
  }
 TampilAlert = () => {
   
     Alert.alert(
    'Info',
    'Apakah anda yakin ingin keluar dari akun ini?',
    [
      {text: 'Tidak', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Ya', onPress: () => this.clearAsyncStorage()},
    ],
    { cancelable: false });
    return true;
}
point =()=>{
  this.props.navigation.navigate('point_en')
}
goBack=()=>{
 
    this.props.navigation.navigate('home_en')
 
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

            //Then open Profile activity and send user email to profile activity.
            //this.props.navigation.navigate('home');
            this.GantiPassword()

            //this.setState({
            //UserEmail: '',
            //UserPassword: ''
            //})
             

        }
        else{
          ToastAndroid.show('Password Salah', ToastAndroid.SHORT);
        }

      }).catch((error) => {
        ToastAndroid.show('Password Salah', ToastAndroid.SHORT);
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
CheckTextInputIsEmptyOrNot = () =>{
 
  const { PasswordLama }  = this.state ;
 const { PasswordBaru }  = this.state ;
 const { KonfirmasiPasswordBaru} = this.state;
 
if (PasswordLama == null || PasswordBaru == null || KonfirmasiPasswordBaru == null)
{
  ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
}

else{
 if(this.state.PasswordBaru == this.state.KonfirmasiPasswordBaru){
  // Do something here which you want to if all the Text Input is filled.
this.UserLoginFunction();
 }
 else{
  ToastAndroid.show('Konfirmasi Password Salah', ToastAndroid.SHORT);
 }

  }
 
}
  NextFunction = () =>{
   this.setState({ isModalVisible2: !this.state.isModalVisible2 });
   this.props.navigation.navigate('Login_en')
 }
  getNotelp() {
  
    return fetch('http://expressbahari.com/php_mobile/get_datauser.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
      
      email: this.state.AsyncEmail,
   
    })
   
  })  .then((response) => response.json())
          .then((responseJson) => {
            
            this.setState({
              no_telp:responseJson[0].telp,
            }, function() {
              // In this block you can do something with new state.
            });
        
          })
          .catch((error) => {
          
          });
        
  }

  getPointUser() {
  
  return fetch('http://expressbahari.com/php_mobile/getDataUser.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    email: this.state.AsyncEmail,
 
  })
 
})  .then((response) => response.json())
        .then((responseJson) => {
          
          this.setState({
            isLoading: false,
            pointuser: responseJson,
            frmtPoint:responseJson,
          }, function() {
            // In this block you can do something with new state.
          });
      
        })
        .catch((error) => {
        
        });
      
}
TampilRiwayat = () =>{
 
fetch('http://expressbahari.com/php_mobile/Riwayat.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    id_user: this.state.AsyncNama,
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
      this.setState({
     
        Notif:responseJson,

      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
  
  }
getNamaUser() {
  
  return fetch('http://expressbahari.com/php_mobile/getNamaUser.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    email: this.state.AsyncEmail,
 
  })
 
})  .then((response) => response.json())
        .then((responseJson) => {
      this.formatPoint();    
          this.setState({
            isLoading: false,
            namauser: responseJson,
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
        
        });
      
}
componentDidMount() {
      this.loadings();
  }
  formatPoint(){
  if(this.state.frmtPoint.toString().length==4){
      this.setState({
        frmtPoint: this.state.frmtPoint.toString().substring(0, 1)+'.'+this.state.frmtPoint.toString().substring(1, 4),
      });
    }
  else if(this.state.frmtPoint.toString().length==5){
      this.setState({
        frmtPoint: this.state.frmtPoint.toString().substring(0, 2)+'.'+this.state.frmtPoint.toString().substring(2, 5),
      });
    }
   else if(this.state.frmtPoint.toString().length==6){
      this.setState({
        frmtPoint: this.state.frmtPoint.toString().substring(0, 3)+'.'+this.state.frmtPoint.toString().substring(3, 6),
      });
    }
    else if(this.state.frmtPoint.toString().length==7){
      this.setState({
        frmtPoint: this.state.frmtPoint.toString().substring(0, 1)+'.'+this.state.frmtPoint.toString().substring(1, 4)+'.'+this.state.frmtPoint.toString().substring(4, 7),
      });
    }
    else if(this.state.frmtPoint.toString().length==8){
      this.setState({
        frmtPoint: this.state.frmtPoint.toString().substring(0, 2)+'.'+this.state.frmtPoint.toString().substring(2, 5)+'.'+this.state.frmtPoint.toString().substring(5, 8),
      });
    }
    this.setState({loadPoint:true,disable:false});
  }
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      this.getPointUser();
      this.TampilRiwayat();
       this.getNotelp();
       this.getNamaUser();
      this.setState({loading1: !this.state.loading1});
      
      }, 800);

  }
  Ubah =()=>{
  this.props.navigation.navigate('UbahPassword_en')
}
Tutorial =()=>{
  this.props.navigation.navigate('SlideTutorial_en')
}
SnK =()=>{
  this.props.navigation.navigate('SyaratKetentuan_en')
}
KP =()=>{
  this.props.navigation.navigate('KebijakanPrivasi_en')
}
DataP =()=>{
  this.props.navigation.navigate('DataPribadi_en')
}

_toggleModal = () =>{
  if(this.state.isModalVisible==false){
    this.setState({ U_nama: this.state.AsyncUsername,U_email:this.state.AsyncEmail, U_telp:this.state.no_telp });
  }
  this.setState({ isModalVisible: !this.state.isModalVisible });
}
_toggleModal2 = () =>{
 
  this.setState({ isModalVisible2: !this.state.isModalVisible2 });
}
Indonesia= () =>{
  db.transaction(tx => {
    tx.executeSql(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
     'delete from tbl_settings;'
   );
 });
 setTimeout(()=>{
  db.transaction(tx => {   
    db.transaction(tx => {
      tx.executeSql('insert into tbl_settings (s_setting, s_bahasa) values (?,?)', [0,1]);
    });
  });
  this.props.navigation.navigate('home')
 }, 200);
}

simpan(){
  this.update_user()
}

 cek_email() {
  
   fetch('http://expressbahari.com/php_mobile/user_login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email:this.state.U_email,


  
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson === 'Data Matched')
        {

            //Then open Profile activity and send user email to profile activity.
            //this.props.navigation.navigate('home');
           ToastAndroid.show('Email Telah Digunakan', ToastAndroid.SHORT);

            //this.setState({
            //UserEmail: '',
            //UserPassword: ''
            //})
             

        }
        else{
          this.update_user();
        }

      }).catch((error) => {
        this.setState({loading3:false});
        ToastAndroid.show('Koneksi Ke Server Gagal,Silahkan Coba Kembali', ToastAndroid.SHORT);
      });
  
  }

 CheckTextInputIsEmptyOrNot2 = () =>{
 


if (this.state.U_nama == null ||this.state.U_email == null || this.state.U_telp == null )
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
if (!this.periksaEmail(this.state.U_email)) {
  // not a valid email
  ToastAndroid.show('Format Email Salah', ToastAndroid.SHORT);
} else {
  // valid email
  if(this.state.AsyncEmail!=this.state.U_email){
    this.cek_email();
  }
  else{
    this.update_user();
  }
  

}
} 

update_user=()=>{
  return fetch('http://expressbahari.com/php_mobile/update_user.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.AsyncNama,
          nama: this.state.U_nama,
          email: this.state.U_email,
          telp: this.state.U_telp,
        
        })
      
        }).then((response) => response.json())
            .then((responseJson) => {
              this.setState({AsyncUsername:this.state.U_nama, AsyncEmail:this.state.U_email, no_telp:this.state.U_telp});  
              this._toggleModal();
            }).catch((error) => {
            
        });
}
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
         <Header style={{backgroundColor:'#3F81B5', height:20,}}></Header> 
         <Header style={{backgroundColor:'#3F81B5',}}>
         <View style={styles.view}>
         <Left style={{marginTop:2}}>
            <Button transparent onPress={() =>
                  this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,marginLeft:-120,fontFamily:'SourceSansProBold', fontSize:20}}>     Settings</Title>
          
          </View>
        </Header>

         <Content style={{backgroundColor:'#F4F0E5'}}>
         <BottomSheet
          visible={this.state.isModalVisible}
          onBackButtonPress={this._toggleModal}
          onBackdropPress={this._toggleModal}>
 
         
            <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
            
            <Header style={{backgroundColor:'#3F81B5',}}>
            
            <View style={styles.view}>
              <Title style={{marginTop:15, fontFamily:'SourceSansProBold'}}>Ubah Profil</Title>
              <Right>
                <Button transparent  onPress={this._toggleModal}>
                  <Icon name='close' style={{fontSize:30}} />
                </Button>
              </Right>
              </View>
            </Header>
            <View >
            
               
               <Text style={{marginLeft:20,fontSize:11,marginTop:20}}>Name</Text>
              
             <CardItem style={styles.carditem}>
      
              <Item>
                <Icon active name='person' style={styles.input}/>
                <Input placeholder='Name' style={styles.input} value={this.state.U_nama} onChangeText={UserNama => this.setState({U_nama:UserNama})}/>
              </Item>
             </CardItem>
             <Text style={{marginLeft:20,fontSize:11,marginTop:20}}>Email Address</Text>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='mail' style={styles.input}/>
                <Input placeholder='Email Address' value={this.state.U_email} style={styles.input} keyboardType="email-address" onChangeText={UserEmail => this.setState({U_email:UserEmail})}/>
              </Item>
             </CardItem>
             <Text style={{marginLeft:20,fontSize:11,marginTop:20}}>Telephone</Text>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='ios-phone-portrait' style={styles.input}/>
                <Input placeholder='Phone' style={styles.input} value={this.state.U_telp}  keyboardType={'numeric'} onChangeText={UserTelp => this.setState({U_telp:UserTelp})}/>
              </Item>
             </CardItem>
              <CardItem>
              </CardItem>
              <CardItem style={{marginTop:-10,backgroundColor:'transparent', marginBottom:20}}>
              <Button block onPress={this.CheckTextInputIsEmptyOrNot2} style={{backgroundColor:'#3F81B5',width:'100%'}}>
                <Text>Simpan</Text>
              </Button>
              </CardItem>
           
          </View>
          </View>

        </BottomSheet>

        <BottomSheet
          visible={this.state.isModalVisible2}
          onBackButtonPress={this._toggleModal2}
          onBackdropPress={this._toggleModal2}>
 
         
            <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
            
            <Header style={{backgroundColor:'#3F81B5',}}>
            
            <View style={styles.view}>
              <Title style={{marginTop:15, fontFamily:'SourceSansProBold'}}>Change Password</Title>
              <Right>
                <Button transparent  onPress={this._toggleModal2}>
                  <Icon name='close' style={{fontSize:30}} />
                </Button>
              </Right>
              </View>
            </Header>
            <View >
            
               
      
              
             
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='lock' style={styles.input}/>
                <Input placeholder='Password' style={styles.input} secureTextEntry = {this.state.hidePassword} maxLength={15} onChangeText={PasswordLama => this.setState({PasswordLama})}/>
                <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                      <Image source = { ( this.state.hidePassword ) ? require('../assets/hide.png') : require('../assets/view.png') } style = { styles.btnImage } />
                    </TouchableOpacity>
              </Item>
             </CardItem>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='lock' style={styles.input}/>
                <Input placeholder='New Password' style={styles.input}  secureTextEntry = {this.state.hidePassword2} maxLength={15} onChangeText={PasswordBaru => this.setState({PasswordBaru})}/>
                <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility2 }>
                      <Image source = { ( this.state.hidePassword2 ) ? require('../assets/hide.png') : require('../assets/view.png') } style = { styles.btnImage } />
                </TouchableOpacity>
              </Item>
             </CardItem>
             <CardItem style={styles.carditem}>
              <Item>
                <Icon active name='lock' style={styles.input}/>
                <Input placeholder=' Confirm New Password' style={styles.input} secureTextEntry = {this.state.hidePassword3} maxLength={15} onChangeText={KonfirmasiPasswordBaru => this.setState({KonfirmasiPasswordBaru})}/>
              <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility3 }>
                      <Image source = { ( this.state.hidePassword3 ) ? require('../assets/hide.png') : require('../assets/view.png') } style = { styles.btnImage } />
                    </TouchableOpacity>
              </Item>
             </CardItem>

              <CardItem>
              </CardItem>
              <CardItem style={{marginTop:-10,backgroundColor:'transparent', marginBottom:20}}>
              <Button block onPress={this.CheckTextInputIsEmptyOrNot} style={{backgroundColor:'#3F81B5',width:'100%'}}>
                <Text>Save</Text>
              </Button>
              </CardItem>
           
          </View>
          </View>

        </BottomSheet>

         

        <View style={{width:'100%', backgroundColor:'#fff'}}>
            <CardItem style={{height:45,backgroundColor:'transparent'}}>
              <Text style={{fontSize:15, fontFamily:'Roboto'}}>Detail Account</Text>
              <Right>
              <TouchableOpacity onPress={this._toggleModal}>
                <Text style={{fontSize:15, fontFamily:'Roboto', color:'#3F81B5'}}>Change</Text>
                </TouchableOpacity >
              </Right>
            </CardItem>
            <CardItem style={{height:5,backgroundColor:'transparent', marginTop:-10}}>
              <View style={{width:'100%', height:1, backgroundColor:'#F4F0E5'}}></View>
            </CardItem>
            <CardItem style={{height:5,backgroundColor:'transparent',marginTop:-10}}>
              <Text style={{fontSize:15, fontFamily:'Roboto'}}>   {this.state.AsyncUsername}</Text>
            </CardItem>
            <CardItem style={{height:5,backgroundColor:'transparent'}}>
              <Text style={{fontSize:15, fontFamily:'Roboto'}}>   {this.state.AsyncEmail}</Text>
            </CardItem>
            <CardItem style={{height:5,backgroundColor:'transparent', marginBottom:15}}>
              <Text style={{fontSize:15, fontFamily:'Roboto'}}>   {this.state.no_telp}</Text>
            </CardItem>
        </View>

        <View style={{width:'100%', backgroundColor:'#fff', marginTop:10}}>
          <TouchableOpacity onPress={this._toggleModal2}>
              <CardItem style={{height:45,backgroundColor:'transparent'}}>
                  <Image source={require('../images/icon_sandi.png')} style={{width:16, height:20, marginLeft:2}}/>
                  <Text style={{fontSize: 15, fontFamily:'Roboto'}}>     Change Password                             </Text>
                  <Right>
                      <Icon active name="ios-arrow-forward" />
                  </Right>
              </CardItem>
            </TouchableOpacity >
        </View>
        <View style={{width:'100%', backgroundColor:'#fff', marginTop:2}}>
          
              <CardItem style={{height:45,backgroundColor:'transparent'}}>
                  <Image source={require('../images/icon_bahasa.png')} style={{width:20, height:20}}/>
                  <Text style={{fontSize: 15, fontFamily:'Roboto'}}>     Languange </Text>
                  <View style={{marginLeft:10}}>
                    <CardItem style={{backgroundColor:'transparent'}}>
                     <Button onPress={this.Indonesia} style={{height:25, fontSize:10, marginLeft:5, borderRadius:7, backgroundColor:this.state.bgColor2}}><Text style={{color:'#000'}}>Indonesia</Text></Button>
                     <Text> </Text>
                     <Button  style={{height:25, fontSize:10, borderRadius:7, backgroundColor:this.state.bgColor}}><Text >English</Text></Button>
                     </CardItem>
                  </View>
              </CardItem>
            
        </View>
        <View style={{width:'100%', backgroundColor:'#fff', marginTop:2}}>
          <TouchableOpacity onPress={this.Tutorial}>
              <CardItem style={{height:45,backgroundColor:'transparent'}}>
                  <Image source={require('../images/icon_tutorial.png')} style={{width:23, height:23}}/>
                  <Text style={{fontSize: 15, fontFamily:'Roboto'}}>    Tutorial                                           </Text>
                  <Right>
                      <Icon active name="ios-arrow-forward" />
                  </Right>
              </CardItem>
            </TouchableOpacity >
        </View>


        <View style={{width:'100%', backgroundColor:'#fff', marginTop:2}}>
          <TouchableOpacity onPress={this.SnK}>
            <CardItem style={{height:45,backgroundColor:'transparent'}}>
                <Image source={require('../images/icon_ketentuan.png')} style={{width:20, height:20}}/>
                <Text style={{fontSize:15, fontFamily:'Roboto'}}>     License And Agreement                   </Text>
                <Right>
                    <Icon active name="ios-arrow-forward" />
                </Right>
            </CardItem>
          </TouchableOpacity >
        </View>

        <View style={{width:'100%', backgroundColor:'#fff', marginTop:2}}>
          <TouchableOpacity onPress={this.KP}>
            <CardItem style={{height:45,backgroundColor:'transparent'}}>
                  <Image source={require('../images/icon_privasi.png')} style={{width:20, height:22}}/>
                <Text style={{fontSize: 15, fontFamily:'Roboto'}}>     Privacy Policy                        </Text>
                <Right>
                    <Icon active name="ios-arrow-forward" />
                </Right>
            </CardItem>
          </TouchableOpacity >
        </View>
           <View style={{alignItems:'center', marginTop:10}}>
             <Text>Versi App 1.0</Text>
           </View>
          </Content>
          
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card:{
    width: '50%',
  },
  bglist:{
    backgroundColor:'#000000',
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
 visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
  wheelPicker: {
    width:200,
    height: 150
  },
  bottomNavigationView: {
 
    backgroundColor: '#ffffff',
    width: '99%',
    height: 100,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center'
 
  },
btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
  view:{
    flex: 1, 
        flexDirection: 'row',
  },
})