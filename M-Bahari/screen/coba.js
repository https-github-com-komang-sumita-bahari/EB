import React, { Component } from 'react';
 
import { Platform, StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
 var SampleArray = [] ;
  var categories = [{ id: 0, text: 'hasan' }, 
    { id: 1, text: 'erkan' },
    { id: 2, text: 'veli' }];
export default class Myapp extends Component<{}>
{
 constructor(props) {
    
       super(props)
    
       this.state = {
    
         Holder: '',
         Index:0,
    
       }
    
     }

  AddItemsToArray=()=>{
 
      //Adding Items To Array.
      SampleArray.push( this.state.Holder.toString() );
 
      // Showing the complete Array on Screen Using Alert.
      Alert.alert(SampleArray.toString());
 
  }
  renderFields() {
    const noGuest = this.state.guest;
    const fields = [];
    for (let i=0; i < noGuest; i++) {
        // Try avoiding the use of index as a key, it has to be unique!
        fields.push(
            <Field key={"guest_"+i} />
        );
    }
    return fields;
}
    render()
    { 
                

        return(
            <View>
            <View>
                <View><Text>No</Text></View>
                <View><Text>Name</Text></View>
                <View><Text>Preference</Text></View>
            </View>
            {this.renderFields()}
        </View>
          
            
        );
    }

 
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },

    text:
    {
        fontSize: 20,
        textAlign: 'center',
        margin:10
    }
});