import React from 'react'
import {Routes,Route} from "react-router-dom"
import { FavouriteFood } from './FavouriteFood'
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
        <Route path="/fav" element={<FavouriteFood/>}></Route>
    </Routes>
    </div>
  )
}
