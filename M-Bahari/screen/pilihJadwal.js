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
  Avatar,
  Alert,
  ListView,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from "react-native";


export default class pilihJadwal extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
    this.state = { 
      textAnak:'',
      textInfant:'',
      hargaTiketDewasa:'',
      hargaTiketAnak:'',
      date: this.props.navigation.state.params.date,
      date2: this.props.navigation.state.params.date2,
      KelasTiket: this.props.navigation.state.params.KelasTiket,
      koderute:this.props.navigation.state.params.koderute,
      ValueDewasa:this.props.navigation.state.params.ValueDewasa,
      ValueAnak:this.props.navigation.state.params.ValueAnak,
      ValueInfant:this.props.navigation.state.params.ValueInfant,
      hargaPass:this.props.navigation.state.params.hargaPass,
      hargaAsuransi:this.props.navigation.state.params.hargaAsuransi,
      hargaInfant:this.props.navigation.state.params.hargaInfant,
      KodeAsal:this.props.navigation.state.params.KodeAsal,
      KodeTujuan:this.props.navigation.state.params.KodeTujuan,
      jadwal:this.props.navigation.state.params.jadwal,
      viewvisible:this.props.navigation.state.viewvisible?'Sekali jalan':'Pulang pergi',
      NomorPesanan:this.props.navigation.state.params.NomorPesanan,
      isLoading: true,
      tampilList:true,
      harga_vipDewasa:'',
      harga_vipAnak:'',
      harga_eksDewasa:'',
      harga_eksAnak:'',
      harga_busDewasa:'',
      harga_busAnak:'',
      idKeberangkatan:'',
      totalHarga:'',
      totalAkhir:'',
      totalDewasa:0,
      totalAnak:0,
      totalInfant:0,
      totalPenumpang:0,
      infant:'',
      ETA:'',
      ETD:'',
      Rute:'',
      Kapal:'',
    }
    AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                   
                    AsynctotalDewasa:resultParsed.AsynctotalDewasa,
                    AsyncKodeRute1:resultParsed.AsyncKodeRute1,
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
    
  }
ShowHideTextComponentView = () =>{

  if(this.state.tampilList == true)
  {
    this.setState({tampilList: false})
    
  }
  else if(this.state.tampilList == false)
  {
    this.setState({tampilList:true})
  }
 
}
BackFunction = () =>{
   this.props.navigation.navigate('PesanTiket')
 }


