import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header';
import Templates from './component/Templates';
import Journey from './component/Journey';

function App() {
  return (
    <div className="App">
  <Header/>
  <Templates/>
  <Journey/>
    </div>
  );
}

export default App;
