import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { BackGroundImg } from '../../assets/images'

const BackGroundImage = () => {
  return (
    <View style={styles.topDesign}>
      <Image style={styles.imageBack}source={BackGroundImg}></Image>
    </View>
  )
}
const styles =StyleSheet.create({
    topDesign:{
    },
    imageBack:{
      position:"absolute",
      width:Dimensions.get("window").width,
      top:70,
     
    }
})

export default BackGroundImage
