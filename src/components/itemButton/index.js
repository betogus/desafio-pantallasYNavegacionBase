import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

const ItemButton = ({name}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default ItemButton