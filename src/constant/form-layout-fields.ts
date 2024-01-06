interface IFormData {
  fieldType: string;
  name: string;
  label: string;
  placeHolder?: string;
  rules: any;
}
export const fromLayoutData: Array<IFormData> = [
  {
    fieldType: "text",
    label: "Name",
    placeHolder: "Enter your name.",
    name: "name",
    rules: { required: "Name is required" },
  },
  {
    fieldType: "password",
    label: "Password",
    placeHolder: "Enter your password.",
    name: "password",
    rules: { required: "password is required" },
  },
  {
    fieldType: "password",
    label: "Confirmed Password",
    placeHolder: "Enter your password.",
    name: "confirmPassword",
    rules: {
      required: "Confirmed Password is required",
      validate: (value: string, allValues: any) => {
        return value === allValues.password || "Passwords do not match";
      },
    },
  },
  {
    fieldType: "text",
    name: "email",
    label: "Email",
    placeHolder: "Enter your Email.",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email format",
      },
    },
  },
  {
    fieldType: "select",
    name: "country",
    label: "Country",
    placeHolder: "please select country",
    rules: { required: "Country is required" },
  },
  {
    fieldType: "select",
    name: "state",
    label: "State",
    placeHolder: "pleasse select state",
    rules: { required: "State is required" },
  },
  {
    fieldType: "select",
    name: "city",
    label: "City",
    placeHolder: "please select city",
    rules: { required: "City is required" },
  },
  {
    fieldType: "select",
    name: "services",
    label: "Services Type",
    placeHolder: "please select type of services",
    rules: { required: "services type is required" },
  },
];

export const options = {
  country: [{label: "India", value: "India"}],
  state: [{label: "India", value: "India"}],
  city: [{label: "India", value: "India"}],
  services:[{label: "BSL", value: "bsl"}]
}
export const defaultValues = {
  name: "chandra",
  email: "cps@gmail.com",
  password: "t",
  confirmPassword: "t",
  country: "India",
  state: "Punjab",
  city: "Mohali",
  services:'',
};
