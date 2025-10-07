import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../api/Context';
import Loader from '../components/Loader';
import Icons from 'react-native-vector-icons/Entypo';
import ProfileComponent from '../components/ProfileComponent';

const ProfileScreen = () => {
  const { userName } = useContext(AppContext);
  const navigation = useNavigation();

  const handleLogOut = async () => {
    // await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.clear();
    navigation.replace('LoginScreen');
  };
  const [userData, setUserData] = useState(null);

  const getDetail = async () => {
    try {
      const token = await AsyncStorage.getItem('userData');
      if (token !== null) {
        setUserData(JSON.parse(token));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#eff8f1ff' }}
      edges={['top', 'bottom']}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <View style={styles.container}>
        {userData ? (
          <>
            <Text style={{ fontSize: 24, fontWeight: '600' }}>Profile</Text>
            <TouchableOpacity>
              <View style={styles.profileImageWrapper1}>
                <View style={styles.profileImageWrapper2}>
                  <Image
                    source={{ uri: userData.image }}
                    style={styles.imageStyle}
                  />
                  <Icons name="edit" size={16} style={styles.editProfile} />
                </View>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginTop: 18,
              }}
            >
              {userData.firstName}
            </Text>
            <Text style={{ color: 'grey', fontWeight: '500', marginTop: 4 }}>
              {userData.userProfile?.phone || 'Phone not available'}
            </Text>
            <Text style={{ color: 'grey', fontWeight: '500' }}>
              {userData?.email || "Email not available"}
            </Text>
          </>
        ) : null}
        <ProfileComponent leftIcon="history" text="Order History" />
        <ProfileComponent leftIcon="location-pin" text="Shopping Address" />
        <ProfileComponent leftIcon="content-paste" text="Create Request" />
        <ProfileComponent leftIcon="lock" text="Privacy Policy" />
        <ProfileComponent leftIcon="settings" text="Setting" />
        <ProfileComponent
          leftIcon="logout"
          text="Log out"
          onPress={handleLogOut}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '6%',
    alignItems: 'center',
    borderRadius: 12,
  },
  logOutTxt: {
    fontSize: 25,
    backgroundColor: '#0ed142ff',
    padding: 12,
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 8,
  },
  imageStyle: {
    width: 90,
    height: 90,
  },
  profileImageWrapper1: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    marginTop: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0ed142ff',
  },
  profileImageWrapper2: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0ed142ff',
    backgroundColor: '#eaefecff',
    position: 'relative',
  },
  editProfile: {
    position: 'absolute',
    right: 1,
    bottom: 10,
    color: 'white',
    backgroundColor: '#0ed142ff',
    padding: 5,
    borderRadius: 26,
  },
});
