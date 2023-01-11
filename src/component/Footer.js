import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';


const Footer = () => {
    
    return (
       <View>
            <View style={styles.footer}>
                <View style={styles.footerMain}>
                    <Text style={styles.footerText}>QUANTITY</Text>
                    <View style={styles.vertical}></View>
                    <Text style={styles.footerText}>SAVINGS (SAR)</Text>
                    <Text style={styles.footerText}>
                    <AntDesign name="right" size={40} color="white" />
                    </Text>
                </View>
            </View>
            <View  style={styles.footerMaindata}>
              <Text style={styles.dataQyt} >0</Text>
              <Text style={styles.dataQyt} >0</Text>
             
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
        top: 510,
        backgroundColor: "#64B44C"
    },
    footerMain:{
        flexDirection:"row",
        justifyContent:"space-around",
        
    },
    footerMaindata:{
        marginVertical:315,
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginLeft:-150,
        // fontFamily: 'Inter',

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
        // border: 6px solid black,
        borderColor: "white",
        borderRadius: 50,
        top:55,
        height: 70,
        position:"absolute",
        left: 180,
            

    }
  })

export default Footer