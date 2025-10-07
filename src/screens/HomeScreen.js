import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductScreen from './ProductScreen'

const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
    <Text style={{fontSize:24}}>Welcome To My Shop</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})