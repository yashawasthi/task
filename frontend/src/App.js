import './App.css';
import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import EditData from './components/EditData';
import NavBar from './components/NavBar';
import DataList from './components/DataList';
import AddData from './components/AddData';

function App() {
  return (
  <BrowserRouter>
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<DataList />} />
      <Route path="add" element={<AddData />} />
      <Route path="edit/:id" element={<EditData />} />
    </Routes>
  </div>
  </BrowserRouter>
  
  );
}

export default App;