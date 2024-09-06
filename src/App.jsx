import { Routes, Route } from 'react-router-dom';
import About from './component/about';
import Home from './component/home';
import Single from './component/single_page';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='single/:id' element={<Single />} />
      </Routes>
    </div>
  );
};

export default App;
