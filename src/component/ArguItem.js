import React, { useState, useRef } from 'react';
// CSS in JS
import styled from '@emotion/styled';
// 按鈕音效
import { handleAudioClick } from 'utils/handleAudio';
// Icon
import { FaPlus, FaListOl, FaRegTrashAlt } from 'react-icons/fa';
import select_icon from 'img/select_icon.svg';
//---------------------------------------

function ArguItem(props) {
  const [nowSelect, setNowSelect] = useState('');
  const {
    typeInfo,
    fileInfo,
    setFileInfo,
    handleCreate,
    handleDeleteShow,
    showDel,
    setParentSelect,
    handleTextareaContent,
  } = props;
  const {
    field,
    itemType,
    label,
    options,
    content,
    placeholder,
    class_label,
    hr,
    isAddBtn,
    isDelBtn,
    isSortBtn,
    isInputBorder,
  } = typeInfo;
  const refTextarea = useRef(null);
  //------------

  return (
    <>
      <ArguMakerWrap
        className="form-group row ml-0 font-weight-bold"
        isInputBorder={isInputBorder}
        select_icon={select_icon}
      >
        {/* normal */}
        {itemType[0] === 'text' && (
          <label
            className={`col-2 col-form-label rounded col-form-label-sm text-center ${class_label}`}
            htmlFor={field}
          >
            {label}
          </label>
        )}
        {/* select */}
        {itemType[0] === 'select' && (
          <>
            <select
              className={`col-2 col-form-label col-form-label-sm form-control form-control-sm ${class_label}`}
              value={nowSelect}
              onChange={(e) => {
                setNowSelect(e.target.value);
                setParentSelect && setParentSelect(e.target.value);
              }}
            >
              {options.map(({ value, label, placeholder }, index) => (
                <option key={index} hidden={!value} value={value}>
                  {value ? label : placeholder}
                </option>
              ))}
            </select>
            {/* <img src={select_icon} alt="" /> */}
          </>
        )}

        <div className="col-10  d-flex align-items-center">
          {/*  單行文字輸入框 */}
          {itemType[1] === 'input' && (
            <input
              type="input"
              // name={field}
              className="form-control form-control-sm am-content"
              id={field}
              placeholder={placeholder}
              value={fileInfo[field]}
              onChange={(e) => {
                setFileInfo((pre) => ({ ...pre, [[field]]: e.target.value }));
              }}
            />
          )}

          {/* 純文本 */}
          {itemType[1] === 'text' && (
            <div className="form-control form-control-sm border-0 am-content">
              {fileInfo && fileInfo[field] ? fileInfo[field] : content}
            </div>
          )}

          {/* 多行文字輸入框 */}
          {itemType[1] === 'textarea' && (
            <textarea
              ref={refTextarea}
              className="form-control form-control-sm am-content"
              id={field}
              rows="1"
              placeholder={placeholder}
              value={fileInfo && fileInfo[field]}
              onChange={(e) => {
                fileInfo &&
                  setFileInfo((pre) => ({ ...pre, [[field]]: e.target.value }));
                handleTextareaContent && handleTextareaContent(e.target.value);

                refTextarea.current.style.height = 'auto';
                refTextarea.current.style.height =
                  refTextarea.current.scrollHeight + 'px';
              }}
            />
          )}

          {/*  功能鍵 */}
          {itemType[1] === 'buttons' && (
            <>
              {isAddBtn && (
                <div
                  className="btn-wrap icon-plus"
                  onClick={() => {
                    handleAudioClick();
                    handleCreate();
                  }}
                >
                  <FaPlus />
                </div>
              )}
              {isSortBtn && (
                <div className="btn-wrap" onClick={() => handleAudioClick()}>
                  <FaListOl />
                </div>
              )}
              {isDelBtn && (
                <div
                  className={`btn-wrap ${showDel && 'text-danger'}`}
                  onClick={() => {
                    handleAudioClick();
                    handleDeleteShow();
                  }}
                >
                  <FaRegTrashAlt />
                </div>
              )}
            </>
          )}
        </div>
      </ArguMakerWrap>

      {hr === 'border-1' && <hr />}
      {hr === 'border-2' && (
        <div className="hr-dark" />
        //  style={{ borderBottom: '2px solid #ccc', margin: '16px 0', }}
      )}
    </>
  );
}

// CSS
const ArguMakerWrap = styled.div`
  .file {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .am-content {
    color: #111;
  }
  input,
  textarea {
    border: ${({ isInputBorder }) => (isInputBorder ? 1 : 0)};
    font-size: initial;
  }
  textarea {
    resize: none;
    overflow: hidden;
  }

  select {
    text-align-last: center;

    border: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    background-image: url(${select_icon});
    background-position: 90%;
    background-repeat: no-repeat;
    background-size: 7px;
  }
  select::-ms-expand {
    display: none;
  }

  .label-level-1 {
    background-color: #444;
    color: #eee;
  }
  .label-level-2 {
    background-color: #888;
    color: #fff;
  }
  .label-level-3 {
    background-color: #bbb;
  }
  .label-level-4 {
    background-color: #eee;
  }
  .bg-cus-purple {
    background-color: #7c58bb;
  }

  .btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: 32px;
    height: 32px;
    margin-left: 25px;
    transition: 0.2s;
    position: relative;
    cursor: pointer;
    & > svg {
      z-index: 1;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 32px;
      height: 32px;
      background-color: #ddd;
      border-radius: 999px;
      z-index: 0;
      transition: 0.2s;
      transform-origin: center;
    }
    &:active {
      transition: 0.2s;
      transform: translateY(5px);
    }
  }
  .hr-dark {
    border-bottom: 2px solid #ccc;
    margin: 16px 0 16px 0;
  }
`;
export default ArguItem;
