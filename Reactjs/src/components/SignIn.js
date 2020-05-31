import React from 'react';
import { Card, Button, TextField, Link, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.password = '';
    }

    onEmailIdChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    toggleShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword});
    } 

    submit = () => {
        this.props.signIn(this.state.email, this.state.password);
    }

    render() {
        return (
            <Card className="card">
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={this.onEmailIdChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.onPasswordChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.submit}
                >
                    Sign In
           	    </Button>
                <Grid container>
                    <Grid item xs>
                        <Link className="link" variant="body2" onClick={this.props.forgotPassword}>
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link className="link" variant="body2" onClick={this.props.signUp}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

SignIn.propTypes = {
    signIn: PropTypes.func,
    forgotPassword: PropTypes.func,
    signUp: PropTypes.func
}

export default SignIn;