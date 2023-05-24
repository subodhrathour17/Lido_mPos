import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import TopStatus from '../component/TopStatusBar'
import Header from '../component/Header'
import TittleLable from '../label/TittleLable'
import { Card } from '@rneui/base';
import { Divider } from '@rneui/base';
import { withNavigation } from 'react-navigation';


const InventoryDetails = ({navigation}) => {
  let che 
  const [isChecked, setChecked] = useState(false);
  console.log(isChecked);
  const data=[{
    "City": "Noida",
    "wharehouse": [{
        "location": "132",
        "address": "Henry Wooden Crib - White",
        "itemId": "1",
        "QTY": "5"
      },
      {
        "location": "134",
        "address": "Henry Wooden Crib - White",
        "itemId": "2",
        "QTY": "5"
      },
      
    ]
  
  },
  {
    "City": "Delhi",
    "wharehouse": [{
        "location": "New Ashok Nagar",
        "address": "Henry Wooden Crib - White",
        "itemId": "3",
        "QTY": "5"
      },
      {
        "location": "KanliandiKunj",
        "address": "Henry Wooden Crib - White",
        "itemId": "4",
        "QTY": "5"
      },
      
    ]
  
  },
  {
    "City": "Delhi",
    "wharehouse": [{
        "location": "New Ashok Nagar",
        "address": "Henry Wooden Crib - White",
        "itemId": "5",
        "QTY": "5"
      },
      {
        "location": "KanliandiKunj",
        "address": "Henry Wooden Crib - White",
        "itemId": "6",
        "QTY": "5"
      },
      
    ]
  
  },
  {
    "City": "Delhi",
    "wharehouse": [{
        "location": "New Ashok Nagar",
        "address": "Henry Wooden Crib - White",
        "itemId": "7",
        "QTY": "5"
      },
      {
        "location": "KanliandiKunj",
        "address": "Henry Wooden Crib - White",
        "itemId": "8",
        "QTY": "5"
      },
      
    ]
  
  },
  {
    "City": "Delhi",
    "wharehouse": [{
        "location": "New Ashok Nagar",
        "address": "Henry Wooden Crib - White",
        "itemId": "9",
        "QTY": "5"
      },
      {
        "location": "KanliandiKunj",
        "address": "Henry Wooden Crib - White",
        "itemId": "10",
        "QTY": "5"
      },
      
    ]
  
  },
  {
    "City": "Delhi",
    "wharehouse": [{
        "location": "New Ashok Nagar",
        "address": "Henry Wooden Crib - White",
        "itemId": "11",
        "QTY": "5"
      },
      {
        "location": "KanliandiKunj",
        "address": "Henry Wooden Crib - White",
        "itemId": "12",
        "QTY": "5"
      },
      
    ]
  
  }
]
  return (
    <>
      <TopStatus />
      <Header PageName={'PRICINGReason'} />
      <TittleLable labledata={"Inventory Details"} />
      <ScrollView style={{maxHeight:700}}  showsVerticalScrollIndicator={false}>
        {data.map((item,index)=>{
          return( 
          <View style={styles.container}>
            <View>
              <Text style={styles.checkboxTitle}>{item.City}</Text>
            </View>
            {item.wharehouse.map((warehousedata,ind)=>{
              che = warehousedata.itemId
              console.log(che);
              return(
                <View style={styles.section}>
                  <View style={styles.test}>
                    <Checkbox
                      style={styles.checkbox}
                      value={isChecked}
                      onValueChange={setChecked}
                      disabled={false}
                      color={isChecked ? 'blue' : undefined}//color for slect checkbox
                    />
                    <Text style={styles.paragraph}>{warehousedata.location}</Text>
                  </View>
                  <View style={styles.InventoryData}>
                    <Text style={styles.paragraph}>{warehousedata.address}</Text>
                    <Text>{"QTY"} {warehousedata.QTY}</Text>
                  </View>
                </View>
              )
            })}
            <Divider />
          </View>
        )})}
      </ScrollView> 
      <TouchableOpacity style={styles.buttontext} onPress={()=> navigation.navigate('SelectDeliveryCode')}>
        <Text style={styles.submitText}>Next</Text>
      </TouchableOpacity>
    </>
    
  )
}

export default withNavigation(InventoryDetails)

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginHorizontal: 16,
    marginVertical: 2,
  },
  section: {
    display:"flex",
    backgroundColor:"white",
    flexDirection: 'column',
    
  },

  test:{
    flexDirection: 'row',
    marginVertical:10,
    marginHorizontal:10
 
  },
 
  InventoryData:{
    display:"flex",
    flexDirection: "row",
    justifyContent:"space-between",
    marginHorizontal:30
  },
  checkboxTitle:{
    fontWeight:"bold"

  },
  paragraph: {
    marginHorizontal:9,
    fontSize: 15,
    
  },
  checkbox: {
    borderRadius:10,
  },
  buttontext:{
    zIndex:100,
    backgroundColor:"#4DBD4B",
    height:47.62,
    borderRadius:5,
    top:15, 
    alignSelf:"center",
    width:150,
    // bottom:0,
    
},
submitText:{
    alignSelf:'center',
    top:11,
    color: "white",
    fontFamily: 'Roboto',
    fontStyle: "normal",
    fontSize: 16.6058,
    // lineHeight: 19,
    // letterSpacing: 0.10598,
},
})