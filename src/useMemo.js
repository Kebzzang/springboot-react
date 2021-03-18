import './App.css';
import { useMemo, useState } from 'react';
function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum 함수 실행됨: ', sum);
    return sum;
  };
  const addResult = useMemo(() => getAddResult(), [list]); //나는 이 함수를 기억하고 있을게!!
  return (
    <div>
      <button
        onClick={() => {
          setStr('하이룽');
        }}
      >
        문자변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트값추가
      </button>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str}: {addResult}
      </div>
    </div>
  );
}

export default App;
