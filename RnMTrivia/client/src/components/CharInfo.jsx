import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react'




const QuestionList = () => {

  const { id } = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        console.log(response.data);
        setCharacter(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  return (
    <>
  

    <div className='bg-[#0B0C10] flex h-screen justify-center w-full text-[#ffffff]'>
      <div className='mt-10 w-[700px] h-[400px] rounded-3xl bg-tvStatic bg-cover'>
        <h2 className='text-3xl text-center p-3 bg-[#53900F] rounded-t-3xl font-SchoolBell font-bold'>Who the heck is this squanchy little someone? </h2>
        <div className='flex justify-center w-[100%] p-10 space-between text-center'>
        <img src={character.image} className='w-[200px] mt-10 items-center rounded-[50%] border-[#53900f] border-solid border-[3px]'/>
        <div className='p-2'>
        <p className='characterInfo font-SchoolBell text-[#fff719] font-bold text-[25px] bg-black bg-opacity-50'>{character.name}</p>
        <p className='characterInfo font-SchoolBell text-[#fff719]  mb-5 font-bold text-[25px] bg-black bg-opacity-50'>{character.species} <br /> {character.location?.name}</p>
        <p className='characterInfo font-SchoolBell text-[#ffffff] p-3 '>Status:</p>
        <p className='blink-glow mt-3 font-SchoolBell text-[#fff719] font-bold text-[50px]'> {character.status}</p>
        </div>
        </div>
      </div>
      {/* <button>Quit</button>
      <button>Next</button> */}
    </div>
    </>
  );
};

export default QuestionList