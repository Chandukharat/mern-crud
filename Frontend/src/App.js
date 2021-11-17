import react from "react";
import View from "./View";
import Update from './Update'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Post from "./Post";


function App() {
  return (

    <Router>
   
      <div className="App">

      {/* <Post/> */}
      <Routes>
        <Route exact path="/" element={<View />}/>
        <Route exact path="/update/:id" element={<Update />}/>
      </Routes>
      
      
    </div>

    </Router>
   
  );
}

export default App;
