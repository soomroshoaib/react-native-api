import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView} from "react-native"


export default function Array() {
  const [data , setdata] = useState([
    
        {id: 1, name: "Shoaib"},
        {id: 2, name: "Shoaib"},
        {id: 3, name: "Shoaib"},
        {id: 4, name: "Shoaib"},
        {id: 5, name: "Shoaib"},
        {id: 6, name: "Shoaib"},
        {id: 7, name: "Shoaib"},
        {id: 8, name: "Shoaib"},
        {id: 9, name: "Shoaib"},
    
  ])
  
  return (
    <View>
    <ScrollView>
    {data.map((Listdata, index)=>{
      console.log(Listdata)
      return(
        

        <View key={Listdata.id} style={{marginHorizontal:50}}>
          <Text style={coustom.contain}> {Listdata.name}</Text>
        </View>
      )

    })}
    </ScrollView>
    </View>
  )
}
const coustom = StyleSheet.create({
  contain: {
    backgroundColor: "blue",
    height:100,
    marginHorizontal: 50,
    color: "#fff"
  }

})