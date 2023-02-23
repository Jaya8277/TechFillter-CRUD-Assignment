import './App.css';
import {Routes,Route} from 'react-router-dom';
import AddEmployee from './Components/pages/AddEmployee';
import Employee from './Components/pages/Employee';
import Navbar from './Components/pages/Navbar';
import EditEmploye from './Components/pages/EditEmploye';
import Details from './Components/pages/Details';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Employee/>}/> 
      <Route path='/add' element={<AddEmployee/>}/>
      <Route path='/edit/:id' element={<EditEmploye/>}/>
      <Route path='/detail/:id' element={<Details/>}/>
    </Routes>
    </div>
  );
}

export default App;
