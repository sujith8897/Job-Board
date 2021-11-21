import React from 'react'; 
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Home';
import Shortlisted from './Shortlisted';
import Rejected from './Rejected';
import User from './User';

function App() {
      return (
        <Router>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shortlisted" element={<Shortlisted/>}/>
            <Route path="/rejected" element={<Rejected/>}/>
            <Route path="/:id" element={<User/>}/>
          </Routes>
        
      </Router>
    );
    
}
export default App;