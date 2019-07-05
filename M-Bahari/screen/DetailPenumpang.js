import React, { Component } from 'react';
import { AppRegistry, AsyncStorage,  StyleSheet, Text, TextInput, View, ActivityIndicator, Alert,ListView, TouchableOpacity} from 'react-native';
import { Picker, Radio, ListItem, Left,Right,Container, Header,Content, Button, Title } from "native-base";

export default class tutorialAsyncStorage extends Component {
    static navigationOptions = {
    header:null
  }
    constructor() {

        super();
        this.state = {
            
            
            textNo: '1119',
            textidBank:'1',
            textNama:'',
            textKelas:'',

            ActivityIndicator_Loading: false, 
        };
        AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                   
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
                    AsyncTotalHarga:resultParsed.AsyncTotalHarga,
                    AsyncKodeRute1:resultParsed.AsyncKodeRute1,
                    AsyncId:resultParsed.AsyncId,
                    AsyncTanggal:resultParsed.AsyncTanggal,
                    AsyncKelas:resultParsed.AsyncAsyncKelas,
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

                });
            }
        });
    }

UserRegistrationFunction = () =>{


  fetch('http://u392337208.hostingerapp.com/User_Project/detailpemesan.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      
      nama: this.state.AsyncPDewasa1    ,
      domisili:this.state.AsyncAlamat1,
      umur:this.state.AsyncUmurDewasa1,
      jenis_kelamin:this.state.AsyncJenisKelamin1,
      kwn:this.state.AsyncKewarganegaraan1,
      kelas: this.state.AsyncKelas ,
      biaya:this.state.AsyncHargaVIP1,
      asuransi:this.state.AsyncAsuransi,
      pass_pelabuhan:this.state.AsyncPassPelabuhan,


    
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
         
          
         
          
        }).catch((error) => {
          console.error(error);
        });
  if(this.state.AsyncPDewasa2!=null){
    this.UserRegistrationFunction2()
  }
  else{
     this.props.navigation.navigate('Transfer')
  }
}
UserRegistrationFunction2 = () =>{
  const { textNo }  = this.state ;
 const { textNama }  = this.state.AsyncPDewasa2  ;
 const { textKelas }  = this.state.AsyncKelas    ;
 


  fetch('http://192.168.10.37/User_Project/detailpemesan.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      nama: this.state.AsyncPDewasa2    ,
      domisili:this.state.AsyncAlamat2,
      umur:this.state.AsyncUmurDewasa2,
      jenis_kelamin:this.state.AsyncJenisKelamin2,
      kwn:this.state.AsyncKewarganegaraan2,
      kelas: this.state.AsyncKelas ,
      biaya:this.state.AsyncHargaVIP2,
      asuransi:this.state.AsyncAsuransi,
      pass_pelabuhan:this.state.AsyncPassPelabuhan,
    
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
          
          Alert.alert(responseJson);
          
        }).catch((error) => {
          console.error(error);
        });
        if(this.state.AsyncPDewasa3==null && this.state.AsyncPAnak1!=null)
        {
            this.UserRegistrationFunction11
        }
        else{
 this.props.navigation.navigate('Transfer')
 }
}
UserRegistrationFunction3 = () =>{
  const { textNo }  = this.state ;
 const { textNama }  = this.state.AsyncPDewasa3  ;
 const { textKelas }  = this.state.AsyncKelas    ;
 


  fetch('http://192.168.10.37/User_Project/detailpemesan.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      nama: this.state.AsyncPDewasa3    ,
      domisili:this.state.AsyncAlamat3,
      umur:this.state.AsyncUmurDewasa3,
      jenis_kelamin:this.state.AsyncJenisKelamin3,
      kwn:this.state.AsyncKewarganegaraan3,
      kelas: this.state.AsyncKelas ,
      biaya:this.state.AsyncHargaVIP3,
      asuransi:this.state.AsyncAsuransi,
      pass_pelabuhan:this.state.AsyncPassPelabuhan,
    
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
         
          
          Alert.alert(responseJson);
          
        }).catch((error) => {
          console.error(error);
        });
 if(this.state.AsyncPDewasa4!=null){
    this.UserRegistrationFunction11()
 }
 else{
    Alert.alert('Data Berhasil Disimpan')
 }
}


