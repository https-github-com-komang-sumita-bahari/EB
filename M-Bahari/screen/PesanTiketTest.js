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
export default class Runcian extends Component {
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
                   bgcolor:'#F4F0E5',
                   totalHargaPromo:0,
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
                   show_ringkasan:false,
                   tampilClose:false,
                   judulheaderAccordion:'',
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
  loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      if(this.state.viewvisiblePenumpang==true){
      this.cekJadwal();
      }
      this.setState({loading1: !this.state.loading1});
      if(this.state.viewvisible==true){
        this.cekPP();
      }
      }, 100);

  }
  loadings3=()=>{

    this.setState({loading3: !this.state.loading3});
    setTimeout(()=>{
      
      this.setState({loading3: !this.state.loading3});
      this.tampilKupon();
      }, 100);

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
  cekKeberangkatan=()=>{
    if(this.state.jadwalPergi==false){
       ToastAndroid.show('Jadwal Tidak Tersedia, Silahkan Periksa Kembali Jadwal Anda', ToastAndroid.LONG);
    }
    if(this.state.jadwalPergi==true){
    if(this.state.JenisTiket=='PP'){
    if(this.state.jadwalPergi==true && this.state.jadwalPulang==true){
      
      this.loadings2();
      this.setState({tampilJadwal2:false});
      this.setState({tampilPP:true});
      this.setState({tampilDetailHargaPP:true});
      this.setState({tampilDetailHarga:false});
    }
    if(this.state.jadwalPergi==true && this.state.jadwalPulang==false){
      this.setState ({tampilDetailHarga:false  }); 
      ToastAndroid.show('Jadwal Pulang Tidak Tersedia, Silahkan Periksa Kembali Jadwal Anda', ToastAndroid.LONG);
    }
    
   }
    if(this.state.JenisTiket=='Sekali Jalan'){
      if(this.state.jadwalPergi==true && this.state.jadwalPulang==false){
      //this.cekJadwal();
      this.loadings2();
      this.setState({tampilPP:false});
      this.setState({tampilJadwal2:true});
      this.setState({tampilDetailHarga:true});
      this.setState({tampilDetailHargaPP:false});
    }
    else{
      this.setState ({tampilDetailHarga:false  });
     
    }
   }
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
  loadings2=()=>{
       this.setState({loading2: !this.state.loading2});
    
    setTimeout(()=>{
if(this.state.ValuePenumpang<=this.state.ValueKapasitas){
      if(this.state.JenisTiket=='Sekali Jalan'){
        this.GetItem1();
        this.hitung();
        this.setState({collapsed2:true});
        this.setState({HideTotalBayar:true});
        this.setState({HideTotalBayarPP:false});
        this.setState({HideTotalPesananPP:false});
        this.setState({HideDetailPesananPP:false});
        this.setState({JT:1});
        this.rupiah();
        
        //this.saveData();

        this.DisableButtonFunction();
      }
      if(this.state.JenisTiket=='PP'){
      if(this.state.ValuePenumpangPP<=this.state.ValueKapasitasPP){
        this.GetItem1();
        this.GetItemPP();
        this.hitung();
        this.hitungPP();
        this.setState({collapsed2:false});
        this.setState({HideTotalBayar:false});
        this.setState({HideTotalBayarPP:true});
        this.setState({HideTotalPesananPP:true});
        this.setState({HideDetailPesananPP:true});
        this.setState({JT:2});
        this.rupiahPP();
        //this.saveData();
       
        this.DisableButtonFunction(); 
      } 
      else{
        ToastAndroid.show('Maaf Tiket Pulang Telah Habis', ToastAndroid.LONG);
      }
    }
        
  } 
  else{
    ToastAndroid.show('Maaf Tiket Telah Habis', ToastAndroid.LONG);
  }    
       this.setState({loading2: !this.state.loading2, show_ringkasan:true});
      setTimeout(()=>{
      
      this.scrollView.scrollToEnd();
        },100);
         
        
      }, 100);
    
  }
  
  state = {colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false, };

  toggleSwitch = () => {
    this.setState({viewvisible: true});
    if(moment(this.state.date).format('YYYY-MM-DD')>=moment(this.state.date2).format('YYYY-MM-DD')){
      this.setState({date2:moment(this.state.date).add(1,'day').format('YYYY-MM-DD')});
    }
    
  };
  toggleSwitchPP = () => {
    this.setState({viewvisiblePP: true});
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
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    StatusBar.setHidden(false);
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.navigate('home');
    return true;
}
  cekChange=()=>{
    if(this.state.koderute==''  ){
      ToastAndroid.show('Silahkan Pilih Rute Keberangkatan Tiket', ToastAndroid.LONG);
    }
    else{
      this.change()
    }
  }

  change= ()=>{
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

      const newArray = [...this.state .data1   ];
      newArray[0].no = '1';
      this.setState ({data1    : newArray  });
  }   
  if(this.state.date!=''){
  if(this.state.JenisTiket=='Sekali Jalan'){
    this.cekJadwal();
  }
  if(this.state.JenisTiket=='PP'){
    this.cekPP();
  }    
  }

  }
  
_toggleModal = () =>{
    
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.setState({ footerhide: !this.state.footerhide })
    if(this.state.isModalVisible==true){
      this.loadings();
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
      this.setState({tampung_value: this.state.ValueDewasa});
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
      this.setState({tampung_value: this.state.ValueAnak});
    }
  }

  simpanModalDewasa=()=>{
    this.setState({ cek: 0});
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
            tx.executeSql('insert into detail_penumpang (idx, title, nama_depan, nama_belakang, kwn, s_title, s_namadepan, s_namabelakang, s_total, icon) values (?,?,?,?,?,?,?,?,?,?)', [this.state.SECTIONS[i].idx,this.state.SECTIONS[i].title,this.state.SECTIONS[i].nama_depan,this.state.SECTIONS[i].nama_belakang,this.state.SECTIONS[i].kwn,this.state.SECTIONS[i].s_title,this.state.SECTIONS[i].s_namadepan,this.state.SECTIONS[i].nama_belakang,this.state.SECTIONS[i].s_total,this.state.SECTIONS[i].icon]);
         });
        }
        
        this.setState({ ModalDewasa: !this.state.ModalDewasa,footerhide: !this.state.footerhid, viewvisibleKelas:true});
      }
    }, 100);
  }, 100);
  if(this.state.tampilDetailHarga==true||this.state.tampilDetailHargaPP==true){
    this.loadings2();
  }
  }

  simpanModalAnak=()=>{
    this.setState({ cek: 0});
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
            tx.executeSql('insert into detail_penumpang_anak (idx, title, nama_depan, nama_belakang, kwn, s_title, s_namadepan, s_namabelakang, s_total, icon) values (?,?,?,?,?,?,?,?,?,?)', [this.state.SECTIONS[i].idx,this.state.SECTIONS[i].title,this.state.SECTIONS[i].nama_depan,this.state.SECTIONS[i].nama_belakang,this.state.SECTIONS[i].kwn,this.state.SECTIONS[i].s_title,this.state.SECTIONS[i].s_namadepan,this.state.SECTIONS[i].nama_belakang,this.state.SECTIONS[i].s_total,this.state.SECTIONS[i].icon]);
         });
        }
        
        this.setState({ Modalanak: !this.state.Modalanak,footerhide: !this.state.footerhid, viewvisibleKelas:true});
      }
    }, 100);
  }, 100);
    if(this.state.tampilDetailHarga==true||this.state.tampilDetailHargaPP==true){
    this.loadings2();
  }
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
        this.setState({tempTotalHargaPP:this.state.totalHargaPP});
        this.setState({totalHargaPromo:parseInt(this.state.totalHargaPP) - parseInt(this.state.totalDiskon)})
          if(this.state.totalHargaPromo<0){
          this.setState({totalDiskon:this.state.totalHarga})
          this.setState({totalHargaPromo:0});
        }
        this.setState({totalHarga:this.state.totalHargaPromo});
        this.setState({ 
                        HideTotalBayarDiskon:true,
                        kodepromo:'',
                     });
        }
        if(this.state.JenisTiket=='Sekali Jalan'){
         this.setState({totalDiskon:this.state.dataPromo[0].nominal});
        this.setState({tempTotalHarga:this.state.totalHarga});
        this.setState({totalHargaPromo:parseInt(this.state.totalHarga) - parseInt(this.state.totalDiskon)})
        if(this.state.totalHargaPromo<0){
          this.setState({totalDiskon:this.state.totalHarga})
          this.setState({totalHargaPromo:0});
        }
        this.setState({totalHarga:this.state.totalHargaPromo});
        this.setState({ HideTotalBayarDiskon:true,
                        
                        kodepromo:'',
                        });
        }
        this.setState({loading2: !this.state.loading2});
        this.setState ({hideTombolGunakan :false  });
        this.rupiahTotalDiskon();
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
if(this.state.ValueDewasa<5 && this.state.cekTotalPenumpang<5 ){
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
   if (this.state.cekTotalPenumpang<5){
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
  if(this.state.ValueAnak<5 && this.state.cekTotalPenumpang<5){
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
   if (this.state.cekTotalPenumpang<5){
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
  if(this.state.ValueInfant<5 && this.state.ValueDewasa > this.state.ValueInfant && this.state.cekTotalPenumpang<5){
   this.setState({ValueInfant : parseInt(this.state.ValueInfant) + 1  });
   if (this.state.cekTotalPenumpang<5){
   this.setState({cekTotalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant) +1 });
    }
  }
}
kurangValueInfant=()=>{
  if(this.state.ValueInfant>0){
   this.setState({ValueInfant : parseInt(this.state.ValueInfant) - 1  });
   this.setState({cekTotalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant) -1 });
 }
}

BackFunction = () =>{
   this.props.navigation.navigate('home')
 }
componentDidMount() {
  db.transaction(tx => {
    tx.executeSql(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      'create table if not exists detail_penumpang (id integer primary key not null, idx int, title text,nama_depan text,nama_belakang text, kwn text, s_title int, s_namadepan int, s_namabelakang int, s_total int, icon text);'
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

cekJadwal=()=> {

  const { date }  = this.state ;
  const { koderute }  = this.state ;
  return fetch('http://expressbahari.com/php_mobile/tampil_jadwal.php', {
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
        
        dataSource2: ds.cloneWithRows(responseJson),
        lengthJadwal:responseJson,

      }, function() {
       
      });

       if(this.state.lengthJadwal.length ==1){
        this.setState({viewvisiblePenumpang:true});
        this.setState({jadwalPergi:true});
        this.setState({ETA:this.state.lengthJadwal[0].tiba});
        this.setState({ETD:this.state.lengthJadwal[0].berangkat});

        if(this.state.KelasTiket!=''){
        this.setState({tampilJadwal2:true});
        this.setState({tampilDetailHarga  :true});
        this.setState({tampilDetailHargaPP:false});
        this.cekKeberangkatan();
        
        }

        if(this.state.KelasTiket==''){
        this.setState({tampilJadwal2:false});
        this.setState({tampilDetailHarga  :false  });
        this.setState({show_ringkasan:false});
        }

        this.setState({tampilJadwal:false});
        this.setState({tampilUbahJadwal:false});
        if(this.state.viewvisible==false){
        
        }
        
       }
       if(this.state.lengthJadwal.length>1){
        this.setState({viewvisiblePenumpang:true});
        this.setState({jadwalPergi:true});
        
        if(this.state.tampilJadwal2==false){
        this.setState({BottomPopUp:true});
        }

        this.setState({tampilUbahJadwal:true})
        this.setState({tampilJadwal2:false})
        this.setState({tampilJadwal:true});
    
       
        this.setState({lengthJadwal:[]});
        if(this.state.viewvisible==false){
        
        }
       }
     
    })
    .catch((error) => {

     if(this.state.date=='' && this.state.koderute!=''){
     this.setState({
        ButtonStateHolder : true ,
        bgcolor:'#607D8B'
      });

     this.setState({tampilJadwal:false});
     this.setState({tampilJadwal2:false});
     }
     if(this.state.date!='' && this.state.koderute==''){
     this.setState({
        ButtonStateHolder : true ,
        bgcolor:'#607D8B'
      }); 
     this.setState({tampilJadwal:false});
     
     }
    if(this.state.date!='' && this.state.koderute!=''){
       
      this.setState({
        ButtonStateHolder : true ,
        bgcolor:'#607D8B'
      });

      this.setState ({tampilDetailHarga:false  });      
      
      if(this.state.KelasTiket==''&&this.state.viewvisiblePenumpang==true){
      this.setState({viewvisiblePenumpang:false});
      this.setState({viewvisibleKelas:false});
      this.setState({jadwalPergi:false});  
      ToastAndroid.show('Jadwal Tidak Tersedia, Silahkan Periksa Kembali Jadwal Anda', ToastAndroid.LONG);
      }
      if(this.state.KelasTiket!=''){
      this.setState({jadwalPergi:false});  
      ToastAndroid.show('Jadwal Tidak Tersedia, Silahkan Periksa Kembali Jadwal Anda', ToastAndroid.LONG);
      }

      this.setState({tampilJadwal:false});

      this.setState({tampilPP:false});
      this.setState({lengthJadwal:[]});
      this.setState({tampilJadwal2:false});
      this.setState({tampilDetailHarga:false});
      this.setState({tampilDetailHargaPP:false});
     }
    });
}
cekPP=()=> {
  this.setState({arrayPP:[]});
  this.setState({listPP:[]});
  const { date2 }  = this.state ;
  const { koderute2 }  = this.state ;
  return fetch('http://expressbahari.com/php_mobile/tampil_pp.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    
    kode_rute: koderute2,
    tanggal: date2
 
  })
 
})  .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        listPP:responseJson,
        arrayPP:responseJson,
      }, function() {
       
      });

        if(this.state.listPP.length ==1){
        this.setState({jadwalPulang:true});
        
        if(this.state.KelasTiket!=''){
        this.setState({tampilPP:true});
        this.setState({tampilDetailHargaPP  :true  });
        }
        
        if(this.state.KelasTiket==''){
        this.setState({tampilPP:false});
        this.setState({tampilDetailHargaPP  :false  });
        }
        
        this.setState({tampilJadwal:false});
        this.setState({tampilJadwal2:false});
        this.setState({tampilPP:false});
        this.setState({tampilJadwalPP:true});
        this.setState({tampilUbahJadwal2:false});
        
        if(this.state.KelasTiket!=''){
          this.cekKeberangkatan();
        }
 
       }
       if(this.state.listPP.length>1){
        this.setState({jadwalPulang:true});
        this.setState({tampilJadwal:false});
        this.setState({tampilJadwal2:false});

        if(this.state.KelasTiket!=''){
        this.setState({tampilPP:true});
        this.setState({tampilDetailHargaPP:true});
        this.setState({tampilDetailHarga:false});
        }

        if(this.state.KelasTiket==''){
        this.setState({tampilPP:false})
        this.setState({tampilDetailHargaPP:false});
        }

        if(this.state.tampilPP==false){
        this.setState({BottomPopUp2:true})
        }

        this.setState({tampilJadwalPP:false});
        this.setState({tampilUbahJadwal2:true});
        this.setState({arrayPP:[]});
        
        if(this.state.viewvisibleKelas==true){
          this.cekKeberangkatan();
        }
        
       }
      
    })
    .catch((error) => {
      
     if(this.state.date2=='' && this.state.koderute2!=''){
      this.setState({
        ButtonStateHolder : true ,
        bgcolor:'#607D8B'
      });
     this.setState({tampilPP:false});
     
     }
     else if(this.state.date2!='' && this.state.koderute2==''){
      this.setState({
        ButtonStateHolder : true ,
        bgcolor:'#607D8B'
      });
     this.setState({tampilPP:false});
   
     }
     
    if(this.state.date2!='' && this.state.koderute2!=''){
      this.setState({
        ButtonStateHolder : true ,
        bgcolor:'#607D8B'
      });
      this.setState ({tampilDetailHarga:false  });
      ToastAndroid.show('Jadwal Pulang Tidak Tersedia, Silahkan Periksa Kembali Jadwal Anda', ToastAndroid.LONG);
      this.setState({jadwalPulang:false});
      this.setState({tampilPP:false});
      this.setState({tampilJadwalPP:false});
      this.setState({tampilJadwal2:false});
      this.setState({tampilDetailHargaPP:false});
      
     }
    });

}
rupiahTotalDiskon(){
  if(this.state.rpTotalDiskon.toString().length==5){
      this.setState({
        rpTotalDiskon: this.state.rpTotalDiskon.toString().substring(0, 2)+'.'+this.state.rpTotalDiskon.toString().substring(2, 5),
      });
    }
   if(this.state.rpTotalDiskon.toString().length==6){
      this.setState({
        rpTotalDiskon: this.state.rpTotalDiskon.toString().substring(0, 3)+'.'+this.state.rpTotalDiskon.toString().substring(3, 6),
      });
    }
    else if(this.state.rpTotalDiskon.toString().length==7){
      this.setState({
        rpTotalDiskon: this.state.rpTotalDiskon.toString().substring(0, 1)+'.'+this.state.rpTotalDiskon.toString().substring(1, 4)+'.'+this.state.rpTotalDiskon.toString().substring(4, 7),
      });
    }
    else if(this.state.rpTotalDiskon.toString().length==8){
      this.setState({
        rpTotalDiskon: this.state.rpTotalDiskon.toString().substring(0, 2)+'.'+this.state.rpTotalDiskon.toString().substring(2, 5)+'.'+this.state.rpTotalDiskon.toString().substring(5, 8),
      });
    }
  }
