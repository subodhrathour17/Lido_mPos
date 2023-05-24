import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const PersonalDetails = () => {
  return (
    <View style={styles.mainContainer}>
      <View padding={10}>
      <Text>Employee ID</Text>
      <TextInput  style ={styles.inputText}placeholder='Employee ID'></TextInput>
      </View>
      <View  padding={10}>
      <Text >First Name</Text>
      <TextInput style ={styles.inputText} placeholder='First Name'></TextInput>
      </View>
      <View  padding={10}>
      <Text>Last Name*</Text>
      <TextInput style ={styles.inputText}placeholder='Last Name*'></TextInput>
      </View>
      <View  padding={10}>
      <Text>Gender</Text>
      <TextInput style ={styles.inputText}placeholder='Employee ID'></TextInput>
      </View>
      <View  padding={10}>
      <Text>Language*</Text>
      <TextInput style ={styles.inputText}placeholder='Employee ID'></TextInput>
      </View>
      <View  padding={10}>
      <Text>Nationality*</Text>
      <TextInput style ={styles.inputText}placeholder='Employee ID'></TextInput>
      </View>
      <View  padding={10}>
      <Text>Vip Customer</Text>
      <TextInput style ={styles.inputText}placeholder='Employee ID'></TextInput>
      </View>
    </View>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({
  mainContainer:{
    display:"flex",
    justifyContent:"center",
    // backgroundColor:"pink",
    marginTop:120
  },
  inputText:{
    width:250, backgroundColor:"red",height:50

  }
})