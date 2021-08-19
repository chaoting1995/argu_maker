import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// CSS in JS
import styled from '@emotion/styled';
// --------------------------------------------------------
import {
  RiHome6Fill,
  RiLoginBoxFill,
  RiInputMethodFill,
  RiUser3Fill,
  RiEditBoxFill,
  RiQuestionFill,
} from 'react-icons/ri';
// --------------------------------------------------------

// --------------------------------------------------------
function Navigation(props) {
  const { userInfo, setUserInfo } = props;

  const tabs = [
    {
      route: '/home',
      icon: <RiHome6Fill size="30" />,
      label: '首頁',
    },
    {
      route: '/local',
      icon: <RiEditBoxFill size="30" />,
      label: '單機版',
    },
    {
      route: '/arguMaker',
      icon: <RiInputMethodFill size="30" />,
      label: 'ArguMaker',
    },
    {
      route: '/intro',
      icon: <RiQuestionFill size="30" />,
      label: '說明',
    },
    {
      route: '/user',
      icon: userInfo ? <RiUser3Fill size="30" /> : <RiLoginBoxFill size="30" />,
      label: userInfo ? ' 會員' : '登入',
    },
  ];
  return (
    <NavigationWrap>
      {/* Top Bar*/}
      <nav
        className="navbar navbar-expand-md navbar-light sticky-top bg-dark d-none d-sm-block"
        role="navigation"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Argu Maker
          </a>
          <Nav className="ml-auto">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link top-nav-link"
                  activeClassName="active"
                >
                  <span className="top-tab-label">{tab.label}</span>
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </nav>

      {/* Bottom Tab Navigator*/}
      <nav
        className="navbar fixed-bottom navbar-light bg-dark bottom-tab-nav d-block d-sm-none"
        role="navigation"
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`} style={{ width: '50%' }}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    {tab.icon}
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </NavigationWrap>
  );
}

// CSS
const NavigationWrap = styled.div`
  .navbar {
    ${'' /* border-bottom: solid 1px #ebebeb; */}
  }
  .navbar-brand {
    color: #fff;
  }
  .bottom-tab-nav {
    border-top: solid 1px #1ab1c9;
  }
  .top-nav-link {
    color: #eee;
  }
  .bottom-nav-link {
    color: #55575b;
  }
  .nav-link.active,
  .bottom-nav-link.active {
    color: #1ab1c9;
  }
  .top-tab-label {
    font-weight: 700;
  }
  .bottom-tab-label {
    font-size: 12px;
  }
`;

export default Navigation;
