import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

function CartItem({ item, onDelete }) {
  return (
    <View style={styles.container}>
      <View style={{width: '40%'}}>
        <Text style={styles.title}>Producto</Text>
        <Text style={styles.header}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.title}>Precio</Text>
        <Text style={styles.text}>${item.precio100gr * item.quantity}</Text>
      </View>
      <View>
        <Text style={styles.title}>Cantidad</Text>
        <Text style={styles.text}>{item.quantity}00 g</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={{alignSelf: 'center'}}>
        <Ionicons name="trash" size={24} color={"#6e6c6c"} />
      </TouchableOpacity>
    </View>
  );
}

export default CartItem;
