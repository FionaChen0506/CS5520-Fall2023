import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import PressableButton from "./PressableButton";
import { EvilIcons } from '@expo/vector-icons';

// Pass the goal object we want to display its text as a prop to GoalItem.js
const GoalItem = ({goal, deleteGoal}) => {

    const deleteHandler = () => {
        deleteGoal(goal.key);
        console.log("delete button pressed: ", goal.text);
    }

    function goalPressed () {
        pressHandler(goal.key);
        
    }

    return (
        // <>
        // <View style={styles.goalContainer}>
        //     <Text style={styles.text}>{goal.text}</Text>
        //     <Button style={[styles.deleteButton]} color="black" title="X" onPress={deleteHandler}/>
        // </View>
        // </>
        <PressableButton 
        pressedFunction={goalPressed} 
        pressedStyle={[styles.goalContainer, {backgroundColor: '#add', opacity: 0.5}]}
        defaultStyle={[styles.goalContainer, {backgroundColor: '#aaa', opacity: 1}]}
        >
        <Text style={styles.text}>{goal.text}</Text>
        {/* <Button style={[styles.deleteButton]} color="black" title="X" onPress={deleteHandler}/> */}
        <PressableButton 
            pressedFunction={deleteHandler} 
            pressedStyle={{backgroundColor: "#a2a", padding: 5}}
            defaultStyle={{backgroundColor: "#b59"}}
            >
            {/* <Text>X</Text> */}
            <EvilIcons name="trash" size={30} color="black" backgroundColor="white" />
        </PressableButton>
        </PressableButton>
    )
}


const styles = StyleSheet.create({
    goalContainer: {
        backgroundColor: '#aaa',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    deleteButton: {
        borderRadius: 5,
        padding: 5,
        margin: 5,
        fontSize: 30,
    },
    text: {
        borderRadius: 5,
        color: 'darkred',
        fontSize: 30,
        alignSelf: 'center',
        padding: 15,
        overflow: 'hidden',
    }
})


export default GoalItem;