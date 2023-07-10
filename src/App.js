import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTravelForm from './components/AddTravelForm';
import Homepage from './components/Homepage';
import ViewDetail from './components/ViewDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/add-travel" element={<AddTravelForm/>} />
    <Route path="/view-detail/:travelId" element={<ViewDetail/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
