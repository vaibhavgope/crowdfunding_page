import React from 'react'
import { Card, CardContent, CardActions, Button, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 'bold',
        margin: '16',
    },
    disabledTitle: {
        fontWeight: 'bold',
        margin: '16',
        color: 'grey'
    },
    card: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '90%',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '70%',
        },
        margin: 'auto',
        borderRadius: '10px',
    },
    btn: {
        marginRight: 16,
    },
    innerCard: {
        [theme.breakpoints.down('xs')]: {
            flex: '0 1 auto',
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'space-between'
        },
    },
}))

const SingleInfoCard = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Card variant="outlined" className={classes.card}>
                <CardContent>
                    <div className={classes.innerCard}>
                        <Typography className={props.left > 0 ? classes.title : classes.disabledTitle}>
                            {props.name}
                        </Typography>
                        <Typography color='primary'>
                            {`Pledge $${props.amount} or more`}
                        </Typography>
                    </div>
                    <Typography variant="body2" component="p" color='textSecondary'>
                        {props.summary}
                    </Typography>
                </CardContent>
                <div className={classes.innerCard}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography variant='h5' className={classes.title} style={{ marginLeft: 16 }}>
                            {props.left}
                        </Typography>
                        <Typography variant='p' style={{ left: 3, top: 6, position: 'relative' }} color='textSecondary'>
                            left
                        </Typography>
                    </div>
                    <CardActions>
                        <Button size="small" value={props.name} variant="contained"
                            className={classes.btn} onClick={props.handleButton}
                            disabled={props.left == 0}
                        >
                            Select Reward
                        </Button>
                    </CardActions>
                </div>
            </Card>
            <div style={{ height: 20 }} />
        </React.Fragment>
    )
}

export default SingleInfoCard
