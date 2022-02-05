import { createContext, useState } from 'react';

export const AnimeContext = createContext();
AnimeContext.displayName = "Anime";

export const AnimeProvider = ({ children }) => {
  const [anime, setAnime] = useState('');
  return (
    <AnimeContext.Provider value={{ anime, setAnime }}>
      {children}
    </AnimeContext.Provider>
  )
}