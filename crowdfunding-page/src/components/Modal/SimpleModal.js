import React from 'react'
import { Modal, Fade, makeStyles, Backdrop, Typography, IconButton } from '@material-ui/core'
import ModalCard from './ModalCard'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '90%',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '40%',
        },
        margin: 'auto',

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        minHeight: '80vh',
        maxHeight: '90vh',
        overflow: 'hidden',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: 20,
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            overflow: 'scroll',
        },
    },
    button: {
        position: 'absolute',
        top: '10px',
        right: '10px',
    }
}))

const SimpleModal = (props) => {

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
                    <IconButton aria-label="close" className={classes.button} size="small" onClick={props.handleClose}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Back this project
                    </Typography>
                    <Typography variant='body2'>
                        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                    </Typography>
                    <ModalCard handleChange={props.handleChange}
                        selectedValue={props.selectedValue}
                        name="Pledge with no reward" summary="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
                        handleInputChange={props.handleInputChange}
                        handleSubmit={props.handleSubmit}
                        selectedAmount={props.selectedAmount}
                    />
                    {props.data.map((e) => {
                        return (<ModalCard handleChange={props.handleChange}
                            selectedValue={props.selectedValue}
                            name={e.name} summary={e.summary}
                            amount={e.amount}
                            left={e.left}
                            handleInputChange={props.handleInputChange}
                            handleSubmit={props.handleSubmit}
                            selectedAmount={props.selectedAmount}
                        />)
                    })}
                </div>
            </Fade>
        </Modal>
    )
}

export default SimpleModal
