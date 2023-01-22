import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../constants/colors';
import { User, Maps } from '../screens';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={User}
      options = {{
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
      }} />
      <Stack.Screen name="Maps" component={Maps} options={{ title: "Mapa" }} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
