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
  Image,
  ImageBackground,
  Clipboard,
  ToastAndroid,
  BackHandler,
} from "react-native";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import moment from 'moment';
export default class Runcian extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = { loading: true,
    idpromo: this.props.navigation.state.params.idpromo,
    kodepromo: this.props.navigation.state.params.kodepromo,
    deskripsi: this.props.navigation.state.params.deskripsi,
    namapromo: this.props.navigation.state.params.namapromo,
    berlaku: this.props.navigation.state.params.berlaku,
    image: this.props.navigation.state.params.image,
    SnK:[],
    loading1:false,
    collapsed:true,
    collapsed2:true,
    cara:[{desk: 'Salin Kode Promo yang tersedia dengan cara menekan tombol "SALIN".'},
    {desk: 'Masuk ke menu "Pesan Tiket" atau dengan menggunakan tombol "PESAN TIKET".'},
    {desk: 'Lakukan proses pemesanan tiket.'},
    {desk: 'Klik tombol "GUNAKAN KODE PROMO ATAU KUPON".'},
    {desk: 'Masukkan kode promo.'},
    {desk: 'Lalu klik tombol "GUNAKAN".'}]
  };
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
    this.props.navigation.navigate('home');
    return true;
}

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.kodepromo);
    ToastAndroid.show('Kode Promo Berhasil Di Salin', ToastAndroid.SHORT);
  };
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      this.SnKPromo();
      this.setState({loading1: !this.state.loading1});
      
      }, 800);

  }
  componentDidMount() {
      this.loadings();
  }
  pesanTiket=()=>{
    this.props.navigation.navigate('PesanTiket')
  }
