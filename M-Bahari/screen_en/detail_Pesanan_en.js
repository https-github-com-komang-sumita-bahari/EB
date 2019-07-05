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
} from 'native-base';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  BackHandler
} from "react-native";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { BottomSheet } from 'react-native-btr';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
export default class Runcian extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = { loading: true,
        collapsed:true,
        isModalVisible:false,
        no_pesanan: this.props.navigation.state.params.no_pesanan,
        jenis_tiket: this.props.navigation.state.params.jenis_tiket,
        collapsed2:false,
        detailPP:this.props.navigation.state.params.detailPP,
        detailPesanan:[{}],
        seat:'',
        detailPesanan2:[{id:123}],
        dewasa:0,
        anak:0,
        infant:0,
        formatWaktu:'',
        No_Reservasi:0,
        No_Reservasi2:0,
        kelas:'',
        jadwalid1:'',
        jadwalid2:'',
        kodekapal:'',
        loading1:false,
        loading2:false,
        loading3:false,
        kolom_exe:0,
        kolom_vip:0,
        kolom_exe_pp:0,
        kolom_vip_pp:0,
        kolom:0,
        kolomPP:0,
        viewContent:true,
         };

  }
  closePopUp = () =>{
    
    this.setState({ isModalVisible: !this.state.isModalVisible });
        
  }
  _toggleModal = () =>{
    
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation .navigate ('seat_en',{no_pesanan:this.state.no_pesanan,No_Reservasi:this.state.No_Reservasi,No_Reservasi2:this.state.No_Reservasi2,kelas:this.state.kelas,kodekapal:this.state.kodekapal,jadwalid1:this.state.jadwalid1,jadwalid2:this.state.jadwalid2,jenis_tiket:this.state.jenis_tiket,kolom_exe:this.state.kolom_exe,kolom_vip:this.state.kolom_vip,kolom_exe_pp:this.state.kolom_exe_pp,kolom_vip_pp:this.state.kolom_vip_pp,kolom:this.state.kolom,kolomPP:this.state.kolomPP})
    
  }
  _toggleModal2 = () =>{
    
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation .navigate ('seatPP_en',{no_pesanan:this.state.no_pesanan,No_Reservasi:this.state.No_Reservasi,No_Reservasi2:this.state.No_Reservasi2,kelas:this.state.kelas,kodekapal:this.state.kodekapal,jadwalid1:this.state.jadwalid1,jadwalid2:this.state.jadwalid2,jenis_tiket:this.state.jenis_tiket,kolom_exe:this.state.kolom_exe,kolom_vip:this.state.kolom_vip,kolom_exe_pp:this.state.kolom_exe_pp,kolom_vip_pp:this.state.kolom_vip_pp,kolom:this.state.kolom,kolomPP:this.state.kolomPP})
    
  }
  TampilDetail = () =>{

fetch('http://expressbahari.com/php_mobile/RiwayatDetail.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    no_pesanan: this.state.no_pesanan,
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

      this.setState({
        
        detailPesanan:responseJson,

      }, function() {
       
      });

        // If server response message same as Data Matched
       
        this.loadings2();
      }).catch((error) => {
       
      });
  
  }
