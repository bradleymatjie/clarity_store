import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/home/Home';
import { Contact } from './Pages/contact/Contact';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Login } from './Pages/Auth/Login';
import { Register } from './Pages/Auth/Register';
import { Reset } from './Pages/Auth/Reset';
import { useState } from 'react';

function App() {
  const [hasUser, setHasUser] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header setHasUser={setHasUser} hasUser={hasUser}/>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register />} />
          <Route path='/reset' element={ <Reset />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
