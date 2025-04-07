import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from './pages/CaptainLogin';
// import { UserDataContext } from './context/UserContext';
import Home from './pages/Home';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding';

const App = () => {

  return (
    <div>
      <Routes>
       <Route path='/home' element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>

        <Route path='/riding' element={<Riding/>}/>
  
        <Route path='/user/logout' element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>}/>
        
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/captain/logout' element={<CaptainProtectWrapper><CaptainLogout/></CaptainProtectWrapper>}/>
        <Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>}/>

      </Routes>
    </div>
  );
};

export default App;
