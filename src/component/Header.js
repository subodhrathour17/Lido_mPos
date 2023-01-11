import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MainLogo } from '../../assets/images';

const Header = () => {
  return (
    <View style={styles.headermain}>
        <View><Feather name="arrow-left" size={35} color="black" /></View>
        <View><Image style={styles.extraLogo} source={MainLogo}></Image></View>
        <View><MaterialIcons name="menu" size={35} color="black" /></View>
    </View>
  )
}

const styles =StyleSheet.create({
    headermain:{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#FEFEFE",
        width:Dimensions.get("window").width,
        height:70,
        marginTop:-10,


    },
    extraLogo:{
        width: 75,
        height: 40,
 
    }

})

export default Header