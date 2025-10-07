import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const App = ({placeholder,value,onChangeText}) => {
  return (
    <View style={styles.container}>
      <Shadow
        distance={15}
        offset={[-1, 4]}
        startColor={'rgba(174, 166, 166, 0.1)'}
        radius={12}
        containerViewStyle={{ width: '90%' }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder={placeholder}
            placeholderTextColor="#797979ff"
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      </Shadow>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop:"8%",
    backgroundColor: '#f2f2f2',
    borderRadius:8,
    
  },

  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 47,
    width: '100%',
    paddingHorizontal: 12,
    justifyContent: 'center',
    flexDirection: 'row',  // ✅ THIS IS THE KEY
    alignItems: 'center',  // ✅ Vertically center the TextInput
    fontWeight:"bold"
  },

  inputBox: {
    flex: 1,               // ✅ Makes TextInput fill horizontal space
    fontSize: 14,
    color: 'grey',
  },
});
