import React, { useState } from 'react'
import { AppBar, Toolbar, makeStyles, Typography, Button, Paper } from '@material-ui/core';
import PageContent from './MainCard';
import AmountCard from './AmountCard';
import heroImage from '../images/image-hero-desktop.jpg'
import InfoCard from './InfoCard';

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
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <Typography variant="h6" className={classes.title}>
                        crowdfund
                    </Typography>
                    <div className={classes.navbarButtons}>
                        <Button>
                            About
                        </Button>
                        <Button>
                            Discover
                        </Button>
                        <Button>
                            Get Started
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <PageContent />
            <AmountCard />
            <InfoCard />
        </div>
    );
}

export default LandingPage