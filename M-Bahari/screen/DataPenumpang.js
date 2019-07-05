import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Alert, TouchableOpacity, AsyncStorage, Picker} from 'react-native';
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
import Modal from "react-native-modal";
export default class Mynewproject extends Component {
static navigationOptions = {
    header:null
  }
  constructor()
    {
        super();
 
        this.state = 
          { 
            
            TextInputValue:'',
            Input1:false,
            Input2:false,
            Input3:false,
            Input4:false , 
            Input5:false ,
            Input6:false ,
            Input7:false ,
            Input8:false ,
            Input9:false ,
            Input10:false ,
            Input11:false ,
            Input12:false ,
            Input13:false ,
            Input14:false ,
            Input15:false ,
            Input16:false ,
            Input17:false ,
            Input18:false ,
            Input19:false ,
            Input20:false ,
            Input21:false ,
            Input22:false ,
            Input23:false ,
            Input24:false ,
            Input25:false ,
            NoPassport:false,
            Hide:true,
            btnInputPenumpang:true,
            btnLanjut:false,
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
            Nopassport:'',
            hargaTiketDewasa:'',
            hargaTiketAnak:'',
            hargaTiketInfant:'',
            totalHarga:'',
            result:0,
            result2:0
    
            
            
          }
          AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                   AsyncDewasa: resultParsed.AsyncDewasa,
                    AsyncAnak: resultParsed.AsyncAnak,
                    AsyncInfant: resultParsed.AsyncInfant,
                    AsyncKelas: resultParsed.AsyncKelas,
                    AsyncPDewasa4: resultParsed.AsyncPDewasa4, 
                    AsyncPDewasa5: resultParsed.AsyncPDewasa5,
                    AsyncPDewasa6: resultParsed.AsyncPDewasa6, 
                    AsyncPDewasa7: resultParsed.AsyncPDewasa7,
                    AsyncHargaVIP1:resultParsed.AsyncHargaVIP1,
                    AsyncHargaVIP2:resultParsed.AsyncHargaVIP2,
                    AsyncHargaEKS1:resultParsed.AsyncHargaEKS1,
                    AsyncHargaEKS2:resultParsed.AsyncHargaEKS2,
                    AsyncHargaBUS1:resultParsed.AsyncHargaBUS1,
                    AsyncHargaBUS2:resultParsed.AsyncHargaBUS2,
                    AsyncPassPelabuhan:resultParsed.AsyncPassPelabuhan,
                    AsyncAsuransi:resultParsed.AsyncAsuransi,
                    AsyncId:resultParsed.AsyncId,
                    AsyncTotalHarga:resultParsed.AsyncTotalHarga,
                    AsynctotalDewasa:resultParsed.AsynctotalDewasa,
                    AsynctotalAnak:resultParsed.AsynctotalAnak,
                    AsynctotalInfant:resultParsed.AsynctotalInfant,
                    AsyncPassPelabuhan:resultParsed.AsyncPassPelabuhan,
                    AsyncAsuransi:resultParsed.AsyncAsuransi,
                    AsynctextAnak:resultParsed.AsynctextAnak,
                    AsynctextInfant:resultParsed.AsynctextInfant,
                    AsyncRandomNumber:resultParsed.AsyncRandomNumber,
                    AsyncTotalAkhir:resultParsed.AsyncTotalAkhir,
                    AsyncKodeRute1:resultParsed.AsyncKodeRute1,
                    AsyncId:resultParsed.AsyncId,
                    AsyncTanggal:resultParsed.AsyncTanggal,
                    AsyncJenisTiket:resultParsed.AsyncJenisTiket,
                });
            }
        });
   }
 _toggleModal1 = () =>{
    
    this.setState({ isModalVisible1: !this.state.isModalVisible1 });
  }
   _toggleModal2 = () =>{
    
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });
  }
  _toggleModal3 = () =>{
    
    this.setState({ isModalVisible3: !this.state.isModalVisible3 });
  }
   _toggleModal4 = () =>{
    
    this.setState({ isModalVisible4: !this.state.isModalVisible4 });
  }
  _toggleModal5 = () =>{
    
    this.setState({ isModalVisible5: !this.state.isModalVisible5 });
  }
   _toggleModal6 = () =>{
    
    this.setState({ isModalVisible6: !this.state.isModalVisible6 });
  }
  _toggleModal7 = () =>{
    
    this.setState({ isModalVisible7: !this.state.isModalVisible7 });
  }
   _toggleModal8 = () =>{
    
    this.setState({ isModalVisible8: !this.state.isModalVisible8 });
  }
  _toggleModal9 = () =>{
    
    this.setState({ isModalVisible9: !this.state.isModalVisible9 });
  }
   _toggleModal10 = () =>{
    
    this.setState({ isModalVisible10: !this.state.isModalVisible10 });
  }
  _toggleModal11 = () =>{
    
    this.setState({ isModalVisible11: !this.state.isModalVisible11 });
  }
  _toggleModal12 = () =>{
    
    this.setState({ isModalVisible12: !this.state.isModalVisible12 });
  }
  _toggleModal13 = () =>{
    
    this.setState({ isModalVisible13: !this.state.isModalVisible13 });
  }
  _toggleModal14 = () =>{
    
    this.setState({ isModalVisible14: !this.state.isModalVisible14 });
  }
  _toggleModal15 = () =>{
    
    this.setState({ isModalVisible15: !this.state.isModalVisible15 });
  }
  _toggleModal16 = () =>{
    
    this.setState({ isModalVisible16: !this.state.isModalVisible16 });
  }
  _toggleModal17 = () =>{
    
    this.setState({ isModalVisible17: !this.state.isModalVisible17 });
  }
  _toggleModal18 = () =>{
    
    this.setState({ isModalVisible18: !this.state.isModalVisible18 });
  }
  _toggleModal19 = () =>{
    
    this.setState({ isModalVisible19: !this.state.isModalVisible19 });
  }
  _toggleModal20 = () =>{
    
    this.setState({ isModalVisible20: !this.state.isModalVisible20 });
  }
  _toggleModal21 = () =>{
    
    this.setState({ isModalVisible21: !this.state.isModalVisible21 });
  }
  _toggleModal22 = () =>{
    
    this.setState({ isModalVisible22: !this.state.isModalVisible22 });
  }
  _toggleModal23 = () =>{
    
    this.setState({ isModalVisible23: !this.state.isModalVisible23 });
  }
  _toggleModal24 = () =>{
    
    this.setState({ isModalVisible24: !this.state.isModalVisible24 });
  }
  _toggleModal25 = () =>{
    
    this.setState({ isModalVisible25: !this.state.isModalVisible25 });
  }
  
  Simple_If_Else=()=>{
    this.TotalAkhir()
    if(this.state.AsyncDewasa==1){
      this.setState({Input1:true})
    }
    if(this.state.AsyncAnak==1){
      this.setState({Input11:true})
    }
    if(this.state.AsyncInfant==1){
      this.setState({Input21:true})
    }
    if(this.state.AsyncDewasa==2){
      this.setState({Input2:true})
    }
    if(this.state.AsyncAnak==2){
      this.setState({Input12:true})
    }
    if(this.state.AsyncInfant==2){
      this.setState({Input22:true})
    }
    if(this.state.AsyncDewasa==3){
      this.setState({Input3:true})
    }
    if(this.state.AsyncAnak==3){
      this.setState({Input13:true})
    }
    if(this.state.AsyncInfant==3){
      this.setState({Input23:true})
    }
    if(this.state.AsyncDewasa==4){
      this.setState({Input4:true})
    }
    if(this.state.AsyncAnak==4){
      this.setState({Input14:true})
    }
    if(this.state.AsyncInfant==4){
      this.setState({Input24:true})
    }
    if(this.state.AsyncDewasa==5){
      this.setState({Input5:true})
    }
    if(this.state.AsyncAnak==5){
      this.setState({Input15:true})
    }
    if(this.state.AsyncInfant==5){
      this.setState({Input25:true})
    }
    if(this.state.AsyncDewasa==6){
      this.setState({Input6:true})
    }
    if(this.state.AsyncAnak==6){
      this.setState({Input16:true})
    }
    if(this.state.AsyncDewasa==7){
      this.setState({Input7:true})
    }
    if(this.state.AsyncAnak==7){
      this.setState({Input17:true})
    }
    if(this.state.AsyncDewasa==8){
      this.setState({Input8:true})
    }
    if(this.state.AsyncAnak==8){
      this.setState({Input18:true})
    }
    if(this.state.AsyncDewasa==9){
      this.setState({Input9:true})
    }
    if(this.state.AsyncAnak==9){
      this.setState({Input19:true})
    }
    if(this.state.AsyncDewasa==10){
      this.setState({Input10:true})
    }
    if(this.state.AsyncAnak==10){
      this.setState({Input20:true})
    }
  }
 saveData = () =>{
        
        let AsyncPDewasa1 = this.state.InputDewasa1;
        let AsyncPDewasa2 = this.state.InputDewasa2;
        let AsyncPDewasa3 = this.state.InputDewasa3;
        let AsyncPDewasa4 = this.state.InputDewasa4;
        let AsyncPDewasa5 = this.state.InputDewasa5;
        let AsyncPDewasa6 = this.state.InputDewasa6;
        let AsyncPDewasa7 = this.state.InputDewasa7;
        let AsyncPDewasa8 = this.state.InputDewasa8;
        let AsyncPDewasa9 = this.state.InputDewasa9;
        let AsyncPDewasa10 = this.state.InputDewasa10;
        let AsyncPAnak1 = this.state.InputAnak1;
        let AsyncPAnak2 = this.state.InputAnak2;
        let AsyncPAnak3 = this.state.InputAnak3;
        let AsyncPAnak4 = this.state.InputAnak4;
        let AsyncPAnak5 = this.state.InputAnak5;
        let AsyncPAnak6 = this.state.InputAnak6;
        let AsyncPAnak7 = this.state.InputAnak7;
        let AsyncPAnak8 = this.state.InputAnak8;
        let AsyncPAnak9 = this.state.InputAnak9;
        let AsyncPAnak10 = this.state.InputAnak10;
        let AsyncPInfant1 = this.state.InputInfant1;
        let AsyncPInfant2 = this.state.InputInfant2;
        let AsyncPInfant3 = this.state.InputInfant3;
        let AsyncPInfant4 = this.state.InputInfant4;
        let AsyncPInfant5 = this.state.InputInfant5;
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
        let AsyncTotalHarga = this.state.AsyncTotalHarga;
        let AsyncTotalAkhir = this.state.totalAkhir;
        let AsyncKelas = this.state.AsyncKelas;
        let AsyncKodeRute1 = this.state.AsyncKodeRute1;
        let AsyncId = this.state.AsyncId;
        let AsyncTanggal = this.state.AsyncTanggal;
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
        let data = {
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
            AsyncKelas:AsyncKelas,
            AsyncTotalHarga:AsyncTotalHarga,
            AsyncTotalAkhir:AsyncTotalAkhir,
            AsyncKodeRute1:AsyncKodeRute1,
            AsyncId:AsyncId,
            AsyncTanggal:AsyncTanggal,
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
        }

        AsyncStorage.setItem('user', JSON.stringify(data));

        this.setState({
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
            AsyncKelas:AsyncKelas,
            AsyncTotalHarga:AsyncTotalHarga,
            AsyncTotalAkhir:AsyncTotalAkhir,
            AsyncKodeRute1:AsyncKodeRute1,
            AsyncId:AsyncId,
            AsyncTanggal:AsyncTanggal,
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
      this.props.navigation.navigate('DetailPenumpang')
    }
cekKewarganegaraan(){
  if(this.state.Kewarganegaraan == "WNA"){
     this.setState({NoPassport: true})
  }
  else{
   this.setState({NoPassport: false}) 
  }
}
 
HitungTotalX(){
  if(this.state.AsyncAnak==null && this.state.AsyncInfant==null)
  {
    this.setState({totalHarga : parseInt(this.state.AsynctotalDewasa)  + parseInt(this.state.AsyncAsuransi) + parseInt(this.state.AsyncPassPelabuhan) });
  }
  else if(this.state.AsyncAnak!=null && this.state.AsyncInfant==null){
    this.setState({totalHarga : parseInt(this.state.AsynctotalDewasa) + parseInt(this.state.AsynctotalAnak) + parseInt(this.state.AsyncPassPelabuhan) + parseInt(this.state.AsyncAsuransi) });
  }
  else if(this.state.AsyncAnak==null && this.state.AsyncInfant!=null){
   this.setState({totalHarga : parseInt(this.state.AsynctotalDewasa) + parseInt(this.state.AsyncInfant) }); 
  }
}

TotalAkhir(){
  this.setState({totalAkhir : parseInt(this.state.AsyncTotalHarga) + parseInt(this.state.AsyncRandomNumber) });
  if(this.state.btnInputPenumpang==true){
  this.setState({btnInputPenumpang:false});
  this.setState({btnLanjut:true});
}
}

TampilAlert = () => {
   
     Alert.alert(
    'Warning',
    'Silahakan isi data penumpang terlebih dahulu',
    [
      {text: 'Close', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      
    ],
    { cancelable: false });
    return true;
}

 render() {

   return (
    <Container>
        <Header style={{backgroundColor:'#0D2E57',}}>
         <View style={styles.view}>
          <Left>
            <Button transparent style={{marginTop:15, marginLeft:50,}}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,}}>Penumpang</Title>
          </View>
         </Header>
         <Content>
          <ListItem>
           <Body>
            <Card>
              <CardItem style={{height:30,}}>
                <Text style={{fontSize: 16,}}>Rincian Harga :</Text>
              </CardItem>
              <ListItem style={{height:20,}}>
                <Body>
                    <CardItem>
                        <Text style={{fontSize: 15,}}>Kelas {this.state.AsyncKelas}</Text>
                    </CardItem>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                    <CardItem style={{height:10, marginTop:-15}}>
                        <Text style={{fontSize: 14,}}>Dewasa</Text>
                        <Text>     </Text>
                        <Text style={{fontSize: 14,}}>{this.state.AsyncDewasa} x</Text>

                        <Right>
                        <Text style={{fontSize: 14,}}>Rp. {this.state.AsynctotalDewasa}.-</Text>
                        </Right>
                    </CardItem>
                    { this.state.AsynctextAnak? <CardItem style={{height:10,}}>
                        <Text style={{fontSize: 14,}}>Anak</Text>
                        <Text>          </Text>
                        <Text style={{fontSize: 14,}}>{this.state.AsyncAnak} x</Text>

                        <Right>
                        <Text style={{fontSize: 14,}}>Rp. {this.state.AsynctotalAnak}.-</Text>
                        </Right>
                    </CardItem>:null
                  }
                    { this.state.AsynctextInfant?<CardItem style={{height:10,}}>
                        <Text style={{fontSize: 14,}}>Infant</Text>
                        <Text>         </Text>
                        <Text style={{fontSize: 14,}}>{this.state.AsyncInfant} x</Text>

                        <Right>
                        <Text style={{fontSize: 14,}}>Rp. {this.state.AsynctotalInfant}.-</Text>
                        </Right>
                    </CardItem>:null
                  }
                </Body>
              </ListItem>
              <ListItem style={{height:20,}}> 
                <Body>
                    <CardItem>
                        <Text style={{fontSize: 18, fontWeight: 'bold',}}>Total</Text>
                        <Right>
                        <Text style={{fontSize: 18, fontWeight: 'bold',}}>       Rp. {this.state.AsyncTotalHarga}.-</Text>
                    </Right>
                    </CardItem>
                </Body>
              </ListItem> 
              <ListItem style={{height:30,}}>
                <Body>
                    <CardItem>
                        <Text style={{fontSize: 12,}}>* Sudah termasuk Asuransi & Pass Pelabuhan</Text>
                    </CardItem>
                </Body>
              </ListItem>   
              </Card>
           </Body>
          </ListItem>
          
          { this.state.btnInputPenumpang?
          <ListItem>
            <Body>
              <Button onPress={this.Simple_If_Else}full style={{backgroundColor:'#0D2E57'}}>
                <Text>Input Nama Penumpang</Text>
              </Button>
             </Body>
           </ListItem> :null
        }
        
            
         <View>   
          <View>

            <Button title='Input Data' onPress={this.Simple_If_Else} />
            
          </View>
      <Modal transparent={true} backdropColor='white' isVisible={this.state.isModalVisible1}>
          <View style={{ flex: 1 }}>
            <Card>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputDewasa1: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelamin1}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelamin1: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Pria" value="Pria" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.Kewarganegaraan1}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({Kewarganegaraan1: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatDewasa1: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurDewasa1: text })} } 
            />
            </Card>
             <Button onPress={this._toggleModal1}full style={{backgroundColor:'#0D2E57'}}>
                <Text>Simpan</Text>
            </Button>
           
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible2}>
          <View style={{ flex: 1 }}>
          <Card>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputDewasa2: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelamin2}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelamin2: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.Kewarganegaraan2}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({Kewarganegaraan2: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatDewasa2: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurDewasa2: text })} } 
            />
            </Card>
             <Button onPress={this._toggleModal2}full style={{backgroundColor:'#0D2E57'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible3}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputDewasa3: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelamin3}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelamin3: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.Kewarganegaraan3}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({Kewarganegaraan3: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatDewasa3: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurDewasa3: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal3}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible4}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputDewasa4: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelamin4}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelamin4: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.Kewarganegaraan4}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({Kewarganegaraan4: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatDewasa4: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurDewasa4: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal4}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible5}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputDewasa5: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelamin5}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelamin5: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.Kewarganegaraan5}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({Kewarganegaraan5: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatDewasa5: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurDewasa5: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal5}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible6}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputDewasa6: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelamin6}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelamin6: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.Kewarganegaraan6}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({Kewarganegaraan6: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatDewasa6: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurDewasa6: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal5}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible7}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputDewasa7: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelamin7}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelamin7: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.Kewarganegaraan7}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({Kewarganegaraan7: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatDewasa7: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            keyboardType={'numeric'}
            placeholder="Umur"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurDewasa7: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal7}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible8}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputDewasa8: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelamin8}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelamin8: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.Kewarganegaraan8}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({Kewarganegaraan8: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatDewasa8: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurDewasa8: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal8}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible9}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputDewasa9: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelamin9}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelamin9: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.Kewarganegaraan9}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({Kewarganegaraan9: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatDewasa9: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurDewasa9: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal9}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible10}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputDewasa10: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelamin10}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelamin10: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.Kewarganegaraan10}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({Kewarganegaraan10: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatDewasa10: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurDewasa10: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal10}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    

    <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible11}>
          <View style={{ flex: 1 }}>
            
            <Card>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAnak1: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelaminAnak1}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelaminAnak1: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.KewarganegaraanAnak1}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({KewarganegaraanAnak1: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatAnak1: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurAnak1: text })} } 
            />
            </Card>
             <Button onPress={this._toggleModal11}full style={{backgroundColor:'#0D2E57'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </Modal>
<Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible12}>
          <View style={{ flex: 1 }}>
            <Card>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAnak2: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelaminAnak2}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelaminAnak2: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.KewarganegaraanAnak2}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({KewarganegaraanAnak2: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatAnak2: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            style = { styles.TextInputStyle } 
            keyboardType={'numeric'}
            onChangeText = { ( text ) => { this.setState({ InputUmurAnak2: text })} } 
            />
            </Card>
            <Button onPress={this._toggleModal12}full style={{backgroundColor:'#0D2E57'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </Modal>
<Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible13}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAnak3: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelaminAnak3}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelaminAnak3: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.KewarganegaraanAnak3}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({KewarganegaraanAnak3: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatAnak3: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurAnak3: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal13}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
<Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible14}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAnak4: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelaminAnak4}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelaminAnak4: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.KewarganegaraanAnak4}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({KewarganegaraanAnak4: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatAnak4: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurAnak4: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal14}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
<Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible15}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAnak5: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelaminAnak5}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelaminAnak5: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.KewarganegaraanAnak5}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({KewarganegaraanAnak5: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatAnak5: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurAnak5: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal15}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible16}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAnak6: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelaminAnak6}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelaminAnak6: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.KewarganegaraanAnak6}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({KewarganegaraanAnak6: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatAnak6: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            style = { styles.TextInputStyle } 
            keyboardType={'numeric'}
            onChangeText = { ( text ) => { this.setState({ InputUmurAnak6: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal16}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible17}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAnak7: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelaminAnak7}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelaminAnak7: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.KewarganegaraanAnak7}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({KewarganegaraanAnak7: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatAnak7: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurAnak7: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal17}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
<Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible18}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAnak8: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelaminAnak8}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelaminAnak8: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.KewarganegaraanAnak8}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({KewarganegaraanAnak8: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatAnak8: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurAnak8: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal18}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible19}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAnak9: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelaminAnak9}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelaminAnak9: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.KewarganegaraanAnak9}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({KewarganegaraanAnak9: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatAnak9: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurAnak9: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal19}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible20}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAnak10: text })} } 
            />
            <Picker
               selectedValue={this.state.JenisKelaminAnak10}
               placeholder="Jenis Kelamin"
               onValueChange={(itemValue, itemIndex) => this.setState({JenisKelaminAnak10: itemValue})} >
                <Picker.Item label="Pilih Jenis Kelamin" value="" />
                <Picker.Item label="Laki-Laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Picker
               selectedValue={this.state.KewarganegaraanAnak10}
               placeholder="Kewarganegaraan"
               onValueChange={(itemValue, itemIndex) => this.setState({KewarganegaraanAnak10: itemValue})} >
                <Picker.Item label="Pilih Kewarganegraan" value="" />
                <Picker.Item label="WNI" value="WNI" />
                <Picker.Item label="WNA" value="WNA" />
            </Picker>
            {
              this.state.NoPassport?
              <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="No Passport"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ Nopassport: text })} } 
            />:null
            }
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Alamat"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputAlamatAnak10: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurAnak10: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal20}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>


<Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible21}>
          <View style={{ flex: 1 }}>
          <Card>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputInfant1: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurInfant1: text })} } 
            />
            </Card>
            <Button onPress={this._toggleModal21}full style={{backgroundColor:'#0D2E57'}}>
                <Text>Simpan</Text>
            </Button>
          </View>
        </Modal>
<Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible22}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputInfant2: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurInfant2: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal22}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
<Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible23}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputInfant3: text })} } 
            />
            
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurInfant3: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal23}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
<Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible24}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputInfant4: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurInfant4: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal24}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
<Modal transparent={false} backdropColor='white' isVisible={this.state.isModalVisible25}>
          <View style={{ flex: 1 }}>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Nama"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputInfant25: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Umur"
            keyboardType={'numeric'}
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputUmurInfant5: text })} } 
            />
            <TouchableOpacity onPress={this._toggleModal25}>
              <Text>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>





{
    this.state.Input1 ?
    <ListItem style={{height:75,}}>
    <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal1}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Dewasa 1 :</Text>
                        <Text> {this.state.InputDewasa1}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                </Card>
                </Body>
                </ListItem>: null
}
{
    this.state.Input2 ?
    <View>
               <ListItem style={{height:75,}}>
                <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal1}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Dewasa 1 :</Text>
                        <Text> {this.state.InputDewasa1}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                    </Card>
                </Body>
                </ListItem>

                < ListItem style={{height:75,}}>
                <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal2}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Dewasa 2 :</Text>
                        <Text> {this.state.InputDewasa2}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                    </Card>
                </Body>
                </ListItem>
                </View>: null
}
{
    this.state.Input3 ?
    <View>
               <ListItem style={{height:75,}}>
                <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal1}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Dewasa 1 :</Text>
                        <Text> {this.state.InputDewasa1}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                    </Card>
                </Body>
                </ListItem>

                < ListItem style={{height:75,}}>
                <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal2}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Dewasa 2 :</Text>
                        <Text> {this.state.InputDewasa2}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                    </Card>
                </Body>
                </ListItem>

                < ListItem style={{height:75,}}>
                <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal3}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Dewasa 3 :</Text>
                        <Text> {this.state.InputDewasa2}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                    </Card>
                </Body>
                </ListItem>
                </View>: null
}