UserRegistrationFunction11 = () =>{
 
  fetch('http://192.168.10.37/User_Project/detailpemesan.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      nama: this.state.AsyncPAnak1      ,
      domisili:this.state.AsyncAlamatAnak1  ,
      umur:this.state.AsyncUmurAnak1,
      jenis_kelamin:this.state.AsyncJenisKelaminAnak1,
      kwn:this.state.AsyncKewarganegaraanAnak1,
      kelas: this.state.AsyncKelas ,
      biaya:this.state.AsyncHargaVIP2,
      asuransi:this.state.AsyncAsuransi,
      pass_pelabuhan:this.state.AsyncPassPelabuhan,



    
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
        
          Alert.alert(responseJson);
          
        }).catch((error) => {
          console.error(error);
        });
 
}
UserRegistrationFunction12 = () =>{
 
  fetch('http://192.168.10.37/User_Project/detailpemesan.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      nama: this.state.AsyncPAnak2      ,
      domisili:this.state.AsyncAlamatAnak2  ,
      umur:this.state.AsyncUmurAnak2,
      jenis_kelamin:this.state.AsyncJenisKelaminAnak2,
      kwn:this.state.AsyncKewarganegaraanAnak2,
      kelas: this.state.AsyncKelas ,
      biaya:this.state.AsyncHargaVIP2,
      asuransi:this.state.AsyncAsuransi,
      pass_pelabuhan:this.state.AsyncPassPelabuhan,



    
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
        
          Alert.alert(responseJson);
          
        }).catch((error) => {
          console.error(error);
        });

}
UserRegistrationFunction26 = () =>{
 
  fetch('http://192.168.10.37/User_Project/detailpemesan.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      nama: this.state.AsyncPInfant1      ,
      umur:this.state.AsyncUmurInfant1,
      kelas: this.state.AsyncKelas ,
      biaya:this.state.AsynctotalInfant,



    
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
        
          Alert.alert(responseJson);
          
        }).catch((error) => {
          console.error(error);
        });
 
}
inputPesanan = () =>{


  fetch('http://u392337208.hostingerapp.com/User_Project/pesanan.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
        
      kode_rute1: this.state.AsyncKodeRute1,
      jenis_tiket: this.state.AsyncJenisTiket,
      jadwal_id1:this.state.AsyncId,
      tanggal_pergi:this.state.AsyncTanggal,
      id_bank:this.state.pilihBank,
      total_bayar:this.state.AsyncTotalAkhir,
      
    
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
 // Showing response message coming from server after inserting records.
         
          Alert.alert(responseJson);
          
        }).catch((error) => {
          console.error(error);
        });
 this.UserRegistrationFunction()
}
bayar=()=>{
  if(this.state.pilihBank==null){
   Alert.alert('Silahkan Pilih Bank')
  }
  else{
    this.inputPesanan()
    }    
  }
    render() {

        return (
            <Container>
        <Header style={{backgroundColor:'#0D2E57',}}>
        <Title style={{marginTop:15,}}>Pilih Bank</Title>
        </Header>
        <Content>
          <ListItem selected={false} >
            <Left>
              <Text>Rekening BCA a.n PT.SIM </Text>
            </Left>
            <Right>
              <Radio onPress={() => this.setState({ pilihBank: 1 })}
              selected={this.state.pilihBank == '1'}
            />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Rekening Mandiri a.n PT.SIM </Text>
            </Left>
            <Right>
              <Radio onPress={() => this.setState({ pilihBank: 2 })}
                  selected={this.state.pilihBank == '2' }
                />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Rekening BNI a.n PT.SIM </Text>
            </Left>
            <Right>
              <Radio onPress={() => this.setState({ pilihBank: 3 })}
                  selected={this.state.pilihBank == '3' }
                />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Rekening BRI a.n PT.SIM </Text>
            </Left>
            <Right>
              <Radio onPress={() => this.setState({ pilihBank: 4 })}
                  selected={this.state.pilihBank == '4' }
                />
            </Right>
          </ListItem>
            
              <Button block onPress={this.inputPesanan} style={{backgroundColor:'#0D2E57'}}>
                <Text style={{color:'#ffffff'}}>Bayar</Text>
              </Button>
              

                       

                <Button title='Proses' onPress={this.UserRegistrationFunction} />
            
            </Content>
      </Container>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 16,
    paddingTop: 32
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 35,
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8
  }
});

AppRegistry.registerComponent('tutorialAsyncStorage', () => tutorialAsyncStorage);