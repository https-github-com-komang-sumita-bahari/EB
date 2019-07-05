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
    FooterTab, 
    Thumbnail,
    Picker
} from 'native-base';
import {
  Switch,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ListView,
  Alert,
  AsyncStorage,
  FlatList,
  ToastAndroid,
  StatusBar,
  BackHandler,
  Image,
} from "react-native";
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import moment from 'moment'
import { BottomSheet } from 'react-native-btr';
import Modal from "react-native-modal";
import DateTimePicker from 'react-native-modal-datetime-picker';
import DropdownMenu from 'react-native-dropdown-menu';
import DatePicker from 'react-native-datepicker'
import { Dialog } from 'react-native-simple-dialogs';
import Spinner from 'react-native-loading-spinner-overlay';
import Reinput from "reinput";
import {Dropdown } from 'react-native-material-dropdown';
import Accordion from 'react-native-collapsible/Accordion';
import { Constants, SQLite } from 'expo';

const db = SQLite.openDatabase('db.db');

const title =[{
  value: 'Tuan/Mr.',
},{
  value: 'Nyonya/Mrs.',
},{
  value: 'Nona/Ms.',
}];
export default class PesanTiket extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.typographyRef = this.updateRef.bind(this, 'typography');
    this.onChangeText2 = this.onChangeText2.bind(this);
    this.typographyRef2 = this.updateRef2.bind(this, 'kewarganegaraan');
    this.onChangeText3 = this.onChangeText3.bind(this);
    this.typographyRef3 = this.updateRef3.bind(this, 'gender');
    this.array = [],
    this.state = { 
      typography: '',
      SECTIONS : [
        
      ],
      activeSections: [0],
                   schedule:[],
                   data1:[],
                   data2:[],
                   kupon_saya:[{}],
                   dataPromo:[{}],
                   HideKupon:false,
                   dataETAPergi:'',
                   dataETAPulang:'',
                   KapTiketVIP:0,
                   rpTotalHarga:0,
                   rpTotalHargaPP:0,
                   rpHargaDewasa:0,
                   rpHargaAnak:0,
                   rpHargaDewasaPP:0,
                   rpHargaAnakPP:0,
                   rpHargaInfant:0,
                   KapTiketEXE:0,
                   colorbg:'#3F81B5',
                   SisaTiketVIP:0,
                   SisaTiketEXE:0,
                   JT:0,
                   PnpEXE:0,
                   PnpVIP:0,
                   KapTiketVIPPP:0,
                   KapTiketEXEPP:0,
                   SisaTiketVIPPP:0,
                   SisaTiketEXEPP:0,
                   PnpEXEPP:0,
                   PnpVIPPP:0,
                   rpTotalHarga:0,
                   rpTotalHargaPP:0,
                   rpTotalDiskon:0,
                   idkupon:0,
                   idkpnSaya:0,
                   iduser:0,
                   status:0,
                   NomorOrder:0,
                   NomorPesanan:0,
                   bgcolor:'#fcfbf8',
                   totalHargaPromo:0,
                   temptotalHargaPromo:0,
    totalDiskon:0,
    tempTotalHarga:0,
    tempTotalHargaPP:0,
                   BottomPopUp:false,
                   BottomPopUp2:false,
                   dialogVisible: false,
                   HideTotalBayarDiskon:false,
                   isModalVisiblePromo:false,
                   dialogVisible2: false,
                   viewvisible: false,
                   viewvisiblePergi: false,
                   viewvisiblePenumpang:false,
                   viewvisibleKelas: false,
                   viewvisiblePP: false,
                   viewvisible2: false, 
                   isModalVisible: false,
                   ModalDewasa: false, 
                   Modalanak: false, 
                   ModalInfant: false,
                   isModalVisible2:false, 
                   ModalVisibleStatus: false,
                   ModalVisibleStatus2: false,
                   tampilJadwal:false,
                   tampilJadwalPP:false,
                   tampilPP:false,
                   tampilJadwal2:false,
                   tampilUbahJadwal:false,
                   tampilUbahJadwal2:false,
                   tampilDetailHarga:false,
                   tampilDetailHargaPP:false,
                   loading1:false,
                   loading2:false,
                   loading3:false,
                   transitHide:false,
                   footerhide:true,
                   collapsed2:false,
                   collapsed3:false,
                   HideTotalBayar:false,
                   HideTotalBayarPP:false,
                   HideTotalPesananPP:false,
                   HideDetailPesananPP:false,
                   ButtonStateHolder:true,
                   hideTombolGunakan:true ,  
                   KelasTiket:'',
                   JenisTiket:'Sekali Jalan',
                   hargaPass:'',
                   hargaAsuransi:'',
                   hargaInfant:'',
                   hargaPass2:'',
                   hargaAsuransi2:'',
                   hargaInfant2:'',
                   date: new Date(),
                   date2:new Date(),
                   jadwal:'',
                   asal:'Asal',
                   tujuan:'Tujuan',
                   jadwal2:'',
                   asal2:'',
                   tujuan2:'',

                   namaPelabuhan:'Pelabuhan',
                   namaPelabuhan2:'Pelabuhan',
                   KodeAsal:'',
                   KodeAsal2:'',
                   koderute:'',
                   koderute2:'',
                   KodeTujuan:'',
                   KodeTujuan2:'',
                   selected: 'key',
                   ValueDewasa:0,
                   ValueAnak:0,
                   ValueInfant:0,
                   baseng:[],
                   lengthJadwal:[],
                   listPP:[],
                   tampilDetailJadwal1:[],
                   tampilDetailJadwal2:[],
                   listPP:[],
                   arrayPP:[],
                   textAnak:'',
                   textInfant:'',
                   textAnakPP:'',
                   textInfantPP:'',
                   hargaTiketDewasa:'',
                   hargaTiketAnak:'',
                   harga_vipDewasa:'',
                   harga_vipAnak:'',
                   harga_eksDewasa:'',
                   harga_eksAnak:'',
                   harga_busDewasa:'',
                   harga_busAnak:'',
                   hargaTiketDewasaPP:'',
                   hargaTiketAnakPP:'',
                   harga_vipDewasaPP:'',
                   harga_vipAnakPP:'',
                   harga_eksDewasaPP:'',
                   harga_eksAnakPP:'',
                   harga_busDewasaPP:'',
                   harga_busAnakPP:'',
                   idKeberangkatan:0,
                   idPulang:0,
                   totalHarga:'',
                   totalHargaPP:'',
                   totalAkhir:'',
                   totalDewasa:0,
                   totalAnak:0,
                   totalInfant:0,
                   totalPenumpang:0,
                   totalDewasaPP:0,
                   totalAnakPP:0,
                   totalInfantPP:0,
                   totalPenumpangPP:0,
                   totalPenumpangEXE:0,
                   totalPenumpangVIP:0,
                   totalPenumpangPPEXE:0,
                   totalPenumpangPPVIP:0,
                   ValuePenumpang:0,
                   ValueKapasitas:0,
                   ValuePenumpangPP:0,
                   ValueKapasitasPP:0,
                   tesharga:'100070',
                   gantiHarga:0,
                   tempHargaDewasa:0,
                   tempHargaAnak:0,
                   tempHargaDewasaPP:0,
                   tempHargaAnakPP:0,
                   infant:'',
                   ETA:'',
                   ETD:'',
                   Rute:'',
                   Kapal:'',
                   jadwalPergi:false,
                   jadwalPulang:false,
                   cekTotalPenumpang:1,
                   colorVIP:'#F4F0E5',
                   colorEXE:'#F4F0E5',
                   colorTxtVip:'#000',
                   colorTxtEXE:'#000',
                   JenisKelamin1:'',
                   namaDepanDewasa1:'',
                   namaBelakangDewasa1:'',
                   Kewarganegaraan1:'',
                   title:'',
                   cek:0,
                   tampung_value:0,
                   show_icon:true,
                   tomboldewasa:false,
                   show_icon_anak:true,
                   tombolanak:false,
                   show_icon_infant:true,
                   tombolinfant:false,
                   show_ringkasan:false,
                   judulheaderAccordion:'',
                   show_infant:false,
                   tampilClose:false,
                   bandingjadwal:false,
                   datetimezone:'',
                 };
                 AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                     AsyncEmail:resultParsed.AsyncEmail,
                    AsyncNama:resultParsed.AsyncNama,
                });
            }
        });
  }

  getDateTimezone() {
    this.setState({dataUser:[]});
    return fetch('http://expressbahari.com/php_mobile/timezone.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
   
  })  .then((response) => response.json())
          .then((responseJson) => {
            
            this.setState({datetimezone: responseJson,});
        this.getNamaUser();
          })
          .catch((error) => {
          
          });  
  }
  
  CekPromo = () =>{
 this.setState({dataPromo:[{}]});
fetch('http://expressbahari.com/php_mobile/Cek_Promo.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    kode_promo: this.state.kodepromo,
    jenis_tiket: this.state.JenisTiket,
    asal:this.state.asal,
    kelas:this.state.KelasTiket,
    id_user:this.state.AsyncNama,
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
      this.setState({
     
        dataPromo:responseJson,

      }, function() {
       
      });
        this.loadingsKuponPromo();
     
      }).catch((error) => {
        ToastAndroid.show('Kode Promo Tidak Berlaku, Harap Gunakan Kode Promo Lainnya', ToastAndroid.LONG);
       //this._toggleModalInputPromo();
      });

   
  }
ReHitung=()=>{
  if(this.state.JenisTiket=='Sekali Jalan'){
  this.setState({rpTotalHarga:(parseInt(this.state.rpHargaDewasa) * parseInt(this.state.ValueDewasa)) + (parseInt(this.state.rpHargaAnak) * parseInt(this.state.ValueAnak)) + (parseInt(this.state.hargaInfant) * parseInt(this.state.ValueInfant))});
  this.setState({tempTotalHarga :(parseInt(this.state.rpHargaDewasa) * parseInt(this.state.ValueDewasa)) + (parseInt(this.state.rpHargaAnak) * parseInt(this.state.ValueAnak)) + (parseInt(this.state.hargaInfant) * parseInt(this.state.ValueInfant))});

  }
  if(this.state.JenisTiket=='PP'){
   this.setState({rpTotalHargaPP:(parseInt(this.state.rpHargaDewasaPP) * parseInt(this.state.ValueDewasa)) + (parseInt(this.state.rpHargaAnakPP) * parseInt(this.state.ValueAnak)) + (parseInt(this.state.hargaInfant) * parseInt(this.state.ValueInfant))});
  this.setState({tempTotalHargaPP :(parseInt(this.state.rpHargaDewasaPP) * parseInt(this.state.ValueDewasa)) + (parseInt(this.state.rpHargaAnakPP) * parseInt(this.state.ValueAnak)) + (parseInt(this.state.hargaInfant) * parseInt(this.state.ValueInfant))});

  }

}
cekJadwal=()=> {
  if(this.state.KelasTiket!=''){
    this.setState({loading2:true});
  }
  this.setState({lengthJadwal:[],show_ringkasan:false,ButtonStateHolder:true});
  return fetch('http://expressbahari.com/php_mobile/tampil_jadwal_ow.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    kode_rute: this.state.koderute,
    tanggal: this.state.date,
    jumlah_dewasa:this.state.ValueDewasa,
    jumlah_anak:this.state.ValueAnak,
    jumlah_infant:this.state.ValueInfant,
    harga_infant:this.state.hargaInfant,
    asuransi:this.state.hargaAsuransi,
    pass_pelabuhan:this.state.hargaPass,

 
  })
 
})  .then((response) => response.json())
    .then((responseJson) => {
      
      this.setState({
        
     
        lengthJadwal:responseJson,
        viewvisiblePenumpang:true,
        colorbg:'#F4F0E5',
        viewvisible: true,
      }, function() {

      if(this.state.KelasTiket=='VIP'){
        this.setState({idKeberangkatan:this.state.lengthJadwal[0].id});
        this.setState({ETA:this.state.lengthJadwal[0].tiba});
        this.setState({ETD:this.state.lengthJadwal[0].berangkat});
        this.setState({rpHargaDewasa:this.state.lengthJadwal[0].HARGAVIPDEWASA});
        this.setState({tempHargaDewasa:this.state.lengthJadwal[0].HARGAVIPDEWASA});
        this.setState({tempHargaAnak:this.state.lengthJadwal[0].HARGAVIPANAK  });
        this.setState({rpHargaAnak:this.state.lengthJadwal[0].HARGAVIPANAK});

        this.setState({rpHargaInfant:this.state.hargaInfant});
        this.setState({rpTotalHarga:this.state.lengthJadwal[0].TOTAL_hargaVIP});
        this.setState({tempTotalHarga:this.state.lengthJadwal[0].TOTAL_hargaVIP});
      }
      if(this.state.KelasTiket=='Eksekutif'){
        this.setState({idKeberangkatan:this.state.lengthJadwal[0].id});
        this.setState({ETA:this.state.lengthJadwal[0].tiba});
        this.setState({ETD:this.state.lengthJadwal[0].berangkat});
        this.setState({rpHargaDewasa:this.state.lengthJadwal[0].HARGAEXEDEWASA});
        this.setState({rpHargaAnak:this.state.lengthJadwal[0].HARGAEXEANAK});
         this.setState({tempHargaDewasa:this.state.lengthJadwal[0].HARGAEXEDEWASA});
        this.setState({tempHargaAnak:this.state.lengthJadwal[0].HARGAEXEANAK  });
        this.setState({rpHargaInfant:this.state.hargaInfant});
        this.setState({rpTotalHarga:this.state.lengthJadwal[0].TOTAL_hargaEXE});
         this.setState({tempTotalHarga:this.state.lengthJadwal[0].TOTAL_hargaEXE});
      }

      if(this.state.lengthJadwal.length>1){
        
       if(this.state.jadwalPergi==false){
        this.setState({BottomPopUp:true, tampilDetailJadwal1:[]});
        }
        if(this.state.jadwalPergi==true){
          this.setState({tampilJadwal2:true,tampilUbahJadwal:true});
        }
      }
      else{
        this.setState({tampilDetailJadwal1:responseJson,})

      }

      setTimeout(()=>{
      this.rupiah();
      }, 100);

      
       if(this.state.tampilDetailJadwal1.length==1){
        if(this.state.KelasTiket!=''){
        this.setState({tampilPP:false,tampilJadwal2:true});
        this.DisableButtonFunction();
          setTimeout(()=>{
            this.setState({show_ringkasan:true, loading2:false});
              setTimeout(()=>{
                this.scrollView.scrollToEnd();
              },100);
          },400);
        }
       }
      
     

      });

       
     
    })
    .catch((error) => {
   this.setState({loading2:false});
   ToastAndroid.show('Jadwal tidak tersedia', ToastAndroid.LONG); 
    if (this.state.KelasTiket==''){
      this.setState({
        viewvisiblePenumpang:false,
        colorbg:'#fcfbf8',
        viewvisible: false,
      })
    }
   
    });
}

cekJadwalHarga=()=> {
  this.setState({lengthJadwal:[],show_ringkasan:false,ButtonStateHolder:true});
  return fetch('http://expressbahari.com/php_mobile/tampil_jadwal_ow.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    kode_rute: this.state.koderute,
    tanggal: this.state.date,
    jumlah_dewasa:this.state.ValueDewasa,
    jumlah_anak:this.state.ValueAnak,
    jumlah_infant:this.state.ValueInfant,
    harga_infant:this.state.hargaInfant,
    asuransi:this.state.hargaAsuransi,
    pass_pelabuhan:this.state.hargaPass,

 
  })
 
})  .then((response) => response.json())
    .then((responseJson) => {
      
      this.setState({
        
     
        lengthJadwal:responseJson,
      }, function() {

      if(this.state.KelasTiket=='VIP'){
        this.setState({idKeberangkatan:this.state.lengthJadwal[0].id});
        this.setState({ETA:this.state.lengthJadwal[0].tiba});
        this.setState({ETD:this.state.lengthJadwal[0].berangkat});
        this.setState({rpHargaDewasa:this.state.lengthJadwal[0].HARGAVIPDEWASA});
        this.setState({tempHargaDewasa:this.state.lengthJadwal[0].HARGAVIPDEWASA});
        this.setState({tempHargaAnak:this.state.lengthJadwal[0].HARGAVIPANAK  });
        this.setState({rpHargaAnak:this.state.lengthJadwal[0].HARGAVIPANAK});

        this.setState({rpHargaInfant:this.state.hargaInfant});
        this.setState({rpTotalHarga:this.state.lengthJadwal[0].TOTAL_hargaVIP});
        this.setState({tempTotalHarga:this.state.lengthJadwal[0].TOTAL_hargaVIP});
      }
      if(this.state.KelasTiket=='Eksekutif'){
        this.setState({idKeberangkatan:this.state.lengthJadwal[0].id});
        this.setState({ETA:this.state.lengthJadwal[0].tiba});
        this.setState({ETD:this.state.lengthJadwal[0].berangkat});
        this.setState({rpHargaDewasa:this.state.lengthJadwal[0].HARGAEXEDEWASA});
        this.setState({rpHargaAnak:this.state.lengthJadwal[0].HARGAEXEANAK});
         this.setState({tempHargaDewasa:this.state.lengthJadwal[0].HARGAEXEDEWASA});
        this.setState({tempHargaAnak:this.state.lengthJadwal[0].HARGAEXEANAK  });
        this.setState({rpHargaInfant:this.state.hargaInfant});
        this.setState({rpTotalHarga:this.state.lengthJadwal[0].TOTAL_hargaEXE});
         this.setState({tempTotalHarga:this.state.lengthJadwal[0].TOTAL_hargaEXE});
      }

      if(this.state.lengthJadwal.length>1){
        
       if(this.state.jadwalPergi==false){
        this.setState({BottomPopUp:true, tampilDetailJadwal1:[]});
        }
        if(this.state.jadwalPergi==true){
          this.setState({tampilJadwal2:true,tampilUbahJadwal:true});
          setTimeout(()=>{
            this.rupiah();
            if(this.state.JenisTiket=='PP'){
              this.setState({tampilJadwal2:false});
              this.cekPP();
      
            }
            }, 100);
        }
      }
      else{
        this.setState({tampilDetailJadwal1:responseJson,})
        setTimeout(()=>{
          this.rupiah();
          if(this.state.JenisTiket=='PP'){
            this.setState({tampilJadwal2:false});
            this.cekPP();
    
          }
          }, 100);
      }

      

      });

       
     
    })
    .catch((error) => {
   this.setState({loading2:false});
   ToastAndroid.show('Jadwal Keberangkatan tidak tersedia', ToastAndroid.LONG); 

    });
}


