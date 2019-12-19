import React, { Component } from 'react'

import {articleDetail} from './routers'
import {Switch,Route} from  'react-router-dom'
import {MainScreen} from './components'


class App extends Component {
  render() {
    return ( 
      <div>
          <MainScreen />


          
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