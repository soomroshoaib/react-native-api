import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import {photo} from './utils/url';
import Axios  from 'axios';

export default function Fetch() {
   const [post,  setpost] = useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async()=>{
        try {
            const res = await Axios.get(photo);
            console.log(res.data)
            setpost(res.data)

        } catch(err) {
            console.log(err)
        }
    }
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrol}>
    

        {/* //{card starting } */}
        {post.map((list,index)=>{
          return(
            <View style={styles.cardcontainer} key={list.id}>
            <Image 
        source={{uri: list.url}} 
         style={styles.cardimg} />
        <Text style={styles.cardtitle}> 
        {list.title}
         </Text>
         </View>  
          )
         
        })}



      
      
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { 
        alignItems:"center",  
    },
    scrol:{

    },
    cardcontainer: {
      //  width: "90%",
        marginVertical: 20,
       paddingHorizontal: 10,
       paddingVertical: 20,
       borderRadius: 20,
       shadowOffset:{
        width: 0,
        height: 0
      },
      shadowOpacity: 0.8,
      shadowRadius: 5,
      elevation: 5,



    },
    cardimg: {
      height: 300,
      width: "100%" ,
      borderRadius: 20

    },
    cardtitle: {
      marginVertical: 10,
      textAlign:"center"


    }
})