cekPP=()=> {

  return fetch('http://expressbahari.com/php_mobile/tampil_jadwal_pp.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    kode_rute: this.state.koderute2,
    tanggal: this.state.date2,
    jumlah_dewasa:this.state.ValueDewasa,
    jumlah_anak:this.state.ValueAnak,
    jumlah_infant:this.state.ValueInfant,
    harga_infant:this.state.hargaInfantPP,
    asuransi:this.state.hargaAsuransi,
    pass_pelabuhan:this.state.hargaPassPP,
    total_harga:this.state.tempTotalHarga,
    harga_dewasa:this.state.rpHargaDewasa,
    harga_anak:this.state.rpHargaAnak,

 
  })
 
})  .then((response) => response.json())
    .then((responseJson) => {
      
      this.setState({
        
     
        listPP:responseJson,

      }, function() {

      if(this.state.KelasTiket=='VIP'){
        this.setState({idPulang:this.state.listPP[0].id});
        this.setState({rpHargaDewasaPP:this.state.listPP[0].HARGAVIPDEWASA});
        this.setState({rpHargaAnakPP:this.state.listPP[0].HARGAVIPANAK});
        this.setState({tempHargaDewasaPP:this.state.listPP[0].HARGAVIPDEWASA});
        this.setState({tempHargaAnakPP:this.state.listPP[0].HARGAVIPANAK});

        this.setState({rpTotalHargaPP:this.state.listPP[0].TOTAL_hargaVIP});
         this.setState({tempTotalHargaPP:this.state.listPP[0].TOTAL_hargaVIP});
      }
      if(this.state.KelasTiket=='Eksekutif'){
        this.setState({idPulang:this.state.listPP[0].id});
         this.setState({rpHargaDewasaPP:this.state.listPP[0].HARGAEXEDEWASA});
        this.setState({rpHargaAnakPP:this.state.listPP[0].HARGAEXEANAK});
        this.setState({tempHargaDewasaPP:this.state.listPP[0].HARGAEXEDEWASA});
        this.setState({tempHargaAnakPP:this.state.listPP[0].HARGAEXEANAK});
        this.setState({rpTotalHargaPP:this.state.listPP[0].TOTAL_hargaEXE});
         this.setState({tempTotalHargaPP:this.state.listPP[0].TOTAL_hargaEXE});
      }

      if(this.state.listPP.length>1){

       if(this.state.jadwalPulang==false){
        this.setState({BottomPopUp2:true,show_ringkasan:false,});
        }
        if(this.state.jadwalPulang==true){
          this.setState({tampilJadwal2:false,tampilUbahJadwal2:true,tampilUbahJadwal:true, tampilPP:true,});
        }
      }
      else{
        this.setState({tampilDetailJadwal2:responseJson,})

      }

      setTimeout(()=>{
      this.rupiahPP ();
      }, 100);                                 
      
       if(this.state.tampilDetailJadwal2.length==1){
        if(this.state.KelasTiket!=''){
        this.setState({tampilPP:true,tampilJadwal2:false});
        this.DisableButtonFunction();
          setTimeout(()=>{
            this.setState({show_ringkasan:true, loading2:false});
              setTimeout(()=>{
                this.scrollView.scrollToEnd();
              },100);
          },400);
        }
       }
     

      });

       this.setState({loading2:false});
     
    })
    .catch((error) => {
   this.setState({loading2:false});   
   ToastAndroid.show('Jadwal Kepulangan tidak tersedia', ToastAndroid.LONG); 
    
   
    });
}
cekPPTanggal=()=> {

  return fetch('http://expressbahari.com/php_mobile/tampil_jadwal_pp.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    kode_rute: this.state.koderute2,
    tanggal: this.state.date2,
    jumlah_dewasa:this.state.ValueDewasa,
    jumlah_anak:this.state.ValueAnak,
    jumlah_infant:this.state.ValueInfant,
    harga_infant:this.state.hargaInfantPP,
    asuransi:this.state.hargaAsuransi,
    pass_pelabuhan:this.state.hargaPassPP,
    total_harga:this.state.tempHargaDewasa,
    harga_dewasa:this.state.rpHargaDewasa,
    harga_anak:this.state.rpHargaAnak,

 
  })
 
})  .then((response) => response.json())
    .then((responseJson) => {
      
      this.setState({
        
     
        listPP:responseJson,

      }, function() {

       if(this.state.listPP.length>1){

       if(this.state.jadwalPulang==false){
        this.setState({BottomPopUp2:true,show_ringkasan:false,});
        }
        if(this.state.jadwalPulang==true){
          this.setState({show_ringkasan:true,tampilJadwal2:false,tampilPP:true});
        }
      }
      else{
        this.setState({tampilDetailJadwal2:responseJson,})

      }
   
      setTimeout(()=>{
      //this.rupiah();
      }, 100);

      
       if(this.state.listPP.length==1){
        this.setState({koderutePP:this.state.listPP[0].kode_rute2});
        this.setState({idPulang:this.state.listPP[0].id});
        if(this.state.KelasTiket!=''){
        this.setState({show_ringkasan:true,tampilJadwal2:false,tampilPP:true});
        this.ProsesPesanan();
        }
       }
      
     

      });

       
     
    })
    .catch((error) => {

   ToastAndroid.show('Jadwal tidak tersedia', ToastAndroid.LONG); 
    
   
    });
}

ProsesPesanan=()=>{
  this.setState({loading2:true})
  if(this.state.JenisTiket=='Sekali Jalan'){
    this.cekJadwal();
  }
  if(this.state.JenisTiket=='PP'){
    this.setState({tampilJadwal2:false});
    this.cekJadwalHarga();
  }
   this.getNoPesanan();
}
GetItem = (key,id,harga_vip1,harga_vip2,harga_eks1,harga_eks2,harga_bus1,harga_bus2,rute,berangkat,tiba,tipe,kode_rute,block_exe,block_vip,k_vip,k_exe,TOTAL_hargaEXE,TOTAL_hargaVIP) =>{
  this.setState({tampilDetailJadwal1:[]});

    this.setState({idKeberangkatan:id})
    this.setState({ SisaTiketEXE: block_exe})
    this.setState({ SisaTiketVIP: block_vip})
    this.setState({ KapTiketEXE: k_exe})
    this.setState({ KapTiketVIP: k_vip})
    this.setState ({ETA :tiba})
    this.setState ({ETD :berangkat  })    
    
    const newArray = [...this.state.tampilDetailJadwal1];
    newArray[0] = this.state.lengthJadwal[key];
    this.setState({ tampilDetailJadwal1: newArray });

   
   if(this.state.KelasTiket!=''){
    this.setState({BottomPopUp:false});
    if(this.state.JenisTiket=='PP'){
      this.setState({tampilJadwal2:false});
      this.cekPP();
    }
    else{
      this.setState({show_ringkasan:true});
    }
   }
   else{
    this.setState({BottomPopUp:false,jadwalPergi:true, loading2:false});
   }
   
 }
 GetItem2 = (key,id,harga_vip1,harga_vip2,harga_eks1,harga_eks2,harga_bus1,harga_bus2,rute,berangkat,tiba,tipe,kode_rute,block_exe,block_vip,k_vip,k_exe,TOTAL_hargaEXE,TOTAL_hargaVIP) =>{
  this.setState({tampilDetailJadwal2:[]});

     this.setState({ idPulang:id})
    this.setState({ koderutePP: kode_rute})
    this.setState({ harga_vipDewasaPP: harga_vip1})
    this.setState({ harga_vipAnakPP: harga_vip2})
    this.setState({ harga_eksDewasaPP: harga_eks1})
    this.setState({ harga_eksAnakPP: harga_eks2})
    this.setState({ harga_busDewasaPP: harga_bus1})
    this.setState({ harga_busAnakPP: harga_bus2})
    this.setState({ ETDPP: berangkat})
    this.setState({ ETAPP: tiba})
    this.setState({ KapalPP: tipe})
    this.setState({ SisaTiketEXEPP: block_exe})
    this.setState({ SisaTiketVIPPP: block_vip})
    this.setState({ KapTiketEXEPP: k_exe})
    this.setState({ KapTiketVIPPP: k_vip})
    
    const newArray = [...this.state.tampilDetailJadwal2];
    newArray[0] = this.state.listPP[key];
    this.setState({ tampilDetailJadwal2: newArray });

   
   if(this.state.KelasTiket!=''){
    this.setState({BottomPopUp2:false});
    if(this.state.JenisTiket=='PP'){
      this.setState({tampilPP:true,tampilJadwal2:false});
    this.DisableButtonFunction();
      setTimeout(()=>{
        this.setState({show_ringkasan:true, loading2:false});
          setTimeout(()=>{
            this.scrollView.scrollToEnd();
          },100);
      },100);
    }
    
    else{
      this.setState({show_ringkasan:true,jadwalPulang:true,tampilPP:true,tampilUbahJadwal:true,tampilUbahJadwal2:true});
    }
   }
   else{
    this.setState({BottomPopUp2:false,jadwalPulang:true,tampilJadwal2:false});
   }
  
    
 }
UbahJadwal=()=>{
   this.setState({BottomPopUp:true})
}
UbahJadwal2=()=>{
  this.setState({BottomPopUp2:true})
}
clearPP=()=>{
    this.setState({JenisTiket:'Sekali Jalan'});
    this.setState({viewvisiblePP:false,tampilClose:false });
    if(this.state.KelasTiket!=''){
    this.setState({tampilPP:false});
    this.setState({tampilJadwal2:true});

    }
  }
  cekTanggal=()=>{
  
  if(this.state.JenisTiket=='PP'){
   if(this.state.date<this.state.date2){
   if(moment(this.state.date2+' '+this.state.arrayPP [0].berangkat).format("DD-MM-YYYY HH:mm")<moment(this.state.date+' '+this.state.lengthJadwal   [0].berangkat).format("DD-MM-YYYY HH:mm")){
    ToastAndroid.show('Silahkan Ubah Tanggal Pulang', ToastAndroid.LONG); 
   }
   else{
     this.saveData();
   }
  }
  else{
    ToastAndroid.show('Silahkan Ubah Tanggal Pulang', ToastAndroid.LONG); 
   
  } 
  }
  else {
      this.saveData();
  }
  }
  
  state = {colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false, };

  toggleSwitch = () => {
    if(moment(this.state.date).format('YYYY-MM-DD')>=moment(this.state.date2).format('YYYY-MM-DD')){
      this.setState({date2:moment(this.state.date).add(1,'day').format('YYYY-MM-DD')});
      this.clearPP()
    }
    
  };

  toggleSwitchPP = () => {
    this.setState({viewvisiblePP: true, show_ringkasan:false});
    if(this.state.KelasTiket==''){
      this.cekPPTanggal()
    }
    else{
      setTimeout(()=>{
        this.ProsesPesanan()
      }, 100);
      
    }
  };

  async GetJadwal(){
    try{
        const response = await fetch('http://expressbahari.com/php_mobile/rute_list.php');
        const responseJson = await response.json();
        
        this.setState({schedule:responseJson});
    }
    catch(error){
      console.error(error);
    }
  }

  tampilKupon() {
  this.setState({kupon_saya:[{}]});
  return fetch('http://expressbahari.com/php_mobile/tampil_kupon_saya.php', {
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
          this.setState({
          
            kupon_saya: responseJson,
          }
          
          , function() {
            // In this block you can do something with new state.
          });
          this.setState({HideKupon:true});
        })
        .catch((error) => {
          this.setState({HideKupon:false})
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
    this.getDateTimezone();
    StatusBar.setHidden(false);
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.navigate('home_en');
    return true;
}

cekChange=()=>{
    if(this.state.koderute==''  ){
      ToastAndroid.show('Silahkan Pilih Rute Keberangkatan', ToastAndroid.LONG);
    }
    else{
      this.change()
    }
  }
  change= ()=>{
    this.setState({jadwalPergi:false, jadwalPulang:false, show_ringkasan:false})
  if(this.state .data1  [0].no=='1'){
     this.setState ({asal:this.state .data1[0].asal })
     this.setState ({tujuan  :this.state .data1[0].tujuan})
     this.setState ({namaPelabuhan      :this.state .data1[0].nama_pelabuhan })
     this.setState ({namaPelabuhan2      :this.state .data2[0].nama_pelabuhan })
     this.setState ({KodeAsal       :this.state .data1[0].kode_asal  })
     this.setState ({KodeTujuan        :this.state .data1[0].kode_tujuan    })
     this.setState ({jadwal          :this.state .data1[0].rute      })
     this.setState ({jadwal2           :this.state .data2[0].rute      })
     this.setState ({koderute          :this.state .data1[0].kode_rute     })
     this.setState ({koderute2          :this.state .data2[0].kode_rute     })
     this.setState ({hargaPass            :this.state .data1[0].pass_pelabuhan       })
     this.setState ({hargaPassPP              :this.state .data2[0].pass_pelabuhan       })
     this.setState ({hargaInfant              :this.state .data1[0].infant         })
     this.setState ({hargaInfantPP              :this.state .data2[0].infant         })
     this.setState ({ETA              :this.state .data1[0].tiba        })
     this.setState ({ETAPP             :this.state .data2[0].tiba         })
     this.setState ({ETD              :this.state .data1[0].berangkat       })
     this.setState ({ETDPP             :this.state .data2[0].berangkat         })

     const newArray = [...this.state .data1   ];
     newArray[0].no = '2';
     this.setState ({data1    : newArray  });
  }
  else if (this.state.data1  [0].no=='2'){
      this.setState ({asal:this.state .data2[0].asal  })
      this.setState ({tujuan  :this.state .data2[0].tujuan})
      this.setState ({namaPelabuhan     :this.state .data2[0].nama_pelabuhan })
      this.setState ({namaPelabuhan2     :this.state .data1[0].nama_pelabuhan })
      this.setState ({KodeAsal       :this.state .data2[0].kode_asal  })
      this.setState ({KodeTujuan        :this.state .data2[0].kode_tujuan    })
      this.setState ({jadwal           :this.state .data2[0].rute     })
      this.setState ({jadwal2          :this.state .data1[0].rute     })
      this.setState ({koderute          :this.state .data2[0].kode_rute     })
      this.setState ({koderute2          :this.state .data1[0].kode_rute     })
      this.setState ({hargaPass            :this.state .data2[0].pass_pelabuhan       })
      this.setState ({hargaPassPP              :this.state .data1[0].pass_pelabuhan       })
      this.setState ({hargaInfant              :this.state .data2[0].infant         })
      this.setState ({hargaInfantPP              :this.state .data1[0].infant         })
      this.setState ({ETA             :this.state .data2[0].tiba         })
      this.setState ({ETAPP              :this.state .data1[0].tiba         })
      this.setState ({ETD             :this.state .data2[0].berangkat         })
      this.setState ({ETDPP              :this.state .data1[0].berangkat      })


      const newArray = [...this.state .data1   ];
      newArray[0].no = '1';
      this.setState ({data1    : newArray  });
  }   
 
  if(this.state.KelasTiket!=''){
    setTimeout(()=>{
      this.ProsesPesanan();
      this.batalKupon();
      }, 100);
  }
  if(this.state.viewvisible==true){
    setTimeout(()=>{
      this.cekJadwal();
      this.batalKupon();
      }, 100);
  }
  
  }
 
  
_toggleModal = () =>{
    
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.setState({ footerhide: !this.state.footerhide })
    if(this.state.isModalVisible==true){
      //this.loadings();
    }
  }

  _modalDewasa=()=>{
    this.setState({ ModalDewasa: !this.state.ModalDewasa, judulheaderAccordion:'Dewasa'});
    this.setState({ footerhide: !this.state.footerhide })
    if(this.state.ValueDewasa==0){
        db.transaction(tx => {
          tx.executeSql(
            'delete from detail_penumpang;'
          );
        });
        this.setState({show_infant:false, tombolinfant:false, ValueInfant:0});
      }

    if(this.state.ModalDewasa==true){
        if (this.state.tomboldewasa==true){
          if(this.state.ValueDewasa==0){
            this.setState({tomboldewasa:false, ValueDewasa:this.state.tampung_value,show_icon:true});
          }
          else{
            
            if(this.state.tampung_value==0){
              this.setState({tomboldewasa:false, ValueDewasa:this.state.tampung_value,show_icon:true});
            }
            else{
              this.setState({ValueDewasa:this.state.tampung_value});
            }
          }
      }
    }
    else{
      db.transaction(tx => {
        //tx.executeSql('insert into detail_penumpang (idx, title, nama_depan, nama_belakang, kwn, s_title, s_namadepan, s_namabelakang, s_total, icon) values (?,?,?,?,?,?,?,?,?,?)', [0,'tuan','komang','sumita','indo',0,0,0,0,'false']);
        tx.executeSql('select * from detail_penumpang;',[],(_, { rows: { _array } }) => this.setState({ SECTIONS: _array })
        );
      });
      this.setState({tampung_value: this.state.ValueDewasa, show_icon:true});
    }
  }

  _modalAnak=()=>{
    this.setState({ Modalanak: !this.state.Modalanak, judulheaderAccordion:'Anak'});
    this.setState({ footerhide: !this.state.footerhide })
    if(this.state.ValueAnak==0){
        db.transaction(tx => {
          tx.executeSql(
            'delete from detail_penumpang_anak;'
          );
        });
      }

    if(this.state.Modalanak==true){
        if (this.state.tombolanak==true){
          if(this.state.ValueAnak==0){
            this.setState({tombolanak:false, ValueAnak:this.state.tampung_value,show_icon_anak:true});
          }
          else{
            
            if(this.state.tampung_value==0){
              this.setState({tombolanak:false, ValueAnak:this.state.tampung_value,show_icon_anak:true});
            }
            else{
              this.setState({ValueAnak:this.state.tampung_value});
            }
          }
      }
    }
    else{
      db.transaction(tx => {
        //tx.executeSql('insert into detail_penumpang (idx, title, nama_depan, nama_belakang, kwn, s_title, s_namadepan, s_namabelakang, s_total, icon) values (?,?,?,?,?,?,?,?,?,?)', [0,'tuan','komang','sumita','indo',0,0,0,0,'false']);
        tx.executeSql('select * from detail_penumpang_anak;',[],(_, { rows: { _array } }) => this.setState({ SECTIONS: _array })
        );
      });
      this.setState({tampung_value: this.state.ValueAnak, show_icon:true});
    }
  }

  _modalInfant=()=>{
    this.setState({ ModalInfant: !this.state.ModalInfant, judulheaderAccordion:'Bayi'});
    this.setState({ footerhide: !this.state.footerhide })
    if(this.state.ValueInfant==0){
        db.transaction(tx => {
          tx.executeSql(
            'delete from detail_penumpang_infant;'
          );
        });
      }

    if(this.state.ModalInfant==true){
        if (this.state.tombolinfant==true){
          if(this.state.ValueInfant==0){
            this.setState({tombolinfant:false, ValueInfant:this.state.tampung_value,show_icon_infant:true});
          }
          else{
            
            if(this.state.tampung_value==0){
              this.setState({tombolinfant:false, ValueInfant:this.state.tampung_value,show_icon_infant:true});
            }
            else{
              this.setState({ValueInfant:this.state.tampung_value,});
            }
          }
      }
    }
    else{
      db.transaction(tx => {
        //tx.executeSql('insert into detail_penumpang (idx, title, nama_depan, nama_belakang, kwn, s_title, s_namadepan, s_namabelakang, s_total, icon) values (?,?,?,?,?,?,?,?,?,?)', [0,'tuan','komang','sumita','indo',0,0,0,0,'false']);
        tx.executeSql('select * from detail_penumpang_infant;',[],(_, { rows: { _array } }) => this.setState({ SECTIONS: _array })
        );
      });
      this.setState({tampung_value: this.state.ValueInfant, show_icon:true});
    }
  }

  simpanModalDewasa=()=>{
    this.setState({ cek: 0, loading2:true});
    setTimeout(()=>{
    this.setState({ show_icon: false});
    for (let i = 0; i < this.state.SECTIONS.length; i++) { 
      if (this.state.SECTIONS[i].s_total==3){
        const newArray = [...this.state.SECTIONS];
        newArray[i].icon = true ;        
        this.setState({ SECTIONS: newArray, cek:this.state.cek+1 });
      }
      else{
        const newArray = [...this.state.SECTIONS];
        newArray[i].icon = false ;        
        this.setState({ SECTIONS: newArray });
        
      }
    }
    setTimeout(()=>{
      if(this.state.cek==this.state.ValueDewasa){
        db.transaction(tx => {
          tx.executeSql(
            'delete from detail_penumpang;'
          );
        });
        for (let i = 0; i < this.state.SECTIONS.length; i++) {
          db.transaction(tx => {
            tx.executeSql('insert into detail_penumpang (idx, title, nama_depan, nama_belakang, kwn, s_title, s_namadepan, s_namabelakang, s_total, icon) values (?,?,?,?,?,?,?,?,?,?)', [this.state.SECTIONS[i].idx, this.state.SECTIONS[i].title, this.state.SECTIONS[i].nama_depan, this.state.SECTIONS[i].nama_belakang, this.state.SECTIONS[i].kwn, this.state.SECTIONS[i].s_title, this.state.SECTIONS[i].s_namadepan, this.state.SECTIONS[i].s_namabelakang,this.state.SECTIONS[i].s_total,this.state.SECTIONS[i].icon]);
         });
        }
        
        this.setState({ ModalDewasa: !this.state.ModalDewasa,footerhide: !this.state.footerhid, viewvisibleKelas:true, show_infant:true,loading2:false});
        
         
            setTimeout(()=>{
             this.ReHitung();
            }, 100);
             setTimeout(()=>{
      this.rupiah();
      }, 100);
        
      }
      else{
        this.setState({loading2:false});
      }
    }, 100);
  }, 100);
  
  }

  simpanModalAnak=()=>{
    this.setState({ cek: 0, loading2:true});
    setTimeout(()=>{
    this.setState({ show_icon: false});
    for (let i = 0; i < this.state.SECTIONS.length; i++) { 
      if (this.state.SECTIONS[i].s_total==3){
        const newArray = [...this.state.SECTIONS];
        newArray[i].icon = true ;        
        this.setState({ SECTIONS: newArray, cek:this.state.cek+1 });
      }
      else{
        const newArray = [...this.state.SECTIONS];
        newArray[i].icon = false ;        
        this.setState({ SECTIONS: newArray });
        
      }
    }
    setTimeout(()=>{
      if(this.state.cek==this.state.ValueAnak){
        db.transaction(tx => {
          tx.executeSql(
            'delete from detail_penumpang_anak;'
          );
        });
        for (let i = 0; i < this.state.SECTIONS.length; i++) {
          db.transaction(tx => {
            tx.executeSql('insert into detail_penumpang_anak (idx, title, nama_depan, nama_belakang, kwn, s_title, s_namadepan, s_namabelakang, s_total, icon) values (?,?,?,?,?,?,?,?,?,?)', [this.state.SECTIONS[i].idx,this.state.SECTIONS[i].title,this.state.SECTIONS[i].nama_depan,this.state.SECTIONS[i].nama_belakang,this.state.SECTIONS[i].kwn,this.state.SECTIONS[i].s_title,this.state.SECTIONS[i].s_namadepan,this.state.SECTIONS[i].s_namabelakang,this.state.SECTIONS[i].s_total,this.state.SECTIONS[i].icon]);
         });
        }
        
        this.setState({ Modalanak: !this.state.Modalanak,footerhide: !this.state.footerhid, viewvisibleKelas:true, loading2:false});
        
          setTimeout(()=>{
             this.ReHitung();
            }, 100);
          setTimeout(()=>{
      this.rupiah();
      }, 100);
        
      }
    }, 100);
  }, 100);
    
  }

  simpanModalInfant=()=>{
    this.setState({ cek: 0, loading2:true});
    setTimeout(()=>{
    this.setState({ show_icon: false});
    for (let i = 0; i < this.state.SECTIONS.length; i++) { 
      if (this.state.SECTIONS[i].s_total==4){
        const newArray = [...this.state.SECTIONS];
        newArray[i].icon = true ;        
        this.setState({ SECTIONS: newArray, cek:this.state.cek+1 });
      }
      else{
        const newArray = [...this.state.SECTIONS];
        newArray[i].icon = false ;        
        this.setState({ SECTIONS: newArray });
        
      }
    }
    setTimeout(()=>{
      if(this.state.cek==this.state.ValueInfant){
        db.transaction(tx => {
          tx.executeSql(
            'delete from detail_penumpang_infant;'
          );
        });
        for (let i = 0; i < this.state.SECTIONS.length; i++) {
          db.transaction(tx => {
            tx.executeSql('insert into detail_penumpang_infant (idx, title, nama_depan, nama_belakang, umur, kwn, s_title, s_namadepan, s_namabelakang, s_umur, s_total, icon) values (?,?,?,?,?,?,?,?,?,?,?,?)', [this.state.SECTIONS[i].idx,this.state.SECTIONS[i].title,this.state.SECTIONS[i].nama_depan,this.state.SECTIONS[i].nama_belakang ,this.state.SECTIONS[i].umur,this.state.SECTIONS[i].kwn,this.state.SECTIONS[i].s_title,this.state.SECTIONS[i].s_namadepan,this.state.SECTIONS[i].s_namabelakang,this.state.SECTIONS[i].s_umur,this.state.SECTIONS[i].s_total,this.state.SECTIONS[i].icon]);
         });
        }
        
        this.setState({ ModalInfant: !this.state.ModalInfant,footerhide: !this.state.footerhid, viewvisibleKelas:true, loading2:false});
        
          setTimeout(()=>{
             this.ReHitung();
            }, 100);
          setTimeout(()=>{
      this.rupiah();
      }, 100);
        
      }
    }, 100);
  }, 100);
  }

  closeModal=()=>{

    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.setState({ footerhide: !this.state.footerhide })
  }

  loadingsKuponPromo=()=>{

    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
      
        this._toggleModalInputPromo();
        
        this.setState({totalDiskon:this.state.dataPromo[0].nominal});
        if(this.state.JenisTiket=='PP'){
        //this.setState({tempTotalHargaPP:this.state.totalHargaPP});
        this.setState({totalHargaPromo:parseInt(this.state.tempTotalHargaPP) - parseInt(this.state.totalDiskon)})
        setTimeout(()=>{
        if(this.state.totalHargaPromo<0){
          this.setState({totalDiskon:this.state.rpTotalHargaPP})
          this.setState({totalHargaPromo:0});
        }
      }, 300);
          


        this.setState({totalHarga:this.state.totalHargaPromo});
        this.setState({ 
                        HideTotalBayarDiskon:true,
                        kodepromo:'',
                     });
        }

        if(this.state.JenisTiket=='Sekali Jalan'){
         this.setState({totalDiskon:this.state.dataPromo[0].nominal});
        //this.setState({tempTotalHarga:this.state.totalHarga});
        this.setState({totalHargaPromo:parseInt(this.state.tempTotalHarga) - parseInt(this.state.totalDiskon)})
        if(this.state.totalHargaPromo<0){
          this.setState({totalDiskon:this.state.rpTotalHarga})
          this.setState({totalHargaPromo:0});
        }

        this.setState({totalHarga:this.state.totalHargaPromo});
        this.setState({ HideTotalBayarDiskon:true,
                        
                        kodepromo:'',
                        });
        }

        this.setState({loading2: !this.state.loading2});
        
        this.setState ({hideTombolGunakan :false  });
        setTimeout(()=>{
         this.rupiahPotongan();
         this.rupiahTotalHargaPromo();
      }, 500);
       this.setState({temptotalHargaPromo:this.state.totalHargaPromo});
      }, 500);

  }
