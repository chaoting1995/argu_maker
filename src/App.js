import React, { useEffect } from 'react';
//  樣式重置
import 'normalize.css';
//  制定路由
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
//--------------------所有頁面共用元件-----------------------//
// 選單
import Menubar from './component/modules/Menubar';
//頁面切換時，要用捲軸讓頁面回到最上方
import ScrollToTop from './component/modules/ScrollToTop';

//--------------------個別頁面元件-----------------------//
import ArguGetter from './page/ArguGetter';
import Test2 from './page/Test2';

// //-------------------------GA---------------------------//
// GA
import ReactGA from 'react-ga4';
// 讓GA能讀取react-router
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
  //-------------------------GA---------------------------//
  // 初始化
  useEffect(() => {
    ReactGA.initialize('G-FMVPFES0GP');
    ReactGA.send(window.location.pathname);
    // ReactGA.set({ page: location.pathname });
    // ReactGA.pageview(window.location.pathname);
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    //--------------------路由表-----------------------//

    // <Router>元件一定要放在最外層
    // <Router basename={process.env.PUBLIC_URL}>
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <Menubar />
        <ScrollToTop>
          {/* 放切頁時不重新渲染的部份 e*/}
          {/* 路由設定開始 */}
          <Switch>
            {/* 放"page資料夾"內的元件 */}
            <Route exact path="/">
              <ArguGetter />
            </Route>
            {/* for dev */}
            <Route exact path="/test2">
              <Test2 />
            </Route>
            {/* 根路徑或未定義路徑，一律導向到/home */}
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
        {/* 路由設定結束 */}

        {/* 放切頁時不重新渲染的部份 s*/}
        {/* 放切頁時不重新渲染的部份 e*/}
      </>
    </Router>
  );
}

export default App;
