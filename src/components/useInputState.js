import { useState } from "react";
const useInputState = (checkFunc) => {
  const [value, setValue] = useState("");
  const [isTouched, setifTouched] = useState(false);

  const enteredValueisInvalid = checkFunc(value);
  const fieldIsValid = !enteredValueisInvalid && isTouched;

  const onSetValue = (e) => {
    setValue(e.target.value);
  };

  const onsetTouched = () => {
    setifTouched(true);
  };

  const reset = () => {
    setValue("");
    setifTouched(false);
  };
  return {
    value,
    enteredValueisInvalid,
    onSetValue,
    onsetTouched,
    fieldIsValid,
    reset,
  };
};
export default useInputState;
