import { useState } from 'react';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    //! SubmitHandler needs to add

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
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
            <form onSubmit={submitHandler}>
                <div>
                    <label>Username:</label>
                    <input type="text" onChange={changeHandler} value={user.userName} name='userName' />
                    <label>Email:</label>
                    <input type="email" onChange={changeHandler} value={user.email} name='email' />
                    <label>Password:</label>
                    <input type="password" onChange={changeHandler} value={user.password} name='password' />
                    <label>Confirm Password:</label>
                    <input type='password' onChange={changeHandler} value={user.confirmPassword} name='confirmPassword' />
                </div>
                <button> Register </button>
                <Link className='text-blue' to={'/login'}> Already Have an account? Click here to login </Link>
            </form>
        </div>
    )
}

export default Register