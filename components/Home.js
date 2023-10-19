import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, Scroll, ScrollView, TextInput, View, Button, SafeAreaView } from 'react-native';
import Header from './Header';
import { useState } from 'react';
import Input from './Input';
import GoalItem from './GoalItem';

export default function Home({navigation}) {
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const name = "My awesome APP"
  //update this callback function to receive the changed text and store it in state variable
  // function changeTextHandler(changedText){
  //   console.log(changedText);
  //   setText(changedText);
  // }

  function changedDataHandler(data){
    console.log("call back function called", data);
    const newGoal = {text: data, id: Math.random()};
    setGoals((prevGoals) => {return [...prevGoals, newGoal]});
    setText(data);
  }

  function makeModalVisible(){
    setIsModalVisible(true)
  }

  function makeModalInvisible(){
    setIsModalVisible(false)
  }

  const goalDeleteHandler = (goalId) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const goalPressHandler = (goalObject) => {
    //navigation.navigate('Details');
    navigation.navigate('Details', {goalItem: goalObject})
  }
  return (
    
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on {name}!</Text> */}
      {/* use Header component and pass a prop to it with the name variable as value*/}
      <View style={styles.topContainer}>
        <Header appName={name}/>
        <StatusBar style="auto" />

        <Input changedHandler={changedDataHandler}
                modalVisibility={isModalVisible}
                hideModal={makeModalInvisible}/>
        <Button title="Add a goal" onPress={makeModalVisible}/>
      </View>
    
      <View style={styles.bottomContainer}>
        {/* show what user's input is */}
        {/* this part is ovewritten by the modal temporarily */}
        {/* <Text>{text}</Text>  */}
        <FlatList 
          data={goals} 
          renderItem={(itemData) => 
          <GoalItem goal={itemData.item} 
          deleteGoal={goalDeleteHandler}
          pressHandler={goalPressHandler} />}  
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    borderColor:"lightblue",
    borderWidth:1,
    width: "50%",
  }, 
  topContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomContainer:{
    flex:4,
    backgroundColor:"#b59",
    alignItems:"center",
  },
});
