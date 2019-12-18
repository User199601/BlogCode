import React, { Component } from 'react'

import {articleDetail} from './routers'
import {Switch,Route,Redirect} from  'react-router-dom'

class App extends Component {
  render() {
    return ( 
      <div>
          <div>Header</div>
          <Switch> 
            {
            articleDetail.map(item=>{
              console.log(item,"*****")
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