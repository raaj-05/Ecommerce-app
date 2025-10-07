import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductScreen from './src/screens/ProductScreen';
import { AppProvider } from './src/api/Context';

const App = () => {
  return (
    <AppProvider>
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.container}>
          {/* <ProductScreen/> */}

          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
        </View>
      </>
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeeeff',
  },
});
