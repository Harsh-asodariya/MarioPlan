import React, { Component } from 'react';
import ProjectList from '../Projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class DashBoard extends Component {
    render() {
        if (!this.props.auth.uid) return <Redirect to='/signin' />
        let projects
        if (this.props.projects) {
             projects = this.props.projects.filter(project => project.authorId === this.props.auth.uid)
        }
        return (
            <div className="dashboard container">
                <ProjectList projects={projects} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.project,
        auth: state.firebase.auth
    }
}

export default compose(
    firestoreConnect(() => [{
        collection: 'project'
    }]),
    connect(mapStateToProps),
)(DashBoard);