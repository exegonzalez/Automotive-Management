import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//************************************** React Components ******************************************
import Home from './components/Home'
import NotFound from './components/NotFound'
import Websites from './components/Websites'
import NewTransfer from './components/Transfers/NewTransfer'
import EditTransfer from './components/Transfers/EditTransfer'
import ListTransfer from './components/Transfers/ListTransfer'
import Clients from './components/Clients'
import Vehicles from './components/Vehicles'
import Statistics from './components/Statistics'
import Budgets from './components/Budgets'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' render={ () => <Redirect to='/home' component={Home}/>} />
      <Route exact path='/home' component={Home}/>
      <Route exact path='/transferencias' component={ListTransfer}/>
      <Route exact path='/sitios-web' component={Websites}/>
      <Route exact path='/transferencias/crear' component={NewTransfer}/>
      <Route exact path='/transferencias/editar/:control_number' component={EditTransfer}/>
      <Route exact path='/clientes' component={Clients}/>
      <Route exact path='/vehiculos' component={Vehicles}/>
      <Route exact path='/estadisticas' component={Statistics}/>
      <Route exact path='/presupuestos' component={Budgets}/>
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
