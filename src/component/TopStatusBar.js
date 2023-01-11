import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { TopStatusBar } from '../../assets/images'

const TopStatus = () => {
  return (
    <View style={styles.topDesign}>
      <Image style={styles.imageTop}source={TopStatusBar}></Image>
    </View>
  )
}
const styles =StyleSheet.create({
    topDesign:{
    },
    imageTop:{
      width:Dimensions.get("window").width,
      zIndex:1
    }
})

export default TopStatus
