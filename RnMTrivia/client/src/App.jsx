import { Footer, Game, QuestionList, Register, Login } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} default />
          <Route path="/login" element={<Login />}  />
          <Route path="/game" element={<Game />} />
          <Route path="/character/:id" element={<QuestionList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App