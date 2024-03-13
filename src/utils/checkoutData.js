const customerForm = [
  {
    placeHolder: "First Name",
    type: "text",
    name: "firstName",
    options: [],
  },
  {
    placeHolder: "Last Name",
    type: "text",
    name: "lastName",
    options: [],
  },
  {
    placeHolder: "Select your country",
    type: "select",
    name: "country",
    options: ["USA", "Canada", "UK", "Australia", "Other"],
  },
  {
    placeHolder: "Street Address",
    type: "text",
    name: "address",
  },

  {
    placeHolder: "Select your state / region",
    type: "text",
    name: "region",
    options: ["California", "New York", "Texas", "Florida", "Other"],
  },
  {
    placeHolder: "Town / City",
    type: "text",
    name: "city",
    options: [],
  },
  {
    placeHolder: "Postcode / ZIP",
    type: "number",
    name: "zipCode",
    options: [],
  },
  {
    placeHolder: "Phone",
    type: "text",
    name: "phone",
    options: [],
  },
];

export default customerForm;
