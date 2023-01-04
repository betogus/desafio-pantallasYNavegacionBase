import { FlatList } from 'react-native';
import { styles } from './styles';
import { CategoryItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectCategory } from '../../store/slices/categorySlice';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  
  const onSelected = async (item) => {
    dispatch(selectCategory(item.id));
    await navigation.navigate('Products', { title: item.title });
  };
  
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected}  />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

export default Categories;
