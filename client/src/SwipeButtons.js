import React from 'react'
import "./stylesheets/swipeButtons.css"
import { IconButton } from '@mui/material';
import  ReplayIcon from '@mui/icons-material/Replay'
import  CloseIcon from '@mui/icons-material/Close'
import  StarRateIcon from '@mui/icons-material/StarRate'
import  FavoriteIcon from '@mui/icons-material/Favorite'
import  FlashOnIcon from '@mui/icons-material/FlashOn'



export default function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fonSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fonSize="large"/>
            </IconButton >
            <IconButton className="swipeButtons__star">
                <StarRateIcon fonSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon fonSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fonSize="large"/>
            </IconButton>
        </div>
    )
}
