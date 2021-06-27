import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'holderjs';
// Components
import Header from './Components/Header'
import Body from './Components/Body'

function App() {
  return (
      <div className="App">
        <Header/>
        <Body />
      </div>
  );
}

export default App;
