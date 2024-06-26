import React from 'react'
import Box from '@mui/material/Box'
function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      height: (theme) => `calc( 100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    }}>
    </Box>
  )
}

export default BoardContent