rupiahPP(){
  if(this.state.rpTotalHargaPP.toString().length==5){
      this.setState({
        rpTotalHargaPP: this.state.rpTotalHargaPP.toString().substring(0, 2)+'.'+this.state.rpTotalHargaPP.toString().substring(2, 5),
      });
    }
   if(this.state.rpTotalHargaPP.toString().length==6){
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
GetItem = (id,harga_vip1,harga_vip2,harga_eks1,harga_eks2,harga_bus1,harga_bus2,rute,berangkat,tiba,tipe,kode_rute,block_exe,block_vip,k_vip,k_exe) =>{
    this.setState({idKeberangkatan:id})
    this.setState({ SisaTiketEXE: block_exe})
    this.setState({ SisaTiketVIP: block_vip})
    this.setState({ KapTiketEXE: k_exe})
    this.setState({ KapTiketVIP: k_vip})
    this.setState ({ETA :tiba})
    this.setState ({ETD :berangkat  })    
    
   
    this.state.lengthJadwal.push({
            id: id,berangkat:berangkat,tiba:tiba,tipe:tipe,kode_rute:kode_rute, harga_vip1: harga_vip1, harga_vip2: harga_vip2, harga_eks1:harga_eks1,harga_eks2:harga_eks2,block_vip:block_vip,block_exe:block_exe,k_exe:k_exe,k_vip:k_vip
          }) 

   if(this.state.KelasTiket=='VIP'||this.state.KelasTiket=='Eksekutif'){
    if(this.state.JenisTiket=='Sekali Jalan'){
    this.setState({tampilJadwal2:true});
    this.setState({tampilDetailHarga:true});
    this.setState({tampilDetailHargaPP:false});
    this.setState({BottomPopUp:false});
    }
    if(this.state.JenisTiket=='PP'){
    this.setState({tampilPP:true});
    this.setState({tampilDetailHargaPP:true});
    this.setState({tampilDetailHarga:false});
    this.setState({BottomPopUp:false});
    }
   }
   if(this.state.KelasTiket==''||this.state.KelasTiket==null){
    this.setState({tampilJadwal2:false});
    this.setState({BottomPopUp:false});
   }
 }
 GetItem1 = () =>{
    this.setState({idKeberangkatan:this.state.lengthJadwal[0].id})
    this.setState({ koderute: this.state.lengthJadwal[0].kode_rute})
    this.setState({ harga_vipDewasa:this.state.lengthJadwal[0].harga_vip1})
    this.setState({ harga_vipAnak:this.state.lengthJadwal[0].harga_vip2})
    this.setState({ harga_eksDewasa: this.state.lengthJadwal[0].harga_eks1})
    this.setState({ harga_eksAnak: this.state.lengthJadwal[0].harga_eks2})
    this.setState({ harga_busDewasa: this.state.lengthJadwal[0].harga_bus1})
    this.setState({ harga_busAnak: this.state.lengthJadwal[0].harga_bus2})
    this.setState({ ETD: this.state.lengthJadwal[0].berangkat})
    this.setState({ ETA: this.state.lengthJadwal[0].tiba})
    this.setState({ Kapal: this.state.lengthJadwal[0].tipe})
    this.setState({ SisaTiketEXE: this.state.lengthJadwal[0].block_exe})
    this.setState({ SisaTiketVIP: this.state.lengthJadwal[0].block_vip})
    this.setState({ KapTiketEXE: this.state.lengthJadwal[0].k_exe})
    this.setState({ KapTiketVIP: this.state.lengthJadwal[0].k_vip})
 }
  GetItemPP = () =>{
    this.setState({ idPulang:this.state.arrayPP[0].id})
    this.setState({ koderutePP: this.state.arrayPP[0].kode_rute})
    this.setState({ harga_vipDewasaPP:this.state.arrayPP[0].harga_vip1})
    this.setState({ harga_vipAnakPP:this.state.arrayPP[0].harga_vip2})
    this.setState({ harga_eksDewasaPP: this.state.arrayPP[0].harga_eks1})
    this.setState({ harga_eksAnakPP: this.state.arrayPP[0].harga_eks2})
    this.setState({ harga_busDewasaPP: this.state.arrayPP[0].harga_bus1})
    this.setState({ harga_busAnakPP: this.state.arrayPP[0].harga_bus2})
    this.setState({ ETDPP: this.state.arrayPP[0].berangkat})
    this.setState({ ETAPP: this.state.arrayPP[0].tiba})
    this.setState({ KapalPP: this.state.arrayPP[0].tipe})
    this.setState({ SisaTiketEXEPP: this.state.arrayPP[0].block_exe})
    this.setState({ SisaTiketVIPPP: this.state.arrayPP[0].block_vip})
    this.setState({ KapTiketEXEPP: this.state.arrayPP[0].k_exe})
    this.setState({ KapTiketVIPPP: this.state.arrayPP[0].k_vip})
 }
GetItem2 = (id,harga_vip1,harga_vip2,harga_eks1,harga_eks2,harga_bus1,harga_bus2,rute,berangkat,tiba,tipe,kode_rute,block_exe,block_vip,k_exe,k_vip) =>{
  
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
    
    this.setState({tampilJadwalPP:true})
    this.setState({tampilUbahJadwal2:true})

  
    this.state.arrayPP.push({
            id: id,berangkat:berangkat,tiba:tiba,tipe:tipe,kode_rute:kode_rute,harga_vip1: harga_vip1, harga_vip2: harga_vip2, harga_eks1:harga_eks1,harga_eks2:harga_eks1,block_vip:block_vip,block_exe:block_exe,k_exe:k_exe,k_vip:k_vip
          })
   
   if(this.state.KelasTiket=='VIP'||this.state.KelasTiket=='Eksekutif'){
    if(this.state.JenisTiket=='Sekali Jalan'){
    this.setState({tampilPP:true})
    this.setState({BottomPopUp2:false});
    }
    if(this.state.JenisTiket=='PP'){
    this.setState({tampilPP:true})
    this.setState({BottomPopUp2:false});
    }
   }
   if(this.state.KelasTiket==''||this.state.KelasTiket==null){
    this.setState({tampilPP:false})
    this.setState({BottomPopUp2:false});
   }
    
    
  
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
      this.state.data1.push({
            no:'2', nama_pelabuhan:nama_pelabuhan,potongan_pp:potongan_pp,pass_pelabuhan:pass_pelabuhan,asuransi:asuransi,infant:infant,rute:rute,kode_asal:kode_asal,kode_tujuan:kode_tujuan,asal:asal,tujuan:tujuan,kode_rute:kode_rute,
          }) 
      this.state.data2.push({
            no:'1', nama_pelabuhan:nama_pelabuhan2,potongan_pp:potongan_pp,pass_pelabuhan:pass_pelabuhan2,asuransi:asuransi,infant:infant2,rute:rute2,kode_asal:kode_asal2,kode_tujuan:kode_tujuan2,asal:asal2,tujuan:tujuan2,kode_rute:kode_rute2,
          })
     this.setState({viewvisiblePergi:true, show_ringkasan:false})



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

   if(this.state.koderute==''  )
   {
    ToastAndroid.show('Silahkan Pilih Rute Keberangkatan Tiket', ToastAndroid.LONG);
   }
   else if(this.state.JenisTiket=='Sekali Jalan' && this.state.date=='' )
   {
    ToastAndroid.show('Silahkan Pilih Tanggal Keberangkatan', ToastAndroid.LONG);
   }
   else if(this.state.JenisTiket=='PP' && this.state.date=='')
   {
    ToastAndroid.show('Silahkan Pilih Tanggal Keberangkatan', ToastAndroid.LONG);
   }
   else if(this.state.JenisTiket=='PP' && this.state.date2=='')
   {
    ToastAndroid.show('Silahkan Pilih Tanggal Keberangkatan', ToastAndroid.LONG);
   }
   else if(this.state.JenisTiket=='PP' && this.state.tampilPP==true)
   {
    ToastAndroid.show('Silahkan Pilih Jadwal Pulang', ToastAndroid.LONG);
   }
   else if(this.state.tampilJadwal==true)
   {
    ToastAndroid.show('Silahkan Pilih Jadwal Berangkat', ToastAndroid.LONG);
   }
   else if(this.state.tampilJadwal2==false)
   {
    ToastAndroid.show('Silahkan Pilih Jadwal Berangkat', ToastAndroid.LONG);
   }
    else if(this.state.JenisTiket=='PP' && this.state.tampilJadwalPP==false)
   {
    ToastAndroid.show('Silahkan Pilih Jadwal Pulang', ToastAndroid.LONG);
   }     
    else{
    if(this.state.KelasTiket=='VIP'){
        if(this.state.JenisTiket=='Sekali Jalan'){
      this.setState({ValuePenumpang:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak))+parseInt(this.state.lengthJadwal[0].block_vip) })
      this.setState({totalPenumpangVIP:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })
      this.setState({ValueKapasitas:this.state.lengthJadwal[0].k_vip})
    }
       if(this.state.JenisTiket=='PP'){
      this.setState({ValuePenumpangPP:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak))+parseInt(this.state.arrayPP[0].block_vip) })
      this.setState({totalPenumpangVIP:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })
      this.setState({totalPenumpangPPVIP:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })      
      this.setState({ValueKapasitasPP:this.state.arrayPP[0].k_vip})
      this.setState({idPulang:this.state.arrayPP[0].id})
    }
    }
    if(this.state.KelasTiket=='Eksekutif'){
      if(this.state.JenisTiket=='Sekali Jalan'){
      this.setState({ValuePenumpang:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak))+parseInt(this.state.lengthJadwal[0].block_exe) })
      this.setState({totalPenumpangEXE:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })
      this.setState({ValueKapasitas:this.state.lengthJadwal[0].k_exe}) 
    }
     if(this.state.JenisTiket=='PP'){
      this.setState({ValuePenumpangPP:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak))+parseInt(this.state.arrayPP[0].block_exe) })
      this.setState({totalPenumpangEXE:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })
      this.setState({totalPenumpangPPEXE:(parseInt(this.state.ValueDewasa)+parseInt(this.state.ValueAnak)) })     
      this.setState({ValueKapasitasPP:this.state.arrayPP[0].k_exe})
      this.setState({idPulang:this.state.arrayPP[0].id}) 
    }
  }
 
    this.cekTanggal()
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
 batalKupon=()=>{
  this.setState({ dataPromo :[{}],
                  hideTombolGunakan  :true ,
                  HideTotalBayarDiskon  :false  ,
                  totalHarga  :this.state.rpTotalHarga,

                }) 
 } 
