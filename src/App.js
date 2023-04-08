import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import PostSingle from './components/pages/PostSingle/PostSingle';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import CategoriesAll from './components/pages/CategoriesAll/CategoriesAll';
import CategorySingle from './components/pages/CategorySingle/CategorySingle';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesAll />} />
        <Route path="/categories/:name" element={<CategorySingle />} />
        <Route path="/post/:id" element={<PostSingle />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;