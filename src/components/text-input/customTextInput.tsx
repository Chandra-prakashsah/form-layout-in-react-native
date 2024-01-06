import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
interface ITextInputProps {
  value: string;
  handleChange: any;
  placeholder:string,
  name:string,
}
const CustomTextInput = ({ onChange, ...props}: any) => {

  return (
    <View style={styles.inputContainer}>
      <TextInput 
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onChange}
      {...props}
      />
    </View>
  );
};

export default CustomTextInput;

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
