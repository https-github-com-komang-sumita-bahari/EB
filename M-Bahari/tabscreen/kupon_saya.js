import React, { Component } from 'react';

import {
	StyleSheet,
	View,
  AsyncStorage,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
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
    Footer,
    Tab, Tabs,
    Thumbnail,
} from 'native-base';
import NumericInput from 'react-native-numeric-input';
import { BottomSheet } from 'react-native-btr';
import Spinner from 'react-native-loading-spinner-overlay';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
export default class SplashScreen extends Component {
  static navigationOptions = {
    header:null
  }
 constructor(props) {
    super(props);
    this.state = { 
                   
                   pointuser:0,
                   imageKupon:'',
                   collapsed:false,
                   collapsed2:false,
                   loading1:false,
                   loading2:false,
                   isModalVisible:false,
                   kupon_saya:[{}],
                   SnK:[{}],
                 };
     AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
      
                 AsyncNama:resultParsed.AsyncNama,
                    
                });
            }
        });
  }
closePopUp = () =>{
    
    this.setState({ isModalVisible: !this.state.isModalVisible });
        
  }
  Pakai=()=>{
    this.closePopUp();
    this.props.navigation.navigate('PesanTiket')
  }
  _toggleModal = () =>{
    
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.loadings2();
    
  }
  getKupon=(id_kupon,nama,deskripsi,point,image)=>
    {
        this.setState({idkupon:id_kupon})
        this.setState({namakupon:nama})
        this.setState({deskripsi:deskripsi})
        this.setState({point:point})
        this.setState({imageKupon:image})
        this._toggleModal();
    }
  SnKKupon = () =>{
 
fetch('http://expressbahari.com/php_mobile/tampil_SnK_Kupon.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    id_kupon: this.state.idkupon,
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
      this.setState({
     
        SnK:responseJson,

      }, function() {
       
      });

        // If server response message same as Data Matched
       
        
      }).catch((error) => {
       
      });
  
  }  
  tampilKupon() {
  
  return fetch('http://expressbahari.com/php_mobile/tampil_kupon_saya.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  
      id_user: this.state.AsyncNama,
      
  
    })
})  .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            
            kupon_saya: responseJson,
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
      

}
componentDidMount() {
      this.loadings();
      

  }
loadings=()=>{

    this.setState({loading1: !this.state.loading1});
    setTimeout(()=>{
       this.tampilKupon();
      this.setState({loading1: !this.state.loading1});
      
      }, 800);

  }
  loadings2=()=>{

    this.setState({loading2: !this.state.loading12});
    setTimeout(()=>{

      this.SnKKupon();

      this.setState({loading2: !this.state.loading2});
      
      }, 100);

  }
 pesanTiket=()=>{
    this.props.navigation.navigate('PesanTiket')
  }
  render() {

    return (
      <Content>
      <Spinner visible={this.state.loading1}/>
      <BottomSheet
          visible={this.state.isModalVisible}
          onBackButtonPress={this.closePopUp}
          onBackdropPress={this.closePopUp}>
        
 
         
            <View style={{height:'100%', width:'100%',backgroundColor:'#fff',}}>
            
            <View >
            <ImageBackground source={{uri: this.state.kupon_saya[0].image}}  style={{width: '100%', height: 125,marginTop:10}} >
          
            </ImageBackground>
            <View>
            <CardItem>
                <Text style={{fontWeight: 'bold',}}>{this.state.kupon_saya[0].nama}</Text>
            </CardItem>
      
            <CardItem style={{height:1}}>
                <View style={{backgroundColor:'#F4F0E5', width:'100%', height:1}}/>
            </CardItem>
            
            <CardItem style={{marginTop:-10}}>
                <Text style={{fontSize:12}}>{this.state.kupon_saya[0].deskripsi}</Text>
            </CardItem>

            <Collapse isCollapsed={this.state.collapsed} onToggle={(isCollapsed)=>this.setState({collapsed:isCollapsed})}>>
                <CollapseHeader>
                <Card style={{height:40, marginTop:20}}>
                    <CardItem style={{height:40}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold',}}>Syarat dan Ketentuan</Text>
                        <Right style={{marginLeft:70}}>
                          {this.state.collapsed?<Icon active name="ios-arrow-up-outline" />:<Icon active name="ios-arrow-down-outline" />}
                        </Right>
                    </CardItem>
                </Card>
              </CollapseHeader>
              <CollapseBody style={{backgroundColor:'#ffffff'}}> 
               { 
                this.state.SnK.map(( SnK, key ) =>
                (
                <View key = { key } style = { styles.SnK }>
                <Text>{key + 1}. {SnK.des}</Text>
                </View>
                ))
              }
              </CollapseBody>
            </Collapse>


            <Collapse isCollapsed={this.state.collapsed2} onToggle={(isCollapsed)=>this.setState({collapsed2:isCollapsed})}>>
                <CollapseHeader>
                <Card style={{height:40}}>
                    <CardItem style={{height:40}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold',}}>Cara Menggunakan</Text>
                        <Right>
                          {this.state.collapsed2?<Icon active name="ios-arrow-up-outline" />:<Icon active name="ios-arrow-down-outline" />}
                        </Right>
                    </CardItem>
                </Card>
              </CollapseHeader>
              <CollapseBody style={{backgroundColor:'#ffffff'}}> 
              <View>
               
              </View>
              </CollapseBody>
              </Collapse>
            </View>
            <View>
            <Button block style={{backgroundColor:'#0D2E57', width:'100%', marginTop:40}} onPress={() =>this .closePopUp () }><Text  style={{justifyContent:'center'}}>Tutup</Text></Button>
            </View>
            </View>
            </View>
            

        </BottomSheet>
			{
          
          this.state.kupon_saya.map(( kupon_saya, key ) =>
          (
            <View key = { key } style = { styles.kupon_saya }>
                
                  <ListItem>
          <View style={{width:'100%',height:125, borderRadius:8}}>
          <TouchableOpacity  onPress={this.getKupon.bind(this, kupon_saya.id_kupon,kupon_saya.nama,kupon_saya.deskripsi,kupon_saya.point,kupon_saya.image)}>
            <Thumbnail square source={{uri: this.state.kupon_saya[0].image}} style={{width:'100%', height:125, borderRadius:8}}/>
          </TouchableOpacity>
            <View style={{height:30, width:30, backgroundColor:'#fff', position:'absolute', borderRadius:20, marginLeft:-15, marginTop:45}}/>
            <View style={{height:30, width:30, backgroundColor:'#fff', position:'absolute', borderRadius:20, right:-15, marginTop:45}}/>
          </View>
      </ListItem>
                 
            
            </View>
          ))
        }
     
      </Content>
    );
  }
}

const styles = StyleSheet.create({
	card:{
		width: '40%',
		alignItems: 'center',
	},
	cardss:{
		width: '50%',
		alignItems: 'center',
		marginTop:10,
  },
  carditem:{
    height:10,
  },
  view:{
		flex: 1, 
		flexDirection: 'row',
  },
  segmen:{
		width:'100%',
		backgroundColor:'#0D2E57',
		marginTop:20,
	},
	
	viewkelas:{
		width: '30%',
		alignItems: 'center',
		marginTop:10,
		marginLeft:25,
  },
})