UbahKelasVIP(){
   
 
this.setState({KelasTiket:'VIP'})
this._toggleBottomNavigationView()
}
UbahKelasEXE(){
this.setState({KelasTiket:'Eksekutif'})
this._toggleBottomNavigationView()
}
UbahKelasBUS(){
this.setState({KelasTiket:'BUSINESS'})
this._toggleBottomNavigationView
}
GetFlatListItem (rute) {
   
  Alert.alert(rute);
 
}
UbahJadwal=()=>{
  this.setState({tampilUbahJadwal:true})
  this.setState({lengthJadwal:[]})
  this.GetItem
   this.setState({tampilJadwal:true})
   this.setState({BottomPopUp:true})
   this.setState({tampilJadwal2:false})
}
UbahJadwal2=()=>{
  this.setState({tampilUbahJadwal2:true})
  this.setState({arrayPP:[]})
  this.GetItem2
  this.setState({BottomPopUp2:true})
   this.setState({tampilJadwalPP:false})
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
  else if(this.state.KelasTiket=="Eksekutif"){
    this.setState({hargaTiketDewasa: this.state.harga_eksDewasa})
    this.setState({hargaTiketAnak: this.state.harga_eksAnak})
    this.setState({hargaTiketInfant: this.state.hargaInfant  })
    this.setState({totalDewasa : parseInt(this.state.ValueDewasa) * parseInt(this.state.harga_eksDewasa)+ parseInt(this.state.ValueDewasa) * (parseInt(this.state.hargaPass) + parseInt(this.state.hargaAsuransi)) });
    this.setState({totalAnak : parseInt(this.state.ValueAnak) * parseInt(this.state.harga_eksAnak)+ parseInt(this.state.ValueAnak) * (parseInt(this.state.hargaPass) + parseInt(this.state.hargaAsuransi)) });
    this.setState({totalInfant : parseInt(this.state.ValueInfant) * parseInt(this.state.hargaInfant) });
    this.HitungTotal()
  }
  
}
hitungPP(){
  if(this.state.KelasTiket=="VIP"){
    this.setState({potonganPPDewasa:parseInt(this.state.ValueDewasa)*parseInt(this.state.potonganPP)})
    this.setState({potonganPPAnak:parseInt(this.state.ValueAnak)*parseInt(this.state.potonganPP)})
    this.setState({hargaTiketDewasaPP: this.state.harga_vipDewasaPP})
    this.setState({hargaTiketAnakPP : this.state.harga_vipAnakPP})
    this.setState({hargaTiketInfantPP: this.state.hargaInfantPP  })
    this.setState({totalDewasaPP   : parseInt(this.state.totalDewasa)+(parseInt(this.state.ValueDewasa) * parseInt(this.state.harga_vipDewasaPP) + parseInt(this.state.ValueDewasa) * (parseInt(this.state.hargaPassPP) + parseInt(this.state.hargaAsuransi)))}); 
    this.setState({totalAnakPP : parseInt(this.state.totalAnak)+(parseInt(this.state.ValueAnak) * parseInt(this.state.harga_vipAnakPP ) + parseInt(this.state.ValueAnak) * (parseInt(this.state.hargaPassPP) + parseInt(this.state.hargaAsuransi)))}); 
    this.setState({totalInfantPP : parseInt(this.state.totalInfant)+(parseInt(this.state.ValueInfant) * parseInt(this.state.hargaInfantPP))}); 
    this.HitungTotalPP()
  }
  else if(this.state.KelasTiket=="Eksekutif"){
    this.setState({potonganPPDewasa:parseInt(this.state.ValueDewasa)*parseInt(this.state.potonganPP)})
    this.setState({potonganPPAnak:parseInt(this.state.ValueAnak)*parseInt(this.state.potonganPP)})
    this.setState({hargaTiketDewasaPP: this.state.harga_eksDewasaPP})
    this.setState({hargaTiketAnakPP: this.state.harga_eksAnakPP})
    this.setState({hargaTiketInfantPP: this.state.hargaInfantPP  })
    this.setState({totalDewasaPP :  parseInt(this.state.totalDewasa)+(parseInt(this.state.ValueDewasa) * parseInt(this.state.harga_eksDewasaPP )+ parseInt(this.state.ValueDewasa) * (parseInt(this.state.hargaPassPP) + parseInt(this.state.hargaAsuransi))) });
    this.setState({totalAnakPP : parseInt(this.state.totalAnak)+(parseInt(this.state.ValueAnak) * parseInt(this.state.harga_eksAnakPP ) + parseInt(this.state.ValueAnak) * (parseInt(this.state.hargaPassPP) + parseInt(this.state.hargaAsuransi)))});
    this.setState({totalInfantPP :  parseInt(this.state.totalInfant)+(parseInt(this.state.ValueInfant) * parseInt(this.state.hargaInfantPP)) });
    this.HitungTotalPP()
  }
  
}
HitungTotal(){
  this.setState({totalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant)})
  
  //this.setState({totalHarga : parseInt(this.state.totalDewasa) + parseInt(this.state.totalAnak) })
  if(this.state.ValueAnak=='0' && this.state.ValueInfant=='0')
  {

    this.setState({totalHarga : parseInt(this.state.totalDewasa) + 0 + 0 });
    this.setState({rpTotalHarga:this.state.totalHarga}) 
  }
  else if(this.state.ValueAnak!='0' && this.state.ValueInfant=='0'){
    this.setState({textAnak: 1})
    this.setState({totalHarga : parseInt(this.state.totalDewasa) + parseInt(this.state.totalAnak) });
    this.setState({rpTotalHarga:this.state.totalHarga}) 
  }
  else if(this.state.ValueAnak=='0' && this.state.ValueInfant!='0'){
   this.setState({textInfant: 1})
   this.setState({totalHarga : parseInt(this.state.totalDewasa) + parseInt(this.state.totalInfant)});
   this.setState({rpTotalHarga:this.state.totalHarga})
  }
  else if(this.state.ValueAnak!='0' && this.state.ValueInfant!='0'){
    this.setState({textAnak: 1})
    this.setState({textInfant: 1})
    this.setState({totalHarga : parseInt(this.state.totalDewasa) + parseInt(this.state.totalAnak) + parseInt(this.state.totalInfant)});
    this.setState({rpTotalHarga:this.state.totalHarga})
  }
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
 

    asal:this.state.AsyncAsal,
    kelas:this.state.AsyncKelas,
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
  clearPP=()=>{
    this.setState({JenisTiket:'Sekali Jalan'});
    this.setState({viewvisiblePP:true,tampilClose:false });
    this.toggleSwitchPP();
    this.setState({tampilPP:false});
    this.setState({tampilDetailHargaPP:false});
    this.setState({tampilJadwal2:true});
    this.setState({tampilDetailHarga:true});
    this.loadings2();

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
HitungTotalPP(){
  this.setState({totalPotongan : parseInt(this.state.potonganPPDewasa)+parseInt(this.state.potonganPPAnak)})
  this.setState({totalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant)})
  
  if(this.state.ValueAnak=='0' && this.state.ValueInfant=='0')
  {

    this.setState({totalHargaPP : parseInt(this.state.totalDewasaPP) + 0 + 0  });
    this.setState({rpTotalHargaPP:this.state.totalHargaPP}) 
  }
  else if(this.state.ValueAnak!='0' && this.state.ValueInfant=='0'){
    this.setState({textAnakPP: 1})
    this.setState({textAnak:null})
    this.setState({totalHargaPP : parseInt(this.state.totalDewasaPP) + parseInt(this.state.totalAnakPP) });
    this.setState({rpTotalHargaPP:this.state.totalHargaPP})
  }
  else if(this.state.ValueAnak=='0' && this.state.ValueInfant!='0'){
   this.setState({textInfantPP: 1})
   this.setState({textInfant:null})
   this.setState({totalHargaPP : parseInt(this.state.totalDewasaPP) + parseInt(this.state.totalInfantPP)});
   this.setState({rpTotalHargaPP:this.state.totalHargaPP})
  }
  else if(this.state.ValueAnak!='0' && this.state.ValueInfant!='0'){
    this.setState({textAnakPP: 1})
    this.setState({textInfantPP: 1})
    this.setState({textAnak:null})
    this.setState({textInfant:null})
    this.setState({totalHargaPP : parseInt(this.state.totalDewasaPP) + parseInt(this.state.totalAnakPP) + parseInt(this.state.totalInfantPP)});
    this.setState({rpTotalHargaPP:this.state.totalHargaPP})
  }
}

 saveData = () =>{
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
        let AsyncId= this.state.idKeberangkatan;
        let AsyncIdPulang= this.state.idPulang;
        let AsynctotalDewasa = this.state.totalDewasa;
        let AsynctotalAnak = this.state.totalAnak;
        let AsynctotalInfant = this.state.totalInfant;
        let AsyncTotalHarga = this.state.totalHarga;
        let AsynctotalDewasaPP = this.state.totalDewasaPP;
        let AsynctotalAnakPP = this.state.totalAnakPP;
        let AsynctotalInfantPP = this.state.totalInfantPP;
        let AsyncTotalHargaPP = this.state.totalHargaPP;
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
        let AsyncHargaTiketDewasa = this.state.hargaTiketDewasa;
        let AsyncHargaTiketAnak = this.state.hargaTiketAnak;
        let AsyncHargaTiketInfant = this.state.hargaTiketInfant ;
        let AsyncTotalPenumpangPP = this.state.totalPenumpangPP;
        let AsyncHargaTiketDewasaPP = this.state.hargaTiketDewasaPP;
        let AsyncHargaTiketAnakPP = this.state.hargaTiketAnakPP;
        let AsyncHargaTiketInfantPP = this.state.hargaTiketInfantPP ;
      
        let data = {
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
     this.props.navigation.navigate('Transfer_Bank')
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
          <Icon active name="ios-person-outline" />
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
      },{
        value: 'United Arab Emirates'
      },{
        value: 'United Kingdom'
      },{
        value: 'United States'
      },{
        value: 'Australia'
      },{
        value: 'Brazil'
      },{
        value: 'China'
      },{
        value: 'Hong Kong'
      },{
        value: 'India'
      },{
        value: 'Denmark'
      },{
        value: 'Japan'
      },{
        value: 'Malaysia'
      },{
        value: 'Singapura'
      }
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
                this.setState({ SECTIONS: newArray });
              if(value=!''){
                const newArray = [...this.state.SECTIONS];
                newArray[section.idx].s_title = 1;
                newArray[section.idx].s_total = 1 + this.state.SECTIONS[section.idx].s_namadepan + this.state.SECTIONS[section.idx].s_namabelakang;
                this.setState({ SECTIONS: newArray });
              }}}
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
      <BottomSheet
          visible={this.state.BottomPopUp}
          >
 
             
      <View style={{justifyContent:'center',width: '100%', alignItems:'center',height:'100%'}}>

          <View style={{width:280,backgroundColor:'#fff', borderRadius:10, alignItems:'center'}}>
            <CardItem style={{backgroundColor:'transparent'}}>
                <Text>Pilih jam keberangkatan</Text>
            </CardItem>
            <View style={{backgroundColor:'#D3D3D3', width:'100%', height:1}}/>
            
                      <ListView
                        style={{marginBottom:15, marginTop:10}}
                        dataSource={this.state.dataSource2}
                        renderSeparator= {this.ListViewItemSeparator}
                        renderRow={(rowData) =>
                        <TouchableOpacity onPress={this.GetItem.bind(this, rowData.id,rowData.harga_vip1,rowData.harga_vip2,rowData.harga_eks1,rowData.harga_eks2,rowData.harga_bus1,rowData.harga_bus2,rowData.rute,rowData.berangkat,rowData.tiba,rowData.tipe,rowData.kode_rute,rowData.block_exe,rowData.block_vip,rowData.k_exe,rowData.k_vip)} >
                          <Body style={{width:250, alignContent:'center',backgroundColor:'#3F81B5', marginTop:8, borderRadius:5}}>
                              <CardItem style={{height:30, backgroundColor:'transparent'}}>
                                  <Icon active name="md-boat" style={{fontSize: 15, color:'#ffffff'}}/>
                                  <Text style={{fontSize: 14, color:'#ffffff'}}> {rowData.tipe}</Text>
                              </CardItem>
                              <View style={{backgroundColor:'#D3D3D3', width:'100%', height:1}}/> 
                              <CardItem style={{height:30, backgroundColor:'transparent'}}>
                                <Text style={{color:'#ffffff', fontSize: 14,}}>{moment(this.state.date).format('DD MMM YYYY')}</Text>
            
                                <Text style={{color:'#ffffff', fontSize: 14,}}>, {rowData.berangkat} - {rowData.tiba}</Text>
                                   
                              </CardItem> 
                          </Body>
                          </TouchableOpacity>
                        }/>

                        
                   
                  </View>
              </View>
        </BottomSheet>

        <BottomSheet
          visible={this.state.BottomPopUp2}>
            <View style={{justifyContent:'center',width: '100%', alignItems:'center',height:'100%'}}>

    <View style={{width:280,backgroundColor:'#fff', borderRadius:10, alignItems:'center'}}>
      <CardItem style={{backgroundColor:'transparent'}}>
          <Text>Pilih Jam Kepulangan</Text>
      </CardItem>
      <View style={{backgroundColor:'#D3D3D3', width:'100%', height:1}}/>
      <View style={{marginTop:6, marginBottom:20}}> 
       {this.state.listPP.map((listPP)=>{
                return (
                    <View key={listPP.id}>
                    <TouchableOpacity onPress={this.GetItem2.bind(this, listPP.id,listPP.harga_vip1,listPP.harga_vip2,listPP.harga_eks1,listPP.harga_eks2,listPP.harga_bus1,listPP.harga_bus2,listPP.rute,listPP.berangkat,listPP.tiba,listPP.tipe,listPP.kode_rute,listPP.block_exe,listPP.block_vip,listPP.k_vip,listPP.k_exe)} >
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



      <BottomSheet
          visible={this.state.BottomPopUpold}
          onBackButtonPress={this._toggleBottomNavigationView}
          onBackdropPress={this._toggleBottomNavigationView}>
 
             
              <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
               <View style={{marginTop:20}}>
                   <Text >        Silahkan Pilih Waktu Keberangkatan</Text>
              </View>  
                  <View style={{ width:'100%', marginTop:0}}>
                    {
            this.state.tampilJadwal?
            <ListItem>  
                <Body>
                    <Card>
                        <ListView
                        dataSource={this.state.dataSource2}
                        renderSeparator= {this.ListViewItemSeparator}
                        renderRow={(rowData) =>
                        <TouchableOpacity onPress={this.GetItem.bind(this, rowData.id,rowData.harga_vip1,rowData.harga_vip2,rowData.harga_eks1,rowData.harga_eks2,rowData.harga_bus1,rowData.harga_bus2,rowData.rute,rowData.berangkat,rowData.tiba,rowData.tipe,rowData.kode_rute,rowData.block_exe,rowData.block_vip,rowData.k_exe,rowData.k_vip)} >
                          <Body style={{width:'90%', alignContent:'center',backgroundColor:'#3F81B5', marginTop:5, borderRadius:5}}>
                              <CardItem style={{height:30, backgroundColor:'transparent'}}>
                                  <Icon active name="md-boat" style={{fontSize: 14, color:'#ffffff'}}/>
                                  <Text style={{fontSize: 12, color:'#ffffff'}}> {rowData.tipe}</Text>
                              </CardItem>
                              <View style={{backgroundColor:'#D3D3D3', width:'100%', height:1}}/> 
                              <CardItem style={{height:30, backgroundColor:'transparent'}}>
                                <Text style={{color:'#ffffff', fontSize: 12,}}>{this.state.KodeAsal}</Text>
                                <Text style={{color:'#ffffff', fontSize: 12,}}> | </Text>
                                <Text style={{color:'#ffffff', fontSize: 12,}}>{'ETD : ' + rowData.berangkat}</Text>
                                <Text>     </Text>
                                <Icon active name="ios-arrow-round-forward-outline" style={{color:'#ffffff'}} />
                                <Text style={{color:'#ffffff', fontSize: 12,}}>{this.state.KodeTujuan}</Text>
                                <Text style={{color:'#ffffff', fontSize: 12,}}> | </Text>
                                <Text style={{color:'#ffffff', fontSize: 12,}}>{'ETA : ' + rowData.tiba}</Text>    
                              </CardItem> 
                          </Body>
                          </TouchableOpacity>
                        }/>

                        <View style={{backgroundColor:'#ffffff', width:'100%', height:20}}/> 
                    </Card>
                </Body>
            </ListItem>:null
          }
                  </View>
              </View>
        </BottomSheet>

        <BottomSheet
          visible={this.state.BottomPopUp2old}
          onBackButtonPress={this._toggleBottomNavigationView2}
          onBackdropPress={this._toggleBottomNavigationView2}>
            <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
               <View style={{marginTop:20}}>
                   <Text >        Silahkan Pilih Waktu Kepulangan</Text>
              </View>
              <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
                  <View style={{ width:'100%', marginTop:-20}}>
                  
          <ListItem>  
                <Body>
                    <Card>
                        {
                    this.state.listPP.map(( listPP, key ) =>
                      (
                      <View key = { key } style = { styles.listPP }>
                      <TouchableOpacity onPress={this.GetItem2.bind(this, listPP.id,listPP.harga_vip1,listPP.harga_vip2,listPP.harga_eks1,listPP.harga_eks2,listPP.harga_bus1,listPP.harga_bus2,listPP.rute,listPP.berangkat,listPP.tiba,listPP.tipe,listPP.kode_rute,listPP.block_exe,listPP.block_vip,listPP.k_vip,listPP.k_exe)} >                      
                      <Text>
                      {listPP.tipe}
                      </Text>
                      <Text>
                      {listPP.kode_rute}
                      </Text>
                      <Text>
                      {listPP.tiba} {listPP.berangkat} 
                      </Text>
    
                      </TouchableOpacity>
                      
            
            </View>
          ))
        }
                        <View style={{backgroundColor:'#ffffff', width:'100%', height:20}}/> 
                    </Card>
                </Body>
            </ListItem>
                  </View>
              </View>
              </View>
        </BottomSheet>

      
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
             <Button block style={{width:'100%', backgroundColor:'#3F81B5'}} onPress={ () => this.UbahKelasVIP()}>
                  <Text>VIP</Text>
              </Button>
              </View>

              <View style={{backgroundColor:'#F4F0E5', width:'100%', marginTop:5}}>
                <Button block style={{width:'100%', backgroundColor:'#3F81B5'}} onPress={ () => this.UbahKelasEXE()}>
                  <Text>EKSEKUTIF</Text>
              </Button>
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
          <Title style={{marginTop:15}}>Cari Tiket</Title>
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
            <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
            <Header style={{backgroundColor:'#3F81B5',}}>
            
            <View style={styles.view}>
              <Title style={{marginTop:15}}>Pilih Rute Pelayaran</Title>
              <Right>
                <Button transparent  onPress={this.closeModal}>
                  <Icon name='close' style={{fontSize:30}} />
                </Button>
              </Right>
              </View>
            </Header>

               {this.state.schedule.map((schedule)=>{
                return (

                    <View key={schedule.id}>
                    
                    <ListItem>
                    <TouchableOpacity onPress={this.Navigate_To_Second_Activity.bind(this, schedule.rute,schedule.kode_asal,schedule.kode_tujuan,schedule.asal,schedule.tujuan,schedule.kode_rute,schedule.asuransi,schedule.pass_pelabuhan,schedule.infant,schedule.kode_rute2,schedule.pass_pelabuhan2,schedule.infant2,schedule.potongan_pp,schedule.nama_pelabuhan,schedule.nama_pelabuhan2,schedule.rute2,schedule.asal2,schedule.kode_asal2,schedule.tujuan2,schedule.kode_tujuan2)}>
                      <CardItem style={{height:20, width:'100%'}}>
                      <Text>{schedule.rute}</Text>
                      </CardItem>
                    </TouchableOpacity>
                    </ListItem>
                    
                    </View>
                  )
               })}
               </ScrollView>
          </View>

        </BottomSheet>

            <View style={{alignItems:'center', backgroundColor:'#fff'}}>  
               <View style={{flexDirection:'row', marginTop:15}}>
                <View style={{width:'80%'}}>
                <TouchableOpacity onPress={this._toggleModal}>
                    <View style={{height:40, backgroundColor:'#F4F0E5', width:'97%', borderRadius:10,}}>
                      <View style={{flexDirection:'row', width:'100%',height:35, alignContent:'center'}}>
                          <Text style={{fontSize:13, marginLeft:10, marginTop:9}}>Asal       </Text>
                          <View style={{height:30, width:1, backgroundColor:'#606060',marginTop:5}}></View>
                          <Text style={{fontSize:14, marginLeft:10, marginTop:9, fontWeight: 'bold'}}>{this.state.asal} ({this.state.namaPelabuhan})</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={{height:40, backgroundColor:'#F4F0E5', width:'97%', borderRadius:10,marginTop:10}}>
                    <View style={{flexDirection:'row', width:'100%',height:35, alignContent:'center'}}>
                        <Text style={{fontSize:13, marginLeft:10, marginTop:9}}>Tujuan   </Text>
                        <View style={{height:30, width:1, backgroundColor:'#606060',marginTop:5}}></View>
                        <Text style={{fontSize:14, marginLeft:10, marginTop:9, fontWeight: 'bold'}}>{this.state.tujuan} ({this.state.namaPelabuhan2})</Text>
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
                          minDate={moment(new Date()).add(1,'day').format('YYYY-MM-DD')}
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

                    onDateChange={(date) => {this.setState({date: date,colorbg:'#F4F0E5',viewvisiblePenumpang:true,show_ringkasan:false}),this.toggleSwitch(),this.cekJadwal()}}
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

                   onDateChange={(date) => {this.setState({date2: date, JenisTiket:'PP',tampilJadwal2:false,tampilJadwal:false,tampilClose:true}),this.toggleSwitchPP(),this.cekPP()}}
                  />
                  {
                  this.state.tampilClose?<Button transparent style={{position:'absolute', right:0, height:30,marginLeft:10}} onPress={this.clearPP}>
                    <Icon active name="close" style={{fontSize: 20, color:'#000'}}/>
                  </Button>:null
                  }
                  </View>:
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
                     <Button block style={{backgroundColor:'#F4F0E5', height:30,borderRadius:5 }} ><Text style={{color:'#fcfbf8'}}>{this.state.ValueDewasa}</Text></Button>
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
                     <Button block style={{backgroundColor:'#F4F0E5', height:30,borderRadius:5 }} ><Text style={{color:'#fcfbf8'}}>{this.state.ValueDewasa}</Text></Button>
                    </View>
                  }
                  </View>

                  <View style={{flexDirection:'row', margin:8, marginTop:-2,alignItems:'center'}}>
                    {this.state.viewvisiblePenumpang?<View style={{width:'45%'}}>
                     <Text style={{fontSize:12,}}>Bayi</Text>
                     <Text style={{fontSize:11,}}> 5 Tahun</Text>
                    </View>:<View style={{width:'45%'}}>
                     <Text style={{fontSize:12,color:'#F4F0E5'}}>Bayi</Text>
                     <Text style={{fontSize:11,color:'#F4F0E5'}}> 5 Tahun</Text>
                    </View>
                  }

                    <View style={{width:'5%'}}/>
                    {this.state.viewvisiblePenumpang?<View style={{width:'50%'}}>
                     <Button block style={{backgroundColor:'#3F81B5', height:30,borderRadius:5 }}><Text>4</Text></Button>
                    </View>:<View style={{width:'50%'}}>
                     <Button block style={{backgroundColor:'#F4F0E5', height:30,borderRadius:5 }}><Text>4</Text></Button>
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
                    <Button transparent style={[{ backgroundColor: this.state.colorVIP }, {height:35,borderRadius:5, width:'100%', alignItems:'center'}]} onPress={() => {this.setState({colorVIP: '#ffcc66', colorEXE:'#F4F0E5',KelasTiket:'VIP'}),this.cekKeberangkatan()}}><Text style={{color:'#000'}}>VIP</Text></Button>
                    </View>:<View style={{width:'49%', alignItems:'center'}}>
                    <Button transparent style={{height:35,borderRadius:5, width:'100%', alignItems:'center',backgroundColor:'#fcfbf8'}} ><Text style={{color:'#F4F0E5'}}>VIP</Text></Button>
                    </View>
                    }

                    <View style={{width:'2%'}}/>

                    {this.state.viewvisibleKelas?<View style={{width:'49%'}}>
                    <Button transparent style={[{ backgroundColor: this.state.colorEXE }, {height:35,borderRadius:5, width:'100%', alignItems:'center'}]} onPress={() => {this.setState({colorVIP: '#F4F0E5', colorEXE:'#66ccff', KelasTiket:'Eksekutif'}),this.cekKeberangkatan()}}><Text style={{color:'#000'}}>Eksekutif</Text></Button>
                    </View>:<View style={{width:'49%', alignItems:'center'}}>
                    <Button transparent style={{height:35,borderRadius:5, width:'100%', alignItems:'center',backgroundColor:'#fcfbf8'}} ><Text style={{color:'#F4F0E5'}}>EKSEKUTIF</Text></Button>
                    </View>
                    }

                  </View>
               </View>
            </View> 
{ this.state.show_ringkasan?
  <View>
{this.state.tampilJadwal2?
            
            <View style={{width:'100%', alignItems:'center'}}>
            <Text style={{fontSize: 18, marginTop:15}}>Ringkasan Pesanan</Text>
            {this.state.lengthJadwal.map((lengthJadwal)=>{
                return (
                <View key={lengthJadwal.id} style={{borderRadius:10, backgroundColor:'#fff', marginTop:5, width:'92%'}}>
                
                    
                        
                    
                    <CardItem style={{height:20, backgroundColor:'transparent', marginTop:10}}>
                        <Text style={{fontSize: 18,fontWeight: 'bold',}}>{this.state.asal} <Icon name="arrow-round-forward" style={{fontSize:12}} /> {this.state.tujuan}</Text>
                    </CardItem>
                     
                    <CardItem style={{backgroundColor:'transparent'}}>
                         <Text style={{fontSize: 14}}>{this.state.KelasTiket} - {this.state.JenisTiket}</Text>
                    </CardItem> 
                    <CardItem style={{height:30, backgroundColor:'transparent'}}>
                         <Text style={{fontSize: 13}}>{moment(this.state.date).format('dddd')} {moment(this.state.date).format('DD MMM YYYY')}, {this.state.ETD} - {this.state.ETA}</Text>
                         <Right>
                        {this.state.tampilUbahJadwal?<TouchableOpacity onPress={this.UbahJadwal}><Text style={{fontSize: 8,color:'#3F81B5',fontWeight: 'bold'}}> Ubah Waktu Keberangkatan</Text>
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
            <ListItem>  
                <Body>    
                        {this.state.arrayPP.map((arrayPP)=>{
                return (
                    <View key={arrayPP.id}>
                    <CardItem style={{height:10,}}>
                        <Text style={{fontSize: 13, color:'#D3D3D3'}}>Ringkasan Pesanan</Text>
                    </CardItem>
                    <CardItem style={{height:50,marginLeft:20, backgroundColor:'#F4F0E5'}}>
                        <Text style={{fontSize: 16,fontWeight: 'bold',}}>{this.state.asal} <Icon name="md-swap" style={{fontSize:12}} /> {this.state.tujuan}</Text>
                        
                        
                    </CardItem>
                   <CardItem style={{marginLeft:20, backgroundColor:'#F4F0E5'}}>
                         <Text style={{fontSize: 12}}>{this.state.KelasTiket} - </Text>
            
                         <Text style={{fontSize: 12}}>{this.state.JenisTiket} </Text>
                    
                    </CardItem> 
                    <CardItem style={{height:30,marginLeft:20, backgroundColor:'#F4F0E5'}}>
                         <Text style={{fontSize: 11}}>{moment(this.state.date).format('dddd')}, {moment(this.state.date).format('DD MMM YYYY')}, {this.state.ETD} <Icon name="arrow-round-forward" style={{fontSize:12}} /> {this.state.ETA}</Text>
                         <Right>
                        {this.state.tampilUbahJadwal?<TouchableOpacity onPress={this.UbahJadwal}><Text style={{fontSize: 8,color:'#3F81B5',fontWeight: 'bold'}}> Ubah Waktu Keberangkatan</Text>
                        </TouchableOpacity>
                        :null
                        }
                        </Right>
                    </CardItem>
                    <CardItem style={{height:30,marginLeft:20, backgroundColor:'#F4F0E5'}}>
                         <Text style={{fontSize: 11}}>{moment(this.state.date2).format('dddd')}, {moment(this.state.date2).format('DD MMM YYYY')}, {this.state.arrayPP[0].berangkat} <Icon name="arrow-round-forward" style={{fontSize:12}} /> {this.state.arrayPP[0].tiba}</Text>
                         <Right>
                        {this.state.tampilUbahJadwal?<TouchableOpacity onPress={this.UbahJadwal2}><Text style={{fontSize: 8,color:'#3F81B5',fontWeight: 'bold'}}> Ubah Waktu Kepulangan</Text>
                        </TouchableOpacity>
                        :null
                        }
                        </Right>
                    </CardItem>
                            </View>
                          )
                       })} 
                      
                </Body>

            </ListItem>:null
          }
{this.state.tampilDetailHarga?
  
  <ListItem>
  <Body>
{this.state.hideTombolGunakan ?<CardItem style={{height:10,}}>
<TouchableOpacity onPress={this._toggleModalInputPromo}>
  <Text style={{fontSize: 13, color:'#3F81B5'}}>Gunakan Kupon/Promo</Text>
</TouchableOpacity>
</CardItem>:
<CardItem style={{height:10,}}>
<TouchableOpacity onPress={this.batalKupon  }>
  <Text style={{fontSize: 13, color:'#3F81B5'}}>Batal Gunakan Promo/Kupon</Text>
</TouchableOpacity>
</CardItem>
}
  <CardItem style={{marginLeft:20, backgroundColor:'#F4F0E5'}}>
  <Text style={{fontSize: 12}}>Harga Tiket </Text>
  <Right >
  <Text style={{fontSize: 12,fontWeight: 'bold'}}>Rp.{this.state.rpTotalHarga},-</Text>
  </Right>
  </CardItem>
  {this.state.HideTotalBayarDiskon?<CardItem style={{marginLeft:20, backgroundColor:'#F4F0E5'}}>
  <Text style={{fontSize: 12,color:'#c91e1e'}}>Potongan </Text>
  <Right >
  <Text style={{fontSize: 12,fontWeight: 'bold',color:'#c91e1e'}}>Rp.{this.state.dataPromo[0].nominal     },-</Text>
  </Right>
  </CardItem>:null
  }
  <View style={{backgroundColor:'#ffffff', width:'100%', height:1,marginLeft:20}}/>
  {this.state.HideTotalBayarDiskon?<CardItem style={{marginLeft:20, backgroundColor:'#F4F0E5'}}>
  <Text style={{fontSize: 18,fontWeight: 'bold'}}>Total Harga  </Text>
  <Right>
  <Text style={{fontSize: 18,fontWeight: 'bold'}}>Rp.{this.state.totalHargaPromo   },-</Text>
  </Right>
  </CardItem>:<CardItem style={{marginLeft:20, backgroundColor:'#F4F0E5'}}>
  <Text style={{fontSize: 18,fontWeight: 'bold'}}>Total Harga  </Text>
  <Right>
  <Text style={{fontSize: 18,fontWeight: 'bold'}}>Rp.{this.state.rpTotalHarga  },-</Text>
  </Right>
  </CardItem>
  }
  </Body>
  </ListItem>:null
}
{this.state.tampilDetailHargaPP?
  
  <ListItem>
  <Body>
{this.state.hideTombolGunakan ?<CardItem style={{height:10,}}>
<TouchableOpacity onPress={this._toggleModalInputPromo}>
  <Text style={{fontSize: 13, color:'#3F81B5'}}>Gunakan Kupon/Promo</Text>
</TouchableOpacity>
</CardItem>:
<CardItem style={{height:10,}}>
<TouchableOpacity onPress={this.batalKupon  }>
  <Text style={{fontSize: 13, color:'#3F81B5'}}>Batal Gunakan Promo/Kupon</Text>
</TouchableOpacity>
</CardItem>
}
  <CardItem style={{marginLeft:20, backgroundColor:'#F4F0E5'}}>
  <Text style={{fontSize: 12}}>Harga Tiket </Text>
  <Right >
  <Text style={{fontSize: 12,fontWeight: 'bold'}}>Rp.{this.state.rpTotalHargaPP},-</Text>
  </Right>
  </CardItem>
  {this.state.HideTotalBayarDiskon?<CardItem style={{marginLeft:20, backgroundColor:'#F4F0E5'}}>
  <Text style={{fontSize: 12,color:'#c91e1e'}}>Potongan </Text>
  <Right >
  <Text style={{fontSize: 12,fontWeight: 'bold',color:'#c91e1e'}}>Rp.{this.state.dataPromo[0].nominal     },-</Text>
  </Right>
  </CardItem>:null
  }
  <View style={{backgroundColor:'#ffffff', width:'100%', height:1,marginLeft:20}}/>
  {this.state.HideTotalBayarDiskon?<CardItem style={{marginLeft:20, backgroundColor:'#F4F0E5'}}>
  <Text style={{fontSize: 18,fontWeight: 'bold'}}>Total Harga  </Text>
  <Right>
  <Text style={{fontSize: 18,fontWeight: 'bold'}}>Rp.{this.state.totalHargaPromo   },-</Text>
  </Right>
  </CardItem>:<CardItem style={{marginLeft:20, backgroundColor:'#F4F0E5'}}>
  <Text style={{fontSize: 18,fontWeight: 'bold'}}>Total Harga  </Text>
  <Right>
  <Text style={{fontSize: 18,fontWeight: 'bold'}}>Rp.{this.state.rpTotalHargaPP  },-</Text>
  </Right>
  </CardItem>
  }
  </Body>
  </ListItem>:null
}

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
            this.state.HideKupon?<ScrollView>
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
         </ScrollView>:null
       }
            </View>

         </View>   
            
        </BottomSheet>

        </Content>
        </ScrollView>

     {
     this.state.footerhide?<Footer style={{backgroundColor:this.state.bgcolor}}>
          <TouchableOpacity style={[styles.ButtonStyle, { backgroundColor: this.state.ButtonStateHolder ? '#607D8B' : '#3F81B5' }]}  
          activeOpacity = { .5 } 
          disabled={this.state.ButtonStateHolder}
          onPress={this.Periksa} >
            <Text style={{color:'#ffffff', alignItems:'center'}}>Pesan Tiket</Text>
        </TouchableOpacity>
        </Footer>:<Footer style={{backgroundColor:'#ffffff'}}>
        </Footer>
      }  
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
       backgroundColor:'#3F81B5', 
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