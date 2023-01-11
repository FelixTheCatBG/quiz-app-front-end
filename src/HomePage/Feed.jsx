import { Box } from '@mui/material'
import React from 'react'
import Logo from './design/img/Logo.png'
import './design/feed.css'
import App from '../App.js' 




export const Feed = () => {


  return (
    <Box bgcolor="" flex={4} p={2} >  
      <div>

        

        <img src={Logo} width="700" alt='logo' class='centerimg' />
        <h3 class="h3design">Welcome to our quiz!</h3>
        <h3><br/></h3>
        <h3 class="h3design">You can use Discover List to the left :)</h3>



      </div>

    </Box>
  )
}





export default Feed