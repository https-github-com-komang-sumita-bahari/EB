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
import { WebBrowser,ImagePicker,Camera, Permissions } from "expo";
import moment from 'moment';

export default class Tranfer extends Component {
  static navigationOptions = {
    header:null
  }
  
  constructor(props) {
    super(props);
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = { loading: true,
                   totalbayar: this.props.navigation.state.params.totalbayar,
                   no_pesanan: this.props.navigation.state.params.no_pesanan,
                   limit: this.props.navigation.state.params.limit,
                   loading1:false,
                   rpTotalTransfer:0,
                   image: null,
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
_handlePressButtonAsync = async () => {
  let result   = await WebBrowser .openBrowserAsync('http://u392337208.hostingerapp.com?keyword='+this.state.no_pesanan);
  this.setState ({result  });
};
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    this.setState({ loading: false });
     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.navigate('PesananSedangDiProses_en');
    return true;
}
  Upload=()=>{
    this.props.navigation.navigate('Upload_en')
  }
rupiah(){
  if(this.state.totalbayar.toString().length==5){
      this.setState({
        totalbayar: this.state.totalbayar.toString().substring(0, 2)+'.'+this.state.totalbayar.toString().substring(2, 5),
      });
    }
   if(this.state.totalbayar.toString().length==6){
      this.setState({
        totalbayar: this.state.totalbayar.toString().substring(0, 3)+'.'+this.state.totalbayar.toString().substring(3, 6),
      });
    }
    else if(this.state.totalbayar.toString().length==7){
      this.setState({
        totalbayar: this.state.totalbayar.toString().substring(0, 1)+'.'+this.state.totalbayar.toString().substring(1, 4)+'.'+this.state.totalbayar.toString().substring(4, 7),
      });
    }
    else if(this.state.totalbayar.toString().length==8){
      this.setState({
        totalbayar: this.state.totalbayar.toString().substring(0, 2)+'.'+this.state.totalbayar.toString().substring(2, 5)+'.'+this.state.totalbayar.toString().substring(5, 8),
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
  let result   = await WebBrowser .openBrowserAsync('http://u392337208.hostingerapp.com?keyword='+this.state.no_pesanan);
  this.setState ({result  });
};
  componentDidMount() {
      
      this.loadings();

     }

 _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
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
          id: this.state.no_pesanan,
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
    let { image } = this.state;
    return (
      <Container>
          <Header style={{backgroundColor:'#3F81B5',}}>
         <View style={styles.view}>
         
          <Title style={{marginTop:15,}}>Transfer</Title>
          </View>
         </Header>
         <Content>
           <ListItem>
         <Body>
         <Card style={{borderRadius:10, alignContent:'center'}}> 
         <Body style={{margin:10}}>
          <CardItem style={{backgroundColor:'transparent', height:20}}>
            <Text style={{fontSize: 14,fontFamily:'SourceSansProRegular'}}>Batas Pembayaran : </Text>
          </CardItem>
          <CardItem style={{backgroundColor:'transparent', height:20}}>
            <Text style={{fontSize: 20, fontFamily:'SourceSansProBold',}}>{moment(this.state.limit).format('DD-MMM-YYYY HH:mm')}</Text>
          </CardItem> 
          </Body>
          </Card> 
          </Body>
          </ListItem>

          <ListItem>
           <Body>
            <Card style={{borderRadius:10}}>
              <CardItem style={{height:30,backgroundColor:'transparent', marginTop:10}}>
                <Text style={{fontSize: 18, fontFamily:'SourceSansProBold',}}>Mohon Transfer Ke</Text>
              </CardItem>
              <ListItem style={{height:60,}}>
                <Body>
                    <CardItem style={{height:20,}}>
                        <Icon active name="ios-card" />
                        <Text style={{fontSize: 16,fontFamily:'SourceSansProRegular'}}>No. Rekening</Text>
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
                        <Text style={{fontSize: 16,fontFamily:'SourceSansProRegular'}}>Nama Pemilik Rekening</Text>
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
                        <Text style={{fontSize: 18, fontFamily:'SourceSansProBold',}}>       Total</Text>
                        <Right>
                        <Text style={{fontSize: 19, fontFamily:'SourceSansProBold', color:'#ff0000'}}>Rp. {this.state.totalbayar}.-</Text>
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
                        <Text style={{fontSize: 16, fontFamily:'SourceSansProBold',}}>Menunggu Bukti Pembayaran</Text>
                    </CardItem>
                    <CardItem style={{marginTop:-10,}}>
                        <Text style={{fontSize: 14,fontFamily:'SourceSansProRegular'}}>Mohon unggah bukti pembayaran Anda untuk mempercepat proses konfirmasi dengan bank.</Text>
                    </CardItem>
                    <Button full onPress={this._pickImage} style={{backgroundColor:'#3F81B5', borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                <Text style={{fontFamily:'SourceSansProBold'}}>Unggah Bukti Pembayaran</Text>
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