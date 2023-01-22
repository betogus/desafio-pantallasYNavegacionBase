import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../constants/colors';
import { Orders } from '../screens';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Orders" 
      component={Orders}
      options={{
        headerStyle: {
           backgroundColor: colors.primary,
        },
         headerTintColor: "#fff",
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'normal',
          fontWeight: '900',
          fontSize: 25,
        }
      }}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
