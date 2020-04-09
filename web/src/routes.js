import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import About from './Components/About/'
import Users from './Components/Users'
import Doacoes from './Components/Doacoes/'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/doacoes" component={Doacoes} />
      </Switch>
    </BrowserRouter>
  )
}