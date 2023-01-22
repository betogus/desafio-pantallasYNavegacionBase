import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { addToCart } from '../../store/slices/cartSlice';
import { Ionicons } from '@expo/vector-icons';

const Detail = ({ navigation, route }) => {
  let { thumbnail } = route.params
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);
  const { name, precio100gr, precioKg } = product || {};
  const cart = useSelector((state) => state.cart.items);
  
  const countProduct = (currentItem) => {
    const productExist = cart.find(item => item.name === currentItem.name)
    if (productExist) return productExist.quantity
    else return 0
  }

  const onAddToCart = () => {
    dispatch(addToCart(product));
   
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: thumbnail}} style={styles.image}></Image>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={onAddToCart}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>$ {precio100gr} (100g) </Text>
            <View style={styles.iconContainer}>
              <Ionicons name={'add-circle-outline'} size={25} color={"#6e6c6c"}/>
              <Text style={styles.text}>({countProduct(product)})</Text>
            </View>
            
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => navigation.navigate('Categorías')}>
          <Ionicons name="chevron-back-sharp" size={24} color={"#6e6c6c"} />
          <Text style={styles.text}>Volver a Categorías</Text>
        </TouchableOpacity>
        </View>
      
    </View>
  );
};

export default Detail;
