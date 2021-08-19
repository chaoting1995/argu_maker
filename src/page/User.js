import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import styled from '@emotion/styled';
// ----------------------------------------------
import SignIn from '../component/user/SignIn';
import SignUp from '../component/user/SignUp';
// ----------------------------------------------

// ----------------------------------------------

function User(props) {
  return (
    <UserWrap>
      <div className="col-9 col-sm-6 position-relative">
        <h2 className="mx-auto mt-2 mb-4 text-center">Argu Maker</h2>
        <Tab.Container defaultActiveKey="signIn" id="user-card">
          <div class="form-group">
            <Nav variant="pills">
              <Nav.Item
                style={{
                  width: '50%',
                  textAlign: 'center',
                }}
              >
                <Nav.Link eventKey="signIn">登入</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ width: '50%', textAlign: 'center' }}>
                <Nav.Link eventKey="signUp">註冊</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div class="form-group">
            <Tab.Content>
              <Tab.Pane eventKey="signIn">
                <SignIn {...props} />
              </Tab.Pane>
              <Tab.Pane eventKey="signUp">
                <SignUp {...props} />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </UserWrap>
  );
}
// ----------------------------------------------

// CSS
const UserWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${'' /* background-color: #faf; */}
  & > div {
    margin-top: -100px;
  }
`;

// ----------------------------------------------
export default withRouter(User);
