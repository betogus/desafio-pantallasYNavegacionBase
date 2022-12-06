import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from './styles'
import {Ionicons} from '@expo/vector-icons'
import colors from '../../constants/colors'

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.header}>{item.title}</Text>
        </View>
        <View>
            <Text style={styles.text}>{item.quantity}00 g</Text>
            <Text style={styles.text}>${item.price}</Text>    
        </View>      
        <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name='trash' size={24} color={colors.button}/>
        </TouchableOpacity>  
    </View>
  )
}

export default CartItem