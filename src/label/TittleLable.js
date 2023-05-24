import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TittleLable = ({labledata}) => {
      return (
        <View style={styles.mainContain}>
            <Text style={styles.textlable}>{labledata}
            </Text>
        </View>
        
      )
    }
    
    export default TittleLable
    
    const styles = StyleSheet.create({
        mainContain:{
            
            display:"flex",
            backgroundColor:"#4DBD4B",
            height:60
        },
        textlable:{
            alignSelf:"center", fontSize:25,top:8
    
        }
        
    })