import { useEffect, useState } from 'react';
import './App.css';
function App() {
  //1. 앱 함수가 최초 실행될 때 실행됨 .(그림이 그려질 때)
  //2. 상태 변수가 변경될 때
  //3. 의존 리스트 관리를 할 수 있다.
  const [search, setSearch] = useState([]);
  const [data, setData] = useState(0);
  const download = () => {
    //다운로드 받고(통신)
    let downloadData = 5; //가정
    setData(downloadData);
  };
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]); //search에 의존. search가 변경되면 유즈이펙트도 실행된다.
  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색
      </button>

      <h1>데이터: {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
