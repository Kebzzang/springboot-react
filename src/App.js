import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Bottom from './components/Bottom';
import Top from './components/Top';
function App() {
  
  return (
    <div className="container">
      <h1>최상단화면!!</h1>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
