import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import image from "./kenobi.jpg";

const ShowPerson = () => {

  const [person, setPerson] = useState(Object)
  const [error, setError] = useState('')
  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(res => {
      setPerson(Object.entries(res.data))
    })
    .catch(err => {
      setError(err.message)
    })
  }, [])

  return (
    <div>
      {
        error != '' ?
          <>
              <img alt='error image' src={image}></img>
              <p>Estos no son los droides que estas buscando</p>
          </>
        :
          person[0] ?
            <div>
              <h1>{person[0][1]}</h1>
              <p>{person[1][0]}: {person[1][1]}</p>
              <p>{person[2][0]}: {person[2][1]}</p>
              <p>{person[3][0]}: {person[3][1]}</p>
              <p>{person[4][0]}: {person[4][1]}</p>
            </div>
          :
            null
      }
    </div>
  )
}

export default ShowPerson