UserLoginFunction = () =>{
 
 const { koderute }  = this.state ;
 const { date }  = this.state ;
 
fetch('http://192.168.10.50/User_Project/Jadwal_List.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    kode_rute: koderute,
 
    tanggal: date
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {

            //Then open Profile activity and send user email to profile activity.
            
            //Alert.alert("Jadwal Tersedia");            

            //this.setState({
            //UserEmail: '',
            //UserPassword: ''
            //})
  
             

        }
        else{

          //Alert.alert("Jadwal Tidak Ditemukan");
          {this.ShowHideTextComponentView()}
        }
            

      }).catch((error) => {
        console.error(error);
      });
 
  }

 GenerateRandomNumber=()=>
{

var RandomNumber = Math.floor(Math.random() * 900) + 90 ;

this.setState({

  NumberHolder : RandomNumber

})
}

  componentDidMount() {


  const { date }  = this.state ;
  const { koderute }  = this.state ;
  return fetch('http://192.168.10.50/User_Project/tampil_jadwal.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    kode_rute: koderute,
    tanggal: date
 
  })
 
})  .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      Alert.alert('Jadwal Tidak Tersedia, Silahkan Periksa Kembali Jadwal Anda')
      this.props.navigation.navigate('PesanTiket')
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

 TampilAlert = () => {
   
     Alert.alert(
    'Info',
    'Apakah anda ingin melanjutkan ?',
    [
      {text: 'Tidak', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Ya', onPress: () => this.saveData()},
    ],
    { cancelable: false });
    return true;
}
GetItem = (id,harga_vip1,harga_vip2,harga_eks1,harga_eks2,harga_bus1,harga_bus2,rute,berangkat,tiba,tipe) =>{
  
    this.setState({ idKeberangkatan: id})
    this.setState({ harga_vipDewasa: harga_vip1})
    this.setState({ harga_vipAnak: harga_vip2})
    this.setState({ harga_eksDewasa: harga_eks1})
    this.setState({ harga_eksAnak: harga_eks2})
    this.setState({ harga_busDewasa: harga_bus1})
    this.setState({ harga_busAnak: harga_bus2})
    this.setState({ ETD: berangkat})
    this.setState({ ETA: tiba})
    this.setState({ Kapal: tipe})
      

    {this.TampilAlert()}
     
    
    
  
 }
hitung(){
  if(this.state.KelasTiket=="VIP"){
    this.setState({hargaTiketDewasa: this.state.harga_vipDewasa})
    this.setState({hargaTiketAnak: this.state.harga_vipAnak})
    this.setState({hargaTiketInfant: this.state.hargaInfant  })
    this.setState({totalDewasa : parseInt(this.state.ValueDewasa) * parseInt(this.state.harga_vipDewasa) + parseInt(this.state.ValueDewasa) * (parseInt(this.state.hargaPass) + parseInt(this.state.hargaAsuransi))}); 
    this.setState({totalAnak : parseInt(this.state.ValueAnak) * parseInt(this.state.harga_vipAnak) + parseInt(this.state.ValueAnak) * (parseInt(this.state.hargaPass) + parseInt(this.state.hargaAsuransi))}); 
    this.setState({totalInfant : parseInt(this.state.ValueInfant) * parseInt(this.state.hargaInfant) }); 
    this.HitungTotal()
  }
  else if(this.state.KelasTiket=="EXECUTIVE"){
    this.setState({hargaTiketDewasa: this.state.harga_eksDewasa})
    this.setState({hargaTiketAnak: this.state.harga_eksAnak})
    this.setState({hargaTiketInfant: this.state.hargaInfant  })
    this.setState({totalDewasa : parseInt(this.state.ValueDewasa) * parseInt(this.state.harga_eksDewasa)+ parseInt(this.state.ValueDewasa) * (parseInt(this.state.hargaPass) + parseInt(this.state.hargaAsuransi)) });
    this.setState({totalAnak : parseInt(this.state.ValueAnak) * parseInt(this.state.harga_eksAnak)+ parseInt(this.state.ValueAnak) * (parseInt(this.state.hargaPass) + parseInt(this.state.hargaAsuransi)) });
    this.setState({totalInfant : parseInt(this.state.ValueInfant) * parseInt(this.state.hargaInfant) });
    this.HitungTotal()
  }
  else if(this.state.KelasTiket=="BUSINESS"){
   this.setState({hargaTiketDewasa: this.state.harga_busDewasa})
   this.setState({hargaTiketAnak: this.state.harga_busAnak})
   this.setState({hargaTiketInfant: this.state.hargaInfant  })
   this.setState({totalDewasa : parseInt(this.state.ValueDewasa) * parseInt(this.state.harga_busDewasa)+ parseInt(this.state.ValueDewasa  ) * (parseInt(this.state.hargaPass) + parseInt(this.state.hargaAsuransi))}); 
   this.setState({totalAnak : parseInt(this.state.ValueAnak) * parseInt(this.state.harga_busAnak) + parseInt(this.state.ValueAnak) * (parseInt(this.state.hargaPass) + parseInt(this.state.hargaAsuransi))});
   this.setState({totalInfant : parseInt(this.state.ValueInfant) * parseInt(this.state.hargaInfant) });
   this.HitungTotal()
  }
}
HitungTotal(){
  this.setState({totalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant)})
  //this.setState({totalHarga : parseInt(this.state.totalDewasa) + parseInt(this.state.totalAnak) })
  if(this.state.ValueAnak=='0' && this.state.ValueInfant=='0')
  {

    this.setState({totalHarga : parseInt(this.state.totalDewasa) + 0 + 0 });
    
  }
  else if(this.state.ValueAnak!='0' && this.state.ValueInfant=='0'){
    this.setState({textAnak: 1})
    this.setState({totalHarga : parseInt(this.state.totalDewasa) + parseInt(this.state.totalAnak) });
    
  }
  else if(this.state.ValueAnak=='0' && this.state.ValueInfant!='0'){
   this.setState({textInfant: 1})
   this.setState({totalHarga : parseInt(this.state.totalDewasa) + parseInt(this.state.totalInfant)});
   
  }
  else if(this.state.ValueAnak!='0' && this.state.ValueInfant!='0'){
    this.setState({textAnak: 1})
    this.setState({textInfant: 1})
    this.setState({totalHarga : parseInt(this.state.totalDewasa) + parseInt(this.state.totalAnak) + parseInt(this.state.totalInfant)});

  }
}
 saveData = () =>{
  
  this.hitung()
        let AsyncEmail = this.state.AsyncEmail;
        let AsyncNomorPesanan = this.state.NomorPesanan;
        let AsyncDewasa = this.state.ValueDewasa;
        let AsyncAnak = this.state.ValueAnak;
        let AsyncInfant = this.state.ValueInfant;
        let AsyncKelas = this.state.KelasTiket;
        let AsyncHargaVIP1 = this.state.harga_vipDewasa;
        let AsyncHargaVIP2 = this.state.harga_vipAnak;
        let AsyncHargaEKS1 = this.state.harga_eksDewasa;
        let AsyncHargaEKS2 = this.state.harga_eksAnak;
        let AsyncHargaBUS1 = this.state.harga_busDewasa;
        let AsyncHargaBUS2 = this.state.harga_busAnak;
        let AsyncPassPelabuhan = this.state.hargaPass;
        let AsyncAsuransi = this.state.hargaAsuransi;
        let AsyncId= this.state.idKeberangkatan;
        let AsynctotalDewasa = this.state.totalDewasa;
        let AsynctotalAnak = this.state.totalAnak;
        let AsynctotalInfant = this.state.totalInfant;
        let AsyncTotalHarga = this.state.totalHarga;
        let AsynctextAnak = this.state.textAnak;
        let AsynctextInfant = this.state.textInfant;
        let AsyncRandomNumber = this.state.NumberHolder;
        let AsyncTotalAkhir = this.state.totalAkhir;
        let AsyncKodeRute1 = this.state.koderute;
        let AsyncTanggal = this.state.date;
        let AsyncTanggal2 = this.state.date2;
        let AsyncJenisTiket = this.state.jenisTiket;
        let AsyncETD = this.state.ETD;
        let AsyncETA = this.state.ETA;
        let AsyncJadwal = this.state.jadwal;
        let AsyncKapal = this.state.Kapal;
        let AsyncNama = this.state.AsyncNama;
        let AsyncTotalPenumpang = this.state.totalPenumpang;
        let AsyncHargaTiketDewasa = this.state.hargaTiketDewasa;
        let AsyncHargaTiketAnak = this.state.hargaTiketAnak;
        let AsyncHargaTiketInfant = this.state.hargaTiketInfant ;
        let AsyncJenisKeberangkatan = this.state.viewvisible?'Sekali jalan':'Pulang pergi';
        let data = {
            AsyncHargaTiketDewasa:AsyncHargaTiketDewasa,
            AsyncHargaTiketAnak:AsyncHargaTiketAnak,
            AsyncHargaTiketInfant:AsyncHargaTiketInfant,
            AsyncDewasa: AsyncDewasa,
            AsyncAnak: AsyncAnak,
            AsyncInfant: AsyncInfant,
            AsyncKelas: AsyncKelas,
            AsyncHargaVIP1:AsyncHargaVIP1,
            AsyncHargaVIP2:AsyncHargaVIP2,
            AsyncHargaEKS1:AsyncHargaEKS1,
            AsyncHargaEKS2:AsyncHargaEKS2,
            AsyncHargaBUS1:AsyncHargaBUS1,
            AsyncHargaBUS2:AsyncHargaBUS2,
            AsyncId:AsyncId,
            AsyncPassPelabuhan:AsyncPassPelabuhan,
            AsyncAsuransi:AsyncAsuransi,
            AsynctotalDewasa:AsynctotalDewasa,
            AsynctotalAnak:AsynctotalAnak,
            AsynctotalInfant:AsynctotalInfant,
            AsyncTotalHarga:AsyncTotalHarga,
            AsynctextInfant:AsynctextInfant,
            AsynctextAnak:AsynctextAnak,
            AsyncRandomNumber:AsyncRandomNumber,
            AsyncTotalAkhir:AsyncTotalAkhir,
            AsyncKodeRute1:AsyncKodeRute1,
            AsyncTanggal:AsyncTanggal,
            AsyncTanggal2:AsyncTanggal2,
            AsyncJenisTiket:AsyncJenisTiket,
            AsyncJadwal:AsyncJadwal,
            AsyncETD:AsyncETD,
            AsyncETA:AsyncETA,
            AsyncKapal:AsyncKapal,
            AsyncNama:AsyncNama,
            AsyncTotalPenumpang,
            AsyncJenisKeberangkatan:AsyncJenisKeberangkatan,
            AsyncNomorPesanan:AsyncNomorPesanan,
            AsyncEmail  :AsyncEmail ,

        }

        AsyncStorage.setItem('user', JSON.stringify(data));

        this.setState({
          AsyncEmail  :AsyncEmail ,
            AsyncHargaTiketDewasa:AsyncHargaTiketDewasa,
            AsyncHargaTiketAnak:AsyncHargaTiketAnak,
            AsyncHargaTiketInfant:AsyncHargaTiketInfant,
            AsyncDewasa: AsyncDewasa,
            AsyncAnak: AsyncAnak,
            AsyncInfant: AsyncInfant,
            AsyncKelas: AsyncKelas,
            AsyncHargaVIP1:AsyncHargaVIP1,
            AsyncHargaVIP2:AsyncHargaVIP2,
            AsyncHargaEKS1:AsyncHargaEKS1,
            AsyncHargaEKS2:AsyncHargaEKS2,
            AsyncHargaBUS1:AsyncHargaBUS1,
            AsyncHargaBUS2:AsyncHargaBUS2,
            AsyncId:AsyncId,
            AsyncPassPelabuhan:AsyncPassPelabuhan,
            AsyncAsuransi:AsyncAsuransi,
            AsynctotalDewasa:AsynctotalDewasa,
            AsynctotalAnak:AsynctotalAnak,
            AsynctotalInfant:AsynctotalInfant,
            AsyncTotalHarga:AsyncTotalHarga,
            AsynctextAnak:AsynctextAnak,
            AsynctextInfant:AsynctextInfant,
            AsyncRandomNumber:AsyncRandomNumber,
            AsyncTotalAkhir:AsyncTotalAkhir,
            AsyncKodeRute1:AsyncKodeRute1,
            AsyncTanggal:AsyncTanggal,
            AsyncTanggal2:AsyncTanggal2,
            AsyncJenisTiket:AsyncJenisTiket,
            AsyncJadwal:AsyncJadwal,
            AsyncETD:AsyncETD,
            AsyncETA:AsyncETA,
            AsyncKapal:AsyncKapal,
            AsyncNama:AsyncNama,
            AsyncTotalPenumpang,
            AsyncJenisKeberangkatan:AsyncJenisKeberangkatan,
            AsyncNomorPesanan:AsyncNomorPesanan,
        });
      this.props.navigation.navigate("Rincian")
    }
  
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (

      <Container>
        <Header style={{backgroundColor:'#3F81B5',}}>
         <View style={styles.view}>
         {this.UserLoginFunction()}
        
          <Left>
            <Button transparent onPress={this.BackFunction}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,marginLeft:40}}>Pilih Jadwal</Title>
          </View>
         </Header>
         <Content>
         
          {

          this.state.tampilList ?<ListView

        dataSource={this.state.dataSource}

        renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) =>

        <View style={{width:'100%',alignItems:'center'}}>
         <TouchableOpacity onPress={this.GetItem.bind(this, rowData.id,rowData.harga_vip1,rowData.harga_vip2,rowData.harga_eks1,rowData.harga_eks2,rowData.harga_bus1,rowData.harga_bus2,rowData.rute,rowData.berangkat,rowData.tiba,rowData.tipe)} >
          <Card style={{width:'100%'}}>
              <CardItem>
                <Icon active name="md-boat" />
                <Text style={{fontSize: 20,}}>{' ' + rowData.tipe}</Text>
              </CardItem>
              <CardItem style={{backgroundColor:'#3F81B5'}}>
                <Text style={{color:'#ffffff', fontSize: 18,}}>{this.state.KodeAsal}</Text>
                <Text style={{color:'#ffffff', fontSize: 14,}}> | </Text>
                <Text style={{color:'#ffffff', fontSize: 14,}}>{'ETD : ' + rowData.berangkat}</Text>
                <Text>     </Text>
                <Icon active name="ios-arrow-round-forward-outline" style={{color:'#ffffff'}} />
                <Text style={{color:'#ffffff', fontSize: 18,}}>{this.state.KodeTujuan}</Text>
                <Text style={{color:'#ffffff', fontSize: 14,}}> | </Text>
                <Text style={{color:'#ffffff', fontSize: 14,}}>{'ETA : ' + rowData.tiba}</Text>
              </CardItem>

              </Card>

         

         </TouchableOpacity>

    
</View>
        }
      />:null
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