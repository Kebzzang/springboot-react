import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { increase, decrease } from './../store';
const Bottom = () => {
  const dispatcher = useDispatch();
  return (
    <div className="sub_container">
      <h1>Bottom</h1>
      <button onClick={() => dispatcher(increase('kebzzang'))}>증가</button>

      <button onClick={() => dispatcher(decrease('keb'))}>감소</button>
    </div>
  );
};

export default Bottom;
