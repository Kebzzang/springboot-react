import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import ListPage from './pages/ListPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login" exact={true} component={LoginPage} />
      <Route path="/write" exact={true} component={WritePage} />
      <Route path="/list" exact={true} component={ListPage} />
      <Footer />
    </div>
  );
}

export default App;
