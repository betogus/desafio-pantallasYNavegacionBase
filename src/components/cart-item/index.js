import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import colors from '../../constants/colors';

function CartItem({ item, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{item.name}</Text>
      <View style={styles.textContainer}>
       <Text style={styles.text}>${item.precio100gr * item.quantity}</Text>
       <Text style={styles.text}>{item.quantity}00 g</Text>
      </View>
     
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Ionicons name="trash" size={24} color={"#6e6c6c"} />
      </TouchableOpacity>
    </View>
  );
}

export default CartItem;
