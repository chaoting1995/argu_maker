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
  useEffect(() => {
    refTextarea.current.style.height = 'auto';
    refTextarea.current.style.height = refTextarea.current.scrollHeight + 'px';
    // eslint-disable-next-line
  }, [article]);
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
  const refMask = useRef(null);
  useEffect(() => {
    const point_1_content =
      article[index].points.find((o) => o.typeInfoKey === 'point_1') &&
      article[index].points.find((o) => o.typeInfoKey === 'point_1').content;

    const newStr = article[index].content.replace(
      point_1_content,
      `<span>${point_1_content}</span>`
    );
    refMask.current.innerHTML = newStr;
    // eslint-disable-next-line
  }, [article, article[index].content]);
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
            小計:{' '}
            {
              article[index].content
                .replace(/ /g, '')
                .replace(/\r\n/g, '')
                .replace(/\n/g, '').length
            }{' '}
            字
          </span>
        </div>
        {/* --------------------------------------------- */}

        {/* 多行文字輸入框 */}
        <div className="position-relative">
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
          <pre
            ref={refMask}
            className="form-control form-control-sm am-section-content"
          ></pre>
        </div>
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
            article[index].points.length ? handleDelPointShow : null
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
      cursor: pointer;
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
      svg {
        cursor: pointer;
      }
    }

    .point-item {
      width: 100%;
    }
  }
  pre {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 1rem);
    pointer-events: none;
    background-color: transparent;
    color: rgba(0, 0, 0, 0) !important;

    white-space: pre-wrap;
    border-top: 2px solid rgba(0, 0, 0, 0);
  }
  pre > span {
    position: relative;
    ${'' /* color: #7b141e; */}
  }
  pre > span:after {
    content: '';
    position: absolute;
    top: calc(50% - 65%);
    left: calc(50% - 55%);
    width: 110%;
    height: 130%;
    border-radius: 15px;
    background-color: rgba(250, 0, 25, 0.25);
  }
`;
export default ArguSection;
