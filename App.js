import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const [text, setText] = useState("")
  const name = "My awesome APP"
  //update this callback function to receive the changed text and store it in state variable
  // function changeTextHandler(changedText){
  //   console.log(changedText);
  //   setText(changedText);
  // }

  function changedDataHandler(data){
    console.log("call back function called", data);
    setText(data);
  }
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on {name}!</Text> */}
      {/* use Header component and pass a prop to it with the name variable as value*/}
      <Header appName={name}/>
      <StatusBar style="auto" />
      <Input changedHandler={changedDataHandler}/>
      {/* show what user's input is */}
      <Text>{text}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    borderColor:"lightblue",
    borderWidth:1,
    width: "50%",
  },
});
