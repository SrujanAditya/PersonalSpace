import React from 'react';
import { Card, Button, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            mobileNo: '',
            DOB: ''
        }
        this.password = '';
        this.buttonDisabled = true;
        this.submit = this.submit.bind(this);
        this.validation = {
            firstName: false,
            lastName: false,
            email: false,
            password: false,
            confirmPassword: false,
            mobileNo: false,
            DOB: false
        }
    }

    enableSubmitButton(){
        let validationErrorFlag=false;
        Object.keys(this.validation).forEach(key => {
            if(this.validation[key]){
                validationErrorFlag = true;
            }
        });
        this.buttonDisabled = validationErrorFlag;
    }

    onEmailIdChange = (event) => {
        this.setState({ email: event.target.value });
        this.validation.email = !event.target.value.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/);
        this.enableSubmitButton();
    }

    onFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
        this.validation.firstName = (event.target.value.length < 3);
        this.enableSubmitButton();
    }

    onLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
        this.validation.lastName = (event.target.value.length < 3);
        this.enableSubmitButton();
    }

    onPasswordChange = (event) => {
        this.password = event.target.value;        
        this.forceUpdate();
        this.validation.password = (event.target.value.length < 6);
        this.enableSubmitButton();
    }

    onConfirmPasswordChange = (event) => {
        this.validation.confirmPassword = (this.password !== event.target.value);
        this.forceUpdate();
        if (this.password === event.target.value) {
            this.setState({ password: this.password });
        }
        this.enableSubmitButton();
    }

    onMobileNumberChange = (event) => {
        this.setState({ mobileNo: event.target.value });
        this.validation.mobileNo = isNaN(event.target.value) || event.target.value.length < 10 || event.target.value.length > 12;
        this.enableSubmitButton();
    }

    onDOBChange = (event) => {
        this.setState({ DOB: event.target.value });
        this.validation.DOB = !event.target.value.match(/^([0-9]{2}\/[0-9]{2}\/[0-9]{4})$/);
        this.enableSubmitButton();
    }

    submit() {
        this.validation.email = !this.state.email.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/);
        this.validation.DOB = !this.state.DOB.match(/^([0-9]{2}\/[0-9]{2}\/[0-9]{4})$/);
        this.validation.mobileNo = isNaN(this.state.mobileNo) || this.state.mobileNo.length < 10 || this.state.mobileNo.length > 12;
        this.validation.password = (this.state.password.length < 6);
        this.validation.confirmPassword = (this.state.password !== this.password);
        this.validation.firstName = (this.state.firstName.length < 3);
        this.validation.lastName = (this.state.lastName.length < 3);
        let validationErrorFlag=false;
        Object.keys(this.validation).forEach(key => {
            if(this.validation[key]){
                validationErrorFlag = true;
            }
        });
        this.buttonDisabled = validationErrorFlag;
        this.forceUpdate();
        if(!this.buttonDisabled) this.props.signUp(this.state);
    }

    render() {
        return (
            <Card className="card">
                <TextField
                    size='small'
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="FirstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="name"
                    error={this.validation.firstName}
                    autoFocus
                    helperText={this.validation.firstName ? "Minimum 3 character required*" : ""}
                    onChange={this.onFirstNameChange}
                />
                <TextField
                    size='small'
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="LastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="name"
                    error={this.validation.lastName}
                    helperText={this.validation.lastName ? "Minimum 3 character required*" : ""}
                    onChange={this.onLastNameChange}
                />
                <TextField
                    size='small'
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={this.validation.email}
                    helperText={this.validation.email ? "Invalid Email Address*" : ""}
                    onChange={this.onEmailIdChange}
                />
                <TextField
                    size='small'
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={this.validation.password}
                    helperText={this.validation.password ? "Minimum 6 character required*" : ""}
                    onChange={this.onPasswordChange}
                />
                <TextField
                    size='small'
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirm password"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                    error={this.validation.confirmPassword}
                    helperText={this.validation.confirmPassword ? "Password Mismatch*" : ""}
                    onChange={this.onConfirmPasswordChange}
                />
                <TextField
                    size='small'
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="Mobile Number"
                    label="Mobile Number"
                    type="text"
                    id="MobileNo"
                    autoComplete="number"
                    error={this.validation.mobileNo}
                    helperText={this.validation.mobileNo ? "Incorrect Mobile Number*" : ""}
                    onChange={this.onMobileNumberChange}
                />
                <TextField
                    size='small'
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="Date of Birth"
                    label="Date of Birth"
                    type="text"
                    id="DOB"
                    placeholder="DD/MM/YYYY"
                    autoComplete="DOB"
                    error={this.validation.DOB}
                    helperText={this.validation.DOB ? "Invalid Date*" : ""}
                    onChange={this.onDOBChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={this.buttonDisabled}
                    onClick={this.submit}
                >
                    Sign In
           	    </Button>
            </Card>
        )
    }
}

SignUp.propTypes = {
    signUp: PropTypes.func
}

export default SignUp;