import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Component/Layout/Navbar';
import DashBoard from './Component/Dashboard/Dashboard';
import ProjectDetails from './Component/Projects/ProjectDetails';
import SignIn from './Component/Auth/Signin';
import SignUp from './Component/Auth/Signup';
import CreateProject from './Component/Projects/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path='/' exact component={DashBoard}/>
            <Route path='/project/:id' component={ProjectDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/create' component={CreateProject}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
