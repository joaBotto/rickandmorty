export default function validate(inputs) {
  const regexEmail =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexPass = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
  let errors = {};
  !inputs.email ? (errors.email = "Email clean") : (errors.email = "");
  !regexEmail.test(inputs.email)
    ? (errors.email = "Invalid email")
    : (errors.email = "");
  regexPass.test(inputs.password)
    ? (errors.password = "Invalid password")
    : (errors.password = "");
  return errors;
}
