/*
 * @Descripttion: 路由
 * @version: 
 * @Author: wonder.d.wang
 * @Date: 2021-04-23 15:47:00
 * @LastEditors: wonder.d.wang
 * @LastEditTime: 2021-04-29 15:22:50
 */
import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes'
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} exact path={route.path} component={route.component} />
        ))}
        {/* Not Found */}
        <Route exact component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;