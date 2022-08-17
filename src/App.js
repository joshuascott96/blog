import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import useContentful from './useContentful';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WavesBottom from './components/WavesBottom';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  const [articles, setArticles] = useState([]);
  const { getAuthors } = useContentful();

  useEffect(() => {
    getAuthors().then((response) => setArticles(response))
  })

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home articles={articles} />} />
          <Route path='/post/:postId' element={<BlogPost articles={articles} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <WavesBottom />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
