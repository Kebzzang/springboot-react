import React from 'react';

const WritePage = () => {
  const handleWrite = () => {
    //리스트 페이지의 셋포스트 호출 후 저 인풋 타이틀에 담긴 값으로 세팅해야댐
    let post = { id: 6, title: 'input6', content: 'content6' };
    //setPosts();
  };
  return (
    <div>
      <h1>글쓰기 페이지입니다. </h1>
      <hr />
      <form>
        <input type="text" placeholder="Type title here" />
        <button type="button" onClick={handleWrite}>
          submit
        </button>
      </form>
    </div>
  );
};

export default WritePage;
