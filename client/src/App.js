import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Planner from './pages/Planner';
import { Routes, Route} from 'react-router-dom';
import './components/CSS/App.css'



function App() {

  return (
    <>
    <div className='min-100'>
   <Header />
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/workouts' element={<Workouts />} />
   <Route path='/planner' element={<Planner />} />
   </Routes>
   <Footer />
   </div>
   </>
  );
}

export default App;
