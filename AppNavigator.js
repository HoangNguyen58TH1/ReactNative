import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Categories from './screens/Categories'
import Category from './screens/Category'
import Cart from './screens/Cart'
import Orders from './screens/Orders'
import Settings from './screens/Settings'
import Icon from 'react-native-vector-icons/Ionicons';

const color = {
  ACTIVE: "tomato",
  INACTIVE: "#ccc"
}

const CategoryStack = createStackNavigator({
  Categories,
  Category
});
CategoryStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => {
    return <Icon name="home"
    size={36}
    color={ focused ? color.ACTIVE : color.INACTIVE }
    />
  },
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: '#ff00b4',
  },
} 

const CartStack = createStackNavigator({ Cart })
CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => {
    console.log('focused:', focused)
    return <Icon name="cart"
    size={36}
    color={ focused ? color.ACTIVE : color.INACTIVE }
    />
  },
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: '#ff00b4',
  },
}

const OrdersStack = createStackNavigator({ Orders })
OrdersStack.navigationOptions = {
  tabBarLabel: 'Oders',
  tabBarIcon: ({ focused }) => {
    return <Icon name="reorder-four"
    size={36}
    color={ focused ? color.ACTIVE : color.INACTIVE   }
    />
  },
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: '#ff00b4',
  },
}

const SettingsStack = createStackNavigator({ Settings })
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => {
    return <Icon name="cog"
    size={36}
    color={ focused ? color.ACTIVE : color.INACTIVE   }
    />
  },
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: '#ff00b4',
  },
}

const AppNavigator = createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrdersStack,
  SettingsStack
})

export default AppNavigator;
