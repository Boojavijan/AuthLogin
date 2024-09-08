import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase'; 
import Authlogin from '../../Authlogin'; 
import './SignUp.css';

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, ''); 
    if (cleanPhoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit phone number.');
      setLoading(false);
      return;
    }

    try {
      
      await createUserWithEmailAndPassword(auth, phoneNumber + '@example.com', password); 
      navigate('/welcome');
    } catch (error) {
      console.error('Sign Up error:', error);
      setError('Failed to sign up. Please check your details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSignUp}>
            <div className="login__field">
              <i className="login__icon fas fa-phone"></i>
              <input
                type="text"
                className="login__input"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="login__error">{error}</div>}
            <button className="button login__submit" type="submit" disabled={loading}>
              <span className="button__text">{loading ? 'Processing...' : 'Sign Up'}</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <h3>Sign up via</h3>
            <div className="social-icons">
              <div className="social">
                <Authlogin />
              </div>
            </div>
            <div className="signup-link">
              <span>Already have an account? <a href="/">Log In</a></span>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
