import React, { Component } from 'react'

import {articleDetail} from './routers'
import {Switch,Route,Redirect} from  'react-router-dom'

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


class App extends Component {
  render() {
    return ( 
      <div>
          <Switch> 
            {
            articleDetail.map(item=>{
                    return <Route 
                          key={item.pathname} 
                          path={item.pathname} 
                          exact = {true}
                          component={item.component} />
                })
            }
        </Switch>
      </div>
    )
  }
}

export default App