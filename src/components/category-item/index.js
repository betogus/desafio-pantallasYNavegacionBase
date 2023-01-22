import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { ImageBackground } from 'react-native';
import { styles } from './styles';

function CategoryItem({ item, onSelected }) {
 
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
        <ImageBackground
          source = {{uri: item.thumbnail}}
          imageStyle={{ borderRadius: 35 }}
        >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default CategoryItem;
