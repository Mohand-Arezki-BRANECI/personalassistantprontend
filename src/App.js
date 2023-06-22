import './App.css';
import SignUp from './Components/signup/signup';
import SignIn from './Components/signin/singin';
import Result from './Components/result/result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SearchBar from './Components/search/searchBar';
import Main from './Components/main/main';
function App() {

  return (
<Routes>
      <Route path="/" element={<SignUp />}></Route>
      <Route path="signin" element={<SignIn />}></Route>
      <Route path="main" element={<Main />}></Route>
</Routes>
    
    
  );
}

export default App;


