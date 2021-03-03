const validateInfo = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "Username required";
  }
  if (!values.password) {
    errors.password = "Password required";
  }
  return errors;
};

export default validateInfo;
