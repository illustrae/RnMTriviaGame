import { useState, useEffect } from 'react'
import axios from 'axios'

const HighScores = ({user}) => {
    const [userList, setUserList] = useState([])
    const userData = JSON.parse(localStorage.getItem("userData"));
    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
        .then(res => {
            console.warn(res.data)
            const sortedUsers = res.data.allUsers.sort((a, b) => b.score - a.score);
            setUserList(sortedUsers)
        })
        .catch(err => console.log(err))
    }, [])

  



    return (
        <div className='bg-bgWall bg-no-repeat bg-cover h-screen content-center justify-center flex'>
            {/* <h1 className = "bg-white">{userData.score}</h1> */}
            <div className='bg-yellow-400 p-4 w-[500px] mt-[20px] h-[500px] rounded-2xl opacity-80 overflow-auto'>
            {
                userList.map((oneUser) => {
                    return(
                        <div className="">
                            <p className='flex justify-center font-SchoolBell m-2 text-[#0B0C10] text-[40px]'>{oneUser.userName} - {oneUser.score}</p>
                            
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default HighScores