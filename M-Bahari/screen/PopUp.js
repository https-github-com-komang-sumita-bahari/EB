import React, { Component } from 'react';

import { StyleSheet, View, Text, Button, Platform, ListView, Alert, TouchableOpacity, ActivityIndicator} from 'react-native';
import Modal from "react-native-modal";
export default class PopUp extends Component {
static navigationOptions = {
    header:null
  }
  constructor(props) {

    super(props);

    this.state = { 
        isModalVisible: false,
        isLoading: true,
        jadwal:'',
        Asal:'',
        Tujuan:''
    };

  }
    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  GetItem (rute) {
   
  Alert.alert(rute);

  }

Navigate_To_Second_Activity=(rute,kode_asal,kode_tujuan)=>
    {
      this.setState({ jadwal: rute})
      this.setState({ Asal: kode_asal})
      this.setState({Tujuan: kode_tujuan})
      //Sending the JSON ListView Selected Item Value On Next Activity.
      this._toggleModal({ JSON_ListView_Clicked_Item: kode_asal,JSON_ListView_Clicked_Item: rute,JSON_ListView_Clicked_Item: kode_tujuan});
       
    }

  
  componentDidMount() {

    return fetch('http://192.168.10.57/User_Project/rute_list.php')
      .then((response) => response.json())
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
        console.error(error);
      });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
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

      <View style={styles.MainContainer}>

        
        <Text>{this.state.jadwal}</Text>
        <Text>{this.state.Asal}</Text>
        <Text>{this.state.Tujuan}</Text>
         <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            
            <ListView
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}
 
          renderRow={(rowData) => <Text style={styles.rowViewContainer} 
          onPress={this.Navigate_To_Second_Activity.bind(this, rowData.rute,rowData.kode_asal,rowData.kode_tujuan)} >{rowData.rute}</Text>}
 
        />
          </View>
        </Modal>
         

      </View>

           
   );
 }
}

const styles = StyleSheet.create({

MainContainer :{
    
flex:1,
justifyContent: 'center',
alignItems: 'center',
marginTop: (Platform.OS == 'ios') ? 20 : 0

},

ModalInsideView:{

  justifyContent: 'center',
  alignItems: 'center', 
  backgroundColor : "#00BCD4", 
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

}

});