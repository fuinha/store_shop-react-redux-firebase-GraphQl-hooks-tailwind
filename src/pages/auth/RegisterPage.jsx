import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authSvg from './login.svg';
import FormInput from '../../components/formcomponent/input.component.jsx';
import FormButton from '../../components/formcomponent/button.component.jsx';
import Form from '../../components/formcomponent/form.component.jsx';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils.js'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    password1: '',
  });
  const { email, password, password1, name } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault()
    if (!name || !email || !password) {
      alert('please fill all fields')
    }else if(password !== password1) {
      alert('passwords don\'t match');
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password)
        await createUserProfileDocument(user, { displayName: name })
        setFormData({
          name: '',
          email: '',
          password: '',
          password1: ''
        })
      } catch (error) {
        console.log(error)
      }
    }

    
  }
  return (
    <Form authSvg={authSvg} title='Sign Up For Congar'>
      <form
        className='mx-auto max-w-xs relative '
        onSubmit={handleSubmit}
      >
        <FormInput
          type='email'
          placeholder='example@mail.com'
          value={email}
          handlechange={handleChange('email')}
        />
        <FormInput
          type='text'
          placeholder='Name'
          value={name}
          handlechange={handleChange('name')}
        />
        <FormInput
          type='password'
          placeholder='Password'
          value={password}
          handlechange={handleChange('password')}
        />
        <FormInput
          type='password'
          placeholder='Confirm Password'
          value={password1}
          handlechange={handleChange('password1')}
        />
        <FormButton type='submit' color='indigo'>Register</FormButton>
        <div className='flex justify-between mt-6'>
          <Link to='/login'>Don't have an account? Sign In</Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginPage;
