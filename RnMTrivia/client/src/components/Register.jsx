import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import portal from '../assets/images/portal.gif'

const Register = ({user, setUser, setAuth}) => {

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
            .then((res) => {
                console.log(res);
                localStorage.setItem("userToken", res.data.userToken)
                setAuth({userToken: true}),
                navigate('/game')
            })
            .catch((err) => { 
                console.log(err); 
            });

    }
    useEffect(() => {
    
        let userToken = localStorage.getItem('userToken')
        console.log(userToken)
        if(userToken !== null){
          // console.log("heyyy", userToken)
          setAuth({"userToken": true})
          console.log(location.state)
          navigate(location.state?.prev?location.state.prev:'/game')
        }
    
      }, []);

    return (
        <div className='bg-[#0B0C10]'>
            <h1 className='text-center drop-shadow-lg relative top-[60px] text-[75px] font-SchoolBell text-yellow-300'> RICK AND MORTY TRIVIA</h1>
            <div className='portal'>
            <div className='flex flex-col w-screen min-h-screen items-center justify-center'>
            <form onSubmit={submitHandler}>
                <div className=' relative'> 
                    <input type="text" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-[#0B0C10] dark:bg-[#0B0C10] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#66FCf1] focus:outline-none focus:ring-0 focus:border-[#66FCf1] peer" placeholder=" " onChange={changeHandler} value={user.userName} name='userName' />
                    <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#66FCf1] peer-focus:dark:text-[#66FCf1]peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"> Username:</label>
                </div>
                <div className='relative'> 
                    <input type="email" id="floating_filled1" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-[#0B0C10] dark:bg-[#0B0C10] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#66FCf1] focus:outline-none focus:ring-0 focus:border-[#66FCf1] peer" placeholder=" " onChange={changeHandler} value={user.email} name='email' />
                    <label htmlFor="floating_filled1" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#66FCf1] peer-focus:dark:text-[#66FCf1]peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email:</label>
                </div>
                <div className='relative'>  
                    <input type="password" id="floating_filled2" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-[#0B0C10] dark:bg-[#0B0C10] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#66FCf1] focus:outline-none focus:ring-0 focus:border-[#66FCf1] peer" placeholder=" " onChange={changeHandler} value={user.password} name='password' />
                    <label htmlFor="floating_filled2" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#66FCf1] peer-focus:dark:text-[#66FCf1]peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password:</label>
                </div>
                <div className='relative'> 
                    <input type="password" id="floating_filled3" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-[#0B0C10] dark:bg-[#0B0C10] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#66FCf1] focus:outline-none focus:ring-0 focus:border-[#66FCf1] peer" placeholder=" " onChange={changeHandler} value={user.confirmPassword} name='confirmPassword' />
                    <label htmlFor="floating_filled3" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#66FCf1] peer-focus:dark:text-[#66FCf1]peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Confirm Password:</label>
                </div>
                <button className='bg-[#66FCf1] border-yellow-400 border-[2px] hover:bg-yellow-400 rounded-xl p-2 mt-5'> Register </button>
                <Link to={'/login'}> <p className='text-[14px] hover:text-[#66FCf1] bg-[#0B0C10] p-2 rounded-b-xl bg-opacity-60 font-semibold text-yellow-400 mt-5'>Already Have an account? Click here to login</p></Link>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Register