import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react'
import { portalJump, planet } from "../assets";




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

      <div className='bg-[#0B0C10] flex sm:flex-col  ss:flex-col lg:flex-row items-center md:justify-around  text-[#ffffff] overflow-hidden'>
        <img src={portalJump} className='hidden lg:block ml-10  w-[32vw] h-[85vh] mt-10 mb-5 md:flex-1 md:w-[32vw] md:h-[85vh] md:mt-0 md:mb-0 md:mr-20' />
        <div className='flex md:flex-col sm:overflow-y-hidden h-screen w-screen justify-center sm:items-center md:items-center'>
          <div className='w-full md:w-[750px] h-[400px] rounded-3xl bg-tvStatic bg-cover mt-50 items-center'>
            <h2 className='text-3xl text-center p-3 bg-[#fff719] text-[#0B0C10] rounded-t-3xl font-SchoolBell font-bold'>Who the heck is this squanchy little someone? </h2>
            <div className='flex justify-center p-2 text-center'>
              <img src={character.image} className='w-[200px] h-[200px] mt-6 mb-5 rounded-[50%] border-[#53900f] border-solid border-[3px]' />
              <div className='p-2'>
                <p className='characterInfo font-SchoolBell text-[#66FCF1] font-bold text-[25px] bg-black bg-opacity-80'>{character.name}</p>
                <p className='characterInfo font-SchoolBell text-[#fff719] mb-3 font-bold text-[25px] bg-black bg-opacity-80'>{character.species} </p>
                <div className='flex justify-center items-center characterInfo font-SchoolBell text-[#66FCF1] font-bold text-[18px] bg-black bg-opacity-80'>
                <img src={planet} className='w-10 m-2' />
                <p className=''>{character.location?.name}</p>
                </div> 
                <div className='characterInfo bg-black bg-opacity-80'>
                <p className='characterInfo font-SchoolBell  text-[#ffffff] p-3'>Status:</p>
                <p className='blink-glow font-SchoolBell text-[#fff719] font-bold text-[50px] '>{character.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default QuestionList