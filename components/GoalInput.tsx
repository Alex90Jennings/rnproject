import { StyleSheet, TextInput, Button, View } from 'react-native'
import { useState } from 'react'
import { GoalInputProps } from '../model'

const GoalInput: React.FC<GoalInputProps> = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState<string>('')

    function goalInputHandler(enteredText: string) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }
    
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
            <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
      }
})

export default GoalInput