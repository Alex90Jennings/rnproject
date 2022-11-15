import { StyleSheet, Text, View } from 'react-native'
import { GoalListProps } from '../model'

const GoalItem: React.FC<GoalListProps> = (props: any) => {
    return (
        <View style={styles.goalList}>
          <Text style={styles.goalListItem}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default GoalItem