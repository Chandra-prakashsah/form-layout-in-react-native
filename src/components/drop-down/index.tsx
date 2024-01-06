import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
interface IDropdownProps {
  placeholder: string;
  selectedValue: any;
  handleChange: any;
  option: Array<any>;
}
const DropdownComponent = ({onChange,option, ...props}:any) => {
  return (
    <Dropdown
      {...props}
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={option}
      search
      maxHeight={300}
      labelField="label"
      valueField="label"
      searchPlaceholder="Search..."
      onChange={(item: {label: string, value: string})=> onChange(item.label)}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: 38,
    borderWidth: 1,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 38,
    fontSize: 16,
  },
});
