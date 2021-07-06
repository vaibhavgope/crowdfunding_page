import React from 'react'
import { Card, CardContent, CardActions, Button, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    title: { fontWeight: 'bold', margin: '16' },
    card: {
        maxWidth: '70%',
        margin: 'auto',
        borderRadius: '10px',
    }
})

const SingleInfoCard = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Card variant="outlined" className={classes.card} style={{ color: props.left == 0 ? 'grey' : 'black' }}>
                <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography className={classes.title}>
                            {props.name}
                        </Typography>
                        <Typography color='primary'>
                            {`Pledge $${props.amount} or more`}
                        </Typography>
                    </div>
                    <Typography variant="body2" component="p">
                        {props.summary}
                    </Typography>
                </CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography variant='h5' className={classes.title} style={{ marginLeft: 16 }}>
                            {props.left}
                        </Typography>
                        <Typography variant='p' style={{ left: 3, top: 6, position: 'relative' }}>
                            left
                        </Typography>
                    </div>
                    <CardActions>
                        <Button size="small" value={props.name} variant="contained" color="primary"
                            style={{ marginRight: 16, color: 'white' }} onClick={props.handleButton}
                            disabled={props.left == 0}
                        >
                            Select Reward
                        </Button>
                    </CardActions>
                </div>
            </Card>
            <div style={{ height: 20 }} />
        </div>
    )
}

export default SingleInfoCard
