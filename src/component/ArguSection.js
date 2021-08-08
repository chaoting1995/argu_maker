import React, { useState, useRef } from 'react';
// CSS in JS
import styled from '@emotion/styled';
// 按鈕音效
import { handleAudioClick } from 'utils/handleAudio';
// Icon
import { FaRegTrashAlt } from 'react-icons/fa';

//---------------------------------------
import ArguItem from 'component/ArguItem';
//---------------------------------------
// field type
import typeInfo from 'info/typeInfo';
const { pointBtn } = typeInfo;
//---------------------------------------

function ArguSection(props) {
  const [localContent, setLocalContent] = useState('');
  const {
    //   article, setArticle,
    index,
    showDelSec,
    showDelPoint,
    setShowDelPoint,
    handleDelSection,
  } = props;
  //---------------------------------------
  function handleAddPoint() {}
  function handleDelPoint() {}

  //---------------------------------------

  const refTextarea = useRef(null);
  return (
    <>
      <ArguSectionWrap className="card bg-light">
        {/* 標題 */}
        <div className="h6">
          段落 {index + 1}{' '}
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
        </div>

        {/* 多行文字輸入框 */}
        <textarea
          ref={refTextarea}
          className="form-control form-control-sm am-content"
          rows="1"
          placeholder="請填入稿件段落..."
          value={localContent}
          onChange={(e) => {
            setLocalContent(e.target.value);
            refTextarea.current.style.height = 'auto';
            refTextarea.current.style.height =
              refTextarea.current.scrollHeight + 'px';
          }}
        />

        <ArguItem
          typeInfo={pointBtn}
          showDelPoint={showDelPoint}
          setShowDelPoint={setShowDelPoint}
          handleCreate={handleAddPoint}
          handleDelete={handleDelPoint}
        />
      </ArguSectionWrap>
    </>
  );
}

const ArguSectionWrap = styled.div`
  margin: 0 -5px 1rem -5px;
  padding: 1rem 10px 0 10px;

  .am-content {
    color: #111;
  }
  textarea {
    font-size: initial;
    resize: none;
    overflow: hidden;
    margin-bottom: 1rem;
  }
`;
export default ArguSection;