{
    this.state.Input4 ?<View>
        <TouchableOpacity onPress={this._toggleModal1}>
          <Text>Data Penumpang Dewasa 1</Text>
          <Text>{this.state.InputDewasa1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal2}>
          <Text>Data Penumpang Dewasa 2</Text>
          <Text>{this.state.InputDewasa2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal3}>
          <Text>Data Penumpang Dewasa 3</Text>
          <Text>{this.state.InputDewasa3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal4}>
          <Text>Data Penumpang Dewasa 4</Text>
          <Text>{this.state.InputDewasa4}</Text>
        </TouchableOpacity>
    </View>: null
  }

{
    this.state.Input5 ?<View>
    <TouchableOpacity onPress={this._toggleModal1}>
          <Text>Data Penumpang Dewasa 1</Text>
          <Text>{this.state.InputDewasa1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal2}>
          <Text>Data Penumpang Dewasa 2</Text>
          <Text>{this.state.InputDewasa2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal3}>
          <Text>Data Penumpang Dewasa 3</Text>
          <Text>{this.state.InputDewasa3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal4}>
          <Text>Data Penumpang Dewasa 4</Text>
          <Text>{this.state.InputDewasa4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal5}>
          <Text>Data Penumpang Dewasa 5</Text>
          <Text>{this.state.InputDewasa5}</Text>
        </TouchableOpacity>
    </View>: null
  }

