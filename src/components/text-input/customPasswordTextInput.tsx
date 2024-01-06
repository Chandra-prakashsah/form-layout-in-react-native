import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
const CustomPasswordTextInput = ({ onChange,name, ...props}: any) => {
  const [show,hide]=useState(true)
  const handleEyeIcon=(name:string)=>{
          hide(false);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput 
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onChange}
      {...props}
      secureTextEntry={show}
      />
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>handleEyeIcon(name)}>
        <Image source={require('../../../assets/view.png')} style={{width:20,height:20}}/>
      </TouchableOpacity>
    </View>
  );
};

export default CustomPasswordTextInput;

const styles = StyleSheet.create({
  inputContainer:{
    width:'100%',
    flexDirection:'row',
    borderWidth:1,
  },
    input:{
        height:40,
        width:'90%'
    }
});
