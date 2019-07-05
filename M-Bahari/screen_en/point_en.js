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
  AsyncStorage,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import Tab1 from '../tabscreen/Jelajahi';
import Tab2 from '../tabscreen/kupon_saya';

export default class Runcian extends Component {
  static navigationOptions = {
    header:null
  }
  
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = { loading: true,
                   Tab2:true,
                   pointuser:0,
                   frmtPoint:0,
                   loading1:false,
                   loading2:false,
                   hideTukar:1,
                   asal:'',
                   idkupon:0,
                   deskripsi:'',
                   namakupon:'',
                   point:0,
                   imageKupon:'',
                   schedule:[{}],
                   kupon_saya:[{}],
                 };
     AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
      
                    AsyncEmail:resultParsed.AsyncEmail,
                    AsyncNama:resultParsed.AsyncNama,
                    
                });
            }
        });
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
    this.props.navigation.navigate('Akun_en');
    return true;
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
            frmtPoint: responseJson,
            loadPoint:false,
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
  tampilRute() {
  
  return fetch('http://expressbahari.com/php_mobile/rute_list.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})  .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            
            schedule: responseJson,
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
      

}
tampilKupon() {
  
  return fetch('http://expressbahari.com/php_mobile/tampil_kupon_saya.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  
      id_user: this.state.AsyncNama,
      
  
    })
})  .then((response) => response.json())
        .then((responseJson) => {
          this.formatPoint();
          this.setState({
            
            kupon_saya: responseJson,
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
       this.getPointUser();
       this.tampilRute();
       this.tampilKupon();
      this.setState({loading1: !this.state.loading1});
      
      }, 800);
    
  }
  loadings2=()=>{

    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
       this.props.navigation.navigate('kupon_percabang_en',{id:this.state.id,asal:this.state.asal})
      this.setState({loading2: !this.state.loading2});
      
      }, 800);

  }
  loadings3=()=>{

    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
       this.props.navigation.navigate('Detail_kupon_en',{hideTukar:this.state.hideTukar,idkupon:this.state.idkupon,deskripsi:this.state.deskripsi,namakupon:this.state.namakupon,point:this.state.point,imageKupon:this.state.imageKupon})
      this.setState({loading2: !this.state.loading2});
      
      }, 800);

  }
  getKupon=(id,asal)=>
    {
        this.setState({id:id})
        this.setState({asal:asal})
        this.loadings2();
    }
    getDetail=(id_kupon,nama,deskripsi,point,image)=>
    {
        this.setState({idkupon:id_kupon})
        this.setState({namakupon:nama})
        this.setState({deskripsi:deskripsi})
        this.setState({namakupon:nama})
        this.setState({point:point})
        this.setState({imageKupon:image})
        this.loadings3();
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
    this.setState({loadPoint:true});
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
          <Title style={{marginTop:15,marginLeft:-60}}>My Point</Title>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
          </View>
        </Header>

         <Content style={{backgroundColor:'#fff'}}>
            <View style={{backgroundColor:'#3F81B5',height:70, width:'100%', alignItems:'center'}}>
            <CardItem style={{backgroundColor:'transparent', height:35}}>
            <Image source={require('../images/icon_point.png')} style={{width:35, height:28}}/>         
              {
              this.state.loadPoint?<View>
              <Text style={{color:'#ffffff', fontWeight: 'bold',fontSize:40}}>  {this.state.frmtPoint}</Text>
              </View>:
              <View>
                  <Image source={require('../images/loading2.gif')} style={{marginLeft:20, width:110, height:80}}/>
              </View>
                }

              </CardItem>
            </View>
           
        <Tabs tabBarUnderlineStyle={{backgroundColor:'#3F81B5'}}>
          <Tab heading="Explore" tabStyle={{backgroundColor: '#F4F0E5'}} textStyle={{color: '#000'}} activeTabStyle={{backgroundColor: '#F4F0E5'}} activeTextStyle={{color: '#000'}}>
            { 
                this.state.schedule.map(( schedule, key ) =>
                (
                <View key = { key } style = { styles.schedule }>
                  <ListItem style={{height:70}}>
          <View style={{width:'100%',height:60, borderRadius:6}}>
          <TouchableOpacity  onPress={this.getKupon.bind(this, schedule.id,schedule.asal)}>
            <Thumbnail square source={{uri: schedule.image}} style={{width:'100%', height:60, borderRadius:6}}/>
          </TouchableOpacity>
          </View>
      </ListItem>

                </View>
                )) 
              }
          </Tab>
          <Tab heading="My Kupon" tabStyle={{backgroundColor: '#F4F0E5'}} textStyle={{color: '#000'}} activeTabStyle={{backgroundColor: '#F4F0E5'}} activeTextStyle={{color: '#000'}}>
            {
          
          this.state.kupon_saya.map(( kupon_saya, key ) =>
          (
            <View key = { key } style = { styles.kupon_saya }>
                
      <ListItem>
          <View style={{width:'100%',height:125, borderRadius:8}}>
          <TouchableOpacity  onPress={this.getDetail.bind(this, kupon_saya.id_kupon,kupon_saya.nama,kupon_saya.deskripsi,kupon_saya.point,kupon_saya.image)}>         
            <Thumbnail square source={{uri: this.state.kupon_saya[0].image}} style={{width:'100%', height:125, borderRadius:8}}/>
          </TouchableOpacity>
            <View style={{height:30, width:30, backgroundColor:'#fff', position:'absolute', borderRadius:20, marginLeft:-15, marginTop:45}}/>
            <View style={{height:30, width:30, backgroundColor:'#fff', position:'absolute', borderRadius:20, right:-15, marginTop:45}}/>
          </View>
      </ListItem>
                
            </View>
          ))
        }
          </Tab>
        </Tabs>
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