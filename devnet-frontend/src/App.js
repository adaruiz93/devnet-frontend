import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import DevList from './components/DevList'
import NewDev from './components/NewDev'
import EditDev from './components/EditDev'
import DevDetails from './components/DevDetails'

const App = () => {
  return (
    <div>
      <h1>Dev Net</h1>
      <Router>
        <Switch>
          <Route exact path = '/devnet' render={(routerProps) => <DevList {...routerProps} />} />
          <Route exact path = '/devnet/:id' render={(routerProps) => <DevDetails {...routerProps} />} />
          <Route exact path = '/devnet/new' render={(routerProps) => <NewDev {...routerProps} />} />
          <Route exact path = '/devnet/:id/edit' render={(routerProps) => <EditDev {...routerProps} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
