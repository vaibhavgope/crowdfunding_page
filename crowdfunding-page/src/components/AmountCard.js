import React from 'react'
import { Typography, makeStyles, Paper, LinearProgress, withStyles, Divider } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 180,
        position: 'absolute',
    },
})

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
        maxWidth: '90%',
        position: 'relative',
        margin: 'auto'
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: 'primary',
    },
}))(LinearProgress)

const AmountCard = (props) => {
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
                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: 20 }}>
                        <div>
                            <Typography
                                variant="h5"
                                style={{ fontWeight: 'bold', margin: '16 0 16' }}
                            >
                                {`$${props.amount}`}
                            </Typography>
                            <Typography
                                variant="p"> of $100,000 backed
                            </Typography>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div>
                            <Typography
                                variant="h5"
                                style={{ fontWeight: 'bold', margin: '16 0 16' }}
                            >
                                {props.backers}
                            </Typography>
                            <Typography
                                variant="p"> total backers
                            </Typography>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div>
                            <Typography
                                variant="h5"
                                style={{ fontWeight: 'bold', margin: '16 0 16' }}
                            >
                                56
                            </Typography>
                            <Typography
                                variant="p"> days left
                            </Typography>
                        </div>
                    </div>
                    <BorderLinearProgress variant="determinate" value={(props.amount / 100000) * 100} />
                    <div style={{ height: 20 }} />
                </Paper>
            </div >
        </React.Fragment>
    )
}

export default AmountCard