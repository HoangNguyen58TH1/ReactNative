import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Categories from './screens/Categories'
import Category from './screens/Category'
import Cart from './screens/Cart'
import Orders from './screens/Orders'
import Settings from './screens/Settings'
// import Icon from 'react-native-vector-icons/FontAwesome';

const CategoryStack = createStackNavigator({
  Categories,
  Category
});
CategoryStack.navigationOptions = {
  tabBarLabel: 'Home'
}

const CartStack = createStackNavigator({ Cart })
CartStack.navigationOptions = {
  tabBarLabel: 'Cart'
}

const OrdersStack = createStackNavigator({ Orders })
OrdersStack.navigationOptions = {
  tabBarLabel: 'Oders'
}

const SettingsStack = createStackNavigator({ Settings })
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings'
}

const AppNavigator = createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrdersStack,
  SettingsStack
})

export default AppNavigator;
