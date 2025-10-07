import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0ed142ff',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, iconName, size, color }) => {
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';
            size = 30;
          } else if (route.name === 'ProductScreen') {
            iconName = focused ? 'list-circle' : 'list';
            size = 30;
          } else if (route.name === 'CartScreen') {
            iconName = focused ? 'cart' : 'cart-outline';
            size = 30;
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            size = 30;
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
