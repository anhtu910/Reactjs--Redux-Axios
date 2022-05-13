
import './App.css';
import Header from './component/Header';
import Indexdefault from './page/indexdefault';
import { Route,Link,Routes, BrowserRouter } from 'react-router-dom';

import Login from './page/Login';
import UserList from './page/User';



function App() {
  
  return (
<BrowserRouter>

    
<Routes>
  <Route path='/' element={<Header/>}>
    <Route index element={<Indexdefault/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='User' element={<UserList/>}>
    </Route>
    
  </Route>
  
</Routes>
</BrowserRouter>



  
  );
}

export default App;
