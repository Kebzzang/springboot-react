import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
  const { id, title, author } = props.book;

  return (
    <Link to={'/post/' + id} style={{ textDecoration: 'none', color: 'black' }}>
      <Card>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {title}
            </p>
            <footer className="blockquote-footer">
         <cite title="author">{author}</cite>
      </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default BookItem;
