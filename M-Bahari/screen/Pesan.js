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
    Footer,
    Segment,
    Card,
    CardItem,
} from 'native-base';
import {
  StyleSheet,
  View,
  ListView,
  TouchableOpacity,
  Modal,
} from "react-native";
import RadioButton from 'react-native-radio-button' 
import NumericInput from 'react-native-numeric-input';
import DatePicker from 'react-native-datepicker'
import { createStackNavigator } from 'react-navigation';
import SegmentedControlTab from 'react-native-segmented-control-tab'

export default class Daftar extends Component {
  static navigationOptions = {
		header:null
  }
  
  constructor(props) {
    super(props);
    this.state = { 
      loading: true ,
      date:'',
      selectedIndex: 0,
      KelasPenumpang:'',
      ModalVisibleStatus: false 
    };
  }
  GetItem (password) {
   
  Alert.alert(password);

  }
componentDidMount() {

    return fetch('http://192.168.1.4/User_Project/rute_list.php')
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

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
ShowModalFunction(visible) {

    this.setState({ModalVisibleStatus: visible});
    
}
BackFunction = () =>{
   this.props.navigation.navigate('MenuUtama')
 }
 DetailFunction =()=>{
  this.props.navigation.navigate('MenuUtama')
 }
handleIndexChange = (index) => {
      this.setState({
        ...this.state,
        selectedIndex: index,
      });
    }
    CekKelas = () => {
      if (selectedIndex==0){
        KelasPenumpang='VIP'
      }
      else if (selectedIndex==1){
        KelasPenumpang='Eksekutif'
      }
    }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container style={{backgroundColor:'#0D2E57'}}>
        <Header style={{backgroundColor:'#0D2E57', marginTop:0,}}>
         <View style={styles.view}>
          <Left>
            <Button transparent onPress={this.BackFunction}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Title style={{marginTop:15, marginLeft:50,}}>Pesan Tiket</Title>
          </View>
         </Header>
         <Content>

         <Modal
          transparent={false}
 
          animationType={"slide"}
 
          visible={this.state.ModalVisibleStatus}
 
          onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >
 
 
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
 
 
                <View style={styles.ModalInsideView}>
                      
 
                    {/* Put All Your Components Here, Which You Want To Show Inside The Modal. */}
            
                    <Text style={styles.TextStyle}>Text Component With Some Sample Text In Modal. </Text>
                     <ListView

          dataSource={this.state.dataSource}

          renderSeparator= {this.ListViewItemSeparator}

          renderRow={(rowData) => <Text style={styles.rowViewContainer} 
          onPress={this.GetItem.bind(this, rowData.kode)} >{rowData.rute}</Text>}

        />
                    <Button  title="Click Here To Hide Modal" onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } />
 
                    {/* Put All Your Components Here, Which You Want To Show Inside The Modal. */}
 
 
                </View>
 
            </View>
 
 
        </Modal>
 

        <Tabs style={{backgroundColor:'#0D2E57'}}>
          <Tab heading={ <TabHeading style={{backgroundColor:'#ffffff' }}><Text  style={{color:'#0D2E57'}}>One Way</Text></TabHeading>}>   
            <View style={{alignItems: 'center',}}>
      <View style={styles.view}>
      <View style={styles.cardss}>
        <Text style={{fontSize: 12,color:'#ffffff'}}>Dari</Text>
      </View>
      <View style={styles.cardss}>
        <Text style={{fontSize: 12,color:'#ffffff'}}>Tujuan</Text>
      </View>
      </View>
      <View style={styles.view}>
      
