import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Switch } from 'switch'
import HomePage from "./pages/HomePage"

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
