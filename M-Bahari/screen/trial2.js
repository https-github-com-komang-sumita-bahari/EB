import React, { Component } from 'react';

import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';


export default class MainActivity extends Component {

  constructor(props) {
    
       super(props)
    
       this.state = {
    
         Holder: ''
    
       }
    
     }
  tambahDewasa(){
    i
  }

 render() {

   return (

      <View style={styles.MainContainer}>
          
          <TextInput
              
              placeholder="Input Jumlah Penumpang"
    
              onChangeText={TextInputValue => this.setState({ Holder : TextInputValue }) }
    
              style={{textAlign: 'center', marginBottom: 6, height: 45}}
          
          />
           <TextInput
              
              placeholder="Enter Value here"
    
              onChangeText={TextInputValue2 => this.setState({ TextInputValue2 }) }
    
              style={{textAlign: 'center', marginBottom: 6, height: 45}}
          
          />

          <Button title="Click Here To Add Value To Array" onPress={this.AddItemsToArray} />
 
         
         
      </View>

        
   );
 }
}

const styles = StyleSheet.create({

  MainContainer :{

    flex:1,
    justifyContent: 'center',
    margin: 15

  }

});