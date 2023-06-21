import { Footer, Game, QuestionList, Register, Login, Navbar } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import PrivateRoutes from './components/PrivateRoutes';

const App = () => {

  const[userLogin, setUserLogin] = useState({
    email:'',
    password:''
})
  const [user, setUser] = useState({
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
})

  const [auth, setAuth] = useState({'userToken': false})

  return (
    <div>
      <BrowserRouter>
        <Navbar userLogin={userLogin} user={user} setUser={setUser} setUserLogin={setUserLogin} auth={auth} setAuth={setAuth}/>
        <Routes>
          <Route element={<PrivateRoutes auth={auth} setAuth={setAuth} />}>
            <Route element={<Game/>}  path='/game'/>
            <Route element={<QuestionList/>} path='/character/:id'/>
          </Route>
          <Route path="/" element={<Register user={user} setUser={setUser} />} default />
          <Route path="/login" element={<Login userLogin={userLogin} setUserLogin={setUserLogin} />}  />
          <Route path="/game" element={<Game />} />
          <Route path="/character/:id" element={<QuestionList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App