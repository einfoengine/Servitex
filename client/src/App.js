import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'holderjs';
// Components
import Header from './Components/Header'
import Routes from './Components/Routes'

function App() {
  return (
      <div className="App">
        <Header/>
        <Routes />
      </div>
  );
}

export default App;
