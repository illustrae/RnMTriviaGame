import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  Navbar  from './Navbar'

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
      const randomCharacters = getRandomCharacters(response.data.results, 8);
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
 

    <div className="w-full h-cover flex flex-wrap p-5 bg-cover content-center justify-center bg-[#0B0C10]">
      {characters.map((character) => (
        <div className="flex flex-col justify-center text-center mb-20 w-600" key={character.id}>
           <Link to={`/character/${character.id}`}>
          <img
            className="h-auto w-[200px] m-7 rounded-[50%] transform bg-blue-400 hover:bg-[#D6CE15] transition duration-500 hover:scale-125"
            src={character.image}
            alt={character.name}
          />
          <h2 className="text-[#66FCf1]"> {character.name} </h2>
          </Link>
        </div>
      ))}
    </div>
    <div className='flex w-full h-[75px] mb-10 p-15 justify-center text-[#66FCf1] content-center bg-[#0B0C10]'>
    <button className='flex justify-center items-center mb-10 rounded-3xl p-5 bg-[#D6CE15] text-[#1F2605] ' onClick={handleReset}>Reset Game</button>

    </div>
    </>
  );
};

export default Game;
