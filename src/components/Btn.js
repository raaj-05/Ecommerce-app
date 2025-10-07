import { View, Text, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';


const Btn = ({onPress, title}) => {

  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.login}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Btn

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#000080',
        marginTop:"8%",
        height:47,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        elevation:3,
        shadowColor:"#000080"
    },
    login:{
        color:"white",
        fontSize:14,
        fontWeight:"500"
        
    }
})