import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookPage from './pages/BookPage';
import Header from './components/Header';
import Category from './components/Category/Category';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<BookPage />} />
      <Route path="Categories" element={<Category />} />
    </Routes>
  </>
);

export default App;
