import { View, Text, TouchableOpacity } from 'react-native';
import ItemButton from '../../components/itemButton';
import { styles } from './styles';
const Products = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>Elige un producto</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Detail')}>
        <ItemButton name={"Ir al detalle del producto"} />
      </TouchableOpacity>
    </View>
  );
};

export default Products;