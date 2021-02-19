import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../Store/Actions/projectActions';

class CreateProject extends Component {
    state = {
        title:'',
        content:'',
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    submitHandler = (e) =>{
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
    render() {
        if(!this.props.auth.uid) return <Redirect to='/signin'/>
        return (
            <div>
                <div className='container'>
                    <form onSubmit={this.submitHandler} className='white'>
                        <h5 className='gery-text text-darken-3'>Create new project</h5>
                        <div className='input-field'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' id='title' onChange={this.changeHandler}/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='content'>Project Content</label>
                            <textarea className='materialize-textarea' id='content' onChange={this.changeHandler}/>
                        </div>
                        <div className='input-field'>
                            <button className='btn pink lighten-1 z-depth-0'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);