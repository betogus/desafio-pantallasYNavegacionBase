import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from './shop'
import CartNavigator from "./cart";
import OrderNavigator from "./orders";
import {Ionicons} from '@expo/vector-icons'
import colors from "../constants/colors";
const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <BottomTab.Navigator
        initialRouteName="ShopTab"
        screenOptions={{
            
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                
            },
            tabBarActiveTintColor: colors.title,
            tabBarInactiveTintColor: colors.background,
            tabBarActiveBackgroundColor: colors.buttonText,
            tabBarStyle: {
                paddingBottom: 10,
                height: 60 
            }
        }}
        >
            <BottomTab.Screen name='ShopTab' component={ShopNavigator} 
            options={{
                title: 'Shop',
                tabBarIcon: ({focused}) => (
                    <Ionicons
                    name={focused ? 'basket' : 'basket-outline'}
                    size={22}
                    color={colors.title}
                    />
                )
                
            }}
            />
            <BottomTab.Screen name='CartTab' component={CartNavigator} 
            options={{
                title: 'Cart',
                tabBarIcon: ({focused}) => (
                    <Ionicons
                    name={focused ? 'cart' : 'cart-outline'}
                    size={22}
                    color={colors.title}
                    />
                )
            }}
            />
            <BottomTab.Screen name='OrderTab' component={OrderNavigator} 
            options={{
                title: 'Orders',
                tabBarIcon: ({focused}) => (
                    <Ionicons
                    name={focused ? 'file-tray' : 'file-tray-outline'}
                    size={22}
                    color={colors.title}
                    />
                )
            }}
                />
        </BottomTab.Navigator>
    )
}

export default Tabs