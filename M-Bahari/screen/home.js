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
    FooterTab, 
    Thumbnail,
    Badge
} from 'native-base';
import {
  StyleSheet,
  View,
  AsyncStorage,
  ListView,
  Alert,
  BackHandler,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  
} from "react-native";
import { Avatar } from 'react-native-elements';
import { PricingCard } from 'react-native-elements'
import call from 'react-native-phone-call';
import Spinner from 'react-native-loading-spinner-overlay';
import { Permissions, Notifications } from 'expo';
import moment from 'moment';
import {SQLite } from 'expo';

const db = SQLite.openDatabase('db.db');
const PUSH_ENDPOINT = 'http://expressbahari.com/php_mobile/update_token.php';
export default class home extends Component {
  static navigationOptions = {
    header:null
  }
  
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      hideEtiket:false,
      iduser:'',
      id_Etiket:0,
      jmlpnp:0,
      ETiket:[{}],
      promo:[{}],
      kupon:[{}],
      Notif:[{}],
      viewNotif: false,
      dataUser:[{}],
      idpromo:0,
      pointuser:0,
      namauser:'',
      kodepromo:'',
      deskripsi:'',
      namapromo:'',
      berlaku:0,
      image:'',
      idkupon:0,
      deskripsi:'',
      namakupon:'',
      point:0,
      rpoint:0,
      imageKupon:'',
      imagUser:'x',
      loading1:false,
      loading2:false,
      loading3:false,
      komang:'',
      formatWaktu:'',
      frmtPoint:0,
       refreshing: false,
       loadPoint:false,
       Tutorial:[],
       telepon:0,
       emailuser:'',
       status_tutorial:1,
    };

      AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
  
                    AsyncEmail:resultParsed.AsyncEmail,
                    AsyncNama:resultParsed.AsyncNama,
                    AsyncKodeUser:resultParsed.AsyncKodeUser,
                    
                    
                });
            }
        });
    }
    call = () => {
    //handler to make a call
    const args = {
      number: '0811789200',
      prompt: false,
    };
 
    call(args).catch(console.error);
  };
  
  getPointUser() {
  this.setState({dataUser:[]});
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
            
            dataUser: responseJson,
            //frmtPoint:responseJson,
          }, function() {
          this.setState({frmtPoint:this.state.dataUser[0].rpoint});
          this.setState({imagUser:this.state.dataUser[0].image});
          this.setState({emailuser:this.state.dataUser[0].email});
          this.setState({telepon:this.state.dataUser[0].telp});
          });
      this.getNamaUser();
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
        viewNotif:true,
      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
  
  }
tampilTiket = () =>{
 
fetch('http://expressbahari.com/php_mobile/tampilETiket.php', {
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
     
        ETiket:responseJson,
        
      }, function() {
       
      });

        setTimeout(()=>{
      this.getJumlahPenumpang();
      }, 100);
        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
  
  }
getJumlahPenumpang = () =>{
 
fetch('http://expressbahari.com/php_mobile/get_jumlah_penumpang.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    no_pesanan: this.state.ETiket[0].id,
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
      this.setState({
     
        jmlpnp:responseJson,
        hideEtiket:false
      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
      this.setState({hideEtiket:false});
      });
  
  }
getNamaUser() {
  //this.formatPoint();
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
            
            namauser: responseJson,
            loadPoint:true,
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
        
        });
      
}

  registerForPushNotifications = async () =>{

    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = status;

    if (status!== 'granted'){
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== 'granted'){
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: this.state.AsyncEmail,
      token: token,
    }),
  });
  }

