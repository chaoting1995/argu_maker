import React, { useState, useEffect } from 'react';
// 時間格式
import moment from 'moment';
//---------------------------------------
import long_logo from 'img/long_logo.svg';
//---------------------------------------
// field type
import typeInfo, { itemTypeInfoArr } from 'info/typeInfo';
//---------------------------------------
import ArguItem from 'component/ArguItem';
import ArguSection from 'component/ArguSection';
//---------------------------------------
// CSS in JS
import styled from '@emotion/styled';

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

  // 段落
  const [article, setArticle] = useState([
    {
      id: 1, //timestamp
      content: '',
      points: [
        {
          id: 1, //timestamp
          content: '',
          typeInfoKey: 'point_1',
        },
      ],
    },
  ]);

  //刪除按鈕的顯示狀態
  const [showDelSec, setShowDelSec] = useState(false);

  //---------------------------------------
  const { sectionBtn } = typeInfo;
  //---------------------------------------

  useEffect(() => {
    let AM_data = JSON.parse(localStorage.getItem('AM_data'));
    if (AM_data) {
      setFileInfo(AM_data.fileInfo);
      setArticle(AM_data.article);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('AM_data', JSON.stringify({ fileInfo, article }));
  }, [fileInfo, article]);

  //---------------------------------------
  function handleAddSection() {
    const newSection = {
      id: +new Date(), //timestamp
      content: '',
      points: [],
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
  useEffect(() => {
    if (!article.length) setShowDelSec(false);
  }, [article]);
  //---------------------------------------
  function handleAddPoint(sectionID, typeInfoKey) {
    let newArticle = JSON.parse(JSON.stringify(article));
    const newPoint = {
      id: +new Date(), //timestamp
      content: '',
      typeInfoKey: typeInfoKey,
    };
    newArticle.forEach((item) => {
      if (item.id === sectionID) item.points.push(newPoint);
    });
    setArticle(newArticle);
  }

  function handleDelPoint(sectionID, pointID) {
    let newArticle = JSON.parse(JSON.stringify(article));
    newArticle.forEach((item) => {
      if (item.id === sectionID)
        item.points = item.points.filter((item) => item.id !== pointID);
    });
    setArticle(newArticle);
  }
  //---------------------------------------
  return (
    <>
      <ArguGetterWrap className="container">
        <div className="long-logo-wrap">
          <img src={long_logo} alt="" />
        </div>
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
              sectionID={item.id}
              article={article}
              setArticle={setArticle}
              showDelSec={showDelSec}
              handleDelSection={() => handleDelSection(item.id)}
              handleAddPoint={(itemType) => handleAddPoint(item.id, itemType)}
              handleDelPoint={handleDelPoint}
            />
          );
        })}

        <ArguItem
          typeInfo={sectionBtn}
          fileInfo={fileInfo}
          setFileInfo={setFileInfo}
          showDel={showDelSec}
          setShowDelSec={setShowDelSec}
          handleCreate={handleAddSection}
          handleDeleteShow={article.length ? handleDelSectionShow : () => {}}
        />
      </ArguGetterWrap>
    </>
  );
}

// CSS
const ArguGetterWrap = styled.div`
  padding-bottom: 76px;
  .long-logo-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 70px;
    ${'' /* background-color: #faf; */}
    img {
      width: 210px;
      object-fit: contain;
    }
  }

  .hr-dark {
    border-bottom: 2px solid #ccc;
    margin: 16px 0 16px 0;
  }
`;

export default App;
