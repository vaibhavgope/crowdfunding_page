import React from 'react'
import { Card, CardContent, CardActions, Button, Radio, makeStyles, TextField, InputAdornment } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    title: { fontWeight: 'bold' },
    card: {
        maxHeight: '5%',
        margin: 'auto',
        borderRadius: '10px',
        fontSize: '12px',
        marginBottom: '5px'
    },
}))

const ModalCard = (props) => {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.card} style={{ color: props.left <= 0 ? 'grey' : 'black' }}>
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Radio
                            checked={props.selectedValue === props.name}
                            onChange={props.handleChange}
                            value={props.name}
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                            className={classes.radio}
                            disabled={props.left == 0}
                        />
                        <div style={{ fontWeight: 'bold' }}>
                            {props.name}
                        </div>
                    </div>
                    {props.amount && <div style={{ color: 'hsl(176, 50%, 47%)' }}>
                        {`Pledge $${props.amount} or more`}
                    </div>}
                </div>
                <div>
                    {props.summary}
                </div>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {props.left &&
                    <div style={{ display: 'flex', justifyContent: 'flex-start', position: 'relative', top: 1 }}>
                        <div style={{ marginLeft: 20, marginBottom: 5 }}>
                            {props.left}
                        </div>
                        <div style={{ left: 3, position: 'relative' }}>
                            left
                        </div>
                    </div>}
                {props.selectedValue === props.name ? (props.amount ?
                    <CardActions>
                        <TextField id="outlined-basic"
                            variant="outlined" size="small"
                            defaultValue={props.amount}
                            value={props.selectedAmount}
                            onChange={props.handleInputChange}
                            InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
                        {props.selectedAmount < props.amount ?
                            <Button size="small" value={props.name} variant="contained" color="primary" style={{ color: 'white', borderRadius: '10' }} onClick={props.handleSubmit} disabled>Continue</Button> :
                            <Button size="small" value={props.name} variant="contained" color="primary" style={{ color: 'white', borderRadius: '10' }} onClick={props.handleSubmit}>Continue</Button>}
                    </CardActions>
                    :
                    <Button size="small" value={props.name} variant="contained" color="primary" style={{ color: 'white', borderRadius: '10' }} onClick={props.handleSubmit}>Continue</Button>
                ) : ""}
            </div>
        </Card>
    )
}

export default ModalCard
