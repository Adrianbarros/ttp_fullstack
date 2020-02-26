import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { NavLink, Router } from "react-router-dom";
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';




export class StockPage extends Component {
    state = {
        total_amount: 5000,

    }


    render() {
        return (
            <Grid container spacing={2} >
                <div>
                    <Container component="main" maxWidth="xs">
                        <Typography component="h1" variant="h7">
                            Portafolio
                    </Typography>
                        <h1>${this.state.total_amount}</h1>
                    </Container>
                </div>
                <div>

                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Typography component="h1" variant="h7">
                            Stocks
                </Typography>
                        <Form onSubmit={this.props.getStock} >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                        name="ticker"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="ticker"
                                        label="Stock Ticker"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField
                                        name="qty"
                                        variant="outlined"
                                        //required
                                        fullWidth
                                        id="qty"
                                        label="Qty"
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <button> Buy </button>
                        </Form>
                    </Container>
                </div>
            </Grid>
        )
    }
}

export default StockPage
