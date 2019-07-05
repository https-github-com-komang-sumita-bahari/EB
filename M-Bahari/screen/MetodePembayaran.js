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
    Footer
} from 'native-base';
import {
  StyleSheet,
  View,
  Image,
  Alert,
  AsyncStorage,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class Runcian extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);

    this.state = { 
                    loading: true,
                    isLoading: true,
                    NomorPesanan:'',

                     };

                      AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                     AsyncTotalHarga:resultParsed.AsyncTotalHarga,
                     AsyncIdKupon:resultParsed.AsyncIdKupon,
                     AsyncIdPromo:resultParsed.AsyncIdPromo,
                     AsyncKewarganegaraan1:resultParsed.AsyncKewarganegaraan1,

                    
                });
            }
        });
           
  }
saveData = () =>{
  
    
        
        let AsyncNama = this.state.AsyncNama;
        
        let data = {
           
            AsyncNama:AsyncNama,
            

        }

        AsyncStorage.setItem('user', JSON.stringify(data));

        this.setState({
            
            
            AsyncNama:AsyncNama,
            
        });
      this.props.navigation.navigate('Transfer_Bank')
    }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
   
  }

  showArrayItem = (item) => {
 
    Alert.alert(item);
 
  }
  goBack=()=>{
 
    this.props.navigation.navigate('Rincian')
 
  }
getNoPesanan = () => {
  
  return fetch('http://192.168.43.114/User_Project/get_nopesanan.php',{
 method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
   id_user:this.state.AsyncNama,
 
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

          this.setState({
            NomorPesanan: responseJson
          });

        })
        .catch((error) => {
          console.error(error);
        });
        this.TransferBank;
}
TransferBank(){

  this.props.navigation.navigate("Transfer_Bank")
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
          <Title style={{marginTop:15,}}>Pilih Metode Pembayaran</Title>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
          </View>
        </Header>

         <Content style={{backgroundColor:'#F4F0E5'}}>
            <ListItem>
              <Button onPress={ () => this.TransferBank()}  style={{height:100,width:'100%'}}transparent>
                <Card style={{width:'100%'}}>
                
                    <CardItem style={{height:40,}}>
                        <Text style={{fontSize: 16,fontWeight: 'bold',}}>TRANSFER</Text>
                        <Right style={{marginLeft:80}}>
                          <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
              
                    <View style={{backgroundColor:'#F4F0E5', width:'100%', height:2}}/>
                    
                    <CardItem>
                        <Image source={require('../images/logo_transfer.png')} style={{height:20, width:200}}/>
                    </CardItem>
                    
                </Card>
                </Button>
            </ListItem>

            <ListItem>
            <Button   style={{height:100,width:'100%'}}transparent>
                <Card style={{width:'100%'}}>
                
                    <CardItem style={{height:40,}}>
                        <Text style={{fontSize: 16,fontWeight: 'bold',}}>KARTU KREDIT </Text>
                        <Right style={{marginLeft:80}}>
                          <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                
                    <View style={{backgroundColor:'#F4F0E5', width:'100%', height:2}}/>
                    <CardItem>
                        <Image source={require('../images/logo_kartu_kredit.png')} style={{height:20, width:80}}/>
                    </CardItem>

                </Card>
                </Button>
            </ListItem>

            <ListItem>
            <Button   style={{height:100,width:'100%'}}transparent>
                <Card style={{width:'100%'}}>
                
                    <CardItem style={{height:40,}}>
                        <Text style={{fontSize: 16,fontWeight: 'bold',}}>ALFAMART</Text>
                        <Right style={{marginLeft:80}}>
                          <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                
                    <View style={{backgroundColor:'#F4F0E5', width:'100%', height:2}}/>
                    <CardItem>
                        <Image source={require('../images/logo_alfamart.png')} style={{height:20, width:80}}/>
                    </CardItem>
                </Card>
                </Button>
            </ListItem>

            <ListItem>
            <Button   style={{height:100,width:'100%'}}transparent>
                <Card style={{width:'100%'}}>
                
                    <CardItem style={{height:40,}}>
                        <Text style={{fontSize: 16,fontWeight: 'bold',}}>INDOMARET</Text>
                        <Right style={{marginLeft:80}}>
                          <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
               
                    <View style={{backgroundColor:'#F4F0E5', width:'100%', height:2}}/>
                    <CardItem>
                        <Image source={require('../images/logo_indomart.png')} style={{height:20, width:80}}/>
                    </CardItem>
                </Card>
                 </Button>
            </ListItem>
           
           
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