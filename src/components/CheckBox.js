import { StyleSheet,  View } from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox'


const CheckBox = () => {
  return (
    <View>
     <CheckBox  value={value}
        onValueChange={onValueChange}
        tintColors={{ true: '#00ff08ff', false: '#f44336' }}
        style={styles.checkBox}
        />
        
    </View>
  )
}

export default CheckBox

const styles = StyleSheet.create({
    checkBox:{
        height:40,
        width:40
    }
})