import { View, Text } from 'react-native'
import React from 'react'


const Header = ({appName}) => {
    console.log(appName)
  return (
    <View>
      <Text>Welcome to {appName}</Text>
    </View>
  )
}

export default Header