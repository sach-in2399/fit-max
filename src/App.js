import logo from './logo.svg';
import {Route,Routes} from 'react-router-dom';
import {Box } from '@mui/material'
import './App.css';
import Home from './pages/Home';
import ExercizeDetail from './pages/ExercizeDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box width='400px' sx={{width:{x1:'1488px'}}}>
      <Navbar/>
      
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exercise/:id" element={<ExercizeDetail/>} m="auto"/>

        
    </Routes>
      <Footer/>      
    </Box>
  );
}

export default App;
