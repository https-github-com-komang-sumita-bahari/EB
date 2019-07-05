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
import { AppRegistry, Keyboard, StyleSheet, ActivityIndicator, ListView,  View, Alert,TouchableOpacity} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import DatePicker from 'react-native-datepicker'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Modal from "react-native-modal";
export default class PP extends Component {
	constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      jadwal:'',
      loading: true ,
      date:'',
      date2:'',
      selectedIndex: 0,
      KelasPenumpang:'',
      isModalVisible: false,
      jadwal:'',
      KodeAsal:'PLG',
      KodeTujuan:'MTK',
      asal:'Palembang',
      tujuan:'Muntok'
    }
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
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  handleIndexChange = (index) => {
      this.setState({
        ...this.state,
        selectedIndex: index,
      });
    }
Navigate_To_Second_Activity=(rute,kode_asal,kode_tujuan,asal,tujuan)=>
    {
      this.setState({ jadwal: rute})
      this.setState({ KodeAsal: kode_asal})
      this.setState({ KodeTujuan: kode_tujuan})
      this.setState({asal: asal})
      this.setState({tujuan: tujuan})
      //Sending the JSON ListView Selected Item Value On Next Activity.
      this._toggleModal({ JSON_ListView_Clicked_Item: kode_asal,JSON_ListView_Clicked_Item: rute,JSON_ListView_Clicked_Item: kode_tujuan,JSON_ListView_Clicked_Item: asal,JSON_ListView_Clicked_Item: tujuan});
       
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
	<View style={{alignItems: 'center',}}>
	<View style={styles.view}>
		<Modal backdropColor='white' backdropOpacity='100' isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            
            <ListView
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}
 
          renderRow={(rowData) => <Text style={styles.rowViewContainer} 
          onPress={this.Navigate_To_Second_Activity.bind(this, rowData.rute,rowData.kode_asal,rowData.kode_tujuan,rowData.asal,rowData.tujuan)} >{rowData.rute}</Text>}
 
        />
          </View>
        </Modal>

			<View style={styles.cardss}>
				<Text style={{fontSize: 12,}}>Dari</Text>
			</View>
			<View style={styles.cardss}>
				<Text style={{fontSize: 12,}}>Tujuan</Text>
			</View>
			</View>
			<View style={styles.view}>
			
				<Card style={styles.card}>
				<TouchableOpacity onPress={this._toggleModal}>
				<CardItem style={styles.carditem}>
						<Text style={{fontSize: 25, marginTop: 5,}}>{this.state.KodeAsal}</Text>
					 </CardItem>
					 <CardItem style={styles.carditem}>
						 <Text style={{fontSize: 12,}}>{this.state.asal}</Text>
					 </CardItem>
					 </TouchableOpacity>
				 </Card>
				 <View>
				     <Icon  style={{marginTop: 15, marginLeft: 2, marginRight: 2,}} name="arrow-forward"/>
				 </View>
				 <Card style={styles.card}>
				  <TouchableOpacity onPress={this._toggleModal}>
					<CardItem style={styles.carditem}>
						<Text style={{fontSize: 25, marginTop: 5,}}>{this.state.KodeTujuan}</Text>
					 </CardItem>
					 <CardItem style={styles.carditem}>
						 <Text style={{fontSize: 12,}}>{this.state.tujuan}</Text>
					 </CardItem>
					 </TouchableOpacity>
				 </Card>
		</View>
<View style={styles.view}>
    <View style={{width:'44%', marginTop: 10,}}>
            <Text style={{fontSize: 12,}}>Tanggal Berangkat</Text>
            <Card style={{height:55, alignItems:'center'}}>
                <DatePicker
              style={{width: 250,marginTop:10,marginLeft:-90}}
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
            </Card>
    </View>
        <View style={{width:'2%', marginTop: 10,}}></View>
        <View style={{width:'44%', marginTop: 10,}}>
            <Text style={{fontSize: 12,}}>Tanggal Pulang</Text>
            <Card style={{height:55, alignItems:'center'}}>
                        <DatePicker
              style={{width: 250,marginTop:10,marginLeft:-90}}
              date={this.state.date2}
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
        onDateChange={(date2) => {this.setState({date2: date2})}}
      />
            </Card>
    </View>
        </View>
				
		<View style={{width:'100%', backgroundColor:'#0D2E57', alignItems: 'center',}}>
		<View style={styles.segmen}>
		<SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
        tabStyle={styles.tabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
                    values={['VIP', 'EKSEKUTIF']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
    	/>
		</View>
		<View style={{backgroundColor:'#ffffff', flex: 1, flexDirection: 'row',width:'90%', marginTop:15}}>
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
		</View>
		
		
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
		width:'90%',
		backgroundColor:'#0D2E57',
		marginTop:20,
	},
	
	viewkelas:{
		width: '30%',
		alignItems: 'center',
		marginTop:10,
		marginLeft:25,
  },
  tabStyle: {
          //custom styles
          height:60,
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
  tabsContainerStyle: {
          //custom styles
          borderRadius:0,
          borderColor:'#0D2E57'
        },
})