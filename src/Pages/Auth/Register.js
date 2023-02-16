import './Auth.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/Config';

export const Register = ({ setShowUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const navigate = useNavigate();
  
  const registerUser = (e) => {
    e.preventDefault();
    if (password !== conPassword) {
      toast.error("password do not match");
    }

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    // eslint-disable-next-line
    const user = userCredential.user;
    toast.success("account succesfully created");
    navigate("/");
  })
  .catch((error) => {
    // eslint-disable-next-line
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage);
    // ..
  });
  }

  return (
    <>
    <ToastContainer />
    <section className="register-page">
      <div className="sign-up">
        <h2>Sign up</h2>
        <form
          className='signup_form'
          onSubmit={registerUser}
        >
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(state) => {
              setEmail(state.target.value);
            }}
            required
          />
          <input 
            type="password" 
            placeholder="password"
            value={password}
            onChange={(state) => {
              setPassword(state.target.value);
            }}
            required
          />
          <input 
            type="password" 
            placeholder="confirm password" 
            value={conPassword}
            onChange={(state) => {
              setConPassword(state.target.value);
            }}
            required
          />
          <p>-------------------- or --------------------</p>
          <button>Sign up with Google</button>
          <button type="submit" className='submit-form'>Sign Up</button>
        </form>
      </div>

      <div className='signin'>
        <h2>ALREADY HAVE AN ACCOUNT?</h2>
        <p>log in and continue browsing...</p>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
    </section>
    </>
  );
}