import React from 'react'
import {Routes,Route} from "react-router-dom"
import { FoodList } from './FoodList'
import Navbar from './Navbar'
import { SingleItem } from './SingleItem'

export const AllRoutes = () => {
  return (
    <div>
       <Navbar/>
    <Routes>
        <Route path="/" element={<FoodList/>}></Route>
        <Route path="/:code" element={<SingleItem/>}></Route>
    </Routes>
    </div>
  )
}
