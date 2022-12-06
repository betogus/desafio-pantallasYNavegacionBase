import { View, Text, TouchableOpacity } from 'react-native';
import ItemButton from '../../components/itemButton';
import { PRODUCTS } from '../../constants/data';
import { styles } from './styles';

const Detail = ({navigation, route}) => {
  const {productId} = route.params
  const filteredProduct = PRODUCTS.find(product => product.id===productId)
  const {name, precio100gr, precioKg} = filteredProduct || {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del producto</Text>
      <Text>{name}</Text>
      <Text>Precio 100gr: ${precio100gr}</Text>
      <Text>Precio Kg: ${precioKg}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate('Categories')}>
        <ItemButton name={"Volver a Categorías"} />
      </TouchableOpacity>
    </View>
  );
};

export default Detail;