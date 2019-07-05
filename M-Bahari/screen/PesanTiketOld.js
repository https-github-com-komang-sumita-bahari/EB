import React, { Component } from 'react';
import { Container, 
    Header, 
    Left,
    Content,
    Icon, 
    Button,
    Tab, 
    Tabs, 
    TabHeading, 
    Text,
    Body, 
    Title,
    Footer
} from 'native-base';
import {
  StyleSheet,
  View,
} from "react-native";

import Tab1 from '../screen/Oneway';
import Tab2 from '../screen/PP';

export default class Daftar extends Component {
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

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container style={{backgroundColor:'#0D2E57'}}>
        <Header style={{backgroundColor:'#0D2E57', marginTop:20,}}>
         <View style={styles.view}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15,}}>Pesan Tiket</Title>
          </View>
         </Header>
         <Content>
        <Tabs style={{backgroundColor:'#0377FE'}}>
          <Tab heading={ <TabHeading><Text>One Way</Text></TabHeading>}>
            <Tab1/>
          </Tab>
          <Tab heading={ <TabHeading><Text>Round Trip</Text></TabHeading>}>
            <Tab2 />
          </Tab>
        </Tabs>
        </Content>
        <Footer style={{backgroundColor:'#0377FE'}}>
          
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