CekSeat = () =>{

fetch('http://expressbahari.com/php_mobile/CekSeat.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    no_pesanan: this.state.no_pesanan,
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

      this.setState({
        
        seat:responseJson,

      }, function() {
       
      });
       if (this.state.kelas=='VIP Dewasa'||this.statekelas=='VIP Anak')
       {
        this.setState({kelas:'VIP'});
        if(this.state.kelas=='VIP'){
          this.setState({kolom:this.state.detailPesanan[0].kolom_vip})
          this.setState({kolomPP:this.state.detailPesanan[0].kolom_vip_pp})
        }
       }
      if (this.state.kelas=='Eksekutif Dewasa'||this.state.kelas=='Eksekutif Anak')
      {
        this.setState({kelas:'Eksekutif'});
        if(this.state.kelas=='Eksekutif'){
          this.setState({kolom:this.state.detailPesanan[0].kolom_exe})
          this.setState({kolomPP:this.state.detailPesanan[0].kolom_exe_pp})
        }
      }
        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
    this.loadings3();    
  }
  pilhSeat(){
  this._toggleModal()
  this.props.navigation.navigate('seat_en')
}
  async componentWillMount() {
    await Expo.Font.loadAsync({
      SourceSansProRegular: require("native-base/Fonts/SourceSansPro-Regular.otf"),
      SourceSansProBold: require("native-base/Fonts/SourceSansPro-Bold.otf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.navigate('Pesanan_en');
    return true;
}
  loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      
      this.TampilDetail(),
      this.setState({loading1: !this.state.loading1});
      
      }, 400);
   
  }
  loadings3=()=>{

    this.setState({loading3: !this.state.loading3});
    setTimeout(()=>{
      
      if(this.state.seat==''){
        this.setState({isModalVisible:true});
        }
        if(this.state.seat!=''){
        this.setState({isModalVisible:false});
        }
      this.setState({loading3: !this.state.loading3,viewContent: false});
      
      }, 400);
   
  }
  refund=()=>{
    this.props.navigation.navigate('refund_en');
  }
  loadings2=()=>{
          
this.setState({No_Reservasi:this.state.detailPesanan[0].kode_reservasi1});
this.setState({No_Reservasi2:this.state.detailPesanan[0].kode_reservasi2});
this.setState({kelas:this.state.detailPesanan[0].kelas});
this.setState({jadwalid1:this.state.detailPesanan[0].jadwal_id1});
this.setState({jadwalid2:this.state.detailPesanan[0].jadwal_id2});
this.setState({kodekapal:this.state.detailPesanan[0].kode_kapal});
this.setState({kolom_exe:this.state.detailPesanan[0].kolom_exe});
this.setState({kolom_vip:this.state.detailPesanan[0].kolom_vip});
this.setState({kolom_exe_pp:this.state.detailPesanan[0].kolom_exe_pp});
this.setState({kolom_vip_pp:this.state.detailPesanan[0].kolom_vip_pp});

    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
      
      this.CekSeat(),
      this.setState({loading2: !this.state.loading2});
      
      }, 400);
   
  }
  
    componentDidMount() {

      if(this.state.detailPesanan[0].rute=='Kupang - Rote'||this.state.detailPesanan[0].rute=='Rote - Kupang'){
        this.setState({formatWaktu:'WIT'});
      }
      else{
        this.setState({formatWaktu:'WIB'});
      }
      this.loadings();
     }
  prosesDetail=()=>{
  
      for ( let i = 0; i < 2; i++){

        if(this.state.detailPesanan[this.state.dewasa].kelas==''){
           this.setState({dewasa: parseInt(this.state.dewasa)+1 })
        }
      }
  }
  render() {
    const { navigate } = this.props.navigation
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
          <Title style={{marginTop:15,marginLeft:-120,fontFamily:'SourceSansProBold', fontSize:20}}>E-Ticket</Title>
          
          </View>
        </Header>
        <Spinner visible={this.state.viewContent}/>
        {
          this.state.viewContent?<Content style={{backgroundColor:'#F4F0E5'}}></Content>:
        
         <Content style={{backgroundColor:'#F4F0E5'}}>
          
          <BottomSheet
          visible={this.state.isModalVisible}
          onBackButtonPress={this.closePopUp}
          onBackdropPress={this.closePopUp}>
        
 
         
            <View style={{justifyContent:'center',width: '100%', alignItems:'center',height:'100%'}}>

              <View style={{height:300, width:250,backgroundColor:'#fff', borderRadius:10}}>
                <Right style={{ width:'100%',marginTop:0}}>
                    <Button onPress={this.closePopUp} style={{alignItems:'center', height:43, width:43, backgroundColor:'transparent', borderRadius:50, }} ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
                </Right>
                
                <View style={{alignItems:'center', }}>
                  <Image source={require('../images/seat.png')} style={{height:187, width:190,}}/>
                  <Text style={{fontSize:16,fontFamily:'SourceSansProBold'}}>Please Pick Your Seat !</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',width:'100%'}}>
                <Button block style={{backgroundColor:'#3F81B5', width:150, marginLeft:50, marginTop:10,marginBottom:25, borderRadius:10 }} onPress={() =>this ._toggleModal () }><Text  style={{justifyContent:'center',fontFamily:'SourceSansProBold'}}>PILIH KURSI</Text></Button>
                </View>
              </View>
            </View>
            

        </BottomSheet>

            
                <Body  style={{borderRadius:10, backgroundColor:'#ffffff', width:'90%', marginTop:10, marginBottom:10}}>
                    <View>
                   
                        <CardItem style={{backgroundColor:'transparent'}}>
                        
                            <View style={{width:'100%', alignItems:'center', borderRadius:10}}>
                                <CardItem style={{height:10, backgroundColor:'transparent'}}>
                                    <Text style={{fontSize:14, fontFamily:'SourceSansProRegular'}}>Booking Code : </Text>
                                    <Text style={{fontSize:22, fontFamily:'SourceSansProBold', color:'#3F81B5'}}>{this.state.detailPesanan[0].kode_booking1}</Text>
                                </CardItem>
                                <CardItem style={{height:0.5,}}>
                                    <View style={{backgroundColor:'#F4F0E5', width:'100%', height:1}}/>
                                </CardItem>
                                <CardItem style={{height:5, marginTop:-10, backgroundColor:'transparent'}}>
                                    <Text style={{fontSize:12, fontFamily:'SourceSansProRegular'}}>{this.state.detailPesanan[0].kode_reservasi1}</Text>
                                </CardItem>
                            </View>
                        </CardItem>
                        <View style={{backgroundColor:'#F4F0E5', height:1}}/>
                        <CardItem>
                            <View style={{width:'100%', alignItems:'center', marginTop:-10}}>
                                <CardItem style={{height:6}}>
                                    <Text style={{fontSize:16, fontFamily:'SourceSansProBold',}}>{this.state.detailPesanan[0].rute}</Text>
                                </CardItem>
                                
                                <CardItem style={{height:5}}>
                                    <Text style={{fontSize:14, fontFamily:'SourceSansProRegular'}}>{moment(this.state.detailPesanan[0].tanggal_pergi).format('DD MMM YYYY')}</Text>
                                </CardItem>
                            </View>
                        </CardItem>
                        <View style={{width:'100%', alignItems:'center',}}>
                            <CardItem style={{ marginTop:-12}}>
                            <Text style={{fontSize:12, color:'#D3D3D3', fontFamily:'SourceSansProRegular'}}>Vessel Name</Text>
                            <Text style={{fontSize:14, fontFamily:'SourceSansProRegular'}}>{this.state.detailPesanan[0].tipe}</Text>
                                <Right>
                                <Text style={{fontSize:12, color:'#D3D3D3', fontFamily:'SourceSansProRegular'}}>Sail Number</Text>
                                <Text style={{fontSize:14, fontFamily:'SourceSansProRegular'}}>{this.state.detailPesanan[0].kode_keberangkatan}</Text>
                                </Right>
                            </CardItem>
                        </View>
                        <View style={{width:'100%', alignItems:'center', marginTop:-10}}>
                            <CardItem style={{backgroundColor:'transparent'}}>
                                <View>
                                    <Text style={{fontSize:12, color:'#D3D3D3', fontFamily:'SourceSansProRegular'}}>Seat Class</Text>
                                    <Text style={{fontSize:14, fontFamily:'SourceSansProRegular'}}>{this.state.detailPesanan[0].kelas}</Text>
                                </View>
                                <Right>
                                    <Text style={{fontSize:12, color:'#D3D3D3', fontFamily:'SourceSansProRegular'}}>ETD - ETA</Text>
                                    <Text style={{fontSize:14, fontFamily:'SourceSansProRegular'}}>{this.state.detailPesanan[0].berangkat} - {this.state.detailPesanan[0].tiba} {this.state.formatWaktu}</Text>
                                </Right>
                            </CardItem>
                        </View>
                    </View>
                   
                </Body>
            

            
            {
              this.state.detailPP?
                <Body  style={{borderRadius:10, backgroundColor:'#ffffff', width:'90%'}}>
                    <View>
                   
                        <CardItem style={{backgroundColor:'transparent'}}>
                        
                            <View style={{width:'100%', alignItems:'center'}}>
                                <CardItem style={{height:10}}>
                                    <Text style={{fontSize:14, fontFamily:'SourceSansProRegular'}}>Kode Booking : </Text>
                                    <Text style={{fontSize:22, fontFamily:'SourceSansProBold', color:'#3F81B5'}}>{this.state.detailPesanan[0].kode_booking2}</Text>
                                </CardItem>
                                <CardItem style={{height:0.5,}}>
                                    <View style={{backgroundColor:'#F4F0E5', width:'100%', height:1}}/>
                                </CardItem>
                                <CardItem style={{height:5, marginTop:-10}}>
                                    <Text style={{fontSize:12, fontFamily:'SourceSansProRegular'}}>{this.state.detailPesanan[0].kode_reservasi2}</Text>
                                </CardItem>
                            </View>
                        </CardItem>
                        <View style={{backgroundColor:'#F4F0E5', height:1}}/>
                        <CardItem>
                            <View style={{width:'100%', alignItems:'center', marginTop:-10}}>
                                <CardItem style={{height:6}}>
                                    <Text style={{fontSize:16, fontFamily:'SourceSansProBold',}}>{this.state.detailPesanan[0].rute_pp}</Text>
                                </CardItem>
                                
                                <CardItem style={{height:5}}>
                                    <Text style={{fontSize:14,fontFamily:'SourceSansProRegular'}}>{this.state.detailPesanan[0].tanggal_pulang}</Text>
                                </CardItem>
                            </View>
                        </CardItem>
                        <View style={{width:'100%', alignItems:'center',}}>
                            <CardItem style={{ marginTop:-12}}>
                            <Text style={{fontSize:14,fontFamily:'SourceSansProRegular'}}>{this.state.detailPesanan[0].tipe_pp}</Text>
                                <Right>
                                <Text style={{fontSize:12, color:'#D3D3D3',fontFamily:'SourceSansProRegular'}}>Sail Number</Text>
                                <Text style={{fontSize:14,fontFamily:'SourceSansProRegular'}}>{this.state.detailPesanan[0].kode_keberangkatan_pp}</Text>
                                </Right>
                            </CardItem>
                        </View>
                        <View style={{width:'100%', alignItems:'center', marginTop:-10}}>
                            <CardItem style={{backgroundColor:'transparent'}}>
                                <View>
                                    <Text style={{fontSize:12, color:'#D3D3D3',fontFamily:'SourceSansProRegular'}}>Kelas</Text>
                                    <Text style={{fontSize:14,fontFamily:'SourceSansProRegular'}}>{this.state.detailPesanan[0].kelas}                  </Text>
                                </View>
                                <Right>
                                    <Text style={{fontSize:12, color:'#D3D3D3',fontFamily:'SourceSansProRegular'}}>ETD - ETA</Text>
                                    <Text style={{fontSize:14,fontFamily:'SourceSansProRegular'}}>{this.state.detailPesanan[0].berangkat_pp} - {this.state.detailPesanan[0].tiba_pp}</Text>
                                </Right>
                            </CardItem>
                        </View>
                    </View>
                   
                </Body>:null
          }
            
            <Collapse isCollapsed={this.state.collapsed} onToggle={(isCollapsed)=>this.setState({collapsed:isCollapsed})}>>
                <CollapseHeader>
                <Card style={{height:40}}>
                    <CardItem style={{height:40}}>
                        <Text style={{fontSize: 14, fontFamily:'SourceSansProBold',}}>Passanger Name</Text>
                        <Right style={{marginLeft:70}}>
                          {this.state.collapsed?<Icon active name="ios-arrow-up" />:<Icon active name="ios-arrow-down" />}
                        </Right>
                    </CardItem>
                </Card>
              </CollapseHeader>
              <CollapseBody style={{backgroundColor:'#ffffff'}}>
              {
                this.state.detailPesanan.map((detailPesanan,key )=>
                (
                  <View key = { key } style = {styles.detailPesanan}>
                  <CardItem style={{height:10}}>
                   
                   
                    <Text style={{fontSize: 14,fontFamily:'SourceSansProRegular'}}>{key+1}. {detailPesanan.nama}</Text>
                   
                 
                    
              
                </CardItem>
                  </View>
                )
                ) 
            }
              <View>
                
              </View>
              </CollapseBody>
            </Collapse>

                <Card style={{height:40}}>
                    <CardItem style={{height:40}}>
                        <Text style={{fontSize: 15, fontFamily:'SourceSansProBold',}}>Total Price  </Text>
                        <Text style={{fontSize: 15, fontFamily:'SourceSansProBold',}}>Rp. {this.state.detailPesanan[0].rtotal_bayar},-</Text>
                        
                    </CardItem>
                </Card>
    
              
        </Content>
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

  view:{
		flex: 1, 
        flexDirection: 'row',
  },
})