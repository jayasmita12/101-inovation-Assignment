import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Box, Button, Center, Heading, Select, SimpleGrid, Text,option} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const FoodList = () => {
    const [fooddata, setfoodData] = useState([])
    const [sortType,setSort]=useState("albums")

    useEffect(()=>{
        const sortArray=type=>{
            const types={
                Energy_kCal:"Energy_kCal",
                Protein_g:"Protein_g"
            };
            const sortProperty = types[type] 
            const sorted = [...fooddata].sort((a,b)=>b[sortProperty]-a[sortProperty])
            setfoodData(sorted)
        }
        sortArray(sortType)
    },[sortType])

    useEffect(()=>{
        axios.get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088")
        .then(res=>{
            setfoodData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    

    return (
        <div>
            <Heading>FoodList</Heading>
            <Center>
            <Select w={"150px"} onChange={(e)=>setSort(e.target.value)}  placeholder='Select option'>
                <option value="Energy_kCal">Energy</option>
                <option value="Protein_g" >Protein</option>
            </Select>
            </Center>
            
            {fooddata.map((e) => {
                return (
                    <Box key={e.Id}>
                        <Link to={`/${e.Id}`}><SimpleGrid minChildWidth='100px'style={{margin:"20px"}} spacing='10px'>
                            <Box className='img'>
                                <Center>
                                    <img src={require("../icon.png")} alt="" />
                                </Center>
                            </Box>
                            <Box className='product'>
                                <Center>
                                    <Text>{e.Menu_Items} {`(${e.Menu_Category})`}</Text>
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
