import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authSvg from './login.svg';
import FormInput from '../../components/formcomponent/input.component.jsx';
import FormButton from '../../components/formcomponent/button.component.jsx';
import Form from '../../components/formcomponent/form.component.jsx';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('please fill all fields');
    } else {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        setFormData({
          email: '',
          password: '',
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Form authSvg={authSvg} title='Sign In For Congar'>
      <form className='mx-auto max-w-xs relative ' onSubmit={handleSubmit}>
        <FormInput
          type='email'
          placeholder='example@mail.com'
          value={email}
          handlechange={handleChange('email')}
        />
        <FormInput
          type='password'
          placeholder='*********'
          value={password}
          handlechange={handleChange('password')}
        />
        <FormButton color='indigo' type='submit'>
          Sign In
        </FormButton>
        <FormButton
          color='red'
          onClick={(e) => {
            e.preventDefault();
            signInWithGoogle();
          }}
        >
          Google Sign
        </FormButton>
        <div className='flex justify-between mt-6'>
          <Link to='/register'>Sign Up</Link>
          <Link to='/'>Forget password?</Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginPage;
