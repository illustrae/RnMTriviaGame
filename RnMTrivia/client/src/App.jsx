import React from 'react'
import {Navbar, Footer, Game, QuestionList} from './components'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Game />} default/>
        <Route path="/character/:id" element={<QuestionList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App