import React from 'react'
import * as classes from './index.module.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Header from '../header'
import Home from '../home'
import Students from '../students'
import Teachers from '../teachers'

const App=props=>
<div className={classes.general+' container'}>
<Router>
    <Header/>
    <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/students"><Students/></Route>
        <Route path="/teachers"><Teachers/></Route>
    </Switch>
    </Router>
</div>

export default App