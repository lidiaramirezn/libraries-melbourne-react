import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import { SearchBook } from './pages/SearchBook';

function App() {
  return (    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/libraries-melbourne-react" element={<Home/>}></Route>
      <Route path="/library/:id" element={<Library/>}></Route>
      <Route path="/search-book" element={<SearchBook/>}></Route>
    </Routes>
  )
}

export default App
