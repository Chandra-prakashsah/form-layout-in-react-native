import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import FormLayout from "../components/form-layout";
import { fromLayoutData, options,defaultValues } from "../constant/form-layout-fields";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
const Form = () => {
  
  const { control, handleSubmit, watch, setValue, trigger } = useForm({
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
    console.log({ name, password, confirmPassword, email,country,state,city });

    if (confirmPassword) {
      trigger("confirmPassword");
    }
  }, [name, password, confirmPassword, email,country,state,city]);

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
  options.city=cityData;
  options.state=stateData;
  // defaultValues.country="India";
  // defaultValues.state="Eng";
  // defaultValues.city="Motihari";
  return (
    <View>
      <FormLayout
        defaultValues={defaultValues}
        fromFields={fromLayoutData}
        options={options}
        formControls={{ control, handleSubmit }}
        handleFormSubmit={handleFormSubmit}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
