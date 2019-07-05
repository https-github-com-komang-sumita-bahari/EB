import React, { Component } from 'react';
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
    Footer
} from 'native-base';
import {
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Dialog } from 'react-native-simple-dialogs';

export default class Pilih_Bank extends Component {
  static navigationOptions = {
    header:null
  }
  
  constructor(props) {
    super(props);
    this.state = { loading: true, 
                   dialogVisible: false,
                   ValueDewasa:'0',
                   ValueAnak:'0',
                   ValueInfant:'0',
                    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  openDialog = (show) => {
    this.setState({ showDialog: show });
}
tambahValueDewasa=()=>{
  if(this.state.ValueDewasa<10){
   this.setState({ValueDewasa : parseInt(this.state.ValueDewasa) + 1  });
  }
}
kurangValueDewasa=()=>{
  if(this.state.ValueDewasa>0){
   this.setState({ValueDewasa : parseInt(this.state.ValueDewasa) - 1  });
 }
}
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
         <Header style={{backgroundColor:'#3F81B5', height:20,}}></Header> 
        <Header style={{backgroundColor:'#3F81B5',}}>
         <View style={styles.view}>
         <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,}}>Cari Tiket</Title>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
          </View>
        </Header>
         <Content>
         
            <Card>
              <CardItem style={{alignSelf:'center'}}>
                <Button block style={{width:'100%', backgroundColor:'#3F81B5'}} onPress={ () => this.openDialog(true) }>
                  <Text>Pilih</Text>
                </Button>
              </CardItem>
            </Card>
              
        </Content>
        
        <Dialog
            animationType="slide"
            contentStyle={
                {
                    alignItems: "center",
                    justifyContent: "center",
                    
                }
                
            }
            
            onTouchOutside={ () => this.openDialog(false) }
            visible={ this.state.showDialog }>
                    
              <View style={{flexDirection: 'row'}}>
                <View style={{width:'33%'}}>
                  <CardItem style={{alignSelf:'center',height:20,marginTop:10}}>
                    <Text style={{fontSize: 15,fontWeight: 'bold',}}>Dewasa</Text>
                  </CardItem>
                  <CardItem style={{alignSelf:'center',height:10,}}>
                    <Text style={{fontSize: 12,}}>> 12 thn</Text>
                  </CardItem>

                  <CardItem style={{alignSelf:'center', marginTop:10}}>
                    <Button onPress={ () => this.kurangValueDewasa() } rounded style={{backgroundColor:'#3F81B5'}}>
                      <Icon name='ios-arrow-up-outline' />
                    </Button>
                  </CardItem>
                  <View style={{alignSelf:'center', backgroundColor:'#F4F0E5', width:'100%', alignItems:'center', height:40}}>
                    <Text style={{fontSize: 25,fontWeight: 'bold',}}>{this.state.ValueDewasa}</Text>
                  </View>
                  <CardItem style={{alignSelf:'center'}}>
                    <Button onPress={ () => this.tambahValueDewasa() }rounded style={{backgroundColor:'#3F81B5'}}>
                      <Icon name='ios-arrow-down-outline' />
                    </Button>
                  </CardItem>
                </View>

                <View style={{width:'33%'}}>
                  <CardItem style={{alignSelf:'center',height:20,marginTop:10}}>
                    <Text style={{fontSize: 15,fontWeight: 'bold',}}>Anak</Text>
                  </CardItem>
                  <CardItem style={{alignSelf:'center',height:10,}}>
                    <Text style={{fontSize: 12,}}>2 - 11 thn</Text>
                  </CardItem>

                  <CardItem style={{alignSelf:'center', marginTop:10}}>
                    <Button rounded style={{backgroundColor:'#3F81B5'}}>
                      <Icon name='ios-arrow-up-outline' />
                    </Button>
                  </CardItem>
                  <View style={{alignSelf:'center', backgroundColor:'#F4F0E5', width:'100%', alignItems:'center', height:40}}>
                    <Text style={{fontSize: 25,fontWeight: 'bold',}}>0</Text>
                  </View>
                  <CardItem style={{alignSelf:'center'}}>
                    <Button rounded style={{backgroundColor:'#3F81B5'}}>
                      <Icon name='ios-arrow-down-outline' />
                    </Button>
                  </CardItem>
                  
                </View>
                <View style={{width:'33%'}}>
                  <CardItem style={{alignSelf:'center',height:20,marginTop:10}}>
                    <Text style={{fontSize: 15,fontWeight: 'bold',}}>Bayi</Text>
                  </CardItem>
                  <CardItem style={{alignSelf:'center',height:10,}}>
                    <Text style={{fontSize: 12,}}> 2 thn</Text>
                  </CardItem>

                  <CardItem style={{alignSelf:'center', marginTop:10}}>
                  <Button rounded style={{backgroundColor:'#3F81B5'}}>
                      <Icon name='ios-arrow-up-outline' />
                    </Button>
                  </CardItem>
                  <View style={{alignSelf:'center', backgroundColor:'#F4F0E5', width:'100%', alignItems:'center', height:40}}>
                    <Text style={{fontSize: 25,fontWeight: 'bold',}}>0</Text>
                  </View>
                  <CardItem style={{alignSelf:'center'}}>
                    <Button rounded style={{backgroundColor:'#3F81B5',}}>
                      <Icon name='ios-arrow-down-outline' />
                    </Button>
                  </CardItem>
                </View>
              </View>
              <CardItem style={{alignSelf:'center'}}>
                <Button block style={{width:'100%', backgroundColor:'#3F81B5'}} onPress={ () => this.openDialog(false) }>
                  <Text>Pilih</Text>
                </Button>
              </CardItem>
           
        </Dialog>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card:{
    width: '50%',
  },
  bglist:{
    backgroundColor:'#000000',
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