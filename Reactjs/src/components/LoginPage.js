import React from 'react';
import './../styles/Login.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signIn: true
		}
		this.signIn = this.signIn.bind(this);
		this.forgotPassword = this.forgotPassword.bind(this);
		this.navigateToSignUp = this.navigateToSignUp.bind(this);
		this.signUp = this.signUp.bind(this);
	}

	signIn(email, password) {
		console.log(email, password);
	}

	forgotPassword() {
		console.log("Forgot Password");
	}

	navigateToSignUp() {
		this.setState({ signIn: false });
	}

	signUp(data) {
		console.log(data);
		this.setState({ signIn: true });
	}

	render() {
		let { signIn } = this.state;
		return (
			<div className="flex">
				<div className="sidePane">
				</div>
				<div className="login">
					{signIn
						? <SignIn signIn={this.signIn} forgotPassword={this.forgotPassword} signUp={this.navigateToSignUp} />
						: <SignUp signUp={this.signUp} />
					}
				</div>
			</div>
		)
	}
}

export default LoginPage;