import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpInput from '../components/SignUpInput'

const SignUpScreen = () => {
  return (
   <View style={styles.container}>
      <Text style={styles.cignifiTxt}>cignifi</Text>
      <SignUpInput/>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '22%',
    backgroundColor:"white"
  },
  cignifiTxt: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000080',
    textAlign:"center"
  },
});
