import { useState } from "react";
import validate from "./validateInfo";
const useForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    // console.log(errors);
  };

  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
