import React from 'react'
import { Typography, Button, makeStyles, Paper } from '@material-ui/core'
import logoIcon from '../images/logo-mastercraft.svg'

const useStyles = makeStyles({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -120,
        position: 'absolute',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 150px',
        paddingBottom: 50,
    }
})
const PageContent = () => {
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
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: -30,
                        }}
                    >
                        <img src={logoIcon} alt="" />
                    </div>
                    <div style={{ height: 20 }} />
                    <Typography
                        variant="h4"
                        //color="textSecondary"
                        style={{ fontWeight: 'bold', margin: 16, textAlign: 'center' }}
                    >
                        A solution for every project
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        color="textSecondary"
                        style={{ margin: 16, textAlign: 'center' }}
                    >
                        Choose from 3 different starter kits. From a basic one to a full
                        featured application.
                    </Typography>
                    <div style={{ height: 30 }} />
                    <div className={classes.buttonContainer}>
                        <Button variant="contained" color="primary">
                            Back this project
                        </Button>
                        <Button variant="contained" color="primary">
                            BookMark
                        </Button>
                    </div>
                </Paper>
            </div >
        </React.Fragment>
    )
}

export default PageContent
