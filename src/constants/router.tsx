/*
 * @Descripttion: 路由
 * @version: 
 * @Author: wonder.d.wang
 * @Date: 2021-04-23 15:47:00
 * @LastEditors: wonder.d.wang
 * @LastEditTime: 2021-04-25 10:21:13
 */
import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Top from '../pages/Top';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Top} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;