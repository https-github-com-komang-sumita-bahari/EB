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
  AsyncStorage,
  BackHandler
} from "react-native";
import { ImagePicker, Permissions } from "expo";


export default class Tranfer extends Component {
  static navigationOptions = {
    header:null
  }
  
  constructor(props) {
    super(props);
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = { loading: true,
                   loading1:false,
                 }
    AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                    AsyncNomorPesanan :resultParsed.AsyncNomorPesanan,
                    AsyncTotalHarga:resultParsed.AsyncTotalHarga,
                    AsyncLimit:resultParsed.AsyncLimit,
                
                });
            }
        });
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
    this.props.navigation.navigate('home_en');
    return true;
}
  Upload=()=>{
    this.props.navigation.navigate('Upload_en')
  }
rupiah(){
  if(this.state.AsyncTotalHarga.toString().length==5){
      this.setState({
        AsyncTotalHarga: this.state.AsyncTotalHarga.toString().substring(0, 2)+'.'+this.state.AsyncTotalHarga.toString().substring(2, 5),
      });
    }
   if(this.state.AsyncTotalHarga.toString().length==6){
      this.setState({
        AsyncTotalHarga: this.state.AsyncTotalHarga.toString().substring(0, 3)+'.'+this.state.AsyncTotalHarga.toString().substring(3, 6),
      });
    }
    else if(this.state.AsyncTotalHarga.toString().length==7){
      this.setState({
        AsyncTotalHarga: this.state.AsyncTotalHarga.toString().substring(0, 1)+'.'+this.state.AsyncTotalHarga.toString().substring(1, 4)+'.'+this.state.AsyncTotalHarga.toString().substring(4, 7),
      });
    }
    else if(this.state.AsyncTotalHarga.toString().length==8){
      this.setState({
        AsyncTotalHarga: this.state.AsyncTotalHarga.toString().substring(0, 2)+'.'+this.state.AsyncTotalHarga.toString().substring(2, 5)+'.'+this.state.AsyncTotalHarga.toString().substring(5, 8),
      });
    }
  } 
  loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      
       
        this.rupiah(); 
        this.setState({loading1: !this.state.loading1});
      
      }, 200);

  }
  _handlePressButtonAsync = async () => {
  let result   = await WebBrowser .openBrowserAsync('http://u392337208.hostingerapp.com?keyword='+this.state.AsyncNomorPesanan);
  this.setState ({result  });
};
  componentDidMount() {
      
      this.loadings();

     }

 _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        base64: true,
        aspect: [4, 3],
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
        let localUri = result.uri;
    let filename = localUri.split('/').pop();
    console.log(filename);
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
  
    let formData = new FormData();
    formData.append('photo', { uri: localUri, name: filename, type });
    setTimeout(()=>{
        fetch('http://expressbahari.com/php_mobile/update_pembayaran.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.AsyncNomorPesanan,
          name: filename,
        
        })
      
        }).then((response) => response.json())
            .then((responseJson) => {
           this.handleBackButtonClick();   
              
            }).catch((error) => {
            
        });
      },100);
        
  
    return await fetch('http://expressbahari.com/php_mobile/upload.php', {
      method: 'POST',
      body: formData,
      header: {
        'content-type': 'multipart/form-data',
      },
    });

    
      }
  
    
    };
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
         <Header style={{backgroundColor:'#3F81B5', height:20,}}></Header> 
        <Header style={{backgroundColor:'#3F81B5',}}>
         <View style={styles.view}>
              <Title style={{marginTop:15,fontFamily:'SourceSansProBold', fontSize:20}}>Transfer</Title>
          </View>
         </Header>
         <Content>
         <ListItem>
         <Body>
         <Card style={{borderRadius:10, alignContent:'center'}}> 
         <Body style={{margin:10}}>
          <CardItem style={{backgroundColor:'transparent', height:20}}>
            <Text style={{fontSize: 14,fontFamily:'SourceSansProRegular'}}>Payment Time Limit : </Text>
          </CardItem>
          <CardItem style={{backgroundColor:'transparent', height:20}}>
            <Text style={{fontSize: 20, fontFamily:'SourceSansProBold',}}>{ this.state.AsyncLimit} </Text>
          </CardItem> 
          </Body>
          </Card> 
          </Body>
          </ListItem>

          <ListItem>
           <Body>
            <Card style={{borderRadius:10}}>
              <CardItem style={{height:30,backgroundColor:'transparent', marginTop:10}}>
                <Text style={{fontSize: 18, fontFamily:'SourceSansProBold',}}>Please Transfer To :</Text>
              </CardItem>
              <ListItem style={{height:60,}}>
                <Body>
                    <CardItem style={{height:20,}}>
                        <Icon active name="ios-card" />
                        <Text style={{fontSize: 16,fontFamily:'SourceSansProRegular'}}>Account Number</Text>
                    </CardItem>
                    <CardItem style={{height:20,}}>
                        <Text>        </Text>
                        <Text style={{fontSize: 16, fontFamily:'SourceSansProBold',}}>1000 - 0000 - 0000 - 0000</Text>
                    </CardItem>
                </Body>
              </ListItem>
              <ListItem style={{height:60,}}>
                <Body>
                    <CardItem style={{height:20,}}>
                        <Icon active name="ios-person" />
                        <Text style={{fontSize: 16,fontFamily:'SourceSansProRegular'}}>Account Holder</Text>
                    </CardItem>
                    <CardItem style={{height:20,}}>
                        <Text>        </Text>
                        <Text style={{fontSize: 16, fontFamily:'SourceSansProBold',}}>PT. Pelayaran Sakti Inti Makmur</Text>
                    </CardItem>
                </Body>
              </ListItem>
              
              <ListItem style={{height:50,}}> 
                <Body>
                    <CardItem style={{backgroundColor:'transparent', marginBottom:10}}>
                        <Text style={{fontSize: 18, fontFamily:'SourceSansProBold',}}>       Total Price</Text>
                        <Right>
                        <Text style={{fontSize: 19, fontFamily:'SourceSansProBold', color:'#ff0000'}}>Rp. {this.state.AsyncTotalHarga}.-</Text>
                    </Right>
                    </CardItem>
                </Body>
              </ListItem> 
              
               
              </Card>
           </Body>
          </ListItem>

           <ListItem>
            <Body>
                <Card style={{borderRadius:10}}> 
                    <CardItem style={{backgroundColor:'transparent'}}>
                        <Text style={{fontSize: 16, fontFamily:'SourceSansProBold',}}>Awaiting Payment Confirmation</Text>
                    </CardItem>
                    <CardItem style={{marginTop:-10,}}>
                        <Text style={{fontSize: 14,fontFamily:'SourceSansProRegular'}}>Please Upload your Payment Receipt</Text>
                    </CardItem>
                    <Button full onPress={this._pickImage} style={{backgroundColor:'#3F81B5', borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                <Text style={{fontFamily:'SourceSansProBold'}}>UPLOAD MY PAYMENT RECEIPT</Text>
              </Button>
                </Card>
            </Body>
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

  view:{
    flex: 1, 
        flexDirection: 'row',
  },
})