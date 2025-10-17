import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // ✅ pages/Main.tsx 불러오기

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로(/)에서 Main 페이지 렌더링 */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;