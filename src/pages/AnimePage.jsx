import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'
import { Card } from 'antd';
import api from '../services/api';
const { Meta } = Card;
import styles from './AnimePage.module.scss';

export default function AnimePage(){
  const {name} = useParams()
  const [animeObject, setAnimeObject] = useState({data: []})
  const [achou, setAchou] = useState(true);
  useEffect(()=>{
    
      api.get(`v1/${name}`).then((resp) => {
        if (resp.statusText == "OK"){
          setAnimeObject(resp.data)
          setAchou(true)
        }
        console.log(resp)
      }, ()=> {
        setAchou(false)
      }
      
      )

    
  },[name])
  if(achou){

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
  return(
    <section className={styles.erro}>
      <h3>Desculpe o anime procurado não existe na nossa base de dados</h3>
      <img src="https://johto.legiaodosherois.com.br/wp-content/uploads/2021/10/legiao_Gpzmu6aoDO8H.jpg"></img>
    </section>
  )
}