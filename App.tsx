import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import { GoalList } from './model'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoalsList] = useState<GoalList[]>([])

  function addGoalHandler(enteredGoalText: string) {
    setGoalsList((currentGoalsList) => [...currentGoalsList, {text: enteredGoalText, id: Math.random().toString()}])
    console.log(goalsList)
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={goalsList} alwaysBounceVertical={false} renderItem={itemData => {
          return <GoalItem text={itemData.item.text}/>
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
    padding: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 3
  },

});
