import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/HomePage"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
