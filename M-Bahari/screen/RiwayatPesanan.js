import React, { Component } from 'react';
import { Container, 
    Header, 
    Left,
    Content,
    Icon, 
    Button,
    List,
    ListItem, 
    Card,
    Tab, 
    Tabs,
    TabHeading,
    CardItem,
    Text,
    Body, 
    Title,
    Footer
} from 'native-base';
import {
  StyleSheet,
  View,
  Avatar,
  Alert,
  ListView,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import Tab1 from '../tabscreen/Riwayat';
import Tab2 from '../tabscreen/Riwayat';

export default class pilihJadwal extends Component {
  static navigationOptions = {
    header:null
  }
  
  constructor(props) {
    super(props);
    this.state = { 
      textAnak:'',
      textInfant:'',
      
      tampilList:true,
    }
    AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                  
                    AsyncNama:resultParsed.AsyncNama,
                });
            }
        });
    
  }

  
 


GetItem = (kode_rute1,jadwal_id1,jenis_tiket) =>{
  
    this.setState({ koderute:kode_rute1})
    this.setState({ jadwal:jadwal_id1})
    this.setState({ Kelas: jenis_tiket})
  
 }
  goBack=()=>{
 
    this.props.navigation.navigate('home')
 
  } 

  render() {
    
    return (
  
      <Container>
        <Header style={{backgroundColor:'#3F81B5',}}>
         <View style={styles.view}>
          <Left>
            <Button transparent onPress={this.goBack}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,marginLeft:40}}> </Title>
          </View>
         </Header>
         <Content>
         <Tabs style={{backgroundColor:'#3F81B5'}}>
          <Tab style={{backgroundColor:'#ffffff'}} heading={ <TabHeading><Text>Sedang Di Proses</Text></TabHeading>}>
         
          <Tab1/>
           </Tab>
        <Tab style={{backgroundColor:'#F4F0E5'}} heading={ <TabHeading><Text>Riwayat Pesanan</Text></TabHeading>}>
          <Tab2/>
          </Tab>
        </Tabs>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card:{
    width: '50%',
  },
  carditem:{
    height:50,
  },
  container:{
    flex:2,
     //justifyContent:'center',
     flexGrow:2,
    
  },
  input:{
    fontSize:15,
  },

  view:{
    flex: 1, 
        flexDirection: 'row',
  },
})