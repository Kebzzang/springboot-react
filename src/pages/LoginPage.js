import React from 'react';
import Login from '../components/Login/Login';

const LoginPage = (props) => {
  console.log("loginPage's props:::", props);

  console.log('id::::', props.match.params.id);

  return (
    <div>
      <button onClick={() => props.history.push('/')}>뒤로가기</button>
      <Login />
    </div>
  );
};

export default LoginPage;
