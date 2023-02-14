import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
      <div>
        <div className='logo'>
          <NavLink to='/'>
            <h1>CLARITY<span><br/>STORE</span></h1>
          </NavLink>
        </div>
        <div className='cart'>
          <p>Cart: 0</p>
        </div>
      </div>
      
      <nav>
        <ul>
          <li>hi bradley</li>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>

          <NavLink to='/contact'>
            <li>Contact</li>
          </NavLink>

          <NavLink to='/myorders'>
            <li>my orders</li>
          </NavLink>
          
          <NavLink to='sign up'>
            <li>SIGN UP</li>
          </NavLink>

          <NavLink to='login'>
            <li>LOG IN</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}