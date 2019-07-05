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
    Radio
} from 'native-base';
import {
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  Alert,
  ToastAndroid,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import moment from 'moment'
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Constants, SQLite } from 'expo';
import Spinner from 'react-native-loading-spinner-overlay';

const db = SQLite.openDatabase('db.db');
export default class Runcian extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
                  
                  loading: true,
                   pilihBank:'',
                   KelasDewasa:'Dewasa',
                   KelasAnak:'Anak',
                   KelasInfant:'Infant',
                   indeks:0,
                   NumberHolder:0,
                   limit:'',
                   loading1:false,
                   loading2:false,
                   collapsed:false,
                   detail_penumpang_dewasa : [],
                   detail_penumpang_anak:[],
                   detail_penumpang_infant:[],
                   idx:0,
                 };
    AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                  AsyncDewasa:resultParsed.AsyncDewasa,
                  AsyncAnak:resultParsed.AsyncAnak,
                  AsyncInfant:resultParsed.AsyncInfant,
                  AsyncPotongan:resultParsed.AsyncPotongan,
                  AsyncIdKpnSaya:resultParsed.AsyncIdKpnSaya,
                  AsyncPenumpangVIP:resultParsed.AsyncPenumpangVIP,
                  AsyncPenumpangPPVIP:resultParsed.AsyncPenumpangPPVIP,
                  AsyncPenumpangEXE:resultParsed.AsyncPenumpangEXE,
                  AsyncPenumpangPPEXE:resultParsed.AsyncPenumpangPPEXE,
                    AsyncValuePenumpang:resultParsed.AsyncValuePenumpang,
                    AsyncValuePenumpangPP:resultParsed.AsyncValuePenumpangPP,
                    AsyncJenisTiket:resultParsed.AsyncJenisTiket,
                    AsyncIdKupon:resultParsed.AsyncIdKupon,
                    AsyncIdPromo:resultParsed.AsyncIdPromo,
                    AsyncHargaTiketDewasa:resultParsed.AsyncHargaTiketDewasa,
                    AsyncHargaTiketAnak:resultParsed.AsyncHargaTiketAnak,
                    AsyncHargaTiketInfant:resultParsed.AsyncHargaTiketInfant,
                    AsyncKelas: resultParsed.AsyncKelas,
                    AsyncTotalAkhir:resultParsed.AsyncTotalAkhir,
                    AsyncPDewasa1: resultParsed.AsyncPDewasa1, 
                    AsyncPDewasa2: resultParsed.AsyncPDewasa2, 
                    AsyncPDewasa3: resultParsed.AsyncPDewasa3, 
                    AsyncPDewasa4: resultParsed.AsyncPDewasa4, 
                    AsyncPDewasa5: resultParsed.AsyncPDewasa5,
                    AsyncPDewasa6: resultParsed.AsyncPDewasa6, 
                    AsyncPDewasa7: resultParsed.AsyncPDewasa7, 
                    AsyncPDewasa8: resultParsed.AsyncPDewasa8, 
                    AsyncPDewasa9: resultParsed.AsyncPDewasa9, 
                    AsyncPDewasa10: resultParsed.AsyncPDewasa10,
                    AsyncPAnak1:resultParsed.AsyncPAnak1,
                    AsyncPAnak2:resultParsed.AsyncPAnak2,
                    AsyncPAnak3:resultParsed.AsyncPAnak3,
                    AsyncPAnak4:resultParsed.AsyncPAnak4,
                    AsyncPAnak5:resultParsed.AsyncPAnak5,
                    AsyncPAnak6:resultParsed.AsyncPAnak6,
                    AsyncPAnak7:resultParsed.AsyncPAnak7,
                    AsyncPAnak8:resultParsed.AsyncPAnak8,
                    AsyncPAnak9:resultParsed.AsyncPAnak9,
                    AsyncPAnak10:resultParsed.AsyncPAnak10,
                    AsyncPInfant1:resultParsed.AsyncPInfant1,
                    AsyncPInfant2:resultParsed.AsyncPInfant2,
                    AsyncPInfant3:resultParsed.AsyncPInfant3,
                    AsyncPInfant4:resultParsed.AsyncPInfant4,
                    AsyncPInfant5:resultParsed.AsyncPInfant5,
                    AsyncPInfant6:resultParsed.AsyncPInfant6,
                    AsyncPInfant7:resultParsed.AsyncPInfant7,
                    AsyncPInfant8:resultParsed.AsyncPInfant8,
                    AsyncPInfant9:resultParsed.AsyncPInfant9,
                    AsyncPInfant10:resultParsed.AsyncPInfant10,
                    AsyncAlamat1: resultParsed.AsyncAlamat1,
                    AsyncAlamat2: resultParsed.AsyncAlamat2,
                    AsyncAlamat3: resultParsed.AsyncAlamat3,
                    AsyncAlamat4: resultParsed.AsyncAlamat4,
                    AsyncAlamat5: resultParsed.AsyncAlamat5,
                    AsyncAlamat6: resultParsed.AsyncAlamat6,
                    AsyncAlamat7: resultParsed.AsyncAlamat7,
                    AsyncAlamat8: resultParsed.AsyncAlamat8,
                    AsyncAlamat9: resultParsed.AsyncAlamat9,
                    AsyncAlamat10: resultParsed.AsyncAlamat10,
                    AsyncAlamatAnak1:resultParsed.AsyncAlamatAnak1,
                    AsyncAlamatAnak2:resultParsed.AsyncAlamatAnak2,
                    AsyncAlamatAnak3:resultParsed.AsyncAlamatAnak3,
                    AsyncAlamatAnak4:resultParsed.AsyncAlamatAnak4,
                    AsyncAlamatAnak5:resultParsed.AsyncAlamatAnak5,
                    AsyncAlamatAnak6:resultParsed.AsyncAlamatAnak6,
                    AsyncAlamatAnak7:resultParsed.AsyncAlamatAnak7,
                    AsyncAlamatAnak8:resultParsed.AsyncAlamatAnak8,
                    AsyncAlamatAnak9:resultParsed.AsyncAlamatAnak9,
                    AsyncAlamatAnak10:resultParsed.AsyncAlamatAnak10,
                    AsyncJenisKelamin1: resultParsed.AsyncJenisKelamin1,
                    AsyncJenisKelamin2: resultParsed.AsyncJenisKelamin2,
                    AsyncJenisKelamin3: resultParsed.AsyncJenisKelamin3,
                    AsyncJenisKelamin4: resultParsed.AsyncJenisKelamin4,
                    AsyncJenisKelamin5: resultParsed.AsyncJenisKelamin5,
                    AsyncJenisKelamin6: resultParsed.AsyncJenisKelamin6,
                    AsyncJenisKelamin7: resultParsed.AsyncJenisKelamin7,
                    AsyncJenisKelamin8: resultParsed.AsyncJenisKelamin8,
                    AsyncJenisKelamin9: resultParsed.AsyncJenisKelamin9,
                    AsyncJenisKelamin10: resultParsed.AsyncJenisKelamin10,
                    AsyncJenisKelaminAnak1:resultParsed.AsyncJenisKelaminAnak1,
                    AsyncJenisKelaminAnak2:resultParsed.AsyncJenisKelaminAnak2,
                    AsyncJenisKelaminAnak3:resultParsed.AsyncJenisKelaminAnak3,
                    AsyncJenisKelaminAnak4:resultParsed.AsyncJenisKelaminAnak4,
                    AsyncJenisKelaminAnak5:resultParsed.AsyncJenisKelaminAnak5,
                    AsyncJenisKelaminAnak6:resultParsed.AsyncJenisKelaminAnak6,
                    AsyncJenisKelaminAnak7:resultParsed.AsyncJenisKelaminAnak7,
                    AsyncJenisKelaminAnak8:resultParsed.AsyncJenisKelaminAnak8,
                    AsyncJenisKelaminAnak9:resultParsed.AsyncJenisKelaminAnak9,
                    AsyncJenisKelaminAnak10:resultParsed.AsyncJenisKelaminAnak10,
                    AsyncJenisKelaminInfant1:resultParsed.AsyncJenisKelaminInfant1,
                    AsyncJenisKelaminInfant2:resultParsed.AsyncJenisKelaminInfant2,
                    AsyncKewarganegaraan1: resultParsed.AsyncKewarganegaraan1,
                    AsyncKewarganegaraan2: resultParsed.AsyncKewarganegaraan2,
                    AsyncKewarganegaraan3: resultParsed.AsyncKewarganegaraan3,
                    AsyncKewarganegaraan4: resultParsed.AsyncKewarganegaraan4,
                    AsyncKewarganegaraan5: resultParsed.AsyncKewarganegaraan5,
                    AsyncKewarganegaraan6: resultParsed.AsyncKewarganegaraan6,
                    AsyncKewarganegaraan7: resultParsed.AsyncKewarganegaraan7,
                    AsyncKewarganegaraan8: resultParsed.AsyncKewarganegaraan8,
                    AsyncKewarganegaraan9: resultParsed.AsyncKewarganegaraan9,
                    AsyncKewarganegaraan10: resultParsed.AsyncKewarganegaraan10,
                    AsyncKewarganegaraanAnak1:resultParsed.AsyncKewarganegaraanAnak1,
                    AsyncKewarganegaraanAnak2:resultParsed.AsyncKewarganegaraanAnak2,
                    AsyncKewarganegaraanAnak3:resultParsed.AsyncKewarganegaraanAnak3,
                    AsyncKewarganegaraanAnak4:resultParsed.AsyncKewarganegaraanAnak4,
                    AsyncKewarganegaraanAnak5:resultParsed.AsyncKewarganegaraanAnak5,
                    AsyncKewarganegaraanAnak6:resultParsed.AsyncKewarganegaraanAnak6,
                    AsyncKewarganegaraanAnak7:resultParsed.AsyncKewarganegaraanAnak7,
                    AsyncKewarganegaraanAnak8:resultParsed.AsyncKewarganegaraanAnak8,
                    AsyncKewarganegaraanAnak9:resultParsed.AsyncKewarganegaraanAnak9,
                    AsyncKewarganegaraanAnak10:resultParsed.AsyncKewarganegaraanAnak10,
                    AsyncKewarganegaraanInfant1:resultParsed.AsyncKewarganegaraanInfant1,
                    AsyncKewarganegaraanInfant2:resultParsed.AsyncKewarganegaraanInfant2,
                    AsyncUmurDewasa1: resultParsed.AsyncUmurDewasa1,
                    AsyncUmurDewasa2: resultParsed.AsyncUmurDewasa2,
                    AsyncUmurDewasa3: resultParsed.AsyncUmurDewasa3,
                    AsyncUmurDewasa4: resultParsed.AsyncUmurDewasa4,
                    AsyncUmurDewasa5: resultParsed.AsyncUmurDewasa5,
                    AsyncUmurDewasa6: resultParsed.AsyncUmurDewasa6,
                    AsyncUmurDewasa7: resultParsed.AsyncUmurDewasa7,
                    AsyncUmurDewasa8: resultParsed.AsyncUmurDewasa8,
                    AsyncUmurDewasa9: resultParsed.AsyncUmurDewasa9,
                    AsyncUmurDewasa10: resultParsed.AsyncUmurDewasa10,
                    AsyncUmurAnak1:resultParsed.AsyncUmurAnak1,
                    AsyncUmurAnak2:resultParsed.AsyncUmurAnak2,
                    AsyncUmurAnak3:resultParsed.AsyncUmurAnak3,
                    AsyncUmurAnak4:resultParsed.AsyncUmurAnak4,
                    AsyncUmurAnak5:resultParsed.AsyncUmurAnak5,
                    AsyncUmurAnak6:resultParsed.AsyncUmurAnak6,
                    AsyncUmurAnak7:resultParsed.AsyncUmurAnak7,
                    AsyncUmurAnak8:resultParsed.AsyncUmurAnak8,
                    AsyncUmurAnak9:resultParsed.AsyncUmurAnak9,
                    AsyncUmurAnak10:resultParsed.AsyncUmurAnak10,
                    AsyncUmurInfant1:resultParsed.AsyncUmurInfant1,
                    AsyncUmurInfant2:resultParsed.AsyncUmurInfant2,
                    AsyncUmurInfant3:resultParsed.AsyncUmurInfant3,
                    AsyncUmurInfant4:resultParsed.AsyncUmurInfant4,
                    AsyncUmurInfant5:resultParsed.AsyncUmurInfant5,
                    AsyncUmurInfant6:resultParsed.AsyncUmurInfant6,
                    AsyncUmurInfant7:resultParsed.AsyncUmurInfant7,
                    AsyncUmurInfant8:resultParsed.AsyncUmurInfant8,
                    AsyncUmurInfant9:resultParsed.AsyncUmurInfant9,
                    AsyncUmurInfant10:resultParsed.AsyncUmurInfant10,
                    AsyncTotalHarga:resultParsed.AsyncTotalHarga,
                    AsyncKodeRute1:resultParsed.AsyncKodeRute1,
                    AsyncKodeRute2:resultParsed.AsyncKodeRute2,
                    AsyncId:resultParsed.AsyncId,
                    AsyncIdPulang :resultParsed.AsyncIdPulang,
                    AsyncTanggal:resultParsed.AsyncTanggal,
                    AsyncTanggal2:resultParsed.AsyncTanggal2,
                    AsyncAsyncKelas:resultParsed.AsyncAsyncKelas,
                    AsyncHargaVIP1:resultParsed.AsyncHargaVIP1,
                    AsyncHargaVIP2:resultParsed.AsyncHargaVIP2,
                    AsyncHargaEKS1:resultParsed.AsyncHargaEKS1,
                    AsyncHargaEKS2:resultParsed.AsyncHargaEKS2,
                    AsyncHargaBUS1:resultParsed.AsyncHargaBUS1,
                    AsyncHargaBUS2:resultParsed.AsyncHargaBUS2,
                    AsyncPassPelabuhan:resultParsed.AsyncPassPelabuhan,
                    AsyncAsuransi:resultParsed.AsyncAsuransi,
                    AsynctotalInfant:resultParsed.AsynctotalInfant,
                    AsyncIdUser:resultParsed.AsyncIdUser,
                    AsyncNama:resultParsed.AsyncNama,
                    AsyncNomorPesanan:resultParsed.AsyncNomorPesanan,
                    AsyncJenisKeberangkatan:resultParsed.AsyncJenisKeberangkatan,

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
    this.setState({ loading: false });
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.navigate('PesanTiket_en');
    return true;
}
  goBack=()=>{
 
    this.props.navigation.navigate('PesanTiket_en')
 
  }
  GenerateRandomNumber=()=>
  {
 
    var RandomNumber = Math.floor(Math.random() * 99999999) + 1 ;
 
    this.setState({
 
    NumberHolder : RandomNumber
 
    })
}
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
       this.GenerateRandomNumber();
      this.setState({loading1: !this.state.loading1});
      
      }, 800);

  }
  loadings2=()=>{

    
    setTimeout(()=>{
       this.props.navigation.navigate('Transfer_en')
      this.setState({loading2: !this.state.loading2});
      
      }, 300);

  }
  componentDidMount() {
    this.loadings()
    this.setState({limit:moment(new Date()).add(1,'hour').format('DD-MMM-YYYY HH:mm')});
    db.transaction(tx => {
        tx.executeSql('select * from detail_penumpang;',[],(_, { rows: { _array } }) => this.setState({ detail_penumpang_dewasa: _array }));
        tx.executeSql('select * from detail_penumpang_anak;',[],(_, { rows: { _array } }) => this.setState({ detail_penumpang_anak: _array }));
        tx.executeSql('select * from detail_penumpang_infant;',[],(_, { rows: { _array } }) => this.setState({ detail_penumpang_infant: _array }));
    });
  }
  UpdatePenumpang = () =>{


  fetch('http://expressbahari.com/php_mobile/update_penumpang.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      id: this.state.AsyncId,
      
      penumpangVIP: this.state.AsyncPenumpangVIP,
      penumpangEXE: this.state.AsyncPenumpangEXE,
     
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  if(this.state.AsyncJenisTiket=='PP'){
   this.UpdatePenumpangPP()
  }   
 if(this.state.AsyncJenisTiket=='Sekali Jalan'){
    this.UpdateKupon() 
  }
          
        }).catch((error) => {
        
        });
 
}
UpdatePenumpangPP = () =>{


  fetch('http://expressbahari.com/php_mobile/update_penumpangPP.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
  
      id2: this.state.AsyncIdPulang,
      
      penumpangVIPPP: this.state.AsyncPenumpangPPVIP,
      penumpangEXEPP: this.state.AsyncPenumpangPPEXE,
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
         
          
        }).catch((error) => {
        
        });
 this.UpdateKupon() 
}
UpdateKupon = () =>{


  fetch('http://expressbahari.com/php_mobile/update_kupon.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      id_kupon_saya: this.state.AsyncIdKpnSaya,
      id_kupon: this.state.AsyncIdKupon,
      id_user: this.state.AsyncNama,

    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
         
          
        }).catch((error) => {
        
        });
 this.UpdatePromo() 
}
UpdatePromo = () =>{


  fetch('http://expressbahari.com/php_mobile/update_promo.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      id_promo: this.state.AsyncIdPromo,
      id_user: this.state.AsyncNama,

    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
         
          
        }).catch((error) => {
        
        });
   this.UploadDetailPesanan();  
}

  saveData = () =>{
        
        let AsyncNama = this.state.AsyncNama;
        let AsyncLimit = this.state.limit;
        let AsyncEmail = this.state.AsyncEmail;
        let AsyncTotalHarga = this.state.AsyncTotalHarga;
        let AsyncUsername= this.state.AsyncUsername;
        let AsyncNomorPesanan  = this.state .AsyncNomorPesanan ; 
        let data = {
            AsyncUsername:AsyncUsername,
            AsyncLimit:AsyncLimit,
            AsyncNama:AsyncNama,
            AsyncEmail:AsyncEmail,
            AsyncTotalHarga:AsyncTotalHarga,
            AsyncNomorPesanan :AsyncNomorPesanan  ,

        }

        AsyncStorage.setItem('user', JSON.stringify(data));

        this.setState({
            
            AsyncUsername:AsyncUsername,
            AsyncNama:AsyncNama,
            AsyncLimit:AsyncLimit,
            AsyncEmail:AsyncEmail,
            AsyncTotalHarga:AsyncTotalHarga,
            AsyncNomorPesanan :AsyncNomorPesanan,  
        });
        this.inputPesanan()
    }
  inputPesanan = () =>{


  fetch('http://expressbahari.com/php_mobile/pesanan.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      id: this.state.AsyncNomorPesanan,
      limit_pembayaran:this.state.limit,
      potongan:this.state.AsyncPotongan,
      kode:this.state.NumberHolder,
      id_promo: this.state.AsyncIdPromo,
      id_kupon: this.state.AsyncIdKupon,
      kode_rute1: this.state.AsyncKodeRute1,
      kode_rute2: this.state.AsyncKodeRute2,
      jenis_tiket: this.state.AsyncJenisTiket,
      jadwal_id1:this.state.AsyncId,
      jadwal_id2:this.state.AsyncIdPulang,
      tanggal_pergi:this.state.AsyncTanggal,
      tanggal_pulang:this.state.AsyncTanggal2,
      id_user:this.state.AsyncNama,
      id_bank:this.state.pilihBank,
      total_bayar:this.state.AsyncTotalHarga,
      
      
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
 // Showing response message coming from server after inserting records.
    // ToastAndroid.show('Berhasil', ToastAndroid.SHORT); 
          
          
        }).catch((error) => {
        ToastAndroid.show('Error', ToastAndroid.SHORT); 
        });
  this.UpdatePenumpang();

}
  bayar=()=>{
  if(this.state.pilihBank==''){
   Alert.alert('Silahkan Pilih Bank')
  }
  else{

    this.setState({loading2: !this.state.loading2});
    this.saveData()
    }    
  }

