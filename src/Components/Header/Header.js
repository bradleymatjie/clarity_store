import './Header.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/Config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [showUser, setShowUser] = useState("");
  const navigate = useNavigate();

  const logOutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success('signed out');
      navigate("/login");
    }).catch((error) => {
      // An error happened.
      toast.error(error);
    });
  }

  // see the currently signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      //   const uid = user.uid;
        setShowUser(user.email);
      } else {
        setShowUser("");
      }
    })
  }, [setShowUser])

  return (
    <>
      <ToastContainer />
      <header className='header'>
      <div>
        <div className='logo'>
          <NavLink to='/'>
            <h1>CLARITY<span><br/>STORE</span></h1>
          </NavLink>
        </div>
        <div className='cart'>
          <p>0</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKONRhX7SjSxc7Nrc6ZKPfMsHDCwZsPo7zw&usqp=CAU"
            alt="cart icon" 
            width={45}
            height={40}
          />
        </div>
      </div>
      
      <nav>
        <ul>
          <li className='showUser'>{showUser}</li>

          <NavLink to='/'>
            <li>Home</li>
          </NavLink>

          <NavLink to='/contact'>
            <li>Contact</li>
          </NavLink>

          <NavLink to='/myorders'>
            <li>my orders</li>
          </NavLink>
          

          <li onClick={logOutUser}>Log out</li>
          
         {!showUser ?
            (
            <NavLink to='/login'>
              <li>LOG IN/SIGN UP</li>
            </NavLink>) : ""
          }
        </ul>
      </nav>
      </header>
    </>
  );
}