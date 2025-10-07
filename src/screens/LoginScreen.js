import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';
import React, { useState } from 'react';
import LoginInputComponent from '../components/LoginInputComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {

  return (
     <SafeAreaView
          style={{ flex: 1, backgroundColor: '#fff' }}
          edges={['top', 'bottom']} >
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <View style={styles.container}>
      <Text style={styles.cignifiTxt}>cignifi</Text>
     <LoginInputComponent/>
    </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '25%',
    backgroundColor:"white"
  },
  cignifiTxt: {
    fontSize: 32,
    fontWeight:"bold",
    color:'#000080',
    textAlign:"center"
  },
});
