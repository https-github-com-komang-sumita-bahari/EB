import React, { Component } from 'react';

import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';

export default class testing extends Component<{}> {
constructor(props){
        super(props);
       
        this.state = { f1: null, f2: null, };
    }

 

 render() {


   return (
     <View>
       
           
             
            <TextInput
                      placeholder="Enter Value 1 here"
                      onChangeText={(text) => this.setState({f1: parseInt(text)})}
                      style={{textAlign: 'center', marginBottom: 6, height: 45}}
                    />
            <TextInput
                      placeholder="Enter Value 2 here"
                      onChangeText={(text) => this.setState({f2: parseInt(text)})}
                      style={{textAlign: 'center', marginBottom: 6, height: 45}}
                    />
                
     

     <TouchableOpacity  onPress={() => {this.setState({result: this.state.f1 && this.state.f2 ? this.state.f1 * this.state.f2 : null})}}><Text> Daftar</Text></TouchableOpacity>
     <Text >{ this.state.result ? 'Result= '+ this.state.result : null}</Text>
     
            </View>
   );
 }
}

const styles = StyleSheet.create({
 
 MainContainer: {
   flex: 1,
   margin: 10
   
 },

 TextStyle:{
   fontSize : 25,
    textAlign: 'center'
 }

});