import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';

function ProductItem({ item, onSelected, color }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={() => onSelected(item)}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.price}>${item.precio100gr} (100g)</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ProductItem;
