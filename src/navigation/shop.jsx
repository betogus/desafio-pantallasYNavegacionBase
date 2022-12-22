import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Products, Detail } from '../screens';
import React from 'react';
import colors from '../constants/colors';
const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.backgroundBase,
        },
        headerTintColor: colors.primaryDark,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Poppins-Regular',
        },
        presentation: 'card',
      }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitle: '',
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
