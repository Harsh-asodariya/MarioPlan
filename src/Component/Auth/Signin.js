import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../Store/Actions/authActions';
import {Redirect} from 'react-router-dom';

class signin extends Component {
    state = {
        email: '',
        password: ''
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const { authError, auth } = this.props
        if(auth.uid) return <Redirect to='/'/>
        return (
            <div>
                <div className='container'>
                    <form onSubmit={this.submitHandler} className='white'>
                        <h5 className='gery-text text-darken-3'>Sign In</h5>
                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' onChange={this.changeHandler} />
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' onChange={this.changeHandler} />
                        </div>
                        <div className='input-field'>
                            <button className='btn pink lighten-1 z-depth-0'>Login</button>
                            <div className='red-text center'>
                                {authError ? <p>{authError}</p> : null}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signin)
