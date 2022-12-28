import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;