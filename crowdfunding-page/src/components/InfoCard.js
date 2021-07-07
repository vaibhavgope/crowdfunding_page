import React from 'react'
import { Typography, makeStyles, Paper } from '@material-ui/core'
import SingleInfoCard from './SingleInfoCard'

const useStyles = makeStyles({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'center',
        top: 320,
        position: 'relative',
        textAlign: 'left',
    },
    title: { fontWeight: 'bold', margin: '16' },
    card: {
        maxWidth: '70%',
        margin: 'auto',
        borderRadius: '10px',
    }
})

const InfoCard = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            < div
                className={classes.container}
            >
                <Paper elevation={3}
                    style={{
                        width: '100%',
                        maxWidth: '70%',
                        borderRadius: 15,
                    }}>
                    <div style={{ margin: 'auto', maxWidth: '70%', padding: 20 }}>
                        <Typography
                            variant="h6"
                            className={classes.title}
                        >
                            About this project
                        </Typography>
                        <Typography variant="body">
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