import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import api from '../../services/api';
import { Link } from 'react-router-dom';
const { Meta } = Card;

export default function AnimeSection() {

  const [animes, setAnimes] = useState([])

  useEffect(() => {
    api.get('v1').then((resp) => {
      if (resp.statusText == "OK") setAnimes(resp.data.data)
      console.log(resp)
    })
  }, [])

  return (
    <section>
      {animes.map((anime) => {
        return (
          <Link
          key={anime.anime_id}
          to={`/anime/${anime.anime_name}`}
          >
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={anime.anime_img} />}
          >
            <Meta title={anime.anime_name} />
          </Card>
          </Link>
        )
      })}


    </section>
  )
}