{
    this.state.Input6 ?<View>
    <TouchableOpacity onPress={this._toggleModal1}>
          <Text>Data Penumpang Dewasa 1</Text>
          <Text>{this.state.InputDewasa1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal2}>
          <Text>Data Penumpang Dewasa 2</Text>
          <Text>{this.state.InputDewasa2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal3}>
          <Text>Data Penumpang Dewasa 3</Text>
          <Text>{this.state.InputDewasa3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal4}>
          <Text>Data Penumpang Dewasa 4</Text>
          <Text>{this.state.InputDewasa4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal5}>
          <Text>Data Penumpang Dewasa 5</Text>
          <Text>{this.state.InputDewasa5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal6}>
          <Text>Data Penumpang Dewasa 6</Text>
          <Text>{this.state.InputDewasa6}</Text>
        </TouchableOpacity>
    </View>: null
  }
  {
    this.state.Input7 ?<View>
    <TouchableOpacity onPress={this._toggleModal1}>
          <Text>Data Penumpang Dewasa 1</Text>
          <Text>{this.state.InputDewasa1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal2}>
          <Text>Data Penumpang Dewasa 2</Text>
          <Text>{this.state.InputDewasa2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal3}>
          <Text>Data Penumpang Dewasa 3</Text>
          <Text>{this.state.InputDewasa3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal4}>
          <Text>Data Penumpang Dewasa 4</Text>
          <Text>{this.state.InputDewasa4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal5}>
          <Text>Data Penumpang Dewasa 5</Text>
          <Text>{this.state.InputDewasa5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal6}>
          <Text>Data Penumpang Dewasa 6</Text>
          <Text>{this.state.InputDewasa6}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal7}>
          <Text>Data Penumpang Dewasa 7</Text>
          <Text>{this.state.InputDewasa7}</Text>
        </TouchableOpacity>
    </View>: null
  }
{
    this.state.Input8 ?<View>
    <TouchableOpacity onPress={this._toggleModal1}>
          <Text>Data Penumpang Dewasa 1</Text>
          <Text>{this.state.InputDewasa1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal2}>
          <Text>Data Penumpang Dewasa 2</Text>
          <Text>{this.state.InputDewasa2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal3}>
          <Text>Data Penumpang Dewasa 3</Text>
          <Text>{this.state.InputDewasa3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal4}>
          <Text>Data Penumpang Dewasa 4</Text>
          <Text>{this.state.InputDewasa4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal5}>
          <Text>Data Penumpang Dewasa 5</Text>
          <Text>{this.state.InputDewasa5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal6}>
          <Text>Data Penumpang Dewasa 6</Text>
          <Text>{this.state.InputDewasa6}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal7}>
          <Text>Data Penumpang Dewasa 7</Text>
          <Text>{this.state.InputDewasa7}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal8}>
          <Text>Data Penumpang Dewasa 8</Text>
          <Text>{this.state.InputDewasa8}</Text>
        </TouchableOpacity>
    </View>: null
  }
  {
    this.state.Input9 ?<View>
    <TouchableOpacity onPress={this._toggleModal1}>
          <Text>Data Penumpang Dewasa 1</Text>
          <Text>{this.state.InputDewasa1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal2}>
          <Text>Data Penumpang Dewasa 2</Text>
          <Text>{this.state.InputDewasa2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal3}>
          <Text>Data Penumpang Dewasa 3</Text>
          <Text>{this.state.InputDewasa3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal4}>
          <Text>Data Penumpang Dewasa 4</Text>
          <Text>{this.state.InputDewasa4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal5}>
          <Text>Data Penumpang Dewasa 5</Text>
          <Text>{this.state.InputDewasa5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal6}>
          <Text>Data Penumpang Dewasa 6</Text>
          <Text>{this.state.InputDewasa6}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal7}>
          <Text>Data Penumpang Dewasa 7</Text>
          <Text>{this.state.InputDewasa7}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal8}>
          <Text>Data Penumpang Dewasa 8</Text>
          <Text>{this.state.InputDewasa8}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal9}>
          <Text>Data Penumpang Dewasa 9</Text>
          <Text>{this.state.InputDewasa9}</Text>
        </TouchableOpacity>
    </View>: null
  }
  {
    this.state.Input10 ?<View>
    <TouchableOpacity onPress={this._toggleModal1}>
          <Text>Data Penumpang Dewasa 1</Text>
          <Text>{this.state.InputDewasa1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal2}>
          <Text>Data Penumpang Dewasa 2</Text>
          <Text>{this.state.InputDewasa2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal3}>
          <Text>Data Penumpang Dewasa 3</Text>
          <Text>{this.state.InputDewasa3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal4}>
          <Text>Data Penumpang Dewasa 4</Text>
          <Text>{this.state.InputDewasa4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal5}>
          <Text>Data Penumpang Dewasa 5</Text>
          <Text>{this.state.InputDewasa5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal6}>
          <Text>Data Penumpang Dewasa 6</Text>
          <Text>{this.state.InputDewasa6}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal7}>
          <Text>Data Penumpang Dewasa 7</Text>
          <Text>{this.state.InputDewasa7}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal8}>
          <Text>Data Penumpang Dewasa 8</Text>
          <Text>{this.state.InputDewasa8}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal9}>
          <Text>Data Penumpang Dewasa 9</Text>
          <Text>{this.state.InputDewasa9}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal10}>
          <Text>Data Penumpang Dewasa 10</Text>
          <Text>{this.state.InputDewasa10}</Text>
        </TouchableOpacity>
    </View>: null
  }



