import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';

import { formatDate } from '../../utils';
import { styles } from './styles';

function OrderItem({ item, onDelete }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Fecha</Text>
        <Text style={styles.header}>{formatDate(item.date)}</Text>
      </View>
        <View>
          <Text style={styles.title}>Monto</Text>
          <Text style={styles.text}>${item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24} color={colors.title} />
        </TouchableOpacity>
    </View>
  );
}

export default OrderItem;
