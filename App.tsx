import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import { GoalList } from './model'

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('')
  const [goalsList, setGoalsList] = useState<GoalList[]>([])

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setGoalsList((currentGoalsList) => [...currentGoalsList, {text: enteredGoalText, id: Math.random().toString()}])
    console.log(goalsList)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goalsList} alwaysBounceVertical={false} renderItem={itemData => {
          return (
            <View style={styles.goalList}>
              <Text style={styles.goalListItem}>{itemData.item.text}</Text>
            </View>
          )
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 3
  },
  goalList: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  },
  goalListItem: {
    color: 'white'
  }
});
