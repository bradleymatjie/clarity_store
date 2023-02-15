import './Auth.scss';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase/Config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // eslint-disable-next-line
    const user = userCredential.user;
    toast.success("sign in succesful");
    navigate("/");
  })
  .catch((error) => {
    // eslint-disable-next-line
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage);
  });
  }

  const provider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // log in with google succesful succesful
    // eslint-disable-next-line
    const user = result.user;
    // ...
    toast.success("log in succesful");
    navigate("/");
    }).catch((error) => {
      toast.success(error.message);
    });
  }

  return (
    <>
      <ToastContainer />
      <section className="login-page">
      <div className="signin">
        <h2>Login to your account</h2>
        <form
          className='signin_form'
          onSubmit={loginUser}
        >
          <input 
            type="email"
             placeholder="email" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          <input 
            type="password"
             placeholder="password" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          <Link to='/reset'>
            <p>Forgot password?</p>
          </Link>
          <p>-------------------- or --------------------</p>
          <button onClick={loginWithGoogle}>Log in with Google</button>
          <button type="submit" className='submit-form'>Log in</button>
        </form>
      </div>

      <div className='signup'>
        <h2>NEW HERE?</h2>
        <p>sign up below to purchase your favourite stuff</p>
        <Link to='/register'>
          <button>Sign Up</button>
        </Link>
      </div>
      </section>
    </>
  );
}