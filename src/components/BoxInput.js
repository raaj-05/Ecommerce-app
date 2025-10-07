import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function BoxInput({placeholder,value,onChangeText}) {
  return (
    <View style={styles.container}>
      <View
          style={{
    position: 'absolute',
    top: 8,
    left: 0,
    right: 0,
    bottom: -8,
    backgroundColor: 'rgba(0,0,0,0.4)', // dark shadow color
    borderRadius: 12,
    zIndex: -1,
    // blur effect ke liye 3rd party library lag sakti hai
  }}
      />
      <LinearGradient
        colors={['transparent','rgba(255,255,255,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="grey"
          value={value}
          onChangeText={onChangeText}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    marginTop:"8%",
    borderRadius: 8,
    overflow: 'hidden',
    height: 50,
    width: '100%',
    elevation: 100, // shadow for visibility,
    shadowColor: '#000',
  },
  input: {
    height:50,
    paddingStart:16,
    fontSize: 14,
    borderRadius:8,
    backgroundColor:'transparent',
    textAlignVertical:"center",
  },
});
