import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { CartItem } from '../../components';
import { confirmCart } from '../../store/thunk';
import { removeFromCart } from '../../store/slices/cartSlice';

function Cart({ navigation }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const onDelete = (id) => dispatch(removeFromCart(id));
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;

  const onCreateOrder = () => {
    dispatch(confirmCart(cart, total));
  };
  return (
    <View style={styles.container}>
      <FlatList data={cart} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      <View style={cart.length === 0 ? styles.buttonDisabled : styles.footer}>
        <TouchableOpacity disabled={cart.length === 0} onPress={onCreateOrder}>
          <Text style={styles.textTotal}>Total</Text>
          <Text style={styles.textTotal}>${total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Cart;
