import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from './components/GoalDetails';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:"#b8a"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }}
      >
        <Stack.Screen name="Homepage" 
        component={Home} 
        options={{
          headerTitle: "All My Goals",}} />
        <Stack.Screen 
        name="Details" 
        component={GoalDetails}
        options={{
          headerTitle:"Details of the Goal",
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})
