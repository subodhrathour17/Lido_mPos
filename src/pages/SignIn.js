import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient';
import { MainLogo,} from '../../assets/images';
import TopStatus from '../component/TopStatusBar';
import Checkbox from 'expo-checkbox';
import BackGroundImage from '../component/BackGround';
import { withNavigation } from 'react-navigation';
const SignIn = ({navigation}) => {

    const [check,setCheck]= useState(false)
  return (
<View>
    <TopStatus/>
    <View style={styles.sign_in}>
       <View >
            <Image style={styles.extraLogo} source={MainLogo}></Image>
       </View>
       <View style={styles.mainContent}>
            <View >
                    <Text style={styles.signinText}>Sign in with your organizational account</Text>
            </View>
            <View style={styles.SectionStyle}>
                    <Text style={styles.inputHeder}>User ID</Text>
                    <TextInput
                    style={styles.inputStyle}
                    placeholder="email@domain.com"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    />
                    <Text style={styles.inputHeder}>Password</Text>
                    <View style={styles.checkbox} >
                        <Checkbox  id="check" title="Show" />
                  
                        <Text style={{marginLeft:15}}>Show</Text>
                    </View>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="*******"
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"
                        inputMode="password"
                        />
                    <View style={styles.buttonDesign}>
                    <TouchableOpacity style={styles.buttontext} onPress={()=> navigation.navigate('ItemDetails')}>

                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                    </View>
            </View>
        </View>
        <View style={styles.domainContainer}>
          <View style={styles.cardLogin}>
            <View style={styles.DomainCard}>
                <Text style={styles.DominText}>Find your Domain</Text>
                <Text style={styles.DominLorem}>In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate.
                    </Text>
            </View>
          </View>
          <View style={styles.DomainTerritory}>
                <Text>Your Territory</Text>
                <Text>Your Domain</Text>
                <View style={styles.domainData}>
                <Text style={{fontSize:12}}>UAE,EGYPT,KUWAIT,OMAN</Text>
                <Text style={{marginLeft:175,position:"absolute",width:50}}>eping</Text>
                </View>  
          </View>
        </View>
    </View>
    <BackGroundImage/>
</View>
  )
}

const styles =StyleSheet.create({
    sign_in:{
        display:'flex',
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    extraLogo:{
        width: 113,
        height: 64.03,
        alignSelf:"center",
        marginBottom:50
    },
    mainContent:{
        width:"100%",
        display:"flex",
        // backgroundColor:"#AEAEAE",
    },
    signinText:{
        // height: 22,
        alignSelf:"center",
        color: "#000000",
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontSize: 18.7125,
        lineHeight: 22,
        textAlign: "center",
        letterSpacing: 0.0895821,
    },
    SectionStyle:{ 
    //    backgroundColor:"white",
       position:"relative",
       width:Dimensions.get("window").width,
       left: 46,
       top: 23,

    },
    inputHeder:{
        left: 55,
        top: 5,
        fontFamily: 'Roboto',
        fontStyle: "normal",
        // fontWeight: 400,
        fontSize: 17.5405,
        lineHeight: 21,
        letterSpacing: 1.12533,
        color: "#016C36",

    }
    ,
    inputStyle:{
        borderWidth: 1,
        borderRadius:5,
        padding:5,
        margin:10,
        width: 337.61,
        height: 54.04,
        left: 46,
        paddingHorizontal: 30
        
    },
    checkbox:{
        position:"absolute",
        flexDirection:"row",
        top:100,
        marginLeft:320
    },
    buttonDesign:{
        width:233.31,
    },
    buttontext:{
        backgroundColor:"#4DBD4B",
        height:47.62,
        borderRadius:5,
        top:20,  
        left:100,
        
    },
    submitText:{
        alignSelf:'center',
        top:11,
        color: "white",
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontSize: 16.6058,
        lineHeight: 19,
        letterSpacing: 0.10598,
    },
    domainContainer:{
        position:"absolute",
        backgroundColor:"white",
        width: 338,
        height: 327,
        top: 600
        
    },
    cardLogin:{
        position: "absolute",
        width: 289,
        height: 196,
        alignSelf:"center"

    },
    DomainCard:{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
    },
    DominText:{
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontSize: 28.6553,
        lineHeight: 34,
        letterSpacing: -0.16,
        color: "#2E2E2E",
        
    },
    DominLorem:{
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontSize: 13.32,
        lineHeight: 16,
        letterSpacing: -0.10,
        color: "#000000",
        top:10
    },
    DomainTerritory:{
        flexDirection:"row",
        marginVertical:150,
        justifyContent:"space-around",
    },
    domainData:{
        position:'absolute',
        marginVertical:30,
        justifyContent:"space-around",
    }
})


export default withNavigation(SignIn)


