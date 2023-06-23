import { Footer, Game, QuestionList, Register, Login, Navbar } from './components'
import { Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';
import PrivateRoutes from './components/PrivateRoutes';

const App = () => {

  const [auth, setAuth] = useState({ 'userToken': false })
 
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  })
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  



  return (
    <div>
        <Navbar userLogin={userLogin} user={user} setUser={setUser} setUserLogin={setUserLogin} auth={auth} setAuth={setAuth} />
        <Routes>
          <Route element={<PrivateRoutes auth={auth} setAuth={setAuth} />}>
            <Route element={<Game />} path='/game' />
            <Route element={<QuestionList />} path='/character/:id' />
          </Route>
          <Route path="/" element={<Register user={user} setUser={setUser} setAuth={setAuth}/>} default />
          <Route path="/login" element={<Login userLogin={userLogin} setUserLogin={setUserLogin} setAuth={setAuth} />} />
          <Route path="/game" element={<Game />} />
          <Route path="/character/:id" element={<QuestionList />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App