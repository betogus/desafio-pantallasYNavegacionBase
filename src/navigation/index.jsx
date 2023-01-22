import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthNavigator from './auth';
import TabNavigator from './tabs';
import { useDispatch, useSelector } from 'react-redux';
import { loguearse } from '../store/thunk';
import store from '../store'
const AppNavigator = () => {
  const userId = useSelector(state => state.auth.userId)
 
  return (
    <NavigationContainer>
      {userId ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
