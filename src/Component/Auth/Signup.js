import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../Store/Actions/authActions';

class signup extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <div>
                <div className='container'>
                    <form onSubmit={this.submitHandler} className='white'>
                        <h5 className='gery-text text-darken-3'>Sign Up</h5>
                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' onChange={this.changeHandler} />
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' onChange={this.changeHandler} />
                        </div>
                        <div className='input-field'>
                            <label htmlFor='firstName'>First Name</label>
                            <input type='text' id='firstName' onChange={this.changeHandler} />
                        </div>
                        <div className='input-field'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input type='text' id='lastName' onChange={this.changeHandler} />
                        </div>
                        <div className='input-field'>
                            <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
                        </div>
                        <div className='red-text center'>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signup)