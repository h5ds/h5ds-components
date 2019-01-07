import React, { Component, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { history } from './common';
import { routes } from './rotues';
import { demoMenus } from './demo-menus';

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <div className="left-menu">
            <ul>
              {demoMenus.map(m => {
                return (
                  <li key={m.name}>
                    <Link to={m.path} replace={true}>
                      {m.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right-panel">
            <Switch>
              {routes.map(r => {
                return <Route key={r.path} path={r.path} render={props => <r.component />} />;
              })}
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}
