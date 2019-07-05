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
export default class Runcian extends Component {
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
      Riwayat:[],
      Riwayat2:[],
      no_pesanan:'',
      jenis_tiket:'',
      loading1:false,
      loading2:false,
      totalbayar:0,
      limit:'',
      viewvisible: false,

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
      this.TampilRiwayat(),
      this.setState({loading1: !this.state.loading1});
      
      }, 1000);
  }
  loadings2=()=>{

    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
      this.props.navigation.navigate('Transfer2',{totalbayar:this.state.totalbayar,limit:this.state.limit,no_pesanan:this.state.no_pesanan})
      this.setState({loading2: !this.state.loading2});
      
      }, 100);

  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
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
    this.props.navigation.navigate('Pesanan');
    return true;
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
     
        Riwayat:responseJson,
        viewvisible:true
      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
  
  }
TampilRiwayatPesanan = () =>{
 
fetch('http://expressbahari.com/php_mobile/RiwayatPesanan.php', {
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

      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
  
  }

  getValue=(id,tanggal_pergi,kode_rute1,jenis_tiket)=>
    {
     
     this.setState({jenis_tiket:jenis_tiket})
     this.props.navigation.navigate('detail_Pesanan',{no_pesanan:this.state.no_pesanan,jenis_tiket:this.state.jenis_tiket,})
     
    }
    onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  getValue2=(id,tanggal_pergi,kode_rute1,jenis_tiket,total_bayar,limit_pembayaran)=>
    {
     this.setState({no_pesanan:id})
     this.setState({totalbayar:total_bayar})
     this.setState({limit:limit_pembayaran})
     this.setState({jenis_tiket2:jenis_tiket})
     this.loadings2()
     
    }
    onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  componentDidMount() {
      
      this.loadings();
     }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      
     
      <Container>
      <Spinner visible={this.state.loading1}/>
         <Header style={{backgroundColor:'#3F81B5', height:20,}}></Header> 
        <Header style={{backgroundColor:'#3F81B5',}}>
         <View style={styles.view}>
         <Left>
           <Button transparent onPress={() =>
                  this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
         </Left> 
          <Title style={{marginTop:15,}}>Pesanan Sedang Di Proses</Title>
          
          </View>
        </Header>

         <Content style={{backgroundColor:'#F4F0E5'}}>
            <View style={{ flex: 1, marginTop:10}}>
            {this.state.viewvisible?
            <View>
               {this.state.Riwayat.map((Riwayat)=>{
                return (

                    <View key={Riwayat.id}>
                    
                    <View style={{marginBottom:10, alignItems:'center'}}>
                    <TouchableOpacity onPress={this.getValue2.bind(this, Riwayat.id,Riwayat.tanggal_pergi,Riwayat.kode_rute1,Riwayat.jenis_tiket,Riwayat.total_bayar,Riwayat.limit_pembayaran)} >
                    <Card style={{width:'80%', borderRadius:10}}>
                        <CardItem style={{backgroundColor:'transparent'}}>
                        <Image source={require('../images/icon_eticket.png')} style={{width:48, height:45}}/>
                          <View>
                              <CardItem style={{height:6,backgroundColor:'transparent'}}>
                              <Text style={{fontSize: 16, fontFamily:'SourceSansProBold'}}>{Riwayat.asal} <Icon name="arrow-round-forward" style={{fontSize:14}} /> {Riwayat.tujuan}</Text>
                                </CardItem>
                                <CardItem style={{height:0.5, marginTop:-5, backgroundColor:'transparent'}}>
                                    <View style={{backgroundColor:'#F4F0E5', width:'100%', height:1}}/>
                                </CardItem>
                                <CardItem style={{height:5, marginTop:-5, backgroundColor:'transparent'}}>

                                    <Text style={{fontSize: 12, marginTop:5, fontFamily:'SourceSansProRegular'}}>{moment(Riwayat.tanggal_pergi).format('DD MMM YYYY')}, {Riwayat.berangkat} - {Riwayat.tiba}</Text>
                                    <Right>
                                        <Text style={{fontSize:12}}>{Riwayat.kode_rute1}</Text>
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
            <Text style={{fontSize:18, fontFamily:'SourceSansProBold', marginBottom:20, marginTop:10}}>Belum Ada Pesanan Yang Diproses</Text>
          </View>}
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

  wheelPicker: {
    width:200,
    height: 150
  },

  view:{
		flex: 1, 
        flexDirection: 'row',
  },
})