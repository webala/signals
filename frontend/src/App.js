import './App.css';
import BuySignals from './components/BuySignals/BuySignals';
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { AuthProvider } from './context/AuthContext';
import CreateSeller from './components/Register/CreateSeller';


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signals' element={<BuySignals />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/merchant/create' element={<CreateSeller />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
