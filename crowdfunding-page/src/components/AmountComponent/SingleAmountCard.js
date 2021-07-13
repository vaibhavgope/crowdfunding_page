import React from 'react'
import { Typography, Divider, makeStyles, useTheme, useMediaQuery } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    card: {
        [theme.breakpoints.down('xs')]: {
            flex: '0 1 auto',
            width: '100%'
        }
    },
    title: { fontWeight: 'bold', margin: '16 0 16' }
}))

const SingleAmountCard = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <React.Fragment>
            <div className={classes.card}>
                <Typography
                    variant="h5"
                    className={classes.title}
                >
                    {props.query}
                </Typography>
                <Typography variant="p">
                    {props.string}
                </Typography>
            </div>
            {props.divider && <Divider orientation={isMobile ? 'horizontal' : 'vertical'} flexItem />}
        </React.Fragment>
    )
}

export default SingleAmountCard
