import './App.css';
import {  Routes, Route } from 'react-router';
import Headder from './Headder';
import Mainheadder from './Mainheadder';
import Support from './Support';
import Help from './Help';
import Win from './Win';
var NavLink = require('react-router-dom').NavLink

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
            </li>
            <li>
            <NavLink to='/help'>help</NavLink>
            </li>
            <li>
            <NavLink to='/support'>Support</NavLink>
            </li>
            <li>
            <NavLink to='/win'>Win</NavLink>
            </li>
          
        </ul>
      </nav>
      <Routes>

<Route path='/' element={<div><Mainheadder/></div>} >
  <Route index element={<div>{<Headder />}</div>} />
<Route path='/support' element={<div><Support /> </div>}  />



<Route path='/help' element={<div><Help /></div>}  />

<Route path='/win' element={<div> <Win /></div>}  />
</Route> 
<Route path='*' element={<div>not found page</div>}  />

      </Routes>
    
    </div>
  );
}

export default App;
