import { Box } from '@mui/material'
import React from 'react'
import Logo from './design/img/Logo.png'
import './design/feed.css'




export const Feed = () => {


  return (
    <Box bgcolor="skyblue" flex={4} p={2} >
      <div>

        {/* Feed */}

        <img src={Logo} width="700" alt='logo' class='centerimg' />
        <h3 class="h3design">Welcome to our quiz!</h3>
        <h3 class="h3design">You can choose games in our Game List to my left :)</h3>
      </div>

    </Box>
  )
}





export default Feed