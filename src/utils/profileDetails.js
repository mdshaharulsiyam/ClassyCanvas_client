const profileInput = [
  {
    name: "firstName",
    type: "text",
    style: "md:col-span-3",
    placeHolder: "First Name",
    options: [],
  },
  {
    name: "lastName",
    type: "text",
    className: "md:col-span-3",
    placeHolder: "Last Name",
    options: [],
  },
  {
    name: "country",
    type: "select",
    className: "md:col-span-2",
    placeHolder: "Country",
    options: ["USA", "Canada", "UK", "Australia", "Other"],
  },
  {
    name: "city",
    type: "text",
    className: "md:col-span-2",
    placeHolder: "City",
    options: [],
  },
  {
    name: "region",
    type: "select",
    className: "md:col-span-2",
    placeHolder: "Region/State",
    options: ["California", "New York", "Texas", "Florida", "Other"],
  },
  {
    name: "address",
    type: "text",
    className: "md:col-span-6 md:row-span-2",
    placeHolder: "Address",
    options: [],
  },
  {
    name: "email",
    type: "email",
    className: "md:col-span-6 ",
    placeHolder: "Email",
    options: [],
  },
  {
    name: "phone",
    type: "text",
    className: "md:col-span-3 ",
    placeHolder: "Phone",
    options: [],
  },
  {
    name: "zipCode",
    type: "number",
    className: "md:col-span-3 ",
    placeHolder: "Zip Code",
    options: [],
  },
];

export default profileInput;
