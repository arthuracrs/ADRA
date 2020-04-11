import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import About from './Pages/About/'
import Users from './Pages/Users'
import Donations from './Pages/Donations/'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/donations" component={Donations} />
      </Switch>
    </BrowserRouter>
  )
}