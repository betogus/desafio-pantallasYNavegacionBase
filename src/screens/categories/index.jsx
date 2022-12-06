import { FlatList } from 'react-native';
import { styles } from './styles';
import { CategoryItem } from '../../components';
import { CATEGORIES } from '../../constants/data/index';
import { SafeAreaView } from 'react-native-safe-area-context';

const Categories = ({navigation}) => {
  const onSelected = (item) => {
    navigation.navigate('Products', {categoryId: item.id, title: item.title, color: item.color})
  }

  const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected}/>
  
  return (
    <SafeAreaView style={styles.container}>
        <FlatList 
           data = {CATEGORIES}
           renderItem={renderItem}
           keyExtractor={item => item.id.toString()}
           style={styles.container}
           />
    </SafeAreaView>
    
  );
};

export default Categories;

