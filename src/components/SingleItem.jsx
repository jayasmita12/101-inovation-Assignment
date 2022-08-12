import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Center, SimpleGrid ,Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,} from '@chakra-ui/react'
import data from "../db.json"
import "../styles/foodlist.css"

export const SingleItem = () => {
    const [items, setItem] = useState(data)
    const [store, setStore] = useState({})
    const { code } = useParams()

    let singleProduct;
    useEffect(() => {
        filtering(items, code)
    }, [singleProduct])
    function filtering(items, code) {
        singleProduct = items.find(e => e.code == code)
        setStore(singleProduct)
    }
    console.log(store)
    return (
        <div>
            <Box>
            <SimpleGrid minChildWidth='100px' style={{ margin: "20px" }} spacing='20px' key={store.code}>
                <Box className='img'>
                    <Center>
                        <img src={require("../icon.png")} alt="" />
                    </Center>
                </Box>
                <Box className='product'>
                    <Center>
                        <p>{store.product_name} {`(${store.generic_name})`}</p>
                    </Center>
                </Box>
            </SimpleGrid>
        </Box>


        <div>
        <table>
            <tr> 
                <thead>
                    <th>url</th>
                    <td><a href={`${store.url}`}>link</a></td>
                </thead>
             </tr>
             <tr> 
                <thead>
                    <th>conteiner</th>
                    <td>{store.packaging}</td>
                </thead>
            </tr>
            <tr> 
                <thead>
                    <th>conteiner</th>
                    <td>{store.packaging}</td>
                </thead>
            </tr>
            <tr> 
                <thead>
                    <th>serving_size</th>
                    <td>{store.serving_size}</td>
                </thead>
            </tr>
            <tr> 
                <thead>
                    <th>energy_100g</th>
                    <td>{store.energy_100g}</td>
                </thead>
            </tr>
            <tr>
                <thead>
                    <th>energy_from_fat_100g</th>
                    <td>{store.energy_from_fat_100g}</td>
                </thead>
            </tr>
        </table>
        </div>
        </div>
    )
}
