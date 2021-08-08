import React, { useState, useEffect } from 'react';
// 時間格式
import moment from 'moment';
//---------------------------------------
// field type
import typeInfo, { itemTypeInfoArr } from 'info/typeInfo';
//---------------------------------------
import ArguItem from 'component/ArguItem';
import ArguSection from 'component/ArguSection';
//---------------------------------------
// CSS in JS
import styled from '@emotion/styled';
// CSS
const ArguGetterWrap = styled.div`
  padding-bottom: 76px;
  .hr-dark {
    border-bottom: 2px solid #ccc;
    margin: 16px 0 16px 0;
  }
`;

//---------------------------------------
function App() {
  // 基本資訊
  const [fileInfo, setFileInfo] = useState({
    fileName: '',
    authName: '',
    timestamp: moment().format('YYYY-MM-DD HH:mm'),
    topic: '',
    side: '',
  });

  //刪除按鈕的顯示狀態
  const [showDelSec, setShowDelSec] = useState(false);
  const [showDelPoint, setShowDelPoint] = useState(false);
  // point 選單狀態
  const [pointLabel, setPointLabel] = useState('重點');
  // 段落
  const [article, setArticle] = useState([
    {
      id: 1, //timestamp
      content: '',
      point: [
        {
          id: 1, //timestamp
          title: '重點', //動態
          content: '',
        },
      ],
    },
  ]);
  //---------------------------------------
  const { sectionBtn } = typeInfo;
  //---------------------------------------

  useEffect(() => {
    let AM_fileInfo = JSON.parse(localStorage.getItem('AM_fileInfo'));
    if (AM_fileInfo) setFileInfo(AM_fileInfo);
  }, []);

  useEffect(() => {
    localStorage.setItem('AM_fileInfo', JSON.stringify(fileInfo));
  }, [fileInfo]);

  //---------------------------------------
  function handleAddSection() {
    const newSection = {
      id: new Date(), //timestamp
      content: '',
      point: [],
    };
    setArticle((pre) => [...pre, newSection]);
  }
  function handleDelSectionShow() {
    setShowDelSec(!showDelSec);
  }
  function handleDelSection(SectionID) {
    const newArticle = article.filter((item) => item.id !== SectionID);
    setArticle(newArticle);
  }

  //---------------------------------------
  return (
    <>
      <ArguGetterWrap className="container">
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
        {/* ------------------------- */}

        {article.map((item, index) => {
          return (
            <ArguSection
              key={index}
              index={index}
              article={article}
              setArticle={setArticle}
              showDelSec={showDelSec}
              showDelSec={showDelSec}
              showDelPoint={showDelPoint}
              setShowDelPoint={setShowDelPoint}
              handleDelSection={() => handleDelSection(item.id)}
            />
          );
        })}

        <ArguItem
          typeInfo={sectionBtn}
          fileInfo={fileInfo}
          setFileInfo={setFileInfo}
          showDelSec={showDelSec}
          setShowDelSec={setShowDelSec}
          handleCreate={handleAddSection}
          handleDeleteShow={handleDelSectionShow}
        />
      </ArguGetterWrap>
    </>
  );
}

export default App;
