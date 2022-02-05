import React from 'react';
import { Input, Space, Badge } from 'antd';
import { useContext } from 'react';
import { AnimeContext } from '../../common/context/Anime';
import { useNavigate } from "react-router-dom";
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
const { Search } = Input;

export default function Header() {

  const {anime, setAnime} = useContext(AnimeContext);
  let navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h1><Link to="/"><span>A</span>nimex</Link></h1>
      
      <ul>
        <li><Link to="/"><Badge count={13}>Animes</Badge></Link></li>
        <li><a href="#">Mangas</a></li>
        <li><a href="#">Filmes</a></li>
      </ul>
      <Space direction='vertical' className={styles.search}>
      <Search 
      className={styles.searchbar}
      placeholder="Buscar anime" 
      value={anime} 
      allowClear
      onChange={(e)=>{setAnime(e.target.value)}} 
      bordered
      onSearch={(e)=>{
        
        let animePesquise = anime;
        animePesquise = animePesquise.replace(' ','_').toLowerCase()
        navigate(`/anime/${animePesquise}`)
        
        }}/>
      <div></div>
      </Space>
    </header>
  )
}