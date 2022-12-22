import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { User } from '../screens';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
