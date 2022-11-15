import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GoalListProps } from '../model'

const GoalItem: React.FC<GoalListProps> = (props) => {
    function addDeleteHandler() {
        props.onDeleteItem(props.id)
    }

    return (
        <Pressable android_ripple={{color:'#210644'}} onPress={addDeleteHandler}>
            <View style={styles.goalList}>
                <Text style={styles.goalListItem}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalList: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalListItem: {
        padding: 8,
        color: 'white'
    }
})

export default GoalItem