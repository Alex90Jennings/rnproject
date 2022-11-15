import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { GoalList } from './model'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goalsList, setGoalsList] = useState<GoalList[]>([])
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText: string) {
    setGoalsList((currentGoalsList) => [...currentGoalsList, {text: enteredGoalText, id: Math.random().toString()}])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id: string) {
    setGoalsList((currentGoalsList) => {
      return currentGoalsList.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style={modalIsVisible ? "light" : "dark"} backgroundColor={modalIsVisible ? '#400b73' : '#e4d0ff'}/>
      <View style={styles.appContainer}>
        <Pressable onPress={startAddGoalHandler} style={styles.button}>
            <Text style={styles.text}>Add New Goal</Text>
        </Pressable>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList data={goalsList} alwaysBounceVertical={false} renderItem={itemData => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#e4d0ff'
  },
  goalsContainer: {
    flex: 3
  },
  button: {
    backgroundColor: '#400b73',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12
  },
  text: {
    color: "white",
    fontSize: 16
  }
});
