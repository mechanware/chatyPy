import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            secret: '',
            email: '',
            firstName: '',
            lastName: '',
            loading: false,
            signUpSuccess: false,
            error: ''
        }
    }
   


    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        var data = {
            "username": this.state.userName,
            "secret": this.state.secret,
            "email": this.state.email,
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
        };
        var config = {
            method: 'post',
            url: 'https://api.chatengine.io/users/',
            headers: {
                'PRIVATE-KEY': 'd5775945-ba2f-4baa-9c76-65d0b7c00499'
            },
            data: data
        };
        await axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                this.setState({ signUpSuccess: true, loading: false })
                //window.location.reload();
                this.props.history.push('/signin');
            })
            .catch((error) => {
                console.log(error);
                this.setState({ loading: false, error: error })
            });

    }

    render() {
        return (
            <div className="wrapper">
                <div className="form">
                    <h2 className='title'>Sign Up to ChatyPy</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.userName} onChange={(e) => this.setState({ userName: e.target.value })} className="input " placeholder="Username" required />
                        <input type="password" value={this.state.secret} onChange={(e) => this.setState({ secret: e.target.value })} className="input " placeholder="Password" required />
                        {/* <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} className="input inputHeight" placeholder="Email" />
                        <input type="text" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} className="input inputHeight" placeholder="First Name" />
                        <input type="text" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} className="input inputHeight" placeholder="Last Name" /> */}
                        <div align="center">
                            <button type="submit" className="button " >
                                <span>Sign Up</span>
                            </button>
                        </div><br />
                        <span className='footer'>Already have an account ?</span> <br /> <NavLink className='signUp' to="/signin" >Sign in</NavLink>
                        <br />
                    </form>
                    {this.state.loading && <span className='footer'>Signing Up. Please wait...</span>}
                    {this.state.error && <span className='footer'>{this.state.error}</span>}
                </div>
            </div>
        );
    }
}

export default SignUp;