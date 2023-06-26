import { useState, useEffect } from 'react'
import axios from 'axios'

const HighScores = ({user}) => {
    const [userList, setUserList] = useState([])
    const userData = JSON.parse(localStorage.getItem("userData"));
    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
        .then(res => {
            console.warn(res.data)
            setUserList(res.data.allUsers)
        })
        .catch(err => console.log(err))
    }, [])



    return (
        <div className='bg-bgWall bg-no-repeat bg-cover h-screen '>
            <h1 className = "bg-white">{userData.score}</h1>
            {
                userList.map((oneUser) => {
                    return(
                        <div className="bg-white">
                            <p>{oneUser.score}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HighScores