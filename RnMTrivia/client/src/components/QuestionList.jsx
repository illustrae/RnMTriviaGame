import { useParams } from "react-router-dom";
import Navbar from "./Navbar";



const QuestionList = () => {
  const { id } = useParams()

  return (
    <>
    <Navbar />
    <div className='bg-[#0B0C10] flex h-screen justify-center w-full text-[#ffffff]'>
      <div className='mt-10 w-[55vw] h-[50vh] rounded-3xl bg-tvStatic'>
        <h2 className='text-3xl text-center p-3 bg-[#53900F] rounded-t-3xl font-SchoolBell font-bold'>What is the meaning of life?</h2>
        <p>Character ID: {id}</p>
      </div>
      {/* <button>Quit</button>
      <button>Next</button> */}
    </div>
    </>
  );
};

export default QuestionList