import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from './components/GoalDetails';
import { Feather } from '@expo/vector-icons';
import PressableButton from './components/PressableButton';


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
        options={
          ({route}) => {
            return{
              title:route.params.goalItem.text,
            };
          }
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})
