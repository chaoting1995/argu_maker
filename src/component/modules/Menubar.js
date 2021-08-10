import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

// --------------------------------------

import styled from '@emotion/styled';
const NavbarBack = styled.div`
  width: 100%;
  height: 56px;
`;
// --------------------------------------
const MenubarWrap = styled.div`
  & .text-front {
    display: none;
  }
  & .text-back {
    margin-left: 10px;
  }
  & .dropdown-menu {
    position: absolute;
    left: 0;
    right: auto;
  }

  @media (min-width: 576px) {
    & .dropdown-menu {
      right: 0;
      left: auto;
    }
    & .text-back {
      display: none;
    }
    & .text-front {
      display: inline-block;
    }
  }
`;
// --------------------------------------

function Menubar(props) {
  // --------------------------------------

  // --------------------------------------

  return (
    <MenubarWrap>
      <NavbarBack />
      <Navbar bg="dark" variant="dark" expand="sm" fixed="bottom">
        <Navbar.Brand
          onClick={() => {
            props.history.push('/');
          }}
          style={{ cursor: 'pointer' }}
        >
          AM
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text className="ml-auto" style={{ cursor: 'pointer' }}>
            <span className="text-front">Login</span>
            <FaUserCircle
              style={{
                fontSize: '20px',
                color: '#aaa',
                padding: 0,
                margin: '-2px 5px 0 5px',
              }}
            />
            <span className="text-back">Login</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </MenubarWrap>
  );
}

export default withRouter(Menubar);
