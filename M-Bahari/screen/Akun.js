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
    Thumbnail,
    Badge,
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
  ImageBackground,
} from "react-native";
import { Avatar } from 'react-native-elements';
import { BottomSheet } from 'react-native-btr';
import call from 'react-native-phone-call';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Constants, SQLite } from 'expo';
import { ImagePicker, Permissions } from "expo";
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
      BottomPopUp2:false,
      loading1:false,
      collapsed:false,
      pointuser:0,
      namauser:'',
      Notif:[{}],
      hideFooter:true,
      loadPoint:false,
      disable:true,
      frmtPoint:0,
      imagUser:'x',
      dataUser:[],
      viewNotif: false,
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
     this.props.navigation.navigate('home');
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
  _toggleBottomNavigationView2 = () => {
    this.setState({ hideFooter: !this.state.hideFooter })
    this.setState({ BottomPopUp2: !this.state.BottomPopUp2 })
    this.setState({ footerhide: !this.state.footerhide })
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });

    this.props.navigation.navigate('Pesanan');
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
    this.props.navigation.navigate('Akun');
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

_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality:0.4,
  });

  console.log(result);

  if (!result.cancelled) {
    this.setState({ image: result.uri });
    let localUri = result.uri;
let filename = localUri.split('/').pop();
console.log(filename);
let match = /\.(\w+)$/.exec(filename);
let type = match ? `image/${match[1]}` : `image`;

let formData = new FormData();
formData.append('photo', { uri: localUri, name: filename, type });
setTimeout(()=>{
  fetch('http://expressbahari.com/php_mobile/update_photo_profil.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: this.state.AsyncNama,
    name: filename,
  
  })

  }).then((response) => response.json())
      .then((responseJson) => {
     this.setState({imagUser:'http://expressbahari.com/php_mobile/photo_profil/'+filename});
        
      }).catch((error) => {
      
  });
},100);

return await fetch('http://expressbahari.com/php_mobile/upload_photo_profil.php', {
  method: 'POST',
  body: formData,
  header: {
    'content-type': 'multipart/form-data',
  },
});


  }

  
};