HeaderModal = () =>{
    
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });
  }
openDialog = (show) => {
    this.setState({ showDialog: show });
}
openDialog2 = (show) => {
        this.setState({ showDialog2: show });
}
_toggleBottomNavigationView = () => {
    this.setState({ footerhide: !this.state.footerhide })
    this.setState({ BottomPopUp: !this.state.BottomPopUp })
  }
  _toggleBottomNavigationView2 = () => {
 
    this.setState({ BottomPopUp2: !this.state.BottomPopUp2 })
    this.setState({ footerhide: !this.state.footerhide })
  }

tambahValueDewasa=()=>{
if(this.state.ValueDewasa<8 && this.state.cekTotalPenumpang<8 ){
    for (let i = 0; i < 1; i++) { 
      this.state.SECTIONS.push({
        idx: this.state.ValueDewasa,
        title: '',
        nama_depan: '',
        nama_belakang: '',
        kwn: 'Indonesia',
        s_title:0,
        s_namadepan:0,
        s_namabelakang:0,
        s_total:0,
        icon:false,
      })
    }
   this.setState({ValueDewasa : parseInt(this.state.ValueDewasa) + 1  , tomboldewasa:true});
   if (this.state.cekTotalPenumpang<8){
   this.setState({cekTotalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant) +1 });
    }
  }
}

DisableButtonFunction =()=>{
      this.setState({
        
        // On State True it will Disable the button.
        ButtonStateHolder : false ,
        bgcolor:'#3F81B5'
      })
    
   }

kurangValueDewasa=()=>{
 if(this.state.ValueDewasa>0){
  let newList = this.state.SECTIONS
  newList.splice(this.state.ValueDewasa-1,1);
  this.setState({SECTIONS:newList})
   this.setState({ValueDewasa : parseInt(this.state.ValueDewasa) - 1  });
   this.setState({cekTotalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant) -1 });
   if(this.state.ValueInfant == this.state.ValueDewasa){
   this.setState({ValueInfant : parseInt(this.state.ValueInfant) - 1  });
   }
 }
 if(this.state.ValueDewasa==1){
   this.setState({tomboldewasa:false,show_icon:true});
 }
}

 tambahValueAnak=()=>{
  if(this.state.ValueAnak<8 && this.state.cekTotalPenumpang<8){
    for (let i = 0; i < 1; i++) { 
      this.state.SECTIONS.push({
        idx: this.state.ValueAnak,
        title: '',
        nama_depan: '',
        nama_belakang: '',
        kwn: 'Indonesia',
        s_title:0,
        s_namadepan:0,
        s_namabelakang:0,
        s_total:0,
        icon:false,
      })
    }
   this.setState({ValueAnak : parseInt(this.state.ValueAnak) + 1  , tombolanak:true});
   if (this.state.cekTotalPenumpang<8){
   this.setState({cekTotalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant) +1 });
    }
  }
}
kurangValueAnak=()=>{
  if(this.state.ValueAnak>0){
    let newList = this.state.SECTIONS
  newList.splice(this.state.ValueAnak-1,1);
  this.setState({SECTIONS:newList})
   this.setState({ValueAnak : parseInt(this.state.ValueAnak) - 1  });
   this.setState({cekTotalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant) -1 });
 }

 if(this.state.ValueAnak==1){
  this.setState({tombolanak:false,show_icon_anak:true});
}
}
 tambahValueInfant=()=>{
  if(this.state.ValueInfant<8 && this.state.cekTotalPenumpang<8){
    for (let i = 0; i < 1; i++) { 
      this.state.SECTIONS.push({
        idx: this.state.ValueInfant,
        title: '',
        nama_depan: '',
        nama_belakang: '',
        umur: '',
        kwn: 'Indonesia',
        s_title:0,
        s_namadepan:0,
        s_namabelakang:0,
        s_umur:0,
        s_total:0,
        icon:false,
      })
    }
   this.setState({ValueInfant : parseInt(this.state.ValueInfant) + 1  ,tombolinfant:true});
   if (this.state.cekTotalPenumpang<8){
   this.setState({cekTotalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant) +1 });
    }
  }
}

kurangValueInfant=()=>{
  if(this.state.ValueInfant>0){
    let newList = this.state.SECTIONS
  newList.splice(this.state.ValueInfant-1,1);
  this.setState({SECTIONS:newList})
   this.setState({ValueInfant : parseInt(this.state.ValueInfant) - 1  });
   this.setState({cekTotalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant) -1 });
 }
 if(this.state.ValueInfant==1){
  this.setState({tombolinfant:false,show_icon_infant:true});
}
}

BackFunction = () =>{
   this.props.navigation.navigate('home_en')
 }

componentDidMount() {
  db.transaction(tx => {
    tx.executeSql(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      'create table if not exists detail_penumpang (id integer primary key not null, idx int, title text,nama_depan text,nama_belakang text, kwn text, s_title int, s_namadepan int, s_namabelakang int, s_total int, icon text);'
    );

    tx.executeSql(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      'create table if not exists detail_penumpang_infant (id integer primary key not null, idx int, title text,nama_depan text,nama_belakang text, umur text, kwn text, s_title int, s_namadepan int, s_namabelakang int, s_umur int, s_total int, icon text);'
    );
    tx.executeSql(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      'create table if not exists detail_penumpang_anak (id integer primary key not null, idx int, title text,nama_depan text,nama_belakang text, kwn text, s_title int, s_namadepan int, s_namabelakang int, s_total int, icon text);'
    );
  });
      if(this.state.viewvisiblePenumpang==false){
        this.setState({colorbg:'#fcfbf8'})
      }
      this.setState({gantiHarga:this.state.tesharga})
      this.GetJadwal();
      this.loadings3();
     }
FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
loadings3=()=>{

    this.setState({loading3: !this.state.loading3});
    setTimeout(()=>{
      
      this.setState({loading3: !this.state.loading3});
      this.tampilKupon();
      }, 100);

  }
  loadingsPesan=()=>{

    this.setState({loading3: !this.state.loading3});
    setTimeout(()=>{
      
      this.setState({loading3: !this.state.loading3});
      this.saveData();
      }, 100);

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

  Navigate_To_Second_Activity=(rute,kode_asal,kode_tujuan,asal,tujuan,kode_rute, asuransi,pass_pelabuhan,infant,kode_rute2,pass_pelabuhan2,infant2,potongan_pp,nama_pelabuhan,nama_pelabuhan2,rute2,asal2,kode_asal2,tujuan2,kode_tujuan2)=>
    {
      
      this.setState({ data1:[],data2:[],jadwalPergi:false, show_ringkasan:false})
      this.setState({ jadwal: rute})
      this.setState({ jadwal2: rute2})
      this.setState({ KodeAsal: kode_asal})
      this.setState({ KodeAsal2: kode_asal2})
      this.setState({ KodeTujuan: kode_tujuan})
      this.setState({ KodeTujuan2: kode_tujuan2})
      this.setState({asal: asal})
      this.setState({asal2: asal2})
      this.setState({tujuan: tujuan})
      this.setState({tujuan2: tujuan2})
      this.setState({koderute: kode_rute})
      this.setState({koderute2: kode_rute2})
      this.setState({hargaPass: pass_pelabuhan})
      this.setState({hargaPassPP: pass_pelabuhan2})
      this.setState({hargaAsuransi: asuransi})
      this.setState({hargaInfant: infant})
      
      this.setState({hargaInfantPP: infant2})
      this.setState({namaPelabuhan: nama_pelabuhan  })
      this.setState({namaPelabuhan2: nama_pelabuhan2  })
      this.setState({potonganPP: potongan_pp  })
      //Sending the JSON ListView Selected Item Value On Next Activity.
      this._toggleModal({JSON_ListView_Clicked_Item: kode_asal,JSON_ListView_Clicked_Item: rute,JSON_ListView_Clicked_Item: kode_tujuan,JSON_ListView_Clicked_Item: asal,JSON_ListView_Clicked_Item: tujuan,JSON_ListView_Clicked_Item: kode_rute,JSON_ListView_Clicked_Item: asuransi,JSON_ListView_Clicked_Item: pass_pelabuhan,JSON_ListView_Clicked_Item: infant});
      setTimeout(()=>{
          this.state.data1.push({
                no:'2', nama_pelabuhan:nama_pelabuhan,potongan_pp:potongan_pp,pass_pelabuhan:pass_pelabuhan,asuransi:asuransi,infant:infant,rute:rute,kode_asal:kode_asal,kode_tujuan:kode_tujuan,asal:asal,tujuan:tujuan,kode_rute:kode_rute,
              }) 
          this.state.data2.push({
                no:'1', nama_pelabuhan:nama_pelabuhan2,potongan_pp:potongan_pp,pass_pelabuhan:pass_pelabuhan2,asuransi:asuransi,infant:infant2,rute:rute2,kode_asal:kode_asal2,kode_tujuan:kode_tujuan2,asal:asal2,tujuan:tujuan2,kode_rute:kode_rute2,
              })
      }, 100);

     this.setState({viewvisiblePergi:true, show_ringkasan:false,jadwalPergi:false,jadwalPulang:false})
     if(this.state.KelasTiket!=''){
      setTimeout(()=>{
        this.ProsesPesanan();
        this.batalKupon();
      }, 500);
        
     }
     if(this.state.viewvisible==true){
      setTimeout(()=>{
        this.cekJadwal();
        this.batalKupon();
        }, 100);
    }
 


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
    setTimeout(()=>{

    if(this.state.JenisTiket=='Sekali Jalan'){
        this.setState({rpTotalHarga:this.state.rpTotalHarga});
        this.setState({tempTotalHarga:this.state.tempTotalHarga});
    }
    else if(this.state.JenisTiket=='PP'){
        this.setState({rpTotalHarga:this.state.rpTotalHargaPP});
         this.setState({tempTotalHarga:this.state.tempTotalHargaPP});
    }
    else if(this.state.totalDiskon!=0){
        this.setState({rpTotalHarga:this.state.totalHargaPromo});
        this.setState({tempTotalHarga:this.state.temptotalHargaPromo});
    }
    }, 500);
   
   if(this.state.koderute==''  )
   {
    ToastAndroid.show('Silahkan Pilih Rute Keberangkatan Tiket', ToastAndroid.LONG);
   }
       
    else{
    if(this.state.KelasTiket=='VIP'){
        if(this.state.JenisTiket=='Sekali Jalan'){
      this.setState({ValuePenumpang:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak))+parseInt(this.state.tampilDetailJadwal1[0].block_vip) })
      this.setState({totalPenumpangVIP:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })
      this.setState({ValueKapasitas:this.state.tampilDetailJadwal1[0].k_vip})
    }
       if(this.state.JenisTiket=='PP'){
      this.setState({ValuePenumpangPP:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak))+parseInt(this.state.tampilDetailJadwal2[0].block_vip) })
      this.setState({totalPenumpangVIP:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })
      this.setState({totalPenumpangPPVIP:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })      
      this.setState({ValueKapasitasPP:this.state.tampilDetailJadwal2[0].k_vip})
      this.setState({idPulang:this.state.tampilDetailJadwal2[0].id})
      //this.setState({koderutePP:this.state.tampilDetailJadwal1[0].kode_rute2})
    }
    }
    if(this.state.KelasTiket=='Eksekutif'){
      if(this.state.JenisTiket=='Sekali Jalan'){
      this.setState({ValuePenumpang:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak))+parseInt(this.state.tampilDetailJadwal1[0].block_exe) })
      this.setState({totalPenumpangEXE:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })
      this.setState({ValueKapasitas:this.state.tampilDetailJadwal1[0].k_exe}) 
    }
     if(this.state.JenisTiket=='PP'){
      this.setState({ValuePenumpangPP:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak))+parseInt(this.state.tampilDetailJadwal2[0].block_exe) })
      this.setState({totalPenumpangEXE:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })
      this.setState({totalPenumpangPPEXE:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })     
      this.setState({ValueKapasitasPP:this.state.tampilDetailJadwal2[0].k_exe})
      this.setState({idPulang:this.state.tampilDetailJadwal2[0].id}) 
      //this.setState({koderutePP:this.state.tampilDetailJadwal1[0].kode_rute})
    }
  }
 
    //this.cekTanggal()
   
  
    } 
     setTimeout(()=>{
      
      this.loadingsPesan();   
      
      }, 100);
}

 
 
 batalKupon=()=>{
  this.setState({ dataPromo :[{}],
                  hideTombolGunakan  :true ,
                  HideTotalBayarDiskon  :false  ,
                  totalHarga  :this.state.rpTotalHarga,

                }) 
 } 

