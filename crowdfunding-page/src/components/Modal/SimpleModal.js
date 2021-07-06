import React from 'react'
import { Modal, Fade, makeStyles, Backdrop, Typography } from '@material-ui/core'
import ModalCard from './ModalCard'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '40%',
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
    },
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
                    <Typography variant='h6' className={classes.title}>
                        Back this project
                    </Typography>
                    <Typography variant='body2'>
                        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                    </Typography>
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
