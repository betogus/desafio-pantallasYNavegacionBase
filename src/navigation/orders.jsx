import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Orders} from '../screens'
const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Orders' component={Orders} />
        </Stack.Navigator>
    )
}

export default OrderNavigator