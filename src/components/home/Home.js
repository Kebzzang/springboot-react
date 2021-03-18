import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

//부모로부터 받아온 데이터를 가지고 스타일링을 하고 싶어 그럼??

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'keb' ? 'blue' : 'red')};
`;
//버튼 스타일 상속!!
const StyledAddButton = styled(StyledDeleteButton)`
  background-color: green;
`;
const Home = (props) => {
  const { number, setNumber, boards, setBoards, user } = props;

  return (
    <div>
      <Button variant="primary">Primary</Button>
      <h1>홈: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>
        받은 넘버 증가버튼!!
      </button>
      <StyledAddButton user={user} onClick={() => setNumber(number - 1)}>
        받은 넘버 감소버튼!!
      </StyledAddButton>
      <h1>홈페이지입니다. </h1>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목: {board.title} 내용: {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
