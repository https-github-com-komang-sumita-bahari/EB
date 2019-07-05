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
} from "react-native";


export default class OnProses extends Component {
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
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
         <Content>
             
        </Content>
        <Footer style={{backgroundColor:'#0377FE'}}>
          <Button transparent>
              <Text style={{color:'#ffffff'}}>Sedang Di Proses</Text>
              
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