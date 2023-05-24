import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopStatus from '../component/TopStatusBar'
import Header from '../component/Header'
import TittleLable from '../label/TittleLable'
import { BackGroundImg } from '../../assets/images'
import { Entypo } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation'
import { Fontisto } from '@expo/vector-icons';

const AddCustomer = ({navigation}) => {
    
  return (
    <>
        <View style={styles.container}>
            <TopStatus/>
            <Header PageName={'SelectDeliveryCode'} />
            <TittleLable labledata={"Find Customer Details"} />
            <View style={styles.searchcontainer}>
                <View>
                    <TouchableOpacity  style={styles.buttontext} onPress={()=> navigation.navigate('AddressPersonalDetails')}>
                        <Text style={styles.submitText}>Customer ID/Mobile Number   <Fontisto name="search" size={24} color="#4DBD4B"/></Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttontext} onPress={()=> navigation.navigate('customerid')}>
                        <Text style={styles.submitText}> <Entypo name="plus" size={24} color="#4DBD4B" />  Add Customer</Text>
                    </TouchableOpacity>
                </View>
            </View>
            

        </View>
        <ImageBackground style={styles.image}source={BackGroundImg}  resizeMode="cover"></ImageBackground>
    </>
  )
}

export default withNavigation(AddCustomer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 0.8,
        // backgroundColor:"pink"
      },
      searchcontainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around"  ,     
         alignItems:"center",
        height:500

      },
      buttontext:{
        borderRadius:10,
        borderWidth:1,
        borderColor:"#4DBD4B",
        padding:25,
        backgroundColor:"white"
    },
    submitText:{
        alignSelf:'center',
        color: "#4DBD4B",
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontSize: 20,

    },
})