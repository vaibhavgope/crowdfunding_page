import React from 'react'
import { Typography, makeStyles, Paper, Card, CardContent, CardActions, Button } from '@material-ui/core'

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

const InfoCard = () => {
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
                    <Card variant="outlined" className={classes.card}>
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography className={classes.title}>
                                    Bamboo Stand
                                </Typography>
                                <Typography color='primary'>
                                    Pledge $25 or more
                                </Typography>
                            </div>
                            <Typography variant="body2" component="p">
                                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                                you’ll be added to a special Backer member list.
                            </Typography>
                        </CardContent>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Typography variant='h5' className={classes.title} style={{ marginLeft: 16 }}>
                                    101
                                </Typography>
                                <Typography variant='p' style={{ left: 3, top: 6, position: 'relative' }}>
                                    left
                                </Typography>
                            </div>
                            <CardActions>
                                <Button size="small" variant="contained" color="primary" style={{ marginRight: 16 }}>Select Reward</Button>
                            </CardActions>
                        </div>
                    </Card>
                    <div style={{ height: 20 }} />
                    <Card variant="outlined" className={classes.card}>
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography className={classes.title}>
                                    Black Edition Stand
                                </Typography>
                                <Typography color='primary'>
                                    Pledge $75 or more
                                </Typography>
                            </div>
                            <Typography variant="body2" component="p">
                                You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                                member list. Shipping is included.
                            </Typography>
                        </CardContent>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Typography variant='h5' className={classes.title} style={{ marginLeft: 16 }}>
                                    64
                                </Typography>
                                <Typography variant='p' style={{ left: 3, top: 6, position: 'relative' }}>
                                    left
                                </Typography>
                            </div>
                            <CardActions>
                                <Button size="small" variant="contained" color="primary" style={{ marginRight: 16 }}>Select Reward</Button>
                            </CardActions>
                        </div>
                    </Card>
                    <div style={{ height: 20 }} />
                    <Card variant="outlined" className={classes.card}>
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography className={classes.title}>
                                    Mahogany Special Edition
                                </Typography>
                                <Typography color='primary'>
                                    Pledge $200 or more
                                </Typography>
                            </div>
                            <Typography variant="body2" component="p">
                                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                                to our Backer member list. Shipping is included.
                            </Typography>
                        </CardContent>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Typography variant='h5' className={classes.title} style={{ marginLeft: 16 }}>
                                    0
                                </Typography>
                                <Typography variant='p' style={{ left: 3, top: 6, position: 'relative' }}>
                                    left
                                </Typography>
                            </div>
                            <CardActions>
                                <Button size="small" variant="contained" color="primary" style={{ marginRight: 16 }} disabled>Select Reward</Button>
                            </CardActions>
                        </div>
                    </Card>

                </Paper>
            </div>
        </React.Fragment >)
}

export default InfoCard