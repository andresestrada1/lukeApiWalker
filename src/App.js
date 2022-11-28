import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Inicio from './componentes/Inicio';
// import Resultado from './componentes/Resultado';
import ShowPerson from './componentes/ShowPerson';
// import Url from './componentes/Url'

// sin actualizar;



function App() {
  return (
    <div className='container'>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" render={() =><Inicio/>}/>
            <Route path={'/:id'} render={(routeProps) => <ShowPerson {...routeProps}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
