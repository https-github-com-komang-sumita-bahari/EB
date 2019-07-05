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
  AsyncStorage,
  ToastAndroid,
  Alert,
  TouchableOpacity,
  BackHandler

} from "react-native";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Runcian extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = { loading: true,
                   loading1: false,
                   loading2: false,
                   collapsed:true,
                   collapsed2:true,
                   pointuser:0,
                   frmtPoint:0,
                   sisaPoint:0,
                   hidefooter:false,
                   idkupon: this.props.navigation.state.params.idkupon,
                   hideTukar: this.props.navigation.state.params.hideTukar,
                   deskripsi: this.props.navigation.state.params.deskripsi,
                   namakupon: this.props.navigation.state.params.namakupon,
                   point: this.props.navigation.state.params.point,
                   rpoint: this.props.navigation.state.params.rpoint,
                   imageKupon: this.props.navigation.state.params.imageKupon,
                   SnK:[],
                   ButtonStateHolder:true,
                   cara:[{desk: 'Lakukan proses pemesanan tiket.'},
                          {desk: 'Klik tombol "GUNAKAN KODE PROMO ATAU KUPON".'},
                          {desk: 'Akan muncul daftar kupon yang anda miliki saat ini.'},
                          {desk: 'Lalu pilih salah satu kupon yang ingin anda gunakan.'}]
                 };

                 AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
      
                    
                    AsyncNama:resultParsed.AsyncNama,
                    AsyncEmail:resultParsed.AsyncEmail,
                });
            }
        });
  }
  loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    if(this.state.hideTukar==1){
        this.setState({hidefooter:true});
       }
    setTimeout(()=>{

      this.SnKKupon();
       this.getPointUser();

      this.setState({loading1: !this.state.loading1});
      
      }, 800);
  }
   DisableButtonFunction =()=>{
    
      this.setState({
        
        // On State True it will Disable the button.
        ButtonStateHolder : true ,
 
        
      
      })
    
   }
  loadingsPoint=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      this.TukarPoint();
      this.setState({loading1: !this.state.loading1});
      
      }, 800);

  }
  componentDidMount() {
      this.loadings();
     
  }
  SnKKupon = () =>{
 
fetch('http://expressbahari.com/php_mobile/tampil_SnK_Kupon.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    id_kupon: this.state.idkupon,
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
  
  InputKuponSaya = () =>{


  fetch('http://expressbahari.com/php_mobile/input_kupon_saya.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      id_kupon: this.state.idkupon,
      id_user: this.state.AsyncNama,
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
       
          
        }).catch((error) => {
          ToastAndroid.show('Tidak Bisa Terhubung ke Server', ToastAndroid.SHORT);
        });
 this.Alert2();
}
UpdatePointSaya = () =>{


  fetch('http://expressbahari.com/php_mobile/update_point_user.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      id_user: this.state.AsyncNama,
      point: this.state.sisaPoint,
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
                    
        }).catch((error) => {
        
        });
this.InputKuponSaya();
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
          });
     this.TukarPoint();  
        })
        .catch((error) => {
        
        });
   
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
  Alert=()=>{
    Alert.alert(
    'Tukar Point',
    'Apakah anda yakin ingin menukar point anda ?',
    [
      {text: 'Tidak', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Ya', onPress: () => this.UpdatePointSaya()},
    ],
    { cancelable: false });
    return true;
  }
  Alert2=()=>{
    this.getPointUser();
    Alert.alert(
    'Berhasil',
    'Point Anda Telah Berhasil ditukar',
    [
  
      {text: 'OK', onPress: () => this.getPointUser()},
    ],
    { cancelable: false });
    return true;
  }
  Pesan=()=>{
    this.props.navigation.navigate('PesanTiket')
  }

  TukarPoint=()=>{
     this.formatPoint();
    this.setState({sisaPoint:parseInt(this.state.pointuser)-parseInt(this.state.point)});
    if(this.state.sisaPoint>0){
      this.setState({
        ButtonStateHolder : false , 
      });
    }
    else{
      this.DisableButtonFunction();
      ToastAndroid.show('Point Anda Tidak Mencukupi', ToastAndroid.SHORT);
    }
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
    this.props.navigation.goBack();
    return true;
}

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.kode_promo);
    alert('Copied to Clipboard!');
  };

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
      <Spinner visible={this.state.loading2}/>
         
      <Header style={{backgroundColor:'#3F81B5', height:20,}}></Header> 
         

         <Content style={{backgroundColor:'#F4F0E5'}}>
         <ImageBackground source={{uri: this.state.imageKupon}}  style={{width: '100%', height: 180}} imageStyle={{ borderBottomLeftRadius:20, borderBottomRightRadius:20,}} >
         <Button transparent onPress={() =>
                  this.props.navigation.goBack()}>
              <Icon style={{color:'#fff'}} name='arrow-back' />
            </Button>
         </ImageBackground>
         <View style={{width:'100%', alignItems:'center'}}>
            <View style={{width:'95%', position:'relative',marginTop:-30, borderRadius:10, backgroundColor:'#fff'}}>
            <CardItem style={{backgroundColor:'transparent'}}>
                <Text style={{fontWeight: 'bold',}}>{this.state.namakupon}</Text>
            </CardItem>
      
            <CardItem style={{height:1}}>
                <View style={{backgroundColor:'#F4F0E5', width:'100%', height:1}}/>
            </CardItem>
            
            <CardItem style={{marginTop:-10, backgroundColor:'transparent'}}>
                <Text style={{fontSize:12}}>{this.state.deskripsi}</Text>
            </CardItem>
            </View>
            </View>
            <Collapse isCollapsed={this.state.collapsed} onToggle={(isCollapsed)=>this.setState({collapsed:isCollapsed})}>>
                <CollapseHeader>
                <Card style={{height:40, marginTop:20}}>
                    <CardItem style={{height:40}}>
                        <Text style={{fontSize: 14, fontFamily:'SourceSansProBold'}}>Syarat dan Ketentuan</Text>
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
                    <Text style={{fontSize: 12, marginLeft:10, fontFamily:'SourceSansProRegular'}}>{key + 1}.</Text>
                  </View>
                  <View style={{width:'90%'}}>
                   <Text style={{fontSize: 12, marginLeft:10, fontFamily:'SourceSansProRegular'}}>{SnK.des}</Text>
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
                        <Text style={{fontSize: 15, fontFamily:'SourceSansProBold'}}>Cara Menggunakan                       </Text>
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
        {
          this.state.hidefooter?
        <Footer style={{backgroundColor:'#fff' }}>
        <View style={{width:'100%',marginLeft:10}}>
             <TouchableOpacity style={[styles.ButtonStyle, { backgroundColor: this.state.ButtonStateHolder ? '#607D8B' : '#3F81B5' }]} 
          onPress={this.Pesan} >
 
            <Text style={styles.TextStyle}>Pesan Tiket</Text>
        </TouchableOpacity>
            
        </View>
         
        </Footer>:

        <Footer style={{backgroundColor:'#fff' }}>
        <Left style={{marginLeft:10}}>
            <CardItem style={{height:15, marginLeft:-10}}>
              <Image source={require('../images/icon_point.png')} style={{width:23, height:18}}/>
              <Text style={{fontSize: 16, fontWeight: 'bold', color:'#ff6600'}}>   {this.state.rpoint} Poin</Text>
            </CardItem>
            <Text style={{fontSize: 12}}>  Poin saya : {this.state.frmtPoint}</Text>
        </Left>
        <Right>
             <TouchableOpacity style={[styles.ButtonStyle, { backgroundColor: this.state.ButtonStateHolder ? '#607D8B' : '#3F81B5' }]} 
          activeOpacity = { .5 } 
          disabled={this.state.ButtonStateHolder}
          onPress={this.Alert} >
 
            <Text style={styles.TextStyle}> Tukarkan</Text>
        </TouchableOpacity>
            
        </Right>
         
        </Footer>
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
  TextStyle:{
         marginTop:5,
         textAlign:'center',
         color:'#ffffff',
         margin: 5,
     },
  container:{
		flex:2,
		 //justifyContent:'center',
		 flexGrow:2,
		
  },
   ButtonStyle: {
       backgroundColor:'#3F81B5', 
       marginRight:10, 
       height:35,
       borderRadius:5,
       
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