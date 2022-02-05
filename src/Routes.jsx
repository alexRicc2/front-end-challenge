import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-dom'
import Anime from './pages/AnimePage';

export default function Routes(){
  return(
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/anime/:name'>
          <Anime/>
        </Route>

      </Switch>
    </Router>
    )
}