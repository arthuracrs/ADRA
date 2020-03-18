import React from "react"
import { Switch, Route } from "react-router-dom"

import About from './Components/About'
import Users from './Components/Users'
import Doacoes from './Components/Doacoes/index'

export default function Routes() {
  return (
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/doacoes" component={Doacoes} />
        <Route path="/" component={Doacoes} />
      </Switch>
  )
}