UploadDetailPesanan(){
  if(this.state.AsyncDewasa==0){
    this.UploadDetailPesananAnak();
  }
  else{
    for (let i = 0; i < this.state.AsyncDewasa; i++) {
    fetch('http://expressbahari.com/php_mobile/detailpemesan.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      no_pesanan: this.state.AsyncNomorPesanan,
      indeks  : this.state.idx+1 ,
      nama: this.state.detail_penumpang_dewasa[i].nama_depan +' '+this.state.detail_penumpang_dewasa[i].nama_belakang,
      jenis_kelamin:this.state.detail_penumpang_dewasa[i].title,
      kwn:this.state.detail_penumpang_dewasa[i].kwn,
      kelas: this.state.AsyncKelas+' '+this.state.KelasDewasa ,
      biaya:this.state.AsyncHargaTiketDewasa,
      asuransi:this.state.AsyncAsuransi,
      pass_pelabuhan:this.state.AsyncPassPelabuhan,
    })
  
    }).then((response) => response.json())
          .then((responseJson) => {
    // Showing response message coming from server after inserting records.
    this.setState({idx:this.state.idx+1});
    if(this.state.AsyncDewasa==i+1){
      this.UploadDetailPesananAnak();
    }
              
    }).catch((error) => {
      console.error(error);
    });

   }
  }
  
    
}

