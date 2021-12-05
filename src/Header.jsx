import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {IconButton} from "@material-ui/core";
import { Avatar } from '@mui/material';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://www.catalytic.com/hubfs/Integrations/gmail-integration.png" alt=" ">
                </img>
            </div>
            <div className="header__middle">
                <SearchIcon/>
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDownIcon className="header__inputCaret"/>
            </div>
            <div className="header__right">
                    <IconButton>
                        <AppsIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon/> 
                    </IconButton>
                    <Avatar/>
            </div>
        </div>
    )
}

export default Header
