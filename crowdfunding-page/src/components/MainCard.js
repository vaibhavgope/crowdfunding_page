import React, { useState } from 'react'
import { Typography, Button, makeStyles, Paper } from '@material-ui/core'
import logoIcon from '../images/logo-mastercraft.svg'
import bookmarkIcon from '../images/icon-bookmark.svg';
import bookmarkAlternate from '../images/icon-bookmark-alternate.svg';
import SimpleModal from "./Modal/SimpleModal";

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    buttonContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 10%',
        paddingBottom: 50,
    },
    paper: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '90%',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '70%',
        },
        borderRadius: 15,
    },
    bookmarkBtn: {
        border: 'none',
        background: 'none'
    },
    middleLogo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: -30,
    },
    centerText: {
        margin: 16,
        textAlign: 'center'
    }
}))

const PageContent = (props) => {
    const [active, setActive] = useState(false)
    const toggleActive = () => {
        setActive(!active)
    }
    const classes = useStyles();
    return (
        <React.Fragment>
            < div
                className={classes.container}
            >
                <Paper elevation={1} className={classes.paper}>
                    <div
                        className={classes.middleLogo}
                    >
                        <img src={logoIcon} alt="" />
                    </div>
                    <div style={{ height: 20 }} />
                    <Typography
                        variant="h4"
                        style={{ fontWeight: 'bold' }}
                        className={classes.centerText}
                    >
                        A solution for every project
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        color="textSecondary"
                        className={classes.centerText}
                    >
                        Choose from 3 different starter kits. From a basic one to a full
                        featured application.
                    </Typography>
                    <div style={{ height: 30 }} />
                    <div className={classes.buttonContainer}>
                        <Button variant="contained" size="medium" onClick={props.handleOpen}>
                            Back this project
                        </Button>
                        <span className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${bookmarkIcon})`,
                            }}
                        />
                        <button className={classes.bookmarkBtn} onClick={toggleActive}>
                            {active ? <img src={bookmarkAlternate} alt="" /> : <img src={bookmarkIcon} alt="" />}
                        </button>
                    </div>
                </Paper>
                <SimpleModal
                    open={props.open}
                    handleClose={props.handleClose}
                    handleChange={props.handleChange}
                    handleInputChange={props.handleInputChange}
                    selectedValue={props.selectedValue}
                    handleSubmit={props.handleSubmit}
                    data={props.data}
                    selectedAmount={props.selectedAmount}
                />
            </div >
        </React.Fragment>
    )
}

export default PageContent
