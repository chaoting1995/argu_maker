import React, { useState, useEffect } from 'react';
// 時間格式
import moment from 'moment';
//---------------------------------------

export default function AG() {
  //---------------------------------------
  //   基本資料
  const [fileInfo, setFileInfo] = useState({
    fileName: '',
    authName: '',
    timestamp: moment().format('YYYY-MM-DD HH:mm'),
    topic: '',
    side: '',
    // standard: '',
  });

  //刪除按鈕的顯示狀態
  const [showDelSec, setShowDelSec] = useState(false);
  const [showDelPoint, setShowDelPoint] = useState(false);

  const [pointLabel, setpPointLabel] = useState('重點');

  const [article, setArticle] = useState([
    {
      id: '', //timestamp
      title: '段落一', //自動
      content: '',
      point: [
        {
          id: '', //timestamp
          title: pointLabel, //動態
          content: '',
        },
        {
          id: '', //timestamp
          title: '成立', //動態
          content: '',
        },
        {
          id: '', //timestamp
          title: '目的', //動態
          content: '',
        },
      ],
    },
  ]);

  return <>{showDelSec && <button></button>}</>;
}
