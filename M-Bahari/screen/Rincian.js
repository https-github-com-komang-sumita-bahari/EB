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
    Accordion,
    Thumbnail
} from 'native-base';
import {
  StyleSheet,
  View,
  AsyncStorage,
  Alert,
  TextInput,
  TouchableOpacity,
  Picker,
  ScrollView,
  ToastAndroid,
  BackHandler,
} from "react-native";
var SampleArray = [] ;
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import Modal from "react-native-modal";
import Reinput from "reinput";
import { BottomSheet } from 'react-native-btr';
import {Dropdown } from 'react-native-material-dropdown';
import Spinner from 'react-native-loading-spinner-overlay';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
export default class Runcian extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {

    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.typographyRef = this.updateRef.bind(this, 'title');
    this.onChangeText2 = this.onChangeText2.bind(this);
    this.typographyRef2 = this.updateRef2.bind(this, 'kewarganegaraan');
    this.onChangeText3 = this.onChangeText3.bind(this);
    this.typographyRef3 = this.updateRef3.bind(this, 'gender');
    this.array = [],
    this.state = { 
    title:'',
    ganti:'',
    indikator:true,
    FormatWaktu:'WIB',
    namaDepanDewasa1:'',
    namaDepanDewasa2:'',
    namaDepanDewasa3:'',
    namaDepanDewasa4:'',
    namaDepanDewasa5:'',
    namaDepanDewasa6:'',
    namaDepanDewasa7:'',
    namaDepanDewasa8:'',
    namaDepanAnak1:'',
    namaDepanAnak2:'',
    namaDepanAnak3:'',
    namaDepanAnak4:'',
    namaDepanAnak5:'',
    namaDepanAnak6:'',
    namaDepanAnak7:'',
    namaDepanAnak8:'',
    namaDepanInfant1:'',
    namaDepanInfant2:'',
    namaDepanInfant3:'',
    namaDepanInfant4:'',
    namaDepanInfant5:'',
    namaDepanInfant6:'',
    namaDepanInfant7:'',
    namaDepanInfant8:'',
    namaBelakangDewasa1:'',
    namaBelakangDewasa2:'',
    namaBelakangDewasa3:'',
    namaBelakangDewasa4:'',
    namaBelakangDewasa5:'',
    namaBelakangDewasa6:'',
    namaBelakangDewasa7:'',
    namaBelakangDewasa8:'',
    namaBelakangAnak1:'',
    namaBelakangAnak2:'',
    namaBelakangAnak3:'',
    namaBelakangAnak4:'',
    namaBelakangAnak5:'',
    namaBelakangAnak6:'',
    namaBelakangAnak7:'',
    namaBelakangAnak8:'',
    namaBelakangInfant1:'',
    namaBelakangInfant2:'',
    namaBelakangInfant3:'',
    namaBelakangInfant4:'',
    namaBelakangInfant5:'',
    namaBelakangInfant6:'',
    namaBelakangInfant7:'',
    namaBelakangInfant8:'',
    dateInfant1:'',
    dateInfant2:'',
    dateInfant3:'',
    dateInfant4:'',
    dateInfant5:'',
    kodepromo:'',
    totalAkhir:0,
    idkupon:0,
    idkpnSaya:0,
    iduser:0,
    status:0,
    dataPromo:[{}],
    dataKupon:[{}],
    kupon_saya:[{}],
    indexArray :0,
    indexArray2 :0,
    indexArray3 :0,
    totalInput:0,
    NomorOrder:0,
    NomorPesanan:0,
    totalHargaPromo:0,
    totalDiskon:0,
    tempTotalHarga:0,
    tempTotalHargaPP:0,
    rpTotalHarga:this.props.navigation.state.params.rpTotalHarga,
    rpTotalHargaPP:this.props.navigation.state.params.rpTotalHargaPP,
    rpTotalHargaDiskon:0,
    rpTotalDiskon:0,
    rpTotalDewasa:0,
    rpTotalDewasaPP:0,
    rpTotalAnak:0,
    rpTotalAnakPP:0,
    rpTotalInfant:0,
    rpTotalInfantPP:0,
    HideTotalBayarDiskon:false,
    loading: true,
    loading1:false,
    loading2:false,
    loading3:false,
    detailPromo:false,
    InputPromo:true, 
    collapsed:true,
    collapsedHarga:false,
    textAnak:false,
    textInfant:false,
    tampilFooter:true,
    HideKupon:true,
    isModalVisiblePromo: false,
    isModalVisible1: false,
            isModalVisible2: false,
            isModalVisible3: false,
            isModalVisible4: false,
            isModalVisible5: false,
            isModalVisible6: false,
            isModalVisible7: false,
            isModalVisible8: false,
            isModalVisible9: false,
            isModalVisible10: false,
            isModalVisible11: false,
            isModalVisible12: false,
            isModalVisible13: false,
            isModalVisible14: false,
            isModalVisible15: false,
            isModalVisible16: false,
            isModalVisible17: false,
            isModalVisible18: false,
            isModalVisible19: false,
            isModalVisible20: false,
            isModalVisible21: false,
            isModalVisible22: false,
            isModalVisible23: false,
            isModalVisible24: false,
            isModalVisible25: false,
            isModalVisible26: false,
            isModalVisible27: false,
            isModalVisible28: false,
            isModalVisible29: false,
            isModalVisible30: false,
            InputDewasa1:'',
            InputDewasa2:'',
            InputDewasa3:'',
            InputDewasa4:'',
            InputDewasa5:'',
            InputDewasa6:'',
            InputDewasa7:'',
            InputDewasa8:'',
            InputDewasa9:'',
            InputDewasa10:'',
            InputAnak1:'',
            InputAnak2:'',
            InputAnak3:'',
            InputAnak4:'',
            InputAnak5:'',
            InputAnak6:'',
            InputAnak7:'',
            InputAnak8:'',
            InputAnak9:'',
            InputAnak10:'',
            InputInfant1:'',
            InputInfant2:'',
            InputInfant3:'',
            InputInfant4:'',
            InputInfant5:'',
            InputInfant6:'',
            InputInfant7:'',
            InputInfant8:'',
            InputInfant9:'',
            InputInfant10:'',
            InputAlamatDewasa1:'',
            InputAlamatDewasa2:'',
            InputAlamatDewasa3:'',
            InputAlamatDewasa4:'',
            InputAlamatDewasa5:'',
            InputAlamatDewasa6:'',
            InputAlamatDewasa7:'',
            InputAlamatDewasa8:'',
            InputAlamatDewasa9:'',
            InputAlamatDewasa10:'',
            InputAlamatAnak1:'',
            InputAlamatAnak2:'',
            InputAlamatAlamatAnak3:'',
            InputAlamatAnak4:'',
            InputAlamatAnak5:'',
            InputAlamatAnak6:'',
            InputAlamatAnak7:'',
            InputAlamatAnak8:'',
            InputAlamatAnak9:'',
            InputAlamatAnak10:'',
            InputUmurDewasa1:'',
            InputUmurDewasa2:'',
            InputUmurDewasa3:'',
            InputUmurDewasa4:'',
            InputUmurDewasa5:'',
            InputUmurDewasa6:'',
            InputUmurDewasa7:'',
            InputUmurDewasa8:'',
            InputUmurDewasa9:'',
            InputUmurDewasa10:'',
            InputUmurAnak1:'',
            InputUmurAnak2:'',
            InputUmurAnak3:'',
            InputUmurAnak4:'',
            InputUmurAnak5:'',
            InputUmurAnak6:'',
            InputUmurAnak7:'',
            InputUmurAnak8:'',
            InputUmurAnak9:'',
            InputUmurAnak10:'',
            InputUmurInfant1:'',
            InputUmurInfant2:'',
            InputUmurInfant3:'',
            InputUmurInfant4:'',
            InputUmurInfant5:'',
            InputUmurInfant6:'',
            InputUmurInfant7:'',
            InputUmurInfant8:'',
            InputUmurInfant9:'',
            InputUmurInfant10:'',
            JenisKelamin1:'',
            JenisKelamin2:'',
            JenisKelamin3:'',
            JenisKelamin4:'',
            JenisKelamin5:'',
            JenisKelamin6:'',
            JenisKelamin7:'',
            JenisKelamin8:'',
            JenisKelamin9:'',
            JenisKelamin10:'',
            JenisKelaminAnak1:'',
            JenisKelaminAnak2:'',
            JenisKelaminAnak3:'',
            JenisKelaminAnak4:'',
            JenisKelaminAnak5:'',
            JenisKelaminAnak6:'',
            JenisKelaminAnak7:'',
            JenisKelaminAnak8:'',
            JenisKelaminAnak9:'',
            JenisKelaminAnak10:'',
            JenisKelaminInfant1:'',
            JenisKelaminInfant2:'',
            JenisKelaminInfant3:'',
            JenisKelaminInfant4:'',
            JenisKelaminInfant5:'',
            Kewarganegaraan1:'',
            Kewarganegaraan2:'',
            Kewarganegaraan3:'',
            Kewarganegaraan4:'',
            Kewarganegaraan5:'',
            Kewarganegaraan6:'',
            Kewarganegaraan7:'',
            Kewarganegaraan8:'',
            Kewarganegaraan9:'',
            Kewarganegaraan10:'',
            KewarganegaraanAnak1:'',
            KewarganegaraanAnak2:'',
            KewarganegaraanAnak3:'',
            KewarganegaraanAnak4:'',
            KewarganegaraanAnak5:'',
            KewarganegaraanAnak6:'',
            KewarganegaraanAnak7:'',
            KewarganegaraanAnak8:'',
            KewarganegaraanAnak9:'',
            KewarganegaraanAnak10:'',
            KewarganegaraanInfant1:'',
            KewarganegaraanInfant2:'',
            KewarganegaraanInfant3:'',
            KewarganegaraanInfant4:'',
            KewarganegaraanInfant5:'',    
            NamaPenumpang:'',
    JenisKelamin:'',
    Kewarganegaraan:'Indonesia',
    Alamat:'',
    Umur:'',
    jmlDewasa:[],
    jmlAnak:[],
    jmlInfant:[],
    arrayHolder: [],
    Nama:'',
    tesharga:'120599',
     };
     arraytostring = this.array.toString();
    AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                  AsyncKodeUser:resultParsed.AsyncKodeUser,
                  AsyncPenumpangVIP:resultParsed.AsyncPenumpangVIP,
                  AsyncPenumpangPPVIP:resultParsed.AsyncPenumpangPPVIP,
                  AsyncPenumpangEXE:resultParsed.AsyncPenumpangEXE,
                  AsyncPenumpangPPEXE:resultParsed.AsyncPenumpangPPEXE,
                  AsyncEmail:resultParsed.AsyncEmail,
                  AsyncTotalPotongan:resultParsed.AsyncTotalPotongan,
                  AsyncAsal:resultParsed.AsyncAsal,
                  AsyncTujuan:resultParsed.AsyncTujuan,
                  collapsed2:resultParsed.collapsed2,
                  HideTotalBayar:resultParsed.HideTotalBayar,
                  HideTotalBayarPP:resultParsed.HideTotalBayarPP,
                  HideTotalPesananPP:resultParsed.HideTotalPesananPP,
                  HideDetailPesananPP:resultParsed.HideDetailPesananPP,
                  AsyncNomorPesanan:resultParsed.AsyncNomorPesanan,
                   AsyncDewasa: resultParsed.AsyncDewasa,
                    AsyncAnak: resultParsed.AsyncAnak,
                    AsyncInfant: resultParsed.AsyncInfant,
                    AsyncKelas: resultParsed.AsyncKelas,
                    AsyncPotonganDewasa:resultParsed.AsyncPotonganDewasa,
                    AsyncPotonganAnak:resultParsed.AsyncPotonganAnak,
                    AsyncHargaVIP1:resultParsed.AsyncHargaVIP1,
                    AsyncHargaVIP2:resultParsed.AsyncHargaVIP2,
                    AsyncHargaEKS1:resultParsed.AsyncHargaEKS1,
                    AsyncHargaEKS2:resultParsed.AsyncHargaEKS2,
                    AsyncHargaVIP1PP:resultParsed.AsyncHargaVIP1PP,
                    AsyncHargaVIP2PP:resultParsed.AsyncHargaVIP2PP,
                    AsyncHargaEKS1PP:resultParsed.AsyncHargaEKS1PP,
                    AsyncHargaEKS2PP:resultParsed.AsyncHargaEKS2PP,
                    AsyncPassPelabuhan:resultParsed.AsyncPassPelabuhan,
                    AsyncPassPelabuhanPP:resultParsed.AsyncPassPelabuhanPP,
                    AsyncAsuransi:resultParsed.AsyncAsuransi,
                    AsyncId:resultParsed.AsyncId,
                    AsyncIdPulang:resultParsed.AsyncIdPulang,
                    AsyncTotalHarga:resultParsed.AsyncTotalHarga,
                    AsynctotalDewasa:resultParsed.AsynctotalDewasa,
                    AsynctotalAnak:resultParsed.AsynctotalAnak,
                    AsynctotalInfant:resultParsed.AsynctotalInfant,
                    AsyncTotalHargaPP:resultParsed.AsyncTotalHargaPP,
                    AsynctotalDewasaPP:resultParsed.AsynctotalDewasaPP,
                    AsynctotalAnakPP:resultParsed.AsynctotalAnakPP,
                    AsynctotalInfantPP:resultParsed.AsynctotalInfantPP,
 
                    AsynctextAnak:resultParsed.AsynctextAnak,
                    AsynctextInfant:resultParsed.AsynctextInfant,
                    AsynctextAnakPP:resultParsed.AsynctextAnakPP,
                    AsynctextInfantPP:resultParsed.AsynctextInfantPP,
                    
