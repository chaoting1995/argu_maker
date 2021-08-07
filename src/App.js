import React, { useState, useEffect } from 'react';

// CSS in JS
import styled from '@emotion/styled';
// 時間格式
import moment from 'moment';
// field type
import { itemTypeInfoArr } from 'info/typeInfo';
//---------------------------------------
import ArguItem from 'component/ArguItem';

//---------------------------------------

// CSS
const ArguMakerWrap = styled.div`
  padding-bottom: 76px;

  .hr-dark {
    border-bottom: 2px solid #ccc;
    margin: 16px 0 16px 0;
  }
`;

//---------------------------------------
function App() {
  const [fileInfo, setFileInfo] = useState({
    fileName: '',
    authName: '',
    timestamp: moment().format('YYYY-MM-DD HH:mm'),
    topic: '',
    side: '',
  });

  useEffect(() => {
    let AM_fileInfo = JSON.parse(localStorage.getItem('AM_fileInfo'));
    console.log('AM_fileInfo', AM_fileInfo);
    if (AM_fileInfo) setFileInfo(AM_fileInfo);
  }, []);

  useEffect(() => {
    localStorage.setItem('AM_fileInfo', JSON.stringify(fileInfo));
  }, [fileInfo]);

  //----------------------
  return (
    <>
      <ArguMakerWrap className="container">
        <div style={{ height: '50px' }}></div>
        {itemTypeInfoArr.map((item, index) => {
          return (
            <ArguItem
              key={index}
              typeInfo={item}
              fileInfo={fileInfo}
              setFileInfo={setFileInfo}
            />
          );
        })}
      </ArguMakerWrap>
    </>
  );
}

export default App;
