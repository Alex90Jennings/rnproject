import { StyleSheet, TextInput, Button, View, Modal, Image } from 'react-native'
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

    function endAddGoalHandler() {
        props.onCancel()
      }
    
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/zim.jpeg")}/>
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="5e0acc"/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={endAddGoalHandler} color="f31282"/>   
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#400b73'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: "#400b73",
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})

export default GoalInput