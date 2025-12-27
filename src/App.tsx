import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import Films from './pages/Films/Films';
import MovieDetailWrapper from './pages/MovieDetailWrapper/MovieDetail';
import WorkAtPixar from './pages/WorkAtPixar/WorkAtPixar';
import PixarEvent from './pages/PixarEvent';

function App() {
  return (
      <Routes>
        {/* 기본 경로(/)에서 Main 페이지 렌더링 */}
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<MovieDetailWrapper />} />
        <Route path="/pixar-event" element={<PixarEvent />} />
        <Route path="/work-at-pixar" element={<WorkAtPixar />} />
      </Routes>
  );
}

export default App;