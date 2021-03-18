import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ListPage = () => {
  const [no, setNo] = useState(6);
  const [post, setPost] = useState({ id: no, title: '', content: '' });
  const [posts, setPosts] = useState([
    { id: 1, title: '내용1', content: '컨텐트1' },
    { id: 2, title: '내용2', content: '컨텐트2' },
    { id: 3, title: '내용3', content: '컨텐트3' },
    { id: 4, title: '내용4', content: '컨텐트4' },
    { id: 5, title: '내용5', content: '컨텐트5' },
  ]);
  const handleWrite = (e) => {
    //리스트 페이지의 셋포스트 호출 후 저 인풋 타이틀에 담긴 값으로 세팅해야댐
    e.preventDefault();

    setPosts([...posts, post]);
    setNo(no + 1);
  };

  // const handleChangeContent = (e) => {
  //   console.log(e.target.value);
  //   setPost({content:e.target.value});
  // };
  // const handleChangeTitle = (e) => {
  //   console.log(e.target.value);
  //   setPost({title:e.target.value});
  // };
  const handleForm = (e) => {
    //compute property names 문법-키값 동적 할당
    setPost({ ...post, id: no, [e.target.name]: e.target.value });
  };
  const handleDelete = (e) => {
    //필터로 구현!!
    console.log('target::', e.target.name);
    setPosts(
      posts.filter((n) => {
        return n.id != e.target.name;
      }),
    );
  };
  return (
    <div style={{ minHeight: 580 }}>
      <h1>리스트 페이지입니다. </h1>
      <form onSubmit={handleWrite}>
        <input
          type="text"
          placeholder="Type title here"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="Type content here"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="submit">submit</button>
      </form>
      <hr />
      <br />
      {posts.map((apost) => (
        <Container>
          <Card
            className="justify-content-md-center"
            style={{ width: '60rem', margin: '0 0 10px 0' }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>
                    #: {apost.id} {apost.title}
                  </Card.Title>
                  <Card.Text>{apost.content}</Card.Text>
                </Col>
                <Col xs lg="1">
                  <button name={apost.id} onClick={handleDelete}>
                    Delete
                  </button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      ))}
      <hr />
    </div>
  );
};

export default ListPage;
