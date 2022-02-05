import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'
import { Card } from 'antd';
import api from '../services/api';
const { Meta } = Card;

export default function AnimePage(){
  const {name} = useParams()
  const [animeObject, setAnimeObject] = useState({data: []})
  useEffect(()=>{
    api.get(`v1/${name}`).then((resp) => {
      if (resp.statusText == "OK") setAnimeObject(resp.data)
      console.log(resp)
    })
  },[])
  return(
    <>
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={name} src={animeObject?.img} />}
          >
            <Meta title={name} />
          </Card>
          
          {animeObject?.data != undefined &&
          <div>
            {console.log('oi', animeObject.data)}
          {animeObject?.data.map(fact=>{
            return(<p key={fact.id}
            >{fact.fact}</p>)
            
          })}
          </div>
}
    </>
  )
}