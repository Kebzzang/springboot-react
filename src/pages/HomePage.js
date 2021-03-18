import React, { useEffect, useState } from 'react';
import Home from '../components/home/Home';

const HomePage = () => {
  //http ajax request
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState([]);
  useEffect(() => {
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    setBoards([...data]);
    setUser({ id: 1, username: 'keb' });
    //setNumber(number + 1);
  }, []); //빈 배열이면 어디에도 의존하지 않기에 최초에 한번만 실행됨
  console.log('number::::', number);
  return (
    <div>
      <Home
        boards={boards}
        setBoards={setBoards}
        setNumber={setNumber}
        number={number}
        user={user}
      />
    </div>
  );
};

export default HomePage;
