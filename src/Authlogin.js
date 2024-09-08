import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './Firebase'; 
import { toast } from 'react-toastify';

function Authlogin() {
  
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    
    // Use signInWithPopup to handle Google sign-in
    signInWithPopup(auth, provider)
      .then((result) => {
        // Successful login
        console.log(result);
        if (result.user) {
          toast.success('Successful login');
          window.location.href = '/Welcome'; // Redirect after successful login
        }
      })
      .catch((error) => {
        // Handle errors
        toast.error('Login failed: ' + error.message);
      });
  }

  return (
    <div onClick={googleLogin} style={{ cursor: 'pointer' }}>
      <img src={require('./google-plus.png')} width="18%" alt="Google Plus logo" />
    </div>
  );
}

export default Authlogin;
