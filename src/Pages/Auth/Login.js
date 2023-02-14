import './Auth.scss';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <section className="login-page">
      <div className="signin">
        <h2>Login to your account</h2>
        <form
          className='signin_form'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <p>-------------------- or --------------------</p>
          <button>Log in with Google</button>
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
  );
}