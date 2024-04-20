import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import { SearchBook } from './pages/SearchBook';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/library/:id" element={<Library/>}></Route>
        <Route path="/search-book" element={<SearchBook/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
