import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import authSvg from './login.svg';
import FormInput from '../../components/formcomponent/input.component.jsx'
import FormButton from '../../components/formcomponent/button.component.jsx'
import Form from '../../components/formcomponent/form.component.jsx'



const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password,  } = formData;
  
  const handleChange = text => e => {
    console.log(email, password)
    setFormData({ ...formData, [text]: e.target.value });
  };
    return (
      <Form authSvg={authSvg} title='Sign In For Congar'>
        <form
                className='mx-auto max-w-xs relative '
                // onSubmit={handleSubmit}
                >
                  <FormInput
                    type='email'
                    placeholder='example@mail.com'
                    value={ email }
                    handlechange={handleChange('email')}
                  />
                  <FormInput
                    type='password'
                    placeholder='*********'
                    value={ password }
                    handlechange={handleChange('password')}
                  />
                  <FormButton color='indigo'>
                    Sign In
                  </FormButton>
                  <div className="flex justify-between mt-6">
                    <Link to="/register">
                      Sign Up
                    </Link>
                    <Link to='/'>
                    Forget password?
                    </Link>
                  </div>
              </form>
      </Form>
              
            

    )
}

export default LoginPage
