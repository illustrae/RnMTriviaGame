import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Game = () => {
  const [characters, setCharacters] = useState(() => {
    const storedCharacters = sessionStorage.getItem('characters');
    return storedCharacters ? JSON.parse(storedCharacters) : [];
  });

  useEffect(() => {
    if (characters.length === 0) {
      fetchRandomCharacters();
    } else {
      sessionStorage.setItem('characters', JSON.stringify(characters));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characters]);

  const fetchRandomCharacters = async () => {
    try {
      const totalPages = await getTotalPages();
      const randomPage = getRandomPage(totalPages);
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${randomPage}`
      );
      const randomCharacters = getRandomCharacters(response.data.results, 9);
      setCharacters(randomCharacters);
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalPages = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      return response.data.info.pages;
    } catch (error) {
      console.log(error);
      return 1; // Default to 1 page if API call fails
    }
  };

  const getRandomPage = (totalPages) => {
    return Math.floor(Math.random() * totalPages) + 1;
  };

  const getRandomCharacters = (characters, count) => {
    const randomized = [];
    const characterCount = characters.length;

    while (randomized.length < count) {
      const randomIndex = Math.floor(Math.random() * characterCount);
      const randomCharacter = characters[randomIndex];

      if (!randomized.includes(randomCharacter)) {
        randomized.push(randomCharacter);
      }
    }

    return randomized;
  };

  const handleReset = () => {
    sessionStorage.removeItem('characters');
    setCharacters([]);
  };
  
  return (
    <>
 
    <div className='w-full flex h-full p-20 overflow-auto flex-wrap justify-center bg-cover bg-bgStars'>
    <div className=' self-center p-15 justify-center text-[#66FCf1] content-center bg-transparent'>
      <button className=' justify-center items-center rounded-3xl p-5 mb-10 bg-[#D6CE15] text-[#1F2605] ' onClick={handleReset}>New Characters</button>
      </div>      
      <div className="flex w-[75%] flex-wrap  bg-cover content-center justify-center bg-transparent">
        {characters.map((character) => (
          <div className="flex flex-col justify-center text-center m-10 w-600" key={character.id}>
            <Link to={`/character/${character.id}`}>
            <img
              className="h-auto w-[200px] rounded-[50%] mb-5 transform bg-blue-400 hover:bg-[#D6CE15] transition duration-500 hover:scale-125"
              src={character.image}
              alt={character.name}
            />
            <h2 className="text-[#66FCf1] content-center"> {character.name} </h2>
            </Link>
          </div>
        ))}
      </div>
      <div className='self-center p-15 mb-10 justify-center text-[#66FCf1] content-center bg-[#0B0C10]'>
      <Link to="/trivia"><button className='justify-center items-center  rounded-3xl p-5 bg-[#D6CE15] text-[#1F2605]'>Play Trivia</button></Link>
      </div>
    </div>
    </>
  );
};

export default Game;
