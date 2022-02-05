import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import api from '../../services/api';
import { Link } from 'react-router-dom';
const { Meta } = Card;
import styles from './style.module.scss';
import { StarOutlined, StarFilled } from '@ant-design/icons';

export default function AnimeSection() {

  const [animes, setAnimes] = useState([])
  useEffect(() => {
    api.get('v1').then((resp) => {
      if (resp.statusText == "OK") setAnimes(resp.data.data)
      console.log(resp)
    })
  }, [])
  const array = new Array(5);

  return (
    <section className={styles.secao}>
      <h2>Mais populares</h2>
      <div className={styles.lista}>
        {animes.map((anime) => {
          return (
            <Link
              className={styles.card}
              key={anime.anime_id}
              to={`/anime/${anime.anime_name}`}
            >
              <Card
                hoverable
                style={{  backgroundColor: 'transparent', border: 'none', color: 'white' }}
                cover={<img alt="example" src={anime.anime_img} className={styles.image} />}
              >
                <Meta
                  title={
                      anime.anime_name.split('_').join(' ')
                  }
                  className={styles.title}
                  />
                 
                  
              </Card>
            </Link>
          )
        })}
      </div>


    </section>
  )
}