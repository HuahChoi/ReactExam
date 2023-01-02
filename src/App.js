import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './components/Home.js';
import SearchResult from './components/SearchResult.js';
import SearchInput from './components/SearchInput.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchInput/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/search' element={<SearchResult/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
