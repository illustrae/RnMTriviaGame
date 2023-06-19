import { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'


const Login = () => {
    
    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    const changeHandler = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
    }

    const loginHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/game')
            })
            .catch((err) => { 
                console.log(err); 
            });

    }

  return (
    <div>
          <form onSubmit={loginHandler}>
                <div>
                    <label>Email:</label>
                    <input type="email" onChange={changeHandler} value={userLogin.email} name='email' />
                    <label>Password:</label>
                    <input type="password" onChange={changeHandler} value={userLogin.password} name='password' />
                </div>
                <button> Login </button><br />
                <Link className='text-blue' to={'/'}> Dont have an account? click here to sign up </Link>
            </form>

    </div>
  )
}

export default Login