import React from 'react';
import { Switch, Route } from 'react-router-dom';
import sitemap from './sitemap';
import asyncComponent from './AsyncFunc';

class AppRouter extends React.Component {
  render() {
    let sitemapList = [];

    for(var a in sitemap) {
      sitemapList.push(sitemap[a]);
    }

    const routes = sitemapList.map((r,i) => {
      return <Route key={i} exact
        path={r.path}
        component={asyncComponent(() => import('../'+r.component+'/index.js'))}
      />      
    });

    return <Switch>
      {routes}
    </Switch>;
  }
}
export default AppRouter;