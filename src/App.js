import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Add from './pages/user/Add';
import Edit from './pages/user/Edit';
import Users from './pages/user/Users';
import Testimoni from './pages/user/Testimoni';
import Tablemember from './pages/user/Tablemember';
import Loqin from './pages/user/Loqin';
import Register from './pages/user/register';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route  path="/home" exact element={<Home/>} />
        <Route  path="/users/:id" exact element={<Users/>} />
        <Route  path="/add-user" exact element={<Add/>} />
        <Route  path="/edit-user/:_id" exact element={<Edit/>} />
        <Route path="/testimonials*" element={<Testimoni/>} />
        <Route path="/tablemember*" element={<Tablemember/>} />
        <Route path="/login" element={<Loqin/>} />
        <Route path="/" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
