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
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Clipboard,
  ToastAndroid,
  BackHandler,
} from "react-native";
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SQLite } from 'expo';

const db = SQLite.openDatabase('db.db');

const slides = [
  {
    key: 'somethun',
    title: 'Pesan Tiket',
    text: 'Pesan tiket anda sekarang dimenu home, tinggal tap di tombol Pesan Tiket kemudian isi data secara berurutan (Rute, Tanggal Keberangkatan, Jumlah Penumpang, dan Kelas). Setelah semuanya terisi akan muncul Ringkasan Pesanan anda, kemudian tap tombol Pesan Tiket untuk melanjutkan pembayaran.',
    icon: require('../images/tutorial1.png'),
    colors: ['#3F81B5', '#B066FE'],
  },
  {
    key: 'somethun1',
    title: 'Pembayaran',
    text: 'Setelah melakukan Pesan Tiket, akan Ada beberapa pilihan untuk melakukan pembayaran pesanan anda. Setelah anda menentukan pilihan untuk pembayaran kemudian tap tombol Bayar.',
    icon: require('../images/tutorial2.png'),
    colors: ['#3F81B5', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'E-Ticket',
    text: 'Anda bisa melihat E-ticket yang sudah aktif pada menu Pesanan, kemudian pilih rute E-ticket anda dan akan muncul detail E-ticket anda.',
    icon: require('../images/tutorial3.png'),
    colors: ['#3F81B5', '#4F00BC'],
  },
  {
    key: 'somethun3',
    title: 'Kursi',
    text: 'Anda bisa memilih tempat duduk anda pada detail E-tiket anda, yang akan muncul popup pilih kursi apabila anda belum memilih kursi. Setelah popup muncul tap pilih kursi dan akan muncul kursi kapal sesuai dengan kelasnya.',
    icon: require('../images/tutorial4.png'),
    colors: ['#3F81B5', '#4F00BC'],
  },
];

export default class Runcian extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = { loading: true,

  };
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
    db.transaction(tx => {
      tx.executeSql('insert into tutorial (status) values (?)', ['1']);
    });
  }


handleBackButtonClick() {
  db.transaction(tx => {
    tx.executeSql(
      'update tbl_settings set s_setting = 1 where id=1;'
    );
  });
  setTimeout(()=>{

      this.props.navigation.goBack()
    
  }, 100);
  

}

_renderItem = props => (
  <View style={{backgroundColor:'#F4F0E5', height:'100%', alignItems:'center'}}>
  <View style={{height:20, width:'100%', backgroundColor:'#3F81B5'}}></View>
  <View style={{height:'40%', width:'100%', backgroundColor:'#3F81B5', alignItems:'center'}}>
  <Image source={props.icon} style={{width:'100%', height:220, marginTop:25}}/>
  </View>
  <Image source={require('../images/bgslide.png')} style={{width:'100%', height:40,marginTop:-3,}}/>
    <View style={{alignItems:'center', height:60, width:60, backgroundColor:'#fff', borderRadius:50, justifyContent:'center',position:'relative',marginTop:-30}}>
        <Image source={require('../images/pesan_tiket.png')} style={{width:30, height:30}}/>
    </View>
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  </View>
);

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
  
      <Container>
        <Content> 
        <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        bottomButton
        buttonStyle={{backgroundColor:'#3F81B5', borderRadius:20}}
        dotStyle={{backgroundColor:'#3F81B5'}}
        activeDotStyle={{backgroundColor:'#0D2E57'}}
        nextLabel='Selanjutnya'
        doneLabel='Mulai'
        onDone={this.handleBackButtonClick}
      />
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

  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: '#000',
    backgroundColor: 'transparent',
    fontFamily:'SourceSansProRegular',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontFamily:'SourceSansProBold',
    color: '#000',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 10,
    marginTop:10,
  }
})