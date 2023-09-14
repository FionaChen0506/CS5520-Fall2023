import { View, Text } from 'react-native'
import React from 'react'


const Header = (props) => {
    console.log(props.appName)
  return (
    <View>
      <Text>Welcome to {props.appName}</Text>
    </View>
  )
}

export default Header