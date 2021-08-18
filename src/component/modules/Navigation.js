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
const tabs = [
  {
    route: '/home',
    icon: <RiHome6Fill size="30" />,
    label: 'Home',
  },
  {
    route: '/arguGetter',
    icon: <RiEditBoxFill size="30" />,
    label: 'Edit',
  },
  {
    route: '/search',
    icon: <RiInputMethodFill size="30" />,
    label: 'AM',
  },
  {
    route: '/intro',
    icon: <RiQuestionFill size="30" />,
    label: 'Intro',
  },
  {
    route: '/login',
    icon: <RiLoginBoxFill size="30" />,
    label: 'Login',
  },
];
// --------------------------------------------------------
const Navigation = (props) => {
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
            <NavItem>
              <NavLink to="/test2" className="nav-link">
                Test2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/arguGetter" className="nav-link">
                ArguGetter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </NavItem>
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
};

// CSS
const NavigationWrap = styled.div`
  .navbar {
    ${'' /* border-bottom: solid 1px #ebebeb; */}
  }
  .bottom-tab-nav {
    border-top: solid 1px #1ab1c9;
  }
  .nav-link,
  .bottom-nav-link {
    color: #55575b;
  }
  .bottom-nav-link.active {
    color: #1ab1c9;
  }
  .bottom-tab-label {
    font-size: 12px;
  }
`;

export default Navigation;
