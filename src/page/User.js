import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

// ----------------------------------------------
import handleLogin from '../api/handleLogin';

import styled from '@emotion/styled';
// ----------------------------------------------

function User(props) {
  const { userInfo, setUserInfo } = props;
  // 透過state，監管表單資料
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  //   setArticle((pre) => [...pre, ...newArticle]);
  // 格式檢查提示訊息
  const [feedback, setFeedback] = useState({});

  // ----------------------------------------------------

  function handleSubmit() {
    // 判斷通過與否
    let isPass = true;
    // 每次提交，重置警告訊息
    setFeedback({
      accountInfo: '',
      passwordInfo: '',
    });

    // 檢查資料格式
    if (!account) {
      isPass = false;
      let accountInfo = '請輸入正確帳號';
      setFeedback((pre) => ({ ...pre, accountInfo }));
    }

    if (!password) {
      isPass = false;
      let passwordInfo = '請輸入正確密碼';
      setFeedback((pre) => ({ ...pre, passwordInfo }));
    }

    // 若通過
    if (isPass) {
      (async () => {
        const body = { account, password };
        // 傳送表單到DB，取得回應
        const obj = await handleLogin(body);
        // 藉由回應決定下一步
        if (obj.success) {
          // 登入成功，呈現提示訊息
          setUserInfo(obj);
          localStorage.setItem('DE_UserInfo', JSON.stringify(obj));
          console.log('obj', obj);
          setTimeout(() => {
            // 轉向到對應頁面
            props.history.push('/');
          }, 1000);
        } else {
          // 登入失敗，呈現提示訊息
          setUserInfo(obj);
        }
      })();
    }
  }

  return (
    <UserWrap>
      <div className="col-9 col-sm-6">
        <h2
          className="mx-auto mt-2 mb-4 text-center"
          onClick={() => {
            setAccount('samuel');
            setPassword('123456');
          }}
        >
          Argu Maker
        </h2>
        <div className="form-group">
          <input
            type="text"
            name="account"
            className={`form-control form-control-lg ${
              feedback.accountInfo && 'is-invalid'
            }`}
            placeholder="請輸入帳號"
            autoFocus
            required
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          />
          <small
            className={`form-text text-danger d-none ${
              feedback.accountInfo && 'd-inline'
            }`}
          >
            {feedback.accountInfo}
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            className={`form-control form-control-lg ${
              feedback.password && 'is-invalid'
            }`}
            placeholder="請輸入密碼"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          />
          <small
            className={`form-text text-danger d-none ${
              feedback.passwordInfo && 'd-inline'
            }`}
          >
            {feedback.passwordInfo}
          </small>
        </div>
        <div className="form-group">
          <button
            className="btn btn-info btn-lg font-weight-bold w-100"
            type="button"
            onClick={handleSubmit}
          >
            登入
          </button>
        </div>

        <InfoBar message={userInfo && userInfo.message}>
          <div
            className={`alert  text-center 
            ${userInfo && userInfo.success ? 'alert-success' : 'alert-danger'}
          `}
            role="alert"
          >
            {userInfo && userInfo.message}
          </div>
        </InfoBar>
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

const InfoBar = styled.div`
  transition: 0.5s;
  overflow: hidden;
  height: ${({ message }) => (!message ? '0px' : '66px')};
`;

// ----------------------------------------------
export default withRouter(User);
