import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import React, { useCallback, useContext, useState } from 'react'
import Btn from './Btn';
import SocialComponent from './SocialComponent';
import { useNavigation } from '@react-navigation/native';
import BoxInput from './BoxInput';
import CustomInput from './CustomInput'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { loginApi } from '../api/auth';
import { AppContext } from '../api/Context';

const LoginInputComponent = () => {

  
const navigation = useNavigation()
    const { username, setUserName,loader,setLoader} = useContext(AppContext)
     const [password, setPassword] = useState('')
     const [error, setError] = useState('')

     const handleLogin = async()=>{
       try {
        setLoader(true)
        const data = await loginApi(username,password);
        console.log("this is  user data:", data);
        await AsyncStorage.setItem("userData", JSON.stringify(data));
    //     for (const key in data) {
    //   if (data.hasOwnProperty(key)) {
    //     console.log(`${key}: ${data[key]}`);
    //      await AsyncStorage.setItem(`${key}`, `${data[key]}`);
    //   }
    // }
        navigation.replace('BottomTabNavigator'); 
       } catch (error) {
        console.log(error)
        Alert.alert("Invalid Credential")
       }
       finally{
        setLoader(false)
       }
     }

  return (
    <View style={styles.container}>
      <Text style={styles.loginTxt}>Login to your Account</Text>
      <CustomInput placeholder="Username" value={username} onChangeText={setUserName} />
      <CustomInput placeholder="Password" value={password} onChangeText={setPassword}/>
      {
       loader ?  <Btn onPress={handleLogin} title="Loading..."/> : <Btn onPress={handleLogin} title="Sign in"/>
      }
      <Text style={styles.signup}>- Or sign in with -</Text>
      <SocialComponent/>
      <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}>
            <Text
             style={{textAlign:"center",
              marginTop:"25%",fontSize:14,
              fontWeight:"450",
              color:"#504d4dff"}}>
                 Don't have an account? <Text style={{color:"#000080", fontWeight:"400"}}>SignUp</Text>
                 </Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default LoginInputComponent

const styles = StyleSheet.create({  
    container:{
        padding:"8%",
        marginTop:35,
        backgroundColor:"white"
    },
     loginTxt: {
    paddingStart:10,
    fontSize: 20,
    fontWeight:"500",
    color:"#3c3b3bff"
  },
  signup:{
    marginTop:"20%",
    textAlign:"center",
    fontSize:15,
    fontWeight:"450",
    color:"#504d4dff"
  }
})