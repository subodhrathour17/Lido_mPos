import React from 'react'
import { Text, TouchableOpacity, View,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons ,MaterialIcons,MultiBarButton} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import BackGroundImage from '../component/BackGroundImage'
import Footer from '../component/Footer'
import Header from '../component/Header'
import TopStatus from '../component/TopStatusBar'
import More from '../navigation/More';
import Reconcliation from '../navigation/Reconcliation';
import MyDay from '../navigation/MyDay';
const Tab = createBottomTabNavigator();
const Dash = () => {
  return (
    <View>
        <TopStatus/>
        <Header/>
        <BackGroundImage/>
        <Text style={{position:"absolute",top:150}}>Item Details</Text>
        <Footer/>
    </View>
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
export default function CustomerDetails() {
  return (
    <View >
    <NavigationContainer>
      <MyTabs />
      </NavigationContainer>
    </View>
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
    
  }
})