componentDidMount() {
 const { navigation } = this.props;
      this.props.navigation.navigate('home');
      this.setState({kupon:[{}]});
      this.setState({tab1:true});
      this.loadings2();
      this.registerForPushNotifications();
     this.focusListener = navigation.addListener('didFocus', () => {
        this.setState({loadPoint:false});
         this.getPointUser();
    });
      
     }
       _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
  saveData = () =>{
        
    
    this.props.navigation.navigate('PesanTiket')
    }


  toggleTab1() {

    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
     this.props.navigation.navigate('Pesan_Tiket');
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      jmlhNotif:this.state.Notif.length,
    });
    this.props.navigation.navigate('Pesanan',{jmlhNotif:this.state.jmlhNotif});
    this.setState({
      tab1:true,
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
    this.setState({
      tab1:true,
      tab4:false,
    });
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
convertTextToUpperCase = () => {
    var text = this.state.namauser;
    var uppercasetext = text.toUpperCase();//To convert Upper Case
    this.setState({ namauser: uppercasetext });
  };
 async componentWillMount() {
    await Expo.Font.loadAsync({
      Gadugi: require("native-base/Fonts/SourceSansPro-Regular.otf"),
      SourceSansProBold: require("native-base/Fonts/SourceSansPro-Bold.otf"),
      norwester: require("native-base/Fonts/norwester.otf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
    StatusBar.setHidden(false);
     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
     db.transaction(tx => {
      tx.executeSql('select * from tbl_settings;',[],(_, { rows: { _array } }) => this.setState({ komang: _array[0].s_setting, Tutorial:_array, status_tutorial: _array[0].s_setting })
      );
      //tx.executeSql('select * from login_session;',[],(_, { rows: { _array } }) => this.setState({ komang: _array.id_user })
     // );
    });

    setTimeout(()=>{
      if (this.state.status_tutorial==0){
       this.props.navigation.navigate('SlideTutorial');
      }
    }, 5000);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    this.focusListener.remove();
}

handleBackButtonClick() {
    BackHandler.exitApp();
    return true;
} 
  tampilPromo() {
  
  return fetch('http://expressbahari.com/php_mobile/tampil_promo.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
 
})  .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            
            promo: responseJson,
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
      

}
  tampilKupon() {
  
  return fetch('http://expressbahari.com/php_mobile/tampil_kupon.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
 
})  .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            
            kupon: responseJson,
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
      

}
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      this.props.navigation.navigate('Detail_Promo',{idpromo:this.state.idpromo,kodepromo:this.state.kodepromo,deskripsi:this.state.deskripsi,namapromo:this.state.namapromo,berlaku:this.state.berlaku,image:this.state.image,idkupon:this.state.idkupon,deskripsi:this.state.deskripsi,namakupon:this.state.namakupon,point:this.state.point,imageKupon:this.state.imageKupon});
      this.setState({loading1: !this.state.loading1});
      }, 100);

  }
  loadingsKupon=()=>{

    this.setState({loading3: !this.state.loading3});
    setTimeout(()=>{

      this.props.navigation.navigate('Detail_kupon',{idkupon:this.state.idkupon,deskripsi:this.state.deskripsi,namakupon:this.state.namakupon,point:this.state.point,rpoint:this.state.rpoint,imageKupon:this.state.imageKupon});
      this.setState({loading3: !this.state.loading3});
     
      }, 100);

  }
  loadings_Etiket=()=>{

    this.setState({loading3: !this.state.loading3});
    setTimeout(()=>{
      this.props.navigation.navigate('detail_eTiket',{id_Etiket:this.state.id_Etiket});
      this.setState({loading3: !this.state.loading3});
      
      }, 100);

  }

  loadings2=()=>{

    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
      this.TampilRiwayat();
      this.tampilTiket();
      this.tampilPromo();
      this.tampilKupon();
      this.getPointUser();
      this.getNamaUser();
      
      this.convertTextToUpperCase();
      this.setState({loading2: !this.state.loading2});
      }, 800);
      
  }
  loadings3=()=>{

    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
     
      
      this.setState({loading2: !this.state.loading2});
       
      }, 100);
      
  }
  getETiket=(id)=>
    {
        this.setState({id_Etiket:id})
        this.loadings_Etiket();
    }
