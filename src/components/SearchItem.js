import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

const SearchItem = () => {
  const exitApp =()=>{
    BackHandler.exitApp();
  }
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={styles.backArrow}>
        <Pressable onPress={exitApp}>
          <Icon name="arrow-back" size={24} color="#000" />
        </Pressable>
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder='Search items'
          placeholderTextColor="black"
          style={styles.input}
        />
        <Pressable style={styles.clearIcon}>
          <Icon name="close" size={20} color="#000" />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  backArrow: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    elevation: 2,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  inputWrapper: {
    flex: 1,
    position: "relative",
  },
  input: {
    height: 50,
    borderRadius: 25,
    color: "black",
    paddingLeft: 15,
    paddingRight: 40,
    backgroundColor: "#fff",
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  clearIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
});