{
    this.state.Input11 ?
    <ListItem style={{height:75,}}>
    <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal11}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Anak 1 :</Text>
                        <Text> {this.state.InputAnak1}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                </Card>
                </Body>
                </ListItem>: null
}
{
    this.state.Input12 ?
    <View>
               <ListItem style={{height:75,}}>
                <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal11}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Anak 1 :</Text>
                        <Text> {this.state.InputAnak1}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                    </Card>
                </Body>
                </ListItem>

                < ListItem style={{height:75,}}>
                <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal12}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Anak 2 :</Text>
                        <Text> {this.state.InputAnak2}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                    </Card>
                </Body>
                </ListItem>
                </View>: null
}

{
    this.state.Input13 ?<View>
            <TouchableOpacity onPress={this._toggleModal11}>
          <Text>Data Penumpang Anak 1</Text>
          <Text>{this.state.InputAnak1}</Text>
        </TouchableOpacity>
            <TouchableOpacity onPress={this._toggleModal12}>
          <Text>Data Penumpang Anak 2</Text>
          <Text>{this.state.InputAnak2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal13}>
          <Text>Data Penumpang Anak 3</Text>
          <Text>{this.state.InputAnak3}</Text>
        </TouchableOpacity>
    </View>: null
}
  {
    this.state.Input14 ?<View>
        <TouchableOpacity onPress={this._toggleModal11}>
          <Text>Data Penumpang Anak 1</Text>
          <Text>{this.state.InputAnak1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal12}>
          <Text>Data Penumpang Anak 2</Text>
          <Text>{this.state.InputAnak2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal13}>
          <Text>Data Penumpang Anak 3</Text>
          <Text>{this.state.InputAnak3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal14}>
          <Text>Data Penumpang Anak 4</Text>
          <Text>{this.state.InputAnak4}</Text>
        </TouchableOpacity>
    </View>: null
  }
  {
    this.state.Input15 ?<View>
    <TouchableOpacity onPress={this._toggleModal11}>
          <Text>Data Penumpang Anak 1</Text>
          <Text>{this.state.InputAnak1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal12}>
          <Text>Data Penumpang Anak 2</Text>
          <Text>{this.state.InputAnak2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal13}>
          <Text>Data Penumpang Anak 3</Text>
          <Text>{this.state.InputAnak3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal14}>
          <Text>Data Penumpang Anak 4</Text>
          <Text>{this.state.InputAnak4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal15}>
          <Text>Data Penumpang Anak 5</Text>
          <Text>{this.state.InputAnak5}</Text>
        </TouchableOpacity>
    </View>: null
  }
  {
    this.state.Input16 ?<View>
    <TouchableOpacity onPress={this._toggleModal11}>
          <Text>Data Penumpang Anak 1</Text>
          <Text>{this.state.InputAnak1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal12}>
          <Text>Data Penumpang Anak 2</Text>
          <Text>{this.state.InputAnak2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal13}>
          <Text>Data Penumpang Anak 3</Text>
          <Text>{this.state.InputAnak3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal14}>
          <Text>Data Penumpang Anak 4</Text>
          <Text>{this.state.InputAnak4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal15}>
          <Text>Data Penumpang Anak 5</Text>
          <Text>{this.state.InputAnak5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal16}>
          <Text>Data Penumpang Anak 6</Text>
          <Text>{this.state.InputAnak6}</Text>
        </TouchableOpacity>
    </View>: null
  }
    {
    this.state.Input17 ?<View>
    <TouchableOpacity onPress={this._toggleModal11}>
          <Text>Data Penumpang Anak 1</Text>
          <Text>{this.state.InputAnak1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal12}>
          <Text>Data Penumpang Anak 2</Text>
          <Text>{this.state.InputAnak2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal13}>
          <Text>Data Penumpang Anak 3</Text>
          <Text>{this.state.InputAnak3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal14}>
          <Text>Data Penumpang Anak 4</Text>
          <Text>{this.state.InputAnak4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal15}>
          <Text>Data Penumpang Anak 5</Text>
          <Text>{this.state.InputAnak5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal16}>
          <Text>Data Penumpang Anak 6</Text>
          <Text>{this.state.InputAnak6}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal17}>
          <Text>Data Penumpang Anak 7</Text>
          <Text>{this.state.InputAnak7}</Text>
        </TouchableOpacity>
    </View>: null
  }
  {
    this.state.Input18 ?<View>
    <TouchableOpacity onPress={this._toggleModal11}>
          <Text>Data Penumpang Anak 1</Text>
          <Text>{this.state.InputAnak1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal12}>
          <Text>Data Penumpang Anak 2</Text>
          <Text>{this.state.InputAnak2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal13}>
          <Text>Data Penumpang Anak 3</Text>
          <Text>{this.state.InputAnak3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal14}>
          <Text>Data Penumpang Anak 4</Text>
          <Text>{this.state.InputAnak4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal15}>
          <Text>Data Penumpang Anak 5</Text>
          <Text>{this.state.InputAnak5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal16}>
          <Text>Data Penumpang Anak 6</Text>
          <Text>{this.state.InputAnak6}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal17}>
          <Text>Data Penumpang Anak 7</Text>
          <Text>{this.state.InputAnak7}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal18}>
          <Text>Data Penumpang Anak 8</Text>
          <Text>{this.state.InputAnak8}</Text>
        </TouchableOpacity>
    </View>: null
  } 
  {
    this.state.Input19 ?<View>
    <TouchableOpacity onPress={this._toggleModal11}>
          <Text>Data Penumpang Anak 1</Text>
          <Text>{this.state.InputAnak1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal12}>
          <Text>Data Penumpang Anak 2</Text>
          <Text>{this.state.InputAnak2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal13}>
          <Text>Data Penumpang Anak 3</Text>
          <Text>{this.state.InputAnak3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal14}>
          <Text>Data Penumpang Anak 4</Text>
          <Text>{this.state.InputAnak4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal15}>
          <Text>Data Penumpang Anak 5</Text>
          <Text>{this.state.InputAnak5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal16}>
          <Text>Data Penumpang Anak 6</Text>
          <Text>{this.state.InputAnak6}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal17}>
          <Text>Data Penumpang Anak 7</Text>
          <Text>{this.state.InputAnak7}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal18}>
          <Text>Data Penumpang Anak 8</Text>
          <Text>{this.state.InputAnak8}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal19}>
          <Text>Data Penumpang Anak 9</Text>
          <Text>{this.state.InputAnak9}</Text>
        </TouchableOpacity>
    </View>: null
  }
  {
    this.state.Input20 ?<View>
    <TouchableOpacity onPress={this._toggleModal11}>
          <Text>Data Penumpang Anak 1</Text>
          <Text>{this.state.InputAnak1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal12}>
          <Text>Data Penumpang Anak 2</Text>
          <Text>{this.state.InputAnak2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal13}>
          <Text>Data Penumpang Anak 3</Text>
          <Text>{this.state.InputAnak3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal14}>
          <Text>Data Penumpang Anak 4</Text>
          <Text>{this.state.InputAnak4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal15}>
          <Text>Data Penumpang Anak 5</Text>
          <Text>{this.state.InputAnak5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal16}>
          <Text>Data Penumpang Anak 6</Text>
          <Text>{this.state.InputAnak6}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal17}>
          <Text>Data Penumpang Anak 7</Text>
          <Text>{this.state.InputAnak7}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal18}>
          <Text>Data Penumpang Anak 8</Text>
          <Text>{this.state.InputAnak8}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal19}>
          <Text>Data Penumpang Anak 9</Text>
          <Text>{this.state.InputAnak9}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal20}>
          <Text>Data Penumpang Anak 10</Text>
          <Text>{this.state.InputAnak10}</Text>
        </TouchableOpacity>
    </View>: null
  }
 

