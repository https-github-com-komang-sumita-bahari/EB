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
  BackHandler,
  AsyncStorage
} from "react-native";

import moment from 'moment';
export default class Runcian extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = { loading: true,
                   loadingPromo:false,
                   loading1:false,
                   hideInfo:false,
                   hideKupon:false,
                   hidePromo:false,
                   info:[{}],
                   kupon:[{}],
                   promo:[{}] 
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

TampilInfo() {
  
  fetch('http://expressbahari.com/php_mobile/tampil_Inbox.php', {
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
     
        info:responseJson,
        hideInfo:true,
      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       this.setState({hideInfo:false});
      });
  
  }
  TampilKupon() {
  
  fetch('http://expressbahari.com/php_mobile/tampil_InboxK.php', {
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
     
        kupon:responseJson,
        hideKupon:true,
      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       this.setState({hideKupon:false});
      });
  
  }
  TampilPromo() {
  
  fetch('http://expressbahari.com/php_mobile/tampil_InboxP.php', {
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
     
        promo:responseJson,
        hidePromo:true
      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       this.setState({hidePromo:false});
      });
  
  }
loadings=()=>{

    this.setState({loadingPromo: !this.state.loadingPromo});
    setTimeout(()=>{
      
      this.TampilInfo();
      this.TampilKupon();
      this.TampilPromo();
      this.setState({loadingPromo: !this.state.loadingPromo});
      
      }, 800);

  }
  componentDidMount() {
      
      this.loadings();
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
    this.props.navigation.navigate('home');
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
          <Title  style={{marginTop:15,marginLeft:-150}}>Inbox</Title>
          </View>
        </Header>

         <Content style={{backgroundColor:'#fff'}}>

          
          {
          this.state.info.map(( info, key ) =>
          (
            <View key = { key } style = { styles.info }>
                 {
            this.state.hideInfo?<ListItem>
                 <Body>
    
                
                 <Card style={{width:'100%',height:130, borderRadius:8}}>
                    
                    <CardItem>
                    <Text style={{fontSize: 20, fontWeight: 'bold',color:'#ffffff',backgroundColor:'#d40000',width:'100%'}}> {info.judul }</Text>
                    </CardItem>
                    <CardItem style={{marginTop:-15}}>
                    <Text>{info.deskripsi }</Text>
                    </CardItem>
                    <CardItem style={{marginTop:-13}}>
                    <Icon active name="paper" style={{fontSize:15,marginLeft:6}}/>
                    <Text style={{fontSize: 10,marginLeft:-10}}>{moment(info.created_at).format('DD MMM YYYY HH:mm')}</Text>
                    </CardItem>
                  </Card>

                  </Body>
                  </ListItem>:null
       } 
            </View>
          ))
         }
         {
          
          this.state.kupon.map(( kupon, key ) =>
          (
            <View key = { key } style = { styles.kupon }>
                  {
            this.state.hideKupon?<ListItem>
                 <Body>
    
                
                 <Card style={{width:'100%',height:130, borderRadius:8}}>
                    
                    <CardItem>
                    <Text style={{fontSize: 20, fontWeight: 'bold',color:'#ffffff',backgroundColor:'#3F81B5',width:'100%'}}> {kupon.judul }</Text>
                    </CardItem>
                    <CardItem style={{marginTop:-10}}>
                    <Text>{kupon.deskripsi }</Text>
                    </CardItem>
                    <CardItem style={{marginTop:-13}}>
                    <Icon active name="paper" style={{fontSize:15,marginLeft:6}}/>
                    <Text style={{fontSize: 10,marginLeft:-10}}>{moment(kupon.created_at).format('DD MMM YYYY HH:mm')}</Text>
                    </CardItem>
                  </Card>

                  </Body>
                  </ListItem>:null
                  } 
            </View>
          ))
         }
         {
          
          this.state.promo.map(( promo, key ) =>
          (
            <View key = { key } style = { styles.promo }>
                  {
            this.state.hidePromo?<ListItem>
                 <Body>
    
                
                 <Card style={{width:'100%',height:130, borderRadius:8}}>
                    
                    <CardItem>
                    <Text style={{fontSize: 20, fontWeight: 'bold',color:'#ffffff',backgroundColor:'#3F81B5',width:'100%'}}> {promo.judul }</Text>
                    </CardItem>
                    <CardItem style={{marginTop:-10}}>
                    <Text>{promo.deskripsi }</Text>
                    </CardItem>
                    <CardItem style={{marginTop:-13}}>
                    <Icon active name="paper" style={{fontSize:15,marginLeft:6}}/>
                    <Text style={{fontSize: 10,marginLeft:-10}}>{moment(promo.created_at).format('DD MMM YYYY HH:mm')}</Text>
                    </CardItem>
                  </Card>

                  </Body>
                  </ListItem>:null
                }
            </View>
          ))
         }
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