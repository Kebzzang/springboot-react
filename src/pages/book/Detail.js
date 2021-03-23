import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Detail = (props) => {
  const id = props.match.params.id;
  const [book, setBook] = useState({
    title: '',
    author: '',
    id: '',
  });
  const deleteBook = () => {
    fetch('http://localhost:8080/book/' + id, {
      method: 'DELETE',
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        if (res === 'ok') {
          //그대로 처리
          props.history.push('/');
        } else {
          alert('Failed to delete post');
        }
      });
  };
  const updateBook = () => {
    props.history.push('/updateForm/' + id);
  };

  useEffect(() => {
    fetch('http://localhost:8080/book/' + id, {})
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);
  return (
    <div>
      <Button variant="warning" onClick={() => updateBook(book.id)}>
        수정
      </Button>{' '}
      <Button variant="danger" onClick={deleteBook}>
        삭제
      </Button>
      <hr />
      <h1>{book.title}</h1>
      <h3>Written by. {book.author}</h3>
    </div>
  );
};

export default Detail;
