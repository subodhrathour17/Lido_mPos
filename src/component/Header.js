import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MainLogo } from '../../assets/images';
import { withNavigation } from 'react-navigation';

const Header = ({navigation,PageName}) => {
  
  
  return (
    <View style={styles.headermain}>
        <Text> 
          <TouchableOpacity onPress={()=> navigation.navigate(PageName)} >
            <Feather name="arrow-left" size={35} color="black" />
          </TouchableOpacity>
        </Text>
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

export default withNavigation(Header)