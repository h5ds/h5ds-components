import React, { Component, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { history } from './common';
import { routes, routesMenus } from './rotues';
import './css/layout.less';

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="layout-container">
          <div className="top-nav">
            <h2>H5DS-COMPONENTS DEMO</h2>
          </div>
          <ul className="left-menu">
            {routesMenus.map(m => {
              return (
                <li key={m.name}>
                  <Link to={m.path} replace={true} title={m.text}>
                    {m.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="right-panel">
            <Switch>
              {routes.map(r => {
                return (
                  <Route
                    key={r.path}
                    exact={true}
                    strict={true}
                    sensitive={true}
                    path={r.path}
                    render={props => <r.component />}
                  />
                );
              })}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
