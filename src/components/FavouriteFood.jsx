import React from 'react'
import { Box, Button, Heading } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { SingleItem } from './SingleItem'

export const FavouriteFood = () => {
    
    return (
        <div>
        <Heading>Favourites</Heading>
            <Box>
                <Link to="/"><Button style={{ backgroundColor: "rgb(161,195,153)" }}>Back</Button></Link>
            </Box>

        </div>
    )
}
