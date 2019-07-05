import React, { Component } from 'react';
import { Container, 
    Header, 
    Left,
    Content,
    Icon, 
    Button,
    Tab, 
    Tabs, 
    TabHeading, 
    Text,
    Body, 
    Title,
    Footer,
    Segment,
    Card,
    CardItem,

} from 'native-base';
import { AppRegistry, TextInput,Keyboard, StyleSheet, ActivityIndicator, ListView,  View, Alert,TouchableOpacity,AsyncStorage} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RadioButton from 'react-native-radio-button' 
import NumericInput from 'react-native-numeric-input';
import DatePicker from 'react-native-datepicker'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Modal from "react-native-modal";
export default class CekJadwal extends Component {
    static navigationOptions = {
    header:null
  }
  constructor(props) {
    super(props);
    this.state = {
                  isLoading:true, 
                   dialogVisible: false,
                   viewvisible: false,
                   viewvisible2: false, 
                   isModalVisible: false, 
                   isModalVisible2:false, 
                   ModalVisibleStatus: false,
                   ModalVisibleStatus2: false,
                   KelasTiket:'',
                   hargaPass:'',
                   hargaAsuransi:'',
                   hargaInfant:'',
                   date:'',
                   date2:'',
                   jadwal:'',
                   asal:'Palembang (PLG)',
                   tujuan:'Muntok (MTK)',
                   KodeAsal:'',
                   KodeTujuan:'',
                   selected: 'key',
                   ValueDewasa:'0',
                   ValueAnak:'0',
                   ValueInfant:'0',
                   baseng:[],
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

  
  
  state = {colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false, };

  toggleSwitch = value => {
    this.setState({ switchValue: value });

    
  };
saveData = () =>{
        
        let AsyncNama = this.state.AsyncNama;
        let data = {
      
            AsyncNama:AsyncNama,

        }

        AsyncStorage.setItem('user', JSON.stringify(data));

        this.setState({
            
      
            AsyncNama:AsyncNama,
        });
    
    }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
  change= ()=>{
    if(this.state.KodeAsal=='PLG'){
      this.setState({KodeAsal:'MTK'})
      this.setState({KodeTujuan:'PLG'})
      this.setState({asal:'Muntok'})
      this.setState({tujuan:'Palembang'})
      this.setState({jadwal:'Muntok-Palembang'})
      this.setState({koderute:'MTKPLG'})
    }
    if(this.state.KodeAsal=='MTK'){
      this.setState({KodeAsal:'PLG'})
      this.setState({KodeTujuan:'MTK'})
      this.setState({asal:'Palembang'})
      this.setState({tujuan:'Muntok'})
      this.setState({jadwal:'Palembang-Muntok'})
      this.setState({koderute:'PLGMTK'})
    }
  }
_toggleModal = () =>{
    
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
HeaderModal = () =>{
    
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });
  }
openDialog = (show) => {
    this.setState({ showDialog: show });
}
tambahValueDewasa=()=>{
  if(this.state.ValueDewasa<10){
   this.setState({ValueDewasa : parseInt(this.state.ValueDewasa) + 1  });
  }
}
kurangValueDewasa=()=>{
  if(this.state.ValueDewasa>0){
   this.setState({ValueDewasa : parseInt(this.state.ValueDewasa) - 1  });
 }
}
 tambahValueAnak=()=>{
  if(this.state.ValueAnak<10){
   this.setState({ValueAnak : parseInt(this.state.ValueAnak) + 1  });
  }
}
kurangValueAnak=()=>{
  if(this.state.ValueAnak>0){
   this.setState({ValueAnak : parseInt(this.state.ValueAnak) - 1  });
 }
}
 tambahValueInfant=()=>{
  if(this.state.ValueInfant<10 && this.state.ValueDewasa > this.state.ValueInfant){
   this.setState({ValueInfant : parseInt(this.state.ValueInfant) + 1  });
  }
}
BackFunction = () =>{
   this.props.navigation.navigate('home')
 }
kurangValueInfant=()=>{
  if(this.state.ValueInfant>0){
   this.setState({ValueInfant : parseInt(this.state.ValueInfant) - 1  });
 }
}
    componentDidMount() {

    return fetch('http://192.168.10.50/User_Project/rute_list.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
         
        });
      })
      .catch((error) => {
        console.error(error);
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
  Navigate_To_Second_Activity=(rute,kode_asal,kode_tujuan,asal,tujuan,kelas_business,kode_rute,pass_pelabuhan, asuransi,infant)=>
    {
      
      this.setState({ jadwal: rute})
      this.setState({ KodeAsal: kode_asal})
      this.setState({ KodeTujuan: kode_tujuan})
      this.setState({asal: asal})
      this.setState({tujuan: tujuan})
      this.setState({KelasBisnis: kelas_business})
      this.setState({koderute: kode_rute})
      this.setState({hargaPass: pass_pelabuhan})
      this.setState({hargaAsuransi: asuransi})
      this.setState({hargaInfant: infant})
      //Sending the JSON ListView Selected Item Value On Next Activity.
      this._toggleModal({JSON_ListView_Clicked_Item: kelas_business,JSON_ListView_Clicked_Item: kode_asal,JSON_ListView_Clicked_Item: rute,JSON_ListView_Clicked_Item: kode_tujuan,JSON_ListView_Clicked_Item: asal,JSON_ListView_Clicked_Item: tujuan,JSON_ListView_Clicked_Item: kode_rute,JSON_ListView_Clicked_Item: asuransi,JSON_ListView_Clicked_Item: pass_pelabuhan,JSON_ListView_Clicked_Item: infant});
      
    }
    onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  ShowModalFunction(visible) {
 
    this.setState({ModalVisibleStatus: visible});
    
  }
  ShowModalFunction2(visible) {
 
    this.setState({ModalVisibleStatus2: visible});
    
  }
   Periksa=()=>{
  if(this.state.ValueDewasa==0 )
   {
    Alert.alert('Penumpang dewasa belum terisi')
   }
   else if(this.state.KelasTiket=="" )
   {
    Alert.alert('Kelas Tiket belum terisi')
   }     
 
 else{
  this.TampilAlert()
 } 
}
 TampilAlert = () => {
     Alert.alert(
    'Info',
    'Apakah anda ingin melanjutkan ?',
    [
      {text: 'Tidak', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Ya', onPress: () => this.PilihJadwalFunction()},
    ],
    { cancelable: false });
    return true;
}
 PilihJadwalFunction = () =>{
    this.saveData()
    this.props.navigation.navigate('pilihJadwal',{ValueDewasa:this.state.ValueDewasa,
    ValueAnak:this.state.ValueAnak,
    ValueInfant:this.state.ValueInfant,
    date:this.state.date,
    date2:this.state.date2,
    koderute:this.state.koderute,
    ValueDewasa:this.state.ValueDewasa,
    hargaPass:this.state.hargaPass,
    hargaAsuransi:this.state.hargaAsuransi,
    hargaInfant:this.state.hargaInfant,
    KelasTiket:this.state.KelasTiket,
    KodeAsal:this.state.KodeAsal,
    KodeTujuan:this.state.KodeTujuan,
    jadwal:this.state.jadwal,
    viewvisible:this.state.viewvisible?'Sekali jalan?':'Pulang pergi?'
  });
 
 }  

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    
     return(
        <Container style={{backgroundColor:'#ffffff'}}>
        <Header style={{backgroundColor:'#0D2E57', marginTop:0,}}>
         <View style={styles.view}>
          <Left>
            <Button transparent onPress={this.BackFunction}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15, marginLeft:50,}}>Pesan Tiket</Title>
          </View>
         </Header>
         <Content>

        
              <View style={{alignItems: 'center',}}>
  
  <View style={styles.view}>
    <Modal backdropColor='white' transparent={false}  isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            
            <ListView
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}
 
          renderRow={(rowData) => <TouchableOpacity 
          onPress={this.Navigate_To_Second_Activity.bind(this, rowData.rute,rowData.kode_asal,rowData.kode_tujuan,rowData.asal,rowData.tujuan,rowData.kelas_business,rowData.kode_rute,rowData.asuransi, rowData.pass_pelabuhan, rowData.infant)} >
          <Card>
              <CardItem>
                <Icon active name="md-boat" />
                 <Text style={{fontSize: 20,}}>{' ' + rowData.rute}</Text>
              </CardItem>
          </Card>

          </TouchableOpacity>}
              />
          </View>


        </Modal>

      <View style={styles.cardss}>
        <Text style={{fontSize: 12,}}>Asal</Text>
      </View>
      <View style={styles.cardss}>
        <Text style={{fontSize: 12,}}>Tujuan</Text>
      </View>
      </View>
      <View style={styles.view}>
      
        <Card style={styles.card}>
        <TouchableOpacity onPress={this._toggleModal}>
        <CardItem style={styles.carditem}>
            <Text style={{fontSize: 25, marginTop: 5,}}>{this.state.KodeAsal}</Text>
           </CardItem>
           <CardItem style={styles.carditem}>
             <Text style={{fontSize: 12,}}>{this.state.asal}</Text>
           </CardItem>
           </TouchableOpacity>
         </Card>
         <View>
             <Icon  style={{marginTop: 15, marginLeft: 2, marginRight: 2,}} name="arrow-forward"/>
         </View>
         <Card style={styles.card}>
          <TouchableOpacity onPress={this._toggleModal}>
          <CardItem style={styles.carditem}>
            <Text style={{fontSize: 25, marginTop: 5,}}>{this.state.KodeTujuan}</Text>
           </CardItem>
           <CardItem style={styles.carditem}>
             <Text style={{fontSize: 12,}}>{this.state.tujuan}</Text>
           </CardItem>
           </TouchableOpacity>
         </Card>
    </View>

 
    </View>

 

        </Content>
        <Footer style={{backgroundColor:'#0D2E57'}}>
          <Button transparent>
              <Text onPress={this.Periksa} style={{color:'#ffffff'}}>Pilih Jadwal</Text>
              
            </Button>
        </Footer>
      </Container>
     );
  }
}


const styles = StyleSheet.create({
card:{
    width: '40%',
    alignItems: 'center',
  },
  cardss:{
    width: '50%',
    alignItems: 'center',
    marginTop:10,
  },
  carditem:{
    height:10,
  },
  view:{
    flex: 1, 
    flexDirection: 'row',
  },
  segmen:{
    width:'90%',
    backgroundColor:'#0D2E57',
    marginTop:20,
  },
  
  viewkelas:{
    width: '30%',
    alignItems: 'center',
    marginTop:10,
    marginLeft:25,
  },
  tabStyle: {
          //custom styles
          height:60,
          backgroundColor:'#ffffff',
          },
  tabTextStyle: {
          color:'#0D2E57',
          //custom styles
        },
activeTabStyle: {
          //custom styles
          backgroundColor:'#0D2E57',
          },
  tabsContainerStyle: {
          //custom styles
          borderRadius:0,
          borderColor:'#0D2E57'
        },
})
AppRegistry.registerComponent('CekJadwal', () => CekJadwal);