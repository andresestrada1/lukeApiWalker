import React, {useState, useEffect} from 'react'
// import { Route, Switch } from 'react-router-dom'
import axios from 'axios';
// import ShowSerch from './ShowSerch';
import image from "./kenobi.jpg"
// import Resultado from './Resultado';
//sin actualizar



const Inicio = () => {

    const [categories, setCategories] = useState([]);
    const [idItem, setIdItem] = useState([]);
    const [error, setError] = useState(Object)

    useEffect(() => {
        axios.get('https://swapi.dev/api/')
        .then(res => {
            setCategories(Object.keys(res.data))
        }).catch(err =>{
            setError(err)
            setIdItem([])})
    }, []);

    const obtenerValor = (e) =>{

        if(error.message){
            setError('')
        }

        e.preventDefault();
        let id = e.target[1].value
        let category = e.target[0].value
        let url = `https://swapi.dev/api/${category}/${id}`
        axios.get(url)
        .then(res => {
            setIdItem(Object.entries(res.data))
        })
        .catch(err => {
            setError(err)
            setIdItem([])
        })
    }

    return (
        <div>
            <form onSubmit={ obtenerValor }>
                <select>
                    {
                        categories.map((category, index) => (
                            <option key={index}>{category}</option>
                        ))
                    }
                </select>
                &nbsp;&nbsp;&nbsp;
                <label htmlFor='id'>Id</label>
                &nbsp;&nbsp;
                <input name='id' type='Number'></input>
                &nbsp;&nbsp;
                <button type='submit' >Search</button>
            </form>
            <div>
                {
                    idItem.length == 0 ?
                        null
                    :
                    <div>
                        <h1>{idItem[0][1]}</h1>
                        <p>{idItem[1][0]}: {idItem[1][1]}</p>
                        <p>{idItem[2][0]}: {idItem[2][1]}</p>
                        <p>{idItem[3][0]}: {idItem[3][1]}</p>
                        <p>{idItem[4][0]}: {idItem[4][1]}</p>
                    </div>
                }
            </div>
            <div>
                {
                    error.message ?
                        <>
                            <img alt='kenobi' src={image}></img>
                            <p>Estos no son los droides que estas buscando</p>
                        </>
                    :
                    null
                }
            </div>
        </div>

     )
}

export default Inicio