import React, { Component } from 'react';
import { Container, 
    Header, 
    Left,
    Content,
    Icon, 
    Button,
    List,
    ListItem, 
    Card,
    CardItem,
    Text,
    Body, 
    Title,
    Footer
} from 'native-base';
import {
  StyleSheet,
  View,
  AsyncStorage,
  ListView,
  Alert,
  TouchableOpacity
} from "react-native";


export default class Riwayat extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
    this.state = { loading: true }
    AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                  
                    AsyncNama:resultParsed.AsyncNama,
                });
            }
        });
  }
  GetItem = (kode_rute1,jadwal_id1,jenis_tiket) =>{
  
    this.setState({ koderute:kode_rute1})
    this.setState({ jadwal:jadwal_id1})
    this.setState({ Kelas: jenis_tiket})
  
 }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
BackFunction = () =>{
   this.props.navigation.navigate('MenuUtama')
 }

 riwayatPesanan=()=>{
   return fetch('http://u392337208.hostingerapp.com/User_Project/RiwayatPesanan.php', {
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
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      Alert.alert('Berhasil')
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      Alert.alert('Jadwal Tidak Tersedia, Silahkan Periksa Kembali Jadwal Anda')
      
    }); 
}
ListViewItemSeparator = () => {
  return (
    <View
      style={{

        height: .5,
        width: "100%",
        backgroundColor: "#ffffff",

      }}
    />
  );
}


  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
       this.riwayatPesanan,
      <Container>
        
         <Content>
        <View>
        <Text>{this.state.AsyncNama}</Text>
        
        </View>
        </Content>
        <Footer style={{backgroundColor:'#0377FE'}}>
          <Button transparent>
              <Text style={{color:'#ffffff'}}>Riwayat Pesanan</Text>
              
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