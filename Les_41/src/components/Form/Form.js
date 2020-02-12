import React from 'react';
import './Form.sass'

class Form extends React.Component {
	constructor(props){
	  super(props);
	  this.state = {
	    email: '',
		 password: '',
		 isGoing: true,
		 errors: {
			email: '',
			password: ''
		 }
	  }
	}

  handleInputChange = (e) =>  {
	 this.setState({state: this.state.errors.email = ''});
	 this.setState({state: this.state.errors.password = ''});
	 const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
	 const name = e.target.name;
	 this.setState({
		[name]: value
	 });
  };

  handleSubmit = (e) => {
	 if (!this.state.email || this.state.email.indexOf('@') < 0){
		this.setState({state: this.state.errors.email = 'Введіть коректну почту'});
	 }else if (!this.state.password) {
		this.setState({state: this.state.errors.password = 'Введіть пароль'});
	 }else {
	   alert(`Ім'я: ${this.state.email} Пароль: ${this.state.password} Keep: ${this.state.isGoing}`)
	 }
	 e.preventDefault();
  };

	render() {
	  return(
		 <div className="formWrapper">
			<h1>SIGIN IN TO YORUR ACCOUNT</h1>
			<form method="POST">
			  <input
				 type="text"
				 name="email"
				 placeholder="e-mail"
				 value={this.state.value}
				 onChange={this.handleInputChange}
			  />
			  <span>{this.state.errors.email ? this.state.errors.email : null}</span>
			  <input
				 type="password"
				 name="password"
				 placeholder="password"
				 value={this.state.value}
				 onChange={this.handleInputChange}
			  />
			  <span>{this.state.errors.password ? this.state.errors.password : null}</span>
			  <label>
				 <input
					name="isGoing"
					type="checkbox"
					checked={this.state.isGoing}
					onChange={this.handleInputChange}
				 />
				 Keep me signed in
			  </label>
			  <button onClick={this.handleSubmit}>SIGN IN</button>
			</form>
		 </div>
	  );
	}
}

export default Form;