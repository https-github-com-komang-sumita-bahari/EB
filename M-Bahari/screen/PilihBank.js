import React, { Component } from 'react';

import { StyleSheet, View, Text, AsyncStorage, Alert, TouchableOpacity} from 'react-native';
import { Picker, Radio, ListItem, Left,Right,Container, Header,Content, Button } from "native-base";
export default class PilihBank extends Component {
static navigationOptions = {
    header:null
  }
  constructor(){

    super();

    this.state={

      // This is our Default number value
      NumberHolder : 1,
       pilihBank: '',
       totalbiaya:'0'
      

    }
     AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                AsyncTotalAkhir:resultParsed.AsyncTotalAkhir,
                });
            }
        });
  }
  getIdUser() {
  
  return fetch('http://192.168.10.50/User_Project/cek_idbank.php')
        .then((response) => response.json())
        .then((responseJson) => {
          Alert.alert(responseJson)
        })
        .catch((error) => {
          console.error(error);
        });   
}
  bayar=()=>{
  if(this.state.pilihBank==null){
   Alert.alert('Silahkan Pilih Bank')
  }
  else{
    this.props.navigation.navigate('DetaiLPenumpang')
  }    
  }


  render() {
   const { navigate } = this.props.navigation
    return (
      
     
       <Container>
        <Header />
        <Content>
          <ListItem selected={false} >
            <Left>
              <Text>Rekening BCA a.n PT.SIM </Text>
            </Left>
            <Right>
              <Radio onPress={() => this.setState({ pilihBank: 'itemOne' })}
              selected={this.state.pilihBank == 'itemOne'}
            />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Rekening Mandiri a.n PT.SIM </Text>
            </Left>
            <Right>
              <Radio onPress={() => this.setState({ pilihBank: 'itemTwo' })}
                  selected={this.state.pilihBank == 'itemTwo' }
                />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Rekening BNI a.n PT.SIM </Text>
            </Left>
            <Right>
              <Radio onPress={() => this.setState({ pilihBank: 'itemThree' })}
                  selected={this.state.pilihBank == 'itemThree' }
                />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Rekening BRI a.n PT.SIM </Text>
            </Left>
            <Right>
              <Radio onPress={() => this.setState({ pilihBank: 'itemFour' })}
                  selected={this.state.pilihBank == 'itemFour' }
                />
            </Right>
          </ListItem>
              <Button block onPress={this.bayar} style={{backgroundColor:'#0D2E57'}}>
                <Text>Daftar</Text>
              </Button>
              <TouchableOpacity onPress={this.getIdUser}>
              <Text>Bayar{this.state.responseJson}</Text>
            </TouchableOpacity>
              <Text>{this.state.pilihBank}</Text>
        </Content>
      </Container>
      
       
        
   

    );
  }
}

const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});