                    AsyncKodeRute1:resultParsed.AsyncKodeRute1,
                    AsyncKodeRute2:resultParsed.AsyncKodeRute2,
                    AsyncId:resultParsed.AsyncId,
                    AsyncTanggal:resultParsed.AsyncTanggal,
                    AsyncTanggal2:resultParsed.AsyncTanggal2,
                    AsyncJenisTiket:resultParsed.AsyncJenisTiket,
                    AsyncETA:resultParsed.AsyncETA,
                    AsyncETD:resultParsed.AsyncETD,
                    AsyncETAPP:resultParsed.AsyncETAPP,
                    AsyncETDPP:resultParsed.AsyncETDPP,
                    AsyncJadwal:resultParsed.AsyncJadwal,
                    AsyncKapal:resultParsed.AsyncKapal,
                    AsyncNama:resultParsed.AsyncNama,
                    AsyncTotalPenumpang:resultParsed.AsyncTotalPenumpang,
                    AsyncHargaTiketDewasa:resultParsed.AsyncHargaTiketDewasa,
                    AsyncHargaTiketAnak:resultParsed.AsyncHargaTiketAnak,
                    AsyncHargaTiketDewasaPP:resultParsed.AsyncHargaTiketDewasaPP,
                    AsyncHargaTiketAnakPP:resultParsed.AsyncHargaTiketAnakPP,
                    AsyncHargaTiketInfant:resultParsed.AsyncHargaTiketInfant,
                    AsyncHargaTiketInfantPP:resultParsed.AsyncHargaTiketInfantPP,
                    AsyncJT:resultParsed.AsyncJT,
                    AsyncValuePenumpang:resultParsed.AsyncValuePenumpang,
                    AsyncValuePenumpangPP:resultParsed.AsyncValuePenumpangPP,
                });
            }
        });
  }
   
  joinData = () => {
 
    this.array.push({nama : this.state.NamaPenumpang, jenisKelamin : this.state.JenisKelamin});
    
    
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
  rupiahDiskon(){
  if(this.state.rpTotalHargaDiskon.toString().length==5){
      this.setState({
        rpTotalHargaDiskon: this.state.rpTotalHargaDiskon.toString().substring(0, 2)+'.'+this.state.rpTotalHargaDiskon.toString().substring(2, 5),
      });
    }
   if(this.state.rpTotalHargaDiskon.toString().length==6){
      this.setState({
        rpTotalHargaDiskon: this.state.rpTotalHargaDiskon.toString().substring(0, 3)+'.'+this.state.rpTotalHargaDiskon.toString().substring(3, 6),
      });
    }
    else if(this.state.rpTotalHargaDiskon.toString().length==7){
      this.setState({
        rpTotalHargaDiskon: this.state.rpTotalHargaDiskon.toString().substring(0, 1)+'.'+this.state.rpTotalHargaDiskon.toString().substring(1, 4)+'.'+this.state.rpTotalHargaDiskon.toString().substring(4, 7),
      });
    }
    else if(this.state.rpTotalHargaDiskon.toString().length==8){
      this.setState({
        rpTotalHargaDiskon: this.state.rpTotalHargaDiskon.toString().substring(0, 2)+'.'+this.state.rpTotalHargaDiskon.toString().substring(2, 5)+'.'+this.state.rpTotalHargaDiskon.toString().substring(5, 8),
      });
    }
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
  rupiahDetailDewasa(){
  if(this.state.rpTotalDewasa.toString().length==5){
      this.setState({
        rpTotalDewasa: this.state.rpTotalDewasa.toString().substring(0, 2)+'.'+this.state.rpTotalDewasa.toString().substring(2, 5),
      });
    }
   if(this.state.rpTotalDewasa.toString().length==6){
      this.setState({
        rpTotalDewasa: this.state.rpTotalDewasa.toString().substring(0, 3)+'.'+this.state.rpTotalDewasa.toString().substring(3, 6),
      });
    }
    else if(this.state.rpTotalDewasa.toString().length==7){
      this.setState({
        rpTotalDewasa: this.state.rpTotalDewasa.toString().substring(0, 1)+'.'+this.state.rpTotalDewasa.toString().substring(1, 4)+'.'+this.state.rpTotalDewasa.toString().substring(4, 7),
      });
    }
    else if(this.state.rpTotalDewasa.toString().length==8){
      this.setState({
        rpTotalDewasa: this.state.rpTotalDewasa.toString().substring(0, 2)+'.'+this.state.rpTotalDewasa.toString().substring(2, 5)+'.'+this.state.rpTotalDewasa.toString().substring(5, 8),
      });
    }
  }
  rupiahDetailAnak(){
  if(this.state.rpTotalAnak.toString().length==5){
      this.setState({
        rpTotalAnak: this.state.rpTotalAnak.toString().substring(0, 2)+'.'+this.state.rpTotalAnak.toString().substring(2, 5),
      });
    }
   if(this.state.rpTotalAnak.toString().length==6){
      this.setState({
        rpTotalAnak: this.state.rpTotalAnak.toString().substring(0, 3)+'.'+this.state.rpTotalAnak.toString().substring(3, 6),
      });
    }
    else if(this.state.rpTotalAnak.toString().length==7){
      this.setState({
        rpTotalAnak: this.state.rpTotalAnak.toString().substring(0, 1)+'.'+this.state.rpTotalAnak.toString().substring(1, 4)+'.'+this.state.rpTotalAnak.toString().substring(4, 7),
      });
    }
    else if(this.state.rpTotalAnak.toString().length==8){
      this.setState({
        rpTotalAnak: this.state.rpTotalAnak.toString().substring(0, 2)+'.'+this.state.rpTotalAnak.toString().substring(2, 5)+'.'+this.state.rpTotalAnak.toString().substring(5, 8),
      });
    }
  }
  rupiahDetailInfant(){
    if(this.state.rpTotalInfant.toString().length==4){
      this.setState({
        rpTotalInfant: this.state.rpTotalInfant.toString().substring(0, 1)+'.'+this.state.rpTotalInfant.toString().substring(1, 4),
      });
    }
  if(this.state.rpTotalInfant.toString().length==5){
      this.setState({
        rpTotalInfant: this.state.rpTotalInfant.toString().substring(0, 2)+'.'+this.state.rpTotalInfant.toString().substring(2, 5),
      });
    }
   if(this.state.rpTotalInfant.toString().length==6){
      this.setState({
        rpTotalInfant: this.state.rpTotalInfant.toString().substring(0, 3)+'.'+this.state.rpTotalInfant.toString().substring(3, 6),
      });
    }
    else if(this.state.rpTotalInfant.toString().length==7){
      this.setState({
        rpTotalInfant: this.state.rpTotalInfant.toString().substring(0, 1)+'.'+this.state.rpTotalInfant.toString().substring(1, 4)+'.'+this.state.rpTotalInfant.toString().substring(4, 7),
      });
    }
    else if(this.state.rpTotalInfant.toString().length==8){
      this.setState({
        rpTotalInfant: this.state.rpTotalInfant.toString().substring(0, 2)+'.'+this.state.rpTotalInfant.toString().substring(2, 5)+'.'+this.state.rpTotalInfant.toString().substring(5, 8),
      });
    }
  }
  rupiahDetailDewasaPP(){
  if(this.state.rpTotalDewasaPP.toString().length==5){
      this.setState({
        rpTotalDewasaPP: this.state.rpTotalDewasaPP.toString().substring(0, 2)+'.'+this.state.rpTotalDewasaPP.toString().substring(2, 5),
      });
    }
   if(this.state.rpTotalDewasaPP.toString().length==6){
      this.setState({
        rpTotalDewasaPP: this.state.rpTotalDewasaPP.toString().substring(0, 3)+'.'+this.state.rpTotalDewasaPP.toString().substring(3, 6),
      });
    }
    else if(this.state.rpTotalDewasaPP.toString().length==7){
      this.setState({
        rpTotalDewasaPP: this.state.rpTotalDewasaPP.toString().substring(0, 1)+'.'+this.state.rpTotalDewasaPP.toString().substring(1, 4)+'.'+this.state.rpTotalDewasaPP.toString().substring(4, 7),
      });
    }
    else if(this.state.rpTotalDewasaPP.toString().length==8){
      this.setState({
        rpTotalDewasaPP: this.state.rpTotalDewasaPP.toString().substring(0, 2)+'.'+this.state.rpTotalDewasaPP.toString().substring(2, 5)+'.'+this.state.rpTotalDewasaPP.toString().substring(5, 8),
      });
    }
  }
  rupiahDetailAnakPP(){
  if(this.state.rpTotalAnakPP.toString().length==5){
      this.setState({
        rpTotalAnakPP: this.state.rpTotalAnakPP.toString().substring(0, 2)+'.'+this.state.rpTotalAnakPP.toString().substring(2, 5),
      });
    }
   if(this.state.rpTotalAnakPP.toString().length==6){
      this.setState({
        rpTotalAnakPP: this.state.rpTotalAnakPP.toString().substring(0, 3)+'.'+this.state.rpTotalAnakPP.toString().substring(3, 6),
      });
    }
    else if(this.state.rpTotalAnakPP.toString().length==7){
      this.setState({
        rpTotalAnakPP: this.state.rpTotalAnakPP.toString().substring(0, 1)+'.'+this.state.rpTotalAnakPP.toString().substring(1, 4)+'.'+this.state.rpTotalAnakPP.toString().substring(4, 7),
      });
    }
    else if(this.state.rpTotalAnakPP.toString().length==8){
      this.setState({
        rpTotalAnakPP: this.state.rpTotalAnakPP.toString().substring(0, 2)+'.'+this.state.rpTotalAnakPP.toString().substring(2, 5)+'.'+this.state.rpTotalAnakPP.toString().substring(5, 8),
      });
    }
  }
  rupiahDetailInfantPP(){
  if(this.state.rpTotalInfantPP.toString().length==5){
      this.setState({
        rpTotalInfantPP: this.state.rpTotalInfantPP.toString().substring(0, 2)+'.'+this.state.rpTotalInfantPP.toString().substring(2, 5),
      });
    }
   if(this.state.rpTotalInfantPP.toString().length==6){
      this.setState({
        rpTotalInfantPP: this.state.rpTotalInfantPP.toString().substring(0, 3)+'.'+this.state.rpTotalInfantPP.toString().substring(3, 6),
      });
    }
    else if(this.state.rpTotalInfantPP.toString().length==7){
      this.setState({
        rpTotalInfantPP: this.state.rpTotalInfantPP.toString().substring(0, 1)+'.'+this.state.rpTotalInfantPP.toString().substring(1, 4)+'.'+this.state.rpTotalInfantPP.toString().substring(4, 7),
      });
    }
    else if(this.state.rpTotalInfantPP.toString().length==8){
      this.setState({
        rpTotalInfantPP: this.state.rpTotalInfantPP.toString().substring(0, 2)+'.'+this.state.rpTotalInfantPP.toString().substring(2, 5)+'.'+this.state.rpTotalInfantPP.toString().substring(5, 8),
      });
    }
  }

   showArrayItem = (id) => {

    if (id==1) {
      this.setState ({indexArray:0});
      this.openModal1();
    }
    if (id==2) {
       this.setState ({indexArray:1});
      this.openModal2();   
    }
    if (id==3) {
      this.setState ({indexArray:2});
      this.openModal3();  
    }
    if (id==4) {
      this.setState ({indexArray:3});
      this.openModal4();   
    }
    if (id==5) {
      this.setState ({indexArray:4});
      this.openModal5();  
    }
    if (id==6) {
      this.setState ({indexArray:5});
      this.openModal6();   
    }
    if (id==7) {
      this.setState ({indexArray:6});
      this.openModal7();  
    }
    if (id==8) {
      this.setState ({indexArray:7});
      this.openModal8();   
    }
    if (id==9) {
      this.setState ({indexArray:8});
      this.openModal9();  
    }
    if (id==10) {
      this.setState ({indexArray:9});
      this.openModal10();   
    } 
  }
  componentDidMount() {
      
      if(this.state.AsyncKodeRute1=='PLGMTK'||this.state.AsyncKodeRute1=='MTKPLG')
      {
        this.setState({FormatWaktu:'WIT'});
      }
      this.setState({kupon_saya:[{}]});
      this.setState({dataPromo:[{}]});
      this.setState({HideKupon:false});
      this.loadings2();

     }
  updateRef(name, ref) {
    this[name] = ref;
  }
  onChangeText(text) {
    ['title']
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

  showArrayItem2 = (id) => {

    if (id==1) {
      this.setState ({indexArray2:0});
      this.openModal11();  
    }
    if (id==2) {
      this.setState ({indexArray2:1});
      this.openModal12();   
    }
    if (id==3) {
      this.setState ({indexArray2:2});
      this.openModal13();  
    }
    if (id==4) {
      this.setState ({indexArray2:3});
      this.openModal14();   
    }
    if (id==5) {
      this.setState ({indexArray2:4});
      this.openModal15();  
    }
    if (id==6) {
      this.setState ({indexArray2:5});
      this.openModal16();   
    }
    if (id==7) {
      this.setState ({indexArray2:6});
      this.openModal117();  
    }
    if (id==8) {
      this.setState ({indexArray2:7});
      this.openModal18();   
    }
    if (id==9) {
      this.setState ({indexArray2:8});
      this.openModal119();  
    }
    if (id==10) {
      this.setState ({indexArray2:9});
      this.openModal120();   
    }
  }
  showArrayItem3 = (id) => {

    if (id==1) {
      this.setState ({indexArray3:0});
      this.openModal21();  
    }
    if (id==2) {
      this.setState ({indexArray3:1});
      this.openModal22();   
    }
    if (id==3) {
      this.setState ({indexArray3:2});
      this.openModal23();  
    }
    if (id==4) {
      this.setState ({indexArray3:3});
      this.openModal24();   
    }
    if (id==5) {
      this.setState ({indexArray3:4});
      this.openModal25();  
    }
    if (id==6) {
      this.setState ({indexArray3:5});
      this.openModal26();   
    }
    if (id==7) {
      this.setState ({indexArray3:6});
      this.openModal27();  
    }
    if (id==8) {
      this.setState ({indexArray3:7});
      this.openModal28();   
    }
    if (id==9) {
      this.setState ({indexArray3:8});
      this.openModal29();  
    }
    if (id==10) {
      this.setState ({indexArray3:9});
      this.openModal30();   
    }
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
    this.props.navigation.navigate('PesanTiket');
    return true;
}
  
    goBack=()=>{
 
    this.props.navigation.navigate('PesanTiket')
 
  }
closeModal1=()=>{

this.setState({ isModalVisible1: false});
}
closeModal2=()=>{
this.setState({ isModalVisible2: false});
}
closeModal3=()=>{
this.setState({ isModalVisible3: false});
}
closeModal4=()=>{
this.setState({ isModalVisible4: false});
}
closeModal5=()=>{
this.setState({ isModalVisible5: false});
}
closeModal6=()=>{
this.setState({ isModalVisible6: false});
}
closeModal7=()=>{
this.setState({ isModalVisible7: false});
}
closeModal8=()=>{
this.setState({ isModalVisible8: false});
}
closeModal9=()=>{
this.setState({ isModalVisible9: false});
}
closeModal10=()=>{
this.setState({ isModalVisible10: false});
}
closeModal11=()=>{
this.setState({ isModalVisible11: false});
}
closeModal12=()=>{
this.setState({ isModalVisible12: false});
}
closeModal13=()=>{
this.setState({ isModalVisible13: false});
}
closeModal14=()=>{
this.setState({ isModalVisible14: false});
}
closeModal15=()=>{
this.setState({ isModalVisible15: false});
}
closeModal16=()=>{
this.setState({ isModalVisible16: false});
}
closeModal17=()=>{
this.setState({ isModalVisible17: false});
}
closeModal18=()=>{
this.setState({ isModalVisible18: false});
}
closeModal19=()=>{
this.setState({ isModalVisible19: false});
}
closeModal20=()=>{
this.setState({ isModalVisible20: false});
}
closeModal21=()=>{
this.setState({ isModalVisible21: false});
}
closeModal22=()=>{
this.setState({ isModalVisible22: false});
}
closeModal23=()=>{
this.setState({ isModalVisible23: false});
}
closeModal24=()=>{
this.setState({ isModalVisible24: false});
}
closeModal25=()=>{
this.setState({ isModalVisible25: false});
}
openModal1=()=>{

this.setState({ isModalVisible1: true});
}
openModal2=()=>{
this.setState({ isModalVisible2: true});
}
openModal3=()=>{
this.setState({ isModalVisible3: true});
}
openModal4=()=>{
this.setState({ isModalVisible4: true});
}
openModal5=()=>{
this.setState({ isModalVisible5: true});
}
openModal6=()=>{
this.setState({ isModalVisible6: true});
}
openModal7=()=>{
this.setState({ isModalVisible7: true});
}
openModal8=()=>{
this.setState({ isModalVisible8: true});
}
openModal9=()=>{
this.setState({ isModalVisible9: true});
}
openModal10=()=>{
this.setState({ isModalVisible10: true});
}
openModal11=()=>{
this.setState({ isModalVisible11: true});
}
openModal12=()=>{
this.setState({ isModalVisible12: true});
}
openModal13=()=>{
this.setState({ isModalVisible13: true});
}
openModal14=()=>{
this.setState({ isModalVisible14: true});
}
openModal15=()=>{
this.setState({ isModalVisible15: true});
}
openModal16=()=>{
this.setState({ isModalVisible16: true});
}
openModal17=()=>{
this.setState({ isModalVisible17: true});
}
openModal18=()=>{
this.setState({ isModalVisible18: true});
}
openModal19=()=>{
this.setState({ isModalVisible19: true});
}
openModal20=()=>{
this.setState({ isModalVisible20: true});
}
openModal21=()=>{
this.setState({ isModalVisible21: true});
}
openModal22=()=>{
this.setState({ isModalVisible22: true});
}
openModal23=()=>{
this.setState({ isModalVisible23: true});
}
openModal24=()=>{
this.setState({ isModalVisible24: true});
}
openModal25=()=>{
this.setState({ isModalVisible25: true});
}
cekModal1=()=>{
  if(this.state.namaDepanDewasa1==''){
    ToastAndroid.show('Data Belum Lengkap1', ToastAndroid.SHORT);
  }
 
  if(this.state.JenisKelamin1==''){
    ToastAndroid.show('Data Belum Lengkap2', ToastAndroid.SHORT);
  }
  if(this.state.namaDepanDewasa1!=''||this.state.Kewarganegaraan1!=''||this.state.JenisKelamin1!=''||this.state.namaBelakangDewasa1!=''){

    this._toggleModal1()
  }
}
cekModal2=()=>{
  if(this.state.namaDepanDewasa2=='' && this.state.JenisKelamin1!=''){
    ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
 
  if(this.state.namaDepanDewasa2=='' && this.state.JenisKelamin1==''){
    ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal2()
  }
}
cekModal3=()=>{
if(this.state.namaDepanDewasa3=='' && this.state.JenisKelamin3!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanDewasa3=='' && this.state.JenisKelamin3==''){
    ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal3()
  }
}
cekModal4=()=>{
  if(this.state.namaDepanDewasa4=='' && this.state.JenisKelamin4!=''){
    ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanDewasa4=='' && this.state.JenisKelamin4==''){
    ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal4()
  }
}
cekModal5=()=>{
  if(this.state.namaDepanDewasa5=='' && this.state.JenisKelamin5!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanDewasa5=='' && this.state.JenisKelamin5==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal5()
  }
}
cekModal6=()=>{
  if(this.state.namaDepanDewasa6=='' && this.state.JenisKelamin6!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanDewasa6=='' && this.state.JenisKelamin6==''){
    ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal6()
  }
}
cekModal7=()=>{
  if(this.state.namaDepanDewasa7=='' && this.state.JenisKelamin7!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanDewasa7=='' && this.state.JenisKelamin7==''){
    ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal7()
  }
}
cekModal8=()=>{
if(this.state.namaDepanDewasa8=='' && this.state.JenisKelamin8!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanDewasa8=='' && this.state.JenisKelamin8==''){
    ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal8()
  }
}
cekModal9=()=>{
if(this.state.InputDewasa9=='' && this.state.JenisKelamin9!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  if(this.state.InputDewasa9!='' && this.state.JenisKelamin9==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  if(this.state.InputDewasa9=='' && this.state.JenisKelamin9==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal9()
  }
}
cekModal10=()=>{
if(this.state.InputDewasa10=='' && this.state.JenisKelamin10!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  if(this.state.InputDewasa10!='' && this.state.JenisKelamin10==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  if(this.state.InputDewasa10=='' && this.state.JenisKelamin10==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal10()
  }
}
cekModal11=()=>{
  if(this.state.namaDepanAnak1=='' && this.state.JenisKelaminAnak1!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanAnak1=='' && this.state.JenisKelaminAnak1==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal11()
  }
}
cekModal12=()=>{
  if(this.state.namaDepanAnak2=='' && this.state.JenisKelaminAnak2!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanAnak2=='' && this.state.JenisKelaminAnak2==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal12()
  }
}
cekModal13=()=>{
  if(this.state.namaDepanAnak3=='' && this.state.JenisKelaminAnak3!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanAnak3=='' && this.state.JenisKelaminAnak3==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal13()
  }
}
cekModal14=()=>{
if(this.state.namaDepanAnak4=='' && this.state.JenisKelaminAnak4!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanAnak4=='' && this.state.JenisKelaminAnak4==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal14()
  }
}
cekModal15=()=>{
if(this.state.namaDepanAnak5=='' && this.state.JenisKelaminAnak5!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanAnak5=='' && this.state.JenisKelaminAnak5==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal15()
  }
}

cekModal16=()=>{
  if(this.state.namaDepanAnak6=='' && this.state.JenisKelaminAnak6!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanAnak6=='' && this.state.JenisKelaminAnak6==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal15()
  }
}
cekModal17=()=>{
  if(this.state.namaDepanAnak7=='' && this.state.JenisKelaminAnak7!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanAnak7=='' && this.state.JenisKelaminAnak7==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal15()
  }
}
cekModal18=()=>{
  if(this.state.namaDepanAnak8=='' && this.state.JenisKelaminAnak8!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanAnak8=='' && this.state.JenisKelaminAnak8==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal15()
  }
}
cekModal19=()=>{
  if(this.state.InputAnak9==''&&this.state.KewarganegaraanAnak9==''&&this.state.JenisKelaminAnak9==''){
    Alert.alert('Data Belum Lengkap')
  }
  else{
    this._toggleModal9()
  }
}
cekModal20=()=>{
  if(this.state.InputAnak10==''&&this.state.KewarganegaraanAnak10==''&&this.state.JenisKelaminAnak10==''){
    Alert.alert('Data Belum Lengkap')
  }
  else{
    this._toggleModal20()
  }
}
cekModal21=()=>{
   if(this.state.namaDepanInfant1=='' && this.state.JenisKelaminInfant1!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanInfant1=='' && this.state.JenisKelaminInfant1==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal21()
  }
}
cekModal22=()=>{
   if(this.state.namaDepanInfant2=='' && this.state.JenisKelaminInfant2!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanInfant2=='' && this.state.JenisKelaminInfant2==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal22()
  }
}
cekModal23=()=>{
   if(this.state.namaDepanInfant3=='' && this.state.JenisKelaminInfant3!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanInfant3=='' && this.state.JenisKelaminInfant3==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal23()
  }
}
cekModal24=()=>{
   if(this.state.namaDepanInfant4=='' && this.state.JenisKelaminInfant4!=''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  
  if(this.state.namaDepanInfant4=='' && this.state.JenisKelaminInfant4==''){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  else{
    this._toggleModal24()
  }
}
cekModal25=()=>{
  if(this.state.InputInfant5==''&&this.state.InputUmurInfant5==''){
    Alert.alert('Data Belum Lengkap')
  }
  else{
    this._toggleModal25()
  }
}

 _toggleModal1 = () =>{

      if(this.state.isModalVisible1 == true  ){
    const newArray = [...this.state .jmlDewasa  ];
    const newArray2 = [...this.state .jmlDewasa  ];
    const newArray3 = [...this.state .jmlDewasa  ];
    const newArray4 = [...this.state .jmlDewasa  ];
    newArray[this.state.indexArray].namaDepan = this.state.namaDepanDewasa1;
    newArray4[this.state.indexArray].namaBelakang = this.state.namaBelakangDewasa1;
    newArray2[this.state.indexArray].titel = this.state.title;
    newArray3[this.state.indexArray].kwn = this.state.kewarganegaraan;
    this.setState ({jmlDewasa  : newArray  });

    this.setState ({namaDepanDewasa1  :this.state.jmlDewasa[this.state.indexArray].namaDepan});
    this.setState ({namaBelakangDewasa1  :this.state.jmlDewasa[this.state.indexArray].namaBelakang});
    this.setState ({JenisKelamin1  :this.state.jmlDewasa[this.state.indexArray].titel});
    this.setState ({Kewarganegaraan1  :this.state.jmlDewasa[this.state.indexArray].kwn});  
    }    

    
  if(this.state.namaDepanDewasa1!='' && this.state.Kewarganegaraan1!='' && this.state.JenisKelamin1!='' && this.state.namaBelakangDewasa1!=''){
      if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
      this.setState({indikator:false});
    }
    this.setState({ isModalVisible1: !this.state.isModalVisible1 });
  }
   if(this.state.namaDepanDewasa1==''|| this.state.Kewarganegaraan1==''|| this.state.JenisKelamin1=='' || this.state.namaBelakangDewasa1==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
   _toggleModal2 = () =>{
    if(this.state.isModalVisible2 == true  ){
    const newArray = [...this.state .jmlDewasa  ];
    const newArray2 = [...this.state .jmlDewasa  ];
    const newArray3 = [...this.state .jmlDewasa  ];
    const newArray4 = [...this.state .jmlDewasa  ];
    newArray[this.state.indexArray].namaDepan = this.state.namaDepanDewasa2;
    newArray4[this.state.indexArray].namaBelakang = this.state.namaBelakangDewasa2;
    newArray2[this.state.indexArray].titel = this.state.title;
    newArray3[this.state.indexArray].kwn = this.state.kewarganegaraan;
    this.setState ({jmlDewasa  : newArray  });
   
    this.setState ({namaDepanDewasa2  :this.state.jmlDewasa[this.state.indexArray].namaDepan});
    this.setState ({namaBelakangDewasa2  :this.state.jmlDewasa[this.state.indexArray].namaBelakang});
    this.setState ({JenisKelamin2  :this.state.jmlDewasa[this.state.indexArray].titel});
    this.setState ({Kewarganegaraan2  :this.state.jmlDewasa[this.state.indexArray].kwn});
      }
      
   if(this.state.namaDepanDewasa2!='' && this.state.Kewarganegaraan2!='' && this.state.JenisKelamin2!='' && this.state.namaBelakangDewasa2!=''){
       if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });
  }
   if(this.state.namaDepanDewasa2==''|| this.state.Kewarganegaraan2==''|| this.state.JenisKelamin2=='' || this.state.namaBelakangDewasa2==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal3 = () =>{
    if(this.state.isModalVisible3 == true  ){
    const newArray = [...this.state .jmlDewasa  ];
    const newArray2 = [...this.state .jmlDewasa  ];
    const newArray3 = [...this.state .jmlDewasa  ];
    const newArray4 = [...this.state .jmlDewasa  ];
    newArray[this.state.indexArray].namaDepan = this.state.namaDepanDewasa3;
    newArray4[this.state.indexArray].namaBelakang = this.state.namaBelakangDewasa3;
    newArray2[this.state.indexArray].titel = this.state.title;
    newArray3[this.state.indexArray].kwn = this.state.kewarganegaraan;
    this.setState ({jmlDewasa  : newArray  });
    
    this.setState ({namaDepanDewasa3  :this.state.jmlDewasa[this.state.indexArray].namaDepan});
    this.setState ({namaBelakangDewasa3  :this.state.jmlDewasa[this.state.indexArray].namaBelakang});
    this.setState ({JenisKelamin3  :this.state.jmlDewasa[this.state.indexArray].titel});
    this.setState ({Kewarganegaraan3  :this.state.jmlDewasa[this.state.indexArray].kwn});
      }
    
    if(this.state.namaDepanDewasa3  !='' && this.state.Kewarganegaraan3 !='' && this.state.JenisKelamin3!='' && this.state.namaBelakangDewasa3!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible3: !this.state.isModalVisible3 });
  }
   if(this.state.namaDepanDewasa3==''|| this.state.Kewarganegaraan3==''|| this.state.JenisKelamin3=='' || this.state.namaBelakangDewasa3==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
   _toggleModal4 = () =>{
    if(this.state.isModalVisible4 == true  ){
    const newArray = [...this.state .jmlDewasa  ];
    const newArray2 = [...this.state .jmlDewasa  ];
    const newArray3 = [...this.state .jmlDewasa  ];
    const newArray4 = [...this.state .jmlDewasa  ];
    newArray[this.state.indexArray].namaDepan = this.state.namaDepanDewasa4;
    newArray4[this.state.indexArray].namaBelakang = this.state.namaBelakangDewasa4;
    newArray2[this.state.indexArray].titel = this.state.title;
    newArray3[this.state.indexArray].kwn = this.state.kewarganegaraan;
    this.setState ({jmlDewasa  : newArray  });
    
    this.setState ({namaDepanDewasa4  :this.state.jmlDewasa[this.state.indexArray].namaDepan});
    this.setState ({namaBelakangDewasa4  :this.state.jmlDewasa[this.state.indexArray].namaBelakang});
    this.setState ({JenisKelamin4  :this.state.jmlDewasa[this.state.indexArray].titel});
    this.setState ({Kewarganegaraan4  :this.state.jmlDewasa[this.state.indexArray].kwn});
      }
     if(this.state.namaDepanDewasa4!='' && this.state.Kewarganegaraan4!='' && this.state.JenisKelamin4!='' && this.state.namaBelakangDewasa4!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible4: !this.state.isModalVisible4 });
  }
   if(this.state.namaDepanDewasa4==''|| this.state.Kewarganegaraan4==''|| this.state.JenisKelamin4=='' || this.state.namaBelakangDewasa4==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal5 = () =>{
    if(this.state.isModalVisible5 == true  ){
    const newArray = [...this.state .jmlDewasa  ];
    const newArray2 = [...this.state .jmlDewasa  ];
    const newArray3 = [...this.state .jmlDewasa  ];
    const newArray4 = [...this.state .jmlDewasa  ];
    newArray[this.state.indexArray].namaDepan = this.state.namaDepanDewasa5;
    newArray4[this.state.indexArray].namaBelakang = this.state.namaBelakangDewasa5;
    newArray2[this.state.indexArray].titel = this.state.title;
    newArray3[this.state.indexArray].kwn = this.state.kewarganegaraan;
    this.setState ({jmlDewasa  : newArray  });
   
    this.setState ({namaDepanDewasa5  :this.state.jmlDewasa[this.state.indexArray].namaDepan});
    this.setState ({namaBelakangDewasa5  :this.state.jmlDewasa[this.state.indexArray].namaBelakang});
    this.setState ({JenisKelamin5  :this.state.jmlDewasa[this.state.indexArray].titel});
    this.setState ({Kewarganegaraan5  :this.state.jmlDewasa[this.state.indexArray].kwn});
      }
   
    if(this.state.namaDepanDewasa5!='' && this.state.Kewarganegaraan5!='' && this.state.JenisKelamin5!='' && this.state.namaBelakangDewasa5!=''){
if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible5: !this.state.isModalVisible5 });
  }
   if(this.state.namaDepanDewasa5==''|| this.state.Kewarganegaraan5==''|| this.state.JenisKelamin5=='' || this.state.namaBelakangDewasa5==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
   _toggleModal6 = () =>{
    if(this.state.isModalVisible6 == true  ){
    const newArray = [...this.state .jmlDewasa  ];
    const newArray2 = [...this.state .jmlDewasa  ];
    const newArray3 = [...this.state .jmlDewasa  ];
    const newArray4 = [...this.state .jmlDewasa  ];
    newArray[this.state.indexArray].namaDepan = this.state.namaDepanDewasa6;
    newArray4[this.state.indexArray].namaBelakang = this.state.namaBelakangDewasa6;
    newArray2[this.state.indexArray].titel = this.state.title;
    newArray3[this.state.indexArray].kwn = this.state.kewarganegaraan;
    this.setState ({jmlDewasa  : newArray  });
    
    this.setState ({namaDepanDewasa6  :this.state.jmlDewasa[this.state.indexArray].namaDepan});
    this.setState ({namaBelakangDewasa6  :this.state.jmlDewasa[this.state.indexArray].namaBelakang});
    this.setState ({JenisKelamin6  :this.state.jmlDewasa[this.state.indexArray].titel});
    this.setState ({Kewarganegaraan6  :this.state.jmlDewasa[this.state.indexArray].kwn});
      }
   if(this.state.namaDepanDewasa6!='' && this.state.Kewarganegaraan6!='' && this.state.JenisKelamin6!='' && this.state.namaBelakangDewasa6!=''){
      if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible6: !this.state.isModalVisible6 });
  }
   if(this.state.namaDepanDewasa6==''|| this.state.Kewarganegaraan6==''|| this.state.JenisKelamin6=='' || this.state.namaBelakangDewasa6==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal7 = () =>{
   if(this.state.isModalVisible7 == true  ){
    const newArray = [...this.state .jmlDewasa  ];
    const newArray2 = [...this.state .jmlDewasa  ];
    const newArray3 = [...this.state .jmlDewasa  ];
    const newArray4 = [...this.state .jmlDewasa  ];
    newArray[this.state.indexArray].namaDepan = this.state.namaDepanDewasa7;
    newArray4[this.state.indexArray].namaBelakang = this.state.namaBelakangDewasa7;
    newArray2[this.state.indexArray].titel = this.state.title;
    newArray3[this.state.indexArray].kwn = this.state.kewarganegaraan;
    this.setState ({jmlDewasa  : newArray  });
    
    this.setState ({namaDepanDewasa7  :this.state.jmlDewasa[this.state.indexArray].namaDepan});
    this.setState ({namaBelakangDewasa7  :this.state.jmlDewasa[this.state.indexArray].namaBelakang});
    this.setState ({JenisKelamin7  :this.state.jmlDewasa[this.state.indexArray].titel});
    this.setState ({Kewarganegaraan7  :this.state.jmlDewasa[this.state.indexArray].kwn});
    
      } 
      if(this.state.namaDepanDewasa7!='' && this.state.Kewarganegaraan7!='' && this.state.JenisKelamin7!='' && this.state.namaBelakangDewasa7!=''){
          if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible7: !this.state.isModalVisible7 });
  }
   if(this.state.namaDepanDewasa7==''|| this.state.Kewarganegaraan7==''|| this.state.JenisKelamin7=='' || this.state.namaBelakangDewasa7==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  } 
  }
   _toggleModal8 = () =>{
    if(this.state.isModalVisible8 == true  ){
    const newArray = [...this.state .jmlDewasa  ];
    const newArray2 = [...this.state .jmlDewasa  ];
    const newArray3 = [...this.state .jmlDewasa  ];
    const newArray4 = [...this.state .jmlDewasa  ];
    newArray[this.state.indexArray].namaDepan = this.state.namaDepanDewasa8;
    newArray4[this.state.indexArray].namaBelakang = this.state.namaBelakangDewasa8;
    newArray2[this.state.indexArray].titel = this.state.title;
    newArray3[this.state.indexArray].kwn = this.state.kewarganegaraan;
    this.setState ({jmlDewasa  : newArray  });
    
    this.setState ({namaDepanDewasa8  :this.state.jmlDewasa[this.state.indexArray].namaDepan});
    this.setState ({namaBelakangDewasa8  :this.state.jmlDewasa[this.state.indexArray].namaBelakang});
    this.setState ({JenisKelamin8  :this.state.jmlDewasa[this.state.indexArray].titel});
    this.setState ({Kewarganegaraan8  :this.state.jmlDewasa[this.state.indexArray].kwn});
      }
    if(this.state.namaDepanDewasa8!='' && this.state.Kewarganegaraan8!='' && this.state.JenisKelamin8!='' && this.state.namaBelakangDewasa8!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible8: !this.state.isModalVisible8 });
  }
   if(this.state.namaDepanDewasa8==''|| this.state.Kewarganegaraan8==''|| this.state.JenisKelamin8=='' || this.state.namaBelakangDewasa8==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal9 = () =>{
    if(this.state.isModalVisible9 == true  ){
    const newArray = [...this.state .jmlDewasa  ];
    const newArray2 = [...this.state .jmlDewasa  ];
    const newArray3 = [...this.state .jmlDewasa  ];
    newArray[this.state.indexArray].nama = this.state.InputDewasa9;
    newArray2[this.state.indexArray].titel = this.state.title;
    newArray3[this.state.indexArray].kwn = this.state.kewarganegaraan;
    this.setState ({jmlDewasa  : newArray  });
    if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
        this.setState ({InputDewasa9  :this.state.jmlDewasa[this.state.indexArray].nama});
    this.setState ({JenisKelamin9  :this.state.jmlDewasa[this.state.indexArray].titel});
    this.setState ({Kewarganegaraan9  :this.state.jmlDewasa[this.state.indexArray].kwn});
      }
   
    this.setState({ isModalVisible9: !this.state.isModalVisible9 });
  }
   _toggleModal10 = () =>{
    if(this.state.isModalVisible10 == true  ){
    const newArray = [...this.state .jmlDewasa  ];
    const newArray2 = [...this.state .jmlDewasa  ];
    const newArray3 = [...this.state .jmlDewasa  ];
    newArray[this.state.indexArray].nama = this.state.InputDewasa10;
    newArray2[this.state.indexArray].titel = this.state.title;
    newArray3[this.state.indexArray].kwn = this.state.kewarganegaraan;
    this.setState ({jmlDewasa  : newArray  });
   if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
      this.setState ({InputDewasa10  :this.state.jmlDewasa[this.state.indexArray].nama});
    this.setState ({JenisKelamin10  :this.state.jmlDewasa[this.state.indexArray].titel});
    this.setState ({Kewarganegaraan10  :this.state.jmlDewasa[this.state.indexArray].kwn});
      }
  
    this.setState({ isModalVisible10: !this.state.isModalVisible10 });
  }
  _toggleModal11 = () =>{
    if(this.state.isModalVisible11 == true  ){
    const newArray = [...this.state .jmlAnak    ];
    const newArray2 = [...this.state .jmlAnak  ];
    const newArray3 = [...this.state .jmlAnak  ];
    const newArray4 = [...this.state .jmlAnak  ];
    newArray[this.state.indexArray2].namaDepan = this.state.namaDepanAnak1 ;
    newArray4[this.state.indexArray2].namaBelakang = this.state.namaBelakangAnak1 ;
    newArray2[this.state.indexArray2].gender = this.state.gender;
    newArray3[this.state.indexArray2].kwn = this.state.kewarganegaraan;
    this.setState ({jmlAnak   : newArray  });
    
    this.setState ({namaDepanAnak1  :this.state.jmlAnak[this.state.indexArray2].namaDepan});
    this.setState ({namaBelakangAnak1  :this.state.jmlAnak[this.state.indexArray2].namaBelakang});
    this.setState ({JenisKelaminAnak1  :this.state.jmlAnak[this.state.indexArray2].gender});
    this.setState ({KewarganegaraanAnak1  :this.state.jmlAnak[this.state.indexArray2].kwn});
      }
  
   if(this.state.namaDepanAnak1!='' && this.state.KewarganegaraanAnak1!='' && this.state.JenisKelaminAnak1!='' && this.state.namaBelakangAnak1!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible11: !this.state.isModalVisible11 });
  }
   if(this.state.namaDepanAnak1=='' || this.state.KewarganegaraanAnak1=='' || this.state.JenisKelaminAnak1=='' || this.state.namaBelakangAnak1==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal12 = () =>{
    if(this.state.isModalVisible12 == true  ){
    const newArray = [...this.state .jmlAnak    ];
    const newArray2 = [...this.state .jmlAnak  ];
    const newArray3 = [...this.state .jmlAnak  ];
    const newArray4 = [...this.state .jmlAnak  ];
    newArray[this.state.indexArray2].namaDepan = this.state.namaDepanAnak2 ;
    newArray4[this.state.indexArray2].namaBelakang = this.state.namaBelakangAnak2 ;
    newArray2[this.state.indexArray2].gender = this.state.gender;
    newArray3[this.state.indexArray2].kwn = this.state.kewarganegaraan;
    this.setState ({jmlAnak   : newArray  });
    
    this.setState ({namaDepanAnak2  :this.state.jmlAnak[this.state.indexArray2].namaDepan});
    this.setState ({namaBelakangAnak2  :this.state.jmlAnak[this.state.indexArray2].namaBelakang});
    this.setState ({JenisKelaminAnak2  :this.state.jmlAnak[this.state.indexArray2].gender});
    this.setState ({KewarganegaraanAnak2  :this.state.jmlAnak[this.state.indexArray2].kwn});
      }
if(this.state.namaDepanAnak2!='' && this.state.KewarganegaraanAnak2!='' && this.state.JenisKelaminAnak2!='' && this.state.namaBelakangAnak2!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible12: !this.state.isModalVisible12 });
  }
   if(this.state.namaDepanAnak2=='' || this.state.KewarganegaraanAnak2=='' || this.state.JenisKelaminAnak2=='' || this.state.namaBelakangAnak2==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal13 = () =>{
    if(this.state.isModalVisible13 == true  ){
    const newArray = [...this.state .jmlAnak    ];
    const newArray2 = [...this.state .jmlAnak  ];
    const newArray3 = [...this.state .jmlAnak  ];
    const newArray4 = [...this.state .jmlAnak  ];
    newArray[this.state.indexArray2].namaDepan = this.state.namaDepanAnak3 ;
    newArray4[this.state.indexArray2].namaBelakang = this.state.namaBelakangAnak3 ;
    newArray2[this.state.indexArray2].gender = this.state.gender;
    newArray3[this.state.indexArray2].kwn = this.state.kewarganegaraan;
    this.setState ({jmlAnak   : newArray  });
    
    this.setState ({namaDepanAnak3  :this.state.jmlAnak[this.state.indexArray2].namaDepan});
    this.setState ({namaBelakangAnak3  :this.state.jmlAnak[this.state.indexArray2].namaBelakang});
    this.setState ({JenisKelaminAnak3  :this.state.jmlAnak[this.state.indexArray2].gender});
    this.setState ({KewarganegaraanAnak3  :this.state.jmlAnak[this.state.indexArray2].kwn});
      }
    if(this.state.namaDepanAnak3='' && this.state.KewarganegaraanAnak3!='' && this.state.JenisKelaminAnak3!='' && this.state.namaBelakangAnak3!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible13: !this.state.isModalVisible13 });
  }
   if(this.state.namaDepanAnak3=='' || this.state.KewarganegaraanAnak3=='' || this.state.JenisKelaminAnak3=='' || this.state.namaBelakangAnak3==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal14 = () =>{
    if(this.state.isModalVisible14 == true  ){
    const newArray = [...this.state .jmlAnak    ];
    const newArray2 = [...this.state .jmlAnak  ];
    const newArray3 = [...this.state .jmlAnak  ];
    const newArray4 = [...this.state .jmlAnak  ];
    newArray[this.state.indexArray2].namaDepan = this.state.namaDepanAnak4 ;
    newArray4[this.state.indexArray2].namaBelakang = this.state.namaBelakangAnak4 ;
    newArray2[this.state.indexArray2].gender = this.state.gender;
    newArray3[this.state.indexArray2].kwn = this.state.kewarganegaraan;
    this.setState ({jmlAnak   : newArray  });
    
    this.setState ({namaDepanAnak4  :this.state.jmlAnak[this.state.indexArray2].namaDepan});
    this.setState ({namaBelakangAnak4  :this.state.jmlAnak[this.state.indexArray2].namaBelakang});
    this.setState ({JenisKelaminAnak4  :this.state.jmlAnak[this.state.indexArray2].gender});
    this.setState ({KewarganegaraanAnak4  :this.state.jmlAnak[this.state.indexArray2].kwn});
      }
     if(this.state.namaDepanAnak4!='' && this.state.KewarganegaraanAnak4!='' && this.state.JenisKelaminAnak4!='' && this.state.namaBelakangAnak4!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible14: !this.state.isModalVisible14 });
  }
   if(this.state.namaDepanAnak4=='' || this.state.KewarganegaraanAnak4=='' || this.state.JenisKelaminAnak4=='' || this.state.namaBelakangAnak4==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal15 = () =>{
    if(this.state.isModalVisible15 == true  ){
    const newArray = [...this.state .jmlAnak    ];
    const newArray2 = [...this.state .jmlAnak  ];
    const newArray3 = [...this.state .jmlAnak  ];
    const newArray4 = [...this.state .jmlAnak  ];
    newArray[this.state.indexArray2].namaDepan = this.state.namaDepanAnak4 ;
    newArray4[this.state.indexArray2].namaBelakang = this.state.namaBelakangAnak4 ;
    newArray2[this.state.indexArray2].gender = this.state.gender;
    newArray3[this.state.indexArray2].kwn = this.state.kewarganegaraan;
    this.setState ({jmlAnak   : newArray  });
    
    this.setState ({namaDepanAnak5  :this.state.jmlAnak[this.state.indexArray2].namaDepan});
    this.setState ({namaBelakangAnak5  :this.state.jmlAnak[this.state.indexArray2].namaBelakang});
    this.setState ({JenisKelaminAnak5  :this.state.jmlAnak[this.state.indexArray2].gender});
    this.setState ({KewarganegaraanAnak5  :this.state.jmlAnak[this.state.indexArray2].kwn});
      }
    if(this.state.namaDepanAnak5!='' && this.state.KewarganegaraanAnak5!='' && this.state.JenisKelaminAnak5!='' && this.state.namaBelakangAnak5!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible15: !this.state.isModalVisible15 });
  }
   if(this.state.namaDepanAnak5=='' || this.state.KewarganegaraanAnak5=='' || this.state.JenisKelaminAnak5=='' || this.state.namaBelakangAnak5==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal16 = () =>{
    if(this.state.isModalVisible16 == true  ){
    const newArray = [...this.state .jmlAnak    ];
    const newArray2 = [...this.state .jmlAnak  ];
    const newArray3 = [...this.state .jmlAnak  ];
    const newArray4 = [...this.state .jmlAnak  ];
    newArray[this.state.indexArray2].namaDepan = this.state.namaDepanAnak6 ;
    newArray4[this.state.indexArray2].namaBelakang = this.state.namaBelakangAnak6 ;
    newArray2[this.state.indexArray2].gender = this.state.gender;
    newArray3[this.state.indexArray2].kwn = this.state.kewarganegaraan;
    this.setState ({jmlAnak   : newArray  });
    
    this.setState ({namaDepanAnak6  :this.state.jmlAnak[this.state.indexArray2].namaDepan});
    this.setState ({namaBelakangAnak6  :this.state.jmlAnak[this.state.indexArray2].namaBelakang});
    this.setState ({JenisKelaminAnak6  :this.state.jmlAnak[this.state.indexArray2].gender});
    this.setState ({KewarganegaraanAnak6  :this.state.jmlAnak[this.state.indexArray2].kwn});
      }
   if(this.state.namaDepanAnak6!='' && this.state.KewarganegaraanAnak6!='' && this.state.JenisKelaminAnak6!='' && this.state.namaBelakangAnak6!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible16: !this.state.isModalVisible16 });
  }
   if(this.state.namaDepanAnak6=='' || this.state.KewarganegaraanAnak6=='' || this.state.JenisKelaminAnak6=='' || this.state.namaBelakangAnak6==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal17 = () =>{
    if(this.state.isModalVisible17 == true  ){
    const newArray = [...this.state .jmlAnak    ];
    const newArray2 = [...this.state .jmlAnak  ];
    const newArray3 = [...this.state .jmlAnak  ];
    const newArray4 = [...this.state .jmlAnak  ];
    newArray[this.state.indexArray2].namaDepan = this.state.namaDepanAnak7 ;
    newArray4[this.state.indexArray2].namaBelakang = this.state.namaBelakangAnak7 ;
    newArray2[this.state.indexArray2].gender = this.state.gender;
    newArray3[this.state.indexArray2].kwn = this.state.kewarganegaraan;
    this.setState ({jmlAnak   : newArray  });
    
    this.setState ({namaDepanAnak7  :this.state.jmlAnak[this.state.indexArray2].namaDepan});
    this.setState ({namaBelakangAnak7  :this.state.jmlAnak[this.state.indexArray2].namaBelakang});
    this.setState ({JenisKelaminAnak7  :this.state.jmlAnak[this.state.indexArray2].gender});
    this.setState ({KewarganegaraanAnak7  :this.state.jmlAnak[this.state.indexArray2].kwn});
      }
      if(this.state.namaDepanAnak7!='' && this.state.KewarganegaraanAnak7!='' && this.state.JenisKelaminAnak7!='' && this.state.namaBelakangAnak7!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible17: !this.state.isModalVisible17 });
  }
   if(this.state.namaDepanAnak7=='' || this.state.KewarganegaraanAnak7=='' || this.state.JenisKelaminAnak7=='' || this.state.namaBelakangAnak7==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal18 = () =>{
    if(this.state.isModalVisible18 == true  ){
    const newArray = [...this.state .jmlAnak    ];
    const newArray2 = [...this.state .jmlAnak  ];
    const newArray3 = [...this.state .jmlAnak  ];
    const newArray4 = [...this.state .jmlAnak  ];
    newArray[this.state.indexArray2].namaDepan = this.state.namaDepanAnak8 ;
    newArray4[this.state.indexArray2].namaBelakang = this.state.namaBelakangAnak8 ;
    newArray2[this.state.indexArray2].gender = this.state.gender;
    newArray3[this.state.indexArray2].kwn = this.state.kewarganegaraan;
    this.setState ({jmlAnak   : newArray  });
    
    this.setState ({namaDepanAnak8  :this.state.jmlAnak[this.state.indexArray2].namaDepan});
    this.setState ({namaBelakangAnak8  :this.state.jmlAnak[this.state.indexArray2].namaBelakang});
    this.setState ({JenisKelaminAnak8  :this.state.jmlAnak[this.state.indexArray2].gender});
    this.setState ({KewarganegaraanAnak8  :this.state.jmlAnak[this.state.indexArray2].kwn});
      }
      if(this.state.namaDepanAnak8!='' && this.state.KewarganegaraanAnak8!='' && this.state.JenisKelaminAnak8!='' && this.state.namaBelakangAnak8!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible18: !this.state.isModalVisible18 });
  }
   if(this.state.namaDepanAnak8=='' || this.state.KewarganegaraanAnak8=='' || this.state.JenisKelaminAnak8=='' || this.state.namaBelakangAnak8==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal19 = () =>{
    if(this.state.isModalVisible19 == true  ){
    const newArray = [...this.state .jmlAnak   ];
    const newArray2 = [...this.state .jmlAnak  ];
    const newArray3 = [...this.state .jmlAnak  ];
    newArray[this.state.indexArray2].nama = this.state.InputAnak9 ;
    newArray2[this.state.indexArray2].titel = this.state.title;
    newArray3[this.state.indexArray2].kwn = this.state.kewarganegaraan;
    this.setState ({jmlAnak   : newArray  });
    if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
      this.setState ({InputAnak9  :this.state.jmlAnak[this.state.indexArray2].nama});
    this.setState ({JenisKelaminAnak9  :this.state.jmlAnak[this.state.indexArray2].titel});
    this.setState ({KewarganegaraanAnak9  :this.state.jmlAnak[this.state.indexArray2].kwn});
      }
      
    this.setState({ isModalVisible19: !this.state.isModalVisible19 });
  }
  _toggleModal20 = () =>{
    if(this.state.isModalVisible20 == true  ){
    const newArray = [...this.state .jmlAnak   ];
    const newArray2 = [...this.state .jmlAnak  ];
    const newArray3 = [...this.state .jmlAnak  ];
    newArray[this.state.indexArray2].nama = this.state.InputAnak10 ;
    newArray2[this.state.indexArray2].titel = this.state.title;
    newArray3[this.state.indexArray2].kwn = this.state.kewarganegaraan;
    this.setState ({jmlAnak   : newArray  });
    if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
      this.setState ({InputAnak10  :this.state.jmlAnak[this.state.indexArray2].nama});
    this.setState ({JenisKelaminAnak10  :this.state.jmlAnak[this.state.indexArray2].titel});
    this.setState ({KewarganegaraanAnak10  :this.state.jmlAnak[this.state.indexArray2].kwn});
      }
      
    this.setState({ isModalVisible20: !this.state.isModalVisible20 });
  }
  _toggleModal21 = () =>{
    if(this.state.isModalVisible21 == true  ){
    const newArray = [...this.state .jmlInfant    ];
    const newArray2 = [...this.state .jmlInfant  ];
    const newArray3 = [...this.state .jmlInfant  ];
    const newArray4 = [...this.state .jmlInfant  ];
    const newArray5 = [...this.state .jmlInfant  ];
    newArray[this.state.indexArray3].namaDepan = this.state.namaDepanInfant1 ;
    newArray5[this.state.indexArray3].namaBelakang = this.state.namaBelakangInfant1 ;
    newArray2[this.state.indexArray3].gender = this.state.gender;
    newArray3[this.state.indexArray3].kwn = this.state.kewarganegaraan;
    newArray4[this.state.indexArray3].umur = this.state.InputUmurInfant1;

    this.setState ({jmlInfant   : newArray  });
   
    this.setState ({namaDepanInfant1  :this.state.jmlInfant[this.state.indexArray3].namaDepan});
    this.setState ({namaBelakangInfant1  :this.state.jmlInfant[this.state.indexArray3].namaBelakang});
    this.setState ({JenisKelaminInfant1  :this.state.jmlInfant[this.state.indexArray3].gender});
    this.setState ({KewarganegaraanInfant1  :this.state.jmlInfant[this.state.indexArray3].kwn});
    this.setState ({InputUmurInfant1  :this.state.jmlInfant[this.state.indexArray3].umur});
      }
   if(this.state.namaDepanInfant1!='' && this.state.KewarganegaraanInfant1!='' && this.state.JenisKelaminInfant1!='' && this.state.namaBelakangInfant1!='' && this.state.InputUmurInfant1!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible21: !this.state.isModalVisible21 });
  }
   if(this.state.namaDepanInfant1==''|| this.state.KewarganegaraanInfant1==''|| this.state.JenisKelaminInfant1=='' || this.state.namaBelakangInfant1=='' || this.state.InputUmurInfant1==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }  
}
  _toggleModal22 = () =>{
    if(this.state.isModalVisible22 == true  ){
    const newArray = [...this.state .jmlInfant    ];
    const newArray2 = [...this.state .jmlInfant  ];
    const newArray3 = [...this.state .jmlInfant  ];
    const newArray4 = [...this.state .jmlInfant  ];
    newArray[this.state.indexArray3].nama = this.state.InputInfant2 ;
    newArray2[this.state.indexArray3].titel = this.state.title;
    newArray3[this.state.indexArray3].kwn = this.state.kewarganegaraan;
    newArray4[this.state.indexArray3].umur = this.state.InputUmurInfant2;

    this.setState ({jmlInfant   : newArray  });
    
    this.setState ({InputInfant2  :this.state.jmlInfant[this.state.indexArray3].nama});
    this.setState ({JenisKelaminInfant2  :this.state.jmlInfant[this.state.indexArray3].titel});
    this.setState ({KewarganegaraanInfant2  :this.state.jmlInfant[this.state.indexArray3].kwn});
    this.setState ({InputUmurInfant2  :this.state.jmlInfant[this.state.indexArray3].umur});
      }
    if(this.state.namaDepanInfant2!='' && this.state.KewarganegaraanInfant2!='' && this.state.JenisKelaminInfant2!='' && this.state.namaBelakangInfant2!='' && this.state.InputUmurInfant2!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible22: !this.state.isModalVisible22 });
  }
   if(this.state.namaDepanInfant2==''|| this.state.KewarganegaraanInfant2==''|| this.state.JenisKelaminInfant2=='' || this.state.namaBelakangInfant2=='' || this.state.InputUmurInfant2==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal23 = () =>{
    if(this.state.isModalVisible23 == true  ){
    const newArray = [...this.state .jmlInfant    ];
    const newArray2 = [...this.state .jmlInfant  ];
    const newArray3 = [...this.state .jmlInfant  ];
    const newArray4 = [...this.state .jmlInfant  ];
    newArray[this.state.indexArray3].nama = this.state.InputInfant3 ;
    newArray2[this.state.indexArray3].titel = this.state.title;
    newArray3[this.state.indexArray3].kwn = this.state.kewarganegaraan;
    newArray4[this.state.indexArray3].umur = this.state.InputUmurInfant3;

    this.setState ({jmlInfant   : newArray  });
    
    this.setState ({InputInfant3  :this.state.jmlInfant[this.state.indexArray3].nama});
    this.setState ({JenisKelaminInfant3  :this.state.jmlInfant[this.state.indexArray3].titel});
    this.setState ({KewarganegaraanInfant3  :this.state.jmlInfant[this.state.indexArray3].kwn});
    this.setState ({InputUmurInfant3  :this.state.jmlInfant[this.state.indexArray3].umur});
      }
    if(this.state.namaDepanInfant3!='' && this.state.KewarganegaraanInfant3!='' && this.state.JenisKelaminInfant3!='' && this.state.namaBelakangInfant3!='' && this.state.InputUmurInfant3!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible23: !this.state.isModalVisible23 });
  }
   if(this.state.namaDepanInfant3==''|| this.state.KewarganegaraanInfant3==''|| this.state.JenisKelaminInfant3=='' || this.state.namaBelakangInfant3=='' || this.state.InputUmurInfant3==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal24 = () =>{
    if(this.state.isModalVisible24 == true  ){
    const newArray = [...this.state .jmlInfant    ];
    const newArray2 = [...this.state .jmlInfant  ];
    const newArray3 = [...this.state .jmlInfant  ];
    const newArray4 = [...this.state .jmlInfant  ];
    newArray[this.state.indexArray3].nama = this.state.InputInfant4 ;
    newArray2[this.state.indexArray3].titel = this.state.title;
    newArray3[this.state.indexArray3].kwn = this.state.kewarganegaraan;
    newArray4[this.state.indexArray3].umur = this.state.InputUmurInfant4;

    this.setState ({jmlInfant   : newArray  });
    
    this.setState ({InputInfant4  :this.state.jmlInfant[this.state.indexArray3].nama});
    this.setState ({JenisKelaminInfant4  :this.state.jmlInfant[this.state.indexArray3].titel});
    this.setState ({KewarganegaraanInfant4  :this.state.jmlInfant[this.state.indexArray3].kwn});
    this.setState ({InputUmurInfant4  :this.state.jmlInfant[this.state.indexArray3].umur});
      }
    if(this.state.namaDepanInfant4!='' && this.state.KewarganegaraanInfant4!='' && this.state.JenisKelaminInfant4!='' && this.state.namaBelakangInfant4!='' && this.state.InputUmurInfant4!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible24: !this.state.isModalVisible24 });
  }
   if(this.state.namaDepanInfant4==''|| this.state.KewarganegaraanInfant4==''|| this.state.JenisKelaminInfant4=='' || this.state.namaBelakangInfant4=='' || this.state.InputUmurInfant4==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }
  _toggleModal25 = () =>{
    if(this.state.isModalVisible25 == true  ){
    const newArray = [...this.state .jmlInfant    ];
    const newArray2 = [...this.state .jmlInfant  ];
    const newArray3 = [...this.state .jmlInfant  ];
    const newArray4 = [...this.state .jmlInfant  ];
    newArray[this.state.indexArray3].nama = this.state.InputInfant5 ;
    newArray2[this.state.indexArray3].titel = this.state.title;
    newArray3[this.state.indexArray3].kwn = this.state.kewarganegaraan;
    newArray4[this.state.indexArray3].umur = this.state.InputUmurInfant5;

    this.setState ({jmlInfant   : newArray  });
    
    this.setState ({InputInfant5  :this.state.jmlInfant[this.state.indexArray3].nama});
    this.setState ({JenisKelaminInfant5  :this.state.jmlInfant[this.state.indexArray3].titel});
    this.setState ({KewarganegaraanInfant5  :this.state.jmlInfant[this.state.indexArray3].kwn});
    this.setState ({InputUmurInfant5  :this.state.jmlInfant[this.state.indexArray3].umur});
      }
    if(this.state.namaDepanInfant5!='' && this.state.KewarganegaraanInfant5!='' && this.state.JenisKelaminInfant5!='' && this.state.namaBelakangInfant5!='' && this.state.InputUmurInfant5!=''){
        if(this.state.totalInput != this.state.AsyncTotalPenumpang){
      this.setState({totalInput: parseInt(this.state.totalInput)+1 })
    }
    this.setState({ isModalVisible25: !this.state.isModalVisible25 });
  }
   if(this.state.namaDepanInfant5==''|| this.state.KewarganegaraanInfant5==''|| this.state.JenisKelaminInfant5=='' || this.state.namaBelakangInfant5=='' || this.state.InputUmurInfant5==''){
     ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
  }

  _toggleModal26 = () =>{
    if(this.state.isModalVisible26 == true  ){
    const newArray = [...this.state .jmlInfant    ];
    newArray[this.state.indexArray3].nama = this.state.InputInfant6  ;
    this.setState ({jmlInfant   : newArray  });
    this.setState({totalInput: parseInt(this.state.totalInput)+1 })
      }
    this.setState({ isModalVisible26: !this.state.isModalVisible26 });
  }
  _toggleModal27 = () =>{
    if(this.state.isModalVisible27 == true  ){
    const newArray = [...this.state .jmlInfant    ];
    newArray[this.state.indexArray3].nama = this.state.InputInfant7  ;
    this.setState ({jmlInfant   : newArray  });
    this.setState({totalInput: parseInt(this.state.totalInput)+1 })
      }
    this.setState({ isModalVisible27: !this.state.isModalVisible27 });
  }
  _toggleModal28 = () =>{
    if(this.state.isModalVisible28 == true  ){
    const newArray = [...this.state .jmlInfant    ];
    newArray[this.state.indexArray3].nama = this.state.InputInfant8  ;
    this.setState ({jmlInfant   : newArray  });
    this.setState({totalInput: parseInt(this.state.totalInput)+1 })
      }
    this.setState({ isModalVisible28: !this.state.isModalVisible28 });
  }
  _toggleModal29 = () =>{
    if(this.state.isModalVisible29 == true  ){
    const newArray = [...this.state .jmlInfant    ];
    newArray[this.state.indexArray3].nama = this.state.InputInfant9  ;
    this.setState ({jmlInfant   : newArray  });
    this.setState({totalInput: parseInt(this.state.totalInput)+1 })
      }
    this.setState({ isModalVisible29: !this.state.isModalVisible29 });
  }
  _toggleModal30 = () =>{
    if(this.state.isModalVisible30 == true  ){
    const newArray = [...this.state .jmlInfant    ];
    newArray[this.state.indexArray3].nama = this.state.InputInfant10  ;
    this.setState ({jmlInfant   : newArray  });
    this.setState({totalInput: parseInt(this.state.totalInput)+1 })
      }
    this.setState({ isModalVisible230: !this.state.isModalVisible30 });
  }
  loopingItems(){
     if (this.state.jmlDewasa.length < this.state.AsyncDewasa){
      
      if(this.state.NomorPesanan='0'){      
        this.getNoPesanan();
        }
      
      for (let i=0; i < this.state.AsyncDewasa; i++){
          this.state.jmlDewasa.push({
            id: i+1, titel:'',namaDepan:'',namaBelakang:'',kwn:'Indonesia',
          })
        }
        
      }
      

  }
loopingItems2(){
     if (this.state.jmlAnak.length < this.state.AsyncAnak){
      for (let i=0; i < this.state.AsyncAnak; i++){
          this.state.jmlAnak.push({
            id: i+1, gender:'',namaDepan:'',namaBelakang:'',kwn:'Indonesia',
          })
        }
      }
  }
  loopingItems3(){
     if (this.state.jmlInfant.length < this.state.AsyncInfant){
      for (let i=0; i < this.state.AsyncInfant; i++){
          this.state.jmlInfant.push({
            id: i+1, gender:'',namaDepan:'',namaBelakang:'',umur:'',kwn:'Indonesia',
          })
        }
      }
  }
  cekData(){
    if (this.array.length < this.state.AsyncDewasa){
      ToastAndroid.show('Data Penumpang Belum Lengkap', ToastAndroid.SHORT);
      
    }
    else{
    
    }
  }
  BackFunction = () =>{
   this.props.navigation.navigate('pilihJadwal',{NomorPesanan:this.state.NomorPesanan})
 }
 Bayar = () =>{
   this.props.navigation.navigate('Transfer_Bank',{
    array:this.array,
   })
 }
 cek = () =>{
  
  if(this.state.totalInput == this.state.AsyncTotalPenumpang)
  {
   
    this.saveData();

  }
  if(this.state.totalInput < this.state.AsyncTotalPenumpang){
   ToastAndroid.show('Data Belum Lengkap', ToastAndroid.SHORT);
  }
 }
saveData = () =>{
            let AsyncKodeUser=this.state.AsyncKodeUser;
            let AsyncPenumpangVIP=this.state.AsyncPenumpangVIP;
            let AsyncPenumpangPPVIP=this.state.AsyncPenumpangPPVIP;
            let AsyncPenumpangEXE=this.state.AsyncPenumpangEXE;
            let AsyncPenumpangPPEXE=this.state.AsyncPenumpangPPEXE;
        let AsyncValuePenumpang = this.state.AsyncValuePenumpang;
        let AsyncValuePenumpangPP = this.state.AsyncValuePenumpangPP;
        let AsyncNama = this.state.AsyncNama;
        let AsyncIdKupon = this.state.idkupon;
        let AsyncIdKpnSaya = this.state.idkpnSaya;
        let AsyncPotongan = this.state.dataPromo[0].nominal;
        let AsyncIdPromo = this.state.dataPromo[0].id_promo;
        let AsyncJenisKeberangkatan = this.state.AsyncJenisKeberangkatan;
        let AsyncNomorPesanan = this.state.NomorPesanan;
        let AsyncPDewasa1 = this.state.namaDepanDewasa1+' '+this.state.namaBelakangDewasa1;
        let AsyncPDewasa2 = this.state.namaDepanDewasa2+' '+this.state.namaBelakangDewasa2;
        let AsyncPDewasa3 = this.state.namaDepanDewasa3+' '+this.state.namaBelakangDewasa3;
        let AsyncPDewasa4 = this.state.namaDepanDewasa4+' '+this.state.namaBelakangDewasa4;
        let AsyncPDewasa5 = this.state.namaDepanDewasa5+' '+this.state.namaBelakangDewasa5;
        let AsyncPDewasa6 = this.state.namaDepanDewasa6+' '+this.state.namaBelakangDewasa6;
        let AsyncPDewasa7 = this.state.namaDepanDewasa7+' '+this.state.namaBelakangDewasa7;
        let AsyncPDewasa8 = this.state.namaDepanDewasa8+' '+this.state.namaBelakangDewasa8;
        let AsyncPDewasa9 = this.state.InputDewasa9;
        let AsyncPDewasa10 = this.state.InputDewasa10;
        let AsyncPAnak1 = this.state.namaDepanAnak1+' '+this.state.namaBelakangAnak1;
        let AsyncPAnak2 = this.state.namaDepanAnak2+' '+this.state.namaBelakangAnak2;
        let AsyncPAnak3 = this.state.namaDepanAnak3+' '+this.state.namaBelakangAnak3;
        let AsyncPAnak4 = this.state.namaDepanAnak4+' '+this.state.namaBelakangAnak4;
        let AsyncPAnak5 = this.state.namaDepanAnak5+' '+this.state.namaBelakangAnak5;
        let AsyncPAnak6 = this.state.namaDepanAnak6+' '+this.state.namaBelakangAnak6;
        let AsyncPAnak7 = this.state.namaDepanAnak7+' '+this.state.namaBelakangAnak7;
        let AsyncPAnak8 = this.state.namaDepanAnak8+' '+this.state.namaBelakangAnak8;
        let AsyncPAnak9 = this.state.InputAnak9;
        let AsyncPAnak10 = this.state.InputAnak10;
        let AsyncPInfant1 = this.state.namaDepanInfant1+' '+this.state.namaBelakangInfant1;
        let AsyncPInfant2 = this.state.namaDepanInfant2+' '+this.state.namaBelakangInfant2;
        let AsyncPInfant3 = this.state.namaDepanInfant3+' '+this.state.namaBelakangInfant3;
        let AsyncPInfant4 = this.state.namaDepanInfant4+' '+this.state.namaBelakangInfant4;
        let AsyncPInfant5 = this.state.namaDepanInfant5+' '+this.state.namaBelakangInfant5;
        let AsyncPInfant6 = this.state.namaDepanInfant6+' '+this.state.namaBelakangInfant6;
        let AsyncPInfant7 = this.state.namaDepanInfant7+' '+this.state.namaBelakangInfant7;
        let AsyncPInfant8 = this.state.namaDepanInfant8+' '+this.state.namaBelakangInfant8;
        let AsyncPInfant9 = this.state.InputInfant9;
        let AsyncPInfant10 = this.state.InputInfant10;
        let AsyncAlamat1 = this.state.InputAlamatDewasa1;
        let AsyncAlamat2 = this.state.InputAlamatDewasa2;
        let AsyncAlamat3 = this.state.InputAlamatDewasa3;
        let AsyncAlamat4 = this.state.InputAlamatDewasa4;
        let AsyncAlamat5 = this.state.InputAlamatDewasa5;
        let AsyncAlamat6 = this.state.InputAlamatDewasa6;
        let AsyncAlamat7 = this.state.InputAlamatDewasa7;
        let AsyncAlamat8 = this.state.InputAlamatDewasa8;
        let AsyncAlamat9 = this.state.InputAlamatDewasa9;
        let AsyncAlamat10 = this.state.InputAlamatDewasa10;
        let AsyncAlamatAnak1 = this.state.InputAlamatAnak1;
        let AsyncAlamatAnak2 = this.state.InputAlamatAnak2;
        let AsyncAlamatAnak3 = this.state.InputAlamatAnak3;
        let AsyncAlamatAnak4 = this.state.InputAlamatAnak4;
        let AsyncAlamatAnak5 = this.state.InputAlamatAnak5;
        let AsyncAlamatAnak6 = this.state.InputAlamatAnak6;
        let AsyncAlamatAnak7 = this.state.InputAlamatAnak7;
        let AsyncAlamatAnak8 = this.state.InputAlamatAnak8;
        let AsyncAlamatAnak9 = this.state.InputAlamatAnak9;
        let AsyncAlamatAnak10 = this.state.InputAlamatAnak10;
        let AsyncJenisKelamin1 = this.state.JenisKelamin1;
        let AsyncJenisKelamin2 = this.state.JenisKelamin2;
        let AsyncJenisKelamin3 = this.state.JenisKelamin3;
        let AsyncJenisKelamin4 = this.state.JenisKelamin4;
        let AsyncJenisKelamin5 = this.state.JenisKelamin5;
        let AsyncJenisKelamin6 = this.state.JenisKelamin6;
        let AsyncJenisKelamin7 = this.state.JenisKelamin7;
        let AsyncJenisKelamin8 = this.state.JenisKelamin8;
        let AsyncJenisKelamin9 = this.state.JenisKelamin9;
        let AsyncJenisKelamin10 = this.state.JenisKelamin10;
        let AsyncJenisKelaminAnak1 = this.state.JenisKelaminAnak1;
        let AsyncJenisKelaminAnak2 = this.state.JenisKelaminAnak2;
        let AsyncJenisKelaminAnak3 = this.state.JenisKelaminAnak3;
        let AsyncJenisKelaminAnak4 = this.state.JenisKelaminAnak4;
        let AsyncJenisKelaminAnak5 = this.state.JenisKelaminAnak5;
        let AsyncJenisKelaminAnak6 = this.state.JenisKelaminAnak6;
        let AsyncJenisKelaminAnak7 = this.state.JenisKelaminAnak7;
        let AsyncJenisKelaminAnak8 = this.state.JenisKelaminAnak8;
        let AsyncJenisKelaminAnak9 = this.state.JenisKelaminAnak8;
        let AsyncJenisKelaminAnak10 = this.state.JenisKelaminAnak10;
        let AsyncJenisKelaminInfant1 = this.state.JenisKelaminInfant1;
        let AsyncJenisKelaminInfant2 = this.state.JenisKelaminInfant2;
        let AsyncJenisKelaminInfant3 = this.state.JenisKelaminInfant3;
        let AsyncJenisKelaminInfant4 = this.state.JenisKelaminInfant4;
        let AsyncJenisKelaminInfant5 = this.state.JenisKelaminInfant5;
        let AsyncKewarganegaraan1 = this.state.Kewarganegaraan1;
        let AsyncKewarganegaraan2 = this.state.Kewarganegaraan2;
        let AsyncKewarganegaraan3 = this.state.Kewarganegaraan3;
        let AsyncKewarganegaraan4 = this.state.Kewarganegaraan4;
        let AsyncKewarganegaraan5 = this.state.Kewarganegaraan5;
        let AsyncKewarganegaraan6 = this.state.Kewarganegaraan6;
        let AsyncKewarganegaraan7 = this.state.Kewarganegaraan7;
        let AsyncKewarganegaraan8 = this.state.Kewarganegaraan8;
        let AsyncKewarganegaraan9 = this.state.Kewarganegaraan9;
        let AsyncKewarganegaraan10 = this.state.Kewarganegaraan10;
        let AsyncKewarganegaraanAnak1 = this.state.KewarganegaraanAnak1;
        let AsyncKewarganegaraanAnak2 = this.state.KewarganegaraanAnak2;
        let AsyncKewarganegaraanAnak3 = this.state.KewarganegaraanAnak3;
        let AsyncKewarganegaraanAnak4 = this.state.KewarganegaraanAnak4;
        let AsyncKewarganegaraanAnak5 = this.state.KewarganegaraanAnak5;
        let AsyncKewarganegaraanAnak6 = this.state.KewarganegaraanAnak6;
        let AsyncKewarganegaraanAnak7 = this.state.KewarganegaraanAnak7;
        let AsyncKewarganegaraanAnak8 = this.state.KewarganegaraanAnak8;
        let AsyncKewarganegaraanAnak9 = this.state.KewarganegaraanAnak9;
        let AsyncKewarganegaraanAnak10 = this.state.KewarganegaraanAnak10;
        let AsyncKewarganegaraanInfant1 = this.state.KewarganegaraanInfant1;
        let AsyncKewarganegaraanInfant2 = this.state.KewarganegaraanInfant2;
        let AsyncKewarganegaraanInfant3 = this.state.KewarganegaraanInfant3;
        let AsyncKewarganegaraanInfant4 = this.state.KewarganegaraanInfant4;
        let AsyncKewarganegaraanInfant5 = this.state.KewarganegaraanInfant5;

        let AsyncUmurDewasa1 = this.state.InputUmurDewasa1;
        let AsyncUmurDewasa2 = this.state.InputUmurDewasa2;
        let AsyncUmurDewasa3 = this.state.InputUmurDewasa3;
        let AsyncUmurDewasa4 = this.state.InputUmurDewasa4;
        let AsyncUmurDewasa5 = this.state.InputUmurDewasa5;
        let AsyncUmurDewasa6 = this.state.InputUmurDewasa6;
        let AsyncUmurDewasa7 = this.state.InputUmurDewasa7;
        let AsyncUmurDewasa8 = this.state.InputUmurDewasa8;
        let AsyncUmurDewasa9 = this.state.InputUmurDewasa9;
        let AsyncUmurDewasa10 = this.state.InputUmurDewasa10;
        let AsyncUmurAnak1 = this.state.InputUmurAnak1;
        let AsyncUmurAnak2 = this.state.InputUmurAnak2;
        let AsyncUmurAnak3 = this.state.InputUmurAnak3;
        let AsyncUmurAnak4 = this.state.InputUmurAnak4;
        let AsyncUmurAnak5 = this.state.InputUmurAnak5;
        let AsyncUmurAnak6 = this.state.InputUmurAnak6;
        let AsyncUmurAnak7 = this.state.InputUmurAnak7;
        let AsyncUmurAnak8 = this.state.InputUmurAnak8;
        let AsyncUmurAnak9 = this.state.InputUmurAnak9;
        let AsyncUmurAnak10 = this.state.InputUmurAnak10;
        let AsyncUmurInfant1 = this.state.InputUmurInfant1;
        let AsyncUmurInfant2 = this.state.InputUmurInfant2;
        let AsyncUmurInfant3 = this.state.InputUmurInfant3;
        let AsyncUmurInfant4 = this.state.InputUmurInfant4;
        let AsyncUmurInfant5 = this.state.InputUmurInfant5;
        let AsyncUmurInfant6 = this.state.InputUmurInfant6;
        let AsyncUmurInfant7 = this.state.InputUmurInfant7;
        let AsyncUmurInfant8 = this.state.InputUmurInfant8;
        let AsyncUmurInfant9 = this.state.InputUmurInfant9;
        let AsyncUmurInfant10 = this.state.InputUmurInfan10;
        let AsyncTotalHarga = this.state.AsyncTotalHarga;
        let AsyncTotalAkhir = this.state.totalAkhir;
        let AsyncKelas = this.state.AsyncKelas;
        let AsyncKodeRute1 = this.state.AsyncKodeRute1;
        let AsyncKodeRute2 = this.state.AsyncKodeRute2;
        let AsyncId = this.state.AsyncId;
        let AsyncIdPulang = this.state.AsyncIdPulang;
        let AsyncTanggal = this.state.AsyncTanggal;
        let AsyncTanggal2 = this.state.AsyncTanggal2;
        let AsyncJenisTiket = this.state.AsyncJenisTiket;
        let AsyncHargaVIP1 = this.state.AsyncHargaVIP1;
        let AsyncHargaVIP2 = this.state.AsyncHargaVIP2;
        let AsyncHargaEKS1 = this.state.AsyncHargaEKS1;
        let AsyncHargaEKS2 = this.state.AsyncHargaEKS2;
        let AsyncHargaBUS1 = this.state.AsyncHargaBUS1;
        let AsyncHargaBUS2 = this.state.AsyncHargaBUS2;
        let AsyncAsuransi = this.state.AsyncAsuransi;
        let AsyncPassPelabuhan = this.state.AsyncPassPelabuhan;
        let AsynctotalInfant= this.state.AsynctotalInfant;
        let AsyncHargaTiketDewasa = this.state.AsyncHargaTiketDewasa;
        let AsyncHargaTiketAnak = this.state.AsyncHargaTiketAnak;
        let AsyncHargaTiketInfant = this.state.AsyncHargaTiketInfant;
        let AsyncEmail = this.state.AsyncEmail;
        let data = {
            AsyncKodeUser:AsyncKodeUser,
            AsyncPenumpangVIP:AsyncPenumpangVIP,
            AsyncPenumpangPPVIP:AsyncPenumpangPPVIP,
            AsyncPenumpangEXE:AsyncPenumpangEXE,
            AsyncPenumpangPPEXE:AsyncPenumpangPPEXE,
            AsyncValuePenumpang:AsyncValuePenumpang,
            AsyncValuePenumpangPP:AsyncValuePenumpangPP,
            AsyncIdKupon:AsyncIdKupon,
            AsyncIdKpnSaya:AsyncIdKpnSaya,
            AsyncIdPromo:AsyncIdPromo,
            AsyncEmail  :AsyncEmail ,
            AsyncNama:AsyncNama,
            AsyncPotongan:AsyncPotongan,
            AsyncJenisKeberangkatan:AsyncJenisKeberangkatan,
            AsyncNomorPesanan:AsyncNomorPesanan,
            AsyncPDewasa1:AsyncPDewasa1,
            AsyncPDewasa2:AsyncPDewasa2,
            AsyncPDewasa3:AsyncPDewasa3,
            AsyncPDewasa4:AsyncPDewasa4,
            AsyncPDewasa5:AsyncPDewasa5,
            AsyncPDewasa6:AsyncPDewasa6,
            AsyncPDewasa7:AsyncPDewasa7,
            AsyncPDewasa8:AsyncPDewasa8,
            AsyncPDewasa9:AsyncPDewasa9,
            AsyncPDewasa10:AsyncPDewasa10,
            AsyncPAnak1:AsyncPAnak1,
            AsyncPAnak2:AsyncPAnak2,
            AsyncPAnak3:AsyncPAnak3,
            AsyncPAnak4:AsyncPAnak4,
            AsyncPAnak5:AsyncPAnak5,
            AsyncPAnak6:AsyncPAnak6,
            AsyncPAnak7:AsyncPAnak7,
            AsyncPAnak8:AsyncPAnak8,
            AsyncPAnak9:AsyncPAnak9,
            AsyncPAnak10:AsyncPAnak10,
            AsyncPInfant1:AsyncPInfant1,
            AsyncPInfant2:AsyncPInfant2,
            AsyncPInfant3:AsyncPInfant3,
            AsyncPInfant4:AsyncPInfant4,
            AsyncPInfant5:AsyncPInfant5,
            AsyncPInfant6:AsyncPInfant6,
            AsyncPInfant7:AsyncPInfant7,
            AsyncPInfant8:AsyncPInfant8,
            AsyncPInfant9:AsyncPInfant9,
            AsyncPInfant10:AsyncPInfant10,
            AsyncAlamat1:AsyncAlamat1,
            AsyncAlamat2:AsyncAlamat2,
            AsyncAlamat3:AsyncAlamat3,
            AsyncAlamat4:AsyncAlamat4,
            AsyncAlamat5:AsyncAlamat5,
            AsyncAlamat6:AsyncAlamat6,
            AsyncAlamat7:AsyncAlamat7,
            AsyncAlamat8:AsyncAlamat8,
            AsyncAlamat9:AsyncAlamat9,
            AsyncAlamat10:AsyncAlamat10,
            AsyncAlamatAnak1:AsyncAlamatAnak1,
            AsyncAlamatAnak2:AsyncAlamatAnak2,
            AsyncAlamatAnak3:AsyncAlamatAnak3,
            AsyncAlamatAnak4:AsyncAlamatAnak4,
            AsyncAlamatAnak5:AsyncAlamatAnak5,
            AsyncAlamatAnak6:AsyncAlamatAnak6,
            AsyncAlamatAnak7:AsyncAlamatAnak7,
            AsyncAlamatAnak8:AsyncAlamatAnak8,
            AsyncAlamatAnak9:AsyncAlamatAnak9,
            AsyncAlamatAnak10:AsyncAlamatAnak10,
            AsyncJenisKelamin1:AsyncJenisKelamin1,
            AsyncJenisKelamin2:AsyncJenisKelamin2,
            AsyncJenisKelamin3:AsyncJenisKelamin3,
            AsyncJenisKelamin4:AsyncJenisKelamin4,
            AsyncJenisKelamin5:AsyncJenisKelamin5,
            AsyncJenisKelamin6:AsyncJenisKelamin6,
            AsyncJenisKelamin7:AsyncJenisKelamin7,
            AsyncJenisKelamin8:AsyncJenisKelamin8,
            AsyncJenisKelamin9:AsyncJenisKelamin9,
            AsyncJenisKelamin10:AsyncJenisKelamin10,
            AsyncJenisKelaminAnak1:AsyncJenisKelaminAnak1,
            AsyncJenisKelaminAnak2:AsyncJenisKelaminAnak2,
            AsyncJenisKelaminAnak3:AsyncJenisKelaminAnak3,
            AsyncJenisKelaminAnak4:AsyncJenisKelaminAnak4,
            AsyncJenisKelaminAnak5:AsyncJenisKelaminAnak5,
            AsyncJenisKelaminAnak6:AsyncJenisKelaminAnak6,
            AsyncJenisKelaminAnak7:AsyncJenisKelaminAnak7,
            AsyncJenisKelaminAnak8:AsyncJenisKelaminAnak8,
            AsyncJenisKelaminAnak9:AsyncJenisKelaminAnak9,
            AsyncJenisKelaminAnak10:AsyncJenisKelaminAnak10,
            AsyncJenisKelaminInfant1:AsyncJenisKelaminInfant1,
            AsyncJenisKelaminInfant2:AsyncJenisKelaminInfant2,
            AsyncJenisKelaminInfant3:AsyncJenisKelaminInfant3,
            AsyncJenisKelaminInfant4:AsyncJenisKelaminInfant4,
            AsyncJenisKelaminInfant5:AsyncJenisKelaminInfant5,
            AsyncKewarganegaraan1:AsyncKewarganegaraan1,
            AsyncKewarganegaraan2:AsyncKewarganegaraan2,
            AsyncKewarganegaraan3:AsyncKewarganegaraan3,
            AsyncKewarganegaraan4:AsyncKewarganegaraan4,
            AsyncKewarganegaraan5:AsyncKewarganegaraan5,
            AsyncKewarganegaraan6:AsyncKewarganegaraan6,
            AsyncKewarganegaraan7:AsyncKewarganegaraan7,
            AsyncKewarganegaraan8:AsyncKewarganegaraan8,
            AsyncKewarganegaraan9:AsyncKewarganegaraan9,
            AsyncKewarganegaraan10:AsyncKewarganegaraan10,
            AsyncKewarganegaraanAnak1:AsyncKewarganegaraanAnak1,
            AsyncKewarganegaraanAnak2:AsyncKewarganegaraanAnak2,
            AsyncKewarganegaraanAnak3:AsyncKewarganegaraanAnak3,
            AsyncKewarganegaraanAnak4:AsyncKewarganegaraanAnak4,
            AsyncKewarganegaraanAnak5:AsyncKewarganegaraanAnak5,
            AsyncKewarganegaraanAnak6:AsyncKewarganegaraanAnak6,
            AsyncKewarganegaraanAnak7:AsyncKewarganegaraanAnak7,
            AsyncKewarganegaraanAnak8:AsyncKewarganegaraanAnak8,
            AsyncKewarganegaraanAnak9:AsyncKewarganegaraanAnak9,
            AsyncKewarganegaraanAnak10:AsyncKewarganegaraanAnak10,
            AsyncKewarganegaraanInfant1:AsyncKewarganegaraanInfant1,
            AsyncKewarganegaraanInfant2:AsyncKewarganegaraanInfant2,
            AsyncKewarganegaraanInfant3:AsyncKewarganegaraanInfant3,
            AsyncKewarganegaraanInfant4:AsyncKewarganegaraanInfant4,
            AsyncKewarganegaraanInfant5:AsyncKewarganegaraanInfant5,
            AsyncUmurDewasa1:AsyncUmurDewasa1,
            AsyncUmurDewasa2:AsyncUmurDewasa2,
            AsyncUmurDewasa3:AsyncUmurDewasa3,
            AsyncUmurDewasa4:AsyncUmurDewasa4,
            AsyncUmurDewasa5:AsyncUmurDewasa5,
            AsyncUmurDewasa6:AsyncUmurDewasa6,
            AsyncUmurDewasa7:AsyncUmurDewasa7,
            AsyncUmurDewasa8:AsyncUmurDewasa8,
            AsyncUmurDewasa9:AsyncUmurDewasa9,
            AsyncUmurDewasa10:AsyncUmurDewasa10,
            AsyncUmurAnak1:AsyncUmurAnak1,
            AsyncUmurAnak2:AsyncUmurAnak2,
            AsyncUmurAnak3:AsyncUmurAnak3,
            AsyncUmurAnak4:AsyncUmurAnak4,
            AsyncUmurAnak5:AsyncUmurAnak5,
            AsyncUmurAnak6:AsyncUmurAnak6,
            AsyncUmurAnak7:AsyncUmurAnak7,
            AsyncUmurAnak8:AsyncUmurAnak8,
            AsyncUmurAnak9:AsyncUmurAnak9,
            AsyncUmurAnak10:AsyncUmurAnak10,
            AsyncUmurInfant1:AsyncUmurInfant1,
            AsyncUmurInfant2:AsyncUmurInfant2,
            AsyncUmurInfant3:AsyncUmurInfant3,
            AsyncUmurInfant4:AsyncUmurInfant4,
            AsyncUmurInfant5:AsyncUmurInfant5,
            AsyncUmurInfant6:AsyncUmurInfant6,
            AsyncUmurInfant7:AsyncUmurInfant7,
            AsyncUmurInfant8:AsyncUmurInfant8,
            AsyncUmurInfant9:AsyncUmurInfant9,
            AsyncUmurInfant10:AsyncUmurInfant10,
            AsyncKelas:AsyncKelas,
            AsyncTotalHarga:AsyncTotalHarga,
            AsyncTotalAkhir:AsyncTotalAkhir,
            AsyncKodeRute1:AsyncKodeRute1,
            AsyncKodeRute2:AsyncKodeRute2,
            AsyncId:AsyncId,
            AsyncIdPulang:AsyncIdPulang,
            AsyncTanggal:AsyncTanggal,
            AsyncTanggal2:AsyncTanggal2,
            AsyncJenisTiket:AsyncJenisTiket,
            AsyncHargaVIP1:AsyncHargaVIP1,
            AsyncHargaVIP2:AsyncHargaVIP2,
            AsyncHargaEKS1:AsyncHargaEKS1,
            AsyncHargaEKS2:AsyncHargaEKS2,
            AsyncHargaBUS1:AsyncHargaBUS1,
            AsyncHargaBUS2:AsyncHargaBUS2,
            AsyncAsuransi:AsyncAsuransi,
            AsyncPassPelabuhan:AsyncPassPelabuhan,
            AsynctotalInfant:AsynctotalInfant,
            AsyncHargaTiketDewasa:AsyncHargaTiketDewasa,
            AsyncHargaTiketAnak:AsyncHargaTiketAnak,
            AsyncHargaTiketInfant:AsyncHargaTiketInfant,
        }

        AsyncStorage.setItem('user', JSON.stringify(data));

        this.setState({
            AsyncKodeUser:AsyncKodeUser,
            AsyncPenumpangVIP:AsyncPenumpangVIP,
            AsyncPenumpangPPVIP:AsyncPenumpangPPVIP,
            AsyncPenumpangEXE:AsyncPenumpangEXE,
            AsyncPenumpangPPEXE:AsyncPenumpangPPEXE,
            AsyncValuePenumpang:AsyncValuePenumpang,
            AsyncValuePenumpangPP:AsyncValuePenumpangPP,
            AsyncPotongan:AsyncPotongan,
            AsyncIdPromo:AsyncIdPromo,
            AsyncIdKupon:AsyncIdKupon,
            AsyncIdKpnSaya:AsyncIdKpnSaya,
            AsyncEmail  :AsyncEmail ,
            AsyncHargaTiketDewasa:AsyncHargaTiketDewasa,
            AsyncHargaTiketAnak:AsyncHargaTiketAnak,
            AsyncHargaTiketInfant:AsyncHargaTiketInfant,
            AsyncNama:AsyncNama,
            AsyncJenisKeberangkatan:AsyncJenisKeberangkatan,
            AsyncNomorPesanan:AsyncNomorPesanan,
            AsyncPDewasa1:AsyncPDewasa1,
            AsyncPDewasa2:AsyncPDewasa2,
            AsyncPDewasa3:AsyncPDewasa3,
            AsyncPDewasa4:AsyncPDewasa4,
            AsyncPDewasa5:AsyncPDewasa5,
            AsyncPDewasa6:AsyncPDewasa6,
            AsyncPDewasa7:AsyncPDewasa7,
            AsyncPDewasa8:AsyncPDewasa8,
            AsyncPDewasa9:AsyncPDewasa9,
            AsyncPDewasa10:AsyncPDewasa10,
            AsyncPAnak1:AsyncPAnak1,
            AsyncPAnak2:AsyncPAnak2,
            AsyncPAnak3:AsyncPAnak3,
            AsyncPAnak4:AsyncPAnak4,
            AsyncPAnak5:AsyncPAnak5,
            AsyncPAnak6:AsyncPAnak6,
            AsyncPAnak7:AsyncPAnak7,
            AsyncPAnak8:AsyncPAnak8,
            AsyncPAnak9:AsyncPAnak9,
            AsyncPAnak10:AsyncPAnak10,
            AsyncPInfant1:AsyncPInfant1,
            AsyncPInfant2:AsyncPInfant2,
            AsyncPInfant3:AsyncPInfant3,
            AsyncPInfant4:AsyncPInfant4,
            AsyncPInfant5:AsyncPInfant5,
            AsyncPInfant6:AsyncPInfant6,
            AsyncPInfant7:AsyncPInfant7,
            AsyncPInfant8:AsyncPInfant8,
            AsyncPInfant9:AsyncPInfant9,
            AsyncPInfant10:AsyncPInfant10,
            AsyncAlamat1:AsyncAlamat1,
            AsyncAlamat2:AsyncAlamat2,
            AsyncAlamat3:AsyncAlamat3,
            AsyncAlamat4:AsyncAlamat4,
            AsyncAlamat5:AsyncAlamat5,
            AsyncAlamat6:AsyncAlamat6,
            AsyncAlamat7:AsyncAlamat7,
            AsyncAlamat8:AsyncAlamat8,
            AsyncAlamat9:AsyncAlamat9,
            AsyncAlamat10:AsyncAlamat10,
            AsyncAlamatAnak1:AsyncAlamatAnak1,
            AsyncAlamatAnak2:AsyncAlamatAnak2,
            AsyncAlamatAnak3:AsyncAlamatAnak3,
            AsyncAlamatAnak4:AsyncAlamatAnak4,
            AsyncAlamatAnak5:AsyncAlamatAnak5,
            AsyncAlamatAnak6:AsyncAlamatAnak6,
            AsyncAlamatAnak7:AsyncAlamatAnak7,
            AsyncAlamatAnak8:AsyncAlamatAnak8,
            AsyncAlamatAnak9:AsyncAlamatAnak9,
            AsyncAlamatAnak10:AsyncAlamatAnak10,
            AsyncJenisKelamin1:AsyncJenisKelamin1,
            AsyncJenisKelamin2:AsyncJenisKelamin2,
            AsyncJenisKelamin3:AsyncJenisKelamin3,
            AsyncJenisKelamin4:AsyncJenisKelamin4,
            AsyncJenisKelamin5:AsyncJenisKelamin5,
            AsyncJenisKelamin6:AsyncJenisKelamin6,
            AsyncJenisKelamin7:AsyncJenisKelamin7,
            AsyncJenisKelamin8:AsyncJenisKelamin8,
            AsyncJenisKelamin9:AsyncJenisKelamin9,
            AsyncJenisKelamin10:AsyncJenisKelamin10,
            AsyncJenisKelaminAnak1:AsyncJenisKelaminAnak1,
            AsyncJenisKelaminAnak2:AsyncJenisKelaminAnak2,
            AsyncJenisKelaminAnak3:AsyncJenisKelaminAnak3,
            AsyncJenisKelaminAnak4:AsyncJenisKelaminAnak4,
            AsyncJenisKelaminAnak5:AsyncJenisKelaminAnak5,
            AsyncJenisKelaminAnak6:AsyncJenisKelaminAnak6,
            AsyncJenisKelaminAnak7:AsyncJenisKelaminAnak7,
            AsyncJenisKelaminAnak8:AsyncJenisKelaminAnak8,
            AsyncJenisKelaminAnak9:AsyncJenisKelaminAnak9,
            AsyncJenisKelaminAnak10:AsyncJenisKelaminAnak10,
            AsyncJenisKelaminInfant1:AsyncJenisKelaminInfant1,
            AsyncJenisKelaminInfant2:AsyncJenisKelaminInfant2,
            AsyncJenisKelaminInfant3:AsyncJenisKelaminInfant3,
            AsyncJenisKelaminInfant4:AsyncJenisKelaminInfant4,
            AsyncJenisKelaminInfant5:AsyncJenisKelaminInfant5,
            AsyncKewarganegaraan1:AsyncKewarganegaraan1,
            AsyncKewarganegaraan2:AsyncKewarganegaraan2,
            AsyncKewarganegaraan3:AsyncKewarganegaraan3,
            AsyncKewarganegaraan4:AsyncKewarganegaraan4,
            AsyncKewarganegaraan5:AsyncKewarganegaraan5,
            AsyncKewarganegaraan6:AsyncKewarganegaraan6,
            AsyncKewarganegaraan7:AsyncKewarganegaraan7,
            AsyncKewarganegaraan8:AsyncKewarganegaraan8,
            AsyncKewarganegaraan9:AsyncKewarganegaraan9,
            AsyncKewarganegaraan10:AsyncKewarganegaraan10,
            AsyncKewarganegaraanAnak1:AsyncKewarganegaraanAnak1,
            AsyncKewarganegaraanAnak2:AsyncKewarganegaraanAnak2,
            AsyncKewarganegaraanAnak3:AsyncKewarganegaraanAnak3,
            AsyncKewarganegaraanAnak4:AsyncKewarganegaraanAnak4,
            AsyncKewarganegaraanAnak5:AsyncKewarganegaraanAnak5,
            AsyncKewarganegaraanAnak6:AsyncKewarganegaraanAnak6,
            AsyncKewarganegaraanAnak7:AsyncKewarganegaraanAnak7,
            AsyncKewarganegaraanAnak8:AsyncKewarganegaraanAnak8,
            AsyncKewarganegaraanAnak9:AsyncKewarganegaraanAnak9,
            AsyncKewarganegaraanAnak10:AsyncKewarganegaraanAnak10,
            AsyncKewarganegaraanInfant1:AsyncKewarganegaraanInfant1,
            AsyncKewarganegaraanInfant2:AsyncKewarganegaraanInfant2,
            AsyncKewarganegaraanInfant3:AsyncKewarganegaraanInfant3,
            AsyncKewarganegaraanInfant4:AsyncKewarganegaraanInfant4,
            AsyncKewarganegaraanInfant5:AsyncKewarganegaraanInfant5,
            AsyncUmurDewasa1:AsyncUmurDewasa1,
            AsyncUmurDewasa2:AsyncUmurDewasa2,
            AsyncUmurDewasa3:AsyncUmurDewasa3,
            AsyncUmurDewasa4:AsyncUmurDewasa4,
            AsyncUmurDewasa5:AsyncUmurDewasa5,
            AsyncUmurDewasa6:AsyncUmurDewasa6,
            AsyncUmurDewasa7:AsyncUmurDewasa7,
            AsyncUmurDewasa8:AsyncUmurDewasa8,
            AsyncUmurDewasa9:AsyncUmurDewasa9,
            AsyncUmurDewasa10:AsyncUmurDewasa10,
            AsyncUmurAnak1:AsyncUmurAnak1,
            AsyncUmurAnak2:AsyncUmurAnak2,
            AsyncUmurAnak3:AsyncUmurAnak3,
            AsyncUmurAnak4:AsyncUmurAnak4,
            AsyncUmurAnak5:AsyncUmurAnak5,
            AsyncUmurAnak6:AsyncUmurAnak6,
            AsyncUmurAnak7:AsyncUmurAnak7,
            AsyncUmurAnak8:AsyncUmurAnak8,
            AsyncUmurAnak9:AsyncUmurAnak9,
            AsyncUmurAnak10:AsyncUmurAnak10,
            AsyncUmurInfant1:AsyncUmurInfant1,
            AsyncUmurInfant2:AsyncUmurInfant2,
            AsyncUmurInfant3:AsyncUmurInfant3,
            AsyncUmurInfant4:AsyncUmurInfant4,
            AsyncUmurInfant5:AsyncUmurInfant5,
            AsyncUmurInfant6:AsyncUmurInfant6,
            AsyncUmurInfant7:AsyncUmurInfant7,
            AsyncUmurInfant8:AsyncUmurInfant8,
            AsyncUmurInfant9:AsyncUmurInfant9,
            AsyncUmurInfant10:AsyncUmurInfant10,
            AsyncKelas:AsyncKelas,
            AsyncTotalHarga:AsyncTotalHarga,
            AsyncTotalAkhir:AsyncTotalAkhir,
            AsyncKodeRute1:AsyncKodeRute1,
            AsyncKodeRute2:AsyncKodeRute2,
            AsyncId:AsyncId,
            AsyncIdPulang:AsyncIdPulang,
            AsyncTanggal:AsyncTanggal,
            AsyncTanggal2:AsyncTanggal2,
            AsyncJenisTiket:AsyncJenisTiket,
            AsyncHargaVIP1:AsyncHargaVIP1,
            AsyncHargaVIP2:AsyncHargaVIP2,
            AsyncHargaEKS1:AsyncHargaEKS1,
            AsyncHargaEKS2:AsyncHargaEKS2,
            AsyncHargaBUS1:AsyncHargaBUS1,
            AsyncHargaBUS2:AsyncHargaBUS2,
            AsyncAsuransi:AsyncAsuransi,
            AsyncPassPelabuhan:AsyncPassPelabuhan,
            AsynctotalInfant:AsynctotalInfant,
        });
      this.props.navigation.navigate('Transfer_Bank')
    }



updateArrayDewasa=()=>{
  const arrayBaru =[... this.state.jmlDewasa];
  arrayBaru[0].nama='Komang';
  this.setState({jmlDewasa:arrayBaru});
}
_toggleModalInputPromo = () =>{
    
    this.setState({ isModalVisiblePromo: !this.state.isModalVisiblePromo });
    
    if(this.state.isModalVisiblePromo==true){
    this.setState({tampilFooter:true,
                    kodepromo:'',
                  });  

    }
    else{
     this.setState({tampilFooter:false,
                      kodepromo:'',
                    });   
    }

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
    jenis_tiket: this.state.AsyncJenisTiket,
    asal:this.state.AsyncAsal,
    kelas:this.state.AsyncKelas,
    id_user:this.state.AsyncNama,
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
      this.setState({
     
        dataPromo:responseJson,

      }, function() {
       
      });
        this.loadings();
     
      }).catch((error) => {
        ToastAndroid.show('Kode Promo Tidak Berlaku, Harap Gunakan Kode Promo Lainnya', ToastAndroid.LONG);
       //this._toggleModalInputPromo();
      });

   
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
        this.loadings();
     
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
       
        this.loadings3();
    }
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
      
        this._toggleModalInputPromo();
        this.setState({detailPromo:true});
        this.setState({InputPromo:false});
        this.setState({totalDiskon:this.state.dataPromo[0].nominal});
        if(this.state.AsyncJenisTiket=='PP'){
        this.setState({tempTotalHargaPP:this.state.AsyncTotalHargaPP});
        this.setState({totalHargaPromo:parseInt(this.state.AsyncTotalHargaPP) - parseInt(this.state.totalDiskon)})
          if(this.state.totalHargaPromo<0){
          this.setState({totalDiskon:this.state.AsyncTotalHarga})
          this.setState({totalHargaPromo:0});
        }
        this.setState({AsyncTotalHarga:this.state.totalHargaPromo});
        this.setState({ HideTotalBayarPP:false,
                        HideTotalBayarDiskonPP:true,
                        HideTotalBayarDiskon:false,
                        HideTotalBayar:false,
                        tampilFooter:true,
                        kodepromo:'',
                     });
        }
        if(this.state.AsyncJenisTiket=='Sekali Jalan'){
        this.setState({tempTotalHarga:this.state.AsyncTotalHarga});
        this.setState({totalHargaPromo:parseInt(this.state.AsyncTotalHarga) - parseInt(this.state.totalDiskon)})
        if(this.state.totalHargaPromo<0){
          this.setState({totalDiskon:this.state.AsyncTotalHarga})
          this.setState({totalHargaPromo:0});
        }
        this.setState({AsyncTotalHarga:this.state.totalHargaPromo});
        this.setState({ HideTotalBayar:false,
                        HideTotalBayarDiskon:true,
                        HideTotalBayarPP:false,
                        HideTotalBayarDiskonPP:false,
                        tampilFooter:true,
                        kodepromo:'',
                        });
        }
        this.setState({loading1: !this.state.loading1});
      
      }, 500);

  }
  loadings2=()=>{
    
    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
       
       this.setState({rpTotalHargaDiskon: this.state.totalHargaPromo});
       this.setState({rpTotalDiskon: this.state.totalDiskon});
       this.setState({rpTotalDewasa: this.state.AsynctotalDewasa});
       this.setState({rpTotalDewasaPP: this.state.AsynctotalDewasaPP});
       this.setState({rpTotalAnak: this.state.AsynctotalAnak});
       this.setState({rpTotalAnakPP: this.state.AsynctotalAnakPP});
       this.setState({rpTotalInfant: this.state.AsynctotalInfant});
       this.setState({rpTotalInfantPP: this.state.AsynctotalInfantPP});

       this.rupiahDiskon();
       this.rupiahTotalDiskon();
       this.rupiahDetailDewasa();
       this.rupiahDetailAnak();
       this.rupiahDetailInfant();
       this.rupiahDetailDewasaPP();
       this.rupiahDetailAnakPP();
       this.rupiahDetailInfantPP();
       this.tampilKupon();
        if(this.state.AsyncJT=='1'){
    this.setState({AsyncTotalHarga:this.state.AsyncTotalHarga});
  }
  if(this.state.AsyncJT=='2'){
    this.setState({AsyncTotalHarga:this.state.AsyncTotalHargaPP});
  }
        this.setState({loading2: !this.state.loading2});
        
      }, 500);

  }
  loadings3=()=>{

    this.setState({loading2: !this.state.loading2});
    setTimeout(()=>{
      
       this.CekKupon();
        
        this.setState({loading2: !this.state.loading2});
      
      }, 500);

  }
  loadingsCloseDP=()=>{

    this.setState({loading3: !this.state.loading3});
    setTimeout(()=>{
      

        
        this.setState({loading3: !this.state.loading3});
      
      }, 500);

  }
  closeDP=()=>{
   

    this.setState({detailPromo:false});
    this.setState({InputPromo:true});
    this.setState({dataPromo:[{}]});
    
    
    if(this.state.AsyncJenisTiket=='PP'){
      this.setState({AsyncTotalHarga:this.state.tempTotalHargaPP});
      this.setState({HideTotalBayarPP:true,
                     HideTotalBayarDiskon:false,
                     HideTotalBayar:false,
                     HideTotalBayarDiskonPP:false
                    })
  
    }
    if(this.state.AsyncJenisTiket=='Sekali Jalan'){
      this.setState({AsyncTotalHarga:this.state.tempTotalHarga});
      this.setState({HideTotalBayar:true,
                    HideTotalBayarPP:false,
                     HideTotalBayarDiskon:false,
                     HideTotalBayarDiskonPP:false,
                    })
  
    }
    
  }

  render() {
    let title =[{
        value: 'Tuan/Mr.',
      },{
        value: 'Nyonya/Mrs.',
      },{
        value: 'Nona/Ms.',
    }];
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

    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      this.loopingItems(),
      this.loopingItems2(),
      this.loopingItems3(),
      <Container>
        <Header style={{backgroundColor:'#3F81B5',}}>
         <View style={styles.view}>
         <Left>
            <Button transparent onPress={() =>
                  this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,marginLeft:-30}}>Ringkasan Pesanan</Title>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
          </View>
        </Header>

         <Content style={{backgroundColor:'#F4F0E5'}}>
         <Spinner visible={this.state.loading1}/>
         
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


        <BottomSheet
          visible={this.state.isModalVisible1}
          onBackButtonPress={this.closeModal1}
          onBackdropPress={this.closeModal1}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal1} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>
            <Text>{this.state.Kewarganegaraan1  }</Text>
            <Dropdown

              label='Title'
              value={this.state.JenisKelamin1}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            
          
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanDewasa1} onChangeText={text => this.setState({ namaDepanDewasa1 : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangDewasa1} onChangeText={text => this.setState({ namaBelakangDewasa1  : text })}/>

            
            <Dropdown
              label='Nationality'
              value={this.state.Kewarganegaraan1}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            </View>
             <Button onPress={this._toggleModal1}full style={{backgroundColor:'#3F81B5',width:'90%',marginLeft:15}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </BottomSheet>

         <BottomSheet
          visible={this.state.isModalVisible3}
          onBackButtonPress={this.closeModal3}
          onBackdropPress={this.closeModal3}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal3} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{width:'90%',marginTop:20,marginLeft:17}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Title'
              value={this.state.JenisKelamin3}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanDewasa3} onChangeText={text => this.setState({ namaDepanDewasa3  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangDewasa3} onChangeText={text => this.setState({ namaBelakangDewasa3  : text })}/>
            
            <Dropdown
              label='Nationality'
              value={this.state.Kewarganegaraan3}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal3}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={this.state.isModalVisible2}
          onBackButtonPress={this.closeModal2}
          onBackdropPress={this.closeModal2}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal2} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Title'
              value={this.state.JenisKelamin2}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanDewasa2} onChangeText={text => this.setState({ namaDepanDewasa2  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangDewasa2} onChangeText={text => this.setState({ namaBelakangDewasa2  : text })}/>
          
            
            <Dropdown
              label='Nationality'
              value={this.state.Kewarganegaraan2}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal2}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={this.state.isModalVisible4}
          onBackButtonPress={this.closeModal4}
          onBackdropPress={this.closeModal4}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal4} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Title'
              value={this.state.JenisKelamin4}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanDewasa4} onChangeText={text => this.setState({ namaDepanDewasa4  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangDewasa4} onChangeText={text => this.setState({ namaBelakangDewasa4  : text })}/>
          
             

            <Dropdown
              label='Kewarganegaraan'
              value={this.state.Kewarganegaraan4}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal4}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
          </BottomSheet>
          
          <BottomSheet
          visible={this.state.isModalVisible5}
          onBackButtonPress={this.closeModal5}
          onBackdropPress={this.closeModal5}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal5} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>


            <ListItem>
            <Body>
            
            <Dropdown
              label='Title'
              value={this.state.JenisKelamin5}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
                  
              
            
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanDewasa4} onChangeText={text => this.setState({ namaDepanDewasa4  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangDewasa4} onChangeText={text => this.setState({ namaBelakangDewasa4  : text })}/>
          
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.Kewarganegaraan5}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal5}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </BottomSheet>

         <Modal style={{ height:'100%'}} transparent={false} backdropColor='#F4F0E5' isVisible={this.state.isModalVisible6}>
          <View style={{marginTop:0}}>
          <Right  onPress={this.closeModal6} style={{ width:'100%', height:10}}>
                <Button onPress={this.closeModal6} full style={{backgroundColor:'#3F81B5'}} ><Text style={{fontSize:18, color:'#ffffff'}}>                                                                      X</Text></Button>
          </Right>

         </View>

          <View style={{ flex: 1 ,marginTop:20}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Title'
              value={this.state.JenisKelamin6}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanDewasa6} onChangeText={text => this.setState({ namaDepanDewasa6  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangDewasa6} onChangeText={text => this.setState({ namaBelakangDewasa6  : text })}/>
                      <Dropdown
              label='Kewarganegaraan'
              value={this.state.Kewarganegaraan6}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
             <Button onPress={this._toggleModal6}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </Modal>

         <Modal style={{ height:'100%'}} transparent={false} backdropColor='#F4F0E5' isVisible={this.state.isModalVisible7}>
        <View style={{marginTop:0}}>
          <Right  onPress={this.closeModal7} style={{ width:'100%', height:10}}>
                <Button onPress={this.closeModal7} full style={{backgroundColor:'#3F81B5'}} ><Text style={{fontSize:18, color:'#ffffff'}}>                                                                      X</Text></Button>
          </Right>

         </View>

          <View style={{ flex: 1 ,marginTop:20}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Title'
              value={this.state.JenisKelamin7}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanDewasa7} onChangeText={text => this.setState({ namaDepanDewasa7  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangDewasa7} onChangeText={text => this.setState({ namaBelakangDewasa7  : text })}/>
          
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.Kewarganegaraan7}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
             <Button onPress={this._toggleModal7}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View> 
        </Modal>

         <Modal style={{ height:'100%'}} transparent={false} backdropColor='#F4F0E5' isVisible={this.state.isModalVisible8}>
        <View style={{marginTop:0}}>
          <Right  onPress={this.closeModal8} style={{ width:'100%', height:10}}>
                <Button onPress={this.closeModal8} full style={{backgroundColor:'#3F81B5'}} ><Text style={{fontSize:18, color:'#ffffff'}}>                                                                      X</Text></Button>
          </Right>

         </View>

          <View style={{ flex: 1 ,marginTop:20}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Title'
              value={this.state.JenisKelamin8}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanDewasa8} onChangeText={text => this.setState({ namaDepanDewasa8  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangDewasa8} onChangeText={text => this.setState({ namaBelakangDewasa8  : text })}/>
        
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.Kewarganegaraan8}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
             <Button onPress={this._toggleModal8}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View> 
        </Modal>

        <Modal style={{ height:'100%'}} transparent={false} backdropColor='#F4F0E5' isVisible={this.state.isModalVisible9}>
        <View style={{marginTop:0}}>
          <Right  onPress={this.closeModal9} style={{ width:'100%', height:10}}>
                <Button onPress={this.closeModal9} full style={{backgroundColor:'#3F81B5'}} ><Text style={{fontSize:18, color:'#ffffff'}}>                                                                      X</Text></Button>
          </Right>

         </View>

          <View style={{ flex: 1 ,marginTop:20}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Title'
              value={this.state.JenisKelamin9}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            <Reinput label='Nama' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.InputDewasa9} onChangeText={text => this.setState({ InputDewasa9  : text })}/>
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.Kewarganegaraan9}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
             <Button onPress={this._toggleModal9}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>  
        </Modal>

         <Modal style={{ height:'100%'}} transparent={false} backdropColor='#F4F0E5' isVisible={this.state.isModalVisible10}>
         <View style={{marginTop:0}}>
          <Right  onPress={this.closeModal10} style={{ width:'100%', height:10}}>
                <Button onPress={this.closeModal10} full style={{backgroundColor:'#3F81B5'}} ><Text style={{fontSize:18, color:'#ffffff'}}>                                                                      X</Text></Button>
          </Right>

         </View>

          <View style={{ flex: 1 ,marginTop:20}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Title'
              value={this.state.JenisKelamin10}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            <Reinput label='Nama' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.InputDewasa10} onChangeText={text => this.setState({ InputDewasa10  : text })}/>
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.Kewarganegaraan10}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
             <Button onPress={this._toggleModal10}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </Modal>



        <BottomSheet
          visible={this.state.isModalVisible11}
          onBackButtonPress={this.closeModal11}
          onBackdropPress={this.closeModal11}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal11} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminAnak1}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            
            
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanAnak1} onChangeText={text => this.setState({ namaDepanAnak1  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangAnak1} onChangeText={text => this.setState({ namaBelakangAnak1  : text })}/>
          
            
            <Dropdown
              label='Nationality'
              value={this.state.KewarganegaraanAnak1}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal11}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>  
        </BottomSheet>

        <BottomSheet
          visible={this.state.isModalVisible12}
          onBackButtonPress={this.closeModal12}
          onBackdropPress={this.closeModal12}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal12} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>


            <ListItem>
            <Body>
            
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminAnak2}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanAnak2} onChangeText={text => this.setState({ namaDepanAnak2  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangAnak2} onChangeText={text => this.setState({ namaBelakangAnak2  : text })}/>
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanAnak2}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal12}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>  
        </BottomSheet>
        
        <BottomSheet
          visible={this.state.isModalVisible13}
          onBackButtonPress={this.closeModal13}
          onBackdropPress={this.closeModal13}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal13} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>


            <ListItem>
            <Body>
            
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminAnak3}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanAnak3} onChangeText={text => this.setState({ namaDepanAnak3  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangAnak3} onChangeText={text => this.setState({ namaBelakangAnak3  : text })}/>
             <Dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanAnak3}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal13}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>    
        </BottomSheet>

        <BottomSheet
          visible={this.state.isModalVisible14}
          onBackButtonPress={this.closeModal14}
          onBackdropPress={this.closeModal14}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal14} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>


            <ListItem>
            <Body>
            
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminAnak4}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanAnak4} onChangeText={text => this.setState({ namaDepanAnak4  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangAnak4} onChangeText={text => this.setState({ namaBelakangAnak4  : text })}/>
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanAnak4}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal14}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>    
        </BottomSheet>

        <BottomSheet
          visible={this.state.isModalVisible15}
          onBackButtonPress={this.closeModal15}
          onBackdropPress={this.closeModal15}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal15} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>


            <ListItem>
            <Body>
            
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminAnak5}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanAnak5} onChangeText={text => this.setState({ namaDepanAnak5  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangAnak5} onChangeText={text => this.setState({ namaBelakangAnak5  : text })}/>
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanAnak5}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal15}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>    
        </BottomSheet>

        <Modal style={{ height:'100%'}} transparent={false} backdropColor='#F4F0E5' isVisible={this.state.isModalVisible16}>
        <View style={{marginTop:0}}>
          <Right  onPress={this.closeModal16} style={{ width:'100%', height:10}}>
                <Button onPress={this.closeModal16} full style={{backgroundColor:'#3F81B5'}} ><Text style={{fontSize:18, color:'#ffffff'}}>                                                                      X</Text></Button>
          </Right>

         </View>

          <View style={{ flex: 1 ,marginTop:20}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminAnak6}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanAnak6} onChangeText={text => this.setState({ namaDepanAnak6  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangAnak6} onChangeText={text => this.setState({ namaBelakangAnak6  : text })}/>
            <react-native-material-dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanAnak6}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
             <Button onPress={this._toggleModal16}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>    
        </Modal>

        <Modal style={{ height:'100%'}} transparent={false} backdropColor='#F4F0E5' isVisible={this.state.isModalVisible17}>
        <View style={{marginTop:0}}>
          <Right  onPress={this.closeModal17} style={{ width:'100%', height:10}}>
                <Button onPress={this.closeModal17} full style={{backgroundColor:'#3F81B5'}} ><Text style={{fontSize:18, color:'#ffffff'}}>                                                                      X</Text></Button>
          </Right>

         </View>

          <View style={{ flex: 1 ,marginTop:20}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminAnak7}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanAnak7} onChangeText={text => this.setState({ namaDepanAnak7  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangAnak7} onChangeText={text => this.setState({ namaBelakangAnak7  : text })}/>
            <react-native-material-dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanAnak7}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
             <Button onPress={this._toggleModal17}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>  
        </Modal>

        <Modal style={{ height:'100%'}} transparent={false} backdropColor='#F4F0E5' isVisible={this.state.isModalVisible18}>
        <View style={{marginTop:0}}>
          <Right  onPress={this.closeModal18} style={{ width:'100%', height:10}}>
                <Button onPress={this.closeModal18} full style={{backgroundColor:'#3F81B5'}} ><Text style={{fontSize:18, color:'#ffffff'}}>                                                                      X</Text></Button>
          </Right>

         </View>

          <View style={{ flex: 1 ,marginTop:20}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminAnak8}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            <Reinput label='Nama' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.InputAnak8} onChangeText={text => this.setState({ InputAnak8  : text })}/>
            <react-native-material-dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanAnak8}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
             <Button onPress={this._toggleModal18}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>  
        </Modal>

        <Modal style={{ height:'100%'}} transparent={false} backdropColor='#F4F0E5' isVisible={this.state.isModalVisible19}>
        <View style={{marginTop:0}}>
          <Right  onPress={this.closeModal19} style={{ width:'100%', height:10}}>
                <Button onPress={this.closeModal19} full style={{backgroundColor:'#3F81B5'}} ><Text style={{fontSize:18, color:'#ffffff'}}>                                                                      X</Text></Button>
          </Right>

         </View>

          <View style={{ flex: 1 ,marginTop:20}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Title'
              value={this.state.JenisKelaminAnak9}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            <Reinput label='Nama' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.InputAnak9} onChangeText={text => this.setState({ InputAnak9  : text })}/>
            <react-native-material-dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanAnak9}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
             <Button onPress={this._toggleModal19}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>          
        </Modal>

        <Modal style={{ height:'100%'}} transparent={false} backdropColor='#F4F0E5' isVisible={this.state.isModalVisible20}>
        <View style={{marginTop:0}}>
          <Right  onPress={this.closeModal20} style={{ width:'100%', height:10}}>
                <Button onPress={this.closeModal20} full style={{backgroundColor:'#3F81B5'}} ><Text style={{fontSize:18, color:'#ffffff'}}>                                                                      X</Text></Button>
          </Right>

         </View>

          <View style={{ flex: 1 ,marginTop:20}}>

            <ListItem>
            <Body>
            
            <Dropdown
              label='Title'
              value={this.state.JenisKelaminAnak10}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            <Reinput label='Nama' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.InputAnak10} onChangeText={text => this.setState({ InputAnak10  : text })}/>
            <react-native-material-dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanAnak10}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
             <Button onPress={this._toggleModal20}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>  
        </Modal>




        <BottomSheet
          visible={this.state.isModalVisible21}
          onBackButtonPress={this.closeModal21}
          onBackdropPress={this.closeModal21}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal21} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>
            <ListItem>
            <Body>
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminInfant1}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanInfant1} onChangeText={text => this.setState({ namaDepanInfant1  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangInfant1} onChangeText={text => this.setState({ namaBelakangInfant1  : text })}/>
            <DatePicker
              style={{width: 300,marginTop:10,marginLeft:-90}}
              date={this.state.InputUmurInfant1}
              mode="date"
              placeholder="Umur"
              format="YYYY-MM-DD"
              minDate={moment(new Date()).add(-2,'year').format('YYYY-MM-DD')}
              maxDate={new Date()}
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

        onDateChange={(InputUmurInfant1) => {this.setState({InputUmurInfant1: InputUmurInfant1})}}
      />
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanInfant1}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal21}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={this.state.isModalVisible22}
          onBackButtonPress={this.closeModal22}
          onBackdropPress={this.closeModal22}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal22} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>
            <ListItem>
            <Body>
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminInfant2}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanInfant2} onChangeText={text => this.setState({ namaDepanInfant2  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangInfant2} onChangeText={text => this.setState({ namaBelakangInfant2  : text })}/>
            <DatePicker
              style={{width: 300,marginTop:10,marginLeft:-90}}
              date={this.state.InputUmurInfant2}
              mode="date"
              placeholder="Umur"
              format="YYYY-MM-DD"
              minDate={moment(new Date()).add(2,'year').format('YYYY-MM-DD')}
              maxDate={new Date()}
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

        onDateChange={(InputUmurInfant2) => {this.setState({InputUmurInfant1: InputUmurInfant2})}}
      />
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanInfant2}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal22}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </BottomSheet>
        
        <BottomSheet
          visible={this.state.isModalVisible23}
          onBackButtonPress={this.closeModal23}
          onBackdropPress={this.closeModal23}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal23} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>
            <ListItem>
            <Body>
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminInfant3}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanInfant3} onChangeText={text => this.setState({ namaDepanInfant3  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangInfant3} onChangeText={text => this.setState({ namaBelakangInfant3  : text })}/>
            <DatePicker
              style={{width: 300,marginTop:10,marginLeft:-90}}
              date={this.state.InputUmurInfant3}
              mode="date"
              placeholder="Umur"
              format="YYYY-MM-DD"
              minDate={moment(new Date()).add(2,'year').format('YYYY-MM-DD')}
              maxDate={new Date()}
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

        onDateChange={(InputUmurInfant3) => {this.setState({InputUmurInfant3: InputUmurInfant3})}}
      />
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanInfant3}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal23}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={this.state.isModalVisible24}
          onBackButtonPress={this.closeModal24}
          onBackdropPress={this.closeModal24}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal24} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>
            <ListItem>
            <Body>
            <Dropdown
              label='Gender'
              value={this.state.JenisKelaminInfant4}
              data={gender}
              ref={this.typographyRef3}
              onChangeText={this.onChangeText3}
            />
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanInfant4} onChangeText={text => this.setState({ namaDepanInfant4  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangInfant4} onChangeText={text => this.setState({ namaBelakangInfant4  : text })}/>
            <DatePicker
              style={{width: 300,marginTop:10,marginLeft:-90}}
              date={this.state.InputUmurInfant4}
              mode="date"
              placeholder="Umur"
              format="YYYY-MM-DD"
              minDate={moment(new Date()).add(2,'year').format('YYYY-MM-DD')}
              maxDate={new Date()}
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

        onDateChange={(InputUmurInfant4) => {this.setState({InputUmurInfant4: InputUmurInfant4})}}
      />
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanInfant4}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal24}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </BottomSheet>
        
        <BottomSheet
          visible={this.state.isModalVisible25}
          onBackButtonPress={this.closeModal25}
          onBackdropPress={this.closeModal25}>       
            
         

          <View style={{height:'100%', width:'100%',backgroundColor:'#fff'}}>
          <View >
            <Right style={{ width:'100%',marginTop:0}}>
                <Button onPress={this.closeModal25} transparent ><Text style={{fontSize:18, color:'#000'}}>X</Text></Button>
            </Right>
            </View>
            <View style={{ width:'90%',marginTop:20,marginLeft:17}}>
            <ListItem>
            <Body>
            <Dropdown
              label='Title'
              value={this.state.JenisKelaminInfant5}
              data={title}
              ref={this.typographyRef}
              onChangeText={this.onChangeText}
            />
            <Reinput label='Nama Depan/First Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaDepanInfant5} onChangeText={text => this.setState({ namaDepanInfant5  : text })}/>
            <Reinput label='Nama Belakang/Last Name' labelActiveColor='#3F81B5' underlineActiveColor='#3F81B5' value={this.state.namaBelakangInfant5} onChangeText={text => this.setState({ namaBelakangInfant5  : text })}/>
            <DatePicker
              style={{width: 300,marginTop:10,marginLeft:-90}}
              date={this.state.InputUmurInfant5}
              mode="date"
              placeholder="Umur"
              format="YYYY-MM-DD"
              minDate={moment(new Date()).add(2,'year').format('YYYY-MM-DD')}
              maxDate={new Date()}
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

        onDateChange={(InputUmurInfant5) => {this.setState({InputUmurInfant5: InputUmurInfant5})}}
      />
            <Dropdown
              label='Kewarganegaraan'
              value={this.state.KewarganegaraanInfant5}
              data={kewarganegaraan}
              ref={this.typographyRef2}
              onChangeText={this.onChangeText2}
            />
            
            
            </Body>
            </ListItem>
            </View>
             <Button onPress={this._toggleModal25}full style={{backgroundColor:'#3F81B5'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </BottomSheet>

            <Collapse isCollapsed={this.state.collapsed} onToggle={(isCollapsed)=>this.setState({collapsed:isCollapsed})}>>
                <CollapseHeader>
                <Card style={{height:40}}>
                    <CardItem style={{height:40}}>
                        <Icon active name="ios-boat-outline" style={{fontSize: 20,}}/>
                        <Text style={{fontSize: 15,fontWeight: 'bold',}}>{this.state.AsyncAsal}{this.state.collapsed2?<Icon name="arrow-round-forward" style={{fontSize:12}} />:<Icon name="md-swap" style={{fontSize:12}} />}{this.state.AsyncTujuan}</Text>
                        <Right style={{marginLeft:70}}>
                          {this.state.collapsed?<Icon active name="ios-arrow-up-outline" />:<Icon active name="ios-arrow-down-outline" />}
                        </Right>
                    </CardItem>
                </Card>
              </CollapseHeader>
              <CollapseBody style={{backgroundColor:'#ffffff'}}> 
              <View>
                <ListItem>
                <Body>
                  <CardItem style={{height:30, marginTop:-10}}>
                      <Text style={{fontSize: 13,}}>{moment(this.state.AsyncTanggal).format('DD MMM YYYY')}</Text>
                      <Right style={{marginLeft:60}}>
                       <Text style={{fontSize: 13}}>{this.state.AsyncETD} - {this.state.AsyncETA} {this.state.FormatWaktu}</Text>
                      </Right>
                  </CardItem>
                  <CardItem style={{height:30}}>
                      <Text style={{fontSize: 13,}}>{this.state.AsyncKapal}</Text>
                      <Right style={{marginLeft:60}}>
                        
                      </Right>
                  </CardItem>
                  <CardItem style={{height:6, marginTop:-7}}>
                      <Text style={{fontSize: 13,}}>{this.state.AsyncKelas}</Text>
                      <Right style={{marginLeft:60}}>
                        
                      </Right>
                  </CardItem>
                  <CardItem style={{height:5, marginTop:-7}}>
                      <Text style={{fontSize: 13,}}>{this.state.AsyncJenisTiket}</Text>
                      <Right style={{marginLeft:60}}>
                        
                      </Right>
                  </CardItem>
                  {
                  this.state.HideDetailPesananPP?<View>
                  <View style={{backgroundColor:'#F4F0E5', width:'100%', height:1}}/>
                  <CardItem style={{height:30}}>
                      <Text style={{fontSize: 13,}}>{moment(this.state.AsyncTanggal2).format('DD MMM YYYY')}</Text>
                      <Right style={{marginLeft:60}}>
                       
                      </Right>
                  </CardItem>
                  <CardItem style={{height:30}}>
                      <Text style={{fontSize: 13,}}>{this.state.AsyncKapal}</Text>
                      <Right style={{marginLeft:60}}>
                        <Text style={{fontSize: 13}}>{this.state.AsyncETDPP} - {this.state.AsyncETAPP} {this.state.FormatWaktu}</Text>
                      </Right>
                  </CardItem>
                  <CardItem style={{height:6, marginTop:-7}}>
                      <Text style={{fontSize: 13,}}>{this.state.AsyncKelas}</Text>
                      <Right style={{marginLeft:60}}>
                        
                      </Right>
                  </CardItem>
                  <CardItem style={{height:5, marginTop:-7}}>
                      <Text style={{fontSize: 13,}}>{this.state.AsyncJenisTiket}</Text>
                      <Right style={{marginLeft:60}}>
                        
                      </Right>
                  </CardItem>
                  </View>:null
                }
                <View style={{backgroundColor:'#F4F0E5', width:'100%', height:1}}/>
                <View style={{alignItems:'center'}}>
                  <View style={{width:'65%'}}>

                    <CardItem style={{height:5, marginTop:5}}>
                      
                        <Icon active name="md-checkmark-circle-outline" style={{fontSize: 18, color:'#009900'}} />
                        <Text style={{fontSize: 11, color:'#009900', marginLeft:-12}}>Bisa Refund</Text>
                      
                        <Text style={{fontSize: 11,}}>      </Text>
                        
                        <Icon active name="md-checkmark-circle-outline" style={{fontSize: 18, color:'#009900'}}/>
                        <Text style={{fontSize: 11, color:'#009900', marginLeft:-12}}>Bisa Reschedule</Text>
                    </CardItem>
                    
                    </View>
                  </View>
                </Body>
              </ListItem> 
              </View>
              </CollapseBody>
            </Collapse>
           { 
            this.state.InputPromo?<ListItem style={{height:70}}>
              <Body>
              <TouchableOpacity onPress={this._toggleModalInputPromo}>
                <Card>
                  <CardItem>
                    <Icon active name="pricetags" style={{fontSize: 20, color:'#3F81B5'}}/>
                    <Text style={{fontSize: 14, color:'#3F81B5', fontWeight: 'bold',}}>Gunakan Kode Promo atau Kupon</Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
              </Body>
            </ListItem>:null
            }
            {
            this.state.detailPromo?<ListItem style={{height:70}}>
              <Body>
                <View style={{backgroundColor:'#fff', borderRadius:5, shadowRadius:10}}>
                  <CardItem style={{height:5, backgroundColor:'transparent', marginTop:5}}>
                    <Icon active name="pricetags" style={{fontSize: 18, color:'#000'}}/>
                    <Text style={{fontSize: 13, color:'#000', fontWeight: 'bold',}}>{this.state.dataPromo[0].nama}</Text>
                  </CardItem>
                  <CardItem style={{height:5, backgroundColor:'transparent', marginBottom:5}}>
                    <Text style={{fontSize: 12, color:'#000'}}>Anda mendapatkan potongan Rp. {this.state.dataPromo[0].nominal},-</Text>
                  </CardItem>
                  <Button transparent style={{position:'absolute', right:0, height:30}} onPress={this.closeDP}>
                    <Icon active name="close" style={{fontSize: 20, color:'#000'}}/>
                  </Button>
                </View>
              </Body>
            </ListItem>:null
          }
            <Collapse isCollapsed={this.state.collapsedHarga} onToggle={(isCollapsed)=>this.setState({collapsedHarga:isCollapsed})}>>
                <CollapseHeader>
                <Card style={{height:40}}>
                    <CardItem style={{height:40}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold',}}>Harga yang Anda Bayar  </Text>
                        {
                        this.state.HideTotalBayar?<View>
                        <Text style={{fontSize: 15, fontWeight: 'bold',}}>Rp. {this.state.rpTotalHarga},-</Text>
                        </View>:null
                        }
                        {
                        this.state.HideTotalBayarPP?<View>
                        <Text style={{fontSize: 15, fontWeight: 'bold',}}>Rp. {this.state.rpTotalHargaPP},-</Text>
                        </View>:null
                        }
                        {
                        this.state.HideTotalBayarDiskon?<View>
                        <Text style={{fontSize: 15, fontWeight: 'bold',}}>Rp. {this.state.rpTotalHargaDiskon},-</Text>
                        </View>:null
                        }
                        {
                        this.state.HideTotalBayarDiskonPP?<View>
                        <Text style={{fontSize: 15, fontWeight: 'bold',}}>Rp. {this.state.rpTotalHargaDiskon},-</Text>
                        </View>:null
                        }

                        <Right>
                          {this.state.collapsedHarga?<Icon active name="ios-arrow-up-outline" />:<Icon active name="ios-arrow-down-outline" />}
                        </Right>
                    </CardItem>
                </Card>
              </CollapseHeader>
              <CollapseBody style={{backgroundColor:'#ffffff'}}> 
              <View>
              <ListItem>
                <Body>
                    {
                    this.state.HideTotalBayar?<CardItem style={{height:10, marginTop:-15}}>
                        <Text style={{fontSize: 14,}}>Dewasa</Text>
                        <Text>     </Text>
                        <Text style={{fontSize: 14,}}>{this.state.AsyncDewasa}x</Text>

                        <Right>
                        <Text style={{fontSize: 14,}}>Rp.{this.state.rpTotalDewasa}.-</Text>
                        </Right>
                    </CardItem>:null
                    }
                    {
                    this.state.HideTotalBayarPP?<CardItem style={{height:10, marginTop:-15}}>
                        <Text style={{fontSize: 14,}}>Dewasa</Text>
                        <Text>     </Text>
                        <Text style={{fontSize: 14,}}>{this.state.AsyncDewasa}x</Text>

                        <Right>
                        <Text style={{fontSize: 14,}}>Rp.{this.state.rpTotalDewasaPP}.-</Text>
                        </Right>
                    </CardItem>:null
                    }
                    {
                    this.state.HideTotalBayarDiskon?<CardItem style={{height:10, marginTop:-15}}>
                        <Text style={{fontSize: 14,}}>Dewasa</Text>
                        <Text>     </Text>
                        <Text style={{fontSize: 14,}}>{this.state.AsyncDewasa}x</Text>

                        <Right>
                        <Text style={{fontSize: 14,}}>Rp.{this.state.rpTotalDewasa}.-</Text>
                        </Right>
                    </CardItem>:null
                    }
                    {
                    this.state.HideTotalBayarDiskonPP?<CardItem style={{height:10, marginTop:-15}}>
                        <Text style={{fontSize: 14,}}>Dewasa</Text>
                        <Text>     </Text>
                        <Text style={{fontSize: 14,}}>{this.state.AsyncDewasa}x</Text>

                        <Right>
                        <Text style={{fontSize: 14,}}>Rp.{this.state.rpTotalDewasaPP}.-</Text>
                        </Right>
                    </CardItem>:null
                    }
                    {
                    this.state.AsynctextAnak?<CardItem style={{height:10,}}>
                        <Text style={{fontSize: 14,}}>Anak</Text>
                        <Text>          </Text>
                        <Text style={{fontSize: 14,}}>{this.state.AsyncAnak}x</Text>

                        <Right>
                        <Text style={{fontSize: 14,}}>Rp.{this.state.rpTotalAnak}.-</Text>
                        </Right>
                    </CardItem>:null
                    }
                    {
                    this.state.AsynctextAnakPP?<CardItem style={{height:10,}}>
                        <Text style={{fontSize: 14,}}>Anak</Text>
                        <Text>          </Text>
                        <Text style={{fontSize: 14,}}>{this.state.AsyncAnak}x</Text>

                        <Right>
                        <Text style={{fontSize: 14,}}>Rp.{this.state.rpTotalAnakPP}.-</Text>
                        </Right>
                    </CardItem>:null
                    }
                    {
                    this.state.AsynctextInfant?<CardItem style={{height:10,}}>
                        <Text style={{fontSize: 14,}}>Infant</Text>
                        <Text>         </Text>
                        <Text style={{fontSize: 14,}}>{this.state.AsyncInfant}x</Text>

                        <Right>
                        <Text style={{fontSize: 14,}}>Rp. {this.state.rpTotalInfant}.-</Text>
                        </Right>
                    </CardItem>:null
                  }
                  {
                    this.state.AsynctextInfantPP?<CardItem style={{height:10,}}>
                        <Text style={{fontSize: 14,}}>Infant</Text>
                        <Text>         </Text>
                        <Text style={{fontSize: 14,}}>{this.state.AsyncInfant}x</Text>

                        <Right>
                        <Text style={{fontSize: 14,}}>Rp. {this.state.rpTotalInfantPP}.-</Text>
                        </Right>
                    </CardItem>:null
                  }
                  {
                    this.state.detailPromo?<CardItem>
                    <Text style={{fontSize: 14,}}>Potongan  </Text>
                    <Right>
                        <Text style={{fontSize: 14,}}>- Rp.{this.state.totalDiskon},-</Text>
                     </Right>
                    </CardItem>:null
                  }
                </Body>
              </ListItem>
              <ListItem style={{height:30,}}>
                <Body>
                    <CardItem>
                        <Text style={{fontSize: 12,}}>* Sudah termasuk Asuransi & Pass Pelabuhan </Text>
                    </CardItem>
                </Body>
              </ListItem>   
 
              </View>
              </CollapseBody>
            </Collapse>

            <View style={{marginTop:5,backgroundColor:'#ffffff', alignItems:'center'}}>
            
              <CardItem style={{height:10}}>
                  <Text style={{fontSize: 13, color:'#000'}}>Kamu akan mendapatkan </Text>
                  <Icon name="ios-radio-button-on-outline" style={{marginLeft:10,fontSize:14, marginTop:3}} />
                  <Text style={{fontSize: 13, fontWeight: 'bold', color:'#000',marginLeft:-20}}> 50 Point</Text>
              </CardItem>
            </View>

            <ListItem style={{height:30,}}>
              <Text style={{fontSize: 14, fontWeight: 'bold',}}>Detail Penumpang </Text>
            </ListItem>

            
            
                    
 
          {
            this.state.jmlDewasa.map((item, key) => (
              <View key={key} style={styles.item}>
              <ListItem style={{height:65,}}>
              <Body>
              <TouchableOpacity key={key} onPress={this.showArrayItem.bind(this,item.id)}>
                 <Card style={{height:45,}}>
                  <CardItem style={{height:45,}}>
                  <Icon active name="ios-person-outline" />
                <Text style={{fontSize: 15,}}>Dewasa {key+1} {item.titel} {item.namaDepan} {item.namaBelakang}</Text>
                {
                    this.state.indikator?<Text style={{fontSize: 15,color:'red'}}>*</Text>:null
                }
                <Right>
                <Text style={{fontSize: 13, color:'#D3D3D3'}}>Isi Data</Text>
                
                </Right>
                </CardItem>
                </Card>
              </TouchableOpacity>
              </Body>
              </ListItem>
              </View>
            ))
          }
          {
            this.state.jmlAnak  .map((item, key) => (
              <View key={key} style={styles.item}>
              <ListItem style={{height:65,}}>
              <Body>
              <TouchableOpacity key={key} onPress={this.showArrayItem2.bind(this,item.id)}>
                 <View style={{height:45,}}>
                  <CardItem style={{height:45,}}>
                  <Icon active name="ios-person-outline" />
                <Text style={{fontSize: 15,}}>Anak {key+1} {item.namaDepan} {item.namaBelakang}</Text>
                <Right>
                  <Icon active name="ios-arrow-forward-outline" />
                    </Right>
                    </CardItem>
                          </View>
              </TouchableOpacity>
              </Body>
              </ListItem>
              </View>
            ))
          } 
        {
            this.state.jmlInfant  .map((item, key) => (
              <View key={key} style={styles.item}>
              <ListItem style={{height:65,}}>
              <Body>
              <TouchableOpacity key={key} onPress={this.showArrayItem3.bind(this,item.id)}>
                 <View style={{height:45,}}>
                  <CardItem style={{height:45,}}>
                  <Icon active name="ios-person-outline" />
                <Text style={{fontSize: 15,}}>Infant {key+1} {item.namaDepan} {item.namaBelakang}</Text>
                <Right>
                  <Icon active name="ios-arrow-forward-outline" />
                    </Right>
                    </CardItem>
                          </View>
              </TouchableOpacity>
              </Body>
              </ListItem>
              </View>
            ))
          } 
                 
        </Content>
        {
        this.state.tampilFooter?<Footer style={{backgroundColor:'#3F81B5'}}>
        
          <Button block onPress={this.cek} style={{width:'100%', backgroundColor:'#3F81B5', height:'100%'}}>
              <Text style={{color:'#ffffff'}}>Lanjut</Text>
              
            </Button>
        </Footer>:null
      }
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