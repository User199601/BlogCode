import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {Headers,Footer} from './components'
import {mainRouter} from './routers'
import { Layout } from 'antd';
const {Content } = Layout;
render(
    <Router>
        <Layout>
            <Headers />
            <Content style={{ background: '#fff', padding: 24, minHeight: 800 }}>       
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
            </Content>
            <Footer />
          </Layout>
    </Router>    
    ,document.getElementById('root'));
