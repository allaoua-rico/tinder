import React from 'react';
import PersonIcon  from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';



export default function Header() {
    return (
        
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            <img width="40px" height="40px" src="
            https://toppng.com/uploads/preview/tinder-logo-transparent-tinder-logo-11563243301zivc1sx84c.png"/>
            <IconButton>

            <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>

        </div>
    )
}
