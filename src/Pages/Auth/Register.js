import './Auth.scss';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div>
      <section className="register-page">
      <div className="sign-up">
        <h2>Sign up</h2>
        <form
          className='signup_form'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <input type="email" placeholder="email" />
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
    </div>
  );
}