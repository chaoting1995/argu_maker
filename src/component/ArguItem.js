import React, { useState } from 'react';

// CSS in JS
import styled from '@emotion/styled';
// 按鈕音效
import { handleAudioClick } from 'utils/handleAudio';
// Icon
import { FaPlus, FaListOl, FaRegTrashAlt } from 'react-icons/fa';

//---------------------------------------

function ArguItem(props) {
  const [nowSelect, setNowSelect] = useState('');
  const { typeInfo, fileInfo, setFileInfo } = props;
  const {
    field,
    itemType,
    label,
    options,
    content,
    placeholder,
    class_file,
    class_label,
    hr,
  } = typeInfo;

  //------------

  return (
    <>
      <ArguMakerWrap className="form-group row  ml-0">
        {/* normal */}
        {itemType[0] === 'text' && (
          <label
            className={`col-2 col-form-label rounded col-form-label-sm text-center ${class_file} ${class_label}`}
            htmlFor={field}
          >
            {label}
          </label>
        )}
        {/* select */}
        {itemType[0] === 'select' && (
          <select
            className={`col-2 col-form-label col-form-label-sm form-control form-control-sm ${class_label}`}
            value={nowSelect}
            onChange={(e) => setNowSelect(e.target.value)}
          >
            {options.map(({ value, label, placeholder }, index) => (
              <option key={index} hidden={!value} value={value}>
                {value ? label : placeholder}
              </option>
            ))}
          </select>
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

          {/*  多行文字輸入框 */}
          {itemType[1] === 'textarea' && (
            <textarea
              className="form-control form-control-sm am-content"
              id={field}
              rows="1"
              placeholder={placeholder}
              value={fileInfo && fileInfo[field]}
              onChange={(e) => {
                fileInfo &&
                  setFileInfo((pre) => ({ ...pre, [[field]]: e.target.value }));
              }}
            />
          )}

          {/* 多行文字輸入框 + select 版本
          {field === 'position' && itemType[1] === 'textarea' && (
            <textarea
              className="form-control form-control-sm am-content"
              id={field}
              rows="1"
              placeholder={placeholder}
              value={fileInfo && fileInfo[field]}
              onChange={(e) => {
                fileInfo &&
                  setFileInfo((pre) => ({ ...pre, [[field]]: e.target.value }));
              }}
            />
          )} */}

          {/*  功能鍵 */}
          {itemType[1] === 'buttons' && (
            <>
              <div className="pre-btn" onClick={() => handleAudioClick()}>
                <FaPlus />
              </div>
              <div className="pre-btn" onClick={() => handleAudioClick()}>
                <FaListOl />
              </div>
              <div className="pre-btn" onClick={() => handleAudioClick()}>
                <FaRegTrashAlt />
              </div>
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
    border: 0;
  }
  select {
    padding-left: 15px;
    padding-right: 0px;

    border: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
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
  .label-level-2 {
    background-color: #bbb;
  }
  .label-level-3 {
    background-color: #eee;
  }

  .pre-btn {
    font-size: 20px;
    width: 32px;
    height: 32px;
    margin-left: 25px;
    margin-top: -4px;
    transition: 0.3s;
    position: relative;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      top: 1px;
      left: -6px;
      width: 32px;
      height: 32px;
      background-color: #eee;
      border-radius: 999px;
      z-index: -1;
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
