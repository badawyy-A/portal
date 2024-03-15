import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import SearchPage from './pages/SearchPage.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index  element={<HomePage/>}/>
            <Route  path='/home' element={<HomePage/>}/>
            <Route path='/home/search' element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
