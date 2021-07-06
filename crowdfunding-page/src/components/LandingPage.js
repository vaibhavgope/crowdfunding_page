import React, { useState } from 'react'
import { AppBar, Toolbar, makeStyles, Typography, Button, Paper } from '@material-ui/core';
import MainCard from './MainCard';
import AmountCard from './AmountCard';
import heroImage from '../images/image-hero-desktop.jpg'
import crowdfundLogo from '../images/logo.svg'
import CompletedModal from './Modal/CompletedModal'

import InfoCard from './InfoCard';
import info from '../data/card_info';

const useStyles = makeStyles(() => ({
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
    title: {
        alignSelf: 'flex-start',
        margin: '30px',
    },
    navbarButtons: {
        alignSelf: 'flex-start',
        margin: '30px',
    },
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
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <img src={crowdfundLogo} alt="logo" className={classes.title} />
                    <div className={classes.navbarButtons}>
                        <Button style={{ color: 'white' }}>
                            About
                        </Button>
                        <Button style={{ color: 'white' }}>
                            Discover
                        </Button>
                        <Button style={{ color: 'white' }}>
                            Get Started
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
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
    );
}

export default LandingPage