SnKPromo = () =>{
 
fetch('http://expressbahari.com/php_mobile/tampil_SnK.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    id_promo: this.state.idpromo,
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
      this.setState({
     
        SnK:responseJson,

      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
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

         <Content style={{backgroundColor:'#F4F0E5'}}>
         <ImageBackground source={{uri: this.state.image}}  style={{width: '100%', height: 180}} imageStyle={{ borderBottomLeftRadius:20, borderBottomRightRadius:20,}} >
         
         <Button transparent onPress={() =>
                  this.props.navigation.goBack()}>
              <Icon style={{color:'#fff'}} name='arrow-back' />
            </Button>
        
        </ImageBackground>
            <View style={{width:'100%', alignItems:'center'}}>
            <View style={{width:'95%', position:'relative',marginTop:-30, borderRadius:10, backgroundColor:'#fff'}}>
            <CardItem style={{backgroundColor:'transparent'}}> 
                <Text style={{fontFamily:'SourceSansProBold', fontSize:20}}>{this.state.namapromo}</Text>
            </CardItem>
            <CardItem style={{height:1, marginTop:-10,backgroundColor:'transparent'}}>
                <Text style={{fontSize:14, fontFamily:'SourceSansProRegular'}}>Berlaku : {moment(this.state.berlaku).format('DD MMM YYYY')}</Text>
            </CardItem>
            <CardItem style={{height:1,backgroundColor:'transparent'}}>
                <View style={{backgroundColor:'#F4F0E5', width:'100%', height:1}}/>
            </CardItem>
            
            <CardItem style={{marginTop:-10}}>
                <Text style={{fontSize:13, fontFamily:'SourceSansProRegular'}}>{this.state.deskripsi}</Text>
            </CardItem>
            
            <View style={{alignItems:'center', backgroundColor:'#fff'}}>
            <CardItem style={{height:40}}>
              <Image source={require('../images/icon_promo.png')} style={{width:20, height:20}}/>
              <Text style={{fontSize:18, fontFamily:'SourceSansProBold',}}> KODE PROMO  </Text>
            </CardItem>
            </View>
            <CardItem style={{height:40,backgroundColor:'transparent',marginTop:5}}>
              <View style={{width:'100%', backgroundColor:'#fff', alignItems:'center'}}>
                <CardItem>
                  <View style={{height:40, width:'90%', backgroundColor:'#F4F0E5', alignSelf:'center', borderRadius:8 ,}}>
                    <CardItem style={{height:20, backgroundColor:'transparent',marginTop:8}}>
                        <Text style={{fontSize:18, marginLeft:10, fontFamily:'SourceSansProBold'}}>{this.state.kodepromo}</Text>
                        <Right>
                          <Text style={{fontSize:12, color:'#3F81B5', fontStyle:'italic', fontWeight: 'bold'}} onPress={this.writeToClipboard}>SALIN</Text>
                        </Right>
                    </CardItem>
                  </View>
                </CardItem>
              </View>
            </CardItem>

            <CardItem style={{backgroundColor:'transparent'}}>
                <Text style={{fontSize:13, fontFamily:'SourceSansProRegular'}}>Lihat info lebih lengkapnya di Syarat dan Ketentuan.</Text>
            </CardItem>
            </View>
            </View>
            <Collapse isCollapsed={this.state.collapsed} onToggle={(isCollapsed)=>this.setState({collapsed:isCollapsed})}>>
                <CollapseHeader>
                <Card style={{height:40, marginTop:20}}>
                    <CardItem style={{height:40}}>
                        <Text style={{fontSize: 15, fontFamily:'SourceSansProBold'}}>Syarat dan Ketentuan</Text>
                        <Right style={{marginLeft:70}}>
                          {this.state.collapsed?<Icon active name="ios-arrow-up" />:<Icon active name="ios-arrow-down" />}
                        </Right>
                    </CardItem>
                </Card>
              </CollapseHeader>
              <CollapseBody style={{backgroundColor:'#ffffff'}}> 
              { 
                this.state.SnK.map(( SnK, key ) =>
                (
                <View key = { key } style = { styles.SnK }>
                <View style={{flexDirection:'row', width:'100%'}}>
                  <View style={{width:20, marginLeft:5}}>
                    <Text style={{fontSize: 13, marginLeft:10, fontFamily:'SourceSansProRegular'}}>{key + 1}.</Text>
                  </View>
                  <View style={{width:'90%'}}>
                   <Text style={{fontSize: 13, marginLeft:10,fontFamily:'SourceSansProRegular'}}>{SnK.des}</Text>
                  </View>
                </View>
                
                </View>
                ))
              }
              <View style={{height:10}}/>
              </CollapseBody>
            </Collapse>

            <Collapse isCollapsed={this.state.collapsed2} onToggle={(isCollapsed)=>this.setState({collapsed2:isCollapsed})}>>
                <CollapseHeader>
                <Card style={{height:40}}>
                    <CardItem style={{height:40}}>
                        <Text style={{fontSize: 15, fontFamily:'SourceSansProBold',}}>Cara Menggunakan                       </Text>
                        <Right>
                          {this.state.collapsed2?<Icon active name="ios-arrow-up" />:<Icon active name="ios-arrow-down" />}
                        </Right>
                    </CardItem>
                </Card>
              </CollapseHeader>
              <CollapseBody style={{backgroundColor:'#ffffff'}}> 
              { 
                this.state.cara.map(( cara, key ) =>
                (
                <View key = { key } style = { styles.cara }>
                <View style={{flexDirection:'row', width:'100%'}}>
                  <View style={{width:20, marginLeft:5}}>
                    <Text style={{fontSize: 13, marginLeft:10, fontFamily:'SourceSansProRegular'}}>{key + 1}.</Text>
                  </View>
                  <View style={{width:'90%'}}>
                   <Text style={{fontSize: 13, marginLeft:10,fontFamily:'SourceSansProRegular'}}>{cara.desk}</Text>
                  </View>
                </View>
                
                </View>
                ))
              }
              <View style={{height:10}}/>
              </CollapseBody>
              </Collapse>
            
        </Content>
        <Footer style={{backgroundColor:'#3F81B5'}}>
          <Button transparent onPress={this.pesanTiket}>
              <Text style={{color:'#ffffff', fontFamily:'SourceSansProBold', fontSize:18}}>Pesan Tiket</Text>
          </Button>
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