import React, {useState} from 'react';
import { StyleSheet, View,  Image, Text  } from 'react-native';

import {TextInput , Button} from "react-native-paper"


const Login = () => {
  const [email , setEmail] = useState('')
  const [password , setpassword] = useState('')
  
  return (
      <>
      
    <View>

          <View style={styles.container}>
            <Image  style={{width:200, height:200}} source={require("./img/logo.png")} />
            <Text style={styles.text}> Please login to screen </Text>
          </View>
          <View style={styles.many}>
          <View style={styles.box1}> 

          <TextInput
             label="Email"
               value={email}
                placeholder='Enter your Email'
               Flat="focused"
                
             onChangeText={text => setEmail(text)}
          />
            <TextInput
             label="Password"
               value={password}
              
              secureTextEntry={true}
             onChangeText={text => setpassword(text)}
            />
               <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                   Press me
                </Button>
            </View>
          </View>
    </View>
    

    </>
    
  )
}
const  styles = StyleSheet.create({
    container: {        
        alignItems:'center',
    },
    box1: {
      paddingHorizontal: 40,
      height:"50",
      justifyContent:'space-evenly',
      
      
    }  ,
    text:{
      fontSize: 22,
    },
   
})

export default Login