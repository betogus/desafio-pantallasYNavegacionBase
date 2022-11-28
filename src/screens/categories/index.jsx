import { View, Text, TouchableOpacity } from 'react-native';
import ItemButton from '../../components/itemButton';
import { styles } from './styles';
const Categories = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>Elige una categoría</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Products')}>
        <ItemButton name={"Ir a la lista de productos"}/>
      </TouchableOpacity>
      </View>
  );
};

export default Categories;

