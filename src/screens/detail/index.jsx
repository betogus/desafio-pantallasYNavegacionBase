import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import ItemButton from '../../components/itemButton';
import { styles } from './styles';

const Detail = ({navigation}) => {
  const product = useSelector(state => state.products.selected)
  const {name, precio100gr, precioKg} = product || {}

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