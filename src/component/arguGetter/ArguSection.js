import React, { useState, useEffect, useRef } from 'react';
// CSS in JS
import styled from '@emotion/styled';
// Icon
import { FaRegTrashAlt, FaTrashAlt } from 'react-icons/fa';
// 按鈕音效
import { handleAudioClick } from '../../utils/handleAudio';

//---------------------------------------
import ArguItem from '../../component/arguGetter/ArguItem';
//---------------------------------------
// field type
import typeInfo from '../../info/typeInfo';
const { pointBtn } = typeInfo;
//---------------------------------------

function ArguSection(props) {
  const [showDelPoint, setShowDelPoint] = useState(false);
  // point 選單狀態
  const [pointItemType, setPointItemType] = useState('point_1');
  const {
    index,
    sectionID,
    showDelSec,
    handleDelSection,
    handleAddPoint,
    handleDelPoint,
    article,
    setArticle,
  } = props;
  //---------------------------------------
  function handleDelPointShow() {
    setShowDelPoint(!showDelPoint);
  }

  useEffect(() => {
    if (!article[index].points.length) setShowDelPoint(false);
    // eslint-disable-next-line
  }, [article]);
  //---------------------------------------
  function handleSetTextarea(pointID, content) {
    let newArticle = JSON.parse(JSON.stringify(article));
    newArticle[index].points.forEach((item) => {
      if (item.id === pointID) item.content = content;
    });
    setArticle(newArticle);
  }

  //---------------------------------------

  const refTextarea = useRef(null);
  useEffect(() => {
    refTextarea.current.style.height = 'auto';
    refTextarea.current.style.height = refTextarea.current.scrollHeight + 'px';
    // eslint-disable-next-line
  }, [refTextarea.current]);
  //---------------------------------------
  return (
    <>
      <ArguSectionWrap className="card bg-light" showDelPoint={showDelPoint}>
        {/* 標題 */}
        <div className="h6 am-section-title">
          <span>段落 {index + 1}</span>
          {showDelSec && (
            // 刪除段落的按鈕
            <div
              className="d-inline-block"
              onClick={() => {
                handleAudioClick();
                handleDelSection();
              }}
            >
              <FaRegTrashAlt />
            </div>
          )}
          <span className="ml-auto text-muted">
            小計: {article[index].content.replace(/ /g, '').length} 字
          </span>
        </div>
        {/* --------------------------------------------- */}

        {/* 多行文字輸入框 */}
        <textarea
          ref={refTextarea}
          className="form-control form-control-sm am-section-content"
          rows="1"
          placeholder="請填入稿件段落..."
          value={article[index].content}
          onChange={(e) => {
            let newArticle = JSON.parse(JSON.stringify(article));
            newArticle[index].content = e.target.value;
            setArticle(newArticle);
            refTextarea.current.style.height = 'auto';
            refTextarea.current.style.height =
              refTextarea.current.scrollHeight + 'px';
          }}
        />
        {/* --------------------------------------------- */}

        {article[index].points.map(({ id, typeInfoKey }, index1) => {
          return (
            <div key={index1} className="point-wrap">
              {/* // 刪除point的按鈕 */}
              <div
                className="del-btn"
                onClick={() => {
                  handleAudioClick();
                  handleDelPoint(sectionID, id);
                }}
              >
                <FaTrashAlt />
              </div>
              <div className="point-item">
                <ArguItem
                  typeInfo={typeInfo[typeInfoKey]}
                  handleSetTextarea={(content) =>
                    handleSetTextarea(id, content)
                  }
                  stateTextarea={article[index].points[index1].content}
                />
              </div>
            </div>
          );
        })}

        {/* --------------------------------------------- */}

        <ArguItem
          typeInfo={pointBtn}
          showDel={showDelPoint}
          handleCreate={() => handleAddPoint(pointItemType)}
          handleDeleteShow={
            article[index].points.length ? handleDelPointShow : () => {}
          }
          setParentSelect={setPointItemType}
        />
      </ArguSectionWrap>
    </>
  );
}

const ArguSectionWrap = styled.div`
  margin: 0 -5px 1rem -5px;
  padding: 1rem 10px 0 10px;
  .am-section-title {
    display: flex;
    align-items: center;
    svg {
      margin-left: 10px;
      margin-top: -3px;
      color: #dc3545;
    }
  }
  .am-section-content {
    color: #111;
    margin-bottom: 1rem;
    font-size: initial;
    resize: none;
    overflow: hidden;
  }
  .point-wrap {
    display: flex;
    .del-btn {
      width: ${({ showDelPoint }) => (showDelPoint ? '10%' : '0%')};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      overflow: hidden;
      transition: 0.2s;
      margin-bottom: 1rem;
      position: relative;
      color: #dc3545;
    }

    .point-item {
      width: 100%;
    }
  }
`;
export default ArguSection;
