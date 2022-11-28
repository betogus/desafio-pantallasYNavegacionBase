import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Categories, Products, Detail } from '../screens';
import React from 'react'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    
    return (
        <Stack.Navigator 
        initialRouteName="Categories"
        screenOptions={{
            headerStyle: {
                backgroundColor: "#000000"
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
                fontFamily: "Poppins-Regular"
            },
        
        }}
        
        >
            <Stack.Screen 
            name='Categories' 
            component={Categories}
            />
            <Stack.Screen name='Products' component={Products}/>
            <Stack.Screen name='Detail' component={Detail}/>
        </Stack.Navigator>
    )
}

export default ShopNavigator