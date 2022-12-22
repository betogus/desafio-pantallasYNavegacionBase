import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { ImageBackground } from 'react-native-web';
import { styles } from './styles';

function CategoryItem({ item, onSelected }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
      <ImageBackground
        style={styles.imageBackground}
        source={require(`../../assets/images/${item.thumbnail}`)}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default CategoryItem;
