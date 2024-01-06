
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../text-input/customTextInput";
import DropdownComponent from "../drop-down";
import { useForm, Controller } from "react-hook-form";
import CustomPasswordTextInput from "../text-input/customPasswordTextInput";

const FormLayout = (props: any) => {
  const { defaultValues, fromFields, options, formControls: { control, handleSubmit }, handleFormSubmit } = props;

  return (
    <View>
      <FlatList
        data={fromFields}
        renderItem={({ item }) => {
          return (
            <>
              <Text style={styles.label}>{item.label}</Text>
              <Controller
                name={item.name}
                control={control}
                rules={item.rules}
                defaultValue={defaultValues[item.name]}
                render={({ field: { ref, ...field }, fieldState: { invalid, error } }) => {
                  switch (item.fieldType) {
                    case "text":
                      return <>
                        <CustomTextInput
                          placeholder={item.placeHolder}
                          {...field}
                          // className={item.class}
                        />
                        {error?.message && (
                          <Text style={{ color: "red" }}>
                            {error.message}
                          </Text>
                        )}
                      </>
                    case 'password':
                      return <>
                        <CustomPasswordTextInput
                          placeholder={item.placeHolder}
                          {...field}
                        />
                        {error?.message && (
                          <Text style={{ color: "red" }}>
                            {error.message}
                          </Text>
                        )}
                      </>
                    case 'select':
                      return <>
                        <DropdownComponent
                          placeholder={item.placeHolder}
                          {...field}
                          option={options[item.name]}
                        />
                        {error?.message && (
                          <Text style={{ color: "red" }}>
                            {error.message}
                          </Text>
                        )}
                      </>
                    default: return <></>;
                  }
                }}
              />
            </>
          )
        }}
      />
      < View style={{ marginTop: 20 }}>
        <Button title="Submit" onPress={handleSubmit(handleFormSubmit)} />
      </View >
    </View>
  )
}

export default FormLayout;

const styles = StyleSheet.create({
  errorText: {
    color: "red",
  },
  label: {
    marginTop: 10,
  },
});
