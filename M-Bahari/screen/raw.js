import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import RadioButton from 'react-native-radio-button';


 var categories = [{ id: 0, text: 'hasan' }, 
    { id: 1, text: 'erkan' },
    { id: 2, text: 'veli' }];
 var Array_1 = [10, 5, 25, 15, 7, 50, 20, 100];

export default class raw extends Component {

  constructor()
    {
        super();
         
        this.state = 
          { 
            Hasil:0,
            value:'',
            valuerb1:'executive',
            Hitung:0, 
            TextInputValue: '',
            isSelected:false
 
          }
          //this.state = { isSelected: false };
    }

  Simple_If_Else=()=>{

    if( this.state.TextInputValue == 1 ){
  
      Alert.alert("ONE");
    }
    else{
  
      Alert.alert("Sorry Entered Value Does not Exist.")

    }

  }


  Nested_If_Else=()=>{

    if( this.state.TextInputValue > 5 )
    {

      Alert.alert("Entered Value is Grater than 5.");

    }
    else if(this.state.TextInputValue < 5)
    {

      Alert.alert("Entered Value is Less than 5.")

    }
    else if(this.state.TextInputValue == 5)
    {

      Alert.alert("Entered Value is 5")

    }
    else
    {

      Alert.alert("Sorry Entered Value Dose not Exist.")

    }
  }
renderCategories() {
    return categories.map((item, index) => <Text key={index}>{item.id}</Text>);
      if( this.state.TextInputValue == item ){
  
      Alert.alert("data ditemukan");
    }
    else{
  
      Alert.alert("data tidak ada");

    }
}
cekNilai=()=>{
  
  const { TextInputValue }  = this.state ;

{this.Calculate()}
 if(TextInputValue == Array_1[this.state.Hasil] ){
  
      Alert.alert("data ditemukan");
    }
    else{
  
      Alert.alert("data tidak ditemukan")

    } 
}
  Calculate=()=>{

    var Hitung = this.state.Hitung ++ ;
     this.setState({ Hasil: Hitung})
}
async componentWillMount() {
  this.setState({ isSelected: false });
  }
 render() {

   

   return (
 
      <View style={styles.MainContainer}>

          <Text >
          {this.state.Hasil}
          </Text>
          
          <TextInput
            underlineColorAndroid = "transparent" 
            placeholder="Enter Your Choice"
            style = { styles.TextInputStyle } 
            onChangeText = {TextInputValue => { this.setState({ TextInputValue })} }
            
            />


          
          <View style={{marginBottom : 10}}>

            <Button title='Cek' onPress={this.cekNilai} />

          </View>
      
      <RadioButton
          label="EXECUTIVE"
          title='executive'
          animation={'bounceIn'}
          
          
          onPress={this.state.isSelected=true}
      />     
      
      <Text >
          {this.state.value}
          </Text>

      </View>
 
           
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