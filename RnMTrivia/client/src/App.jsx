import { Footer, Game, QuestionList, Register, Login, Navbar, Trivia, HighScores } from './components'
import { Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';
import PrivateRoutes from './components/PrivateRoutes';

const App = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const [auth, setAuth] = useState({ 'userToken': false })
    
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })
    const [user, setUser] = useState({})





  return (
    <div>
        <Navbar userLogin={userLogin} user={user} setUser={setUser} setUserLogin={setUserLogin} auth={auth} setAuth={setAuth} />
        <Routes>
          <Route element={<PrivateRoutes auth={auth} setAuth={setAuth} />}>
            <Route element={<Game user={user} />} path='/game' />
            <Route element={<QuestionList />} path='/character/:id' />
            <Route element={<Trivia user={user} setUser={setUser} userData={userData} />} path='/trivia' />
            <Route path="/score" element={<HighScores user={user} />} />
          </Route>
          <Route path="/" element={<Register user={user} setUser={setUser} setAuth={setAuth}/>} default />
          <Route path="/login" element={<Login userLogin={userLogin} setUser={setUser} setUserLogin={setUserLogin} setAuth={setAuth} />} />
          <Route path="/game" element={<Game />} />
          <Route path="/character/:id" element={<QuestionList />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App