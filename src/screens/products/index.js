import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ProductItem } from '../../components';
import { filterProducts, selectProduct } from '../../store/slices/productsSlice';

import { styles } from '../categories/styles';

function Products({ navigation, route }) {
  let { thumbnail } = route.params
  const category = useSelector((state) => state.category.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, [category]);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('Detail', { title: item.name, thumbnail: thumbnail });
  };
  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
}

export default Products;
