import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import FormLayout from "../components/form-layout";
import {
  fromLayoutData,
  options,
  defaultValues,
} from "../constant/form-layout-fields";
import { useForm } from "react-hook-form";
const Form = () => {
  const { control, handleSubmit, watch, setValue, trigger, reset } = useForm({
    mode: "all",
  });

  const [name, password, confirmPassword, email, country, state, city] = watch([
    "name",
    "password",
    "confirmPassword",
    "email",
    "country",
    "state",
    "city",
  ]);

  useEffect(() => {
    console.log({
      name,
      password,
      confirmPassword,
      email,
      country,
      state,
      city,
    });

    if (confirmPassword) {
      trigger("confirmPassword");
    }
  }, [name, password, confirmPassword, email, country, state, city]);

  const countryData = [
    { label: "India", value: "1" },
    { label: "USA", value: "2" },
    { label: "England", value: "3" },
  ];
  const stateData = [
    { label: "Bihar", value: "1" },
    { label: "Gp", value: "2" },
    { label: "Eng", value: "3" },
  ];
  const cityData = [
    { label: "Motihari", value: "1" },
    { label: "uuuuss", value: "2" },
    { label: "Engssss", value: "3" },
  ];
  const handleFormSubmit = (values: any) => {
    console.log("-->", values);
  };
  options.country = countryData;
  options.city = cityData;
  options.state = stateData;
  defaultValues.country = "India";
  defaultValues.state = "Eng";
  defaultValues.city = "Motihari";

  const formReset = (event:any) => {
    event.persist();
    reset();
  };

  const button = (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity
        onPress={handleSubmit(handleFormSubmit)}
        style={[styles.btnStyle, styles.backgroundGreen]}
      >
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert("cancelled")}
        style={[styles.btnStyle, styles.backgroundRed]}
      >
        <Text style={styles.btnText}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={formReset}
        style={[styles.btnStyle, styles.backgroundBlue]}
      >
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <FormLayout
        defaultValues={defaultValues}
        fromFields={fromLayoutData}
        options={options}
        formControls={{ control, handleSubmit }}
        handleFormSubmit={handleFormSubmit}
        buttons={button}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  btnStyle: {
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  btnText: {
    fontSize: 16,
    color: "#ffffff",
  },
  backgroundRed: {
    backgroundColor: "red",
  },
  backgroundGreen: {
    backgroundColor: "green",
  },
  backgroundBlue: {
    backgroundColor: "blue",
  },
});
