import { Button, Settings, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TopStatus from '../component/TopStatusBar'
import Header from '../component/Header'
import TittleLable from '../label/TittleLable'
import { withNavigation } from 'react-navigation'
import { ImageBackground } from 'react-native'
import { BackGroundImg } from '../../assets/images'
import DeliveryDetails from '../breadcrumbmenu/DeliveryDetails'
import PersonalDetails from '../breadcrumbmenu/PersonalDetails'
import ContactDetails from '../breadcrumbmenu/ContactDetails'
const AddressPersonalDetails = ({navigation}) => {
    const renderData = [<PersonalDetails/>, <ContactDetails/>,<DeliveryDetails/>];
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const updateSelection = (index) => {
      setSelectedIndex(index);
    }  
  return (
   <>
        <TopStatus/>
        <Header PageName={'AddCustomer'} />
        <TittleLable labledata={"Add Address Details"} />
        <View style={styles.breadcrumbcontainer}>
            <View style={styles.breadcrum}>
                <TouchableOpacity style={styles.breadcrumbtext} onPress={()=>updateSelection(0)}><Text >Personal Details</Text></TouchableOpacity>
                <TouchableOpacity style={styles.breadcrumbtext} onPress={()=>updateSelection(1)}><Text>Contact Details</Text></TouchableOpacity>
                <TouchableOpacity style={styles.breadcrumblast} onPress={()=>updateSelection(2)}><Text>Delivery Details</Text></TouchableOpacity>
            </View>
        </View>
        <View style={styles.container}>
            {renderData[selectedIndex]}
        </View>
        <ImageBackground style={styles.image} source={BackGroundImg}  resizeMode="cover"></ImageBackground>
   </>
  )
}

export default withNavigation(AddressPersonalDetails)

const styles = StyleSheet.create({
    breadcrumbcontainer:{
        flex:0.2,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        zIndex:-10
        
    },
    breadcrum:{
        width:'80%',
        display:"flex",
        justifyContent:"space-evenly",
        flexDirection:"row",
        backgroundColor:"#F7F9F8",
        borderWidth: 1 ,
        borderColor:"#4DBD4B",
        borderRadius:15,
    
    },
    breadcrumbtext:{
        borderRightWidth:2,
        borderRightColor:"#4DBD4B",
        padding:15,
    },
    breadcrumblast:{
        padding:15,
    },
    container: {
        flex: 1,
        // backgroundColor: 'red',
        top:-50
      },

      bodyText: {
        // fontSize: 17,
        // top: '-10%'
      },
      image: {
        flex: 0.8,
        zIndex:-10
        // backgroundColor:"pink"
      }
})