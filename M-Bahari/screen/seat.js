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
} from 'native-base';
import {
  StyleSheet,
  View,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
  BackHandler
} from "react-native";
import Grid from 'react-native-grid-component';
import Spinner from 'react-native-loading-spinner-overlay';
export default class Runcian extends Component {
  static navigationOptions = {
		header:null
  }
  jml
  constructor(props) {
    super(props);
    this.state = { 
      loading: true, 
      kolom:this.props.navigation.state.params.kolom,
      kolomPP:this.props.navigation.state.params.kolomPP,
      detailPesanan:[{}],
      seat:[],
      tiket:[],
      cek:[],
      jmlPilih:0,
      jadwalid:'',
      loading1:false,
      loading2:false,
      no_pesanan: this.props.navigation.state.params.no_pesanan,
      No_Reservasi: this.props.navigation.state.params.No_Reservasi,
      No_Reservasi2: this.props.navigation.state.params.No_Reservasi2,
      jenis_tiket: this.props.navigation.state.params.jenis_tiket,
      kelas: this.props.navigation.state.params.kelas,
      jadwalid1: this.props.navigation.state.params.jadwalid1,
      jadwalid2: this.props.navigation.state.params.jadwalid2,
      kodekapal: this.props.navigation.state.params.kodekapal,
      kolom_exe: this.props.navigation.state.params.kolom_exe,
      kolom_vip: this.props.navigation.state.params.kolom_vip,
      kolom_exe_pp: this.props.navigation.state.params.kolom_exe_pp,
      kolom_vip_pp: this.props.navigation.state.params.kolom_vip_pp,
      jmlPenumpang:[],
      jmlPenumpangtampil:[],
      show:true,
    };
  }
  loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      this.Tampilseat();
      this.CekTiket();
        
      
      }, 100);
   
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
  }
  

