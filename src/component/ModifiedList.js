import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const ModifiedList = ({Itemid}) => {
    console.log(Itemid);
  return (
    <View style={styles.container}>
        <View style={styles.priceOverride}>
            <TouchableOpacity style={{alignSelf:"center"}}>
                <Ionicons name="pricetags" size={35} color="black" />
            </TouchableOpacity>
            <Text style={{alignSelf:"center"}}>Price Override</Text>
        </View>
        <View style={styles.linkSales}>
                <TouchableOpacity style={{alignSelf:"center"}}>
                    <Ionicons name="md-person-sharp" size={35} color="black" />
                </TouchableOpacity>
                <Text style={{alignSelf:"center"}}>Link Sales</Text>
        </View>
        <View style={styles.deleteItem}>
            <TouchableOpacity style={{alignSelf:"center"}}>
                <MaterialIcons name="delete" size={35} color="black" />
            </TouchableOpacity>
            <Text style={{alignSelf:"center"}}>Delete</Text>
        </View>
    </View>
  )
}
const styles =StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",    
        width:"90%",
        marginLeft:25,
        height:100,
        backgroundColor:"red"
    },
    priceOverride:{flex:1,backgroundColor:"#E3FBFF",height:100,justifyContent:"center"},
    linkSales:{flex:1,backgroundColor:"#84F2FF",height:100,justifyContent:"center"},
    deleteItem:{flex:1,backgroundColor:"#FF8384",height:100,justifyContent:"center"}

})

export default ModifiedList