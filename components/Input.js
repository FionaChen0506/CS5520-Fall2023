import { Button, Modal, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import { useState } from 'react';
import React from 'react'

const Input = ({changedHandler, modalVisibility, hideModal}) => {
    const [text, setText] = useState("")
    //update this callback function to receive the changed text and store it in state variable
    function changeTextHandler(changedText){
      console.log(changedText);
      setText(changedText);
    }

      console.log(modalVisibility)
    function confirmHandler(){
        //call a function that is passed from app.js and pass the text via it
        changedHandler(text);
        // clear the textinput
        setText("")

    }

    function cancelHandler(){
      hideModal();
    }

  return (
    <Modal visible={modalVisibility}>
      <View style={styles.container}>
        <Image source={{url:"https://cdn-icons-png.flaticon.com/512/2617/2617812.png"}} style={styles.image} />
        <Image source={require ("../assets/pic1.png")} style={{width:100, height:100,}} />
        <TextInput
          style={styles.input}
          onChangeText={changeTextHandler}
          value={text}
          />
          <Button title="confirm" onPress={confirmHandler} />
          <Button title="Cancel" onPress={cancelHandler}/>
      </View>
    </Modal>
  )
}

export default Input

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
        width: 200,
      },
    image: {
      width:100,
      height:100,
    },
})