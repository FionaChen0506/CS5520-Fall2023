import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react';
import React from 'react'

const Input = ({changedHandler}) => {
    const [text, setText] = useState("")
    //update this callback function to receive the changed text and store it in state variable
    function changeTextHandler(changedText){
      console.log(changedText);
      setText(changedText);
    }

    function confirmHandler(){
        //call a function that is passed from app.js and pass the text via it
        changedHandler(text);
        // clear the textinput
        setText("")

    }
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={changeTextHandler}
        value={text}
        />

        <Button title="confirm" onPress={confirmHandler} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        borderColor:"lightblue",
        borderWidth:1,
        width: 200,
      },
})