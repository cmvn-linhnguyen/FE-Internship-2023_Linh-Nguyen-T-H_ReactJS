import { useState } from 'react';

interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const useForm = (callback: () => void) => {
  const [values, setValues] = useState<FormValues>({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value.trim();

    validate(name, value);
    setValues({ ...values, [name]: value });
  };

  const validate = (name: string, value: string) => {
    if (name === 'email' || name === 'password') {
      if (value === '') {
        setErrors({
          ...errors,
          [name]: 'This field is required',
        });
        return;
      } else {
        const newErrors = { ...errors };
        delete newErrors[name];
        setErrors(newErrors);
      }
    }

    switch (name) {
      case 'email':
        if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        ) {
          setErrors({
            ...errors,
            email: 'Enter a valid email address',
          });
        } else {
          const newErrors = { ...errors };
          delete newErrors.email;
          setErrors(newErrors);
        }
        break;

      case 'password':
        if (!/^.{6,}$/.test(value)) {
          setErrors({
            ...errors,
            password: 'Password should contain at least 6 characters',
          });
        } else {
          const newErrors = { ...errors };
          delete newErrors.password;
          setErrors(newErrors);
        }
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (values.email === '' || values.password === '') {
      setErrors({
        ...errors,
        email: values.email === '' ? 'Email is required' : '',
        password: values.password === '' ? 'Password is required' : '',
      });
      return;
    }

    if (Object.keys(errors).length === 0) {
      callback();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