Tampilseat = () =>{

fetch('http://expressbahari.com/php_mobile/get_kursi2.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  
    jadwal_id:this.state.jadwalid1,
    kelas:this.state.kelas,
    
  })

 
}).then((response) => response.json())
      .then((responseJson) => {

      this.setState({
        
        seat:responseJson,

      }, function() {
        this.setState({loading1: !this.state.loading1,show: !this.state.show});
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
  
  }

CekTiket = () =>{
  this.setState({jmlPenumpangtampil:[]})
  fetch('http://expressbahari.com/php_mobile/get_tiket.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      no_reservasi:this.state.No_Reservasi,
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {

        this.setState({
          
          jmlPenumpang:responseJson,
          jmlPenumpangtampil:responseJson,

        }, function() {
        
        });

          // If server response message same as Data Matched
        
          
        }).catch((error) => {
        
        });
    
  }


  componentDidMount(){
       this.loadings(); 
  }


  _renderJmlPenumpang = (item, i) => (
    <View style={{flex:1,margin: 2, alignItems: 'center', alignSelf: 'center',borderWidth: 1, borderColor: '#3498db',}} key={i} >
        <Text numberOfLines={1} style={{fontSize:10,color:'#000',}}> {item.namaPenumpang}</Text>
        <Text style={{fontSize:10,color:'#000'}}>Kursi : {item.kursi}</Text>
    </View>
  );



  UpdateSeat=()=>{
  
    for (let i = 0; i < this.state.jmlPenumpang.length; i++) {
      //update seat detail pesanan berdasarkan no pesanan dan indeks
      //seat ditampung di array ,dgn indek(i)
    fetch('http://expressbahari.com/php_mobile/Update_Seat_Detail.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  
      no_pesanan: this.state.no_pesanan,
      indeks:i+1,
      seat:this.state.jmlPenumpang[i].kursi,

    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
        this.UpdateSeat2() 
          
        }).catch((error) => {
        
        });

    }
    this.UpdateSeat2()
  }
  UpdateSeat2=()=>{
  
    for (let i = 0; i < this.state.jmlPenumpang.length; i++) {
      //update seat detail pesanan berdasarkan no pesanan dan indeks
      //seat ditampung di array ,dgn indek(i)
    fetch('http://express-bahari.com/php_mobile/Update_Seat_Tiket.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  
      kode_reservasi: this.state.No_Reservasi,
      idx:i+1,
      seat:this.state.jmlPenumpang[i].kursi,

    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
 
  // Showing response message coming from server after inserting records.
         
          
        }).catch((error) => {
        
        });

    }
    this.cekSeatPP()
  }

  AmbilKursi=(idx,status,nama_kursi)=>{
    if(this.state.jmlPilih!=this.state.jmlPenumpang.length){
      if(status=='0'){
        const newArray = [...this.state.seat];
        newArray[idx-1].status = '1';
        newArray[idx-1].color = '#31648C';
        this.setState({ seat: newArray });
        this.setState({jmlPilih:parseInt(this.state.jmlPilih)+1});
        this.blokKursi(nama_kursi);
      }
    }
    
    if(status=='1'){
      const newArray = [...this.state.seat];
      newArray[idx-1].status = '0';
      newArray[idx-1].color = '#3498db';
      this.setState({ seat: newArray });
      this.setState({jmlPilih:parseInt(this.state.jmlPilih)-1});
      this.unblokKursi(nama_kursi);
    }
    
  }

  blokKursi=(kursi)=>{
    for (let i = 0; i < this.state.jmlPenumpang.length; i++) { 
      if(this.state.jmlPenumpang[i].kursi==''){
        this.state.cek.push({
          idx:i,
        })
      } 
    }
    const newArray = [...this.state.jmlPenumpang];
    newArray[this.state.cek[0].idx].kursi = kursi;
    this.setState({ jmlPenumpang: newArray });
      
      setTimeout(()=>{
        
        this.setState({ jmlPenumpangtampil: [] });
        this.setState({ jmlPenumpangtampil: this.state.jmlPenumpang });
        this.setState({ cek: [] });
      },100)
  }

  unblokKursi=(kursi)=>{
    for (let i = 0; i < this.state.jmlPenumpang.length; i++) { 
      if(this.state.jmlPenumpang[i].kursi==kursi){
        const newArray = [...this.state.jmlPenumpang];
        newArray[i].kursi = '';
        this.setState({ jmlPenumpang: newArray });
      } 
    }
      setTimeout(()=>{
        this.setState({ jmlPenumpangtampil: [] });
        this.setState({ jmlPenumpangtampil: this.state.jmlPenumpang });
        
      },100)
  }

  cekSeatPP=()=>{

    if(this.state.jenis_tiket=='PP'){
      
      this.props.navigation.navigate('seatPP',{no_pesanan:this.state.no_pesanan,No_Reservasi2:this.state.No_Reservasi2,kelas:this.state.kelas,jadwalid2:this.state.jadwalid2,kodekapal:this.state.kodekapal,kolomPP:this.state.kolomPP})
    }
    if(this.state.jenis_tiket=='Sekali Jalan'){
      
      this.props.navigation.navigate('detail_Pesanan')
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
         <Left>
            <Button transparent onPress={() =>
                  this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:13,fontFamily:'SourceSansProBold', fontSize:20,marginLeft:-110}}>Pilih Kursi</Title>
          </View>
        </Header>
        {this.state.show?<View style={{backgroundColor:'#ffffff'}}></View>:
        <Header style={{backgroundColor:'#F4F0E5', height:40,}}>
        
          <View>
            <CardItem style={{backgroundColor:'transparent'}}>
              <View style={{height:13, width:13, backgroundColor:'#3498db', borderRadius:2}}/>
              <Text style={{fontSize:12, fontFamily:'SourceSansProRegular'}}>  Kosong</Text>
              <View style={{height:13, width:13, backgroundColor:'#FF2D00', borderRadius:2, marginLeft:25}}/>
              <Text style={{fontSize:12, fontFamily:'SourceSansProRegular'}}>  Terisi</Text>
              <View style={{height:13, width:13, backgroundColor:'#31648C', borderRadius:2, marginLeft:25}}/>
              <Text style={{fontSize:12, fontFamily:'SourceSansProRegular'}}>  Dipilih</Text>
            </CardItem>
          </View>
          
        </Header>}
        <View style={{backgroundColor:'#fff', height:1}}/>
        {this.state.show?<View style={{backgroundColor:'#ffffff'}}></View>:
        <Header style={{backgroundColor:'#F4F0E5'}}>
          <Grid
              renderItem={this._renderJmlPenumpang}
              data={this.state.jmlPenumpangtampil}
              itemsPerRow={3}
          />
        </Header>}
        <Spinner visible={this.state.loading1}/>
         <Content style={{backgroundColor:'#fff', marginTop:20}}>
          <FlatList
            data={this.state.seat}
            renderItem={({ item, i }) => (
              
              <View style={[{ backgroundColor: item.color }, styles.item]} key={i}>
                <TouchableOpacity onPress={this.AmbilKursi.bind(this,item.idx,item.status,item.nama_kursi)}>
              <View>
              
                <Text  style={{fontSize:8,color:'#fff',marginTop:10,fontFamily:'SourceSansProBold'}}>{item.kursi}</Text>
              
              </View>
              </TouchableOpacity>
              </View>
              
            )}
            numColumns={this.state.kolom}
            keyExtractor={(item, index) => index}
          />
          
    
        </Content>
        {this.state.show?<View style={{backgroundColor:'#ffffff'}}></View>:
        <Footer style={{backgroundColor:'#3F81B5',}}>
            <Button transparent style={{width:'100%'}}  onPress={ () => this.UpdateSeat()}>
              <Body>
                <Text style={{color:'#ffffff', fontFamily:'SourceSansProBold'}}>Simpan</Text>
              </Body>
            </Button>
        </Footer>}
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
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  item: {
    flex: 1,
    height: 35,
    margin: 2,
    borderRadius: 3,
    alignItems: 'center',
    alignSelf: 'center',
  },
})