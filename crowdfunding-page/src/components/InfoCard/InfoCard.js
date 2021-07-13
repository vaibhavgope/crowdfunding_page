import React from 'react'
import { Typography, makeStyles, Paper } from '@material-ui/core'
import SingleInfoCard from './SingleInfoCard'

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        top: 30,
        width: '100%',
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'center',
        textAlign: 'left',
    },
    title: { fontWeight: 'bold', margin: '16' },
    card: {
        [theme.breakpoints.down('sm')]: {
            maxWidth: '90%',
            padding: 5
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '70%',
            padding: 20
        },
        margin: 'auto',
        borderRadius: '10px',
    },
    paper: {
        width: '100%',
        borderRadius: 15,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '90%',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '70%',
        },
    }
}))

const InfoCard = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            < div
                className={classes.container}
            >
                <Paper elevation={1} className={classes.paper}>
                    <div className={classes.card}>
                        <Typography
                            variant="h6"
                            className={classes.title}
                        >
                            About this project
                        </Typography>
                        <Typography variant="body" color='textSecondary'>
                            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.

                            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                            to allow notepads, pens, and USB sticks to be stored under the stand.
                        </Typography>
                    </div>
                    {props.info.map((e) => {
                        return (<SingleInfoCard
                            name={e.name}
                            summary={e.summary}
                            amount={e.amount}
                            left={e.left}
                            handleButton={props.handleButton}
                        />)
                    })}
                </Paper>
            </div>
        </React.Fragment >)
}

export default InfoCard