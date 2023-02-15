import './Auth.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/Config';
import { ToastContainer, toast } from 'react-toastify';

export const Reset = () => {
  const [email, setEmail] = useState("");

  const resetAccount = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("email to reset is sent")
    }).catch((error) => {
      toast.error(error.message);
    })
  }

  return (
    <>
    <ToastContainer />
    <section className="reset-page">
      <h1>Forgot your password?</h1>
      <p>enter your email below to recover it</p>
        <form onSubmit={resetAccount}>
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <button type="submit">Reset</button>
          <Link to="/login">
            <p className='bcToLogin'>Back to login</p>
          </Link>
        </form>
    </section>
    </>
  );
}