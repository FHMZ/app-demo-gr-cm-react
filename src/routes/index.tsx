import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { appRoute } from '../config/routes'
import DashboardPage from '../pages/Dashboard'
import LoginPage from '../pages/Login'

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to={appRoute.appLogin} />
    </Route>
    <Route path={appRoute.appLogin} component={LoginPage} exact />
    <Route path={appRoute.appMainDashboard} component={DashboardPage} exact />
  </Switch>
)

export default Routes
