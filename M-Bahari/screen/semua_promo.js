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
} from "react-native";


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
                   promo:[{}] };
  }

semuaPromo() {
  
  return fetch('http://expressbahari.com/php_mobile/semua_promo.php', {
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
loadings=()=>{

    this.setState({loadingPromo: !this.state.loadingPromo});
    setTimeout(()=>{
      
      this.semuaPromo();
      this.setState({loadingPromo: !this.state.loadingPromo});
      
      }, 800);

  }
  componentDidMount() {
      
      this.loadings();
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
  getPromo=(id_promo,kode_promo,deskripsi,nama,berlaku,image)=>
    {
        this.setState({idpromo:id_promo})
        this.setState({kodepromo:kode_promo})
        this.setState({deskripsi:deskripsi})
        this.setState({namapromo:nama})
        this.setState({berlaku:berlaku})
        this.setState({image:image})
        this.loadings2();
    }
    loadings2=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      this.props.navigation.navigate('Detail_Promo',{idpromo:this.state.idpromo,kodepromo:this.state.kodepromo,deskripsi:this.state.deskripsi,namapromo:this.state.namapromo,berlaku:this.state.berlaku,image:this.state.image});
      this.setState({loading1: !this.state.loading1});
      
      }, 800);

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
          <Title style={{marginTop:15,marginLeft:-140}}>Promo</Title>
          </View>
        </Header>

         <Content style={{backgroundColor:'#fff'}}>
          

            {
          
          this.state.promo.map(( promo, key ) =>
          (
            <View key = { key } style = { styles.promo }>
                 <ListItem>
                 <Body>
                 <TouchableOpacity onPress={this.getPromo.bind(this, promo.id_promo,promo.kode_promo,promo.deskripsi,promo.nama,promo.berlaku,promo.image)}>
                
                 <Card style={{width:'100%',height:125, borderRadius:8}}>
                    <Thumbnail square source={{uri: promo.image }} style={{width:'100%', height:125, borderRadius:8}}/>
                  </Card>
                  
                  <Text numberOfLines={1} style={{fontSize:18, width:300, fontFamily:'SourceSansProBold'}}>{promo.nama}</Text>
                  <Text numberOfLines={2} style={{fontSize:12, width:300, fontFamily:'SourceSansProRegular'}}>{promo.deskripsi}</Text>
                  </TouchableOpacity>
                  </Body>
                  </ListItem> 
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