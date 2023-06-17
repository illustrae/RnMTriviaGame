import { useEffect, useState } from 'react';
import axios from 'axios';

const Game = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
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

    fetchRandomCharacters();
  }, []);

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

  return (
    
    <div className="w-full h-full flex flex-wrap p-5 content-center justify-center bg-[#0B0C10]">
      
      {characters.map((character) => (
        <div className='flex flex-col justify-center text-center mb-20 w-600'key={character.id}>
          <img className='h-auto w-[200px] m-7 rounded-[50%] ' src={character.image} alt={character.name} />
          <h2 className='text-[#66FCf1]'> {character.name} </h2>
        </div>
      ))}
      
    </div>
 
  );
};

export default Game;

