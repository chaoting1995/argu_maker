import React, { useState, useEffect, useRef } from 'react';
//---------------------------------------
// CSS in JS
import styled from '@emotion/styled';
// 按鈕音效
import { handleAudioClick } from '../../utils/handleAudio';
//---------------------------------------
import { Modal, Alert, Accordion } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
// Icon
import { FaCut } from 'react-icons/fa';

//---------------------------------------

function ArguCutModal(props) {
  const { show, setShow, setArticle } = props;

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <span> 快速分段</span> {` `}
            <FaCut style={{ fontSize: '18px' }} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ArguCutModalContent setShow={setShow} setArticle={setArticle} />
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ArguCutModal;

//---------------------------------------

function ArguCutModalContent(props) {
  const { setShow, setArticle } = props;
  //---------------------------------------
  const [originArticle, setOriginArticle] = useState('');
  //---------------------------------------
  const [copyAlert, setCopyAlert] = useState(['', '']);
  const [cutAlert, setCutAlert] = useState(['', '']);

  //---------------------------------------
  const refTextarea = useRef(null);
  //---------------------------------------
  useEffect(() => {
    refTextarea.current.style.height = 'auto';
    refTextarea.current.style.height = refTextarea.current.scrollHeight + 'px';
    // eslint-disable-next-line
  }, [refTextarea.current]);

  //---------------------------------------
  function handleCopy() {
    // navigator.clipboard.writeText('8< - - - - - - -');

    navigator.clipboard
      .writeText('8< - - - - - - -')
      .then(() => {
        // 文本已經成功複製到剪切板
        setCopyAlert(['primary', '已複製 8< - - - - - - -']);
        setTimeout(() => setCopyAlert(false), 2000);
      })
      .catch((err) => {
        // 如果用戶無法複製，則拋出異常
        setCopyAlert(['warning', '請手動複製 8< - - - - - - -']);
      });
  }

  //---------------------------------------
  function handleCutToImport() {
    // 資料預處理 ----------------------------------
    // 切割段落
    let newArticle = originArticle.split('8< - - - - - - -');

    // 若有段落為空、回車，排除
    newArticle = newArticle.filter(
      (item) =>
        !!item.replace(/ /g, '').replace(/\r\n/g, '').replace(/\n/g, '').length
    );
    // 格式檢查，不通過 -------------------------------
    // 若無內容 => 不匯出，不關閉modal
    if (newArticle.length === 0 || !newArticle[0].length) {
      setCutAlert(['danger', '尚未匯入任何稿件']);
      setTimeout(() => setCutAlert(['success', '']), 2000);
    }
    // 若有內容，無分段 => 不匯出，不關閉modal
    if (newArticle.length === 1 && newArticle[0].length) {
      setCutAlert(['danger', '尚未剪裁任何段落']);
      setTimeout(() => setCutAlert(['', '']), 2000);
    }
    // 格式檢查，通過 ---------------------------------
    // 若有內容，有分段
    if (newArticle.length > 1) {
      // 將段落塞入指定資料格式
      newArticle = newArticle.map((item, index) => {
        return {
          id: +new Date() + index, //timestamp
          content: item,
          points: [],
        };
      });
      setArticle((pre) => [...pre, ...newArticle]);

      // 匯出成功
      setCutAlert(['success', '段落剪裁完成']);
      setTimeout(() => setCutAlert(['', '']), 2000);

      // 關閉Modal
      setTimeout(() => setShow(false), 2000);
    }
  }

  //---------------------------------------

  return (
    <>
      <ArguCutModalContentWrap>
        {/* <h2 className="mx-auto mt-2 mb-4 text-center">
        <FaCut />
        <span>段落快速裁切</span>
      </h2> */}
        <p style={{ fontSize: '14px' }} className="text-muted">
          協助您將切好的稿件，快速匯入段落資訊卡中。
        </p>
        <label className="w-100">
          <h6 className="text-primary">1. 貼入稿件內容</h6>
          {/* 多行文字輸入框 */}
          <textarea
            ref={refTextarea}
            className="form-control form-control-sm am-rwd-text"
            rows="1"
            placeholder="請填入稿件..."
            value={originArticle}
            onChange={(e) => {
              setOriginArticle(e.target.value);
              refTextarea.current.style.height = 'auto';
              refTextarea.current.style.height =
                refTextarea.current.scrollHeight + 'px';
            }}
          />
        </label>

        {/* --------------------------------------------- */}
        <h6 className="text-primary">2. 複製裁切符，貼入稿件中</h6>

        <div className="btn-alert-wrap form-group row mx-0 mb-0 font-weight-bold">
          <button
            type="button"
            className="btn btn-primary btn-sm text-center am-rwd-text mb-2"
            onMouseUp={() => {
              handleAudioClick();
              handleCopy();
            }}
          >
            剪裁符
          </button>

          <div className="am-rwd-text am-text form-control form-control-sm text-muted border-0 px-0 py-1 mb-2 position-relative">
            <span className="am-click-text">點選按鈕，</span>
            取得剪裁符，貼入稿件中
            <Alert
              variant={copyAlert[0] ? copyAlert[0] : 'primary'}
              className={`am-rwd-text am-alert text-center w-100 px-0 position-absolute  font-weight-normal ${
                copyAlert[1] && 'am-alert-show'
              }`}
              style={{ top: 0 }}
            >
              {copyAlert[1]}
            </Alert>
          </div>
        </div>
        <span id="cut-sign" className="d-none">
          {'8< - - - - - - -'}
        </span>
        {/* --------------------------------------------------- */}
        {/* <div className="btn-alert-wrap form-group row mx-0 font-weight-bold w-100"> </div> */}
        <Accordion>
          <CustomToggle eventKey="0">看範例</CustomToggle>
          <Accordion.Collapse eventKey="0">
            <div className="am-rwd-text am-text-intro font-weight-normal mb-2 rounded p-3">
              位好各位好各位好各位好，位好各位好各位好各位好各位好各位好，各位好各位好好各位好各位好各位好。
              <br />
              <span className="text-danger font-weight-bold">{`8< - - - - - - - `}</span>
              <br />
              我方認為我方認為我方認為，我方認為我方認為我方認為我方認為，我方認為我方認為我方認為我方認為。
              <br />
              <span className="text-danger font-weight-bold">{`8< - - - - - - - `}</span>
              <br />
              謝謝各位謝謝各位謝謝各位，謝謝各位謝謝各位謝謝各位謝謝各位，謝謝各位謝謝各位謝謝各位謝謝各位。
            </div>
          </Accordion.Collapse>
        </Accordion>

        <span id="cut-sign" className="d-none">
          {'8< - - - - - - -'}
        </span>
        {/* --------------------------------------------------- */}

        <h6 className="text-primary">3. 切分段落，並匯入段落資訊卡</h6>

        <div className="form-group row mx-0 font-weight-bold position-relative">
          <button
            type="button"
            className="btn btn-primary btn-sm text-center am-rwd-text mb-2"
            onClick={() => {
              handleAudioClick();
              handleCutToImport();
            }}
          >
            剪裁
          </button>
          <div className="am-rwd-text am-text form-control form-control-sm border-0 px-0 py-0 mb-2 position-relative">
            <Alert
              variant={cutAlert[0] ? cutAlert[0] : 'primary'}
              className={`am-rwd-text  am-alert  text-center w-100 px-0 position-absolute flex-grow-1 font-weight-normal ${
                cutAlert[1] && 'am-alert-show'
              }`}
            >
              {cutAlert[1]}
            </Alert>
          </div>
        </div>
      </ArguCutModalContentWrap>
    </>
  );
}
// -----------------------------------------------------
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey);

  return (
    <button
      onClick={() => {
        handleAudioClick();
        decoratedOnClick();
      }}
      type="button"
      className="btn btn-light btn-sm text-center am-rwd-text mb-2"
    >
      {children}
    </button>
  );
}
// -----------------------------------------------------
// CSS
const ArguCutModalContentWrap = styled.div`
  label,
  .am-rwd-text {
    font-size: 14px;
  }
  h6 {
    font-size: 15px;
  }
  textarea {
    color: #666;
    font-size: initial !important;
    resize: none;
    overflow: hidden;
  }
  & > h6 {
    margin-top: 30px;
  }
  button {
    white-space: nowrap;
  }
  .btn-alert-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn {
    width: 100%;
  }
  .am-text {
    text-align: center;
  }
  .am-click-text {
    display: none;
  }
  .am-text-intro {
    color: #41464b;
    background-color: #eee;
    border-color: #d3d6d8;
  }

  .am-alert {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    transition: 0.4s;
    opacity: 0;
    transform: translateY(-10px);
  }
  .am-alert-show {
    opacity: 1;
    transform: translateY(0px);
  }

  @media (min-width: 400px) {
    .am-click-text {
      display: inline;
    }
  }
  @media (min-width: 320px) {
    .btn-alert-wrap {
      flex-direction: row;
    }
    .btn {
      width: 25%;
    }
    .am-text {
      width: auto;
      flex-grow: 1;
      text-align: start;
      margin-left: 15px;
    }
    h6 {
      font-size: 17px;
    }
  }
`;
