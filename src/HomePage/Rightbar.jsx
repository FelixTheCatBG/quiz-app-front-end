import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import {itemData1, itemData2} from './design/ItemDataImages'

const Rightbar = () => {
  return (
    <Box 
    bgcolor="pink" 
    flex={2} 
    p={2}
    sx={{display:{ xs: "none", sm: "block" }}}
    >
        
        <div>
        RightBar | Our images examples
        <ImageList sx={{ width: 500, height: 300 }} variant="woven" cols={2} gap={8}>
        {itemData1.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
        
  
  </div>
  <div>
    
  
  <ImageList sx={{ width: 500, height: 300 }} variant="woven" cols={2} gap={8}>
    {itemData2.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
  
  
  </div>
        
    </Box>
  )
}

export default Rightbar