import React from 'react';
import {Header} from "./components/Header/Header.";
import {AuthPage} from "./components/AuthPage/AuthPage";

function App() {
  return (
    <div className="App">
      <Header/>
        <AuthPage type='login'/>
    </div>
  );
}

export default App;
