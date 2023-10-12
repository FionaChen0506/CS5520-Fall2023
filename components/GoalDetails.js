import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const GoalDetails = ({navigation, route}) => {
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