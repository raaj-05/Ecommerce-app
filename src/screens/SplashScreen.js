import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation()
 const checkAuth = async()=>{
    const token = await AsyncStorage.getItem("userData")
    const auth = JSON.parse(token)
    if(auth){
        navigation.replace('BottomTabNavigator');
      }
      else{
         navigation.replace('LoginScreen');
      }
 }

  useEffect( () => {
    checkAuth()
  
  }, [])
  
  return (
    <View style={styles.container}>
      <Image
      source={require('../assets/cignifi.png')}
      style={styles.image}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#00008B"
  },
  image:{
    height:200,
    width:200
  }
})