GetFlatListItem (rute) {
   
  Alert.alert(rute);
 
}

CekKupon = () =>{
 this.setState({dataPromo:[{}]});
fetch('http://expressbahari.com/php_mobile/Cek_Kupon.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 

    asal:this.state.asal,
    kelas:this.state.KelasTiket,
    id_kupon:this.state.idkupon,
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
      this.setState({
     
        dataPromo:responseJson,

      }, function() {
       
      });
        this.loadingsKuponPromo ();
     
      }).catch((error) => {
        ToastAndroid.show('Kupon Tidak Berlaku, Harap Gunakan Kode Promo Lainnya', ToastAndroid.LONG);
       //this._toggleModalInputPromo();
      });

   
  }
getKupon=(id_kupon_saya,id_kupon,id_user,status)=>
    {
        this.setState({idkpnSaya:id_kupon_saya})
        this.setState({idkupon:id_kupon})
        this.setState({iduser:id_user})
        this.setState({status:status})
       
        this.loadings4();
    }
    loadings4=()=>{

    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
      
       this.CekKupon();
        
        this.setState({loading2: !this.state.loading2});
      
      }, 500);

  }
  getNoPesanan = () => {
  
  return fetch('http://expressbahari.com/php_mobile/get_nopesanan.php',{
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
        this.setState({NomorOrder:NomorPesanan});
}


 saveData = () =>{
        let AsyncNomorPesanan  = this.state .NomorPesanan ;
        let AsyncIdKupon = this.state.idkupon;
        let AsyncIdKpnSaya = this.state.idkpnSaya;
        let AsyncPotongan = this.state.dataPromo[0].nominal;
        let AsyncIdPromo = this.state.dataPromo[0].id_promo;
        let AsyncPenumpangEXE=this.state.totalPenumpangEXE;
        let AsyncPenumpangVIP=this.state.totalPenumpangVIP;
        let AsyncPenumpangPPEXE=this.state.totalPenumpangPPEXE;
        let AsyncPenumpangPPVIP=this.state.totalPenumpangPPVIP;
        let AsyncValuePenumpang=this.state.ValuePenumpang;
        let AsyncValuePenumpangPP=this.state.ValuePenumpangPP;
        let AsyncPotonganDewasa=this.state.potonganPPDewasa;
        let AsyncPotonganAnak=this.state.potonganPPAnak;
        let AsyncTotalPotongan=this.state.totalPotongan;
        let collapsed2= this.state.collapsed2;
        let collapsed3= this.state.collapsed3;
        let HideTotalBayar= this.state.HideTotalBayar;
        let HideTotalBayarPP= this.state.HideTotalBayarPP;
        let HideTotalPesananPP= this.state.HideTotalPesananPP;
        let HideDetailPesananPP= this.state.HideDetailPesananPP;
        let AsyncEmail = this.state.AsyncEmail;
        let AsyncAsal = this.state.asal;
        let AsyncJT = this.state.JT;
        let AsyncTujuan = this.state.tujuan;
        let AsyncDewasa = this.state.ValueDewasa;
        let AsyncAnak = this.state.ValueAnak;
        let AsyncInfant = this.state.ValueInfant;
        let AsyncKelas = this.state.KelasTiket;
        let AsyncHargaVIP1 = this.state.harga_vipDewasa;
        let AsyncHargaVIP2 = this.state.harga_vipAnak;
        let AsyncHargaEKS1 = this.state.harga_eksDewasa;
        let AsyncHargaEKS2 = this.state.harga_eksAnak;
        let AsyncHargaVIP1PP = this.state.harga_vipDewasaPP;
        let AsyncHargaVIP2PP = this.state.harga_vipAnakPP;
        let AsyncHargaEKS1PP = this.state.harga_eksDewasaPP;
        let AsyncHargaEKS2PP = this.state.harga_eksAnakPP;
        let AsyncPassPelabuhan = this.state.hargaPass;
        let AsyncPassPelabuhanPP = this.state.hargaPassPP;
        let AsyncAsuransi = this.state.hargaAsuransi;
        let AsyncId= this.state.tampilDetailJadwal1[0].id;
        let AsyncIdPulang=this.state.idPulang;
        let AsynctotalDewasa = this.state.totalDewasa;
        let AsynctotalAnak = this.state.totalAnak;
        let AsynctotalInfant = this.state.totalInfant;
        let AsyncTotalHarga = this.state.tempTotalHarga;
        let AsynctotalDewasaPP = this.state.totalDewasaPP;
        let AsynctotalAnakPP = this.state.totalAnakPP;
        let AsynctotalInfantPP = this.state.totalInfantPP;
        let AsyncTotalHargaPP = this.state.tempTotalHargaPP;
        let AsynctextAnak = this.state.textAnak;
        let AsynctextInfant = this.state.textInfant;
        let AsynctextAnakPP = this.state.textAnakPP;
        let AsynctextInfantPP = this.state.textInfantPP;
        let AsyncRandomNumber = this.state.NumberHolder;
        let AsyncKodeRute1 = this.state.koderute;
        let AsyncKodeRute2 = this.state.koderutePP;
        let AsyncTanggal = this.state.date;
        let AsyncTanggal2 = this.state.date2;
        let AsyncJenisTiket = this.state.JenisTiket;
        let AsyncETD = this.state.ETD;
        let AsyncETA = this.state.ETA;
        let AsyncETDPP = this.state.ETDPP;
        let AsyncETAPP = this.state.ETAPP;
        let AsyncJadwal = this.state.jadwal;
        let AsyncKapal = this.state.Kapal;
        let AsyncKapalPP = this.state.KapalPP;
        let AsyncNama = this.state.AsyncNama;
        let AsyncTotalPenumpang = this.state.totalPenumpang;
        let AsyncHargaTiketDewasa = this.state.rpHargaDewasa;
        let AsyncHargaTiketAnak = this.state.rpHargaAnak;
        let AsyncHargaTiketInfant = this.state.rpHargaInfant ;
        let AsyncTotalPenumpangPP = this.state.totalPenumpangPP;
        let AsyncHargaTiketDewasaPP = this.state.rpHargaDewasaPP;
        let AsyncHargaTiketAnakPP = this.state.rpHargaAnakPP;
        let AsyncHargaTiketInfantPP = this.state.rpHargaInfantPP ;
      
        let data = {
          AsyncNomorPesanan :AsyncNomorPesanan  ,
            AsyncIdKupon:AsyncIdKupon,
            AsyncIdKpnSaya:AsyncIdKpnSaya,
            AsyncIdPromo:AsyncIdPromo,
            AsyncPotongan:AsyncPotongan,
            AsyncPenumpangVIP:AsyncPenumpangVIP,
            AsyncPenumpangPPVIP:AsyncPenumpangPPVIP,
            AsyncPenumpangEXE:AsyncPenumpangEXE,
            AsyncPenumpangPPEXE:AsyncPenumpangPPEXE,
            AsyncValuePenumpang:AsyncValuePenumpang,
            AsyncValuePenumpangPP:AsyncValuePenumpangPP,
            AsyncJT:AsyncJT,
            AsyncTotalPotongan:AsyncTotalPotongan,
            AsyncPotonganDewasa:AsyncPotonganDewasa,
            AsyncPotonganAnak:AsyncPotonganAnak,
            AsyncAsal:AsyncAsal,
            AsyncTujuan:AsyncTujuan,
            AsyncHargaTiketDewasa:AsyncHargaTiketDewasa,
            AsyncHargaTiketAnak:AsyncHargaTiketAnak,
            AsyncHargaTiketInfant:AsyncHargaTiketInfant,
            AsyncHargaTiketDewasaPP:AsyncHargaTiketDewasaPP,
            AsyncHargaTiketAnakPP:AsyncHargaTiketAnakPP,
            AsyncHargaTiketInfantPP:AsyncHargaTiketInfantPP,
            AsyncDewasa: AsyncDewasa,
            AsyncAnak: AsyncAnak,
            AsyncInfant: AsyncInfant,
            AsyncKelas: AsyncKelas,
            AsyncHargaVIP1:AsyncHargaVIP1,
            AsyncHargaVIP2:AsyncHargaVIP2,
            AsyncHargaEKS1:AsyncHargaEKS1,
            AsyncHargaEKS2:AsyncHargaEKS2,
            AsyncHargaVIP1PP:AsyncHargaVIP1PP,
            AsyncHargaVIP2PP:AsyncHargaVIP2PP,
            AsyncHargaEKS1PP:AsyncHargaEKS1PP,
            AsyncHargaEKS2PP:AsyncHargaEKS2PP,
            AsyncId:AsyncId,
            AsyncIdPulang:AsyncIdPulang,
            AsyncPassPelabuhan:AsyncPassPelabuhan,
            AsyncPassPelabuhanPP:AsyncPassPelabuhanPP,
            AsyncAsuransi:AsyncAsuransi,
            AsynctotalDewasa:AsynctotalDewasa,
            AsynctotalAnak:AsynctotalAnak,
            AsynctotalInfant:AsynctotalInfant,
            AsyncTotalHarga:AsyncTotalHarga,
            AsynctextInfant:AsynctextInfant,
            AsynctextAnak:AsynctextAnak,
            AsynctotalDewasaPP:AsynctotalDewasaPP,
            AsynctotalAnakPP:AsynctotalAnakPP,
            AsynctotalInfantPP:AsynctotalInfantPP,
            AsyncTotalHargaPP:AsyncTotalHargaPP,
            AsynctextInfantPP:AsynctextInfantPP,
            AsynctextAnakPP:AsynctextAnakPP,
            AsyncKodeRute1:AsyncKodeRute1,
            AsyncKodeRute2:AsyncKodeRute2,
            AsyncTanggal:AsyncTanggal,
            AsyncTanggal2:AsyncTanggal2,
            AsyncJenisTiket:AsyncJenisTiket,
            AsyncJadwal:AsyncJadwal,
            AsyncETD:AsyncETD,
            AsyncETA:AsyncETA,
            AsyncETDPP:AsyncETDPP,
            AsyncETAPP:AsyncETAPP,
            AsyncKapal:AsyncKapal,
            AsyncKapalPP:AsyncKapalPP,
            AsyncNama:AsyncNama,
            AsyncTotalPenumpang:AsyncTotalPenumpang,
            AsyncTotalPenumpangPP:AsyncTotalPenumpangPP,
            AsyncJenisTiket:AsyncJenisTiket,
            AsyncEmail  :AsyncEmail ,
            collapsed2:collapsed2,
            collapsed3:collapsed3,
            HideTotalBayar:HideTotalBayar,
            HideTotalBayarPP:HideTotalBayarPP,
            HideTotalPesananPP:HideTotalPesananPP,
            HideDetailPesananPP:HideDetailPesananPP,
        }

        AsyncStorage.setItem('user', JSON.stringify(data));

        this.setState({
          AsyncNomorPesanan :AsyncNomorPesanan,  
          AsyncPotongan:AsyncPotongan,
            AsyncIdPromo:AsyncIdPromo,
            AsyncIdKupon:AsyncIdKupon,
            AsyncIdKpnSaya:AsyncIdKpnSaya,
          AsyncPenumpangVIP:AsyncPenumpangVIP,
            AsyncPenumpangPPVIP:AsyncPenumpangPPVIP,
            AsyncPenumpangEXE:AsyncPenumpangEXE,
            AsyncPenumpangPPEXE:AsyncPenumpangPPEXE,
          AsyncValuePenumpang:AsyncValuePenumpang,
          AsyncValuePenumpangPP:AsyncValuePenumpangPP,
          AsyncJT:AsyncJT,
          AsyncTotalPotongan:AsyncTotalPotongan,
          AsyncPotonganDewasa:AsyncPotonganDewasa,
            AsyncPotonganAnak:AsyncPotonganAnak,
          AsyncAsal:AsyncAsal,
            AsyncTujuan:AsyncTujuan,
          AsyncHargaTiketDewasa:AsyncHargaTiketDewasa,
            AsyncHargaTiketAnak:AsyncHargaTiketAnak,
            AsyncHargaTiketInfant:AsyncHargaTiketInfant,
            AsyncHargaTiketDewasaPP:AsyncHargaTiketDewasaPP,
            AsyncHargaTiketAnakPP:AsyncHargaTiketAnakPP,
            AsyncHargaTiketInfantPP:AsyncHargaTiketInfantPP,
            AsyncDewasa: AsyncDewasa,
            AsyncAnak: AsyncAnak,
            AsyncInfant: AsyncInfant,
            AsyncKelas: AsyncKelas,
            AsyncHargaVIP1:AsyncHargaVIP1,
            AsyncHargaVIP2:AsyncHargaVIP2,
            AsyncHargaEKS1:AsyncHargaEKS1,
            AsyncHargaEKS2:AsyncHargaEKS2,
            AsyncHargaVIP1PP:AsyncHargaVIP1PP,
            AsyncHargaVIP2PP:AsyncHargaVIP2PP,
            AsyncHargaEKS1PP:AsyncHargaEKS1PP,
            AsyncHargaEKS2PP:AsyncHargaEKS2PP,
            AsyncId:AsyncId,
            AsyncIdPulang:AsyncIdPulang,
            AsyncPassPelabuhan:AsyncPassPelabuhan,
            AsyncPassPelabuhanPP:AsyncPassPelabuhanPP,
            AsyncAsuransi:AsyncAsuransi,
            AsynctotalDewasa:AsynctotalDewasa,
            AsynctotalAnak:AsynctotalAnak,
            AsynctotalInfant:AsynctotalInfant,
            AsyncTotalHarga:AsyncTotalHarga,
            AsynctextInfant:AsynctextInfant,
            AsynctextAnak:AsynctextAnak,
            AsynctotalDewasaPP:AsynctotalDewasaPP,
            AsynctotalAnakPP:AsynctotalAnakPP,
            AsynctotalInfantPP:AsynctotalInfantPP,
            AsyncTotalHargaPP:AsyncTotalHargaPP,
            AsynctextInfantPP:AsynctextInfantPP,
            AsynctextAnakPP:AsynctextAnakPP,
            AsyncKodeRute1:AsyncKodeRute1,
            AsyncKodeRute2:AsyncKodeRute2,
            AsyncTanggal:AsyncTanggal,
            AsyncTanggal2:AsyncTanggal2,
            AsyncJenisTiket:AsyncJenisTiket,
            AsyncJadwal:AsyncJadwal,
            AsyncETD:AsyncETD,
            AsyncETA:AsyncETA,
            AsyncETDPP:AsyncETDPP,
            AsyncETAPP:AsyncETAPP,
            AsyncKapal:AsyncKapal,
            AsyncKapalPP:AsyncKapalPP,
            AsyncNama:AsyncNama,
            AsyncTotalPenumpang:AsyncTotalPenumpang,
            AsyncTotalPenumpangPP:AsyncTotalPenumpangPP,
            AsyncJenisTiket:AsyncJenisTiket,
            AsyncEmail  :AsyncEmail ,
            collapsed2:collapsed2,
            collapsed3:collapsed3,
            HideTotalBayar:HideTotalBayar,
            HideTotalBayarPP:HideTotalBayarPP,
            HideTotalPesananPP:HideTotalPesananPP,
            HideDetailPesananPP:HideDetailPesananPP,
        });
     this.props.navigation.navigate('Transfer_Bank_en')
    }
    rupiah(){
  if(this.state.rpTotalHarga.toString().length==5){
      this.setState({
        rpTotalHarga: this.state.rpTotalHarga.toString().substring(0, 2)+'.'+this.state.rpTotalHarga.toString().substring(2, 5),
      });
    }
   else if(this.state.rpTotalHarga.toString().length==6){
      this.setState({
        rpTotalHarga: this.state.rpTotalHarga.toString().substring(0, 3)+'.'+this.state.rpTotalHarga.toString().substring(3, 6),
      });
    }
    else if(this.state.rpTotalHarga.toString().length==7){
      this.setState({
        rpTotalHarga: this.state.rpTotalHarga.toString().substring(0, 1)+'.'+this.state.rpTotalHarga.toString().substring(1, 4)+'.'+this.state.rpTotalHarga.toString().substring(4, 7),
      });
    }
    else if(this.state.rpTotalHarga.toString().length==8){
      this.setState({
        rpTotalHarga: this.state.rpTotalHarga.toString().substring(0, 2)+'.'+this.state.rpTotalHarga.toString().substring(2, 5)+'.'+this.state.rpTotalHarga.toString().substring(5, 8),
      });
    }
  }
  rupiahPP(){
  if(this.state.rpTotalHargaPP.toString().length==5){
      this.setState({
        rpTotalHargaPP: this.state.rpTotalHargaPP.toString().substring(0, 2)+'.'+this.state.rpTotalHargaPP.toString().substring(2, 5),
      });
    }
   else if(this.state.rpTotalHargaPP.toString().length==6){
      this.setState({
        rpTotalHargaPP: this.state.rpTotalHargaPP.toString().substring(0, 3)+'.'+this.state.rpTotalHargaPP.toString().substring(3, 6),
      });
    }
    else if(this.state.rpTotalHargaPP.toString().length==7){
      this.setState({
        rpTotalHargaPP: this.state.rpTotalHargaPP.toString().substring(0, 1)+'.'+this.state.rpTotalHargaPP.toString().substring(1, 4)+'.'+this.state.rpTotalHargaPP.toString().substring(4, 7),
      });
    }
    else if(this.state.rpTotalHargaPP.toString().length==8){
      this.setState({
        rpTotalHargaPP: this.state.rpTotalHargaPP.toString().substring(0, 2)+'.'+this.state.rpTotalHargaPP.toString().substring(2, 5)+'.'+this.state.rpTotalHargaPP.toString().substring(5, 8),
      });
    }
  }
rupiahPotongan(){
  if(this.state.totalDiskon.toString().length==5){
      this.setState({
        totalDiskon: this.state.totalDiskon.toString().substring(0, 2)+'.'+this.state.totalDiskon.toString().substring(2, 5),
      });
    }
   else if(this.state.totalDiskon.toString().length==6){
      this.setState({
        totalDiskon: this.state.totalDiskon.toString().substring(0, 3)+'.'+this.state.totalDiskon.toString().substring(3, 6),
      });
    }
    else if(this.state.totalDiskon.toString().length==7){
      this.setState({
        totalDiskon: this.state.totalDiskon.toString().substring(0, 1)+'.'+this.state.totalDiskon.toString().substring(1, 4)+'.'+this.state.totalDiskon.toString().substring(4, 7),
      });
    }
    else if(this.state.totalDiskon.toString().length==8){
      this.setState({
        totalDiskon: this.state.totalDiskon.toString().substring(0, 2)+'.'+this.state.totalDiskon.toString().substring(2, 5)+'.'+this.state.totalDiskon.toString().substring(5, 8),
      });
    }
  }
  rupiahTotalHargaPromo(){
  if(this.state.totalHargaPromo.toString().length==5){
      this.setState({
        totalHargaPromo: this.state.totalHargaPromo.toString().substring(0, 2)+'.'+this.state.totalHargaPromo.toString().substring(2, 5),
      });
    }
   else if(this.state.totalHargaPromo.toString().length==6){
      this.setState({
        totalHargaPromo: this.state.totalHargaPromo.toString().substring(0, 3)+'.'+this.state.totalHargaPromo.toString().substring(3, 6),
      });
    }
    else if(this.state.totalHargaPromo.toString().length==7){
      this.setState({
        totalHargaPromo: this.state.totalHargaPromo.toString().substring(0, 1)+'.'+this.state.totalHargaPromo.toString().substring(1, 4)+'.'+this.state.totalHargaPromo.toString().substring(4, 7),
      });
    }
    else if(this.state.totalHargaPromo.toString().length==8){
      this.setState({
        totalHargaPromo: this.state.totalHargaPromo.toString().substring(0, 2)+'.'+this.state.totalHargaPromo.toString().substring(2, 5)+'.'+this.state.totalHargaPromo.toString().substring(5, 8),
      });
    }
  }
    _toggleModalInputPromo = () =>{
    
    this.setState({ isModalVisiblePromo: !this.state.isModalVisiblePromo });
    
    if(this.state.isModalVisiblePromo==true){
    this.setState({
                    kodepromo:'',
                  });  

    }
    else{
     this.setState({
                      kodepromo:'',
                    });   
    }

  }
    updateRef(name, ref) {
      this[name] = ref;
    }
    onChangeText(text) {
      ['typography']
        .map((name) => ({ name, ref: this[name] }))
        .filter(({ ref }) => ref && ref.isFocused())
        .forEach(({ name, ref }) => {
          this.setState({ [name]: text });
        });
    }
    updateRef2(name, ref) {
      this[name] = ref;
    }
    onChangeText2(text) {
      ['kewarganegaraan']
        .map((name) => ({ name, ref: this[name] }))
        .filter(({ ref }) => ref && ref.isFocused())
        .forEach(({ name, ref }) => {
          this.setState({ [name]: text });
        });
    }
    updateRef3(name, ref) {
      this[name] = ref;
    }
    onChangeText3(text) {
      ['gender']
        .map((name) => ({ name, ref: this[name] }))
        .filter(({ ref }) => ref && ref.isFocused())
        .forEach(({ name, ref }) => {
          this.setState({ [name]: text });
        });
    }
  
    removePeople=() =>{
      let newList = this.state.SECTIONS
      newList.splice(1,1);
    this.setState({SECTIONS:newList})
    }
 
    _renderHeader = section => {
      return (
        <Card style={{height:40,borderRadius:8, }}>
          <CardItem style={{height:40, backgroundColor:'transparent'}}>
          <Icon active name="ios-person" />
          <Text style={{fontSize: 15,}}>{this.state.judulheaderAccordion} {section.idx+1}</Text>
          <Text style={{fontSize: 15,color:'red'}}>*</Text>
          <Right>
            {
              this.state.show_icon?<Text style={{fontSize: 13, color:'#D3D3D3'}}>Isi Data</Text>:
            
            <View>
            {
              this.state.SECTIONS[section.idx].icon?<Icon active name="ios-checkmark-circle" style={{color:'#3F81B5'}}/>:
              <Icon active name="ios-close-circle" style={{color:'red'}}/>
            }
            </View>
            }
          </Right>
          </CardItem>
        </Card>
      );
    };
  
    _renderContent = section => {
      
    let gender=[{
        value: 'Laki-Laki/Male',
      },{
        value: 'Perempuan/Female',
    }];
  
    let kewarganegaraan =[{
        value: 'Indonesia',
      },
      { value: 'Afghanistan' },
      { value: 'South Africa' },
      { value: 'Central African' },
      { value: 'Albania' },
      { value: 'Algeria' },
      { value: 'United States of America' },
      { value: 'Andorra' },
      { value: 'Angola' },
      { value: 'Antigua dan Barbuda' },
      { value: 'Saudi Arabia' },
      { value: 'Argentina' },
      { value: 'Armenia' },
      { value: 'Australia' },
      { value: 'Austria' },
      { value: 'Azerbaijan' },
      { value: 'Bahama' },
      { value: 'Bahrain' },
      { value: 'Bangladesh' },
      { value: 'Barbados' },
      { value: 'Netherlands' },
      { value: 'Belarus' },
      { value: 'Belgium' },
      { value: 'Belize' },
      { value: 'Benin' },
      { value: 'Bhutan' },
      { value: 'Bolivia' },
      { value: 'Bosnia and Herzegovina' },
      { value: 'Botswana' },
      { value: 'Brazil' },
      { value: 'Great Britain' },
      { value: 'Brunei Darussalam' },
      { value: 'Bulgaria' },
      { value: 'Burkina Faso' },
      { value: 'Burundi' },
      { value: 'Czech Republic' },
      { value: 'Chad' },
      { value: 'Chile' },
      { value: 'China' },
      { value: 'Denmark' },
      { value: 'Djibouti' },
      { value: 'Dominica' },
      { value: 'Ecuador' },
      { value: 'El Salvador' },
      { value: 'Eritrea' },
      { value: 'Estonia' },
      { value: 'Ethiopia' },
      { value: 'Fiji' },
      { value: 'Philippines' },
      { value: 'Finlandia' },
      { value: 'Gabon' },
      { value: 'Gambia' },
      { value: 'Georgia' },
      { value: 'Ghana' },
      { value: 'Grenada' },
      { value: 'Guatemala' },
      { value: 'Guinea' },
      { value: 'Guinea-Bissau' },
      { value: 'Guinea Khatulistiwa' },
      { value: 'Guyana' },
      { value: 'Haiti' },
      { value: 'Honduras' },
      { value: 'Hungary' },
      { value: 'India' },
      { value: 'United Kingdom' },
      { value: 'Irak' },
      { value: 'Iran' },
      { value: 'Ireland' },
      { value: 'Iceland' },
      { value: 'Israel' },
      { value: 'Italy' },
      { value: 'Jamaica' },
      { value: 'Japan' },
      { value: 'Germany' },
      { value: 'Cambodia' },
      { value: 'Cameroon' },
      { value: 'Canada' },
      { value: 'Kazakhstan' },
      { value: 'Kenya' },
      { value: 'Kyrgyzstan' },
      { value: 'Kiribati' },
      { value: 'Colombia' },
      { value: 'Comoros' },
      { value: 'Congo Republic' },
      { value: 'South Korea' },
      { value: 'North Korea' },
      { value: 'Costa Rica' },
      { value: 'Croatia' },
      { value: 'Cuba' },
      { value: 'Kuwait' },
      { value: 'Laos' },
      { value: 'Latvia' },
      { value: 'Lebanon' },
      { value: 'Lesotho' },
      { value: 'Liberia' },
      { value: 'Libya' },
      { value: 'Liechtenstein' },
      { value: 'Lithuania' },
      { value: 'Luxembourg' },
      { value: 'Madagascar' },
      { value: 'Macedonia' },
      { value: 'Maldives' },
      { value: 'Malawi' },
      { value: 'Malaysia' },
      { value: 'Mali' },
      { value: 'Malta' },
      { value: 'Morocco' },
      { value: 'Marshall Islands' },
      { value: 'Mauritania' },
      { value: 'Mauritius' },
      { value: 'Mexico' },
      { value: 'Egypt' },
      { value: 'Micronesia' },
      { value: 'Moldova' },
      { value: 'Monaco' },
      { value: 'Mongolia' },
      { value: 'Montenegro' },
      { value: 'Mozambique' },
      { value: 'Myanmar' },
      { value: 'Namibia' },
      { value: 'Nauru' },
      { value: 'Nepal' },
      { value: 'Niger' },
      { value: 'Nigeria' },
      { value: 'Nicaragua' },
      { value: 'Norway' },
      { value: 'Oman' },
      { value: 'Pakistan' },
      { value: 'Palau' },
      { value: 'Panama' },
      { value: 'Ivory Coast' },
      { value: 'Papua New Guinea' },
      { value: 'Paraguay' },
      { value: 'France' },
      { value: 'Peru' },
      { value: 'Poland' },
      { value: 'Portugal' },
      { value: 'Qatar' },
      { value: 'Democratic Republic of the Congo' },
      { value: 'Dominican Republic' },
      { value: 'Romania' },
      { value: 'Russia' },
      { value: 'Rwanda' },
      { value: 'Saint Kitts and Nevis' },
      { value: 'Saint Lucia' },
      { value: 'Saint Vincent and the Grenadines' },
      { value: 'Samoa' },
      { value: 'San Marino' },
      { value: 'Sao Tome and Principe' },
      { value: 'New Zealand' },
      { value: 'Senegal' },
      { value: 'Serbia' },
      { value: 'Seychelles' },
      { value: 'Sierra Leone' },
      { value: 'Singapore' },
      { value: 'Cyprus' },
      { value: 'Slovenia' },
      { value: 'Slovakia' },
      { value: 'Solomon Islands' },
      { value: 'Somalia' },
      { value: 'Spain' },
      { value: 'Sri Lanka' },
      { value: 'Sudan' },
      { value: 'South Sudan' },
      { value: 'Syria' },
      { value: 'Suriname' },
      { value: 'Swaziland' },
      { value: 'Sweden' },
      { value: 'Swiss' },
      { value: 'Tajikistan' },
      { value: 'Cape Verde' },
      { value: 'Tanzania' },
      { value: 'Thailand' },
      { value: 'Timor Leste' },
      { value: 'Togo' },
      { value: 'Tonga' },
      { value: 'Trinidad and Tobago' },
      { value: 'Tunisia' },
      { value: 'Turkey' },
      { value: 'Turkmenistan' },
      { value: 'Tuvalu' },
      { value: 'Uganda' },
      { value: 'Ukraine' },
      { value: 'United Arab Emirates' },
      { value: 'Uruguay' },
      { value: 'Uzbekistan' },
      { value: 'Vanuatu' },
      { value: 'Venezuela' },
      { value: 'Vietnam' },
      { value: 'Yemen' },
      { value: 'Jordan' },
      { value: 'Yugoslavia' },
      { value: 'Greek' },
      { value: 'Zambia' },
      { value: 'Zimbabwe' }

      ];
      return (
        
          
          <View style={{ width:'95%',marginTop:-15,marginBottom:5, margin:10,backgroundColor:'#fff', borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
          <View style={{margin:15}}>
            <Dropdown
              label='Title'
              value={this.state.SECTIONS[section.idx].title}
              fontSize={14}
              data={title}
              ref={this.typographyRef}
              onChangeText={(value) => {
                const newArray = [...this.state.SECTIONS];
                newArray[section.idx].title = value;
                newArray[section.idx].s_title = 1;
                newArray[section.idx].s_total = 1 + section.s_namadepan + section.s_namabelakang;
                this.setState({ SECTIONS: newArray });}}
            />
            
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' marginTop={-25} fontSize={14} underlineActiveColor='#3F81B5' value={this.state.SECTIONS[section.idx].nama_depan} onChangeText={text => {
                const newArray = [...this.state.SECTIONS];
                newArray[section.idx].nama_depan = text;
                this.setState({ SECTIONS: newArray });
                if(text==''){
                  const newArray = [...this.state.SECTIONS];
                  newArray[section.idx].s_namadepan = 0;
                  newArray[section.idx].s_total = 0 + this.state.SECTIONS[section.idx].s_title + this.state.SECTIONS[section.idx].s_namabelakang;
                  this.setState({ SECTIONS: newArray });
                }
                else{
                  const newArray = [...this.state.SECTIONS];
                  newArray[section.idx].s_namadepan = 1;
                  newArray[section.idx].s_total = 1 + this.state.SECTIONS[section.idx].s_title + this.state.SECTIONS[section.idx].s_namabelakang;
                  this.setState({ SECTIONS: newArray });
                }}}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' marginTop={-60} fontSize={14} underlineActiveColor='#3F81B5' value={this.state.SECTIONS[section.idx].nama_belakang} onChangeText={text => {
                const newArray = [...this.state.SECTIONS];
                newArray[section.idx].nama_belakang = text;
                this.setState({ SECTIONS: newArray });
                if(text==''){
                  const newArray = [...this.state.SECTIONS];
                  newArray[section.idx].s_namabelakang = 0;
                  newArray[section.idx].s_total = 0 + this.state.SECTIONS[section.idx].s_title + this.state.SECTIONS[section.idx].s_namadepan;
                  this.setState({ SECTIONS: newArray });
                }
                else{
                  const newArray = [...this.state.SECTIONS];
                  newArray[section.idx].s_namabelakang = 1;
                  newArray[section.idx].s_total = 1 + this.state.SECTIONS[section.idx].s_title + this.state.SECTIONS[section.idx].s_namadepan;
                  this.setState({ SECTIONS: newArray });
                }}}/>
            <Dropdown
              label='Nationality'
              value={this.state.SECTIONS[section.idx].kwn}
              fontSize={14}
              data={kewarganegaraan}
              containerStyle={{marginTop:-45}}
              ref={this.typographyRef2}
              onChangeText={(value) => {
                const newArray = [...this.state.SECTIONS];
                newArray[section.idx].kwn = value;
                this.setState({ SECTIONS: newArray });}}
            />
            </View>
          </View>
        
      );
    };

    _renderContentInfant = section => {
      
      let gender=[{
          value: 'Laki-Laki/Male',
        },{
          value: 'Perempuan/Female',
      }];

      let umur=[{
        value: '0 - 12 Bulan',
      },{
        value: '1 Tahun',
      },{
        value: '2 Tahun',
      },{
        value: '3 Tahun',
      },{
        value: '4 Tahun',
      },{
        value: '5 Tahun',
    }];
    
      let kewarganegaraan =[{
          value: 'Indonesia',
        },
        { value: 'Afghanistan' },
        { value: 'South Africa' },
        { value: 'Central African' },
        { value: 'Albania' },
        { value: 'Algeria' },
        { value: 'United States of America' },
        { value: 'Andorra' },
        { value: 'Angola' },
        { value: 'Antigua dan Barbuda' },
        { value: 'Saudi Arabia' },
        { value: 'Argentina' },
        { value: 'Armenia' },
        { value: 'Australia' },
        { value: 'Austria' },
        { value: 'Azerbaijan' },
        { value: 'Bahama' },
        { value: 'Bahrain' },
        { value: 'Bangladesh' },
        { value: 'Barbados' },
        { value: 'Netherlands' },
        { value: 'Belarus' },
        { value: 'Belgium' },
        { value: 'Belize' },
        { value: 'Benin' },
        { value: 'Bhutan' },
        { value: 'Bolivia' },
        { value: 'Bosnia and Herzegovina' },
        { value: 'Botswana' },
        { value: 'Brazil' },
        { value: 'Great Britain' },
        { value: 'Brunei Darussalam' },
        { value: 'Bulgaria' },
        { value: 'Burkina Faso' },
        { value: 'Burundi' },
        { value: 'Czech Republic' },
        { value: 'Chad' },
        { value: 'Chile' },
        { value: 'China' },
        { value: 'Denmark' },
        { value: 'Djibouti' },
        { value: 'Dominica' },
        { value: 'Ecuador' },
        { value: 'El Salvador' },
        { value: 'Eritrea' },
        { value: 'Estonia' },
        { value: 'Ethiopia' },
        { value: 'Fiji' },
        { value: 'Philippines' },
        { value: 'Finlandia' },
        { value: 'Gabon' },
        { value: 'Gambia' },
        { value: 'Georgia' },
        { value: 'Ghana' },
        { value: 'Grenada' },
        { value: 'Guatemala' },
        { value: 'Guinea' },
        { value: 'Guinea-Bissau' },
        { value: 'Guinea Khatulistiwa' },
        { value: 'Guyana' },
        { value: 'Haiti' },
        { value: 'Honduras' },
        { value: 'Hungary' },
        { value: 'India' },
        { value: 'United Kingdom' },
        { value: 'Irak' },
        { value: 'Iran' },
        { value: 'Ireland' },
        { value: 'Iceland' },
        { value: 'Israel' },
        { value: 'Italy' },
        { value: 'Jamaica' },
        { value: 'Japan' },
        { value: 'Germany' },
        { value: 'Cambodia' },
        { value: 'Cameroon' },
        { value: 'Canada' },
        { value: 'Kazakhstan' },
        { value: 'Kenya' },
        { value: 'Kyrgyzstan' },
        { value: 'Kiribati' },
        { value: 'Colombia' },
        { value: 'Comoros' },
        { value: 'Congo Republic' },
        { value: 'South Korea' },
        { value: 'North Korea' },
        { value: 'Costa Rica' },
        { value: 'Croatia' },
        { value: 'Cuba' },
        { value: 'Kuwait' },
        { value: 'Laos' },
        { value: 'Latvia' },
        { value: 'Lebanon' },
        { value: 'Lesotho' },
        { value: 'Liberia' },
        { value: 'Libya' },
        { value: 'Liechtenstein' },
        { value: 'Lithuania' },
        { value: 'Luxembourg' },
        { value: 'Madagascar' },
        { value: 'Macedonia' },
        { value: 'Maldives' },
        { value: 'Malawi' },
        { value: 'Malaysia' },
        { value: 'Mali' },
        { value: 'Malta' },
        { value: 'Morocco' },
        { value: 'Marshall Islands' },
        { value: 'Mauritania' },
        { value: 'Mauritius' },
        { value: 'Mexico' },
        { value: 'Egypt' },
        { value: 'Micronesia' },
        { value: 'Moldova' },
        { value: 'Monaco' },
        { value: 'Mongolia' },
        { value: 'Montenegro' },
        { value: 'Mozambique' },
        { value: 'Myanmar' },
        { value: 'Namibia' },
        { value: 'Nauru' },
        { value: 'Nepal' },
        { value: 'Niger' },
        { value: 'Nigeria' },
        { value: 'Nicaragua' },
        { value: 'Norway' },
        { value: 'Oman' },
        { value: 'Pakistan' },
        { value: 'Palau' },
        { value: 'Panama' },
        { value: 'Ivory Coast' },
        { value: 'Papua New Guinea' },
        { value: 'Paraguay' },
        { value: 'France' },
        { value: 'Peru' },
        { value: 'Poland' },
        { value: 'Portugal' },
        { value: 'Qatar' },
        { value: 'Democratic Republic of the Congo' },
        { value: 'Dominican Republic' },
        { value: 'Romania' },
        { value: 'Russia' },
        { value: 'Rwanda' },
        { value: 'Saint Kitts and Nevis' },
        { value: 'Saint Lucia' },
        { value: 'Saint Vincent and the Grenadines' },
        { value: 'Samoa' },
        { value: 'San Marino' },
        { value: 'Sao Tome and Principe' },
        { value: 'New Zealand' },
        { value: 'Senegal' },
        { value: 'Serbia' },
        { value: 'Seychelles' },
        { value: 'Sierra Leone' },
        { value: 'Singapore' },
        { value: 'Cyprus' },
        { value: 'Slovenia' },
        { value: 'Slovakia' },
        { value: 'Solomon Islands' },
        { value: 'Somalia' },
        { value: 'Spain' },
        { value: 'Sri Lanka' },
        { value: 'Sudan' },
        { value: 'South Sudan' },
        { value: 'Syria' },
        { value: 'Suriname' },
        { value: 'Swaziland' },
        { value: 'Sweden' },
        { value: 'Swiss' },
        { value: 'Tajikistan' },
        { value: 'Cape Verde' },
        { value: 'Tanzania' },
        { value: 'Thailand' },
        { value: 'Timor Leste' },
        { value: 'Togo' },
        { value: 'Tonga' },
        { value: 'Trinidad and Tobago' },
        { value: 'Tunisia' },
        { value: 'Turkey' },
        { value: 'Turkmenistan' },
        { value: 'Tuvalu' },
        { value: 'Uganda' },
        { value: 'Ukraine' },
        { value: 'United Arab Emirates' },
        { value: 'Uruguay' },
        { value: 'Uzbekistan' },
        { value: 'Vanuatu' },
        { value: 'Venezuela' },
        { value: 'Vietnam' },
        { value: 'Yemen' },
        { value: 'Jordan' },
        { value: 'Yugoslavia' },
        { value: 'Greek' },
        { value: 'Zambia' },
        { value: 'Zimbabwe' }
        ];
        return (
          
            
            <View style={{ width:'95%',marginTop:-15,marginBottom:5, margin:10,backgroundColor:'#fff', borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
            <View style={{margin:15}}>
              <Dropdown
                label='Title'
                value={this.state.SECTIONS[section.idx].title}
                fontSize={14}
                data={title}
                ref={this.typographyRef}
                onChangeText={(value) => {
                  const newArray = [...this.state.SECTIONS];
                  newArray[section.idx].title = value;
                  newArray[section.idx].s_title = 1;
                  newArray[section.idx].s_total = 1 + this.state.SECTIONS[section.idx].s_namadepan + this.state.SECTIONS[section.idx].s_namabelakang + this.state.SECTIONS[section.idx].s_umur;
                  this.setState({ SECTIONS: newArray });
                }}
              />
              
              <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' marginTop={-25} fontSize={14} underlineActiveColor='#3F81B5' value={this.state.SECTIONS[section.idx].nama_depan} onChangeText={text => {
                  const newArray = [...this.state.SECTIONS];
                  newArray[section.idx].nama_depan = text;
                  this.setState({ SECTIONS: newArray });
                  if(text==''){
                    const newArray = [...this.state.SECTIONS];
                    newArray[section.idx].s_namadepan = 0;
                    newArray[section.idx].s_total = 0 + this.state.SECTIONS[section.idx].s_title + this.state.SECTIONS[section.idx].s_namabelakang;
                    this.setState({ SECTIONS: newArray });
                  }
                  else{
                    const newArray = [...this.state.SECTIONS];
                    newArray[section.idx].s_namadepan = 1;
                    newArray[section.idx].s_total = 1 + this.state.SECTIONS[section.idx].s_title + this.state.SECTIONS[section.idx].s_namabelakang;
                    this.setState({ SECTIONS: newArray });
                  }}}/>
              <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' marginTop={-60} fontSize={14} underlineActiveColor='#3F81B5' value={this.state.SECTIONS[section.idx].nama_belakang} onChangeText={text => {
                  const newArray = [...this.state.SECTIONS];
                  newArray[section.idx].nama_belakang = text;
                  this.setState({ SECTIONS: newArray });
                  if(text==''){
                    const newArray = [...this.state.SECTIONS];
                    newArray[section.idx].s_namabelakang = 0;
                    newArray[section.idx].s_total = 0 + this.state.SECTIONS[section.idx].s_title + this.state.SECTIONS[section.idx].s_namadepan;
                    this.setState({ SECTIONS: newArray });
                  }
                  else{
                    const newArray = [...this.state.SECTIONS];
                    newArray[section.idx].s_namabelakang = 1;
                    newArray[section.idx].s_total = 1 + this.state.SECTIONS[section.idx].s_title + this.state.SECTIONS[section.idx].s_namadepan;
                    this.setState({ SECTIONS: newArray });
                  }}}/>

            <Dropdown
                label='Umur'
                value={this.state.SECTIONS[section.idx].umur}
                fontSize={14}
                data={umur}
                containerStyle={{marginTop:-45}}
                ref={this.typographyRef2}
                onChangeText={(value) => {
                  const newArray = [...this.state.SECTIONS];
                  newArray[section.idx].umur = value;
                  newArray[section.idx].s_umur = 1;
                  newArray[section.idx].s_total = 1 + this.state.SECTIONS[section.idx].s_namadepan + this.state.SECTIONS[section.idx].s_namabelakang + this.state.SECTIONS[section.idx].s_title;
                  this.setState({ SECTIONS: newArray });}}
              />
                  
              <Dropdown
                label='Nationality'
                value={this.state.SECTIONS[section.idx].kwn}
                fontSize={14}
                data={kewarganegaraan}
                containerStyle={{marginTop:2}}
                ref={this.typographyRef2}
                onChangeText={(value) => {
                  const newArray = [...this.state.SECTIONS];
                  newArray[section.idx].kwn = value;
                  this.setState({ SECTIONS: newArray });}}
              />
              </View>
            </View>
          
        );
      };
  
    _updateSections = activeSections => {
      this.setState({ activeSections });
    };

  render() {
   
    return (
      
      <Container>
        <StatusBar 
        barStyle = "light-content" 
        hidden = {false}
        backgroundColor = "#00BCD4"
        translucent = {true}
        networkActivityIndicatorVisible = {true}
        />
      

      
      <Spinner visible={this.state.loading2}/>
      <Dialog
            animationType="slide"
            contentStyle={
                {
                    alignItems: "center",
                    justifyContent: "center",
                    
                }
                
            }
            
            visible={ this.state.showDialog2 }>
              <View>
                  <Text>Pilih Kelas</Text>
              </View>      
              <View style={{backgroundColor:'#F4F0E5', width:'100%', height:2}}/>

              <View style={{backgroundColor:'#F2F2F2', width:'100%', marginTop:5}}>
             <View block style={{width:'100%', backgroundColor:'#3F81B5', alignItems:'center'}} onPress={ () => this.UbahKelasVIP()}>
                  <Text>VIP</Text>
              </View>
              </View>

              <View style={{backgroundColor:'#F4F0E5', width:'100%', marginTop:5, alignItems:'center', justifyContent:'center', borderRadius:10}}>
                <View block style={{width:'100%', backgroundColor:'#3F81B5', alignItems:'center', justifyContent:'center'}} onPress={ () => this.UbahKelasEXE()}>
                  <Text>EKSEKUTIF</Text>
              </View>
              </View>
              
              
        </Dialog>
      <Dialog
            animationType="slide"
            contentStyle={
                {
                    alignItems: "center",
                    justifyContent: "center",
                    
                }
                
            }
        
            visible={ this.state.showDialog }>
                    
              <View style={{flexDirection: 'row'}}>
                <View style={{width:'33%'}}>
                  <CardItem style={{alignSelf:'center',height:20,marginTop:10}}>
                    <Text style={{fontSize: 15,fontWeight: 'bold',}}>Dewasa</Text>
                  </CardItem>
                  <CardItem style={{alignSelf:'center',height:10,}}>
                    <Text style={{fontSize: 12,}}>> 12 thn</Text>
                  </CardItem>

                  <CardItem style={{alignSelf:'center', marginTop:10}}>
                    <Button onPress={ () => this.tambahValueDewasa()} rounded style={{backgroundColor:'#3F81B5'}}>
                      <Icon name='ios-arrow-up-outline' />
                    </Button>
                  </CardItem>
                  <View style={{alignSelf:'center', backgroundColor:'#F4F0E5', width:'100%', alignItems:'center', height:40}}>
                    <Text style={{fontSize: 25,fontWeight: 'bold',}}>{this.state.ValueDewasa}</Text>
                  </View>
                  <CardItem style={{alignSelf:'center'}}>
                    <Button onPress={ () => this.kurangValueDewasa()}rounded style={{backgroundColor:'#3F81B5'}}>
                      <Icon name='ios-arrow-down-outline' />
                    </Button>
                  </CardItem>
                </View>

                <View style={{width:'33%'}}>
                  <CardItem style={{alignSelf:'center',height:20,marginTop:10}}>
                    <Text style={{fontSize: 15,fontWeight: 'bold',}}>Anak</Text>
                  </CardItem>
                  <CardItem style={{alignSelf:'center',height:10,}}>
                    <Text style={{fontSize: 12,}}>2 - 11 thn</Text>
                  </CardItem>

                  <CardItem style={{alignSelf:'center', marginTop:10}}>
                    <Button onPress={ () => this.tambahValueAnak() } rounded style={{backgroundColor:'#3F81B5'}}>
                      <Icon name='ios-arrow-up-outline' />
                    </Button>
                  </CardItem>
                  <View style={{alignSelf:'center', backgroundColor:'#F4F0E5', width:'100%', alignItems:'center', height:40}}>
                    <Text style={{fontSize: 25,fontWeight: 'bold',}}>{this.state.ValueAnak}</Text>
                  </View>
                  <CardItem style={{alignSelf:'center'}}>
                    <Button onPress={ () => this.kurangValueAnak() } rounded style={{backgroundColor:'#3F81B5'}}>
                      <Icon name='ios-arrow-down-outline' />
                    </Button>
                  </CardItem>    
                </View>
                <View style={{width:'33%'}}>
                  <CardItem style={{alignSelf:'center',height:20,marginTop:10}}>
                    <Text style={{fontSize: 15,fontWeight: 'bold',}}>Bayi</Text>
                  </CardItem>
                  <CardItem style={{alignSelf:'center',height:10,}}>
                    <Text style={{fontSize: 12,}}> 2 thn</Text>
                  </CardItem>

                  <CardItem style={{alignSelf:'center', marginTop:10}}>
                  <Button onPress={ () => this.tambahValueInfant() } rounded style={{backgroundColor:'#3F81B5'}}>
                      <Icon name='ios-arrow-up-outline' />
                    </Button>
                  </CardItem>
                  <View style={{alignSelf:'center', backgroundColor:'#F4F0E5', width:'100%', alignItems:'center', height:40}}>
                    <Text style={{fontSize: 25,fontWeight: 'bold',}}>{this.state.ValueInfant}</Text>
                  </View>
                  <CardItem style={{alignSelf:'center'}}>
                    <Button onPress={ () => this.kurangValueInfant() }rounded style={{backgroundColor:'#3F81B5',}}>
                      <Icon name='ios-arrow-down-outline' />
                    </Button>
                  </CardItem>
                </View>
              </View>
              <CardItem style={{alignSelf:'center'}}>
                <Button block style={{width:'100%', backgroundColor:'#3F81B5'}} onPress={ () => this.openDialog(false) }>
                  <Text>Pilih</Text>
                </Button>
              </CardItem>
           
        </Dialog>
        
        <Header style={{backgroundColor:'#3F81B5', height:20,}}></Header> 
        <Header style={{backgroundColor:'#3F81B5',}}>
         
         <View style={styles.view}>
          <Title style={{marginTop:15,fontFamily:'SourceSansProBold', fontSize:21}}>Cari Tiket</Title>
          <Right>
            <Button transparent  onPress={() =>
                  this.props.navigation.goBack()}>
              <Icon name='close' style={{fontSize:30}} />
            </Button>
          </Right>
          </View>
        </Header>

        <ScrollView ref={(scrollView) => { this.scrollView = scrollView }} >
        <Content style={{backgroundColor:'#F4F0E5'}}>
        
       <BottomSheet
          visible={this.state.isModalVisible}
          onBackButtonPress={this._toggleModal}
          onBackdropPress={this._toggleModal}>
 
         
            <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
            
            <Header style={{backgroundColor:'#3F81B5',}}>
            
            <View style={styles.view}>
              <Title style={{marginTop:15, fontFamily:'SourceSansProBold'}}>Pilih Rute Pelayaran</Title>
              <Right>
                <Button transparent  onPress={this.closeModal}>
                  <Icon name='close' style={{fontSize:30}} />
                </Button>
              </Right>
              </View>
            </Header>
            <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
               {this.state.schedule.map((schedule)=>{
                return (

                    <View key={schedule.id}>
                    
                    <ListItem>
                    <TouchableOpacity onPress={this.Navigate_To_Second_Activity.bind(this, schedule.rute,schedule.kode_asal,schedule.kode_tujuan,schedule.asal,schedule.tujuan,schedule.kode_rute,schedule.asuransi,schedule.pass_pelabuhan,schedule.infant,schedule.kode_rute2,schedule.pass_pelabuhan2,schedule.infant2,schedule.potongan_pp,schedule.nama_pelabuhan,schedule.nama_pelabuhan2,schedule.rute2,schedule.asal2,schedule.kode_asal2,schedule.tujuan2,schedule.kode_tujuan2)}>
                      <CardItem style={{height:20, width:'100%'}}>
                      <Text style={{fontFamily:'SourceSansProBold'}}>{schedule.rute}</Text>
                      </CardItem>
                    </TouchableOpacity>
                    </ListItem>
                    
                    </View>
                  )
               })}
               </ScrollView>
          </View>

        </BottomSheet>
        <BottomSheet
          visible={this.state.BottomPopUp}
        

          >

            <View style={{justifyContent:'center',width: '100%', alignItems:'center',height:'100%'}}>

    <View style={{width:280,backgroundColor:'#fff', borderRadius:10, alignItems:'center'}}>
      <CardItem style={{backgroundColor:'transparent'}}>
          <Text>Pilih Jam Berangkat</Text>
      </CardItem>
      <View style={{backgroundColor:'#D3D3D3', width:'100%', height:1}}/>
      <View style={{marginTop:6, marginBottom:20}}> 
       {this.state.lengthJadwal.map((lengthJadwal,key)=>{
                return (
                    <View key={lengthJadwal.id}>
                    <TouchableOpacity onPress={this.GetItem.bind(this,key, lengthJadwal.id,lengthJadwal.harga_vip1,lengthJadwal.harga_vip2,lengthJadwal.harga_eks1,lengthJadwal.harga_eks2,lengthJadwal.harga_bus1,lengthJadwal.harga_bus2,lengthJadwal.rute,lengthJadwal.berangkat,lengthJadwal.tiba,lengthJadwal.tipe,lengthJadwal.kode_rute,lengthJadwal.block_exe,lengthJadwal.block_vip,lengthJadwal.k_exe,lengthJadwal.k_vip)}>
                        <View style={{width:250, alignContent:'center',backgroundColor:'#3F81B5', marginTop:8, borderRadius:5, alignItems:'center'}}>
                              <CardItem style={{height:30, backgroundColor:'transparent'}}>
                                  <Icon active name="md-boat" style={{fontSize: 15, color:'#ffffff'}}/>
                                  <Text style={{fontSize: 14, color:'#ffffff'}}> {lengthJadwal.tipe}</Text>
                              </CardItem>
                              <View style={{backgroundColor:'#D3D3D3', width:'100%', height:1}}/> 
                              <CardItem style={{height:30, backgroundColor:'transparent'}}>
                                <Text style={{color:'#ffffff', fontSize: 14,}}>{moment(this.state.date).format('DD MMM YYYY')}</Text>
            
                                <Text style={{color:'#ffffff', fontSize: 14,}}>, {lengthJadwal.berangkat} - {lengthJadwal.tiba}</Text>
                                   
                              </CardItem> 
                          </View>
                        </TouchableOpacity>
                            </View>
                          )
                       })} 
                      </View>
                      </View>
              </View>
                  
        </BottomSheet>

         <BottomSheet
          visible={this.state.BottomPopUp2}>
            <View style={{justifyContent:'center',width: '100%', alignItems:'center',height:'100%'}}>

    <View style={{width:280,backgroundColor:'#fff', borderRadius:10, alignItems:'center'}}>
      <CardItem style={{backgroundColor:'transparent'}}>
          <Text>Pilih Jam Pulang</Text>
      </CardItem>
      <View style={{backgroundColor:'#D3D3D3', width:'100%', height:1}}/>
      <View style={{marginTop:6, marginBottom:20}}> 
       {this.state.listPP.map((listPP, key)=>{
                return (
                    <View key={listPP.id}>
                    <TouchableOpacity onPress={this.GetItem2.bind(this,key, listPP.id,listPP.harga_vip1,listPP.harga_vip2,listPP.harga_eks1,listPP.harga_eks2,listPP.harga_bus1,listPP.harga_bus2,listPP.rute,listPP.berangkat,listPP.tiba,listPP.tipe,listPP.kode_rute,listPP.block_exe,listPP.block_vip,listPP.k_exe,listPP.k_vip)}>
                        <View style={{width:250, alignContent:'center',backgroundColor:'#3F81B5', marginTop:8, borderRadius:5, alignItems:'center'}}>
                              <CardItem style={{height:30, backgroundColor:'transparent'}}>
                                  <Icon active name="md-boat" style={{fontSize: 15, color:'#ffffff'}}/>
                                  <Text style={{fontSize: 14, color:'#ffffff'}}> {listPP.tipe}</Text>
                              </CardItem>
                              <View style={{backgroundColor:'#D3D3D3', width:'100%', height:1}}/> 
                              <CardItem style={{height:30, backgroundColor:'transparent'}}>
                                <Text style={{color:'#ffffff', fontSize: 14,}}>{moment(this.state.date2).format('DD MMM YYYY')}</Text>
            
                                <Text style={{color:'#ffffff', fontSize: 14,}}>, {listPP.berangkat} - {listPP.tiba}</Text>
                                   
                              </CardItem> 
                          </View>
                        </TouchableOpacity>
                            </View>
                          )
                       })} 
                      </View>
                      </View>
              </View>
                  
        </BottomSheet>



            <View style={{alignItems:'center', backgroundColor:'#fff'}}>  
               <View style={{flexDirection:'row', marginTop:15}}>
                <View style={{width:'80%'}}>
                <TouchableOpacity onPress={this._toggleModal}>
                    <View style={{height:40, backgroundColor:'#F4F0E5', width:'97%', borderRadius:10,}}>
                      <View style={{flexDirection:'row', width:'100%',height:35, alignContent:'center'}}>
                          <Text style={{fontSize:13, marginLeft:10, marginTop:9,fontFamily:'Roboto'}}>Asal       </Text>
                          <View style={{height:30, width:1, backgroundColor:'#606060',marginTop:5}}></View>
                          <Text style={{fontSize:14, marginLeft:10, marginTop:9, fontFamily:'SourceSansProBold'}}>{this.state.asal} ({this.state.namaPelabuhan})</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={{height:40, backgroundColor:'#F4F0E5', width:'97%', borderRadius:10,marginTop:10}}>
                    <View style={{flexDirection:'row', width:'100%',height:35, alignContent:'center'}}>
                        <Text style={{fontSize:13, marginLeft:10, marginTop:9}}>Tujuan   </Text>
                        <View style={{height:30, width:1, backgroundColor:'#606060',marginTop:5}}></View>
                        <Text style={{fontSize:14, marginLeft:10, marginTop:9, fontFamily:'SourceSansProBold'}}>{this.state.tujuan} ({this.state.namaPelabuhan2})</Text>
                    </View>
                  </View>
                </View>
                <View style={{width:'15%'}}>
                  <View style={{height:50,width:50, right:0,marginTop:15}}>
                      <Button rounded style={{backgroundColor:'#3F81B5', height:50, width:50}} onPress={this.cekChange} >
                          <Icon name='md-swap' style={{fontSize:19,}}/>
                      </Button>
                    </View>
                </View>
              </View>

              <View style={{flexDirection:'row', marginTop:15, alignItems:'center'}}>
                <View style={{width:'40%', alignItems:'center'}}>
                  {this.state.viewvisiblePergi?<Text style={{fontSize:12}}>Tanggal Keberangkatan</Text>:<Text style={{fontSize:12, color:'#F4F0E5'}}>Tanggal Keberangkatan</Text>}
                  {this.state.viewvisiblePergi?<View style={{height:40, backgroundColor:'#F4F0E5', width:'97%', borderRadius:10,marginTop:6, alignItems:'center'}}>
                  {this.state.viewvisible?<Text style={{fontSize: 15, color:'#000', marginTop:9, fontWeight: 'bold', position:'absolute'}}>{moment(this.state.date).format('DD MMM YYYY')}</Text>:<Icon name='add' style={{fontSize:30,marginTop:4,position:'absolute'}} />}
                  <DatePicker
                          style={{width: '100%',marginTop:2}}
                          mode="date"
                          placeholder="Pilih Tanggal"
                          format="YYYY-MM-DD"
                          minDate={moment(this.state.datetimezone).add(1,'day').format('YYYY-MM-DD')}
                          maxDate="2116-06-01"
                          confirmBtnText="Confirm"
                          cancelBtnText="Cancel"
                          customStyles={{
                          dateIcon: {
                          height:0,
                          position: 'absolute',
                          left: 0,
                          top: 4,

                          marginLeft: 10
                          },
                          dateInput: {
                          borderWidth:0,
                          
                          marginLeft: -30,
                          
                          },
                          placeholderText: {
                            color: 'transparent'
                          },
                    }}

                    onDateChange={(date) => {this.setState({date: date,show_ringkasan:false, jadwalPergi:false, jadwalPulang:true}),this.cekJadwal(),this.toggleSwitch()}}
                  />
                  </View>:
                  <View style={{height:40, backgroundColor:'#fcfbf8', width:'97%', borderRadius:10,marginTop:6, alignItems:'center'}}>
                  <Icon name='add' style={{fontSize:30,marginTop:4,position:'absolute', color:'#F4F0E5'}} />
                  </View>}
                  {this.state.viewvisible?<Text style={{fontSize:12, marginTop:18}}>Tanggal Kepulangan</Text>:<Text style={{fontSize:12, marginTop:18, color:'#F4F0E5'}}>Tanggal Kepulangan</Text>}
                  {this.state.viewvisible?
                  <View style={{height:40, backgroundColor:'#F4F0E5', width:'97%', borderRadius:10,marginTop:6, alignItems:'center'}}>
                  {this.state.viewvisiblePP?<Text style={{fontSize: 15, color:'#000', marginTop:9, fontWeight: 'bold', position:'absolute'}}>{moment(this.state.date2).format('DD MMM YYYY')}</Text>:<Icon name='add' style={{fontSize:30,marginTop:4,position:'absolute'}} />}
                    <DatePicker
                          style={{width: '100%',marginTop:2}}
                          mode="date"
                          placeholder="Pilih Tanggal"
                          format="YYYY-MM-DD"
                          minDate={moment(this.state.date).add(1,'day').format('YYYY-MM-DD')}
                          maxDate="2116-06-01"
                          confirmBtnText="Confirm"
                          cancelBtnText="Cancel"
                          customStyles={{
                          dateIcon: {
                          height:0,
                          position: 'absolute',
                          left: 0,
                          top: 4,

                          marginLeft: 10
                          },
                          dateInput: {
                          borderWidth:0,
                          
                          marginLeft: -30,
                          
                          },
                          placeholderText: {
                            color: 'transparent'
                          },
                    }}

                   onDateChange={(date) => {this.setState({date2: date, JenisTiket:'PP',tampilJadwal2:false,tampilDetailHarga:false,tampilJadwal:false,tampilClose:true,jadwalPergi:true,jadwalPulang:false}),this.toggleSwitchPP()}}
                  />
                  <View>
                    {
                  this.state.viewvisiblePP?
                  
                  <View style={{position:'relative', right:0, height:30, width:30, marginLeft:125, marginTop:-40}} >
                    <TouchableOpacity onPress={this.clearPP}>
                    <Icon active name="close" style={{fontSize: 18, color:'#000'}}/>
                    </TouchableOpacity>
                  </View>
                  :null
                  }
                  </View>
                  </View>
                  
                  :
                  <View style={{height:40, backgroundColor:'#fcfbf8', width:'97%', borderRadius:10,marginTop:6, alignItems:'center'}}>
                  <Icon name='add' style={{fontSize:30,marginTop:4,position:'absolute', color:'#F4F0E5'}} />
                  </View>}
                </View>
                <View style={{width:'55%'}}>
                {this.state.viewvisiblePenumpang?<Text style={{fontSize:12, marginLeft:10}}>Jumlah Penumpang</Text>:<Text style={{fontSize:12, marginLeft:10,color:'#F4F0E5'}}>Jumlah Penumpang</Text>}
               <View style={{height:122, backgroundColor:this.state.colorbg, width:'93%', borderRadius:10,marginTop:5, marginLeft:10, alignItems:'center'}}>
                  <View style={{flexDirection:'row', margin:8, alignItems:'center'}}>
                    {this.state.viewvisiblePenumpang?<View style={{width:'45%'}}>
                     <Text style={{fontSize:12,}}>Dewasa</Text>
                     <Text style={{fontSize:11,}}>> 12 Tahun</Text>
                    </View>:<View style={{width:'45%'}}>
                     <Text style={{fontSize:12,color:'#F4F0E5'}}>Dewasa</Text>
                     <Text style={{fontSize:11,color:'#F4F0E5'}}>> 12 Tahun</Text>
                    </View>
                  }
                    
                    <View style={{width:'5%'}}/>
                    {this.state.viewvisiblePenumpang?<View style={{width:'50%'}}>
                <Button block style={{backgroundColor:'#3F81B5', height:30,borderRadius:5 }} onPress={this._modalDewasa}>{ this.state.tomboldewasa?<Text>{this.state.ValueDewasa}</Text>:<Text><Icon name='add' style={{fontSize:18,marginTop:3,position:'absolute', color:'#fff'}}></Icon></Text>}</Button>
                    </View>
                    :<View style={{width:'50%'}}>
                     <View block style={{backgroundColor:'#F4F0E5', height:30,borderRadius:5 }} ></View>
                    </View>
                    }
                  </View>

                  <BottomSheet
                    visible={this.state.ModalDewasa}
                    onBackButtonPress={this._modalDewasa}
                    onBackdropPress={this._modalDewasa}>
                      <View style={{height:'100%', width:'100%',backgroundColor:'#D3D3D3'}}>
                      
                      <Header style={{backgroundColor:'#3F81B5',}}>
                      
                      <View style={styles.view}>
                      <Button transparent style={{marginLeft:-20}} onPress={this._modalDewasa}>
                            <Icon name='arrow-back' style={{fontSize:25}} />
                          </Button>
                        <Title style={{marginTop:15}}>Dewasa <Text ></Text>{this.state.title}</Title>
                        <Right style={{alignItems:'center'}}>
                        
                          <View style={{flexDirection:'row', alignItems:'center'}}>
                            <TouchableOpacity onPress={this.kurangValueDewasa}>
                            <View style={{width:30, height:30, backgroundColor:'#ffffff', alignItems:'center', borderRadius:20}}>
                              <Text style={{fontSize:20, color:'#3F81B5',fontWeight: 'bold'}}>-</Text>
                            </View>
                            </TouchableOpacity>
                            <View style={{width:50, height:50, backgroundColor:'#3F81B5', alignItems:'center', borderRadius:20}}>
                              <Text style={{fontSize:30, color:'#ffffff',fontWeight: 'bold',marginTop:3}}>{this.state.ValueDewasa}</Text>
                            </View>
                            <TouchableOpacity onPress={this.tambahValueDewasa}>
                            <View style={{width:30, height:30, backgroundColor:'#ffffff', alignItems:'center', borderRadius:20}}>
                              <Text style={{fontSize:20, color:'#3F81B5',fontWeight: 'bold'}}>+</Text>
                            </View>
                            </TouchableOpacity>
                          </View>
                        </Right>
                        </View>
                      </Header>
                                
                      <ScrollView>
                      <Accordion
                        sections={this.state.SECTIONS}
                        activeSections={this.state.activeSections}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        onChange={this._updateSections}
                        enablePointerEvents={false}
                        underlayColor={'#ffffff'}
                        duration={150}
                        
                      />
                    

                    { this.state.tomboldewasa?
                      <View style={{alignItems:'center', marginTop:15, width:'100%'}}>
                        <View style={{width:'95%'}}>
                          <Button block onPress={this.simpanModalDewasa} style={{borderRadius:10, backgroundColor:'#3F81B5'}}><Text style={{color:'#ffffff', alignItems:'center'}}>Simpan</Text></Button>
                        </View>
                      </View>:
                        <View style={{alignItems:'center', marginTop:30}}>
                          <Image source={require('../images/icon_penumpangdewasa.png')} style={{width:270, height:205}}/>
                        </View>
                      }
                      </ScrollView>
                    </View>
                    
                  </BottomSheet>

                  <View style={{flexDirection:'row', margin:8, marginTop:-2, alignItems:'center'}}>
                    {this.state.viewvisiblePenumpang?<View style={{width:'45%'}}>
                     <Text style={{fontSize:12,}}>Anak-Anak</Text>
                     <Text style={{fontSize:11,}}>5 - 12 Tahun</Text>
                    </View>:<View style={{width:'45%'}}>
                     <Text style={{fontSize:12,color:'#F4F0E5'}}>Anak-Anak</Text>
                     <Text style={{fontSize:11,color:'#F4F0E5'}}>5 - 12 Tahun</Text>
                    </View>
                    }
                    <BottomSheet
                    visible={this.state.Modalanak}
                    onBackButtonPress={this._modalAnak}
                    onBackdropPress={this._modalAnak}>
                      <View style={{height:'100%', width:'100%',backgroundColor:'#D3D3D3'}}>
                      
                      <Header style={{backgroundColor:'#3F81B5',}}>
                      
                      <View style={styles.view}>
                      <Button transparent style={{marginLeft:-20}} onPress={this._modalAnak}>
                            <Icon name='arrow-back' style={{fontSize:25}} />
                          </Button>
                        <Title style={{marginTop:15}}>Anak <Text ></Text>{this.state.title}</Title>
                        <Right style={{alignItems:'center'}}>
                        
                          <View style={{flexDirection:'row', alignItems:'center'}}>
                            <TouchableOpacity onPress={this.kurangValueAnak}>
                            <View style={{width:30, height:30, backgroundColor:'#ffffff', alignItems:'center', borderRadius:20}}>
                              <Text style={{fontSize:20, color:'#3F81B5',fontWeight: 'bold'}}>-</Text>
                            </View>
                            </TouchableOpacity>
                            <View style={{width:50, height:50, backgroundColor:'#3F81B5', alignItems:'center', borderRadius:20}}>
                              <Text style={{fontSize:30, color:'#ffffff',fontWeight: 'bold',marginTop:3}}>{this.state.ValueAnak}</Text>
                            </View>
                            <TouchableOpacity onPress={this.tambahValueAnak}>
                            <View style={{width:30, height:30, backgroundColor:'#ffffff', alignItems:'center', borderRadius:20}}>
                              <Text style={{fontSize:20, color:'#3F81B5',fontWeight: 'bold'}}>+</Text>
                            </View>
                            </TouchableOpacity>
                          </View>
                        </Right>
                        </View>
                      </Header>
                                

                      <Accordion
                        sections={this.state.SECTIONS}
                        activeSections={this.state.activeSections}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        onChange={this._updateSections}
                        enablePointerEvents={false}
                        underlayColor={'#ffffff'}
                        duration={150}
                        
                      />
                    

                    { this.state.tombolanak?
                      <View style={{alignItems:'center', marginTop:15, width:'100%'}}>
                        <View style={{width:'95%'}}>
                          <Button block onPress={this.simpanModalAnak} style={{borderRadius:10, backgroundColor:'#3F81B5'}}><Text style={{color:'#ffffff', alignItems:'center'}}>Simpan</Text></Button>
                        </View>
                      </View>:
                        <View style={{alignItems:'center', marginTop:30}}>
                          <Image source={require('../images/icon_penumpangdewasa.png')} style={{width:270, height:205}}/>
                        </View>
                      }
                    </View>
                    
                  </BottomSheet>
                    
                    <View style={{width:'5%'}}/>
                    {this.state.viewvisiblePenumpang?<View style={{width:'50%'}}>
                <Button block style={{backgroundColor:'#3F81B5', height:30,borderRadius:5 }} onPress={this._modalAnak}>{ this.state.tombolanak?<Text>{this.state.ValueAnak}</Text>:<Text><Icon name='add' style={{fontSize:18,marginTop:3,position:'absolute', color:'#fff'}}></Icon></Text>}</Button>
                    </View>
                    :<View style={{width:'50%'}}>
                     <View block style={{backgroundColor:'#F4F0E5', height:30,borderRadius:5 }} ></View>
                    </View>
                  }
                  </View>

                  <View style={{flexDirection:'row', margin:8, marginTop:-2,alignItems:'center'}}>
                    {this.state.viewvisiblePenumpang?<View style={{width:'45%'}}>
                     <Text style={{fontSize:12,}}>Bayi</Text>
                     <Text style={{fontSize:11,}}> 5 Tahun</Text>
                    </View>:<View style={{width:'45%'}}>
                     <Text style={{fontSize:12,color:'#F4F0E5'}}>Bayi</Text>
                     <Text style={{fontSize:11,color:'#F4F0E5'}}>0 - 5 Tahun</Text>
                    </View>
                  }

                <BottomSheet
                    visible={this.state.ModalInfant}
                    onBackButtonPress={this._modalInfant}
                    onBackdropPress={this._modalInfant}>
                      <View style={{height:'100%', width:'100%',backgroundColor:'#D3D3D3'}}>
                      
                      <Header style={{backgroundColor:'#3F81B5',}}>
                      
                      <View style={styles.view}>
                      <Button transparent style={{marginLeft:-20}} onPress={this._modalInfant}>
                            <Icon name='arrow-back' style={{fontSize:25}} />
                          </Button>
                        <Title style={{marginTop:15}}>Bayi <Text ></Text>{this.state.title}</Title>
                        <Right style={{alignItems:'center'}}>
                        
                          <View style={{flexDirection:'row', alignItems:'center'}}>
                            <TouchableOpacity onPress={this.kurangValueInfant}>
                            <View style={{width:30, height:30, backgroundColor:'#ffffff', alignItems:'center', borderRadius:20}}>
                              <Text style={{fontSize:20, color:'#3F81B5',fontWeight: 'bold'}}>-</Text>
                            </View>
                            </TouchableOpacity>
                            <View style={{width:50, height:50, backgroundColor:'#3F81B5', alignItems:'center', borderRadius:20}}>
                              <Text style={{fontSize:30, color:'#ffffff',fontWeight: 'bold',marginTop:3}}>{this.state.ValueInfant}</Text>
                            </View>
                            <TouchableOpacity onPress={this.tambahValueInfant}>
                            <View style={{width:30, height:30, backgroundColor:'#ffffff', alignItems:'center', borderRadius:20}}>
                              <Text style={{fontSize:20, color:'#3F81B5',fontWeight: 'bold'}}>+</Text>
                            </View>
                            </TouchableOpacity>
                          </View>
                        </Right>
                        </View>
                      </Header>
                                
                      <ScrollView>
                      <Accordion
                        sections={this.state.SECTIONS}
                        activeSections={this.state.activeSections}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContentInfant}
                        onChange={this._updateSections}
                        enablePointerEvents={false}
                        underlayColor={'#ffffff'}
                        duration={150}
                        
                      />
                    

                    { this.state.tombolinfant?
                      <View style={{alignItems:'center', marginTop:15, width:'100%'}}>
                        <View style={{width:'95%'}}>
                          <Button block onPress={this.simpanModalInfant} style={{borderRadius:10, backgroundColor:'#3F81B5'}}><Text style={{color:'#ffffff', alignItems:'center'}}>Simpan</Text></Button>
                        </View>
                      </View>:
                        <View style={{alignItems:'center', marginTop:30}}>
                          <Image source={require('../images/icon_penumpangdewasa.png')} style={{width:270, height:205}}/>
                        </View>
                      }

                  </ScrollView>
                    </View>
                    
                  </BottomSheet>

                    <View style={{width:'5%'}}/>
                    {this.state.show_infant?<View style={{width:'50%'}}>
                      <Button block style={{backgroundColor:'#3F81B5', height:30,borderRadius:5 }} onPress={this._modalInfant}>{ this.state.tombolinfant?<Text>{this.state.ValueInfant}</Text>:<Text><Icon name='add' style={{fontSize:18,marginTop:3,position:'absolute', color:'#fff'}}></Icon></Text>}</Button>
                    </View>
                    :<View style={{width:'50%'}}>
                     <View block style={{backgroundColor:'#F4F0E5', height:30,borderRadius:5 }} ></View>
                    </View>
                  }
                  </View>
                    
                </View>
                </View>

              </View> 

               <View style={{width:'92%', marginBottom:20}}>
                  {this.state.viewvisibleKelas?<Text style={{fontSize:12, marginTop:18}}>Kelas</Text>:<Text style={{fontSize:12, marginTop:18,color:'#F4F0E5'}}>Kelas</Text>
                  }

                  <View style={{flexDirection:'row', marginTop:5}}>

                    {this.state.viewvisibleKelas?<View style={{width:'49%', alignItems:'center'}}>
                    <Button transparent style={[{ backgroundColor: this.state.colorVIP }, {height:35,borderRadius:10, width:'100%', alignItems:'center', justifyContent:'center'}]} onPress={() => {this.setState({colorVIP: '#3F81B5', colorEXE:'#F4F0E5',KelasTiket:'VIP', colorTxtVip:'#fff', colorTxtEXE:'#000',jadwalPergi:true,jadwalPulang:true}),this.ProsesPesanan()}}><Text style={[{color:this.state.colorTxtVip}]}>VIP</Text></Button>
                    </View>:<View style={{width:'49%', alignItems:'center'}}>
                    <Button transparent style={{height:35,borderRadius:5, width:'100%', alignItems:'center',backgroundColor:'#fcfbf8'}} ><Text style={{color:'#F4F0E5'}}>VIP</Text></Button>
                    </View>
                    }

                    <View style={{width:'2%'}}/>

                    {this.state.viewvisibleKelas?<View style={{width:'49%'}}>
                    <Button transparent style={[{ backgroundColor: this.state.colorEXE }, {height:35,borderRadius:10, width:'100%', alignItems:'center', justifyContent:'center'}]} onPress={() => {this.setState({colorVIP: '#F4F0E5', colorEXE:'#3F81B5', KelasTiket:'Eksekutif', colorTxtEXE:'#fff', colorTxtVip:'#000',jadwalPergi:true,jadwalPulang:true}),this.ProsesPesanan()}}><Text style={[{color:this.state.colorTxtEXE}]}>Eksekutif</Text></Button>
                    </View>:<View style={{width:'49%', alignItems:'center'}}>
                    <Button transparent style={{height:35,borderRadius:5, width:'100%', alignItems:'center',backgroundColor:'#fcfbf8'}} ><Text style={{color:'#F4F0E5'}}>EKSEKUTIF</Text></Button>
                    </View>
                    }

                  </View>
               </View>
            </View> 

  

{ this.state.show_ringkasan?
  <View>
  <View style={{width:'100%', alignItems:'center'}}>
    <Text style={{fontSize: 18, marginTop:15, fontFamily:'SourceSansProBold',marginBottom:10}}>Ringkasan Pesanan</Text>
    <View style={{borderTopLeftRadius:10,borderTopRightRadius:10, backgroundColor:'#fff', marginTop:5, width:'95%'}}>
    

        {this.state.tampilJadwal2?
            
            <View style={{width:'100%', alignItems:'center'}}>
            
            {this.state.tampilDetailJadwal1.map((tampilDetailJadwal1)=>{
                return (
                <View key={tampilDetailJadwal1.id} style={{width:'100%'}}>
                    <View style={{height:30, backgroundColor:'transparent', marginTop:10, alignItems:'center',width:'100%'}}>
                        <Text style={{fontSize: 20,fontFamily:'SourceSansProBold'}}>{this.state.asal} <Icon name="arrow-round-forward" style={{fontSize:12}} /> {this.state.tujuan}</Text>
                    </View>
                    <View style={{width:'100%', height:1, backgroundColor:'#F4F0E5',marginTop:15}}></View>
                    <CardItem style={{backgroundColor:'transparent'}}>
                         <Text style={{fontSize: 14,fontFamily:'SourceSansProBold'}}>{this.state.KelasTiket} - {this.state.JenisTiket}</Text>
                    </CardItem> 
                    <CardItem style={{height:30, backgroundColor:'transparent',marginTop:-10}}>
                         <Text style={{fontSize: 13, fontFamily:'SourceSansProBold'}}>Berangkat - {moment(this.state.date).format('DD MMM YYYY')}, {tampilDetailJadwal1.berangkat} -{tampilDetailJadwal1.tiba}</Text>
                         <Right>
                        {this.state.tampilUbahJadwal?<TouchableOpacity onPress={this.UbahJadwal}><Text style={{fontSize: 10,color:'#3F81B5',fontWeight: 'bold', marginTop:-2}}>  <Icon active name="ios-create" style={{fontSize: 18, color:'#3F81B5'}} /> Ubah Jam</Text>
                        </TouchableOpacity>
                        :null
                        }
                        </Right>
                    </CardItem>
                    
                </View>
                  )
               })}
               </View>:null
          }
          {
            this.state.tampilPP?
            <View style={{width:'100%', alignItems:'center'}}>   
              {this.state.tampilDetailJadwal2.map((tampilDetailJadwal2)=>{
                return (
                    <View key={tampilDetailJadwal2.id} style={{width:'100%'}}>

                    <View style={{height:30, backgroundColor:'transparent', marginTop:10, alignItems:'center',width:'100%'}}>
                        <Text style={{fontSize: 20,fontFamily:'SourceSansProBold'}}>{this.state.asal} <Icon name="md-swap" style={{fontSize:12}} /> {this.state.tujuan}</Text>
                    </View>
                    <View style={{width:'100%', height:1, backgroundColor:'#F4F0E5',marginTop:15}}></View>

                    <CardItem style={{backgroundColor:'transparent'}}>
                         <Text style={{fontSize: 14,fontFamily:'SourceSansProBold'}}>{this.state.KelasTiket} - {this.state.JenisTiket}</Text>
                    </CardItem> 

                    <CardItem style={{height:30, backgroundColor:'transparent',marginTop:-10}}>
                         <Text style={{fontSize: 13, fontFamily:'SourceSansProBold'}}>Berangkat - {moment(this.state.date).format('DD MMM YYYY')},{this.state.tampilDetailJadwal1[0].berangkat} - {this.state.tampilDetailJadwal1[0].tiba}</Text>
                         <Right>
                        {this.state.tampilUbahJadwal?<TouchableOpacity onPress={this.UbahJadwal}><Text style={{fontSize: 10,color:'#3F81B5',fontWeight: 'bold', marginTop:-2}}>  <Icon active name="ios-create" style={{fontSize: 18, color:'#3F81B5'}} /> Ubah Jam</Text>
                        </TouchableOpacity>
                        :null
                        }
                        </Right>
                    </CardItem>

                    <CardItem style={{height:30, backgroundColor:'transparent'}}>
                         <Text style={{fontSize: 13, fontFamily:'SourceSansProBold'}}>Pulang - {moment(this.state.date2).format('DD MMM YYYY')}, {tampilDetailJadwal2.berangkat} - {tampilDetailJadwal2.tiba}</Text>
                         <Right>
                        {this.state.tampilUbahJadwal?<TouchableOpacity onPress={this.UbahJadwal2}><Text style={{fontSize: 10,color:'#3F81B5',fontWeight: 'bold', marginTop:-2}}> <Icon active name="ios-create" style={{fontSize: 18, color:'#3F81B5'}} /> Ubah Jam</Text>
                        </TouchableOpacity>
                        :null
                        }
                        </Right>
                    </CardItem>
                            </View>
                          )
                       })} 
                      
                </View>:null
          }

                <CardItem style={{backgroundColor:'transparent'}}>
                         <View style={{width:'100%', height:1, backgroundColor:'#F4F0E5'}}></View>
                    </CardItem>
                        
                    <View style={{alignItems:'flex-end', marginBottom:20,marginRight:25}}>
                  <View style={{width:'80%'}}>

                    <CardItem style={{height:5,}}>
                      
                        <Icon active name="md-checkmark-circle-outline" style={{fontSize: 18, color:'#009900'}} />
                        <Text style={{fontSize: 11, color:'#009900', marginLeft:-12}}>Bisa Refund</Text>
                      
                        <Text style={{fontSize: 11,}}>      </Text>
                        
                        <Icon active name="md-checkmark-circle-outline" style={{fontSize: 18, color:'#009900'}}/>
                        <Text style={{fontSize: 11, color:'#009900', marginLeft:-12}}>Bisa Reschedule</Text>
                    </CardItem>
                    
                    </View>
                  </View>

{this.state.tampilJadwal2?
  
  <ListItem>
  <Body>
    <View style={{marginTop:-20, marginBottom:10}}>
    { 
      this.state.hideTombolGunakan?
        <TouchableOpacity onPress={this._toggleModalInputPromo}>
          <Card style={{borderRadius:10, height:40}}>
            <CardItem style={{backgroundColor:'transparent', marginTop:-2}}>
              <Icon active name="pricetags" style={{fontSize: 20, color:'#3F81B5'}}/>
              <Text style={{fontSize: 12, color:'#3F81B5', fontWeight: 'bold',}}>Gunakan Kode Promo atau Kupon</Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
        :<CardItem style={{height:10,}}>
        <TouchableOpacity onPress={this.batalKupon  }>
          
          <Card style={{borderRadius:10, height:40}}>
            <CardItem style={{backgroundColor:'transparent', marginTop:-2}}>
              <Icon active name="pricetags" style={{fontSize: 20, color:'#3F81B5'}}/>
              <Text style={{fontSize: 12, color:'#3F81B5', fontWeight: 'bold',}}>Batal Gunakan Promo/Kupon</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </CardItem>
      }
      </View>

      <View style={{backgroundColor:'#F4F0E5', width:'100%', borderRadius:10}}>
        <CardItem style={{backgroundColor:'transparent'}}>
          <Text style={{fontSize: 12}}>Harga Tiket            </Text>
          <Right >
          <Text style={{fontSize: 12,fontWeight: 'bold'}}>Rp. {this.state.rpTotalHarga},-</Text>
          </Right>
        </CardItem>
        {this.state.HideTotalBayarDiskon?<CardItem style={{backgroundColor:'#F4F0E5'}}>
        <Text style={{fontSize: 12,color:'#c91e1e'}}>Potongan </Text>
          <Right >
            <Text style={{fontSize: 12,fontWeight: 'bold',color:'#c91e1e'}}>Rp.{this.state.totalDiskon     },-</Text>
          </Right>
        </CardItem>:null
        }
      <View style={{backgroundColor:'#ffffff', width:'100%', height:1,}}/>
      {this.state.HideTotalBayarDiskon?<CardItem style={{backgroundColor:'transparent'}}>
        <Text style={{fontSize: 18,fontWeight: 'bold'}}>Total Harga     </Text>
        <Right>
          <Text style={{fontSize: 18,fontWeight: 'bold'}}>Rp. {this.state.totalHargaPromo   },-</Text>
        </Right>
      </CardItem>:<CardItem style={{backgroundColor:'transparent'}}>
        <Text style={{fontSize: 18,fontWeight: 'bold'}}>Total Harga     </Text>
        <Right>
          <Text style={{fontSize: 18,fontWeight: 'bold'}}>Rp. {this.state.rpTotalHarga  },-</Text>
        </Right>
      </CardItem>
      }
      </View>
  </Body>
  </ListItem>:null
}


{this.state.tampilPP?
  
  <ListItem>
  <Body>
  <View style={{marginTop:-20, marginBottom:10}}>
    { 
      this.state.hideTombolGunakan?
        <TouchableOpacity onPress={this._toggleModalInputPromo}>
          <Card style={{borderRadius:10, height:40}}>
            <CardItem style={{backgroundColor:'transparent', marginTop:-2}}>
              <Icon active name="pricetags" style={{fontSize: 20, color:'#3F81B5'}}/>
              <Text style={{fontSize: 12, color:'#3F81B5', fontWeight: 'bold',}}>Gunakan Kode Promo atau Kupon</Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
        :<CardItem style={{height:10,}}>
        <TouchableOpacity onPress={this.batalKupon  }>
          
          <Card style={{borderRadius:10, height:40}}>
            <CardItem style={{backgroundColor:'transparent', marginTop:-2}}>
              <Icon active name="pricetags" style={{fontSize: 20, color:'#3F81B5'}}/>
              <Text style={{fontSize: 12, color:'#3F81B5', fontWeight: 'bold',}}>Batal Gunakan Promo/Kupon</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </CardItem>
      }
      </View>

  <View style={{backgroundColor:'#F4F0E5', width:'100%', borderRadius:10}}>
        <CardItem style={{backgroundColor:'transparent'}}>
          <Text style={{fontSize: 12}}>Ticket Price         </Text>
          <Right >
          <Text style={{fontSize: 12,fontWeight: 'bold'}}>Rp. {this.state.rpTotalHargaPP},-</Text>
          </Right>
        </CardItem>
        {this.state.HideTotalBayarDiskon?<CardItem style={{backgroundColor:'#F4F0E5'}}>
        <Text style={{fontSize: 12,color:'#c91e1e'}}>Discount </Text>
          <Right >
            <Text style={{fontSize: 12,fontWeight: 'bold',color:'#c91e1e'}}>Rp.{this.state.totalDiskon      },-</Text>
          </Right>
        </CardItem>:null
        }
<View style={{backgroundColor:'#ffffff', width:'100%', height:1,}}/>
      {this.state.HideTotalBayarDiskon?<CardItem style={{backgroundColor:'transparent'}}>
        <Text style={{fontSize: 18,fontWeight: 'bold'}}>Ticket Price     </Text>
        <Right>
          <Text style={{fontSize: 18,fontWeight: 'bold'}}>Rp. {this.state.totalHargaPromo   },-</Text>
        </Right>
      </CardItem>:<CardItem style={{backgroundColor:'transparent'}}>
        <Text style={{fontSize: 18,fontWeight: 'bold'}}>Ticket Price     </Text>
        <Right>
          <Text style={{fontSize: 18,fontWeight: 'bold'}}>Rp. {this.state.rpTotalHargaPP  },-</Text>
        </Right>
      </CardItem>
      }
  </View>
  </Body>
  </ListItem>:null
}
   </View>
  </View>
</View>:null
}
<BottomSheet
          visible={this.state.isModalVisiblePromo}
          onBackButtonPress={this._toggleModalInputPromo}
          onBackdropPress={this._toggleModalInputPromo}>
 
         
            <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>

            <Header style={{backgroundColor:'#3F81B5',}}>
         <View style={styles.view}>
         <Left>
            <Button transparent onPress={() =>
                  this._toggleModalInputPromo()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,}}>Gunakan Promo/Kupon</Title>
          </View>
        </Header>


         
         
          <View style={{ flex: 1,marginTop:15}}>
          <ListItem>
              <Body>
                <Card>
                  <View style={{flexDirection: 'row',width:'100%', alignSelf: 'center',}}>
                    <View  style={{width:'60%', alignItems:'center',marginLeft:15}}>
                      <Reinput label='Ketik Kode Promo' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' fontSize={18} value={this.state.kodepromo} onChangeText={text => this.setState({ kodepromo  : text })}/>
                    </View>
                    
                    <View  style={{width:'40%', alignSelf:'center'}}>
                      <Button style={{marginLeft:10, backgroundColor:'#3F81B5', height:45}} onPress={() =>
                  this.CekPromo()}>
                        <Text style={{fontSize:12}}>Gunakan</Text>
                      </Button>
                    </View>
                  </View>
                </Card>
              </Body>
            </ListItem>
            {
            this.state.HideKupon?
            <View>
              <Text style={{fontSize:20, marginTop:10, marginBottom:5,marginLeft:15, fontFamily:'SourceSansProBold'}}>My Coupon's</Text>
            <ScrollView>
            {
                    this.state.kupon_saya.map(( kupon_saya, key ) =>
                      (
                      <View key = { key } style = { styles.kupon_saya }>
                      
                      <ListItem>
                      <View style={{width:'100%',height:125, borderRadius:8}}>
                      <TouchableOpacity onPress={this.getKupon.bind(this, kupon_saya.id_kupon_saya, kupon_saya.id_kupon,kupon_saya.id_user,kupon_saya.status)}>
                      <Thumbnail square source={{uri: kupon_saya.image}} style={{width:'100%', height:125, borderRadius:8}}/>
                      </TouchableOpacity>
                      <View style={{height:30, width:30, backgroundColor:'#fff', position:'absolute', borderRadius:20, marginLeft:-15, marginTop:45}}/>
              <View style={{height:30, width:30, backgroundColor:'#fff', position:'absolute', borderRadius:20, right:-15, marginTop:45}}/>
              </View>
                      </ListItem>
                
            
            </View>
          ))
        }
         </ScrollView>
         </View>:null
       }
            </View>

         </View>   
            
        </BottomSheet>



        </Content>
        </ScrollView>

        <Footer style={{backgroundColor:this.state.bgcolor}}>
          <TouchableOpacity style={[styles.ButtonStyle, { backgroundColor:this.state.bgcolor }]}  
          activeOpacity = { .5 } 
          disabled={this.state.ButtonStateHolder}
          onPress={this.Periksa} >
            <Text style={{color:'#ffffff', fontFamily:'SourceSansProBold', fontSize:18, alignItems:'center'}}>Order</Text>
        </TouchableOpacity>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:2,
     //justifyContent:'center',
     flexGrow:2,
    
  },
    ButtonStyle: {
       backgroundColor:'#F4F0E5', 
       width:'100%',
       height:'100%',
       alignItems:'center',
       alignContent:'center',
       marginTop:10,
     },
  view:{
    flex: 1, 
        flexDirection: 'row',
  },
  ModalInsideView:{
 
  justifyContent: 'center',
  alignItems: 'center', 
  backgroundColor : "#F4F0E5", 
  height: 300 ,
  width: '90%',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff'
 
},
 
TextStyle:{
 
  fontSize: 20, 
  marginBottom: 20, 
  color: "#fff",
  padding: 20,
  textAlign: 'center'
 
},
 bottomNavigationView: {
 
    backgroundColor: '#fff',
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center'
 
  },
  bottomNavigationView2: {
    marginTop:5,
    backgroundColor: '#fff',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
 
  },
})