import React from 'react'
import { Text, TouchableOpacity, View,StyleSheet, StatusBar, SafeAreaView, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons ,MaterialIcons,MultiBarButton} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import BackGroundImage from '../component/BackGround'
import Footer from '../component/Footer'
import Header from '../component/Header'
import TopStatus from '../component/TopStatusBar'
import More from '../navigation/More';
import Reconcliation from '../navigation/Reconcliation';
import MyDay from '../navigation/MyDay';
import ItemList from '../component/ItemList';
const Tab = createBottomTabNavigator();
const Dash = () => {
  return (
    <>
      <ItemList/>
    </>
  )
}
function MyTabs() {
  return (
    <View style={styles.footer}>
    <Tab.Navigator  tabBarOptions={{
        // showLabel: false,
        labelStyle: { fontSize: 12 , marginBottom:15},
          style: {
            backgroundColor:"red"
          },
          tabStyle: {
            top:-8,
            marginVertical:2,
            height: 80,
            backgroundColor:"white",
            
          },
        }}>
      <Tab.Screen 
       name="Item Lookup"
        component={Dash}
        options={{
          headerShown:false,
          tabBarLabel: 'Item Lookup',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search-plus" size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Gift Card"
        component={MyDay}
        options={{
          tabBarLabel: 'Gift Card',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="card-giftcard" size={30} color="black" />
          ),
        }}
      />
      
      <Tab.Screen
        name="Suspend"
        component={Reconcliation}
        options={{
          tabBarLabel: 'Suspend',
          tabBarIcon: ({ color }) => (
            <Ionicons name="hourglass-outline" size={30} color="black" />
          ),
        }}
      />
       <Tab.Screen
        name="Offers"
        component={More}
        options={{
          tabBarLabel: 'Offers',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="brightness-percent" size={30} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
    </View>
  );
}
export default function ItemDetails() {
  return (    
 <>
 <View>
  {/* <Header PageName={'SignIn'}/> */}
  <NavigationContainer>
      <MyTabs />
      
      </NavigationContainer>
      
      <View style={styles.Qrscanners}>
        <MaterialIcons style={{alignSelf:"center",top:20}} name="qr-code-scanner" size={50} color={"white"} /> 
      </View>
 </View>


    </>
  );
}

const styles = StyleSheet.create({
  footer:{
    height:"99%",
    // marginBottom:20

  },
  footercontain:{
    height:20,
    backgroundColor:"red",
    
  },
Qrscanners:{
    width:100,
    height:100,
    position:'absolute',
    backgroundColor:'#016C36',
    borderRadius:50,
    alignSelf:'center',
    top:810,
    
   },
container: {
  flex: 1,
  marginTop: StatusBar.currentHeight || 0,
},
item: {
  backgroundColor: '#f9c2ff',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},
title: {
  fontSize: 32,
},
})