handleBackButtonClick() {
    this.props.navigation.navigate('home');
    return true;
}
clearAsyncStorage = async() => {
 db.transaction(tx => {
    tx.executeSql(
      'delete from tbl_settings;'
    );
  });
    AsyncStorage.clear();
    this.props.navigation.navigate('Login')
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
    _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
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
  this.props.navigation.navigate('point')
}
goBack=()=>{
 
    this.props.navigation.navigate('home')
 
  }
  getPointUser() {
  
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
            isLoading: false,
             dataUser: responseJson,
          }, function() {
            // In this block you can do something with new state.
             this.setState({frmtPoint:this.state.dataUser[0].rpoint});
          this.setState({imagUser:this.state.dataUser[0].image});
          this.formatPoint();
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
        viewNotif: true,
      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
  
  }
  HapusFoto = () =>{
 
fetch('http://expressbahari.com/php_mobile/HapusDataUser.php', {
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
      Alert.alert('Foto Berhasil Dihapus')
    

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       Alert.alert('Gagalm Koneksi Ke Server')
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
    this.setState({loading1: !this.state.loading1});
    
 this.setState({loadPoint:true,disable:false});
  
  }
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      this.getPointUser();
      this.TampilRiwayat();
       
       this.getNamaUser();
      this.setState({loading1: !this.state.loading1});
      
      }, 100);

  }
  Ubah =()=>{
  this.props.navigation.navigate('settings')
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
          
          <Title style={{marginTop:15,fontFamily:'SourceSansProBold', fontSize:20}}> Akun Saya</Title>
          
          </View>
        </Header>

         <Content style={{backgroundColor:'#F4F0E5'}}>
          <BottomSheet
           visible={this.state.BottomPopUp}
          onBackButtonPress={this._toggleBottomNavigationView}
          onBackdropPress={this._toggleBottomNavigationView}>
 
    
              <View style={styles.bottomNavigationView}>
                  <View style={{ width:'100%', }}>
                    <ListItem style={{width:'100%', height:50}}>
                    <TouchableOpacity style={{width:'100%',}} onPress={ () => this.FunctionWA()}>
                    <Text style={{color:'#000000'}}>Whatsapp</Text>
                    </TouchableOpacity>
                    </ListItem>
                  </View>
                  <View style={{ width:'100%'}}>
                    <ListItem style={{width:'100%', height:50}}>
                    <TouchableOpacity style={{width:'100%',}} onPress={ () => this.call()}>
                    <Text style={{color:'#000000'}}>Telepon</Text>
                    </TouchableOpacity>
                    </ListItem>
                  </View>
              </View>
              <Button full style={{width:'99%',justifyContent:'center',borderRadius:10}} onPress={ () => this._toggleBottomNavigationView()}>
                    <Text style={{color:'#000000'}}>Cancel</Text>
                    </Button>
        </BottomSheet>

         <BottomSheet
           visible={this.state.BottomPopUp2}
          onBackButtonPress={this._toggleBottomNavigationView2}
          onBackdropPress={this._toggleBottomNavigationView2}>
 
    
              <View style={styles.bottomNavigationView}>
                  <View style={{ width:'100%', }}>
                    <ListItem style={{width:'100%', height:50}}>
                    <TouchableOpacity style={{width:'100%',}} onPress={ () => this.FunctionWA()}>
                    <Text style={{color:'#000000'}}>Ganti Foto</Text>
                    </TouchableOpacity>
                    </ListItem>
                  </View>
                  <View style={{ width:'100%'}}>
                    <ListItem style={{width:'100%', height:50}}>
                    <TouchableOpacity style={{width:'100%',}} onPress={ () => this.HapusFoto()}>
                    <Text style={{color:'#000000'}}>Hapus Foto</Text>
                    </TouchableOpacity>
                    </ListItem>
                  </View>
                  <View style={{ width:'100%'}}>
                    <ListItem style={{width:'100%', height:50}}>
                    <TouchableOpacity style={{width:'100%',}} onPress={ () => this._toggleBottomNavigationView2()}>
                    <Text style={{color:'#000000'}}>Batal</Text>
                    </TouchableOpacity>
                    </ListItem>
                  </View>
              </View>
             
        </BottomSheet>
          <ImageBackground source={require('../images/bg_akun.jpg')} imageStyle={{ borderBottomLeftRadius:20, borderBottomRightRadius:20,}} style={{height:150, width:'100%', alignItems:'center', }}>
             <TouchableOpacity onPress={this._pickImage} onLongPress={this._onLongPressButton}>
            <Thumbnail large source={{uri: this.state.imagUser }} />
            </TouchableOpacity>

              {
                    this.state.loadPoint?<View>
              <Text style={{color:'#ffffff', fontFamily:'SourceSansProBold', fontSize:18}}>{this.state.namauser.toUpperCase()}</Text>
              </View>:
                  <View>
                  <Image source={require('../images/loading2.gif')} style={{marginTop:-10, width:60, height:80}}/>
                  </View>
                }
              <Text style={{color:'#ffffff', fontSize:14, fontFamily:'Roboto'}}>{this.state.AsyncEmail}</Text>
            </ImageBackground>
            <View style={{width:'100%', alignItems:'center', position:'relative',marginTop:-30}}>
              <Card style={{width:'95%', borderRadius:10}}>
              <TouchableOpacity 
              disabled={this.state.disable}
              onPress={this.point}>
                  <CardItem style={{height:45,backgroundColor:'transparent'}}>
                  <Image source={require('../images/icon_point.png')} style={{width:23, height:18}}/>
                  {
                    this.state.loadPoint?<View>
                      <Text style={{fontSize: 17,fontFamily:'SourceSansProBold'}}>   {this.state.frmtPoint} Poin                   </Text>
                  </View>:
                  <View>
                  <Image source={require('../images/loading2.gif')} style={{marginLeft:20, width:60, height:80}}/>
                  </View>
                }
                     
                      <Right>
                       {
                    this.state.loadPoint?<View>
                          <Icon active name="ios-arrow-forward" />
                           </View>:null
                        }
                      </Right>
                     
                  </CardItem>
                </TouchableOpacity>
               </Card>
               
               <Card style={{width:'95%', borderRadius:10}}>
                  
                  <TouchableOpacity onPress={this._toggleBottomNavigationView} onLongPress={this._onLongPressButton}>
                  <CardItem style={{height:45,backgroundColor:'transparent'}}>
                      <Image source={require('../images/icon_bantuan.png')} style={{width:20, height:20}}/>
                      <Text style={{fontSize:15, fontFamily:'Roboto'}}>    Pusat Bantuan               </Text>
                      <Right>
                          <Icon active name="ios-arrow-forward" />
                      </Right>
                  </CardItem>
                  </TouchableOpacity >
                  <View style={{backgroundColor:'#F4F0E5', width:'100%', height:2}}/>
                  
                  <TouchableOpacity onPress={this.Ubah}>
                  <CardItem style={{height:45,backgroundColor:'transparent'}}>
                      <Image source={require('../images/icon_setting.png')} style={{width:20, height:20}}/>
                      <Text style={{fontSize: 15, fontFamily:'Roboto'}}>    Pengaturan                       </Text>
                      <Right>
                          <Icon active name="ios-arrow-forward" />
                      </Right>
                  </CardItem>
                  </TouchableOpacity >

                  <View style={{backgroundColor:'#F4F0E5', width:'100%', height:2}}/>
                  <TouchableOpacity onPress={this.TampilAlert}>
                  <CardItem style={{height:45,backgroundColor:'transparent'}}>
                      <Image source={require('../images/icon_logout.png')} style={{width:20, height:20}}/>
                      <Text style={{fontSize:15, fontFamily:'Roboto'}}>    Keluar                               </Text>
                      <Right>
                          <Icon  active name="ios-arrow-forward" />
                      </Right>
                  </CardItem>
                  </TouchableOpacity >
               </Card>
              
              </View>
          </Content>
          {
          this.state.hideFooter?<Footer>
             <FooterTab style={{backgroundColor:'#3F81B5'}}>

                <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
                <Image source={require('../images/icon_home.png')} style={{width:19, height:18}}/>
                <Text style={{fontFamily:'SourceSansProBold'}}>Awal</Text>
                </Button>

                <Button active={this.state.tab2} badge vertical onPress={() => this.toggleTab2()}>
                {this.state.viewNotif?<Badge ><Text>{this.state.Notif.length}</Text></Badge>:null}
                <Image source={require('../images/icon_pesanan.png')} style={{width:21, height:18}}/>
                <Text style={{fontFamily:'SourceSansProBold'}}>Pesanan</Text>
                </Button>

                <Button style={{backgroundColor: '#31648c'}} active={this.state.tab4} onPress={() => this.toggleTab4()}>
                <Image source={require('../images/icon_akun.png')} style={{width:19, height:19}}/>
                <Text style={{fontFamily:'SourceSansProBold'}}>Akun</Text>
                </Button>
                

            </FooterTab>
        </Footer>:null
        }
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

  wheelPicker: {
    width:200,
    height: 150
  },
  bottomNavigationView: {
 
    backgroundColor: '#ffffff',
    width: '99%',
    height: 150,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center'
 
  },

  view:{
    flex: 1, 
        flexDirection: 'row',
  },
})
