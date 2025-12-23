import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // ✅ pages/Main.tsx 불러오기
import Films from './pages/Films/Films'; // ✅ pages/Films.tsx 불러오기
import MovieDetailWrapper from './pages/MovieDetailWrapper/MovieDetail';
import WorkAtPixar from './pages/WorkAtPixar/WorkAtPixar';

function App() {
  return (
      <Routes>
        {/* 기본 경로(/)에서 Main 페이지 렌더링 */}
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<MovieDetailWrapper />} />
        <Route path="/work-at-pixar" element={<WorkAtPixar />} />
      </Routes>
  );
}

export default App;