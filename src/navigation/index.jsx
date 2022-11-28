import ShopNavigator from "./shop"
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <ShopNavigator/>
        </NavigationContainer>
    )
}

export default AppNavigator