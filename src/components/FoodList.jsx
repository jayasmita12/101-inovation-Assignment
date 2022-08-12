import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
// import "../styles/foodlist.css"
import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import data from "../db.json"

export const FoodList = () => {
    const [fooddata, setfoodData] = useState(data)

    // useEffect(() => {
    //     axios("http://localhost:8080/foodlist", {
    //         method: "get"
    //     })
    //         .then((res) => {
    //             setfoodData(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //}, [])
    return (
        <div>
            <h1>FoodList</h1>
            {fooddata.map((e) => {
                return (
                    <Box>
                        <Link to={`/${e.code}`}><SimpleGrid minChildWidth='100px'style={{margin:"20px"}} spacing='10px' key={e.code}>
                            <Box className='img'>
                                <Center>
                                    <img src={require("../icon.png")} alt="" />
                                </Center>
                            </Box>
                            <Box className='product'>
                                <Center>
                                    <p>{e.product_name} {`(${e.generic_name})`}</p>
                                </Center>
                            </Box>
                        </SimpleGrid>
                        </Link>
                        <Box><hr /></Box>
                    </Box>
                )
            })}
        </div>
    )
}
