import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useEffect } from 'react'
import PressableButton from './PressableButton'
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

const GoalDetails = ({navigation, route}) => {
  const[iswarned, setIsWarned] = useState(false)
  React.useEffect(() => {
    navigation.setOptions({
      headerRight:()=>{
        return(
          <PressableButton
            pressedFunction={() =>{
              console.log("warning pressed")
              setIsWarned(true);
            }} 
            pressedStyle={{backgroundColor: "#a2a", padding: 5}}
            defaultStyle={{backgroundColor: "#b59"}}
            >
            <Feather name="alert-triangle" size={24} color="black" />
          </PressableButton>
        )
      }
    });
  }, [iswarned, setIsWarned]);
  
    console.log(route.params);
    const { goalItem } = route.params;
  return (
    <View>
      <Text>{goalItem.text}</Text>
      <Button title="More" onPress={()=> navigation.push("Details")} />
    </View>
  )
}

export default GoalDetails

const styles = StyleSheet.create({})