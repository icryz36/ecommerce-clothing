import React, { Component } from 'react';
import FormInput from './../form-input/form-input.component'
import CustomButton from './../../components/custom-button/custom-button.component'

import {signInWithGoogle} from './../../firebase/firebase.utils'

import './sign-in.style.scss'
class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="Email" type="email" handleChange={this.handleChange} value={this.state.email} required/>
                    <FormInput name="email" label="Password" type="password" handleChange={this.handleChange} value={this.state.email} required/>
                    <div className="buttons">
                        <CustomButton type="submit" >Submit Form</CustomButton>
                        <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle} >{' '}Sign In With Google{' '}</CustomButton>
                    </div>                    
                </form>
            </div>
        );
    }
    handleSubmit = e =>{
        e.preventDefault()

    }
    handleChange = e =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }
}

export default SignIn;