import styled from 'styled-components';
import { useState, useEffect } from 'react';
import logo from '../assets/neutronStar1.png';
import { FormInput, Alert } from '../components';
import { useContextUser } from '../context/contextUser';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterLoginPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [alreadyUser, setAlreadyUser] = useState(true);
  const { user, showAlert, notAllValuesAlert, setupUser } = useContextUser();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const toggleMember = () => {
    setAlreadyUser(!alreadyUser);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    // if (!email || !password || (!alreadyUser && !name)) {
    //   notAllValuesAlert();
    //   return;
    // }
    const currentUser = { name, email, password };
    if (alreadyUser) {
      setupUser({
        currentUser,
        endUrl: 'login',
        alertText: 'Successful Login ! Redirecting...',
      });
    } else {
      setupUser({
        currentUser,
        endUrl: 'register',
        alertText: 'Account Created! Redirecting...',
      });
    }
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user, navigate]);
  return (
    <Wrapper className='wrp'>
      <div className='fullPage'>
        <form className='formLogin' onSubmit={onSubmit}>
          <img src={logo} className='logo' />
          <h3>{alreadyUser ? 'Login' : 'Register'}</h3>
          {showAlert && <Alert />}
          {!alreadyUser && (
            <FormInput
              type='text'
              name='name'
              value={values.name}
              handleChange={handleChange}
            />
          )}
          <FormInput
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />
          <FormInput
            type='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
          <button type='submit' className='submitBtn'>
            submit
          </button>
          <p>
            {alreadyUser ? 'Not a member yet?' : 'Already a member?'}
            <button type='button' onClick={toggleMember} className='regLogBtn'>
              {alreadyUser ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .fullPage {
    height: 100vh;
    display: grid;
    padding: 1rem 0;
    justify-content: center;
    background: #e3f6f5;
  }
  .logo {
    margin: 0 auto;
    width: 50px;
  }
  h3 {
    color: #272343;
    text-align: center;
  }
  .formLogin {
    padding: 1rem 2rem;
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    border-top: 5px solid #9e74e8;
    border-bottom: 5px solid #9e74e8;
    width: 400px;
    background: #fffffe;
  }
  .formLabel {
    color: #272343;
  }
  .formInput {
    padding: 0.7rem 0.5rem;
    width: 300px;
    border: none;
    background: #e3f6f5;
    border-radius: var(--radius);
  }
  .submitBtn {
    margin: 0.5rem 0;
    padding: 0.7rem 0;
    border: none;
    border-radius: var(--radius);
    background: #ffd803;
    color: #272343;
    text-transform: uppercase;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: #e0bf04;
    }
  }
  p {
    color: #272343;
  }
  .regLogBtn {
    margin-left: 1rem;
    border: none;
    padding: 0.4rem 2rem;
    color: #fffffe;
    background: #a786df;
    border-radius: var(--radius);
    transition: var(--transition);
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background: #9e74e8;
    }
  }
`;

export default RegisterLoginPage;
