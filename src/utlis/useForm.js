import { useState } from "react";

const useForm = (initialValue) => {
  const [values, setValue] = useState(initialValue);

  return [
    values,
    (e) => setValue({ ...values, [e.target.name]: e.target.value }),
  ];
};

export default useForm;
