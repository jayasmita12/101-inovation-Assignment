import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
    Box, Center, SimpleGrid, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
} from '@chakra-ui/react'
import data from "../db.json"
import "../styles/foodlist.css"
import { FavouriteFood } from './FavouriteFood'


export const SingleItem = () => {
    const [items, setItem] = useState(data)
    const [store, setStore] = useState({})
    const { Id } = useParams()
    const [fav,setFav]=useState([])

    let singleProduct;
    useEffect(() => {
        filtering(items, Id)
    }, [singleProduct])
    function filtering(items, Id) {
        singleProduct = items.find(e => e.Id == Id)
        setStore(singleProduct)
    }
    // console.log(store)
    const favouriteFood=()=>{
        fav.push(store)
        console.log(fav)
    }


    return (
        <div>
            <Box>
                <SimpleGrid minChildWidth='100px' style={{ margin: "20px" }} spacing='20px' key={store.Id}>
                    <Box className='img'>
                        <Center>
                            <img src={require("../icon.png")} alt="" />
                        </Center>
                    </Box>
                    <Box className='product'>
                        <Center>
                            <p>{store.Menu_Items} {`(${store.Menu_Category})`}</p>
                        </Center>
                    </Box>
                </SimpleGrid>

            </Box>


            <div>
                <table>
                   
                    <tr>
                        <thead>
                            <th>Per_Serve_Size</th>
                            <td>{store.Per_Serve_Size}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Energy_kCal</th>
                            <td>{store.Energy_kCal}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Total_fat_g</th>
                            <td>{store.Total_fat_g}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Sat_Fat_g</th>
                            <td>{store.Sat_Fat_g}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Trans_fat_g</th>
                            <td>{store.Trans_fat_g}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Cholesterols_mg</th>
                            <td>{store.Cholesterols_mg}</td>
                        </thead>
                    </tr>
                </table>
            </div>
            <Center style={{ marginTop: "40px",display:"flex",gap:"30px" }}>
                
                    <Box>
                    <Link to="/"><Button style={{ backgroundColor: "rgb(161,195,153)" }}>Back</Button></Link>
                    </Box>
                <Box>
                    <Button style={{ backgroundColor: "rgb(161,195,153)" }} onClick={favouriteFood}>Add to Favourite</Button>
                </Box>
              
            </Center>
        </div>
    )
}
