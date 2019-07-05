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
  TouchableOpacity,
  Image,
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
                  loading1: false,
                  loading2: false,
                  schedule:[{}],
                  id:'',
                  asal:'',
     };
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
componentDidMount() {
      this.loadings();
      

  }
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
       this.tampilRute();
      this.setState({loading1: !this.state.loading1});
      
      }, 800);

  }
  loadings2=()=>{

    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
       this.props.navigation.navigate('kupon_percabang',{id:this.state.id,asal:this.state.asal})
      this.setState({loading2: !this.state.loading2});
      
      }, 800);

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
 getKupon=(id,asal)=>
    {
        this.setState({id:id})
        this.setState({asal:asal})
        this.loadings2();
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
                  this.props.navigation.navigate('home')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,marginLeft:-140}}>Kupon</Title>
          </View>
        </Header>

         <Content style={{backgroundColor:'#fff'}}>
         <View style={{width: '100%' }}>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop:10}}>    Kupon Reward</Text>
                <Text style={{fontSize: 12, marginLeft:20}}>Tukarkan point Anda dengan berbagai kupon promo di setiap cabang kami.</Text>
            </View>
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