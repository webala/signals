import './App.css';
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
