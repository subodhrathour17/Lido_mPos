import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
const Footer = ({Quantity}) => {
    
    
    return (
       <View>
            <View style={styles.footer}>
                    <View style={styles.footerMain}>
                        <Text style={styles.footerText}>QUANTITY</Text>
                        <View style={styles.vertical}></View>
                    <View>
                    <Text style={styles.footerText}>SAVINGS (SAR)</Text>
                        <Text style={{marginTop:-40,left:150}}>
                        <AntDesign name="right" size={50} color="white" />
                        </Text>
                    </View>
                    </View>
                    <View  style={styles.footerMaindata}>
                <Text style={styles.dataQyt} >{Quantity}</Text>
                <Text style={styles.dataQyt} >0</Text> 
                </View>
                { Quantity = 1 ?
                    <View style={styles.totalPrice}>
                        <TouchableOpacity>
                            <Text style={styles.totalPriceText}>TO PAY (SAR) {'15245'}</Text>
                        </TouchableOpacity>
                    </View>
                    :  
                    <View style={styles.offerShow}>
                        <Text style={styles.OfferShowText}>Shop for SAR 600 more to get 30% off on total</Text>
                    </View>
                }
            </View>
      </View>
      
    )
  }
  const styles =StyleSheet.create({
    footer:{
        display:"flex",
        width: Dimensions.get("window").width,
        height: 250,
        left: 0,
        top: 1,
        backgroundColor: "#64B44C"
    },
    footerMain:{
        flexDirection:"row",
        justifyContent:"space-evenly"       

        
    },
    footerMaindata:{
        marginVertical:-80,
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginLeft:-50,

    },
    dataQyt:{
        fontStyle: "normal",
        fontSize: 30,
        lineHeight: 119.19,
        letterSpacing: 0.015,
        color: "#FFFFFF",
    },
    footerText:{
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontSize: 17.15,
        lineHeight: 119.19,
        letterSpacing: 0.065,
        color: "white",

    },
    vertical:{
        borderLeftWidth:6,
        borderColor: "white",
        borderRadius: 50,
        top:55,
        height: 70,
        left: 2,
            

    },
    offerShow:{        
        backgroundColor:"#FFC905",
        width: 350,
        height: 34,
        alignSelf:"center",
        top:42,
        borderRadius:65
    },
    OfferShowText:{
        alignSelf:"center",
        marginVertical:5
    },
    totalPrice:{
        backgroundColor:"#FFC905",
        width: 150,
        height: 34,
        alignSelf:"center",
        top:70,
        left:140,
        borderRadius:65

    },
    totalPriceText:{
        alignSelf:"center",
        marginVertical:7
    }
  })

export default Footer