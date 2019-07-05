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

import Tab1 from '../tabscreen/Riwayat';
import Tab2 from '../tabscreen/OnProses';

export default class PesananSaya extends Component {
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
         <Header style={{backgroundColor:'#0D2E57',}}>
         <View style={styles.view}>
          <Left>
            <Button transparent onPress={this.BackFunction}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15, marginLeft:40,}}>Riwayat Pesanan Saya</Title>
          </View>
         </Header>
         <Content>
        <Tabs style={{backgroundColor:'#0D2E57'}}>
          <Tab style={{backgroundColor:'#0D2E57'}} heading={ <TabHeading><Text>Riwayat Pesanan</Text></TabHeading>}>
            <Tab1/>
          </Tab>
          <Tab heading={ <TabHeading><Text>Sedang Diproses</Text></TabHeading>}>
            <Tab2 />
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