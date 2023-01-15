import React from 'react';
import {Header} from "./components/Header/Header.";
import {AuthPage} from "./components/AuthPage/AuthPage";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
          <Routes>
            <Route path='/' element={<AuthPage type='login'/>}/>
            <Route path='/registration' element={<AuthPage type='registration'/>}/>
            <Route path='/login' element={<AuthPage type='login'/>}/>
            <Route path='/costs' element={<h1>Costs</h1>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
