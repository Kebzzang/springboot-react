import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import ListPage from './pages/ListPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      {/* <Route path="/login" exact={true} component={LoginPage} />
      <Route path="/write" exact={true} component={WritePage} />
      <Route path="/" exact={true} component={ListPage} /> */}
      <ListPage />
      <Footer />
    </div>
  );
}

export default App;
