import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../api/Context';

const Loader = () => {
    const {loader}= useContext(AppContext);
  return (
    <View style={styles.container}>
     <ActivityIndicator size={50} animating={loader} color="blue"/>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})