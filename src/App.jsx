import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Users from './routes/Users';
import UserDetails from './routes/UserDetails';

const App = () => {

  return (
    <BrowserRouter>
      <div className="container m-2">
        <div className="row justify-content-center">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:userid' element={<UserDetails />} />
            <Route path='*' element={<h1 className='row justify-content-center'>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
