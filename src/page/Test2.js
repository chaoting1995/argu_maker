import React, { useState } from 'react';
function Test2() {
  // --------------------------------------------------

  let [fontSize, setFontSize] = useState(0);

  // --------------------------------------------------

  return (
    <>
      <h3>無障礙規範</h3>
      <div>● 行高至少為字體大小的1.5倍；</div>
      <div>● 段落間距至少是字體大小的2倍；</div>
      <div>● 字元間距至少為字體大小的0.12倍；中文字元0.14倍。</div>
      <div>● 字間距至少為字體大小的0.16倍。</div>
      <hr />
      <h3>CSS相關定義</h3>
      <div>字體大小 font-size</div>
      <div>行高 line-height</div>
      <div>字元間距 letter-spacing</div>
      <div>字間距 word-spacing /中文字</div>
      <div>段落間距 margin-bottom</div>
      <hr />
      <div>
        <h3>單位換算</h3>
        字體大小{' '}
        <input value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
        px
      </div>
      <div>
        行高: 至少<span className="text-danger">{fontSize * 1.5}</span>px
      </div>
      <div>
        段落間距: 至少<span className="text-danger">{fontSize * 2}</span>px
      </div>
      <div>
        字元間距: 至少 英文
        <span className="text-danger">{fontSize * 0.12}</span>px; 中文:
        <span className="text-danger">{fontSize * 0.14}</span>px
      </div>
      <div>
        字間距:<span className="text-danger">{fontSize * 0.16}</span>px
      </div>
    </>
  );
}
export default Test2;
