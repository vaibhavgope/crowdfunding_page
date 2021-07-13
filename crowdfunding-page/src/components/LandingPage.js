import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, makeStyles, Button, Typography, useMediaQuery, Menu, MenuItem, useTheme } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import MainCard from './MainCard';
import AmountCard from './AmountComponent/AmountCard';
import heroImage from '../images/image-hero-desktop.jpg'
import crowdfundLogo from '../images/logo.svg'
import CompletedModal from './Modal/CompletedModal'

import InfoCard from './InfoCard/InfoCard';
import info from '../data/card_info';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'relative',
    },
    bar: {
        backgroundImage: `url(${heroImage})`,
        minHeight: '380px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    navbarButtons: {
        alignSelf: 'flex-start',
        margin: '30px',
    },
    cards: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        marginTop: -120,
    }
}));

const LandingPage = () => {
    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = React.useState("")
    const [selectedAmount, setSelectedAmount] = React.useState(0)
    const [amount, setAmount] = React.useState(89914)
    const [backers, setBackers] = React.useState(5007)

    const [data, setData] = React.useState(info)
    const [thanksOpen, setThanksOpen] = useState(false);

    const handleChange = (event) => {
        setSelectedValue(event.target.value)
    };

    const handleInputChange = (event) => {
        setSelectedAmount(event.target.value)
    }
    const classes = useStyles();

    const handleSubmit = (e) => {
        setData(data.map(el => el.name === e.currentTarget.value ? { ...el, left: el.left - 1 } : el))
        setAmount(amount + parseInt(selectedAmount))
        setBackers(backers + 1)
        setOpen(false)
        setThanksOpen(true)
    }

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleButton = (e) => {
        handleOpen();
        setSelectedValue(e.currentTarget.value)
    }

    const handleSecondClose = () => {
        setThanksOpen(false)
    }
    // for menu on smaller screens
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <img src={crowdfundLogo} alt="logo" className={classes.navbarButtons} />
                    <div className={classes.navbarButtons}>
                        {isMobile ? (
                            <div>
                                <IconButton
                                    color="textPrimary"
                                    aria-label="menu"
                                    onClick={handleMenuClick}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem>About</MenuItem>
                                    <MenuItem>Discover</MenuItem>
                                    <MenuItem>Get Started</MenuItem>
                                </Menu>
                            </div>
                        ) :
                            <div>
                                <Button>
                                    About
                                </Button>
                                <Button>
                                    Discover
                                </Button>
                                <Button>
                                    Get Started
                                </Button>
                            </div>}
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.cards}>
                <MainCard
                    open={open}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    handleChange={handleChange}
                    handleInputChange={handleInputChange}
                    selectedValue={selectedValue}
                    handleSubmit={handleSubmit}
                    data={data}
                    selectedAmount={selectedAmount}
                />
                <AmountCard amount={amount} backers={backers} />
                <InfoCard handleButton={handleButton} info={data} />
                <CompletedModal open={thanksOpen} handleClose={handleSecondClose} />
            </div>
        </div>
    );
}

export default LandingPage