import React, {Component} from 'react';
import {Menu, Icon, Switch} from 'antd';
import './mdcConfig.less'

const {SubMenu} = Menu;

class mdcConfig extends Component {
  state = {
    mode: 'inline',
    theme: 'light',
  }

  changeMode = (value) => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  }

  render() {
    return (
      <div className="mdcConfig" style={{height: '100%'}}>
        <div className="sideBar">
          <Menu
            className="left_menu"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode={this.state.mode}
            theme={this.state.theme}
          >
            <Menu.Item key="1">
              <Icon type="mail" />
              Navigation One
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="calendar" />
              Navigation Two
            </Menu.Item>
          </Menu>
        </div>
        <div className="right_content"></div>
      </div>
    );
  }
}

export default mdcConfig;