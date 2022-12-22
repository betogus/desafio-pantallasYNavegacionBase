import { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { deleteOrder, getOrders } from '../../store/actions/orders.action';
import { OrderItem } from '../../components';
import { styles } from './styles';

function Orders({ navigation }) {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const onDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
  return (
    <View style={styles.container}>
      <FlatList data={orders} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default Orders;
