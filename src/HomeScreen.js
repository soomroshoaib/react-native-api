import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'



export default function HomeScreen({navigation}){
  console.log(navigation)

  function handlenav(ScreenName){
    navigation.navigate(ScreenName)
    
  }
  return (
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={{backgroundColor:"green" , marginBottom:20, padding: 30, borderRadius:50}}
      onPress={()=> handlenav("Screen1")}
      >
        <Text>screen1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"green" , padding: 30, marginBottom:120}}
      onPress={()=> handlenav("Screen2")}
      >
        <Text>screen2</Text>
      </TouchableOpacity>
    </View>
    
  )
}