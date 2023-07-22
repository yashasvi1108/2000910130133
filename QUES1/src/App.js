import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Modify Switch to Route
import EnterURLsPage from './components/EnterURLsPage';
import MergedNumbersPage from './components/MergedNumbersPage';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Enter URLs</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={EnterURLsPage} /> {/* Use Route instead of Switch */}
        <Route path="/mergedNumbers" component={MergedNumbersPage} /> {/* Use Route instead of Switch */}
      </div>
    </Router>
  );
}

export default App;
