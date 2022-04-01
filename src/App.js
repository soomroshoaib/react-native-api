/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   StatusBar,
   View,
   
   Text,
  StyleSheet
  , TouchableOpacity
  } from "react-native"
import  Fetch  from './Fetch';


  
 

 
 const App =()=> { 
  //  const [count, setcount] = useState(0)

  //  const increment = ()=>{
  //    setcount(count + 1)

  //  }
   
  //  const decrement = ()=>{
  //    setcount(count - 1)
     
  // }
 
   return (
     <>
   {/* <StatusBar backgroundColor={'blue'}  /> */}
    
       {/* <View style={{flex:1}}>
       <View style={{ flex:1,justifyContent:'center', alignItems:"center"}}> 
       <Text style={{fontSize:40}}> hellor world </Text>
       </View>
       <View style={{flex:1,justifyContent:'center', alignItems:"center" }}> 
       <Text style={{fontSize:40 , color:"green"}}> hellor world </Text>
       </View>
       <View style={{ flex:1,justifyContent:'center', alignItems:"center" , backgroundColor:"blue", }}>

       <Text style={{fontSize:40}}> hellor world </Text>
       </View>
      
       </View> */}

       <View>
{/*            
           <TouchableOpacity onPress={ decrement }>
             <Text style={coustem.plus}>-</Text>
           </TouchableOpacity>
           <Text style={coustem.texts}> {count}</Text>
           <TouchableOpacity onPress={increment}>
           <View>
             <Text style={coustem.addplus}>+</Text>
           </View>
           </TouchableOpacity> */}
           
           <View>
             <Fetch />
           </View>
             
           
       </View>
       
     
     </>
   );
 };
 
//  const coustem = StyleSheet.create({
//    container: {
//      backgroundColor:'green',
//      flex: 1,
//      justifyContent:'space-around',
//      alignItems:"center",
//      flexDirection:"row"

//   },
  //  plus: {
  //    fontSize: 40,
  //    backgroundColor:"white",
  //    borderRadius:50,
  //    height:50,
  //    width:50,
  //    textAlign:"center"
  //  },
  //  addplus: {
  //   fontSize: 40,
  //   backgroundColor:"white",
  //   borderRadius:50,
  //   height:50,
  //   width:50,
  //   textAlign:"center"
  // },
  // texts: {
  //   fontSize:50,
  //   backgroundColor:"blue",
  //   color:"#fff",
  //   height:80,
  //   width:80,
  //   textAlign:"center",
  //   borderRadius:50
  // }

//  })
 

 
 
 
 export default App;
