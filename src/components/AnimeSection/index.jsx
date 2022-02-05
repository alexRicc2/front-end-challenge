import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import api from '../../services/api';
const { Meta } = Card;

export default function AnimeSection() {

  const [animes, setAnimes] = useState([])

  useEffect(() => {
    api.get('v1').then((resp) => {
      if (resp.statusText == "OK") setAnimes(resp.data.data)
    })
    console.log(animes)
  }, [])

  return (
    <section>
      {animes.map((anime) => {
        return (
          <Card
            key={anime.anime_id}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={anime.anime_img} />}
          >
            <Meta title={anime.anime_name} />
          </Card>
        )
      })}


    </section>
  )
}