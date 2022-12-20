import { Box, ImageListItem, ListItemButton } from '@mui/material'
import React from 'react'
import { itemData3 } from './design/ItemDataImages'

export const Feed = () => {
  return (
    <Box bgcolor="skyblue" flex={4} p={2}>
      <div>
        
      Feed
      <ListItemButton href="">
      
        {itemData3.map((item) => (
          <ImageListItem key={item.img} href="">
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      
      </ListItemButton>

      </div>
 
    </Box>
  )
}





export default Feed