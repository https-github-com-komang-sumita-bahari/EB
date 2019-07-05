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
  TouchableOpacity,
  BackHandler
} from "react-native"; 
import {Permissions, Notifications} from 'expo';


export default class Runcian extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = { loading: true,
                   loading1:false,
                   loading3:false,
                   idkupon:0,
                   viewvisible:false,
      deskripsi:'',
      namakupon:'',
      point:0,
      imageKupon:'',
                    asal: this.props.navigation.state.params.asal,
                    kupon_cabang:[{}],
                 };
  }
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      this.KuponCabang();
      
      this.setState({loading1: !this.state.loading1});
      
      }, 800);

  }
  loadingsKupon=()=>{

    this.setState({loading3: !this.state.loading3});
    setTimeout(()=>{
      this.props.navigation.navigate('Detail_kupon',{idkupon:this.state.idkupon,deskripsi:this.state.deskripsi,namakupon:this.state.namakupon,point:this.state.point,imageKupon:this.state.imageKupon});
      this.setState({loading3: !this.state.loading3});
      
      }, 100);

  }
  getKupon=(id_kupon,nama,deskripsi,point,image)=>
    {
        this.setState({idkupon:id_kupon})
        this.setState({namakupon:nama})
        this.setState({deskripsi:deskripsi})
        this.setState({point:point})
        this.setState({imageKupon:image})
        this.loadingsKupon();
    }
  KuponCabang = () =>{
 
fetch('http://expressbahari.com/php_mobile/tampil_kupon_percabang.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    asal: this.state.asal,
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
      this.setState({
     
        kupon_cabang:responseJson,
        viewvisible:true,

      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
  
  }
  componentDidMount(){
    this.registrasiForPushNotification();
    this.loadings();
  }

  registrasiForPushNotification = async () => {
      const {status}=await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus=status;

      if(status!=='granted'){
          const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
      }

      if(finalStatus !== 'granted'){
          return;
      }

      let token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
    this.registrasiForPushNotification();
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.navigate('semua_kuponcabang');
    return true;
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
          <Left>
            <Button transparent onPress={() =>
                  this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,marginLeft:-120}}>{this.state.asal}</Title>
          </View>
        </Header>

         <Content style={{backgroundColor:'#fff'}}>
         <View style={{ flexDirection: 'row', width: '100%',  marginTop:20, alignItems:'center',marginLeft:20 }}>
         {this.state.viewvisible?
            <View>
            { 
                this.state.kupon_cabang.map(( kupon_cabang, key ) =>
                (
                <View key = { key } style = { styles.kupon_cabang }>          
                 
                  <TouchableOpacity onPress={this.getKupon.bind(this, kupon_cabang.id_kupon,kupon_cabang.nama,kupon_cabang.deskripsi,kupon_cabang.point,kupon_cabang.image)}>
                  <Card style={{width:350,height:125}}>
    
                    <Thumbnail square source={{uri: kupon_cabang.image }} style={{width:'100%', height:125}}/>

                  </Card>
                </TouchableOpacity>  
                
                </View>
                ))
            }
            </View>:
             <View style={{alignItems:'center',marginLeft:30}}>
            <Image source={require('../images/icon_belum.png')} style={{width:250, height:205}}/>
            <Text style={{fontSize:18, fontFamily:'SourceSansProBold', marginBottom:20, marginTop:10}}>Belum Ada Kupon Untuk Cabang Ini</Text>
          </View>
          }
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