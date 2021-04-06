import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Web from './components/Web'
import Ads from './components/Ads'
import Navbar from './components/Navbar'
import './fonts/Britanica-Black-Black.eot'

import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-me" component={About} />
      <Route exact path="/web-development" component={Web} />
      <Route exact path="/advertising" component={Ads} />
    </Switch>
  </BrowserRouter>
)

export default App