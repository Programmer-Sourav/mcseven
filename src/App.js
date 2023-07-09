import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import ContinentsPage from './pages/ContinentsPage';
import CountriesPage from './pages/CountriesPage';
import CreateList from './pages/CreateList';
import DestinationCard from './components/DestinationCard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContinentsPage/>}></Route>
        <Route path="/countries/:id" element={<CountriesPage/>}> </Route>
        <Route path='/list/:id' element={<CreateList/>}></Route>
        <Route path="/details/:id" element={<DestinationCard/>}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;
