import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GoalListProps } from '../model'

const GoalItem: React.FC<GoalListProps> = (props) => {
    function addDeleteHandler() {
        props.onDeleteItem(props.id)
    }

    return (
        <Pressable onPress={addDeleteHandler}>
            <View style={styles.goalList}>
                <Text style={styles.goalListItem}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalList: {
        marginTop: 8,
        borderRadius: 12,
        backgroundColor: '#400b73',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    goalListItem: {
        padding: 12,
        color: 'white',
        fontSize: 16
    }
})

export default GoalItem