import React from 'react'
import { makeStyles, Paper, LinearProgress, withStyles } from '@material-ui/core'
import SingleAmountCard from './SingleAmountCard'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 15
    },
    amountCard: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 20,
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
    }
}))

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
        < div
            className={classes.container}
        >
            <Paper elevation={1} className={classes.paper}>
                <div className={classes.amountCard}>
                    {[{ "query": '$' + props.amount, "string": "of $100,000 backed", "divider": true },
                    { "query": props.backers, "string": "total backers", "divider": true },
                    { "query": "56", "string": "days left" }].map(ele => {
                        return <SingleAmountCard query={ele.query} string={ele.string} divider={ele.divider} />
                    })}
                </div>
                <BorderLinearProgress variant="determinate" value={(props.amount / 100000) * 100} />
                <div style={{ height: 20 }} />
            </Paper>
        </div >
    )
}

export default AmountCard