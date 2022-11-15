import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { GoalList } from './model'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

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
    <View style={styles.appContainer}>
      <Button title='Add New Goal' onPress={startAddGoalHandler}/>
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#e4d0ff"
  },
  goalsContainer: {
    flex: 3
  },
  button: {
    backgroundColor: '#e4d0ff',
    color: "#400b73",
  }
});
