export default async function handleLogin(body) {
  // 設定檔頭，資料類型(寫死為json格式)
  const url = `${process.env.REACT_APP_DEV_URL}/login`;
  const req = new Request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      api_key: 'argu-maker-authorized',
    },
    body: JSON.stringify(body),
    // body: new URLSearchParams(body).toString(),
  });

  // AJAX
  const res = await fetch(req);
  const obj = await res.json();

  // console.log('obj', obj);
  return obj;
}
