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
  TouchableOpacity,
  ListView,
  Alert,
  AsyncStorage,
  FlatList,
  ToastAndroid,
  StatusBar,
  BackHandler,
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
export default class Runcian extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = { 
                   schedule:[],
                   data1:[],
                   data2:[],
                   dataETAPergi:'',
                   dataETAPulang:'',
                   KapTiketVIP:0,
                   KapTiketEXE:0,
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
                   bgcolor:'#607D8B',
                   BottomPopUp:false,
                   BottomPopUp2:false,
                   dialogVisible: false,
                   dialogVisible2: false,
                   viewvisible: false,
                   viewvisible2: false, 
                   isModalVisible: false, 
                   isModalVisible2:false, 
                   ModalVisibleStatus: false,
                   ModalVisibleStatus2: false,
                   tampilJadwal:false,
                   tampilJadwalPP:false,
                   tampilPP:false,
                   tampilJadwal2:false,
                   tampilUbahJadwal:false,
                   tampilUbahJadwal2:false,
                   loading1:false,
                   loading2:false,
                   transitHide:false,
                   footerhide:true,
                   collapsed2:false,
                   collapsed3:false,
                   HideTotalBayar:false,
                   HideTotalBayarPP:false,
                   HideTotalPesananPP:false,
                   HideDetailPesananPP:false,
                   ButtonStateHolder:true,
                   KelasTiket:'Eksekutif',
                   JenisTiket:'Sekali Jalan',
                   hargaPass:'',
                   hargaAsuransi:'',
                   hargaInfant:'',
                   hargaPass2:'',
                   hargaAsuransi2:'',
                   hargaInfant2:'',
                   date:'',
                   date2:'',
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
                   ValueDewasa:1,
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
                   cekTotalPenumpang:1,
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
      this.cekJadwal();
      this.setState({loading1: !this.state.loading1});
      if(this.state.viewvisible==true){
        this.cekPP();
      }
      }, 100);

  }
  cekTanggal=()=>{
  
  if(this.state.JenisTiket=='PP'){
   if(this.state.date<this.state.date2){
   if(moment(this.state.date2+' '+this.state.arrayPP [0].berangkat).format("DD-MM-YYYY HH:mm")<moment(this.state.date+' '+this.state.lengthJadwal   [0].berangkat).format("DD-MM-YYYY HH:mm")){
    ToastAndroid.show('Silahkan Ubah Tanggal Pulang', ToastAndroid.LONG); 
   }
   else{
    this.loadings2()
   }
  }
  else{
    ToastAndroid.show('Silahkan Ubah Tanggal Pulang', ToastAndroid.LONG); 
   
  } 
  }
  else {
     this.loadings2()
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
        this.saveData();
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
        this.saveData();  
      } 
      else{
        ToastAndroid.show('Maaf Tiket Pulang Telah Habis', ToastAndroid.LONG);
      }
    }
        
  } 
  else{
    ToastAndroid.show('Maaf Tiket Telah Habis', ToastAndroid.LONG);
  }    
       
      this.setState({loading2: !this.state.loading2});
         
        
      }, 100);
    
  }
  
  state = {colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false, };

  toggleSwitch = () => {
    
    this.setState({viewvisible: !this.state.viewvisible});
    
    if(this.state.viewvisible==false){
      this.setState({JenisTiket:'PP'})
    }
    if(this.state.viewvisible==true){
      this.setState({JenisTiket:'Sekali Jalan'})
      this.setState({tampilPP:false})
    }
    
    if(this.state.date!=''){
      this.setState({tampilJadwal2:true})
    }
    
    this.setState({tampilJadwalPP:false});
    this.setState({date2:null});
    
    
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
  this.loadings();
  }
  
_toggleModal = () =>{
    
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.setState({ footerhide: !this.state.footerhide })
    if(this.state.isModalVisible==true){
      this.loadings();
    }
  }
  closeModal=()=>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
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
 
    this.setState({ BottomPopUp: !this.state.BottomPopUp })
    this.setState({ footerhide: !this.state.footerhide })
  }
  _toggleBottomNavigationView2 = () => {
 
    this.setState({ BottomPopUp2: !this.state.BottomPopUp2 })
    this.setState({ footerhide: !this.state.footerhide })
  }

