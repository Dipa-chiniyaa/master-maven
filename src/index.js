import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MasterMavenLayout from './layouts/masterMavenLayout';
import Home from './pages/Home';
import Subject from './pages/subject';
import Faculty from './pages/faculty';
import Student from './pages/student';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<MasterMavenLayout/>}>
    <Route index element={<Home />} />
    <Route path='/subject' element={<Subject />} />
    <Route path='/student' element={<Student />} />
    <Route path='/faculty' element={<Faculty />} />
      
    </Route>
  </Routes>
  </BrowserRouter>
  </>
);

