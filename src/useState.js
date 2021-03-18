import { useState } from 'react';
import './App.css';
import Sub from './Sub';
// 변수 선언은 let, const로 하기
//if 사용 불가능 -> 삼항연산자 가능
//조건 && '출력'
//css 디자인 -내부에 적기 -외부 파일 -라이브러리 사용(부트스트랩, component-styled)

function App() {
  // let list = [1, 2, 3]; //let이랑 const만 쓰기
  // let number = 1; //상태값이 아님.
  //상태 값 변경시 UI 변경이 될 수 있게 하자.
  // const [number, setNumber] = useState(1); //hooks 라이브러리
  //  const add = () => {
  //   setNumber(number + 1); //리액트한테 number값 변경할게 라고 요청하는 것임.
  //   console.log('add', number);
  // };\
  const [num, setNum] = useState(5);
  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '장보고' },
    { id: 3, name: '대조영' },
    { id: 4, name: '임꺽정' },
  ];
  console.log('APP 실행댐');
  const [users, setUsers] = useState(sample); //레퍼런스 변경되어야 동작!!
  const download = () => {
    setUsers([...sample, { id: num, name: '윤희람' }]);
    setNum(num + 1);
  };
  //렌더링시점=상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id}, {u.name}
        </h1>
      ))}

      <Sub />
    </div>
  );
}

export default App;
