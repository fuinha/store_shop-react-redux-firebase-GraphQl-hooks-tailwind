import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authSvg from './login.svg';
import FormInput from '../../components/formcomponent/input.component.jsx';
import FormButton from '../../components/formcomponent/button.component.jsx';
import Form from '../../components/formcomponent/form.component.jsx';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    password1: '',
  });
  const { email, password, password1, name } = formData;

  const handleChange = (text) => (e) => {
    console.log(email, password);
    setFormData({ ...formData, [text]: e.target.value });
  };
  return (
    <Form authSvg={authSvg} title='Sign Up For Congar'>
      <form
        className='mx-auto max-w-xs relative '
        // onSubmit={handleSubmit}
      >
        <FormInput
          type='email'
          placeholder='example@mail.com'
          value={email}
          handlechange={handleChange('email')}
        />
        <FormInput
          type='text'
          placeholder='Congar'
          value={name}
          handlechange={handleChange('name')}
        />
        <FormInput
          type='password'
          placeholder='*********'
          value={password}
          handlechange={handleChange('password')}
        />
        <FormInput
          type='password'
          placeholder='*********'
          value={password}
          handlechange={handleChange('password1')}
        />
        <FormButton color='indigo'>Register</FormButton>
        <div className='flex justify-between mt-6'>
          <Link to='/register'>Don't have an account? Sign In</Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginPage;
