import './App.css';
import SignUp from './Components/signup/signup';
import SignIn from './Components/signin/singin';
import Result from './Components/result/result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {useState} from 'react';
import SearchBar from './Components/search/searchBar';
function App() {

  return (
<Routes>
      <Route path="/" element={<SignUp />}></Route>
      <Route path="main" element={<SearchBar />}></Route>
      <Route path="signin" element={<SignIn />}></Route>
    </Routes>
    
    
  );
}

export default App;


/*
    <div>
      <div className="App">
    <SearchBar/>
    {showComponent ? <SignUp /> : <SignIn />}
    {showComponent ? (
      <button onClick={toggleComponent}>Have already an account? SignIn!</button>
    ) : (
      <button onClick={toggleComponent}>Dont have an account yet? SignUp!</button>
    )}
  </div>
  */