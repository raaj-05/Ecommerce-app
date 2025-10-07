import { StyleSheet, Text, View,Image, Pressable, Alert } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2';

const SocialComponent = () => {
  return (
    <View style={styles.container}>
      <Images source={require('../assets/google.jpg')} customStyle={{height:"75%",width:"75%"}}/> 
      <Images source={require('../assets/facebook.png')}/>
      <Images source={require('../assets/twitter.png')} customStyle={{height:"65%",width:"65%"}}/>
    </View>
  )
}

export default SocialComponent

const styles = StyleSheet.create({
    container:{
        marginTop:"8%",
        flexDirection:"row",
        justifyContent:"space-between"},
    image:{
        height:50,
        width:60,
        borderRadius:10,
        elevation:5,
         },
      imageWrapper:{
         height:50,
         width:80,
         elevation:0.1,
         borderRadius:6,
         overflow: 'hidden',
         backgroundColor: '#fff', 
         justifyContent:"center",
         alignItems:"center"
      }
})


const Images = ({source,customStyle}) =>{
       return(
        <Pressable >
                <Shadow distance={6} 
                startColor={'rgba(180, 178, 178, 0.1)'}
                radius={10} >
              <View style = {styles.imageWrapper}>
            <Image
             source={source}
             style={[{ height: "100%", width:"100%" },customStyle]}
             resizeMode="contain"
            />
         </View>
        </Shadow>
        </Pressable>
        
         
       )
}