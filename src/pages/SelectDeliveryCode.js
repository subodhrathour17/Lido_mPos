import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopStatus from '../component/TopStatusBar'
import Header from '../component/Header'
import TittleLable from '../label/TittleLable'
import { Entypo } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'
import { BackGroundImg } from '../../assets/images'
import { withNavigation } from 'react-navigation'

const SelectDeliveryCode = ({navigation}) => {
    const countries = ["WWD", "WWD", "WWD", "WWD"]
    const data = [
        {
          Itemid: '159755373',
          title: 'Henry Wooden Crib - White',
          total:'790',
          qty:2
        },
        {
          Itemid: '1597553732',
          title: 'Anatomic Baby Batch Chair-Gr....',
          total:'790',
          qty:2
        },
        {
          Itemid: '159755371',
          title: 'Shirt',
          total:'790',
          qty:2
        },
        {
          Itemid: '159755374',
          title: 'Bag',
          total:'790',
          qty:2
        },
        {
          Itemid: '159755375',
          title: 'Jeans',
          total:'790',
          qty:2
        },
        {
          Itemid: '159755376',
          title: 'Henry Wooden Crib - White',
          total:'790',
          qty:2
        },
        {
          Itemid: '159755377',
          title: 'Henry Wooden Crib - White',
          total:'790',
          qty:2
        },
        {
          Itemid: '159755378',
          title: 'Henry Wooden Crib - White',
          total:'790',
          qty:2
        },
        {
          Itemid: '1597553781',
          title: 'Henry Wooden Crib - White',
          total:'790',
          qty:2
        },
        {
          Itemid: '159755399',
          title: 'Henry Wooden Crib - White',
          total:'790',
          qty:2
        },
        {
          Itemid: '159755310',
          title: 'Henry Wooden Crib - White',
          total:'790',
          qty:2
        },
        {
          Itemid: '1597553101',
          title: 'Henry Wooden Crib - White',
          total:'790',
          qty:2
        },
        {
          Itemid: '1597553102',
          title: 'Henry Wooden Crib - White',
          total:'790',
          qty:2
        },
        {
          Itemid: '1597553103',
          title: 'Henry Wooden Crib - White',
          total:'790',
          qty:2
        },
        
      ];
  return (
    <>
        <TopStatus/>
        <Header PageName={'InventoryDetails'} />
        <TittleLable labledata={"Select Delivery Code"} />
        <View style={styles.mainContain}>
          <View style={styles.codeCotain}>
                <View style={styles.maindata}>
                    <Text>BS VW UAE RDC for PWH-1001000</Text>
                    <Text>1001001</Text>
                    <Text>Warehouse</Text>
                </View>
          </View>
          <View style={styles.itemTag}>
          <Text style={{fontSize:20}}>Item Details</Text>
          </View>
          <View style={styles.ItemDetailsCode}>
                <ScrollView style={{maxHeight:200}} showsVerticalScrollIndicator={false}>
                    {
                        data.map((item)=>{
                            return(
                                
                                <View style={styles.datarender}>
                                    <Text style={{color:"#4DBD4B"}}>{item.title}</Text>
                                    <Text style={{color:"#4DBD4B"}}>QTY  {item.qty}</Text> 
                                </View>
                               
                            )
                        })
                    }
                    </ScrollView>
                    <Text style={{top:8}}>Select Delivery Codes</Text>
    
                        <SelectDropdown style={{backgroundColor:"red",height:200}}
                            dropdownIconPosition= "right"
                            defaultButtonText={countries[0]}
                            data={countries}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                            renderDropdownIcon={isOpened => {
                                return <Entypo name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#000'} size={18} />;
                            }}
                            buttonTextStyle={styles.textcolor}
                            buttonStyle={styles.buttondesign}    
                            rowTextStyle={styles.childdropdown}                    
                            
                            />
                            

            </View>
            <View style={styles.imagedesign}>
              
              <TouchableOpacity style={styles.buttontext} onPress={()=> navigation.navigate('AddCustomer')}>
        <Text style={styles.submitText}>Next</Text>
      </TouchableOpacity>
          </View>   
        </View>
        
        <ImageBackground source={BackGroundImg} resizeMode="cover" style={styles.image}>
        </ImageBackground>
    </>
  )
}

export default withNavigation(SelectDeliveryCode)

const styles = StyleSheet.create({
    mainContain:{
        display:"flex",
        flexDirection:"column",
        flex:1,
        backgroundColor:"#F0F0F0",
        
    },
    codeCotain:{
        flex:1,
        backgroundColor:"white",

    },
    maindata:{
        padding:15,
    },
    itemTag:{
        padding:15,
    },
    ItemDetailsCode:{
        backgroundColor:"white",
        flex:3,
        padding:15
    },
    datarender:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        height:50,
    },
    textcolor:{
        color:"#4DBD4B",
        fontWeight:"bold"
    },
    buttondesign:{
        width:200,
        height:75,
        marginTop:20,
        borderWidth: 2,
        borderColor: '#4DBD4B',
        borderRadius:5
    },
    childdropdown:{
        color:"#4DBD4B"
    },
    imagedesign:{
      position:"relative",
      backgroundColor:"white" ,
    },
    image:{
        height:250,
        backgroundColor:"white" ,
        zIndex:-1
    },
    buttontext:{
      position:"absolute",
      backgroundColor:"#00964A",
      height:47.62,
      borderRadius:5,
      top:25,
      alignSelf:"center",
      width:150,
      bottom:0,
      
      
  },
  submitText:{
      alignSelf:'center',
      top:11,
      color: "white",
      fontFamily: 'Roboto',
      fontStyle: "normal",
      fontSize: 16.6058,
  },
})