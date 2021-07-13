import React from 'react'
import { Card, CardContent, CardActions, Button, Radio, makeStyles, Divider, InputAdornment, Typography, InputBase, withStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    title: { fontWeight: 'bold' },
    root: {
        maxHeight: '5%',
        margin: 'auto',
        borderRadius: '10px',
        fontSize: '12px',
        marginBottom: '5px',
    },
    nameContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    name: {
        fontWeight: 'bold',
        position: 'relative',
        top: 10
    },
    price: {
        position: 'relative',
        top: 10,
        left: 5,
    },
    outerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    innerContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        "& > *": {
            [theme.breakpoints.down('xs')]: {
                flex: '0 1 auto',
                width: '100%',
                padding: 2,
                position: 'relative',
                top: 0,
            },
        }
    },
    leftContainer: {
        [theme.breakpoints.down('xs')]: {
            order: 1
        },
        display: 'flex',
        justifyContent: 'flex-start',
        position: 'relative',
        top: 1
    },
    left: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: 2,
        },
        [theme.breakpoints.up('s')]: {
            marginLeft: 20
        },
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 'large'
    },
    pledgeText: {
        position: 'relative',
        margin: 'auto'
    },
    submitBtn: {
        position: 'relative',
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        right: 0,
        margin: 5
    },
    flexEnd: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-between',
        },
        [theme.breakpoints.up('lg')]: {
            justifyContent: 'flex-end',
        },
    }
}))
const BootstrapInput = withStyles((theme) => ({
    root: {
        position: 'relative',
        width: '30%',
    },
    input: {
        borderRadius: '100px',
        right: 0,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        maxWidth: '100%',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    }
}))(InputBase);

const ModalCard = (props) => {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.root} style={{ color: props.left <= 0 ? 'grey' : 'black', borderColor: props.selectedValue === props.name ? 'cyan' : "" }}>
            <CardContent>
                <div className={classes.outerContainer}>
                    <div className={classes.innerContainer}>
                        <div className={classes.nameContainer}>
                            <Radio
                                checked={props.selectedValue === props.name}
                                onChange={props.handleChange}
                                value={props.name}
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                                className={classes.radio}
                                disabled={props.left === 0}
                            />
                            <div className={classes.name}>
                                {props.name}
                            </div>
                        </div>
                        {props.amount && <Typography color='primary' variant='body' className={classes.price}>
                            {`Pledge $${props.amount} or more`}
                        </Typography>}
                    </div>
                    <div className={classes.leftContainer}>
                        <div className={classes.left}>
                            {props.left}
                        </div>
                        {props.left >= 0 && <div style={{ left: 3, top: 5, position: 'relative' }}>
                            left
                        </div>}
                    </div>
                    <Typography color='textSecondary' variant='body'>
                        {props.summary}
                    </Typography>
                </div>
            </CardContent>
            {props.selectedValue === props.name ? (props.amount ?
                <React.Fragment>
                    <Divider />
                    <div className={classes.inputContainer}>
                        <Typography variant='body2' color='textSecondary' className={classes.pledgeText}>
                            Enter your pledge:
                        </Typography>
                        <CardActions>
                            <div className={classes.flexEnd}>
                                <BootstrapInput
                                    defaultValue={props.amount}
                                    value={props.selectedAmount}
                                    onChange={props.handleInputChange}
                                    startAdornment={<InputAdornment>$</InputAdornment>} />
                                <Button size="small"
                                    value={props.name}
                                    variant="contained"
                                    onClick={props.handleSubmit}
                                    className={classes.submitBtn}
                                    disabled={props.amount && props.selectedAmount < props.amount}>Continue</Button>
                            </div>
                        </CardActions>
                    </div>
                </React.Fragment>
                : <div className={classes.inputContainer}>
                    <div></div>
                    <Button size="small" value={props.name} variant="contained" onClick={props.handleSubmit}>Continue</Button>
                </div>
            ) : ""}
        </Card>
    )
}

export default ModalCard
