import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/home/Home';
import { Contact } from './Pages/contact/Contact';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Login } from './Pages/Auth/Login';
import { Register } from './Pages/Auth/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
