import logo from './logo.svg';
import './App.css';
import SearchAppBar from './NavBar';

import './new.css';
import SubNav from './SubNav';
import Section from './section';



function App() {
  return (
    <div className="App">
    
      {/* <div> */}
      <SearchAppBar/>
      <SubNav/>
      <Section/>
    
      {/* </div> */}
  
  
    </div>
  );
}

export default App;
