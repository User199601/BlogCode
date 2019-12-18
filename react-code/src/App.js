import React, { Component } from 'react'

import {
    Button
} from 'antd'

const testHoc = (WrapComponent)=>{
    return class HOCComponent extends Component {
      render() {
        return (
            <>
                <WrapComponent />
                <div>This is HOCcOMPONENT</div>
            </>
        )
      }  
    } 
}

@testHoc

class App extends Component {
  render() {
    return (
      <div>
          <Button>123</Button>
      </div>
    )
  }
}

export default App