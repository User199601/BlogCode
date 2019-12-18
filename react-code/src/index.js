import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import {mainRouter} from './routers'

render(
    <Router>
        {/* <Header /> */}
        <Switch> 
            <Route path="/main"  component={App}  />
            {
            mainRouter.map(item=>{
                    return <Route 
                            key={item.pathname} 
                            path={item.pathname}
                            exact={item.exact}                              
                            component={item.component} />
                })
            }
            <Redirect to="/main" from="/" exact />
            <Redirect to="/404" exact />
        </Switch>
    </Router>    
    ,document.getElementById('root'));
