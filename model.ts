import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface GoalList {
    text: string;
    id: string;
}

export interface GoalListProps {
    text: string,
    id: string,
    onDeleteItem: Function,
    style?: StyleProp<ViewStyle>
}

export interface GoalInputProps {
    onAddGoal: Function,
    style?: StyleProp<ViewStyle>
}