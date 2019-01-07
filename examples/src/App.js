import React, { Component, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { history } from './common';
import { routes } from './rotues';
import { demoMenus } from './demo-menus';
import './css/layout.css';

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="layout-container">
          <div className="top-nav">
            <h2>H5DS-COMPONENTS DEMO</h2>
          </div>
          <ul className="left-menu">
            {demoMenus.map(m => {
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
                return <Route key={r.path} path={r.path} render={props => <r.component />} />;
              })}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
