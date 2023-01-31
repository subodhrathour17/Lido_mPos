import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import TopStatus from '../component/TopStatusBar'
import Header from '../component/Header'
import { Card, } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';


const PRICINGDiscountOffer = ({navigation}) => {
  return (
    <View style={styles.CardMain}>

        <TopStatus/>
        <Header PageName={'Test'}/>
        <View style={{backgroundColor:"#4DBD4B",height:50}}><Text style={{alignSelf:"center", fontSize:25,top:8}}>Select Discount or Offer</Text></View>

        
        

        <View style={styles.cards}>
            <View style={styles.cardDetails}>
                <Card>
                    <MaterialCommunityIcons style={styles.cardIcons} name="brightness-percent" size={50} color="black" />
                    <Card.Title style={styles.cardscontain}>Discount</Card.Title>
                    <Card.Divider />
                </Card>
            </View>
            <View style={styles.cardDetails}>
                <Card>
                    <Fontisto style={styles.cardIcons} name="person" size={50} color="black" />
                    <Card.Title  style={styles.cardscontain}>Employee Discount</Card.Title>
                    <Card.Divider/>
                </Card>
            </View>
        </View>
        <View style={styles.cards}>
            <View style={styles.cardDetails}>
                <Card>
                <MaterialCommunityIcons style={styles.cardIcons} name="scissors-cutting" size={50} color="black" />
                    <Card.Title style={styles.cardscontain}>Damage Discount</Card.Title>
                    <Card.Divider />
                </Card>
            </View>
            <View style={styles.cardDetails}>
                <Card style={styles.cardscontain}>
                <MaterialCommunityIcons style={styles.cardIcons} name="image-outline" size={50} color="black" />
                    <Card.Title style={styles.cardscontain}>Place Holder</Card.Title>
                    <Card.Divider/>
                </Card>
            </View>
        </View>
        <TouchableOpacity style={styles.buttontext} onPress={()=> navigation.navigate('PRICINGReason')}>
            <Text style={styles.submitText}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}

export default withNavigation(PRICINGDiscountOffer)

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