UploadDetailPesananAnak(){
  if(this.state.AsyncAnak==0){
    this.UploadDetailPesananInfant();
  }
  else{
    for (let i = 0; i < this.state.AsyncAnak; i++) {
    fetch('http://expressbahari.com/php_mobile/detailpemesan.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      no_pesanan: this.state.AsyncNomorPesanan,
      indeks  : this.state.idx+1 ,
      nama: this.state.detail_penumpang_anak[i].nama_depan +' '+this.state.detail_penumpang_anak[i].nama_belakang,
      jenis_kelamin:this.state.detail_penumpang_anak[i].title,
      kwn:this.state.detail_penumpang_anak[i].kwn,
      kelas: this.state.AsyncKelas+' '+this.state.KelasAnak ,
      biaya:this.state.AsyncHargaTiketAnak,
      asuransi:this.state.AsyncAsuransi,
      pass_pelabuhan:this.state.AsyncPassPelabuhan,
    })
  
    }).then((response) => response.json())
          .then((responseJson) => {
    // Showing response message coming from server after inserting records.
     this.setState({idx:this.state.idx+1});
    if(this.state.AsyncAnak==i+1){
      this.UploadDetailPesananInfant();
    }       
    }).catch((error) => {
      console.error(error);
    });

   }
  }
  
    
}

