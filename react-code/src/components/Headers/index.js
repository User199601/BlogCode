import React,{useState} from 'react';
import { Menu, Icon,Row,Col, Divider,Avatar } from 'antd';
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;
export default function Headers(){
  const [current,setCurrent] = useState("mail");
  function handleClick(e){
    console.log('click ', e);
    setCurrent(e.key)
  }
    return (  
    <Row style={{background:'#fff',paddingTop:15}}>
      <Col span={18} push={1}>
       <img src={require("../../static/logo.png")} style={{width:40,height:60}}/>
      </Col>
      <Col span={6}>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{border:'none'}}>
            <Menu.Item key="mail">
                <Link to="/article">
                  <Icon type="mail" />
                  文章
                </Link> 
            </Menu.Item> 
            <Menu.Item key="app">
              <Link to="/about">
                <Icon type="appstore" />
                关于
              </Link>   
            </Menu.Item>
            <Menu.Item key="fk">
            <Link to="/updateLog">
              <Icon type="appstore" />
              更新日志
              </Link>  
            </Menu.Item>
            <Menu.Item key="about">
            <Link to="/connect">
              <Icon type="appstore" />
              反馈入口
              </Link> 
            </Menu.Item>
            </Menu>
      </Col>
    </Row>  
    );
}