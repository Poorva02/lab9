import React from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import { connect } from 'react-redux';

const App = ({ activeUsers }) => {
  return (
    <div className="App">
      <div className="active-users">active users: {activeUsers}</div>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  activeUsers: state.userReducer.activeUsers,
});

export default connect(mapStateToProps)(App);