tambahValueDewasa=()=>{

  if(this.state.ValueDewasa<5 && this.state.cekTotalPenumpang<5 ){
   this.setState({ValueDewasa : parseInt(this.state.ValueDewasa) + 1  });
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


 if(this.state.ValueDewasa>1){
   this.setState({ValueDewasa : parseInt(this.state.ValueDewasa) - 1  });
   this.setState({cekTotalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant) -1 });
   if(this.state.ValueInfant == this.state.ValueDewasa){
   this.setState({ValueInfant : parseInt(this.state.ValueInfant) - 1  });
   }
 }

}
 tambahValueAnak=()=>{
  if(this.state.ValueAnak<5 && this.state.cekTotalPenumpang<5){
   this.setState({ValueAnak : parseInt(this.state.ValueAnak) + 1  });
   if (this.state.cekTotalPenumpang<5){
   this.setState({cekTotalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant) +1 });
    }
  }
}
kurangValueAnak=()=>{
  if(this.state.ValueAnak>0){
   this.setState({ValueAnak : parseInt(this.state.ValueAnak) - 1  });
   this.setState({cekTotalPenumpang : parseInt(this.state.ValueDewasa) + parseInt(this.state.ValueAnak) + parseInt(this.state.ValueInfant) -1 });
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
      this.setState({gantiHarga:this.state.tesharga})
      this.GetJadwal();
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
        this.setState({tampilJadwal:false});
        this.setState({tampilJadwal2:true});
        this.setState({tampilUbahJadwal:false});
        if(this.state.viewvisible==false){
        this.DisableButtonFunction();
        }
        
       }
       else{
        this.setState({tampilUbahJadwal:true})
        this.setState({tampilJadwal2:false})
        this.setState({tampilJadwal:true});
        this.setState({lengthJadwal:[]});
        if(this.state.viewvisible==false){
        this.DisableButtonFunction();
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
     
     }
     else if(this.state.date!='' && this.state.koderute==''){
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
      ToastAndroid.show('Jadwal Tidak Tersedia, Silahkan Periksa Kembali Jadwal Anda', ToastAndroid.LONG);
      this.setState({tampilJadwal:false});
      this.setState({lengthJadwal:[]});
      this.setState({tampilJadwal2:false});

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
        this.setState({tampilPP:false});
        this.setState({tampilJadwalPP:true});
        this.setState({tampilUbahJadwal2:false});
        this.DisableButtonFunction();
       }
       else{
        this.setState({tampilPP:true});
        this.setState({tampilJadwalPP:false});
        this.setState({tampilUbahJadwal2:true});
        this.setState({arrayPP:[]});
        this.DisableButtonFunction();
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
      ToastAndroid.show('Jadwal Pulang Tidak Tersedia, Silahkan Periksa Kembali Jadwal Anda', ToastAndroid.LONG);
      this.setState({tampilPP:false});
      this.setState({tampilJadwalPP:false});
      this.setState({tampilJadwal2:true});
      
     }
    });

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
   if(this.state.rpTotalHarga.toString().length==6){
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
    this.setState({tampilJadwal2:true})
    this.setState({tampilUbahJadwal:true})
    this.state.lengthJadwal.push({
            id: id,berangkat:berangkat,tiba:tiba,tipe:tipe,kode_rute:kode_rute, harga_vip1: harga_vip1, harga_vip2: harga_vip2, harga_eks1:harga_eks1,harga_eks2:harga_eks2,block_vip:block_vip,block_exe:block_exe,k_exe:k_exe,k_vip:k_vip
          }) 
   this.setState({tampilJadwal:false})
    
  
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
   this.setState({tampilPP:false}) 
    
  
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
   this.setState({tampilJadwal2:false})
}
UbahJadwal2=()=>{
  this.setState({tampilUbahJadwal2:true})
  this.setState({arrayPP:[]})
  this.GetItem2
   this.setState({tampilPP:true})
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
      this.props.navigation.navigate("Rincian",{rpTotalHarga:this.state.rpTotalHarga,rpTotalHargaPP:this.state.rpTotalHargaPP})
    }

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
          onBackButtonPress={this._toggleBottomNavigationView}
          onBackdropPress={this._toggleBottomNavigationView}>
 
              <View>
                   <Text style={{color:'#ffffff'}}>        Pilih Kelas</Text>
              </View>  
              <View style={styles.bottomNavigationView}>
                  <View style={{ width:'100%', marginTop:-20}}>
                    <ListItem style={{width:'100%', height:50}}>
                    <Button transparent style={{width:'100%', alignItems:'center'}} onPress={ () => this.UbahKelasVIP()}>
                    <Text style={{color:'#000000'}}>VIP</Text>
                    </Button>
                    </ListItem>
                  </View>
                  <View style={{ width:'100%'}}>
                    <ListItem style={{width:'100%', height:50}}>
                    <Button transparent style={{width:'100%'}} onPress={ () => this.UbahKelasEXE()}>
                    <Text style={{color:'#000000'}}>Eksekutif</Text>
                    </Button>
                    </ListItem>
                  </View>
              </View>
        </BottomSheet>

        <BottomSheet
          visible={this.state.BottomPopUp2}
          onBackButtonPress={this._toggleBottomNavigationView2}
          onBackdropPress={this._toggleBottomNavigationView2}>
           <View>
                 <Text style={{color:'#ffffff',marginTop:-20}}>        Tambah Penumpang</Text>
          </View>  
          <View style={styles.bottomNavigationView2}>
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
                <Button block style={{width:'100%', backgroundColor:'#3F81B5'}} onPress={this._toggleBottomNavigationView2}>
                  <Text>Pilih</Text>
                </Button>
              </CardItem>
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
        
        <Header style={{backgroundColor:'#3F81B5',}}>
         
         <View style={styles.view}>
         <Left>
            <Button transparent onPress={() =>
                  this.props.navigation.navigate('home')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,marginLeft:-70}}>Cari Tiket</Title>
          <Right>
            <Button transparent  onPress={this.HeaderModal}>
              <Icon name='more' />
            </Button>
          </
          Right>
          </View>
        </Header>
        <Content>

        <Modal  backdropColor='white' isVisible={this.state.isModalVisible2}>
        <View style={{height:'50%', flex:3}}>
        
        <TouchableOpacity onPress={this.HeaderModal}><Text>x</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.HeaderModal}><Text>Settings</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.HeaderModal}><Text>Bantuan</Text></TouchableOpacity>
                </View>
        </Modal>

       <BottomSheet
          visible={this.state.isModalVisible}
          onBackButtonPress={this._toggleModal}
          onBackdropPress={this._toggleModal}>
 
         
            <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
            <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <Button transparent style={{height:40}}></Button>
               {this.state.schedule.map((schedule)=>{
                return (

                    <View key={schedule.id}>
                    <ListItem>
                    <TouchableOpacity onPress={this.Navigate_To_Second_Activity.bind(this, schedule.rute,schedule.kode_asal,schedule.kode_tujuan,schedule.asal,schedule.tujuan,schedule.kode_rute,schedule.asuransi,schedule.pass_pelabuhan,schedule.infant,schedule.kode_rute2,schedule.pass_pelabuhan2,schedule.infant2,schedule.potongan_pp,schedule.nama_pelabuhan,schedule.nama_pelabuhan2,schedule.rute2,schedule.asal2,schedule.kode_asal2,schedule.tujuan2,schedule.kode_tujuan2)}>
                      <CardItem>
                      <Text>{schedule.rute}</Text>
                      </CardItem>
                    </TouchableOpacity>
                    </ListItem>
                    </View>
                  )
               })}
          </View>

        </BottomSheet>

       

            <ListItem style={{height:120,}}> 
                <Body>
                   <TouchableOpacity onPress={this._toggleModal}>
                    <CardItem style={{height:10,}}>
                        <Text style={{fontSize: 13, color:'#D3D3D3'}}>          Asal</Text>
                    </CardItem>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={this._toggleModal}>
                    <CardItem style={{height:30,marginTop:-5}}>
                        <Icon name='ios-boat' />
                        <Text style={{fontSize: 16}}>{this.state.asal} ( {this.state.namaPelabuhan} )</Text>
                    </CardItem>
                   </TouchableOpacity>
                   <View style={{backgroundColor:'#F4F0E5', width:'100%', height:0.8, marginTop:10}}/>
                   <TouchableOpacity onPress={this._toggleModal}>
                    <CardItem style={{height:10, marginTop:5}}>
                        <Text style={{fontSize: 13, color:'#D3D3D3'}}>          Tujuan</Text>
                    </CardItem>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this._toggleModal}>
                    <CardItem style={{height:30,marginTop:-5}}>
                        <Icon name='ios-boat-outline' />
                        <Text style={{fontSize: 16}}>{this.state.tujuan} ( {this.state.namaPelabuhan2} )</Text>
                    </CardItem>
                </TouchableOpacity>
                </Body>
               
                <View style={{height:50,width:50}}>
                  <Button rounded style={{backgroundColor:'#3F81B5', height:50, width:50}} onPress={this.cekChange} >
                      <Icon name='md-swap' style={{fontSize:19,}}/>
                  </Button>
                </View>
               
            </ListItem>

            {
                this.state.viewvisible2?<ListItem > 
                <Body>
                <View>
                <TouchableOpacity onPress={this._toggleModal}>
                    <CardItem style={{height:10,}}>
                        <Text style={{fontSize: 13, color:'#D3D3D3'}}>          Transit</Text>
                    </CardItem>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={this._toggleModal}>
                    <CardItem style={{height:30,marginTop:-5}}>
                        <Icon name='ios-boat' />
                        <Text style={{fontSize: 16}}>Pangkal Pinang (PKP)</Text>
                    </CardItem>
                   </TouchableOpacity>
                   </View>
              </Body>
              </ListItem >:null
              }
              

            <ListItem> 
                <Body>
                    <View>
                      <CardItem style={{height:20,}}>
                          <Text style={{fontSize: 13, color:'#D3D3D3'}}>          Tanggal Berangkat </Text>
                      </CardItem>
                    
                      <CardItem style={{height:30,marginTop:-4}}>
                          <Icon name='ios-calendar-outline' />
                         <DatePicker
              style={{width: 300,marginTop:10,marginLeft:-90}}
              date={this.state.date}
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
              
               marginLeft: -30
              }
               // ... You can check the source to find the other keys.
        }}

        onDateChange={(date) => {this.setState({date: date}),this.cekJadwal()}}
      />

                    </CardItem>
                    </View>
                    </Body>
                    <Right style={{ marginTop: 10 }}>
                    <Text style={{fontSize:11, marginTop: 8 }}>{this.state.viewvisible?'Sekali Jalan?':'Pulang Pergi?'}</Text>
                    <Switch
                    onValueChange={this.toggleSwitch}
                    style={{marginBottom: 10}}
                    onTintColor={'#3F81B5'}
                    thumbTintColor={'#D3D3D3'}
                    value={this.state.viewvisible} />
                </Right>
                </ListItem>
                    {
                    this.state.viewvisible?
                    <ListItem> 
                    <Body><View>
                      <CardItem style={{height:10,marginTop:10}}>
                          <Text style={{fontSize: 13, color:'#D3D3D3',}}>          Tanggal Pulang</Text>
                      </CardItem>
                      <CardItem style={{height:30, marginTop:-4}}>
                          <Icon name='ios-calendar-outline' />
                          <DatePicker
              style={{width: 300,marginTop:10,marginLeft:-90}}
              date={this.state.date2}
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
              
               marginLeft: -30
              }
               // ... You can check the source to find the other keys.
        }}

        onDateChange={(date2) => {this.setState({date2: date2}),this.cekPP()}}
      />

                      </CardItem>
                    </View>
                </Body>
                
            </ListItem>:null
                    }

            <ListItem style={{height:140,}}> 
               <TouchableOpacity onPress={this._toggleBottomNavigationView2}>
                <Body>
                
                    <CardItem style={{height:10,}}>
                        <Text style={{fontSize: 13, color:'#D3D3D3'}}>{this.state  .ETDPP}Penumpang{this.state  .ETDPP  }</Text>
                    </CardItem>
                    <CardItem style={{height:30,marginTop:-4}}>
                        <Icon name='ios-people-outline' style={{fontSize:30}}/>
                        <Text style={{fontSize: 16}}>   Dewasa {this.state.ValueDewasa}</Text>
                    </CardItem>
                    <CardItem style={{height:30,marginTop:-4}}>
                        
                        <Text style={{fontSize: 16,marginLeft:32}}>   Anak {this.state.ValueAnak}</Text>
                    </CardItem>
                    <CardItem style={{height:30,marginTop:-4}}>
                        
                        <Text style={{fontSize: 16,marginLeft:32}}>   Bayi {this.state.ValueInfant}</Text>
                    </CardItem>
                
                </Body>
                </TouchableOpacity>
            </ListItem>

            <ListItem style={{height:60,}}> 
                <Body>
                <TouchableOpacity onPress={this._toggleBottomNavigationView}>
                    <CardItem style={{height:10,}}>
                        <Text style={{fontSize: 13, color:'#D3D3D3'}}>          Kelas</Text>
                    </CardItem>
                    <CardItem style={{height:30,marginTop:-4}}>
                        <Icon name='ios-briefcase-outline'/>
                        <Text style={{fontSize: 16}}>   {this.state.KelasTiket}</Text>
                    </CardItem>
              </TouchableOpacity>
                </Body>
            </ListItem>


            {this.state.tampilJadwal2?
            <ListItem style={{height:95,}}>
            <Body>
            {this.state.lengthJadwal.map((lengthJadwal)=>{
                return (
                <View key={lengthJadwal.id}>
                
                    <CardItem style={{height:10,}}>
                        <Text style={{fontSize: 13, color:'#D3D3D3'}}>Jadwal Berangkat</Text>
                    </CardItem>
                    <CardItem style={{height:30,marginLeft:20, backgroundColor:'#F4F0E5'}}>
                        <Text style={{fontSize: 12}}>{lengthJadwal.kode_rute}</Text>
                        <Right>
                        {this.state.tampilUbahJadwal?<TouchableOpacity onPress={this.UbahJadwal}><Text style={{fontSize: 13,color:'#3F81B5',fontWeight: 'bold'}}>Ubah Jadwal</Text>
                        </TouchableOpacity>
                        :null
                        }
                        </Right>
                    </CardItem>
                    <View style={{backgroundColor:'#ffffff', width:'100%', height:1,marginLeft:20}}/> 
                    <CardItem style={{height:30,marginLeft:20, backgroundColor:'#F4F0E5'}}>
                        <Text style={{fontSize: 12}}>{lengthJadwal.tipe}</Text>
                        <Right><Text style={{fontSize: 12}}>     ETD:{lengthJadwal.berangkat} <Icon name="arrow-round-forward" style={{fontSize:12}} /> ETA:{lengthJadwal.tiba}</Text></Right>
                    </CardItem> 
                </View>
                  )
               })}
               </Body>
            </ListItem>:null
          }







            {
            this.state.tampilJadwal?
            <ListItem>  
                <Body>
                    <Card>
                        
                            <CardItem style={{height:10,marginTop:10,}}>
                                <Text style={{fontSize: 13}}>Pilih Jadwal Berangkat</Text>
                            </CardItem>
                        

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
          {
            this.state.tampilJadwalPP?
          <ListItem style={{height:95,}}> 
                <Body>
                {this.state.arrayPP.map((arrayPP)=>{
                return (
                    <View key={arrayPP.id}>
                    <CardItem style={{height:10,}}>
                        <Text style={{fontSize: 13, color:'#D3D3D3'}}>Jadwal Pulang</Text>
                    </CardItem>
                    <CardItem style={{height:30,marginLeft:20, backgroundColor:'#F4F0E5'}}>
                        <Text style={{fontSize: 12}}>{arrayPP.kode_rute}</Text>
                        <Right>
                        {
                        this.state.tampilUbahJadwal2?<TouchableOpacity onPress={this.UbahJadwal2}>
                        <Text style={{fontSize: 13,color:'#3F81B5',fontWeight: 'bold'}}>Ubah Jadwal</Text>
                        </TouchableOpacity>
                        :null
                        }
                        </Right>
                    </CardItem>
                    <View style={{backgroundColor:'#ffffff', width:'100%', height:1,marginLeft:20}}/> 
                    <CardItem style={{height:30,marginLeft:20, backgroundColor:'#F4F0E5'}}>
                        <Text style={{fontSize: 12}}>{arrayPP.tipe}</Text>
                        <Right><Text style={{fontSize: 12}}>     ETD:{arrayPP.berangkat} <Icon name="arrow-round-forward" style={{fontSize:12}} /> ETA:{arrayPP.tiba}</Text></Right>
                    </CardItem> 
                    </View>
                  )
               })}
                </Body>
            </ListItem>:null}

            {
            this.state.tampilPP?
            <ListItem>  
                <Body>
                    <Card>
                        
                            <CardItem style={{height:10,marginTop:10}}>
                                <Text style={{fontSize: 13}}>Pilih Jadwal Pulang</Text>
                            </CardItem>
                        
                        {this.state.listPP.map((listPP)=>{
                return (
                    <View key={listPP.id}>
                    <TouchableOpacity onPress={this.GetItem2.bind(this, listPP.id,listPP.harga_vip1,listPP.harga_vip2,listPP.harga_eks1,listPP.harga_eks2,listPP.harga_bus1,listPP.harga_bus2,listPP.rute,listPP.berangkat,listPP.tiba,listPP.tipe,listPP.kode_rute,listPP.block_exe,listPP.block_vip,listPP.k_vip,listPP.k_exe)} >


                        <Body style={{width:'90%', alignContent:'center',backgroundColor:'#3F81B5', marginTop:5, borderRadius:5}}>
                            <CardItem style={{height:30, backgroundColor:'transparent'}}>
                            <Icon active name="md-boat" style={{fontSize: 14, color:'#ffffff'}}/>
                                <Text style={{fontSize: 12, color:'#ffffff'}}>{listPP.tipe}</Text>
                            </CardItem>
                            <View style={{backgroundColor:'#D3D3D3', width:'100%', height:1}}/> 
                            <CardItem style={{height:30, backgroundColor:'transparent'}}>
                                <Text style={{color:'#ffffff', fontSize: 12,}}>{listPP.kode_rute}</Text>
                                <Text style={{color:'#ffffff', fontSize: 12,}}> | </Text>
                                <Text style={{color:'#ffffff', fontSize: 12,}}>{'ETD : ' + listPP.berangkat}</Text>
                                <Text>     </Text>
                                <Icon active name="ios-arrow-round-forward-outline" style={{color:'#ffffff'}} />
                                <Text style={{color:'#ffffff', fontSize: 12,}}>{this.state.KodeTujuan}</Text>
                                <Text style={{color:'#ffffff', fontSize: 12,}}> | </Text>
                                <Text style={{color:'#ffffff', fontSize: 12,}}>{'ETA : ' + listPP.tiba}</Text>
                            </CardItem> 
                        </Body>
                        </TouchableOpacity>
                            </View>
                          )
                       })} 
                      <View style={{backgroundColor:'#ffffff', width:'100%', height:20}}/> 

                    </Card>
                </Body>

            </ListItem>:null
          }
          


        </Content>

     {
     this.state.footerhide?<Footer style={{backgroundColor:this.state.bgcolor}}>
          <TouchableOpacity style={[styles.ButtonStyle, { backgroundColor: this.state.ButtonStateHolder ? '#607D8B' : '#3F81B5' }]}  
          activeOpacity = { .5 } 
          disabled={this.state.ButtonStateHolder}
          onPress={this.Periksa} >
            <Text style={{color:'#ffffff', alignItems:'center'}}>Pesan Tiket</Text>
        </TouchableOpacity>
        </Footer>:null
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