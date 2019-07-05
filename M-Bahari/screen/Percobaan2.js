import React, { Component } from 'react';
import { AppRegistry, AsyncStorage, Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default class tutorialAsyncStorage extends Component {
    constructor() {
        super();
        this.state = {
            
            textName: '',
            textHobby: ''
        };

        AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                    name: resultParsed.name,
                    hobby: resultParsed.hobby
                });
            }
        });
    }

   
    render() {
        
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Halo! Kenalan yuk!
                </Text>
                <Text style={styles.instructions}>
                    Nama: {this.state.name}{'\n'}
                    Hobi: {this.state.hobby}
                </Text>
                
                
            </View>
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