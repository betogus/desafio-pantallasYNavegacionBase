import { FlatList } from 'react-native';
import { ProductItem } from '../../components';

import { PRODUCTS } from '../../constants/data';
import { styles } from '../categories/styles';

const Products = ({navigation, route}) => {

  const {categoryId, color } = route.params;
  const filteredProducts = PRODUCTS.filter(product => product.categoryId === categoryId)
  const onSelected = (item) => navigation.navigate('Detail', {title: item.name, productId: item.id})
  const renderItem = ({item}) => <ProductItem item = {item} onSelected={onSelected} color={color}/>
  return (
    <FlatList
    data={filteredProducts}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()}
    style={styles.container}
    />
    
  );
};

export default Products;