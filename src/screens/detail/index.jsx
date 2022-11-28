import { View, Text, TouchableOpacity } from 'react-native';
import ItemButton from '../../components/itemButton';
import { styles } from './styles';
const Detail = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>Detalle del producto</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Categories')}>
        <ItemButton name={"volver a las categorías"} />
      </TouchableOpacity>
    </View>
  );
};

export default Detail;