{
    this.state.Input21 ?
    <ListItem style={{height:75,}}>
    <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal21}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Infant 1 :</Text>
                        <Text> {this.state.InputInfant1}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                </Card>
                </Body>
                </ListItem>: null
}
{
    this.state.Input22 ?
    <View>
               <ListItem style={{height:75,}}>
                <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal21}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Infant 1 :</Text>
                        <Text> {this.state.InputInfant1}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                    </Card>
                </Body>
                </ListItem>

                < ListItem style={{height:75,}}>
                <Body>
                <Card>
                  <TouchableOpacity onPress={this._toggleModal22}>
                    <CardItem>
                        <Icon active name="ios-person-outline" />
                        <Text style={{fontSize: 16,}}>Infant 2 :</Text>
                        <Text> {this.state.InputInfant2}</Text>
                        <Right>
                            <Icon active name="ios-arrow-forward-outline" />
                        </Right>
                    </CardItem>
                    </TouchableOpacity>
                    </Card>
                </Body>
                </ListItem>
                </View>: null
}

{
    this.state.Input23 ?<View>
            <TouchableOpacity onPress={this._toggleModal21}>
          <Text>Data Penumpang Infant 1</Text>
          <Text>{this.state.InputInfant1}</Text>
        </TouchableOpacity>
            <TouchableOpacity onPress={this._toggleModal22}>
          <Text>Data Penumpang Infant 2</Text>
          <Text>{this.state.InputInfant2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal23}>
          <Text>Data Penumpang Infant 3</Text>
          <Text>{this.state.InputInfant3}</Text>
        </TouchableOpacity>
    </View>: null
}
  {
    this.state.Input24 ?<View>
        <TouchableOpacity onPress={this._toggleModal21}>
          <Text>Data Penumpang Infant 1</Text>
          <Text>{this.state.InputInfant1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal22}>
          <Text>Data Penumpang Infant 2</Text>
          <Text>{this.state.InputInfant2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal23}>
          <Text>Data Penumpang Infant 3</Text>
          <Text>{this.state.InputInfant3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal24}>
          <Text>Data Penumpang Infant 4</Text>
          <Text>{this.state.InputInfant4}</Text>
        </TouchableOpacity>
    </View>: null
  }
  {
    this.state.Input25 ?<View>
    <TouchableOpacity onPress={this._toggleModal21}>
          <Text>Data Penumpang Infant 1</Text>
          <Text>{this.state.InputInfant1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal22}>
          <Text>Data Penumpang Infant 2</Text>
          <Text>{this.state.InputInfant2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal23}>
          <Text>Data Penumpang Infant 3</Text>
          <Text>{this.state.InputInfant3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal24}>
          <Text>Data Penumpang Infant 4</Text>
          <Text>{this.state.InputInfant4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal25}>
          <Text>Data Penumpang Infant 5</Text>
          <Text>{this.state.InputInfant5}</Text>
        </TouchableOpacity>
    </View>: null
  }
  
    
      </View>
      </Content>
    {
    this.state.btnLanjut ?
      <Footer style={{backgroundColor:'#0D2E57'}}>
          <Button onPress={this.saveData} transparent>
              <Text style={{color:'#ffffff'}}>Lanjut</Text>
              
            </Button>
        </Footer>: null
        }
 </Container>
           
   );
 }
}
 
const styles = StyleSheet.create({
 
  MainContainer :{
      
      flex:1,
      justifyContent: 'center',
      padding: 10,
  
  },

  TextInputStyle:
    {
      width: '100%',
      borderWidth: 1,
      borderColor: '#009688',
      height: 40,
      borderRadius: 10,
      marginBottom: 10,
      textAlign: 'center',
    }
 
});