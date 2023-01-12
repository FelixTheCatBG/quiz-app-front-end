import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'
import { itemData1 } from './design/ItemDataImages'

const Rightbar = () => {
  return (
    <Box
      bgcolor="pink"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
     Rightbar
      <div>


      <ImageList sx={{ width: '100%', height: 350}}>
      {itemData1.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>


      </div>

    </Box>
  )
}

export default Rightbar