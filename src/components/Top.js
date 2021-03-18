import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
const Top = () => {
  const {username, number} = useSelector((store) => store);

  return (
    <div className="sub_container">
      <h1>TOP</h1>
      번호: {number}
      유저네임: {username}
    </div>
  );
};

export default Top;