getPromo=(id_promo,kode_promo,deskripsi,nama,berlaku,image)=>
    {
        this.setState({idpromo:id_promo})
        this.setState({kodepromo:kode_promo})
        this.setState({deskripsi:deskripsi})
        this.setState({namapromo:nama})
        this.setState({berlaku:berlaku})
        this.setState({image:image})
        this.loadings();
    }
    getKupon=(id_kupon,nama,deskripsi,point,rpoint,image)=>
    {
        this.setState({idkupon:id_kupon})
        this.setState({namakupon:nama})
        this.setState({deskripsi:deskripsi})
        this.setState({point:point})
        this.setState({rpoint:rpoint})
        this.setState({imageKupon:image})
        this.loadingsKupon();
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
    
  }
 semuaPromo=()=>{
  this.props.navigation.navigate('semua_promo');
 }
 DetailETIket=()=>{
  this.props.navigation.navigate('detail_eTiket');
 }
 semuaKupon=()=>{
  this.props.navigation.navigate('semua_kuponcabang');
 }    
 point =()=>{
  this.props.navigation.navigate('point');
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
          <Title style={{marginTop:20, fontFamily:'norwester'}}>EXPRESS BAHARI</Title>
          <Right>
            <Button transparent onPress={() =>
                  this.props.navigation.navigate('inbox')}>
            <Image source={require('../images/icon_inbox.png')} style={{width:23, height:15}}/>
            </Button>
          </Right>
          </View>
        </Header>
        
        <Content>
         <ScrollView>
            <View style={{height:80,backgroundColor:'#ffffff', width:'100%', alignItems:'center', flex: 1,flexDirection: 'row',}}>
                <View style={{width:'15%', marginLeft:15,marginTop:4 }}>
                   <Thumbnail source={{uri: this.state.imagUser }} />

                </View>
                <View style={{width:'27%',marginTop:4,marginLeft:10}}>
                    
                    <Text numberOfLines={1} style={{fontSize:15,fontFamily:'SourceSansProBold'}}>Hi, {this.state.namauser.toUpperCase()}</Text>
                    <TouchableOpacity onPress={this.point}>
                    
                    <View style={{flexDirection: 'row', height:25, width:'95%', backgroundColor:'#E5DFD0', borderRadius:10,marginTop:3}}>
                        
                        <Image source={require('../images/icon_point.png')} style={{width:23, height:18,marginLeft:5,marginTop:3}}/>
                        {
                    this.state.loadPoint?
                      <View>
                        <Right style={{justifyContent:'center'}}>
                          <Text style={{fontSize:14, fontWeight: 'bold', marginRight:2, fontFamily:'SourceSansProBold'}}>  {this.state.frmtPoint}</Text>
                        </Right>
                        </View>:
                        <View>
                        <Right>
                          <Image source={require('../images/loading2.gif')} style={{ width:30, height:30}}/>
                        </Right>
                        </View>
                        }
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{width:'48%',marginTop:3}}>

                    <Card style={{alignItems:'center',borderRadius:10, backgroundColor:'#3F81B5',}}>
                <View style={{flexDirection: 'row', marginTop:10, marginBottom:10}}>
                    <TouchableOpacity onPress={() =>this.saveData()}>
                      <View style={{alignItems:'center'}}>
                          <Image source={require('../images/pesan_tiket.png')} style={{width:25, height:25}}/>
                          
                          <Text style={{fontSize:10, color:'#ffffff', marginTop:4, fontFamily:'SourceSansProBold'}}>Pesan Tiket</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('TampilJadwal')}>
                      <View style={{alignItems:'center', marginLeft:10,}}>
                          <Image source={require('../images/jadwal.png')} style={{width:22, height:23}}/>
                          <Text style={{fontSize:10, color:'#ffffff', marginTop:6,fontFamily:'SourceSansProBold'}}>Jadwal</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.call()}>
                      <View style={{alignItems:'center', marginLeft:10}}>
                          <Image source={require('../images/call_center.png')} style={{width:25, height:25}}/>
                          <Text style={{fontSize:10, color:'#ffffff', marginTop:4,fontFamily:'SourceSansProBold'}}>Call Center</Text>
                      </View>
                    </TouchableOpacity>
                    
                </View>
                     
            </Card>
                </View>
            </View>

            <View style={{height:10,backgroundColor:'#E5DFD0', width:'100%',}}>
            
            </View>
            {
              this.state.hideEtiket?
            <Text style={{fontSize: 22, marginTop:10, fontFamily:'SourceSansProBold'}}>   E-ticket Saya</Text>:null}
             {
          
          this.state.ETiket.map(( ETiket, key ) =>
          (
            <View key = { key } style = { styles.ETiket }>
            {
              this.state.hideEtiket?
              
              <View style={{borderRadius:10, marginTop:7, backgroundColor:'#3F81B5', height:100,margin:10}}>
              <View style={{margin:10, width:'100%'}}>
                <Text style={{fontSize: 16, fontFamily:'SourceSansProBold', color:'#ffffff'}}>{ETiket.asal} <Icon name="arrow-round-forward" style={{fontSize:14,color:'#ffffff'}} /> {ETiket.tujuan}</Text>
                <Text style={{fontSize: 12, color:'#ffffff', fontFamily:'Gadugi'}}>{this.state.jmlpnp}</Text>
                <Text style={{fontSize: 12, color:'#ffffff', fontFamily:'Gadugi'}}>{ETiket.kelas} - {ETiket.jenis_tiket}</Text>
                
                <Text style={{fontSize: 12, color:'#ffffff', marginTop:5, fontFamily:'SourceSansProBold'}}>{moment(ETiket.tanggal_pergi).format('DD MMM YYYY')}, {ETiket.berangkat} - {ETiket.tiba}</Text>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <Right style={{marginRight:30, position:'relative', marginTop:-23}}>
                    <TouchableOpacity onPress={this.getETiket.bind(this, ETiket.id)}>
                    <Text style={{fontSize: 12, color:'#E5DFD0', marginTop:5, fontFamily:'SourceSansProBold'}}>LEBIH DETAIL</Text>
                    </TouchableOpacity>
                  </Right>
                </View>
              </View>
            </View>:null
            }      
            
            </View>
          ))
        }
            
                       
            <View style={{ flexDirection: 'row', width: '100%'}}>
              <Text style={{fontSize: 22, marginTop:10, fontFamily:'SourceSansProBold'}}>   Promo Saat Ini</Text>
              <Right style={{marginRight:10}}>
              <TouchableOpacity onPress={this.semuaPromo}>
                <Text style={{fontSize: 14, marginTop:10, color:'#3F81B5',fontFamily:'SourceSansProBold'}}>Semua  <Icon active name="ios-arrow-forward" style={{fontSize: 14,color:'#3F81B5'}} /></Text>
              </TouchableOpacity>
              </Right>
            </View>
            
            <View style={{ flexDirection: 'row', width: '100%' }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                  {
          
          this.state.promo.map(( promo, key ) =>
          (
            <View key = { key } style = { styles.promo }>
                <TouchableOpacity onPress={this.getPromo.bind(this, promo.id_promo,promo.kode_promo,promo.deskripsi,promo.nama,promo.berlaku,promo.image)}>
                  <Card style={{width:300, borderRadius:10, marginLeft:10}}>
                    <Thumbnail square source={{uri: promo.image }} style={{width:'100%', height:110, borderRadius:10}}/>
                  </Card>
                  <Text numberOfLines={1} style={{fontSize:18, marginLeft:10,width:300, fontFamily:'SourceSansProBold'}}>{promo.nama}</Text>
                  <Text numberOfLines={2} style={{fontSize:12, marginLeft:11,width:300, fontFamily:'Gadugi'}}>{promo.deskripsi}</Text>
                </TouchableOpacity>  
            
            </View>
          ))
        }
              </ScrollView>
            </View>

            <View style={{ flexDirection: 'row', width: '100%', marginTop:25 }}>
              <Text style={{fontSize: 22, fontFamily:'SourceSansProBold', marginTop:10}}>   Tukar Point Anda</Text>
              <Right style={{marginRight:10}}>
                <TouchableOpacity onPress={this.semuaKupon}>
                <Text style={{fontSize: 14, marginTop:10, color:'#3F81B5',fontFamily:'SourceSansProBold'}}>Semua  <Icon active name="ios-arrow-forward" style={{fontSize: 14,color:'#3F81B5'}} /></Text>
              </TouchableOpacity>
              </Right>
            </View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                  {
          
          this.state.kupon.map(( kupon, key ) =>
          (
            <View key = { key } style = { styles.kupon }>
                <TouchableOpacity onPress={this.getKupon.bind(this, kupon.id_kupon,kupon.nama,kupon.deskripsi,kupon.point,kupon.rpoint,kupon.image)}>
                  <Card style={{width:150, borderRadius:5, marginLeft:10}}>
                    <Thumbnail square source={{uri: kupon.thumbnail }} style={{width:'100%', height:110, borderTopLeftRadius:5, borderTopRightRadius:5}}/>
                  <View style={{alignItems:'center'}}>
                  <CardItem style={{height:20}}>
                      <Text style={{fontFamily:'SourceSansProBold', fontSize:14}}>{kupon.nama}</Text>
                    </CardItem>
                    </View>
                    <CardItem style={{height:10, backgroundColor:'transparent'}}>
                    <Image source={require('../images/icon_point.png')} style={{width:18, height:14}}/>
                      <Text style={{marginLeft:3, fontSize:16, color:'#ff6600',fontFamily:'SourceSansProBold',}}>{kupon.rpoint} Poin</Text>
                    </CardItem>
                    
                  </Card>
                </TouchableOpacity>  
            
            </View>
          ))
        }
              </ScrollView>
              
            </View>
          </ScrollView>
        </Content>

        <Footer style={{backgroundColor:'transparent'}}>
            <FooterTab  style={{backgroundColor:'#3F81B5'}}>

                <Button style={{backgroundColor: '#31648c'}} active={this.state.tab1} onPress={() => this.toggleTab1()}>
                <Image source={require('../images/icon_home.png')} style={{width:19, height:18}}/>
                <Text style={{fontFamily:'SourceSansProBold'}}>Awal</Text>
                </Button>

                <Button active={this.state.tab2} badge vertical onPress={() => this.toggleTab2()}>
                {this.state.viewNotif?<Badge ><Text>{this.state.Notif.length}</Text></Badge>:null}
                <Image source={require('../images/icon_pesanan.png')} style={{width:21, height:18}}/>
                <Text style={{fontFamily:'SourceSansProBold'}}>Pesanan</Text>
                </Button>

              
                <Button active={this.state.tab3} onPress={() => this.toggleTab4()}>
                <Image source={require('../images/icon_akun.png')} style={{width:19, height:19}}/>
                <Text style={{fontFamily:'SourceSansProBold'}}>Akun</Text>
                </Button>
                

            </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:2,
     //justifyContent:'center',
     flexGrow:2,
    
  },
  view:{
    flex: 1, 
        flexDirection: 'row',
  },
  tabBarActiveTextColor:{
                           backgroundColor:'#ffffff',
                         },
})