import logo from './logo.svg';
import './App.css';
import TestReact from './components/testre';

function App() {
  return (
    <div className="App">
    	<header className="App-header">
        	<TestReact
        		title = {'test'}
        		contents = {'reactreact'}
        	/>
        	{/* <img src={logo} className="App-logo" alt="logo" /> */}
      	</header>
    </div>
  );
}

export default App;
