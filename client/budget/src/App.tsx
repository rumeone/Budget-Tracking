import React, {useEffect} from 'react';
import {Header} from "./components/Header/Header.";
import {AuthPage} from "./components/AuthPage/AuthPage";
import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import {useStore} from "effector-react";
import {$auth, setAuth, setUsername} from "./context/auth";
import {$alert} from "./context/alert";
import {Alert} from "./components/Alert/Alert";
import {CostsPage} from "./components/CostsPage/CostsPage";
import {getAuthDataFromLS, removeUser} from "./utils/auth";

function App() {
  const isLoggedIn = useStore($auth);
  const alert = useStore($alert);
  console.log("App.tsx " + isLoggedIn);

  useEffect(() => {
    const auth = getAuthDataFromLS();

    if(!auth || !auth.access_token || !auth.refresh_token) {
      removeUser();
    }
    else {
      setAuth(true);
      setUsername(auth.username);
    }
  }, [])
  return (
    <div className="App">
      <Header/>
      {alert.alertText && <Alert props={alert}/>}
        <Router>
          <Routes>
            <Route path='/' element={isLoggedIn ? <Navigate to='/costs'/> : <Navigate to='login'/>}/>
            <Route path='/registration' element={isLoggedIn ? <Navigate to='/costs'/> : <AuthPage type='registration'/>}/>
            <Route path='/login' element={isLoggedIn ? <Navigate to='/costs'/> : <AuthPage type='login'/>}/>
            <Route path='/costs' element={isLoggedIn ? <CostsPage/> : <Navigate to='/login'/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
