import React, { Component } from 'react';
import { Container, 
    Header, 
    Left,
    Icon,
    Title,
    Content,
    Button
} from 'native-base';
import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert,TouchableOpacity, } from 'react-native';
import { createStackNavigator } from 'react-navigation';
class CekJadwal extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      jadwal:''

    }
  }
GetItem (password) {
   
  Alert.alert(password);

  }


  componentDidMount() {

    return fetch('http://192.168.10.57/User_Project/rute_list.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
Navigate_To_Second_Activity=(rute)=>
    {
      //Sending the JSON ListView Selected Item Value On Next Activity.
      this.props.navigation.navigate('Second', { JSON_ListView_Clicked_Item: rute});
       
    }
BackFunction = () =>{
   this.props.navigation.navigate('MenuUtama')
 }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
       <Container>
        <Header style={{backgroundColor:'#0D2E57',}}>
         <View style={styles.view}>
          <Left style={{marginLeft:-350,marginTop:0}}>
            <Button transparent onPress={this.BackFunction}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:0,}}>Jadwal Keberangkatan</Title>
          </View>
         </Header>
         <View style={styles.MainContainer}>

      
        <Text>Not Found</Text>
        
      </View>
      </Container>

      
    );
  }
}
class PpJd extends Component
{
  static navigationOptions =
  {
     header:null,
  };
 
  render()
  {
    const { navigate } = this.props.navigation
     return(
        <View style = { styles.MainContainer }>
        
 
          
          <TouchableOpacity  onPress={() => navigate ('First')}><Text>PLG</Text></TouchableOpacity>
        </View>
     );
  }
}

export default Project = createStackNavigator(
{
  
  Second: {screen : PpJd},
   First : {screen: CekJadwal},

   

});
const styles = StyleSheet.create({

MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
margin: 10

},

   rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
      },
    TextComponentStyle: {
        fontSize: 20,
        color: "#0D2E57",
        textAlign: 'center', 
        marginBottom: 15
 }

});

AppRegistry.registerComponent('CekJadwal', () => CekJadwal);