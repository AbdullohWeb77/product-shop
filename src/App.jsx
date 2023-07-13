import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { Home , Login , All, New, User, Card} from './pages';
import Menu from './components/Menu/Menu';


function App() {
  return (
    <div className='App'>
    <Router>
      <Menu />
      <div className='body-con'>
      <Header />
        <div className='pages-con'>
          <Routes>
            <Route path='/' element={<Home />} exact/>
            <Route path='/login' element={<Login />} />
            <Route path='/all' element={<All />} />
            <Route path='/new' element={<New />} />
            <Route path='/user' element={<User />} />
            <Route path='/card' element={<Card />} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
