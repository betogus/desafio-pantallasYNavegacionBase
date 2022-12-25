import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { User, Maps } from '../screens';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Maps" component={Maps} options={{ title: "Mapa" }} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
