import './App.css';
import {Routes,Route} from 'react-router-dom';
import AddEmployee from './Components/AddEmployee';
import Employee from './Components/Employee';
import Navbar from './Components/Navbar';
import EditEmploye from './Components/EditEmploye';
import Details from './Components/Details';
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
