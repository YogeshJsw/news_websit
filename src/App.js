import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App(){

  const apiKey = process.env.REACT_APP_NEWS_API_KEY

  const [progress,setProgress]=useState(0)
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            height={2}
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route path='/' element={<News apiKey={apiKey} progress={setProgress} key='top' pageSize={8} country='in' category='top' />}></Route>
            <Route path='/business' element={<News apiKey={apiKey} progress={setProgress} key='business' pageSize={8} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News apiKey={apiKey} progress={setProgress} key='entertainment' pageSize={8} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News apiKey={apiKey} progress={setProgress} key='health' pageSize={8} country='in' category='health' />}></Route>
            <Route path='/science' element={<News apiKey={apiKey} progress={setProgress} key='science' pageSize={8} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News apiKey={apiKey} progress={setProgress} key='sports' pageSize={8} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News apiKey={apiKey} progress={setProgress} key='technology' pageSize={8} country='in' category='technology' />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App; 