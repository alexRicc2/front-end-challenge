import React from 'react';
import { Input, Space } from 'antd';
import { useContext } from 'react';
import { AnimeContext } from '../../common/context/Anime';
import { useNavigate } from "react-router-dom";

const { Search } = Input;

export default function Header() {

  const {anime, setAnime} = useContext(AnimeContext);
  let navigate = useNavigate();

  return (
    <header>
      <h1>Animex</h1>
      <ul>
        <li>Animes</li>
        <li>Mangas</li>
        <li>Filmes</li>
      </ul>
      <Space direction="vertical">
      <Search 
      placeholder="input search text" 
      value={anime} 
      onChange={(e)=>{setAnime(e.target.value)}} 
      enterButton 
      onSearch={(e)=>navigate(`/anime/${anime}`)}/>
      </Space>
    </header>
  )
}