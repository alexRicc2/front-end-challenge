import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'
import { Card } from 'antd';
import api from '../services/api';
const { Meta } = Card;
import styles from './AnimePage.module.scss';

export default function AnimePage(){
  const {name} = useParams()
  const [animeObject, setAnimeObject] = useState({data: []})
  useEffect(()=>{
    api.get(`v1/${name}`).then((resp) => {
      if (resp.statusText == "OK") setAnimeObject(resp.data)
      console.log(resp)
    })
  },[name])
  return(
    <section className={styles.secao}>
        <Card
            style={{  backgroundColor: 'transparent', border: 'none', color: 'white' }}
            cover={<img alt={name} src={animeObject?.img} className={styles.image}/>}
          >
            <Meta title={name.split('_').join(' ')} className={styles.title} />
          </Card>
          
          {animeObject?.data != undefined &&
          <div className={styles.facts}>
          <h3>Curiosidades de {name.split('_').join(' ')}</h3>
          {animeObject?.data.map(fact=>{
            return(<p key={fact.fact_id}
            ><span>{fact.fact_id}:</span> {fact.fact}</p>)
            
          })}
          </div>
}
    </section>
  )
}