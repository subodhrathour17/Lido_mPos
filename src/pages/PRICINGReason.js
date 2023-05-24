import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopStatus from '../component/TopStatusBar'
import Header from '../component/Header'
import { Card, } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import TittleLable from '../label/TittleLable';


const PRICINGReason = ({navigation}) => {
  return (
    <View style={styles.CardMain}>

        <TopStatus/>
        <Header PageName={'PRICINGDiscountOffer'}/>
        <TittleLable labledata={"Select a Reason"}/>
        <View style={styles.cards}>
        {/* <Text> PRICINGReason screen</Text> */}
            <View style={styles.cardDetails}>
                <Card>
                    <Fontisto style={styles.cardIcons} name="person" size={50} color="black" />
                    <Card.Title style={styles.cardscontain}>Manager Special Price</Card.Title>
                    <Card.Divider />
                </Card>
            </View>
            <View style={styles.cardDetails}>
                <Card>
                    <MaterialCommunityIcons style={styles.cardIcons} name="sack-percent" size={50} color="black" />
                    <Card.Title  style={styles.cardscontain}>Bulk Customer Discount</Card.Title>
                    <Card.Divider/>
                </Card>
            </View>
        </View>
        <View style={styles.cards}>
            <View style={styles.cardDetails}>
                <Card>
                <FontAwesome style={styles.cardIcons} name="vcard" size={50} color="black" />
                    <Card.Title style={styles.cardscontain}>Emirates Platinum Card 15%</Card.Title>
                    <Card.Divider />
                </Card>
            </View>
            <View style={styles.cardDetails}>
                <Card style={styles.cardscontain}>
                    <FontAwesome5 style={styles.cardIcons} name="bullhorn" size={60} color="black" />
                    <Card.Title style={styles.cardscontain}>Sale Promotion</Card.Title>
                    <Card.Divider/>
                </Card>
            </View>
        </View>
        <TouchableOpacity style={styles.buttontext} onPress={()=> navigation.navigate('InventoryDetails')}>
            <Text style={styles.submitText}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}

export default withNavigation(PRICINGReason)

const styles = StyleSheet.create({
    CardMain:{
        flex:1,
    },
    cards:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    cardDetails:{
        marginTop:50,
        width:250, 
    },
    cardIcons:{alignSelf:"center",marginVertical:30}
    ,
    cardscontain:{
        marginBottom:10
    },
    buttontext:{
        backgroundColor:"#4DBD4B",
        height:47.62,
        borderRadius:5,
        top:80, 
        alignSelf:"center",
        width:150
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