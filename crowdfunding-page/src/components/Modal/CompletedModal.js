import React from 'react'
import { Modal, Fade, makeStyles, Backdrop, Typography, Button } from '@material-ui/core'
import checkIcon from '../../images/icon-check.svg'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '80%',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '30%',
        },
        margin: 'auto',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 25
    },
    btn: {
        marginTop: 20
    }
}))

const CompletedModal = (props) => {

    const classes = useStyles();
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={props.open}
            onClose={props.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <div className={classes.paper}>
                    <img src={checkIcon} alt="" />
                    <Typography variant='h6' className={classes.title}>
                        Thanks for your support!
                    </Typography>
                    <Typography variant='body2'>
                        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                        an email once our campaign is completed.
                    </Typography>
                    <Button variant='contained' className={classes.btn} onClick={props.handleClose}>Got it!</Button>
                </div>
            </Fade>
        </Modal>
    )
}

export default CompletedModal
