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
    Tab, Tabs,
    Thumbnail,
    FooterTab, 
    Badge,
} from 'native-base';
import {
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  ToastAndroid,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import Tab1 from '../tabscreen/Oneway';
import Tab2 from '../tabscreen/Oneway';
import Spinner from 'react-native-loading-spinner-overlay';
import moment from 'moment';
export default class Pesanan extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
   this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      Notif:[{}],
      Riwayat2:[],
      no_pesanan:'',
      jenis_tiket:'',
      loading1:false,
      loading2:false,
      detailPP:false,
      viewvisible: false,
      viewNotif: false,

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
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      if(this.state.jenis_tiket=='PP'){
        this.setState({detailPP:true})
      }
      else{
        this.setState({detailPP:false})
      }
      this.props.navigation.navigate('detail_Pesanan',{no_pesanan:this.state.no_pesanan,detailPP:this.state.detailPP,jenis_tiket:this.state.jenis_tiket})
      //this.props.navigation.navigate ('seat')
      this.setState({loading1: !this.state.loading1});
      
      }, 300);

  }
  loadings2=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      this.TampilRiwayat();
      this.TampilRiwayat2();
      this.setState({loading1: !this.state.loading1});
      
      }, 300);

  }
    async componentWillMount() {
    await Expo.Font.loadAsync({
      SourceSansProRegular: require("native-base/Fonts/SourceSansPro-Regular.otf"),
      SourceSansProBold: require("native-base/Fonts/SourceSansPro-Bold.otf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.navigate('home');
    return true;
}
  componentDidMount() {
      
      this.loadings2();
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
      tab2:true,
      tab1:false,
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });

    this.props.navigation.navigate('Pesanan');
    
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
      tab2:true,
      tab4:false,
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
        viewNotif:true
      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
  
  }
TampilRiwayat2 = () =>{
 
fetch('http://expressbahari.com/php_mobile/Riwayat2.php', {
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
     
        Riwayat2:responseJson,
        viewvisible:true
      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
  
  }

  getValue=(id,tanggal_pergi,kode_rute1,jenis_tiket)=>
    {
     this.setState({no_pesanan:id})
     this.setState({jenis_tiket:jenis_tiket})

     this.loadings();
     
    }
    onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  getValue2=(id,tanggal_pergi,kode_rute1,jenis_tiket)=>
    {
     this.setState({no_pesanan2:id})
     this.setState({jenis_tiket2:jenis_tiket})
     this.props.navigation.navigate('Transfer')
     
    }
    onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  pindah=()=>{
    this.props.navigation.navigate('PesananSedangDiProses')
  }
  render() {
    
    return (
     
     
      <Container>
         <Header style={{backgroundColor:'#3F81B5', height:20,}}></Header> 
        <Header style={{backgroundColor:'#3F81B5',}}>
         <View style={styles.view}>

          <Title style={{marginTop:15,fontFamily:'SourceSansProBold', fontSize:21}}> Pesanan</Title>
          
          </View>
        </Header>

         <Content style={{backgroundColor:'#F4F0E5'}}>
         
            <View style={{alignItems:'center', width:'100%', marginTop:5}}>
            

            <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10}}>
            <View style={{height:50, backgroundColor:'#F4F0E5'}}></View>
            <View style={{height:20, backgroundColor:'#fff', borderTopLeftRadius:10, borderTopRightRadius:10,position:'relative',marginTop:-20}}></View>

            <View style={{alignItems:'center',position:'relative',marginTop:-50}}>
              <View style={{backgroundColor:'#fff',borderRadius:30}}>
              <View style={{backgroundColor:'#fff', margin:10, borderRadius:30, alignItems:'center'}}>
                  <Text style={{fontSize:16, fontFamily:'SourceSansProBold', color:'#000'}}>E-Ticket Aktif</Text>
                  <Text style={{fontSize:16, marginTop:-7, marginBottom:5, fontFamily:'SourceSansProBold', color:'#000'}}>---------------------</Text>
              </View>
              </View>
            </View>
            
            <View style={{ flex: 1}}>
            {this.state.viewvisible?
            <View>
               {this.state.Riwayat2.map((Riwayat2)=>{
                return (

                    <View key={Riwayat2.id}>
                    
                    <View style={{marginBottom:10, alignItems:'center'}}>
                    <TouchableOpacity onPress={this.getValue.bind(this, Riwayat2.id,Riwayat2.tanggal_pergi,Riwayat2.kode_rute1,Riwayat2.jenis_tiket)} >
                    
                    <Card style={{width:'80%', borderRadius:10}}>
                        <CardItem style={{backgroundColor:'transparent'}}>
                        <Image source={require('../images/icon_eticket.png')} style={{width:48, height:45}}/>
                          <View>
                              <CardItem style={{height:6,backgroundColor:'transparent'}}>
                              <Text style={{fontSize: 16, fontFamily:'SourceSansProBold'}}>{Riwayat2.asal} <Icon name="arrow-round-forward" style={{fontSize:14}} /> {Riwayat2.tujuan}</Text>
                                </CardItem>
                                <CardItem style={{height:0.5, marginTop:-5, backgroundColor:'transparent'}}>
                                    <View style={{backgroundColor:'#F4F0E5', width:'100%', height:1}}/>
                                </CardItem>
                                <CardItem style={{height:5, marginTop:-5, backgroundColor:'transparent'}}>

                                    <Text style={{fontSize: 12, marginTop:5, fontFamily:'SourceSansProRegular'}}>{moment(Riwayat2.tanggal_pergi).format('DD MMM YYYY')}, {Riwayat2.berangkat} - {Riwayat2.tiba}</Text>
                                    <Right>
                                        <Text style={{fontSize:12}}>{Riwayat2.kode_rute1}</Text>
                                    </Right>
                                </CardItem>
                            </View>
                        </CardItem>
                    </Card>
                    
                     </TouchableOpacity>
                    </View>
                    </View>
                    
                  )
               })}

               </View>:
          <View style={{alignItems:'center'}}>
            <Image source={require('../images/icon_belum.png')} style={{width:250, height:205}}/>
            <Text style={{fontSize:18, fontFamily:'SourceSansProBold', marginBottom:20, marginTop:10}}>Belum Ada E-ticket Aktif</Text>
          </View>}
          </View>
          </View>
          </View>
            <View style={{backgroundColor:'#fff', width:'100%', marginTop:10}}>
            <CardItem style={{backgroundColor:'#fff',marginTop:10}}>
                <Text style={{fontSize:18, fontFamily:'SourceSansProBold'}}>Sedang Di Proses</Text>
            </CardItem>
            
            <ListItem style={{marginTop:-20}}>
                <Body>
                    <Card style={{borderRadius:10}}>
                     <TouchableOpacity active badge vertical onPress={this.pindah}>
                        <CardItem style={{backgroundColor:'transparent'}}>

                        <Image source={require('../images/icon_proses.png')} style={{width:35, height:30}}/>
                            <Text style={{fontSize: 15, fontFamily:'SourceSansProBold'}}>   Lihat Pesanan </Text>
                            {this.state.viewNotif?<Badge ><Text style={{fontSize: 15, fontFamily:'SourceSansProBold'}}>{this.state.Notif.length}</Text></Badge>:null}
                          <Right>

                              <Icon active name="ios-arrow-forward" />
                          </Right>
                          
                        </CardItem>
                     </TouchableOpacity>
                    </Card>
                </Body>
             
            </ListItem>            
            </View>

            
        </Content>
        <Footer>
             <FooterTab style={{backgroundColor:'#3F81B5'}}>

                <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
                <Image source={require('../images/icon_home.png')} style={{width:19, height:18}}/>
                <Text style={{fontFamily:'SourceSansProBold'}}>Awal</Text>
                </Button>
                
                <Button style={{backgroundColor: '#31648c', height:'100%'}} active={this.state.tab2} badge vertical onPress={() => this.toggleTab2()}>
                {this.state.viewNotif?<Badge ><Text>{this.state.Notif.length}</Text></Badge>:null}
                <Image source={require('../images/icon_pesanan.png')} style={{width:21, height:18}}/>
                <Text style={{fontFamily:'SourceSansProBold'}}>Pesanan</Text>
                </Button>

               
                <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
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

  view:{
		flex: 1, 
        flexDirection: 'row',
  },
})