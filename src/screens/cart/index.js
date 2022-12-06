import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import {CART} from '../../constants/data'
import { CartItem } from '../../components'

const Cart = ({navigation}) => {
  const total = 1400
  const onDelete = (id) => console.warn('Delete', id)
  const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete} />
  
  return (
    <View style={styles.container}>
        <FlatList
        data={CART}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        />
        <View style={styles.footer}>
          <TouchableOpacity onPress={()=>{}}>
            <View style={styles.totalContainer}>
              <Text style={styles.textTotal}>Total</Text>
              <Text style={styles.textTotal}>$ {total}</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Cart