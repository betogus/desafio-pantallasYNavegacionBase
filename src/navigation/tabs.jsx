import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './shop';
import CartNavigator from './cart';
import OrderNavigator from './orders';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import { useSelector } from 'react-redux';
import UserNavigator from './user';
const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
        },
        tabBarActiveTintColor: colors.title,
        tabBarInactiveTintColor: colors.background,
        tabBarActiveBackgroundColor: colors.buttonText,
        tabBarStyle: {
          paddingBottom: 10,
          height: 60,
        },
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: 'Shop',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'basket' : 'basket-outline'} size={22} color={colors.title} />
          ),
          
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={22} color={colors.title} />
          ),
          tabBarBadge: cart.length === 0 ? null : cart.length,
          tabBarBadgeStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
      <BottomTab.Screen
        name="OrderTab"
        component={OrderNavigator}
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray' : 'file-tray-outline'}
              size={22}
              color={colors.title}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="UserTab"
        component={UserNavigator}
        options={{
          title: 'User',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'person-circle-sharp' : 'person-circle-outline'} size={22} color={colors.title} />
          ),
          tabBarBadgeStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
