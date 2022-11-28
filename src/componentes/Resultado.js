import { useParams } from "react-router-dom";

const Resultado = (props) => {

  const {id} = useParams();

  return (
    <div>
        {
            props.idItem == 0 ?
                null
            :
            <div>
                <h1>{props.idItem[0][1]}</h1>
                <p>{props.idItem[1][0]}: {props.idItem[1][1]}</p>
                <p>{props.idItem[2][0]}: {props.idItem[2][1]}</p>
                <p>{props.idItem[3][0]}: {props.idItem[3][1]}</p>
                <p>{props.idItem[4][0]}: {props.idItem[4][1]}</p>
            </div>
        }
    </div>
  )
}

export default Resultado;