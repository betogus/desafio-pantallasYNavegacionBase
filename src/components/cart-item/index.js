import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import colors from '../../constants/colors';

function CartItem({ item, onDelete }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.text}>{item.quantity} Kg</Text>
        <Text style={styles.text}>${item.precioKg}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Ionicons name="trash" size={24} color={colors.button} />
      </TouchableOpacity>
    </View>
  );
}

export default CartItem;
