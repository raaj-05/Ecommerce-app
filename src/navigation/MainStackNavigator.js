import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import { useState, useEffect } from 'react';
import ProductScreen from '../screens/ProductScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { Pressable } from 'react-native';
import Icons from 'react-native-vector-icons/Entypo'
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 1000);
  }, []);
  return (
    <Stack.Navigator>
      {showSplashScreen ? (
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
      ) : null}
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}
       options={{
        headerShown:true,
        title:null,
        headerTransparent: true, 
        headerTintColor: '#00008B', 
        headerShadowVisible: false, 
        }} />
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="ProductScreen" component={ProductScreen}
        options={{
        headerShown:false,
        }} /> */}
        <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{
        headerShown:true,
        title :"Details",
        headerTransparent: true, 
        headerTintColor:  "#fff", 
        headerShadowVisible: false, 
         headerTitleAlign: "center",
         headerRight: ()=>(
          <Pressable>
            <Icons name="heart-outlined" size={24}  color="#fff"/>
          </Pressable>
         )
        }}/>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
