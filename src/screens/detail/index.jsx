import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';
import { useDispatch, useSelector } from 'react-redux';
import ItemButton from '../../components/itemButton';
import { styles } from './styles';
import { addToCart } from '../../store/actions';
import colors from '../../constants/colors';

const Detail = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);
  const { name, precio100gr, precioKg } = product || {};

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del producto</Text>
      <Text>{name}</Text>
      <Text>Precio 100gr: ${precio100gr}</Text>
      <Text>Precio Kg: ${precioKg}</Text>
      <Button title="Add to cart" onPress={onAddToCart} color={colors.button} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Categories')}>
        <ItemButton name={'Volver a Categorías'} />
      </TouchableOpacity>
    </View>
  );
};

export default Detail;
