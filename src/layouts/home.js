import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import './home.less';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

class Home extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="Menu">
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding: '10px'}}>
          <div className="content">Content</div>
        </Content>
      </Layout>
    );
  }
}

export default Home;