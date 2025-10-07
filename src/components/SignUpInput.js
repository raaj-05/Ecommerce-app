import { View, Text, StyleSheet, TextInput} from 'react-native'
import React, { useState } from 'react'
import Btn from './Btn';
import SocialComponent from './SocialComponent';
import { useNavigation } from '@react-navigation/native';
import BoxInput from './BoxInput';
import CustomInput from './CustomInput'

const SignUpInput = () => {
  const navigation = useNavigation()
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.loginTxt}>Create your Account</Text>
      <CustomInput placeholder="Email"  value={email} onChangeText={setEmail} />
      <CustomInput placeholder="Password"  value={password} onChangeText={setPassword} />
      <CustomInput placeholder="Confirm Password"  value={confirmPassword} onChangeText={setConfirmPassword} />
        <Btn onPress={()=>navigation.navigate('LoginScreen')} title="Sign up"/>
        <Text style={styles.signup}>- Or sign in with -</Text>
      <SocialComponent/>
    </View>
  )
}

export default SignUpInput

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
    marginTop:"15%",
    textAlign:"center",
    fontSize:12,
    fontWeight:"400"
  }

})