UploadDetailPesananInfant(){
  for (let i = 0; i < this.state.AsyncInfant; i++) {
    fetch('http://expressbahari.com/php_mobile/detailpemesan.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      no_pesanan: this.state.AsyncNomorPesanan,
      indeks  : this.state.idx+1 ,
      nama: this.state.detail_penumpang_infant[i].nama_depan +' '+this.state.detail_penumpang_infant[i].nama_belakang,
      jenis_kelamin:this.state.detail_penumpang_infant[i].title,
      umur:this.state.detail_penumpang_infant[i].umur,
      kwn:this.state.detail_penumpang_infant[i].kwn,
      kelas: this.state.KelasInfant ,
      biaya:this.state.AsyncHargaTiketInfant,
      asuransi:0,
      pass_pelabuhan:0,
    })
  
    }).then((response) => response.json())
          .then((responseJson) => {
    // Showing response message coming from server after inserting records.     
    }).catch((error) => {
      console.error(error);
    });

  }
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
                  this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,}}>Payment</Title>
          </View>
        </Header>

         <Content style={{backgroundColor:'#F4F0E5'}}>
         <Spinner visible={this.state.loading2}/>
<Collapse isCollapsed={this.state.collapsed} onToggle={(isCollapsed)=>this.setState({collapsed:isCollapsed})}>>
                <CollapseHeader>
                <Card style={{width:'100%'}}>
                
                    <CardItem style={{height:40,}}>
                        <Text style={{fontSize: 16,fontWeight: 'bold',}}>TRANSFER</Text>
                        <Right style={{marginLeft:80}}>
                          <Icon active name="ios-arrow-forward" />
                        </Right>
                    </CardItem>
              
                    <View style={{backgroundColor:'#F4F0E5', width:'100%', height:2}}/>
                    
                    <CardItem>
                        <Image source={require('../images/logo_transfer.png')} style={{height:20, width:200}}/>
                    </CardItem>
                    
                </Card>
              </CollapseHeader>
              <CollapseBody style={{backgroundColor:'#ffffff'}}> 
              { 
                <View>
            <ListItem style={{backgroundColor:'#FFFFFF', marginTop:5}}>
            <Left style={{alignItems:'center', marginLeft:15}}>
                <TouchableOpacity onPress={() => this.setState({ pilihBank: 1 })}>
                    <Image source={require('../images/logo_bri.png')} style={{height:17, width:75}}/>
                 </TouchableOpacity>
            </Left>
                <Right>
                    <Radio onPress={() => this.setState({ pilihBank: 1 })}
              selected={this.state.pilihBank == '1'} />
                </Right>
            </ListItem>
            <ListItem style={{backgroundColor:'#FFFFFF', marginTop:5}}>
                <Left style={{alignItems:'center', marginLeft:15}}>
                <TouchableOpacity onPress={() => this.setState({ pilihBank: 2 })}>
                    <Image source={require('../images/logo_mandiri.png')} style={{height:18, width:62}}/>
                    </TouchableOpacity>
                </Left>
                <Right>
                    <Radio onPress={() => this.setState({ pilihBank: 2 })}
                  selected={this.state.pilihBank == '2' } />
                </Right>
            </ListItem> 
            <ListItem style={{backgroundColor:'#FFFFFF', marginTop:5}}>
                <Left style={{alignItems:'center', marginLeft:15}}>
                <TouchableOpacity onPress={() => this.setState({ pilihBank: 3 })}>
                    <Image source={require('../images/logo_bca.png')} style={{height:17, width:55}}/>
                    </TouchableOpacity>
                </Left>
                <Right>
                    <Radio onPress={() => this.setState({ pilihBank: 3 })}
                  selected={this.state.pilihBank == '3' } />
                </Right>
            </ListItem>
            <ListItem style={{backgroundColor:'#FFFFFF', marginTop:5}}>
                <Left style={{alignItems:'center', marginLeft:15}}>
                <TouchableOpacity onPress={() => this.setState({ pilihBank: 4 })}>
                    <Image source={require('../images/logo_bni.png')} style={{height:17, width:55}}/>
                    </TouchableOpacity>
                </Left>
                <Right>
                    <Radio onPress={() => this.setState({ pilihBank: 4 })}
                  selected={this.state.pilihBank == '4' } />
                </Right>
            </ListItem>
            </View>   
              }
              </CollapseBody>
            </Collapse>
            



            </Content>
            <Footer style={{backgroundColor:'#3F81B5'}}>
        
              <Button onPress={this.bayar} bold style={{width:'100%', backgroundColor:'#3F81B5', height:'100%'}}>
                 <View style={{width:'100%', alignItems:'center'}}>
                  <Text style={{color:'#ffffff',fontWeight: 'bold', alignItems:'center', fontSize:25}}>PAY</Text>
                  </View>
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