import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Products, Detail } from '../screens';
import React from 'react';
import colors from '../constants/colors';
const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categorías"
      screenOptions={
        {
        headerStyle: {
          height: 40,
        },
        
        headerTintColor: "#fff",
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'normal',
          fontWeight: '900',
          fontSize: 25,
        },
        presentation: 'card',
      }} >
      <Stack.Screen 
      name="Categorías" 
      component={Categories} 
      options={{
        headerStyle: {
           backgroundColor: colors.primary,
           
        },

      }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.title,
          thumbnail: route.params.thumbnail,
          headerStyle: {
            backgroundColor: colors.primary,

          },
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          title: route.params.title,
          thumbnail: route.params.thumbnail,
          headerBackTitle: '',
          headerShown: false
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
