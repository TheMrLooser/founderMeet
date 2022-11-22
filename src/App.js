import './CSS/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './componets/Navbar';
import { Landingpage } from './pages/Landingpage';
import { Footer } from './componets/Footer';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
       <div className='mainDiv'>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/find-match' element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
       </div>
    </>
  );
}

export default App;
