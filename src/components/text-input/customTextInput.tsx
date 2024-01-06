import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
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
