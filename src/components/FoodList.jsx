import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Box, Button, Center, Heading, Select, SimpleGrid, Text,option} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import data from "../db.json"

export const FoodList = () => {
    const [fooddata, setfoodData] = useState(data)
    const [sortType,setSort]=useState("albums")

    useEffect(()=>{
        const sortArray=type=>{
            const types={
                energy_100g:"energy_100g",
                fat_100g:"fat_100g"
            };
            const sortProperty = types[type] 
            const sorted = [...data].sort((a,b)=>b[sortProperty]-a[sortProperty])
            setfoodData(sorted)
        }
        sortArray(sortType)
    },[sortType])

    return (
        <div>
            <Heading>FoodList</Heading>
            <Center>
            <Select w={"150px"} onChange={(e)=>setSort(e.target.value)}  placeholder='Select option'>
                <option value="energy_100g">Energy</option>
                <option value="fat_100g" >Fat</option>
            </Select>
            </Center>

            {fooddata.map((e) => {
                return (
                    <Box key={e.code}>
                        <Link to={`/${e.code}`}><SimpleGrid minChildWidth='100px'style={{margin:"20px"}} spacing='10px'>
                            <Box className='img'>
                                <Center>
                                    <img src={require("../icon.png")} alt="" />
                                </Center>
                            </Box>
                            <Box className='product'>
                                <Center>
                                    <Text>{e.product_name} {`(${e.generic_name})`}</Text>
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