        <Card style={styles.card}>
        <CardItem style={styles.carditem}>
            <TouchableOpacity  onPress={() => { this.ShowModalFunction(true) }}><Text style={{fontSize: 25,marginLeft:38, marginTop: 5,}}>PLG</Text></TouchableOpacity>
           </CardItem>
           <CardItem style={styles.carditem}>
             <TouchableOpacity  onPress={() => this.props.navigation.navigate('MenuUtama')}><Text style={{fontSize: 12,marginLeft:33,}}>Palembang</Text></TouchableOpacity>
           </CardItem>
         </Card>
         <View>
             <Icon  style={{marginTop: 15, marginLeft: 2, marginRight: 2,}} name="arrow-forward"/>
         </View>
         <Card style={styles.card}>
          <CardItem style={styles.carditem}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('MenuUtama')}><Text style={{fontSize: 25,marginLeft:38, marginTop: 5,}}>MTK</Text></TouchableOpacity>
           </CardItem>
           <CardItem style={styles.carditem}>
             <TouchableOpacity  onPress={() => this.props.navigation.navigate('MenuUtama')}><Text style={{fontSize: 12,marginLeft:33,}}>Palembang</Text></TouchableOpacity>
           </CardItem>
         </Card>
    </View>

    <View style={{width:'100%', marginTop: 10,}}>
    <Text style={{fontSize: 12,marginLeft:20}}>Tanggal Berangkat</Text>
      <DatePicker
              style={{width: 300,marginTop:15,}}
              date={this.state.date}
              mode="date"
              placeholder="Pilih Tanggal"
              format="YYYY-MM-DD"
              minDate="2018-07-07"
              maxDate="2116-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
              dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 90
               },
              dateInput: {

               marginLeft: 130
              }
               // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
         
    </View> 
    </View>
    <View style={styles.segmen}>
    <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
        tabStyle={styles.tabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
                    values={['VIP', 'EKSEKUTIF', 'BISNIS']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
    />
    </View>
<View style={{width:'100%', backgroundColor:'#0D2E57', alignItems: 'center',marginTop:20}}>
    
    <View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%',}}>
      <View style={styles.viewkelas}>
          <Text style={{fontSize: 16,}}>Dewasa <Text style={{fontSize: 12,}}>(12+)</Text></Text>
          <NumericInput style={{marginTop:10,}} minValue={0} maxValue={10} onChange={value => console.log(value)} />
      </View>
      <View style={{width:'10%'}}></View>
      <View style={styles.viewkelas}>
          <Text style={{fontSize: 16,}}>Anak <Text style={{fontSize: 12,}}>(3-12)</Text></Text>
          <NumericInput style={{marginTop:10,}} minValue={0} maxValue={10} onChange={value => console.log(value)} />
      </View>
    </View>

    <View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%', }}>
      <View style={styles.viewkelas}>
          <Text style={{fontSize: 16,}}>Infant <Text style={{fontSize: 12,}}>(0-3)</Text></Text>
          <NumericInput style={{marginTop:10,}} minValue={0} maxValue={10} onChange={value => console.log(value)} />
      </View>
      <View style={styles.viewkelas}></View>
    </View>
    <View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%'}}>
      <View style={{marginTop:25,}}></View>
    </View>
    </View>
     <Button onPress={this.DetailFunction} block style={{backgroundColor:'#ffffff', width:'100%', marginTop:30}}>
                  <Text style={{color:'#0D2E57'}}>Login</Text>
                </Button>
          </Tab>


          <Tab heading={ <TabHeading style={{backgroundColor:'#ffffff'}}><Text style={{color:'#0D2E57'}}>Round Trip</Text></TabHeading>}>
           
            <View style={{alignItems: 'center',}}>
    }
  <View style={styles.view}>
      <View style={styles.cardss}>
        <Text style={{fontSize: 12,color:'#ffffff'}}>Dari</Text>
      </View>
      <View style={styles.cardss}>
        <Text style={{fontSize: 12,color:'#ffffff'}}>Tujuan</Text>
      </View>
      </View>
      <View style={styles.view}>
      
        <Card style={styles.card}>
        <CardItem style={styles.carditem}>
            <Text style={{fontSize: 25, marginTop: 5,}}>PLG</Text>
           </CardItem>
           <CardItem style={styles.carditem}>
             <Text style={{fontSize: 12,}}>Palembang</Text>
           </CardItem>
         </Card>
         <View>
             <Icon  style={{marginTop: 3, marginLeft: 2, marginRight: 2,}} name="arrow-forward"/>
                     <Icon  style={{marginLeft: 2, marginRight: 2,}} name="arrow-back"/>
         </View>
         <Card style={styles.card}>
          <CardItem style={styles.carditem}>
            <Text style={{fontSize: 25, marginTop: 5,}}>MTK</Text>
           </CardItem>
           <CardItem style={styles.carditem}>
             <Text style={{fontSize: 12,}}>Muntok</Text>
           </CardItem>
         </Card>
    </View>
        
        <View style={styles.view}>
    <View style={{width:'44%', marginTop: 10,}}>
            <Text style={{fontSize: 12,}}>Tanggal Berangkat</Text>
            <Card style={{height:35, alignItems:'center'}}>
                <CardItem style={{height:10, marginTop: 5,}}>
                <Icon name='md-calendar' />
                <Text style={{fontSize: 25,}}>25</Text>
                <Text style={{fontSize: 12,marginLeft:5, marginTop:10,}}>Nov 2018</Text>
                </CardItem>
            </Card>
    </View>
        <View style={{width:'2%', marginTop: 10,}}></View>
        <View style={{width:'44%', marginTop: 10,}}>
            <Text style={{fontSize: 12,}}>Tanggal Pulang</Text>
            <Card style={{height:35, alignItems:'center'}}>
                <CardItem style={{height:10, marginTop: 5,}}>
                <Icon name='md-calendar' />
                <Text style={{fontSize: 25,}}>25</Text>
                <Text style={{fontSize: 12,marginLeft:5, marginTop:10,}}>Nov 2018</Text>
                </CardItem>
            </Card>
    </View>
        </View>
    <View style={styles.segmen}>
    <Segment style={{backgroundColor:'#0D2E57'}}>
          <Button first style={{width:'45%'}}>
            <Text>VIP</Text>
          </Button>
          <Button last active style={{width:'45%'}}>
            <Text>Executive</Text>
          </Button>
        </Segment>
    </View>
    <View style={{width:'100%', backgroundColor:'#0D2E57', alignItems: 'center',}}>
    
    <View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%',}}>
      <View style={styles.viewkelas}>
          <Text style={{fontSize: 16,}}>Dewasa <Text style={{fontSize: 12,}}>(12+)</Text></Text>
          <NumericInput style={{marginTop:10,}} onChange={value => console.log(value)} />
      </View>
      <View style={{width:'10%'}}></View>
      <View style={styles.viewkelas}>
          <Text style={{fontSize: 16,}}>Anak <Text style={{fontSize: 12,}}>(3-12)</Text></Text>
          <NumericInput style={{marginTop:10,}} onChange={value => console.log(value)} />
      </View>
    </View>

    <View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%', }}>
      <View style={styles.viewkelas}>
          <Text style={{fontSize: 16,}}>Infant <Text style={{fontSize: 12,}}>(0-3)</Text></Text>
          <NumericInput style={{marginTop:10,}} onChange={value => console.log(value)} />
      </View>
      <View style={styles.viewkelas}></View>
    </View>
    <View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%'}}>
      <View style={{marginTop:25,}}></View>
    </View>
    </View>
    </View>
          
          </Tab>


        </Tabs>

        </Content>
        
      </Container>
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
    backgroundColor:'#0D2E57',
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
  tabsContainerStyle: {
          //custom styles
        },
  tabStyle: {
          //custom styles
          height:90,
          backgroundColor:'#ffffff',
          },
  tabTextStyle: {
          color:'#0D2E57',
          //custom styles
        },
  activeTabStyle: {
          //custom styles
          backgroundColor:'#0D2E57',
          },
  activeTabTextStyle: {
          //custom styles
          color:'#ffffff',
        },
  tabBadgeContainerStyle: {
          //custom styles
        },
  activeTabBadgeContainerStyle: {
          //custom styles
        },
  tabBadgeStyle: {
          //custom styles
        },
  activeTabBadgeStyle: {
          //custom styles
        }
})