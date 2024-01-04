import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton  className="swipeButtons__repeat">
        {/* <ReplayIcon fontSize='large' style={{ color: "#f5b748"}} />style={{ fontSize: "60px" }} */}
        <ReplayIcon style={{ fontSize: "40px", color: '#f5b748', }} />
      </IconButton>

      <IconButton  className="swipeButtons__left">
        <CloseIcon style={{ fontSize: "40px", color: '#ec5e6f', }} />
      </IconButton>

      <IconButton  className="swipeButtons__star">
        <StarRateIcon style={{ fontSize: "40px", color: '#62b4f9', }} />
      </IconButton>

      <IconButton  className="swipeButtons__right">
        <FavoriteIcon style={{ fontSize: "40px", color: '#76e2b3', }}/>
      </IconButton>

      <IconButton  className="swipeButtons__lightning">
        <FlashOnIcon style={{ fontSize: "40px", color: '#915dd1', }} />
      </IconButton>
    </div>
  )
}

export default SwipeButtons
