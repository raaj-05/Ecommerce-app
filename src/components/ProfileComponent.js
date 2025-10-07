import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';

const ProfileComponent = ({
  leftIcon,
  text,
  rightArrow = 'arrow-forward-ios',
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftGroup}>
          <Icons name={leftIcon} size={30} style={styles.icons} />
          <Text
            style={{ verticalAlign: 'middle', fontSize: 18, fontWeight: '500' }}
          >
            {text}
          </Text>
        </View>

        <Icons name={rightArrow} size={20} style={styles.iconStyle} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    marginTop: 22
  },
  leftGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  icons: {
    color: '#0ed142ff',
    backgroundColor: '#9ff8b7ff',
    borderRadius: 30,
    padding: 4,
    alignSelf: 'center',
  },
  iconStyle: {
    color: '#0ed142ff',
    verticalAlign: 'middle',
  },
});
