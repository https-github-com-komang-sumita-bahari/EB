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
} from "react-native";
import moment from 'moment';

export default class DetailPesanan extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
BackFunction = () =>{
   this.props.navigation.navigate('MenuUtama')
 }
SignoutFunction = () =>{
   this.props.navigation.navigate('Login')
 }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header style={{backgroundColor:'#0D2E57',}}>
         <View style={styles.view}>
          <Left>
            <Button transparent onPress={this.BackFunction}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,marginLeft:40}}>Akun Saya</Title>
          </View>
         </Header>
         <Content>

        </Content>
        <Footer style={{backgroundColor:'#0D2E57'}}>
          <Button transparent onPress={this.SignoutFunction}>
              <Text style={{color:'#ffffff', fontSize: 20}}>Log Out</Text>
              
            </Button>
        </Footer>
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