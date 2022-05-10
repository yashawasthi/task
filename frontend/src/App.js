import './App.css';
import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import NavBar from './components/NavBar';
import DataList from './components/DataList';
import AddData from './components/AddData';
import UpdateData from './components/UpdateData';

function App() {
  return (
  <BrowserRouter>
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<DataList />} />
      <Route path="add" element={<AddData />} />
      <Route path="edit/:id" element={<UpdateData />} />
    </Routes>
  </div>
  </BrowserRouter>
  
  );
}

export default App;