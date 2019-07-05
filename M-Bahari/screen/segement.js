import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

export default class segement extends Component {

  constructor(){

    super();

    this.state ={

      status:false

    }
  }

ShowHideTextComponentView = () =>{

  if(this.state.status == true)
  {
    this.setState({status: false})
  }
  else
  {
    this.setState({status: true})
  }
}

  render() {
  
    return (

      <View style={styles.MainContainer}>
      <Text>Coba-Coba</Text>
      <View>
      {
          // Pass any View or Component inside the curly bracket.
          // Here the ? Question Mark represent the ternary operator.

        this.state.status ?<View> 

        <Text style= {{ fontSize: 25, color: "#000", textAlign: 'center' }}> Hello Friends </Text> 
        <Text style= {{ fontSize: 25, color: "#000", textAlign: 'center' }}> Hello Friends </Text> 
        <Text style= {{ fontSize: 25, color: "#000", textAlign: 'center' }}> Hello Friends </Text> 
        <Text style= {{ fontSize: 25, color: "#000", textAlign: 'center' }}> Hello Friends </Text> 
        <Text style= {{ fontSize: 25, color: "#000", textAlign: 'center' }}> Hello Friends </Text> 
        </View>: null
      }
      </View>
      <Button title="Hide Text Component" onPress={this.ShowHideTextComponentView} />

      </View>
    );
  }
}

const styles = StyleSheet.create({

MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
margin: 10

}

});

